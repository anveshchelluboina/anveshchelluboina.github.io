# Anvesh Chelluboina Portfolio

## Project files
- `index.html` is the portfolio homepage, services, travel gallery, and reviews section.
- `slides.html` is the six-slide profile presentation.
- `flapboard.css` contains the shared responsive styles.
- `flapboard.js` contains the gallery, lightbox, mobile navigation, slides, and review form behavior.
- `src/components/HeroSection.jsx` composes the split-screen editorial hero.
- `src/components/PassportViewer.jsx` contains the accessible CSS passport, 24 supplied country stamps, and passport spreads.
- `src/components/PassportCanvas.jsx` is the lazy-loaded React Three Fiber / Drei 3D scene.
- `src/components/FlightPaths.jsx` renders the animated, visibility-aware SVG routes.
- `src/styles/passport.css` contains the modular hero, fallback, and stamp styles.
- `src/main.jsx` mounts the progressive React hero.
- `vite.passport.config.js` builds the components as static assets at `assets/passport-hero.js` and `assets/passport-hero.css` for GitHub Pages.
- `package.json` and `package-lock.json` pin the React, Three.js, Fiber, Drei, Framer Motion, and Vite toolchain.
- `assets/photos/` contains the original portfolio and travel photographs.

The site is static and compatible with GitHub Pages. There is no server or review database in this repository. The six testimonials in `flapboard.js` were supplied by the site owner; no dates or verified-client claims are shown. New submissions go to the configured Formspree endpoint for moderation and are not published automatically.

Only general career areas are documented in this project. Add job titles, employer names, and dates to the experience section only when verified details are available; an editable source comment marks this location.

## Preview locally
From the project directory, run:

```sh
npm install
npm run build:passport
python3 -m http.server 8000
```

Open `http://localhost:8000/` for the homepage or `http://localhost:8000/slides.html` for the profile slides. Stop the server with Ctrl+C.

The hero is a centered, 1280px maximum editorial grid with a 1:1.1 desktop split, an 85vh minimum, and a stable, bounded passport stage. It stacks into one column below 900px. React mounts progressively over the static hero fallback. The Three.js canvas is dynamically imported only when its hero approaches the viewport and WebGL is available on a fine-pointer device. Smaller/touch screens, reduced-motion, WebGL-disabled, or failed-load cases use the interactive CSS perspective passport stack. The SVG flight path pauses when it leaves the viewport. After changing files under `src/`, run `npm run build:passport` and publish the source plus generated `assets/passport-hero.js` and `assets/passport-hero.css` so GitHub Pages can serve the enhancement.

## Review submissions: owner verification required
The review form in `index.html` has a Formspree HTTPS endpoint configured. The endpoint lets the page attempt a submission, but this repository inspection did not submit a review and cannot confirm that the endpoint is active, routes to the intended inbox, or has the required account-side moderation and spam settings. A static GitHub Pages site cannot securely receive or centrally store reviews by itself.

1. Sign in to the Formspree account that owns the configured form. Confirm the endpoint is active, the allowed domain includes the deployed GitHub Pages host, submissions route to the intended inbox, and spam protections are enabled.
2. Submit a clearly identified test review from the live site and verify receipt in the provider inbox. The provider receives the display name, selected service, review text, optional rating and date, and publication-consent field. Do not request sensitive identity, visa, or academic records through this form.
3. Review submissions manually. Do not assume a received review is authentic or verified. Reject spam, private information, or reviews that do not meet your publication policy.
4. Publish only reviews you approve. Add approved review objects to the `approvedReviews` array in `initReviewForm()` in `flapboard.js`, then commit and publish the change. Set `verified: true` only after you have actually verified the client. Reviews are not fetched or published automatically.

A submission is reported as received only after the endpoint returns a successful HTTP response. A failed or unconfirmed request is not presented as a success. The built-in honeypot is only one spam measure; use the provider's server-side protections as well. Review the provider's privacy and retention terms before accepting reviews.

## Publish through GitHub Pages
The site is served from the repository's `main` branch. After reviewing your changes, publish with:

```sh
git add index.html slides.html flapboard.css flapboard.js README.txt
git commit -m "Update portfolio"
git push origin main
```

For passport hero changes, also stage the `src/` modules, `vite.passport.config.js`, `package.json`, `package-lock.json`, and the generated `assets/passport-hero.js` and `assets/passport-hero.css` assets.

GitHub Pages deploys from the configured repository source. Check the repository's Pages or Actions status for deployment completion, then verify the live homepage and `slides.html` URL. A successful push alone does not confirm that Pages has finished publishing.