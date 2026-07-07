# Hung Doan — Personal Website

Bilingual (Vietnamese-first) static personal site, built with [Astro 5](https://astro.build) and deployed to GitHub Pages. A quiet editorial profile, not a résumé: one long page per language, warm paper-and-ink palette, every fact verifiable and LinkedIn-safe. Full design and content rules: [docs/design-direction.md](docs/design-direction.md).

- Vietnamese edition: `https://hungngdoan.github.io/hung-doan/`
- English edition: `https://hungngdoan.github.io/hung-doan/en/`

## Quick start

```bash
npm install
npm start          # dev server at http://localhost:4321/hung-doan/
npm run build      # static output in dist/
npm run preview    # serve the built site locally
npm run check      # list unfilled content placeholders
```

## Editing content

All copy lives in **one file**: [src/content/site.ts](src/content/site.ts).

- Every visible string is a `{ vi: '...', en: '...' }` pair. Edit both sides so the editions stay in sync.
- Square brackets mark placeholders, e.g. `[năm tốt nghiệp]`. `npm run check` lists what remains.
- An empty `href: ''` or `email: ''` hides that link until you fill it in.
- To add a certification, degree, or role, copy an existing block in the matching array.

Before publishing: `npm run check` is clean, new facts pass [docs/privacy-rules.md](docs/privacy-rules.md), and `npm run build` succeeds.

## Deploying

Every push to `main` deploys automatically via [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

One-time setup: push the repo to GitHub, then **Settings → Pages → Source: GitHub Actions**.

Custom domain later: add it under Settings → Pages, set `site` to the domain and `base` to `'/'` in [astro.config.mjs](astro.config.mjs), and update `site.url` in [src/content/site.ts](src/content/site.ts) and `public/robots.txt`.

## Project structure

```
├── astro.config.mjs          # site URL, base path, i18n, sitemap
├── src/
│   ├── content/site.ts       # ALL text content, both languages — edit here
│   ├── layouts/Base.astro    # <head>, SEO/OG meta, hreflang, motion script
│   ├── components/           # Home, Header, Section, Footer
│   ├── styles/global.css     # design tokens and all styling
│   └── pages/                # index.astro (vi), en/index.astro (en)
├── public/                   # favicon.svg, og.png, robots.txt
├── scripts/                  # check-placeholders.mjs, generate-og.py
└── .github/workflows/deploy.yml
```

## Notes

- **Social image**: regenerate with `python3 scripts/generate-og.py` (needs Pillow) if the name, positioning, or palette changes.
- **Accessibility**: semantic landmarks, skip link, AA contrast in light and dark, correct `lang`/`hreflang` everywhere, motion disabled under `prefers-reduced-motion`.
- **Privacy**: the repo and its history are permanently public; everything must be LinkedIn-safe. Rules: [docs/privacy-rules.md](docs/privacy-rules.md).
- **License**: none selected yet; all rights reserved. See [LICENSE_PENDING.md](LICENSE_PENDING.md).
