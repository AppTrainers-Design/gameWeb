// Jordan Game Companies: the directory's tabs, filters and search. Cards, the hill and helpers live in js/shared.js.
(function () {
  'use strict';

  const J = window.JGC;
  if (!J) return;
  const { D, $, $$, reduceMotion, byName, cardHTML, buildHill } = J;
  const scrollMode = () => (reduceMotion.matches ? 'auto' : 'smooth');

  const TABS = {
    studios: { items: D.studios, label: 'studios & publishers', title: 'Studios & publishers', placeholder: 'Search studios' },
    indies: { items: D.indies, label: 'indie developers', title: 'Indie developers', placeholder: 'Search indies' },
  };
  const ORDER = ['studios', 'indies'];
  const HASH = /^#(studios|indies)(?:\/([\w-]+))?$/;
  const state = { tab: 'studios', kind: 'all', q: '' };

  const directory = $('#directory');
  const tabs = $$('[role="tab"]');
  const panel = $('#panel');
  const panelTitle = $('[data-panel-title]');
  const cardsEl = $('[data-cards]');
  const emptyEl = $('[data-empty]');
  const emptyTitle = $('[data-empty-title]');
  const countLine = $('[data-count-line]');
  const kindGroup = $('.kind');
  const kindButtons = $$('[data-kind]');
  const search = $('#q');
  const clearButton = $('.search__clear');

  /* ───────── Text bound to the data ───────── */

  $$('[data-fig]').forEach((el) => { el.textContent = D.figures[el.dataset.fig]; });
  $$('[data-count]').forEach((el) => { el.textContent = TABS[el.dataset.count].items.length; });

  /* ───────── Cards ───────── */

  const haystack = (it) => [it.name, it.site, it.type, it.founded].concat(it.tags || []).filter(Boolean).join(' ').toLowerCase();

  function render() {
    const t = TABS[state.tab];
    const q = state.q.trim().toLowerCase();
    let list = t.items.slice().sort(byName);
    if (state.tab === 'studios' && state.kind !== 'all') list = list.filter((it) => it.type === state.kind);
    if (q) list = list.filter((it) => haystack(it).includes(q));

    cardsEl.innerHTML = list.map((it) => cardHTML(state.tab, it, { newTab: true })).join('');
    cardsEl.hidden = list.length === 0;
    emptyEl.hidden = list.length > 0;
    if (!list.length) {
      emptyTitle.textContent = q ? `No ${t.label} match “${state.q.trim()}”.` : `No ${t.label} are listed yet.`;
    }
    countLine.textContent = list.length === t.items.length
      ? `Showing all ${t.items.length} ${t.label}`
      : `Showing ${list.length} of ${t.items.length} ${t.label}`;
  }

  /* ───────── Tabs, type filter, search ───────── */

  function selectTab(name, { focus = false, updateHash = true } = {}) {
    if (!TABS[name]) return;
    state.tab = name;
    tabs.forEach((b) => {
      const on = b.dataset.tab === name;
      b.setAttribute('aria-selected', String(on));
      b.tabIndex = on ? 0 : -1;
      if (on && focus) b.focus();
    });
    panel.setAttribute('aria-labelledby', `tab-${name}`);
    panelTitle.textContent = TABS[name].title;
    kindGroup.hidden = name !== 'studios';
    search.placeholder = TABS[name].placeholder;
    if (updateHash) history.replaceState(null, '', `#${name}`);
    render();
  }

  tabs.forEach((b) => b.addEventListener('click', () => selectTab(b.dataset.tab)));
  $('[role="tablist"]').addEventListener('keydown', (e) => {
    const i = ORDER.indexOf(state.tab);
    const next = { ArrowRight: (i + 1) % ORDER.length, ArrowLeft: (i + ORDER.length - 1) % ORDER.length, Home: 0, End: ORDER.length - 1 }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    selectTab(ORDER[next], { focus: true });
  });

  function syncKind() {
    kindButtons.forEach((b) => {
      const on = b.dataset.kind === state.kind;
      b.setAttribute('aria-checked', String(on));
      b.tabIndex = on ? 0 : -1;
    });
  }
  kindButtons.forEach((b) => b.addEventListener('click', () => { state.kind = b.dataset.kind; syncKind(); render(); }));
  kindGroup.addEventListener('keydown', (e) => {
    const i = kindButtons.findIndex((b) => b.dataset.kind === state.kind);
    const n = kindButtons.length;
    const next = { ArrowRight: (i + 1) % n, ArrowDown: (i + 1) % n, ArrowLeft: (i + n - 1) % n, ArrowUp: (i + n - 1) % n }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    state.kind = kindButtons[next].dataset.kind;
    syncKind();
    kindButtons[next].focus();
    render();
  });

  function setQuery(value) {
    state.q = value;
    if (search.value !== value) search.value = value;
    clearButton.hidden = !value;
    render();
  }
  search.addEventListener('input', () => setQuery(search.value));
  search.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && search.value) { e.preventDefault(); setQuery(''); }
  });
  clearButton.addEventListener('click', () => { setQuery(''); search.focus(); });
  $('[data-clear]').addEventListener('click', () => { setQuery(''); search.focus(); });

  // 1–2 switch tabs, "/" jumps to search. Never while typing.
  document.addEventListener('keydown', (e) => {
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.target.closest && e.target.closest('input, textarea, select, [contenteditable="true"]')) return;
    if (e.key === '/') { e.preventDefault(); search.focus(); return; }
    const i = ['1', '2'].indexOf(e.key);
    if (i > -1) selectTab(ORDER[i]);
  });

  /* ───────── Addressable tabs and listings ───────── */

  function light(el) {
    el.classList.remove('is-lit');
    void el.offsetWidth; // restart the ring
    el.classList.add('is-lit');
    el.scrollIntoView({ behavior: scrollMode(), block: 'center' });
    el.focus({ preventScroll: true });
    clearTimeout(light.timer);
    light.timer = setTimeout(() => el.classList.remove('is-lit'), 2600);
  }

  function applyHash() {
    const m = HASH.exec(location.hash);
    if (!m) return;
    const [, tab, slug] = m;
    if (slug) {
      state.kind = 'all';
      syncKind();
      if (state.q) setQuery('');
    }
    selectTab(tab, { updateHash: false });
    const target = slug && document.getElementById(`${tab}-${slug}`);
    if (target) light(target);
    else directory.scrollIntoView({ behavior: scrollMode(), block: 'start' });
  }

  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a');
    if (!a || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const href = a.getAttribute('href') || '';
    if (!HASH.test(href)) return;
    e.preventDefault();
    if (location.hash !== href) history.pushState(null, '', href);
    applyHash();
  });
  window.addEventListener('hashchange', applyHash);

  /* ───────── Start ───────── */

  buildHill({ newTab: true });
  syncKind();
  const initial = HASH.exec(location.hash);
  if (initial) applyHash();
  else selectTab('studios', { updateHash: false });
})();
