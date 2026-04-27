# Academic Portfolio Website (GitHub Pages)

This repository is a lightweight, professional academic portfolio website for postdoc applications.  
It uses plain HTML, CSS, and minimal JavaScript so content is easy to edit manually.

## Site Structure

```text
/
├── index.html
├── research.html
├── projects.html
├── publications.html
├── cv.html
├── README.md
├── AGENTS.md
├── css/
│   └── style.css
├── assets/
│   ├── profile.jpg
│   ├── cv.pdf
│   ├── research_statement.pdf
│   ├── selected_work_summary.pdf
│   ├── project_uav_fusion.pdf
│   ├── uav_fusion_pipeline.png
│   ├── uav_tracking_result.png
│   ├── stardnet_figure.png
│   ├── radiogenomic_poster.png
│   └── demo_uav_tracking.gif
└── js/
    └── main.js
```

## What To Edit

1. `index.html`: homepage summary, quick links, recent news.
2. `research.html`: research vision and future directions.
3. `projects.html`: technical project details and project links.
4. `publications.html`: full citations, paper links, DOI links.
5. `cv.html`: education, skills, and profile summary.
6. `assets/`: replace placeholder image/PDF files with real files.

## Placeholder Convention

Search for placeholders like these and replace them:

- `[ADD GOOGLE SCHOLAR LINK]`
- `[ADD GITHUB LINK]`
- `[ADD LINKEDIN LINK]`
- `[ADD EMAIL]`
- `[ADD PAPER LINK]`
- `[ADD DOI]`
- `[ADD FIGURE]`

Tip: run `rg "\\[ADD "` from the repository root to find all placeholders quickly.

## Asset Placement

Put all media and documents into `assets/` using the same filenames currently referenced by HTML.  
If a file is missing, the site shows a graceful fallback message instead of breaking layout.

## Preview Locally

From the repository root:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deploy With GitHub Pages

1. Create a GitHub repository and push this folder as the repository root.
2. In GitHub: `Settings` -> `Pages`.
3. Under `Build and deployment`, choose:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main` (or your default branch), folder `/ (root)`
4. Save. GitHub Pages will publish your site URL.

## Updating Links and PDFs

1. Replace placeholder URLs in HTML with final links.
2. Replace placeholder PDFs (`cv.pdf`, `research_statement.pdf`, etc.) in `assets/`.
3. Refresh your browser to verify all download buttons and links.
