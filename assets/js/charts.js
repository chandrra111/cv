import { dashboardCharts } from "./data.js";

function waitForChart(retries = 20) {
  return new Promise((resolve, reject) => {
    const check = (n) => {
      if (window.Chart) return resolve(window.Chart);
      if (n <= 0) return reject(new Error("Chart.js failed to load"));
      setTimeout(() => check(n - 1), 150);
    };
    check(retries);
  });
}

function buildCharts(Chart) {
  const goldish = "#c9a24b";
  const teal = "#38b6cc";
  const gridColor = "rgba(255,255,255,0.06)";
  const textColor = "#a9b6c4";

  Chart.defaults.color = textColor;
  Chart.defaults.font.family = "Inter, sans-serif";

  const loadEl = document.getElementById("chartLoadTime");
  if (loadEl) {
    new Chart(loadEl, {
      type: "bar",
      data: {
        labels: dashboardCharts.loadTime.labels,
        datasets: [
          {
            data: dashboardCharts.loadTime.values,
            backgroundColor: [teal, goldish],
            borderRadius: 8,
            maxBarThickness: 64,
          },
        ],
      },
      options: {
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: (c) => `${c.parsed.y}s avg. load time` } } },
        scales: {
          y: { beginAtZero: true, grid: { color: gridColor }, ticks: { callback: (v) => `${v}s` } },
          x: { grid: { display: false } },
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }

  const savingsEl = document.getElementById("chartSavings");
  if (savingsEl) {
    new Chart(savingsEl, {
      type: "doughnut",
      data: {
        labels: dashboardCharts.savings.labels,
        datasets: [
          {
            data: dashboardCharts.savings.values,
            backgroundColor: [goldish, teal, "#5b7fa6"],
            borderColor: "#101c2e",
            borderWidth: 3,
          },
        ],
      },
      options: {
        plugins: {
          legend: { position: "bottom", labels: { boxWidth: 10, font: { size: 10.5 }, padding: 12 } },
          tooltip: { callbacks: { label: (c) => `${c.label}: ${c.parsed}%` } },
        },
        responsive: true,
        maintainAspectRatio: false,
        cutout: "62%",
      },
    });
  }
}

let built = false;

async function buildOnce() {
  if (built) return;
  const canvases = document.querySelectorAll("#chartLoadTime, #chartSavings");
  if (canvases.length === 0) return;
  built = true;
  try {
    const Chart = await waitForChart();
    buildCharts(Chart);
  } catch (err) {
    canvases.forEach((c) => {
      const p = document.createElement("p");
      p.style.cssText = "color:#7d90a3;font-size:12.5px;padding:12px 0;";
      p.textContent = "Chart could not load (offline?). See figures in the KPI tiles above.";
      c.replaceWith(p);
    });
  }
}

export function initCharts() {
  // The BI dashboard lives inside a hidden tab panel — build charts only once it's shown,
  // otherwise Chart.js measures a zero-width canvas and renders blank.
  document.addEventListener("tab:shown", (e) => {
    if (e.detail.panel === "bi") buildOnce();
  });
}
