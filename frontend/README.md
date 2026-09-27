# Company Website Frontend (React + Vite)

## Setup
1. `cd frontend`
2. `npm install`
3. Copy `.env.example` to `.env` (defaults to `http://localhost:5000/api` — matches the backend)
4. `npm run dev` — opens at `http://localhost:5173`

Make sure the backend server is running (see `../backend`) so the pages have data to fetch.

## Structure
```
frontend/
  src/
    api.js              fetch helpers for all backend endpoints
    App.jsx              routes
    index.css            design tokens + global styles
    components/
      Navbar, Footer
      ProjectCard, ProjectModal   (click a project to expand details + images)
      ServiceCard
    pages/
      Home.jsx      hero (bg image + About button) -> projects preview -> services preview
      About.jsx     vision & story -> company info -> clients -> meet the team
      Projects.jsx  icon/title grid, click opens detail modal
      Services.jsx  icon/title/subtext list
```

## Design
Soft stone background, muted forest-green accent, Fraunces for headings / Inter for body /
IBM Plex Mono for small labels. Kept deliberately quiet — no bright colors or heavy motion —
for a professional B2B tone. Swap placeholder colors/fonts in `src/index.css` (`:root` block)
once you're ready to apply real branding.

## Next steps (not yet wired up)
- Replace placeholder icon/image paths returned by the backend with real assets
- Point `backgroundImage`, `icon`, `logo`, `photo` fields to real hosted images
- Add real copy once available
