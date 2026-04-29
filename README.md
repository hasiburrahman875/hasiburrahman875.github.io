# Research Portfolio Website (GitHub Pages)

This repository is a lightweight, research-focused academic portfolio for postdoc applications.
It uses plain HTML, CSS, and minimal JavaScript so content stays easy to edit manually.

## Site Structure

```text
/
├── index.html
├── research.html
├── projects.html
├── publications.html
├── teaching.html
├── profile.html
├── thoughts.html
├── writings/
│   ├── reliability-before-leaderboard.html
│   ├── why-temporal-context-matters.html
│   └── coursework-to-research-confidence.html
├── cv.html
├── projects/
│   ├── kraft.html
│   ├── stard-net.html
│   ├── v-usdt.html
│   ├── aipr-dataset.html
│   └── radiogenomic.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   └── news-data.js
├── assets/
│   └── (images, PDFs, and cv.pdf)
├── CV_Hasibur_Rahman_postdoc.pdf
├── kraft-demo/
└── stardnet-demo/
```

## Main Content Goals

1. `index.html`: research-first homepage with selected publications and featured projects.
2. `projects.html`: every project has quick links for code/demo/paper/presentation/details.
3. `projects/*.html`: one detailed project page per project.
4. `teaching.html`, `profile.html`, `thoughts.html`: complete personal package around research identity.
5. `cv.html`: full academic details and downloadable CV.
6. `postdoc.html`: research collaboration and postdoctoral fit overview.

## Editing Tips

- Add project figures into `assets/` and update references in project pages.
- Keep demo files in current folders or update links if file names move.

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

1. Push this folder as the repository root.
2. In GitHub: `Settings` -> `Pages`.
3. Set source to `Deploy from a branch` and choose your default branch `/ (root)`.
4. Save and wait for publish.
