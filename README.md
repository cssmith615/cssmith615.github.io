# cssmith615.github.io

Personal portfolio site for Charles Smith — Business Process Engineer, Navy Veteran, and Builder.

Live at: **https://cssmith615.github.io**

## Stack

- React 18 + Vite
- Tailwind CSS v4
- React Router v6 (hash-based for GitHub Pages)
- Deployed via `gh-pages`

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to GitHub Pages

```bash
npm run deploy
```

This runs `vite build && gh-pages -d dist`. The `gh-pages` package pushes `dist/` to the `gh-pages` branch, which GitHub Pages serves.

**Prerequisites:**
- The GitHub remote must be set to `git@github.com:cssmith615/cssmith615.github.io.git` (or HTTPS equivalent)
- GitHub Pages must be configured to serve from the `gh-pages` branch in repository settings

## Content Updates

| Thing to update | Where |
|---|---|
| Resume PDF | Drop `resume.pdf` into `public/`, link is already wired |
| Profile photo | Drop image into `src/assets/`, update `About.jsx` photo placeholder |
| LinkedIn URL | Update in `Contact.jsx` and `Footer.jsx` |
| Project GitHub links | Update in `pages/Projects.jsx` |

## File Structure

```
src/
├── App.jsx              # Router and layout shell
├── index.css            # Tailwind + global styles
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProjectCard.jsx
│   ├── SkillTag.jsx
│   └── TimelineItem.jsx
└── pages/
    ├── Home.jsx
    ├── About.jsx
    ├── Projects.jsx
    └── Contact.jsx
```
