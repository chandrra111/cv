import {
  heroStats, philosophy, journey, education, strategyPhases, competencies,
  aiGenai, governance, cloudPlatforms, outcomes, programs, speaking, speakingAvailability,
  certifications, insights, awards, dashboardKpis,
} from "./data.js";
import { openLightbox } from "./lightbox.js";

const $ = (id) => document.getElementById(id);

function statChip({ value, prefix = "", suffix = "", decimals = 0, label, text }) {
  if (text !== undefined) {
    return `
      <div class="stat">
        <span class="stat-value">${text}</span>
        <span class="stat-label">${label}</span>
      </div>`;
  }
  return `
    <div class="stat">
      <span class="stat-value" data-value="${value}" data-prefix="${prefix}" data-suffix="${suffix}" data-decimals="${decimals}">${prefix}0${suffix}</span>
      <span class="stat-label">${label}</span>
    </div>`;
}

function renderHeroStats() {
  const el = $("heroStats");
  if (!el) return;
  el.innerHTML = heroStats.map(statChip).join("");
}

function renderOutcomes() {
  const el = $("outcomesGrid");
  if (!el) return;
  el.innerHTML = outcomes
    .map((o) => `<div class="card outcome-card">${statChip(o)}</div>`)
    .join("");
}

function renderPhilosophy() {
  const grid = $("pillarsGrid");
  if (grid) {
    grid.innerHTML = philosophy.pillars
      .map(
        (p, i) => `
      <div class="card pillar-card">
        <div class="pillar-num">0${i + 1}</div>
        <h3>${p.title}</h3>
        <p>${p.body}</p>
        <div class="pillar-evidence">${p.evidence}</div>
      </div>`
      )
      .join("");
  }
  const quote = $("philosophyQuote");
  if (quote) quote.textContent = `"${philosophy.intro}"`;
}

function renderTimeline() {
  const el = $("timelineList");
  if (!el) return;
  el.innerHTML = journey
    .map(
      (j) => `
    <div class="timeline-item">
      <div class="timeline-dot">${j.logoInitial}</div>
      <div class="timeline-year">${j.year}</div>
      <div class="timeline-role">
        <h3>${j.role}</h3>
        <div class="timeline-company">${j.company} &middot; ${j.location}</div>
      </div>
      <ul>${j.highlights.map((h) => `<li>${h}</li>`).join("")}</ul>
      <div class="timeline-tags">${j.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
    </div>`
    )
    .join("");
}

function renderEducation() {
  const el = $("educationGrid");
  if (!el) return;
  el.innerHTML = education
    .map(
      (e) => `
    <div class="card education-card">
      <div class="edu-logo-wrap">
        ${
          e.logo
            ? `<img class="edu-logo-img" src="${e.logo}" alt="${e.shortName} logo" loading="lazy">`
            : `<div class="edu-logo">${e.logoInitial}</div>`
        }
      </div>
      <div class="edu-body">
        <div class="edu-year">${e.year}</div>
        <h3>${e.degree}</h3>
        <div class="edu-institution">${e.institution}</div>
      </div>
    </div>`
    )
    .join("");
}

function renderStrategy() {
  const el = $("roadmapGrid");
  if (el) {
    el.innerHTML = strategyPhases
      .map(
        (p) => `
      <div class="card phase-card ${p.status === "current" ? "current" : ""}">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;">
          <div class="phase-index">${p.phase.replace("Phase ", "")}</div>
          <span class="badge-status ${p.status === "current" ? "badge-current" : "badge-done"}">${p.status === "current" ? "In Progress" : "Delivered"}</span>
        </div>
        <h4>${p.name}</h4>
        <div class="phase-period">${p.period}</div>
        <ul>${p.points.map((pt) => `<li>${pt}</li>`).join("")}</ul>
      </div>`
      )
      .join("");
  }
  const chips = $("competencyChips");
  if (chips) {
    chips.innerHTML = competencies
      .map((c) => `<span class="skill-chip"><span class="dot"></span>${c}</span>`)
      .join("");
  }
}

