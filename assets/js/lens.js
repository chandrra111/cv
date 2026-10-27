import { lenses } from "./data.js";
import { animateCounter } from "./counters.js";

const KEY = "profile-lens";
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function statChip({ value, prefix = "", suffix = "", decimals = 0, label, text }) {
  if (text !== undefined) {
    return `<div class="stat"><span class="stat-value">${esc(text)}</span><span class="stat-label">${esc(label)}</span></div>`;
  }
  return `<div class="stat"><span class="stat-value" data-value="${value}" data-prefix="${prefix}" data-suffix="${suffix}" data-decimals="${decimals}">${prefix}0${suffix}</span><span class="stat-label">${esc(label)}</span></div>`;
}

/* Same career, two emphases: leadership roles or architecture roles. */
export function initLens() {
  const sw = document.getElementById("lensSwitch");
  if (!sw) return;

  let saved = null;
  try {
    saved = localStorage.getItem(KEY);
  } catch (e) {
    /* storage unavailable — fine */
  }
  const asked = new URLSearchParams(location.search).get("track");
  let current = lenses[asked] ? asked : lenses[saved] ? saved : "leader";

  function apply(key, { animate = false, persist = false } = {}) {
    const l = lenses[key];
    current = key;
    document.getElementById("heroEyebrow").textContent = l.eyebrow;
    document.getElementById("heroTitle").innerHTML = `${esc(l.title[0])}<span class="accent">${esc(l.title[1])}</span>`;
    document.getElementById("heroTagline").textContent = l.tagline;
    const cta = document.getElementById("heroCta");
    cta.textContent = l.cta.label;
    cta.setAttribute("href", l.cta.href);

    const stats = document.getElementById("heroStats");
    stats.innerHTML = l.stats.map(statChip).join("");
    if (animate) stats.querySelectorAll(".stat-value[data-value]").forEach(animateCounter);

    document.getElementById("lensFocus").innerHTML = l.focus
      .map((f, i) => `<article class="lens-card"><span class="n">0${i + 1}</span><h3>${esc(f.title)}</h3><p>${esc(f.body)}</p></article>`)
      .join("");

    sw.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lens === key)));
    document.body.dataset.lens = key;

    if (persist) {
      try {
        localStorage.setItem(KEY, key);
      } catch (e) {
        /* ignore */
      }
      const url = new URL(location.href);
      url.searchParams.set("track", key);
      history.replaceState(null, "", url);
    }
  }

  sw.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-lens]");
    if (b && b.dataset.lens !== current) apply(b.dataset.lens, { animate: true, persist: true });
  });

  apply(current);
}
