// Jordan Game Companies: one listing's own page (listing.html?id=<slug>), built from js/data.js and js/profiles.js.
// Laid out like a company profile: breadcrumb, logo, name and tagline, About, Games, and an information column
// with the listing's facts, people, address and social links. Sections the listing has no data for are left out.
(function () {
  'use strict';

  const J = window.JGC;
  if (!J) return;
  const { D, $, byName, esc, logoSrc, listingHref, findListing, typeLabel, cardHTML } = J;
  const PROFILES = window.JGC_PROFILES || {};

  const GROUP = {
    studios: { title: 'Studios & publishers', label: 'studios & publishers' },
    indies: { title: 'Indie developers', label: 'indie developers' },
  };
  const MORE = 6;
  const GAMES = 6; // games shown before "Show all", once there are more than GAMES_ALL
  const GAMES_ALL = 8;
  const EXT = '<svg aria-hidden="true"><use href="#i-ext"/></svg><span class="vh"> (opens in a new tab)</span>';
  const SOCIAL = {
    instagram: 'Instagram',
    x: 'X',
    facebook: 'Facebook',
    linkedin: 'LinkedIn',
    youtube: 'YouTube',
    steam: 'Steam',
    itch: 'itch.io',
    github: 'GitHub',
    behance: 'Behance',
  };
  const STORES = [
    [/(^|\.)play\.google\.com$/, 'Google Play'],
    [/(^|\.)apps\.apple\.com$/, 'the App Store'],
    [/(^|\.)steampowered\.com$/, 'Steam'],
    [/(^|\.)itch\.io$/, 'itch.io'],
  ];

  const slug = new URLSearchParams(location.search).get('id') || '';
  const found = findListing(slug);
  const profile = $('[data-profile]');

  const andList = (a) => (a.length < 2 ? a.join('') : `${a.slice(0, -1).join(', ')} and ${a[a.length - 1]}`);
  const host = (url) => { try { return new URL(url).hostname.replace(/^www\./, ''); } catch (e) { return ''; } };
  const isDomain = (site) => Boolean(site && site.includes('.'));
  const where = (it) => (isDomain(it.site) ? it.site : host(it.url));
  const breakable = (s) => esc(s).replace(/([.-])/g, '$1<wbr>');
  const store = (url) => {
    const h = host(url);
    const hit = STORES.find(([re]) => re.test(h));
    return hit ? hit[1] : h;
  };
  const place = (p) => (p.city ? `${p.city}, Jordan` : 'Jordan');
  const mapHref = (address) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${address}, Jordan`)}`;

  /* ───────── What the listing is, in words built from its own data ───────── */

  // Where a studio stands among the directory's studios; it closes the studio's About.
  function standing(tab, it) {
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

  const metaParts = (tab, it, p) => {
    if (tab === 'studios') return [typeLabel(it), `Founded ${it.founded}`, place(p)];
    return ['Indie developer', place(p)];
  };

  /* ───────── Information panel ───────── */

  const none = (text) => `<span class="facts__none">${text}</span>`;

  function socialHTML(social) {
    const links = Object.keys(SOCIAL).filter((k) => social[k]).map((k) => (
      `<a class="social" href="${esc(social[k])}" target="_blank" rel="noopener" title="${SOCIAL[k]}">`
      + `<svg aria-hidden="true"><use href="#s-${k}"/></svg><span class="vh">${SOCIAL[k]} (opens in a new tab)</span></a>`
    ));
    return links.length ? `<span class="socials">${links.join('')}</span>` : '';
  }

  function addressHTML(address) {
    return `<span class="facts__line">${esc(address)}</span>`
      + `<a class="facts__map" href="${esc(mapHref(address))}" target="_blank" rel="noopener">Open in Maps${EXT}</a>`;
  }

  function peopleHTML(people) {
    return people.map((m) => `<span class="person"><span class="person__name">${esc(m.name)}</span>`
      + `<span class="person__role">${esc(m.role)}</span></span>`).join('');
  }

  function facts(tab, it, p) {
    const link = it.url ? `<a href="${esc(it.url)}" target="_blank" rel="noopener">${breakable(where(it))}${EXT}</a>` : '';
    const rows = [];
    rows.push(['Website', link || none(it.status === 'soon' ? 'Coming soon' : 'Not listed')]);
    rows.push(['Type', tab === 'studios' ? esc(typeLabel(it)) : 'Indie developer']);
    if (tab === 'studios') rows.push(['Founded', String(it.founded)]);
    if (p.size) rows.push(['Company size', `${esc(p.size)} employees`]);
    rows.push(['Headquarters', esc(place(p))]);
    if (p.address) rows.push(['Address', addressHTML(p.address)]);
    if (p.offices && p.offices.length) rows.push([p.offices.length > 1 ? 'Other offices' : 'Other office', p.offices.map((o) => `<span class="facts__line">${esc(o)}</span>`).join('')]);
    if (p.platforms && p.platforms.length) rows.push(['Platforms', esc(p.platforms.join(', '))]);
    if (p.people && p.people.length) rows.push([p.people.length > 1 ? 'People' : 'Led by', peopleHTML(p.people)]);
    const social = p.social ? socialHTML(p.social) : '';
    if (social) rows.push(['Follow', social]);
    rows.push(['Listed in', `<a href="index.html#${tab}/${esc(it.logo)}">${esc(GROUP[tab].title)}</a>`]);
    return rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('');
  }

  // The one way out to the listing's own site.
  function visit(it) {
    if (!it.url) return '';
    let label = 'Visit website';
    if (it.site && !isDomain(it.site)) label = `Open on ${it.site}`;
    return `<a class="btn-visit" href="${esc(it.url)}" target="_blank" rel="noopener">${esc(label)}`
      + `<svg aria-hidden="true"><use href="#i-ext"/></svg><span class="vh"> (opens ${esc(where(it))} in a new tab)</span></a>`;
  }

  /* ───────── About and Games ───────── */

  function renderAbout(tab, it, p) {
    const paras = (p.about || []).map((t) => `<p>${esc(t)}</p>`);
    const s = standing(tab, it);
    if (s) paras.push(`<p class="about__standing">${s}</p>`);
    if (!paras.length) return;
    const section = $('[data-about]');
    $('[data-about-title]').textContent = `About ${it.name}`;
    section.insertAdjacentHTML('beforeend', paras.join(''));
    section.hidden = false;
  }

  function gameHTML(g) {
    const meta = [];
    if (g.year) meta.push(`<span class="game__year">${g.year}</span>`);
    if (g.note) meta.push(esc(g.note));
    const chips = (g.platforms || []).map((x) => `<span class="chip">${esc(x)}</span>`).join('');
    const body = `<span class="game__name">${esc(g.name)}</span>`
      + (meta.length ? `<span class="game__meta">${meta.join('<span aria-hidden="true"> · </span>')}</span>` : '')
      + (g.blurb ? `<span class="game__blurb">${esc(g.blurb)}</span>` : '')
      + (chips ? `<span class="game__chips">${chips}</span>` : '');
    if (!g.url) return `<li><div class="game">${body}</div></li>`;
    return `<li><a class="game game--link" href="${esc(g.url)}" target="_blank" rel="noopener">${body}`
      + `<svg class="game__go" aria-hidden="true"><use href="#i-ext"/></svg>`
      + `<span class="vh"> (opens on ${esc(store(g.url))} in a new tab)</span></a></li>`;
  }

  function renderGames(it, p) {
    const games = p.games || [];
    if (!games.length) return;
    const list = $('[data-games-list]');
    list.innerHTML = games.map(gameHTML).join('');
    $('[data-games-count]').textContent = games.length;
    if (games.length > GAMES_ALL) {
      const items = Array.from(list.children);
      items.slice(GAMES).forEach((li) => { li.hidden = true; });
      const all = $('[data-games-all]');
      all.textContent = `Show all ${games.length} games`;
      all.hidden = false;
      all.addEventListener('click', () => {
        items.forEach((li) => { li.hidden = false; });
        all.remove();
        // Keep the keyboard where the list grew: on the first game that was hidden.
        const next = items[GAMES].firstElementChild;
        if (next.tagName !== 'A') next.tabIndex = -1;
        next.focus();
      });
    }
    $('[data-games]').hidden = false;
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
    const p = PROFILES[it.logo] || {};
    document.title = `${it.name} · Jordan Game Companies`;
    crumbs(tab, it);

    profile.innerHTML = `<span class="profile__logo"><img src="${logoSrc(it.logo)}" alt="" width="128" height="128"></span>`
      + `<div class="profile__id"><h1 tabindex="-1">${esc(it.name)}</h1>`
      + (p.tagline ? `<p class="profile__tag">${esc(p.tagline)}</p>` : '')
      + `<p class="profile__meta">${metaParts(tab, it, p).map(esc).join('<span aria-hidden="true"> · </span>')}</p></div>`
      + `<div class="profile__act">${visit(it)}</div>`;

    renderAbout(tab, it, p);
    renderGames(it, p);
    $('[data-facts]').innerHTML = facts(tab, it, p);
    $('[data-sheet]').hidden = false;

    const desc = document.querySelector('meta[name="description"]');
    const lead = p.tagline || metaParts(tab, it, p).join(', ');
    if (desc) desc.content = `${it.name}: ${lead}${/[.!?]$/.test(lead) ? '' : '.'} From the Jordan Game Companies directory.`;

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
      + `<p class="profile__meta">${what} It may have been renamed or removed.</p></div>`
      + '<div class="profile__act"><a class="btn-visit" href="index.html">Browse the directory<svg aria-hidden="true"><use href="#i-go"/></svg></a></div>';
  }

  if (found) renderListing(found.tab, found.it);
  else renderMissing();
})();
