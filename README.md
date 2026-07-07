# Xinran Han — Portfolio

Personal portfolio site for Xinran Han, an interactive design specialist and independent producer working across video, photography, and design.

Built with [Astro](https://astro.build).

## Pages

- **Home** — `/`
- **Video** — `/video/`
- **Photography** — `/photography/`
- **Design** — `/design/`
- **Art Installation** — `/art-installation/`

## Development

```sh
npm run dev          # Start dev server
npm run build        # Generate WebP images + build site
npm run preview      # Preview production build
```

## Project Structure

```
src/
├── assets/          # Fonts, audio
├── components/      # Reusable components
├── data/            # Site metadata and portfolio content
├── layouts/         # Layout.astro (shared shell)
└── pages/           # Route pages (6)
public/              # Static assets (images, videos, SVGs)
scripts/             # WebP generation pipeline
```

## Deployment

Deployed to GitHub Pages via `.github/workflows/deploy.yml`.
