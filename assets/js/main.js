import { initTheme } from "./theme.js?v=20261105c";
import { initNav } from "./nav.js?v=20261105c";
import { initTabs } from "./tabs.js?v=20261105c";
import { renderAll } from "./render.js?v=20261105c";
import { initReveal } from "./reveal.js?v=20261105c";
import { initCounters } from "./counters.js?v=20261105c";
import { initCharts } from "./charts.js?v=20261105c";
import { initLens } from "./lens.js?v=20261105c";

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
