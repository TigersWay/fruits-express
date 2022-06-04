# fruits-express  ![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/tigersway/fruits-express?style=flat-square) ![GitHub last commit](https://img.shields.io/github/last-commit/tigersway/fruits-express?style=flat-square) ![GitHub issues](https://img.shields.io/github/issues/tigersway/fruits-express?style=flat-square) 

Simple data-oriented & multi-language starter with Eleventy & TailwindCSS

Demo:
[![Netlify](https://img.shields.io/badge/Netlify--none?style=social&logo=netlify)](https://fruits-express.netlify.app)
[![Cloudflare](https://img.shields.io/badge/Cloudflare_pages--none?style=social&logo=cloudflare)](https://fruits-express.pages.dev)
[![Render](https://img.shields.io/badge/render--none?style=social&logo=eleventy&logoColor=46e3b7)](https://fruits-express.onrender.com)
[![Vercel](https://img.shields.io/badge/vercel--none?style=social&logo=vercel)](https://fruits-express.vercel.app)


### "Generic builder"

You can use the usual `npm run build` script to generate every configuration you should need (command line or dotenv-cli):
- `SITE_URL=https://fruits-express.xyz CLOUDINARY_CDN_URL=https://res.cloudinary.com/myaccount npm run build`
- `SITE_URL=https://yourname.github.io PATHPREFIX=fruits-express npm run build`
- `SITE_URL=https://example.com PATHPREFIX=abcd npm run build`

Available variables are:
- SITE_URL (default to https://fruits-express.com)
- CLOUDINARY_CDN_URL (no default)
- PATHPREFIX (no default)

### CHANGELOG

**v2.2.0**
- Added a "Generic builder"
- Fix images url without CDN

**v2.1.0**
- Added github-pages demo (great to check the url filter)

**v2.0.1**
- Fix Atom feed (Links & minification)

**v2.0.0**
- Additions & New features
  - Mono dataset but multi-language and some light markdown
  - New Eleventy dev-server with express-static middleware
  - html-minifier
  - RSS/Atom
  - sitemap.xml
- Updates:
  - Dependencies:
    - Eleventy v2.x among others
    - Concurrently (npm-run-all is clearly dead)
  - Sarabun v13 (font)
  - DataSet images to png

**v1.0.0**
- Eleventy v1.x
- TailwindCSS v3.x
