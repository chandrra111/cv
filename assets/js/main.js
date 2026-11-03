import { initTheme } from "./theme.js?v=20261104g";
import { initNav } from "./nav.js?v=20261104g";
import { initTabs } from "./tabs.js?v=20261104g";
import { renderAll } from "./render.js?v=20261104g";
import { initReveal } from "./reveal.js?v=20261104g";
import { initCounters } from "./counters.js?v=20261104g";
import { initCharts } from "./charts.js?v=20261104g";
import { initLens } from "./lens.js?v=20261104g";

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
