# Md. Razu Ahammed Molla Portfolio

A static portfolio site for Md. Razu Ahammed Molla, positioned for senior full-stack engineering and technical lead opportunities.

The site is built with plain HTML, CSS, and JavaScript:

- No backend
- No database
- No API keys
- Deploys cleanly to Vercel Hobby
- Most content edits happen in `site.config.js`

## Quick Start

Run a local preview server:

```bash
python3 -m http.server 5173
```

Then visit:

```text
http://localhost:5173
```

## Edit Content

Open `site.config.js` to change:

- Hero copy
- Proof stats
- Strength cards
- Work domains
- Experience bullets
- Contact links
- Theme colors

The hero image lives at `assets/razu-hero.png`.

## Deploy To Vercel

1. Push the repository to GitHub.
2. Go to Vercel.
3. Click **Add New > Project**.
4. Import the GitHub repository.
5. Keep the default settings. This is a static site, so no framework is needed.
6. Click **Deploy**.

## Files

```text
index.html          Page structure
styles.css          Visual design and responsive layout
site.config.js      Portfolio content and theme values
script.js           Renders config-driven sections
assets/razu-hero.png  Generated hero image
assets/favicon.svg  Site icon
```
