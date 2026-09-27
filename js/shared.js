// Jordan Game Companies: helpers, listing cards and the hill, shared by the directory and the listing page.
(function () {
  'use strict';

  const D = window.JGC_DATA;
  if (!D) return;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const byName = (a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const logoSrc = (slug) => `assets/logos/${slug}.png`;

  // A listing's slug is its logo name; it addresses both its page and its card (#studios/<slug>).
  const listingHref = (it) => `listing.html?id=${encodeURIComponent(it.logo)}`;
  const TYPES = ['studios', 'indies', 'universities'];
  function findListing(slug) {
    for (const tab of TYPES) {
      const it = D[tab].find((x) => x.logo === slug);
      if (it) return { tab, it };
    }
    return null;
  }

  /* ───────── Text bound to the data ───────── */

  $$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

  /* ───────── Cards ───────── */

  const typeLabel = (it) => (it.tags && it.tags.length ? `${it.tags.join(' ')} ${it.type.toLowerCase()}` : it.type);
  const META = {
    studios: (it) => ({ text: it.site }),
    indies: (it) => ({ text: it.site || (it.status === 'soon' ? 'Website coming soon' : 'No website listed') }),
    universities: (it) => ({ text: it.programme, wrap: true }),
  };
  const CHIPS = {
    studios: (it) => [typeLabel(it), { year: it.founded }],
    indies: (it) => (it.status === 'soon' ? ['Indie', { soon: 'Coming soon' }] : ['Indie']),
    universities: (it) => [it.kind],
  };
  const chipHTML = (c) => {
    if (c.year) return `<span class="chip chip--year"><svg aria-hidden="true"><use href="#i-house"/></svg><span class="vh">Founded </span>${c.year}</span>`;
    if (c.soon) return `<span class="chip chip--soon">${esc(c.soon)}</span>`;
    return `<span class="chip">${esc(c)}</span>`;
  };

  // Every card opens the listing's own page on this site; from the directory it opens in a new tab.
  const tabAttrs = (newTab) => (newTab ? ' target="_blank" rel="noopener"' : '');
  function cardHTML(tab, it, { newTab = false } = {}) {
    const meta = META[tab](it);
    const chips = CHIPS[tab](it).map(chipHTML).join('');
    return `<li><a class="card" id="${tab}-${esc(it.logo)}" href="${esc(listingHref(it))}"${tabAttrs(newTab)}>`
      + `<span class="card__logo"><img src="${logoSrc(it.logo)}" alt="" width="76" height="76" loading="lazy" decoding="async"></span>`
      + `<span class="card__body"><span class="card__name">${esc(it.name)}</span>`
      + `<span class="card__meta${meta.wrap ? ' card__meta--wrap' : ''}">${esc(meta.text)}</span>`
      + `<span class="card__chips">${chips}</span></span>`
      + '<svg class="card__go" aria-hidden="true"><use href="#i-go"/></svg>'
      + `${newTab ? '<span class="vh"> (opens in a new tab)</span>' : ''}</a></li>`;
  }

  /* ───────── The hill: every studio as a limestone house at its founding year ───────── */

  // newTab: houses open their studio's page in a new tab.
  function buildHill({ newTab = false } = {}) {
    const figure = $('#hill');
    const svg = $('#hill-svg');
    const tip = $('.hill__tip');
    const list = D.studios.filter((s) => Number.isFinite(s.founded)).sort((a, b) => a.founded - b.founded || byName(a, b));
    if (!list.length) { figure.hidden = true; return; }
    const first = list[0].founded;
    const last = list[list.length - 1].founded;

    // One drawing at every width. On small screens only the year plates grow, and thin out, so they stay readable.
    function draw(plateScale) {
      const U = 31; // px per unit
      const STEP = 1.32; // terrace depth along the street
      const DEPTH = 2.6; // terrace width across the street
      const HW = 1.35; // house width
      const HOUSE = 0.95; // house height
      const SIGN = 34; // rooftop sign
      const PLATE = { w: 38 * plateScale, h: 16 * plateScale, font: 9 * plateScale, gap: plateScale > 1 ? 38 * plateScale + 8 : 0 };
      const slope = Math.min(0.1, 2.4 / Math.max(1, last - first));
      const zOf = (year) => 0.55 + (year - first) * slope;
      const P = (x, y, z) => [(x - y) * 0.866 * U, (x + y) * 0.5 * U - z * U];

      let minX = Infinity; let maxX = -Infinity; let minY = Infinity;
      const track = (p) => { minX = Math.min(minX, p[0]); maxX = Math.max(maxX, p[0]); minY = Math.min(minY, p[1]); };
      const pts = (a) => a.map((p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
      const poly = (a, fill) => { a.forEach(track); return `<polygon points="${pts(a)}" fill="${fill}" stroke="${fill}" stroke-width=".7" stroke-linejoin="round"/>`; };
      const line = (a, b, stroke) => `<line x1="${a[0].toFixed(1)}" y1="${a[1].toFixed(1)}" x2="${b[0].toFixed(1)}" y2="${b[1].toFixed(1)}" stroke="${stroke}" stroke-width="1"/>`;
      const box = (x, y, z0, w, d, z1, c) => {
        const top = [P(x, y, z1), P(x + w, y, z1), P(x + w, y + d, z1), P(x, y + d, z1)];
        const left = [P(x, y + d, z0), P(x + w, y + d, z0), P(x + w, y + d, z1), P(x, y + d, z1)];
        const right = [P(x + w, y, z0), P(x + w, y + d, z0), P(x + w, y + d, z1), P(x + w, y, z1)];
        return poly(left, c[1]) + poly(right, c[2]) + poly(top, c[0]);
      };
      const TERRACE = ['#dfe5ee', '#c6d0de', '#a8b5c9'];
      const WALLS = ['#ffffff', '#e8edf5', '#c9d3e4'];
      const WINDOW = '#2a3242';

      // Walk the street: one step per studio, a longer run where years pass without a new studio.
      let t = 0;
      const steps = list.map((s, k) => {
        if (k) t += 1 + Math.min(1.4, Math.max(0, (s.founded - list[k - 1].founded - 1) * 0.12));
        return { s, k, y: -t * STEP, z: zOf(s.founded), firstOfYear: k === 0 || list[k - 1].founded !== s.founded };
      });
      // A few empty years lengthen the terrace below them, so the walls stay one slab; only an empty decade breaks the hill.
      steps.forEach((st, k) => {
        const gap = steps[k + 1] ? st.y - (steps[k + 1].y + STEP) : 0;
        st.back = gap > 0 && gap < STEP ? gap : 0;
      });
      // The street edge crops the hill's foot; on small screens the tabs overlap that edge, so leave room below the first house.
      const cropY = P(DEPTH, STEP, 0)[1] + (plateScale > 1 ? 34 : 1);

      let out = '';
      steps.slice().sort((a, b) => a.y - b.y).forEach((st) => {
        // terrace, rising from street level so the walls stay short and the foot runs as one diagonal
        // (as in the approved mockup); stone courses on the front riser
        out += box(0, st.y - st.back, 0, DEPTH, STEP + st.back, st.z, TERRACE);
        for (let c = st.z - 0.34; c > 0.05; c -= 0.34) {
          out += line(P(0, st.y + STEP, c), P(DEPTH, st.y + STEP, c), '#b9c4d4');
        }
        // the house: walls, windows, a door on the shaded side, a water tank and the rooftop sign
        const hx = (DEPTH - HW) / 2 - 0.05; const hy = st.y + 0.22; const hd = STEP - 0.44;
        const z0 = st.z; const z1 = st.z + HOUSE;
        let g = box(hx, hy, z0, HW, hd, z1, WALLS);
        for (let wx = 0.2; wx + 0.22 < HW - 0.08; wx += 0.42) {
          g += poly([P(hx + wx, hy + hd, z0 + 0.32), P(hx + wx + 0.22, hy + hd, z0 + 0.32), P(hx + wx + 0.22, hy + hd, z0 + 0.64), P(hx + wx, hy + hd, z0 + 0.64)], WINDOW);
        }
        const dy = hy + hd * 0.3; const dw = Math.min(0.24, hd * 0.4);
        g += poly([P(hx + HW, dy, z0), P(hx + HW, dy + dw, z0), P(hx + HW, dy + dw, z0 + 0.52), P(hx + HW, dy, z0 + 0.52)], '#8795ad');
        const tank = P(hx + 0.3, hy + Math.min(0.3, hd / 2), z1);
        g += `<rect x="${(tank[0] - 5).toFixed(1)}" y="${(tank[1] - 9).toFixed(1)}" width="10" height="9" fill="#16181d"/>`
          + `<ellipse cx="${tank[0].toFixed(1)}" cy="${(tank[1] - 9).toFixed(1)}" rx="5" ry="2.2" fill="#353c48"/>`;
        const roof = P(hx + HW * 0.62, hy + hd * 0.5, z1);
        const sx = roof[0] - SIGN / 2; const sy = roof[1] - 12 - SIGN;
        track([sx - 2, sy - 2]); track([sx + SIGN + 2, sy]);
        g += `<line x1="${roof[0].toFixed(1)}" y1="${roof[1].toFixed(1)}" x2="${roof[0].toFixed(1)}" y2="${(roof[1] - 12).toFixed(1)}" stroke="#16181d" stroke-width="2"/>`
          + `<rect class="frame" x="${(sx - 2).toFixed(1)}" y="${(sy - 2).toFixed(1)}" width="${SIGN + 4}" height="${SIGN + 4}" rx="3"/>`
          + (() => {
            // logos on their own plate sit inset on the white sign; the rest keep their original margin
            const size = SIGN * (st.s.tileBg ? 0.72 : 0.88);
            const ix = roof[0] - size / 2; const iy = sy + (SIGN - size) / 2;
            return `<image href="${logoSrc(st.s.logo)}" x="${ix.toFixed(1)}" y="${iy.toFixed(1)}" width="${size.toFixed(1)}" height="${size.toFixed(1)}" preserveAspectRatio="xMidYMid meet"/>`;
          })();
        out += `<a class="house" href="${esc(listingHref(st.s))}"${tabAttrs(newTab)} data-k="${st.k}" data-name="${esc(st.s.name)}" data-year="${st.s.founded}"`
          + ` aria-label="${esc(st.s.name)}, founded ${st.s.founded}${newTab ? ' (opens in a new tab)' : ''}" tabindex="${st.k === 0 ? 0 : -1}"><g>${g}</g></a>`;
      });

      // Street-name plates carry each year on the riser below its first house.
      // Where plates would collide they thin out, but the newest year always keeps its plate.
      const cands = steps.filter((st) => st.firstOfYear).map((st) => ({ st, a: P(DEPTH * 0.1, st.y + STEP, Math.max(0.22, st.z - 0.42)) }));
      const keep = [];
      cands.forEach((c) => { if (!keep.length || c.a[0] - keep[keep.length - 1].a[0] >= PLATE.gap) keep.push(c); });
      const newest = cands[cands.length - 1];
      if (keep[keep.length - 1] !== newest) {
        while (keep.length && newest.a[0] - keep[keep.length - 1].a[0] < PLATE.gap) keep.pop();
        keep.push(newest);
      }
      let plates = '';
      keep.forEach(({ st, a }) => {
        plates += `<g class="plate" data-year="${st.s.founded}" transform="translate(${a[0].toFixed(1)},${(a[1] - PLATE.h / 2).toFixed(1)})">`
          + `<rect width="${PLATE.w}" height="${PLATE.h}" rx="2.5" fill="#1b4ba8"/>`
          + `<rect x="2" y="2" width="${PLATE.w - 4}" height="${PLATE.h - 4}" rx="1.5" fill="none" stroke="#fff" stroke-width=".9"/>`
          + `<text x="${PLATE.w / 2}" y="${(PLATE.h / 2 + PLATE.font * 0.36).toFixed(1)}" fill="#fff" font-size="${PLATE.font}" font-weight="500" text-anchor="middle">${st.s.founded}</text></g>`;
      });
      out += `<g aria-hidden="true" font-family="Readex Pro, system-ui, sans-serif">${plates}</g>`;

      const vx = minX - 10; const vy = minY - 10;
      const vw = maxX - minX + 20; const vh = cropY - vy;
      svg.setAttribute('viewBox', `${vx.toFixed(1)} ${vy.toFixed(1)} ${vw.toFixed(1)} ${vh.toFixed(1)}`);
      svg.setAttribute('width', Math.round(vw));
      svg.setAttribute('height', Math.round(vh));
      svg.setAttribute('aria-label', `Studios by founding year, ${first} to ${last}`);
      svg.innerHTML = out;
    }

    const houses = () => $$('.house', svg).sort((a, b) => a.dataset.k - b.dataset.k);

    // Label the house under the pointer or focus.
    const showTip = (house) => {
      const frame = $('.frame', house).getBoundingClientRect();
      const box0 = figure.getBoundingClientRect();
      tip.innerHTML = `${esc(house.dataset.name)}<span>${house.dataset.year}</span>`;
      // centred over the sign, but never past the screen edge (the first houses sit near it on phones)
      const half = tip.offsetWidth / 2 + 8;
      const x = Math.min(Math.max(frame.left + frame.width / 2, half), document.documentElement.clientWidth - half);
      tip.style.left = `${x - box0.left}px`;
      tip.style.top = `${frame.top - box0.top}px`;
      tip.classList.add('is-on');
    };
    const hideTip = () => tip.classList.remove('is-on');
    svg.addEventListener('pointerover', (e) => { const h = e.target.closest('.house'); if (h) showTip(h); });
    svg.addEventListener('pointerout', (e) => { const h = e.target.closest('.house'); if (h && !h.contains(e.relatedTarget)) hideTip(); });
    svg.addEventListener('focusin', (e) => { const h = e.target.closest('.house'); if (h) requestAnimationFrame(() => showTip(h)); });
    svg.addEventListener('focusout', hideTip);

    // One tab stop for the whole hill; arrows walk the years.
    svg.addEventListener('keydown', (e) => {
      const all = houses();
      const i = all.indexOf(document.activeElement);
      if (i < 0) return;
      const next = { ArrowRight: i + 1, ArrowUp: i + 1, ArrowLeft: i - 1, ArrowDown: i - 1, Home: 0, End: all.length - 1 }[e.key];
      if (next === undefined || next < 0 || next >= all.length) return;
      e.preventDefault();
      all[i].tabIndex = -1;
      all[next].tabIndex = 0;
      all[next].focus();
    });

    // Draw once at desktop scale, then enlarge the year plates if the hill renders small.
    let plateNow = null;
    const fit = () => {
      if (plateNow === null) draw(1);
      const vb = svg.viewBox.baseVal;
      const scale = vb && vb.width ? figure.clientWidth / vb.width : 1;
      const plateScale = scale < 0.8 ? Math.min(2, 0.95 / scale) : 1;
      if (plateNow !== null && Math.abs(plateScale - plateNow) < 0.05) return;
      if (plateNow === null && plateScale === 1) { plateNow = 1; return; }
      plateNow = plateScale;
      draw(plateScale);
    };
    fit();
    let resizeTimer;
    window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(fit, 120); });

    // The hill builds itself, year by year.
    if (reduceMotion.matches || !Element.prototype.animate) return;
    const plateEls = $$('.plate', svg);
    houses().forEach((h, i) => {
      const delay = 160 + i * 90;
      h.firstElementChild.animate(
        [{ transform: 'translateY(-30px)', opacity: 0 }, { transform: 'translateY(0)', opacity: 1 }],
        { duration: 640, delay, easing: 'cubic-bezier(.16, 1, .3, 1)', fill: 'backwards' },
      );
      const plate = plateEls.find((p) => p.dataset.year === h.dataset.year);
      if (plate && !plate.dataset.shown) {
        plate.dataset.shown = '1';
        plate.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 400, delay: delay + 260, easing: 'ease-out', fill: 'backwards' });
      }
    });
  }

  window.JGC = { D, $, $$, reduceMotion, byName, esc, logoSrc, listingHref, findListing, typeLabel, cardHTML, buildHill };
})();
