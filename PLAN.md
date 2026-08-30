# Portfolio Site — Build, Ship & SEO Plan

Companion to the [design canvas](https://claude.ai/code/artifact/74bf7441-b07a-4d1e-b02a-14b320c9ade7) (source in [design/](./design/)) and the [marketing playbook](../Freelance%20Marketing%20%26%20Client%20Acquisition%20Playbook.md). The playbook's rule governs scope: *a static page beats no site; don't gold-plate it.* The site's job is converting visitors who arrive from LinkedIn, Upwork profiles, and cold outreach — not winning design awards or Google rankings.

## Decisions

| Decision | Choice | Why |
|---|---|---|
| Framework | **Astro** (static output) | Content-driven, zero JS by default (fast = converts), TypeScript, content collections for future case-study pages |
| Styling | Plain CSS with custom properties (design tokens from the canvas) | One page doesn't need Tailwind; tokens keep the canvas → code translation exact |
| Hosting | **GitHub Pages** via Actions | Free, no new accounts, deploys on push. (Repo must flip public at launch — see Phase 3. Fallback: Vercel free tier if Pages limits chafe) |
| Domain | Custom domain, ~$12/yr (e.g. a `.dev` or `.com` on the personal name) | **[DOMAIN TBD — Dasun picks]**; site works on `dasuntm10.github.io` until then |
| Analytics | None at launch; add a privacy-light option (Plausible/GoatCounter) only if traffic decisions ever need it | YAGNI |
| Contact | `mailto:` + Cal.com/Calendly booking link | **[BOOKING LINK + EMAIL TBD]** — do not launch with the placeholder |

## Design tokens (from the approved canvas direction)

```
--bg: #faf9f6;        --ink: #1c1b18;      --muted: #57544c;
--faint: #8a867a;     --line: #e4e1d8;     --card: #ffffff;
--accent: #0f766e;    --accent-dark: #115e59;  --panel: #f4f2ec;
Display: 'Instrument Serif'   Body: 'Instrument Sans'   Mono: 'IBM Plex Mono'
```

Fonts self-hosted (`@fontsource` packages) rather than Google Fonts runtime requests — faster, no third-party call.

## Phase 1 — Build (1–2 days)

- Scaffold Astro project in this repo (`src/pages/index.astro`, `src/components/`, `src/styles/tokens.css`).
- Implement the canvas's Main artboard as the single page: Nav, Hero, Proof strip, Services (3 cards), Selected Work (3 case cards), Process (4 steps + quote band), About + CTA card, Footer.
- Real responsive CSS (the Mobile artboard is the target at 390px): grid → single column, type scale down, nav → simple anchor row (no JS hamburger unless needed).
- Copy comes from the canvas verbatim; the two `[placeholder]` facts (contact email, booking link) stay visibly bracketed until Phase 3.
- Case-study links: point at the GitHub repos (AFDE README, grounded-support-agent README) until dedicated case-study pages exist. Never a dead `#`.

**Verify:** `npm run build` clean; page renders correctly at 390px / 768px / 1440px in the browser preview; no horizontal scroll at any width; every link resolves; Lighthouse (local) ≥ 95 performance / 100 accessibility on the built output.

## Phase 2 — Ship (half a day)

- GitHub Actions workflow: build on push to `master`, deploy `dist/` to GitHub Pages.
- Enable Pages in repo settings (Actions source).
- When the domain is bought: CNAME file + DNS (apex A records or CNAME to `dasuntm10.github.io`), enforce HTTPS.

**Verify:** push → live URL serves the site; HTTPS green; a hard refresh on a phone over mobile data loads in under 2 seconds.

## Phase 3 — Launch checklist (blockers before sharing the URL anywhere)

- [x] Replace `[contact@yourdomain.com]` with the real freelance email — now `dasuntm10@gmail.com` (from the resume).
- [ ] Create the Cal.com/Calendly booking page; wire both "Book a 15-minute audit" buttons to it.
- [x] LinkedIn URL in the About section — now linked to linkedin.com/in/dasun-theekshana.
- [ ] Record and embed (or link) at least one 60–120s demo video — the playbook's strongest-proof rule; a poster-image link to YouTube/Loom is fine, no heavy embed.
- [ ] Flip repo public (required for free GitHub Pages) — confirm nothing sensitive in history first.
- [ ] Add the live URL to: LinkedIn profile, GitHub profile, Upwork profile, email signature.

## Phase 4 — SEO & sharing (half a day; conversion-first, rankings-second)

- **Meta & Open Graph:** unique `<title>` ("Dasun Theekshana — AI Engineer"), meta description with the positioning line, OG + Twitter card tags with a real 1200×630 OG image (export the hero region from the canvas as PNG) — this is what makes links unfurl properly in LinkedIn/WhatsApp/Slack, which is where the traffic actually comes from.
- **Structured data:** JSON-LD `Person` + `ProfessionalService` (name, url, sameAs → GitHub/LinkedIn, areaServed, knowsAbout).
- **Hygiene:** `sitemap.xml` + `robots.txt` (Astro integrations), canonical URL, semantic headings (one `h1`), descriptive alt text, self-hosted fonts with `font-display: swap`.
- **Performance as SEO:** zero-JS static output already handles Core Web Vitals; keep images ≤ 100KB (AVIF/WebP).
- **Content strategy (later, optional):** case-study pages are the only SEO content worth writing — each targets a long-tail buyer query ("invoice extraction automation for accounting firms"). One per real client engagement, per the playbook's cadence. No blog for blogging's sake.

**Verify:** OG debuggers (LinkedIn Post Inspector, opengraph.xyz) render the card correctly; Rich Results test passes the JSON-LD; `site:` query indexes within a couple of weeks of submitting the sitemap in Search Console.

## Maintenance

The site changes when the business changes — new case study, new testimonial, pricing update. Each is: edit content → push → auto-deploy. Testimonials section gets added after the first two real client quotes exist (per the playbook, ask at every delivery); don't scaffold an empty section for it.
