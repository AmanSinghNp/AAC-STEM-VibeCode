# Vibe Site Template

A beginner-friendly website template for a first AI-assisted coding session.

It is designed for students who are new to code:

- No backend
- No database
- No API keys
- No paid services
- Deploys cleanly to Vercel Hobby
- Most edits happen in `site.config.js`

## Quick Start

Open `site.config.js` and change:

- The site name
- The tagline
- The colors
- The cards
- The gallery items
- The contact links

Then open `index.html` in a browser.

Optional local preview server:

```bash
python3 -m http.server 5173
```

Then visit `http://localhost:5173`.

## Deploy To Vercel

1. Create a new GitHub repository.
2. Upload or push these files.
3. Go to Vercel.
4. Click **Add New > Project**.
5. Import the GitHub repository.
6. Keep the default settings. This is a static site, so no framework is needed.
7. Click **Deploy**.

The site should end up at a URL like:

```text
https://your-project-name.vercel.app
```

## Good First Challenges

1. Change the project idea and hero text.
2. Replace the feature cards with your own.
3. Change the colors in `site.config.js`.
4. Add one more gallery item.
5. Add a button link to a real GitHub profile or project.
6. Ask AI to add one small feature, then test it.

## Safety Rules

Do not put these in the website:

- Home address
- Phone number
- School ID
- Passwords
- API keys
- Private photos
- Anything you would not want indexed by Google

## Files

```text
index.html              The page structure
styles.css              The visual design
site.config.js          The easy editing file
script.js               The code that fills the page
assets/hero.svg         Starter visual
STUDENT-CHEATSHEET.md   Student instructions
TEACHER-RUNBOOK.md      Facilitator notes
PROMPTS.md              AI prompts for the session
```
