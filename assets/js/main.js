import { initTheme } from "./theme.js";
import { initNav } from "./nav.js";
import { initTabs } from "./tabs.js";
import { renderAll } from "./render.js";
import { initReveal } from "./reveal.js";
import { initCounters } from "./counters.js";
import { initCharts } from "./charts.js";
import { initContactForm } from "./contact.js";

function hideLoadingVeil() {
  const veil = document.getElementById("loadingVeil");
  if (veil) veil.classList.add("hide");
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderAll();
  initNav();
  initTabs();
  initReveal();
  initCounters();
  initCharts();
  initContactForm();
  requestAnimationFrame(() => setTimeout(hideLoadingVeil, 150));
});
