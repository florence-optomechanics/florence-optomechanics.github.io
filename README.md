# Florence Optomechanics website

Static site: plain HTML, CSS and a little JavaScript. No build step.

## Structure
- `index.html`, `research.html`, `people.html`, `publications.html`, `news.html`, `join.html` — the six tabs
- `css/style.css` — all styling; colors are CSS variables at the top (`:root`)
- `js/publications-data.js` — **edit this to update the Publications tab**
- `js/news-data.js` — **edit this to add news**: the News tab and the latest three on the Home page update together
- `media.html` — gallery (photos in `images/gallery/`, videos in `videos/`) and the press list; the press list is plain HTML in that file
- `images/` — all figures live here as separate files (never embedded in the HTML)
- `js/main.js` — mobile menu and publication filtering

## Languages
The site is bilingual. English is the default (the pages in the main folder); the Italian versions are in `it/` with the same file names. The two flags at the top right of every page link to the same page in the other language.
- To change text on a page, edit it in **both** `page.html` and `it/page.html`.
- News: `js/news-data.js` holds both languages (`title`/`text` and `title_it`/`text_it`).
- Publications are listed once, in their original language (`js/publications-data.js`).
- The flag icons are `images/flag-it.svg` and `images/flag-gb.svg`.
- Institution logos on the Home page are in `images/logos/` (web copies; keep proportions, do not recolour, and see each institution's identity guidelines). The original logo packages (print files, PDFs) must not be uploaded.

Anything highlighted in yellow (`class="todo"`) is placeholder text to replace.

## Preview locally
    python3 -m http.server 8000
then open http://localhost:8000

## Deploy on GitHub Pages
1. Create a repository (e.g. `optomechanics-florence`) and push these files to the `main` branch.
2. On GitHub: Settings → Pages → Source: "Deploy from a branch" → branch `main`, folder `/ (root)`.
3. The site appears at `https://<user-or-org>.github.io/<repo>/` after a minute or two.
4. Optional custom domain: add it under Settings → Pages and create the DNS record GitHub indicates.

## Adding a figure
Save the file in `images/` (web-sized, ideally under ~300 KB; JPG for photos, PNG/SVG for diagrams) and reference it:

    <figure class="figure">
      <img src="images/my-figure.jpg" alt="Short description">
      <figcaption>Caption text.</figcaption>
    </figure>

The home banner uses `images/hero.jpg` (desktop) and `images/hero-mobile.jpg` (phones). The original `img20.png` is not used by the site and can be deleted or moved out of the folder before publishing.