function renderAi() {
  const delivered = $("aiDelivered");
  if (delivered) {
    delivered.innerHTML = aiGenai.delivered
      .map((d) => `<div class="card" style="padding:20px 22px;"><h4 style="font-size:0.98rem;">${d.title}</h4><p style="margin-top:8px;font-size:13.5px;color:var(--text-muted);line-height:1.55;">${d.body}</p></div>`)
      .join("");
  }
  const roadmap = $("aiRoadmap");
  if (roadmap) {
    roadmap.innerHTML = aiGenai.roadmap
      .map((d) => `<div class="card" style="padding:20px 22px;border-style:dashed;"><h4 style="font-size:0.98rem;">${d.title}</h4><p style="margin-top:8px;font-size:13.5px;color:var(--text-muted);line-height:1.55;">${d.body}</p></div>`)
      .join("");
  }
}

const GOV_ICONS = [
  `<path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/>`,
  `<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>`,
  `<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>`,
  `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,
];

function renderGovernance() {
  const el = $("govGrid");
  if (!el) return;
  el.innerHTML = governance
    .map(
      (g, i) => `
    <div class="card gov-card">
      <div class="gov-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${GOV_ICONS[i % GOV_ICONS.length]}</svg></div>
      <h4>${g.title}</h4>
      <p>${g.body}</p>
    </div>`
    )
    .join("");
}

function renderDashKpis() {
  const el = $("dashKpis");
  if (!el) return;
  el.innerHTML = dashboardKpis
    .map((k) => `<div class="dash-kpi"><div class="v">${k.value}</div><div class="l">${k.label}</div></div>`)
    .join("");
}

function renderCloud() {
  const handsOn = $("cloudHandsOn");
  if (handsOn) {
    handsOn.innerHTML = cloudPlatforms.handsOn
      .map((c) => `<span class="skill-chip"><span class="dot"></span>${c.name} <span class="note">— ${c.note}</span></span>`)
      .join("");
  }
  const arch = $("cloudArch");
  if (arch) {
    arch.innerHTML = cloudPlatforms.architecture
      .map((c) => `<span class="skill-chip"><span class="dot"></span>${c.name} <span class="note">— ${c.note}</span></span>`)
      .join("");
  }
  const concepts = $("cloudConcepts");
  if (concepts) {
    concepts.innerHTML = cloudPlatforms.concepts.map((c) => `<span class="concept-pill">${c}</span>`).join("");
  }
  const biChips = $("biChips");
  if (biChips) {
    biChips.innerHTML = cloudPlatforms.bi.map((b) => `<span class="skill-chip"><span class="dot"></span>${b}</span>`).join("");
  }
}

function renderPrograms() {
  const el = $("programGrid");
  if (!el) return;
  el.innerHTML = programs
    .map(
      (p, i) => `
    <div class="card program-card" data-index="${i}" tabindex="0" role="button" aria-expanded="false">
      <div class="program-top">
        <div>
          <div class="program-period">${p.period}</div>
          <h3>${p.title}</h3>
        </div>
        <span class="program-scale">${p.scale}</span>
      </div>
      <p class="program-summary">${p.summary}</p>
      <ul class="program-details">${p.points.map((pt) => `<li>${pt}</li>`).join("")}</ul>
      <div class="program-tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      <span class="program-toggle">Read full scope <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></span>
    </div>`
    )
    .join("");

  el.querySelectorAll(".program-card").forEach((card) => {
    const toggle = () => {
      const expanded = card.classList.toggle("expanded");
      card.setAttribute("aria-expanded", String(expanded));
    };
    card.addEventListener("click", toggle);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    });
  });
}

function renderSpeaking() {
  const el = $("speakingGrid");
  if (el) {
    el.innerHTML = speaking
      .map(
        (s) => `
      <div class="card list-card">
        <div class="period">${s.period}</div>
        <h3>${s.title}</h3>
        <p>${s.body}</p>
        ${s.linkUrl ? `<a class="list-card-link" href="${s.linkUrl}" target="_blank" rel="noopener">${s.linkLabel || "Learn more"}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>` : ""}
      </div>`
      )
      .join("");
  }
  const avail = $("speakingAvailability");
  if (avail) avail.textContent = speakingAvailability;
}

const CERT_FALLBACK_INITIALS = ["IIMK", "DPDP", "NPTEL", "DC", "SM", "IT"];

function certInitials(c, fallbackIndex) {
  if (c.name.includes("IIM Kozhikode") || c.issuer.includes("IIMK")) return "IIMK";
  if (c.name.includes("DPDP")) return "DPDP";
  if (c.name.includes("NPTEL")) return "NPTEL";
  if (c.name.includes("Dale Carnegie") || c.issuer.includes("Dale Carnegie")) return "DC";
  if (c.name.includes("Scrum")) return "SM";
  if (c.name.includes("ITIL")) return "IT";
  return CERT_FALLBACK_INITIALS[fallbackIndex % CERT_FALLBACK_INITIALS.length];
}

function renderCertifications() {
  const el = $("certGrid");
  if (!el) return;
  el.innerHTML = certifications
    .map(
      (c, i) => `
    <div class="card cert-card" data-index="${i}" tabindex="0" role="button" aria-label="View ${c.name} certificate">
      <div class="cert-icon-wrap">
        ${
          c.badgeImage
            ? `<img class="cert-badge-img" src="${c.badgeImage}" alt="${c.name} badge" loading="lazy">`
            : `<div class="cert-icon">${certInitials(c, i)}</div>`
        }
      </div>
      <div class="cert-copy">
        <div class="cert-name">${c.name}</div>
        <div class="cert-meta">
          ${c.issuer} &middot; ${c.dateLabel} ${c.date}
          ${c.level ? `<span class="cert-level">${c.level}</span>` : ""}
        </div>
        ${c.credlyUrl ? `<span class="cert-credly-link" data-credly-url="${c.credlyUrl}">View on Credly<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></span>` : ""}
      </div>
    </div>`
    )
    .join("");

  el.querySelectorAll(".cert-card").forEach((card) => {
    const c = certifications[Number(card.dataset.index)];
    if (!c.badgeImage) return;

    const open = () =>
      openLightbox({
        image: c.badgeImage,
        title: c.name,
        subtitle: `${c.issuer} &middot; ${c.dateLabel} ${c.date}`,
        linkUrl: c.credlyUrl,
        linkLabel: "View on Credly",
      });

    card.addEventListener("click", open);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });
  });

  el.querySelectorAll(".cert-credly-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.stopPropagation();
      window.open(link.dataset.credlyUrl, "_blank", "noopener");
    });
  });
}

function renderInsights() {
  const el = $("insightCard");
  if (!el) return;
  el.innerHTML = `
    <p>${insights.note}</p>
    <a class="btn btn-outline" href="${insights.cta.href}" target="_blank" rel="noopener">
      ${insights.cta.label}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
    </a>`;
}

const AWARD_ICONS = [
  `<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z"/><path d="M17 5h3a2 2 0 0 1-2 4M7 5H4a2 2 0 0 0 2 4"/>`,
  `<path d="M12 2l2.9 6.26L22 9.27l-5 5.02L18.2 22 12 18.3 5.8 22 7 14.29l-5-5.02 7.1-1.01z"/>`,
  `<circle cx="12" cy="8" r="6"/><path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5"/>`,
];

function renderAwards() {
  const el = $("awardGrid");
  if (!el) return;
  el.innerHTML = awards
    .map(
      (a, i) => `
    <div class="card award-card">
      <div class="award-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${AWARD_ICONS[i % AWARD_ICONS.length]}</svg></div>
      <h3 style="font-size:1.05rem;">${a.title}</h3>
      <div style="margin-top:6px;font-size:12px;font-weight:700;color:var(--accent-2);">${a.year}</div>
      <p style="margin-top:10px;font-size:13.5px;color:var(--text-muted);line-height:1.55;">${a.body}</p>
    </div>`
    )
    .join("");
}

export function renderAll() {
  renderHeroStats();
  renderOutcomes();
  renderPhilosophy();
  renderTimeline();
  renderEducation();
  renderStrategy();
  renderAi();
  renderGovernance();
  renderCloud();
  renderDashKpis();
  renderPrograms();
  renderSpeaking();
  renderCertifications();
  renderInsights();
  renderAwards();

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}
