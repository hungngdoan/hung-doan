# Design Direction (decided)

## Concept: the quiet monograph

One long, carefully set page per language, written like a short book about a person rather than a résumé. Facts carry the weight; the design stays out of the way. Short enough to read in five minutes.

Three directions were considered:

1. **Warm editorial personal site** — paper-and-ink, restrained. Chosen.
2. **Bilingual Vietnamese-American life profile** — dual-column VI/EN. Rejected: reads like an official dossier, halves the reading rhythm, and doubles visual noise on mobile.
3. **Refined personal archive** — index-card minimalism. Rejected as the lead concept: too cool and distant for a personal page; its restraint was folded into direction 1 instead.

## Visual system

- **Palette**: warm paper `#f6f1e7`, ink `#26211a`, soft ink `#5f574a`, hairline `#e0d6c4`, lacquer accent `#8a3b2a` (dark theme equivalents in `src/styles/global.css`). One accent, used only for numbering, rules, links, and the full-stop motif.
- **Typography**: Literata Variable for headings and body (editorial, bookish, full Vietnamese support); Be Vietnam Pro for small-caps labels, navigation, and metadata. Text column measures ~42rem.
- **Signature motif**: the accent-colored full stop after the name ("Hung Doan.") — quiet confidence, echoed in the favicon and OG image.
- **Motion**: a single fade-up reveal per section; disabled under `prefers-reduced-motion` and without JavaScript.
- **No** photos, stock imagery, gradients, cards with shadows, or badge clutter.

## Information architecture

Hero (name, one-paragraph positioning, belief line, three verifiable anchor facts), then seven numbered sections:

1. Đôi dòng / A few lines
2. Học vấn / Education (the strongest section)
3. Công việc / Work
4. Chứng chỉ / Credentials (each verifiable)
5. Hệ thống tôi xây / What I build (generalized; explicit confidentiality line)
6. Cách tôi sống / What I live by
7. Ngoài công việc / Off the clock

## Bilingual model

- Vietnamese is the primary edition at the root; English lives at `/en/`. Full mirrored pages, not machine-paired columns.
- Each section title carries a whispered subtitle in the other language, so neither audience ever feels the page was not written for them.
- Copy is written per language, not translated word-for-word: Vietnamese carries the emotional and cultural weight; English is polished and professional.

## Writing rules

- Facts over adjectives. Nothing the reader cannot verify or infer.
- One sharp sentence beats five soft ones. No buzzwords, no motivational tone.
- Everything must remain LinkedIn-safe (see privacy-rules.md).
- Approved fact source: Hung's own public GitHub profile README (degrees, UT Austin MSAI, generalized employer, certifications with Credly links, journal, hobbies). New facts need the same bar: already public, or explicitly approved.
- Vietnamese is the primary voice; English is a polished mirror, not a literal translation. Edit both sides of every `{ vi, en }` pair together.
