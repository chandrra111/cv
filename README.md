# Balachandra Srinevasalu — Executive Portfolio

A premium, executive-level portfolio site positioning Balachandra as a **Director / VP / Head of Data & Analytics** candidate. Built as dependency-light static HTML/CSS/JS — no build step, deploys straight to GitHub Pages.

## Tech stack & why

| Layer | Choice | Why |
|---|---|---|
| Markup | Semantic HTML5 | Screen-reader and ATS-parser friendly; every section is a real `<section>`/`<h2>`, not a `<div>` soup. |
| Styling | Hand-rolled CSS design system (custom properties, no framework) | Full control over the "executive" visual language (navy/gold/teal, serif+sans pairing) without a Tailwind/PostCSS build step — critical since Node isn't set up on this machine. |
| Interactivity | Vanilla ES modules (`assets/js/*.js`) | No React/bundler needed; loads instantly, easy for a non-developer to hand-edit later. |
| Charts | Chart.js (CDN) | The one external dependency — used only for the BI Modernization dashboard demo. Loads lazily (only when that tab is opened). |
| Fonts | Google Fonts (Fraunces + Inter, CDN) | Serif headings read as executive/editorial; Inter keeps body copy crisp and readable. |
| Hosting | GitHub Pages, served from your existing `cv` repo | Free, fast, no new repo to manage — live at `https://balachandra-srinevasalu.com/` (custom domain, DNS via GoDaddy). |

If you later want to evolve this into a Next.js/React/TypeScript/Framer Motion codebase (e.g., to add a CMS-backed blog or server-rendered contact form), the content model in `assets/js/data.js` is already shaped like the props/content you'd pass into React components — porting it later is straightforward.

## Project structure

```
portfolio/
├── index.html                 # All sections, semantic markup, SEO/JSON-LD
├── robots.txt / sitemap.xml / .nojekyll
├── assets/
│   ├── css/
│   │   ├── variables.css      # Design tokens, light + dark theme
│   │   ├── base.css           # Reset, typography, utility classes
│   │   ├── components.css     # Buttons, cards, nav, tabs, timeline, dashboard, etc.
│   │   ├── sections.css       # Section-specific layout (hero, roadmap, journey…)
│   │   ├── animations.css     # Keyframes + loading veil
│   │   └── responsive.css     # Breakpoints
│   ├── js/
│   │   ├── data.js            # ALL editable content lives here
│   │   ├── render.js          # Renders data.js into the DOM
│   │   ├── theme.js           # Dark/light toggle (persisted to localStorage)
│   │   ├── nav.js              # Sticky nav, scrollspy, mobile menu, back-to-top
│   │   ├── tabs.js             # Expertise / Credentials tab switching
│   │   ├── reveal.js           # Scroll-triggered fade-in animations
│   │   ├── counters.js        # Animated number counters
│   │   ├── charts.js           # BI dashboard charts (lazy-loaded)
│   │   ├── contact.js          # Contact form submit handling
│   │   └── main.js             # Entry point — wires everything together
│   ├── img/                    # profile.png, favicon.svg
│   └── resume/                 # Downloadable resume PDF
└── README.md
```

## Editing content

**Almost everything on the page is data-driven.** To change any number, bullet, title, or date, edit `assets/js/data.js` — you don't need to touch HTML or CSS. The file is organized into clearly named exports (`heroStats`, `journey`, `programs`, `certifications`, `awards`, etc.), each mirroring one section of the site.

To change static/structural copy (hero headline, section intros, the flagship Databricks callout), edit the relevant block directly in `index.html`.

## Swapping the photo or résumé

- Replace `assets/img/profile.png` with a higher-resolution headshot if you have one — the current photo was extracted from your resume PDF at 640×638px, which is fine for the current display size but will look soft if you ever enlarge the hero photo further. Keep it roughly square; the CSS crops it to a circle automatically.
- Replace `assets/resume/Balachandra_Srinevasalu_Resume.pdf` with an updated résumé any time — the "Download Résumé" button always points to this exact filename.

## Contact form setup (required before going live)

The contact form currently shows a friendly "not connected yet" message instead of silently failing. To make it actually deliver messages to your inbox:

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Create a new form, copy the endpoint it gives you (looks like `https://formspree.io/f/abc123xy`).
3. In `index.html`, find `<form ... action="https://formspree.io/f/YOUR_FORM_ID">` and replace `YOUR_FORM_ID` with your real ID.
4. Formspree's free tier (50 submissions/month) is plenty for a portfolio contact form.

## Deploying to GitHub Pages

This site publishes from **`github.com/chandrra111/cv`** on the `main` branch, root folder — already pushed and live. Pages settings: **Settings → Pages** → Source: **Deploy from a branch** → Branch: **main**, folder **/(root)**.

### Custom domain

The site is served at **`https://balachandra-srinevasalu.com/`** (not the default `chandrra111.github.io/cv/` path — GitHub auto-redirects the old URL to this one). This is configured two ways, both already done:

1. **GitHub → Settings → Pages → Custom domain**: set to `balachandra-srinevasalu.com`. This is what generates the `CNAME` file at the repo root (already committed) — GitHub Pages reads that file on every deploy to know which domain to serve. **Don't delete `CNAME`**, or the custom domain breaks on the next push.
2. **DNS at GoDaddy** (`balachandra-srinevasalu.com` → DNS Records):
   - Four `A` records on `@` pointing to GitHub Pages' IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One `CNAME` record: `www` → `chandrra111.github.io`

All URLs in this project (canonical link, Open Graph tags, JSON-LD, sitemap.xml, robots.txt) are set to `https://balachandra-srinevasalu.com/`. If you ever change domains or repos again, search-and-replace that string across `index.html`, `sitemap.xml`, `robots.txt`, and update/remove `CNAME`.

### Making future edits

After the first push, any update is just:

```bash
git add -A
git commit -m "Describe what changed"
git push
```

GitHub Pages redeploys automatically within a minute of each push.

## Before you publish — things to double check

- **Contact form** — must be configured (see above) or messages silently won't arrive.
- **LinkedIn URL** — set to `linkedin.com/in/chandrra` throughout the site.
- **Compensation/notice period** — deliberately left off this public site (unlike your internal CV drafts), since that's negotiation-sensitive information; keep it in your private resume/cover letter instead.
- **Publications/Insights section** — currently a placeholder pointing to your LinkedIn, since no existing articles were found. Once you publish your first piece, add it as a card in `data.js` under `insights`.
- **Testimonials** — the brief asked for a testimonials section, but no existing recommendations were available to use truthfully. Recommend pulling 2–3 LinkedIn recommendations (with permission) and adding them as a new section before your next round of outreach.

## Ideas to push this further

- A downloadable **one-page "board brief"** version of your resume (distinct from the full CV) for time-constrained executive recruiters.
- A **case-study PDF** for the Databricks Lakehouse migration once it's delivered in 2026 — turns your biggest program into a leave-behind document.
- Short **video introduction** (60–90 seconds) embedded in the hero — recruiters increasingly expect this at Director+ level.
- **Google Analytics or Plausible** to see which sections recruiters actually spend time on.
