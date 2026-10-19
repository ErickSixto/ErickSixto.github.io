# Erick Sixto · Personal Website

Lead-generation site for **Erick Sixto**, a senior Salesforce specialist. Every page is built around one conversion goal: booking a 30 minute discovery call.

**Live site:** [ericksixto.com](https://ericksixto.com)

## What actually ships

The live site is the Next.js app in [`next-app/`](next-app). Nothing else in this repository is deployed.

| | |
|---|---|
| **Framework** | Next.js 16 (App Router) with React 19 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4, configured in CSS via `@theme` in `next-app/src/app/globals.css` |
| **Animation** | Plain CSS keyframes plus a small IntersectionObserver; no animation library |
| **Output** | Static export (`output: "export"`), no server runtime |
| **Fonts** | Archivo and JetBrains Mono via `next/font`, self-hosted at build |
| **Runtime deps** | `next`, `react`, `react-dom`, `tailwindcss-animate` |

### Routes

| Route | Description |
|-------|-------------|
| `/` | Hero, positioning, selected work, and the call to action |
| `/work` | Case studies with the measurable outcome of each engagement |
| `/about` | Background, how he works, and what he refuses to do |

Plus a branded 404, an Open Graph image generated at build time (`src/app/opengraph-image.tsx`), `sitemap.xml`, and `robots.txt`.

Routes from earlier versions of the site (`/services`, `/projects`, `/contact`, `/products`, `/products/access-analyzer`) are kept alive as `noindex` meta-refresh stubs in `next-app/public/`, so old inbound links do not land on a 404.

All page content is in the server-rendered HTML. Motion is progressive enhancement: with JavaScript blocked or failed, the site loses its entrance animation and nothing else.

## Development

All commands run from `next-app/`:

```bash
npm ci
npm run dev
```

The dev server listens on [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # static export into next-app/out
npm run lint
```

## Deployment

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds `next-app/` on every push to `main` and publishes `next-app/out` to GitHub Pages. The custom domain comes from `next-app/public/CNAME`, which is copied into the export automatically.

## Repository layout

`next-app/` is the whole website. The repository root holds only documentation and the deploy workflow. An earlier Create React App version of the site used to live at the root; it was never deployed after the move to Next.js and was removed on 2026-10-19. It remains in git history if you ever need it.

## Brand and product context

- [`PRODUCT.md`](PRODUCT.md) covers positioning, the audience, scope, and what the site is for.
- [`BRAND.md`](BRAND.md) is the source of truth for voice, copy rules, calls to action, and canonical proof numbers.
- [`DESIGN.md`](DESIGN.md) is the source of truth for the visual system: color, type, layout, components, and the named rules. [`DESIGN.json`](DESIGN.json) is its machine-readable sidecar.

When they disagree: `next-app/src/data/mock.ts` wins on figures, BRAND.md on voice, DESIGN.md on anything visual.

## License

All rights reserved. This is a personal portfolio site, not intended for reuse or redistribution.
