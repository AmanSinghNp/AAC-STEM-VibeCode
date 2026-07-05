# Teacher Runbook

## Goal

Students ship a static website from a template to GitHub and Vercel.

## Recommended Setup

- Students use GitHub accounts.
- Students use ChatGPT/Codex accounts only if they meet age and consent requirements.
- Vercel should be instructor-led for students under Vercel's account age requirement.
- Avoid paid accounts, cards, databases, auth, and API keys.

## Timing

### 0-10 min: Explain The Map

```text
Code lives in GitHub.
Vercel reads GitHub.
Every deploy makes a public website.
AI helps write code, but humans test it.
```

### 10-25 min: Fork Or Copy The Template

Each student creates their own copy.

Preferred:

1. Instructor pushes this folder to GitHub.
2. Mark the repo as a template.
3. Students click **Use this template**.

Fallback:

1. Students download a zip.
2. Students upload files into a new GitHub repo.

### 25-55 min: First Customisation

Students edit only `site.config.js`.

Required changes:

- Site name
- Hero text
- Theme colors
- Three feature cards
- Two contact links

### 55-75 min: AI Change

Students ask for one small feature:

- Add events
- Add FAQ
- Add a countdown
- Add a gallery item
- Add a theme toggle

Keep changes small.

### 75-90 min: Deploy

Students deploy through Vercel if age/account setup allows.

Otherwise, collect GitHub links and deploy a few selected projects from an instructor account.

## Troubleshooting

### The Page Is Blank

Check browser console. Most likely:

- Broken JavaScript syntax in `site.config.js`
- Missing comma between objects
- Quotation marks are mismatched

### The Styling Disappeared

Check that `styles.css` is still beside `index.html`.

### Vercel Shows The Wrong Project

The student imported the wrong GitHub repository or deployed from the wrong folder.

### The Site Has Private Info

Remove it from the website, commit again, and redeploy. If the repo is public, also remove the content from Git history or create a fresh repo.

## Room Rules

- No real personal details.
- No secrets in code.
- No harassment or impersonation sites.
- No login systems today.
- No payments today.
- Small prompts beat giant prompts.

