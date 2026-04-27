# AGENTS Instructions for Future Codex Edits

## Content and Accuracy

- Maintain an academic, professional tone suitable for postdoc applications.
- Do not invent any publication, metric, award, collaborator, institution, or result.
- If details are missing, use explicit placeholders such as `[ADD PAPER LINK]`, `[ADD DOI]`, `[ADD FIGURE]`, `[ADD CODE LINK]`.

## Design and UX

- Keep design clean, minimal, and professional.
- Preserve white background, dark text, and blue accent links.
- Keep layout responsive across desktop and mobile.
- Avoid flashy animations and unnecessary visual clutter.
- Do not add unnecessary icons.

## Technical Constraints

- Use plain HTML/CSS with minimal JavaScript only when needed.
- Do not introduce React, Next.js, Astro, or heavy dependencies.
- Keep files easy to edit manually.
- Preserve shared stylesheet usage (`css/style.css`) across all pages.
- Preserve graceful fallback behavior for missing images.

## Structure and Navigation

- Keep this multi-page structure unless explicitly requested otherwise:
  - `index.html`
  - `research.html`
  - `projects.html`
  - `publications.html`
  - `cv.html`
- Keep navigation consistent: Home | Research | Projects | Publications | CV.
- Ensure internal links remain correct after edits.

## Placeholders and Assets

- Keep placeholder tokens easy to search and replace.
- Keep assets inside `assets/` and update references carefully.
- Do not remove placeholder files unless replacements are added.

## Deployment

- Maintain compatibility with GitHub Pages static hosting.
- Avoid build steps that require Node/npm or server-side rendering.
