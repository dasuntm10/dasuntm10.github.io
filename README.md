# Portfolio Site

Marketing/portfolio website for Dasun Theekshana's freelance AI engineering practice.

**Status: built (Phase 1 done), not yet shipped.** The site is implemented in Astro at the repo root, using the dark-violet direction from the [Claude Design canvas](https://claude.ai/code/artifact/74bf7441-b07a-4d1e-b02a-14b320c9ade7) — desktop + mobile layouts, plus two alternate direction sketches. Canvas source files are in [design/](./design/).

- **[PLAN.md](./PLAN.md)** — build (Astro static), ship (GitHub Pages), launch checklist, and SEO plan
- **[design/](./design/)** — canvas artboards (`*.dc.html`), layout (`canvas.json`), and the seeded canvas file

Positioning, copy, and channel strategy come from the [marketing playbook](../Freelance%20Marketing%20%26%20Client%20Acquisition%20Playbook.md) one level up.

## Working on the design

Edit the `design/*.dc.html` artboards (or edit visually on the canvas link above and save). The canvas and this repo are synced manually — if you save visual edits on the canvas, pull them back here before editing the files, so neither side clobbers the other.

## Building the site

```
npm install
npm run dev     # http://localhost:4321
npm run build   # outputs to dist/
```

Source lives in `src/` — `src/pages/index.astro` assembles the section components in `src/components/`, content copy is centralized in `src/data/content.ts`, and design tokens (the dark-violet palette, fonts, spacing) are in `src/styles/tokens.css`. See [PLAN.md](./PLAN.md) for Phase 2 (ship) and Phase 3 (launch checklist) — the booking link is still a `mailto:` placeholder until a real Cal.com/Calendly link is wired in.
