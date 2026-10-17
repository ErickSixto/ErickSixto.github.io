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
| **Animation** | Framer Motion |
| **Output** | Static export (`output: "export"`), no server runtime |

### Routes

| Route | Description |
|-------|-------------|
| `/` | Hero, positioning, selected work, and the call to action |
| `/work` | Case studies with the measurable outcome of each engagement |
| `/about` | Background, how he works, and what he refuses to do |

Plus a branded 404, an Open Graph image generated at build time (`src/app/opengraph-image.tsx`), `sitemap.xml`, and `robots.txt`.

Routes from earlier versions of the site (`/services`, `/projects`, `/contact`) are kept alive as `noindex` meta-refresh stubs in `next-app/public/`, so old inbound links do not land on a 404.

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

## The unused Create React App at the repository root

The repository root still holds the original Create React App version of this site: `src/`, `public/`, `craco.config.js`, `tailwind.config.js`, `components.json`, `jsconfig.json`, `postcss.config.js`, the root `package.json` (named `erick-sixto-portfolio`), and `yarn.lock`.

None of it is built, deployed, or maintained. It is kept only as history. If you are changing the website, you want `next-app/`. The root CRA is a candidate for deletion.

## Brand and product context

- [`BRAND.md`](BRAND.md) is the source of truth for voice and copy rules.
- [`PRODUCT.md`](PRODUCT.md) covers positioning, the audience, and what the site is for.

## License

All rights reserved. This is a personal portfolio site, not intended for reuse or redistribution.
