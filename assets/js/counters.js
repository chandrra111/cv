function formatValue(val, decimals) {
  return decimals ? val.toFixed(decimals) : Math.round(val).toString();
}

function animateCounter(el) {
  const target = parseFloat(el.dataset.value || "0");
  const decimals = parseInt(el.dataset.decimals || "0", 10);
  const prefix = el.dataset.prefix || "";
  const suffix = el.dataset.suffix || "";
  const duration = 1400;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = target * eased;
    el.textContent = `${prefix}${formatValue(current, decimals)}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

export function initCounters() {
  const els = document.querySelectorAll(".stat-value[data-value]");
  if (els.length === 0) return;

  if (!("IntersectionObserver" in window)) {
    els.forEach(animateCounter);
    return;
  }

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  els.forEach((el) => io.observe(el));
}
