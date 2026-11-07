import { initTheme } from "./theme.js?v=20261107b";
import { initNav } from "./nav.js?v=20261107b";
import { initTabs } from "./tabs.js?v=20261107b";
import { renderAll } from "./render.js?v=20261107b";
import { initReveal } from "./reveal.js?v=20261107b";
import { initCounters } from "./counters.js?v=20261107b";
import { initCharts } from "./charts.js?v=20261107b";
import { initLens } from "./lens.js?v=20261107b";

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
