// Jordan Game Companies: one listing's own page (listing.html?id=<slug>), built from js/data.js.
// Laid out like a company profile: breadcrumb, logo, name and type, About, and an information column. Every sentence is assembled from the listing's own fields; nothing is written per company.
(function () {
  'use strict';

  const J = window.JGC;
  if (!J) return;
  const { D, $, byName, esc, logoSrc, listingHref, findListing, typeLabel, cardHTML } = J;

  const GROUP = {
    studios: { title: 'Studios & publishers', label: 'studios & publishers' },
    indies: { title: 'Indie developers', label: 'indie developers' },
    universities: { title: 'Universities', label: 'universities' },
  };
  const MORE = 6;
  const EXT = '<svg aria-hidden="true"><use href="#i-ext"/></svg><span class="vh"> (opens in a new tab)</span>';

  const slug = new URLSearchParams(location.search).get('id') || '';
  const found = findListing(slug);
  const profile = $('[data-profile]');

  const andList = (a) => (a.length < 2 ? a.join('') : `${a.slice(0, -1).join(', ')} and ${a[a.length - 1]}`);
  const host = (url) => { try { return new URL(url).hostname.replace(/^www\./, ''); } catch (e) { return ''; } };
  const isDomain = (site) => Boolean(site && site.includes('.'));
  const where = (it) => (isDomain(it.site) ? it.site : host(it.url));
  const breakable = (s) => esc(s).replace(/([.-])/g, '$1<wbr>');

  /* ───────── What the listing is, in words built from its own data ───────── */

  // Where a studio stands among the directory's studios: the one thing the head and the information panel don't say.
  // Other listings get no About section until the source has a description for them.
  function about(tab, it) {
    if (tab !== 'studios') return '';
    const same = D.studios.filter((s) => s !== it && s.founded === it.founded).sort(byName);
    if (same.length) {
      const links = same.map((s) => `<a href="${esc(listingHref(s))}">${esc(s.name)}</a>`);
      return `${andList(links)} ${same.length > 1 ? 'were' : 'was'} also founded in ${it.founded}.`;
    }
    const years = D.studios.map((s) => s.founded);
    if (it.founded === Math.min(...years)) return `${esc(it.name)} is the oldest studio in the directory.`;
    if (it.founded === Math.max(...years)) return `${esc(it.name)} is the newest studio in the directory.`;
    return `${esc(it.name)} is the only studio in the directory founded in ${it.founded}.`;
  }

  const metaParts = (tab, it) => {
    if (tab === 'studios') return [typeLabel(it), `Founded ${it.founded}`, 'Jordan'];
    if (tab === 'indies') return ['Indie developer', 'Jordan'];
    return [it.kind, 'Jordan'];
  };

  function facts(tab, it) {
    const link = it.url ? `<a href="${esc(it.url)}" target="_blank" rel="noopener">${breakable(where(it))}${EXT}</a>` : '';
    const rows = [];
    if (tab === 'universities') {
      rows.push(['Programme', esc(it.programme)], ['Programme page', link || 'Not listed'], ['Type', esc(it.kind)]);
    } else {
      const none = it.status === 'soon' ? 'Coming soon' : 'Not listed';
      rows.push(['Website', link || `<span class="facts__none">${none}</span>`]);
      rows.push(['Type', tab === 'studios' ? esc(typeLabel(it)) : 'Indie developer']);
      if (tab === 'studios') rows.push(['Founded', String(it.founded)]);
    }
    rows.push(['Location', 'Jordan'], ['Listed in', `<a href="index.html#${tab}/${esc(it.logo)}">${esc(GROUP[tab].title)}</a>`]);
    return rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('');
  }

  // The one way out to the listing's own site.
  function visit(tab, it) {
    if (!it.url) return '';
    let label = 'Visit website';
    if (tab === 'universities') label = 'View the programme';
    else if (it.site && !isDomain(it.site)) label = `Open on ${it.site}`;
    return `<a class="btn-visit" href="${esc(it.url)}" target="_blank" rel="noopener">${esc(label)}`
      + `<svg aria-hidden="true"><use href="#i-ext"/></svg><span class="vh"> (opens ${esc(where(it))} in a new tab)</span></a>`;
  }

  /* ───────── The page ───────── */

  function crumbs(tab, it) {
    if (tab) {
      const group = $('[data-crumb-group]');
      const a = group.querySelector('a');
      a.href = `index.html#${tab}/${it.logo}`;
      a.textContent = GROUP[tab].title;
      group.hidden = false;
      group.closest('.crumbs').classList.add('crumbs--deep');
    }
    $('[data-crumb-here]').textContent = it ? it.name : 'Not found';
  }

  function renderListing(tab, it) {
    document.title = `${it.name} · Jordan Game Companies`;
    crumbs(tab, it);

    profile.innerHTML = `<span class="profile__logo"><img src="${logoSrc(it.logo)}" alt="" width="128" height="128"></span>`
      + `<div class="profile__id"><h1 tabindex="-1">${esc(it.name)}</h1>`
      + `<p class="profile__meta">${metaParts(tab, it).map(esc).join('<span aria-hidden="true"> · </span>')}</p></div>`
      + `<div class="profile__act">${visit(tab, it)}</div>`;

    const text = about(tab, it);
    if (text) $('[data-about]').innerHTML = text;
    else $('.about').remove();
    $('[data-facts]').innerHTML = facts(tab, it);
    $('[data-sheet]').hidden = false;

    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.content = `${it.name}: ${metaParts(tab, it).join(', ')}. From the Jordan Game Companies directory.`;

    renderMore(tab, it);
  }

  // Studios nearest in founding year; for everyone else, the next names along the directory.
  function renderMore(tab, it) {
    const g = GROUP[tab];
    const all = D[tab];
    let picks;
    if (tab === 'studios') {
      picks = all.filter((s) => s !== it)
        .sort((a, b) => Math.abs(a.founded - it.founded) - Math.abs(b.founded - it.founded) || a.founded - b.founded || byName(a, b))
        .slice(0, MORE)
        .sort((a, b) => a.founded - b.founded || byName(a, b));
    } else {
      const sorted = all.slice().sort(byName);
      const i = sorted.indexOf(it);
      picks = sorted.slice(i + 1).concat(sorted.slice(0, i)).slice(0, MORE);
    }
    if (!picks.length) return;
    $('[data-more-title]').textContent = `More ${g.label}`;
    const allLink = $('[data-more-all]');
    allLink.href = `index.html#${tab}`;
    allLink.innerHTML = `All ${all.length} ${esc(g.label)}<svg aria-hidden="true"><use href="#i-go"/></svg>`;
    $('[data-more-cards]').innerHTML = picks.map((p) => cardHTML(tab, p)).join('');
    $('[data-more]').hidden = false;
  }

  function renderMissing() {
    document.title = 'Listing not found · Jordan Game Companies';
    crumbs(null, null);
    const what = slug ? `Nothing in the directory is listed as “${esc(slug)}”.` : 'This link doesn’t name a listing.';
    profile.classList.add('profile--missing');
    profile.innerHTML = '<div class="profile__id"><h1 tabindex="-1">We couldn’t find that listing</h1>'
      + `<p class="profile__meta">${what} It may have been renamed or removed from 962Games.</p></div>`
      + '<div class="profile__act"><a class="btn-visit" href="index.html">Browse the directory<svg aria-hidden="true"><use href="#i-go"/></svg></a></div>';
  }

  if (found) renderListing(found.tab, found.it);
  else renderMissing();
})();
