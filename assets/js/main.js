import { initTheme } from "./theme.js?v=20261104b";
import { initNav } from "./nav.js?v=20261104b";
import { initTabs } from "./tabs.js?v=20261104b";
import { renderAll } from "./render.js?v=20261104b";
import { initReveal } from "./reveal.js?v=20261104b";
import { initCounters } from "./counters.js?v=20261104b";
import { initCharts } from "./charts.js?v=20261104b";
import { initLens } from "./lens.js?v=20261104b";

function hideLoadingVeil() {
  const veil = document.getElementById("loadingVeil");
  if (veil) veil.classList.add("hide");
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderAll();
  initNav();
  initTabs();
  initLens();
  initReveal();
  initCounters();
  initCharts();
  requestAnimationFrame(() => setTimeout(hideLoadingVeil, 150));
});
