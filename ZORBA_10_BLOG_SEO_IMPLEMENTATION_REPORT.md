# ZORBA 10-Article SEO Content Cluster Implementation Report

Date: 2026-09-27

## Files Created

- `src/config/blog.ts`
- `src/config/blog-data.json`
- `scripts/build-blog-cluster.mjs`
- `scripts/verify-blog-cluster.mjs`
- `scripts/verify-blog-routes.mjs`
- `blog-verification-results.md`
- `visual-screenshots/blog-mobile.png`
- `visual-screenshots/blog-tablet.png`
- `visual-screenshots/blog-desktop.png`
- `public/images/blog/best-iptv-apps-smart-tv-hero.svg`
- `public/images/blog/best-iptv-apps-smart-tv-hero.webp`
- `public/images/blog/best-iptv-apps-smart-tv-troubleshooting.svg`
- `public/images/blog/best-iptv-apps-smart-tv-troubleshooting.webp`
- `public/images/blog/best-iptv-apps-smart-tv-workflow.svg`
- `public/images/blog/best-iptv-apps-smart-tv-workflow.webp`
- `public/images/blog/best-iptv-player-for-firestick-hero.svg`
- `public/images/blog/best-iptv-player-for-firestick-hero.webp`
- `public/images/blog/best-iptv-player-for-firestick-troubleshooting.svg`
- `public/images/blog/best-iptv-player-for-firestick-troubleshooting.webp`
- `public/images/blog/best-iptv-player-for-firestick-workflow.svg`
- `public/images/blog/best-iptv-player-for-firestick-workflow.webp`
- `public/images/blog/how-to-fix-iptv-buffering-freezing-hero.svg`
- `public/images/blog/how-to-fix-iptv-buffering-freezing-hero.webp`
- `public/images/blog/how-to-fix-iptv-buffering-freezing-troubleshooting.svg`
- `public/images/blog/how-to-fix-iptv-buffering-freezing-troubleshooting.webp`
- `public/images/blog/how-to-fix-iptv-buffering-freezing-workflow.svg`
- `public/images/blog/how-to-fix-iptv-buffering-freezing-workflow.webp`
- `public/images/blog/how-to-install-iptv-on-firestick-hero.svg`
- `public/images/blog/how-to-install-iptv-on-firestick-hero.webp`
- `public/images/blog/how-to-install-iptv-on-firestick-troubleshooting.svg`
- `public/images/blog/how-to-install-iptv-on-firestick-troubleshooting.webp`
- `public/images/blog/how-to-install-iptv-on-firestick-workflow.svg`
- `public/images/blog/how-to-install-iptv-on-firestick-workflow.webp`
- `public/images/blog/iptv-smarters-pro-firestick-setup-hero.svg`
- `public/images/blog/iptv-smarters-pro-firestick-setup-hero.webp`
- `public/images/blog/iptv-smarters-pro-firestick-setup-troubleshooting.svg`
- `public/images/blog/iptv-smarters-pro-firestick-setup-troubleshooting.webp`
- `public/images/blog/iptv-smarters-pro-firestick-setup-workflow.svg`
- `public/images/blog/iptv-smarters-pro-firestick-setup-workflow.webp`
- `public/images/blog/mlb-playoffs-2026-streaming-guide-hero.svg`
- `public/images/blog/mlb-playoffs-2026-streaming-guide-hero.webp`
- `public/images/blog/mlb-playoffs-2026-streaming-guide-troubleshooting.svg`
- `public/images/blog/mlb-playoffs-2026-streaming-guide-troubleshooting.webp`
- `public/images/blog/mlb-playoffs-2026-streaming-guide-workflow.svg`
- `public/images/blog/mlb-playoffs-2026-streaming-guide-workflow.webp`
- `public/images/blog/nba-games-2026-27-streaming-guide-hero.svg`
- `public/images/blog/nba-games-2026-27-streaming-guide-hero.webp`
- `public/images/blog/nba-games-2026-27-streaming-guide-troubleshooting.svg`
- `public/images/blog/nba-games-2026-27-streaming-guide-troubleshooting.webp`
- `public/images/blog/nba-games-2026-27-streaming-guide-workflow.svg`
- `public/images/blog/nba-games-2026-27-streaming-guide-workflow.webp`
- `public/images/blog/tivimate-firestick-setup-hero.svg`
- `public/images/blog/tivimate-firestick-setup-hero.webp`
- `public/images/blog/tivimate-firestick-setup-troubleshooting.svg`
- `public/images/blog/tivimate-firestick-setup-troubleshooting.webp`
- `public/images/blog/tivimate-firestick-setup-workflow.svg`
- `public/images/blog/tivimate-firestick-setup-workflow.webp`
- `public/images/blog/world-series-2026-tv-streaming-hero.svg`
- `public/images/blog/world-series-2026-tv-streaming-hero.webp`
- `public/images/blog/world-series-2026-tv-streaming-troubleshooting.svg`
- `public/images/blog/world-series-2026-tv-streaming-troubleshooting.webp`
- `public/images/blog/world-series-2026-tv-streaming-workflow.svg`
- `public/images/blog/world-series-2026-tv-streaming-workflow.webp`
- `public/images/blog/xtream-codes-iptv-setup-guide-hero.svg`
- `public/images/blog/xtream-codes-iptv-setup-guide-hero.webp`
- `public/images/blog/xtream-codes-iptv-setup-guide-troubleshooting.svg`
- `public/images/blog/xtream-codes-iptv-setup-guide-troubleshooting.webp`
- `public/images/blog/xtream-codes-iptv-setup-guide-workflow.svg`
- `public/images/blog/xtream-codes-iptv-setup-guide-workflow.webp`

## Files Modified

- `src/app/blog/page.tsx`
- `src/app/blog/[slug]/page.tsx`
- `src/app/globals.css`
- `src/app/sitemap.ts`
- `src/config/site.ts`

## Article Inventory

| # | Title | Primary Keyword | URL | Word Count |
| ---: | --- | --- | --- | ---: |
| 1 | How to Watch MLB Playoffs 2026: Complete US Streaming Guide | how to watch MLB playoffs 2026 | `/blog/how-to-watch-mlb-playoffs-2026` | 3158 |
| 2 | How to Watch the 2026 World Series: TV Channels, Streaming & Schedule | how to watch World Series 2026 | `/blog/how-to-watch-world-series-2026` | 2773 |
| 3 | How to Watch NBA Games in 2026-27: Complete US Streaming Guide | how to watch NBA games 2026 | `/blog/how-to-watch-nba-games-2026-27` | 2823 |
| 4 | Best IPTV Players for Firestick in 2026: TiviMate vs IPTV Smarters Pro & More | best IPTV player for Firestick | `/blog/best-iptv-player-for-firestick-2026` | 2639 |
| 5 | How to Install IPTV on Firestick in 2026: Complete Setup Guide | how to install IPTV on Firestick | `/blog/how-to-install-iptv-on-firestick-2026` | 2697 |
| 6 | IPTV Smarters Pro on Firestick: Complete Setup Guide 2026 | IPTV Smarters Pro Firestick | `/blog/iptv-smarters-pro-firestick-setup` | 2586 |
| 7 | How to Set Up TiviMate on Firestick in 2026 | TiviMate Firestick | `/blog/tivimate-firestick-setup-2026` | 2514 |
| 8 | Xtream Codes IPTV Setup Guide 2026: Firestick, Android TV & Smart TV | Xtream Codes IPTV | `/blog/xtream-codes-iptv-setup-guide` | 2510 |
| 9 | Best IPTV Apps for Smart TV in 2026: Samsung, LG & Android TV | best IPTV app for Smart TV | `/blog/best-iptv-apps-smart-tv-2026` | 2681 |
| 10 | IPTV Buffering? 15 Ways to Fix IPTV Freezing and Lag in 2026 | IPTV buffering / IPTV keeps freezing | `/blog/how-to-fix-iptv-buffering-freezing` | 2693 |

## Keyword Map

| Article | Primary Keyword | Secondary Intent | Canonical URL |
| --- | --- | --- | --- |
| MLB Playoffs | how to watch MLB playoffs 2026 | postseason schedule, round-by-round channels, Fire TV and Smart TV viewing | `/blog/how-to-watch-mlb-playoffs-2026` |
| World Series | how to watch World Series 2026 | FOX access, game table, participating teams not final | `/blog/how-to-watch-world-series-2026` |
| NBA | how to watch NBA games 2026 | NBA without cable, League Pass, local blackouts, Peacock, Prime Video | `/blog/how-to-watch-nba-games-2026-27` |
| Firestick Players | best IPTV player for Firestick | comparison of TiviMate, Smarters, XCIPTV, OTT Navigator, Sparkle TV | `/blog/best-iptv-player-for-firestick-2026` |
| Firestick Install | how to install IPTV on Firestick | player selection, M3U, Xtream, EPG, safe installation | `/blog/how-to-install-iptv-on-firestick-2026` |
| Smarters | IPTV Smarters Pro Firestick | Smarters-specific install, Xtream/M3U, VOD, login fixes | `/blog/iptv-smarters-pro-firestick-setup` |
| TiviMate | TiviMate Firestick | TiviMate-specific playlist, EPG, favorites, premium caution | `/blog/tivimate-firestick-setup-2026` |
| Xtream Codes | Xtream Codes IPTV | server URL, username, password, M3U differences, EPG | `/blog/xtream-codes-iptv-setup-guide` |
| Smart TV Apps | best IPTV app for Smart TV | Samsung, LG webOS, Android TV, Google TV comparison | `/blog/best-iptv-apps-smart-tv-2026` |
| Buffering | IPTV buffering / IPTV keeps freezing | network, device, app, source, bitrate diagnostics | `/blog/how-to-fix-iptv-buffering-freezing` |

## Internal Linking Map

- MLB Playoffs links to World Series, Firestick setup, and buffering.
- World Series links to MLB Playoffs, Smart TV apps, and buffering.
- NBA links to Smart TV apps, Firestick setup, and buffering.
- Firestick player comparison links to TiviMate, Smarters, Firestick setup, Xtream Codes, and buffering.
- Firestick setup links to player comparison, TiviMate, Smarters, Xtream Codes, and buffering.
- Smarters links to Firestick setup, Xtream Codes, buffering, and player comparison.
- TiviMate links to Firestick setup, Xtream Codes, buffering, and player comparison.
- Xtream Codes links to TiviMate, Smarters, Smart TV apps, and buffering.
- Smart TV apps links to Xtream Codes, buffering, World Series, and NBA.
- Buffering links to Firestick setup, Smart TV apps, TiviMate, and Smarters.

## SEO Implementation

- Metadata: unique title, description, Open Graph, and Twitter metadata per article via `generateMetadata`.
- Canonicals: self-referencing canonical URLs per article through `getSiteOrigin`.
- Structured data: `BlogPosting`, `BreadcrumbList`, and visible-content-matched `FAQPage`.
- Breadcrumbs: visible Home > Blog > Article breadcrumbs on every article.
- TOC: accessible table of contents with stable section IDs.
- Images: 1 hero and 2 section WebP images per article, with dimensions and alt text.
- Sitemap: `/sitemap.xml` pulls all blog articles from `blogArticles`.
- Internal links: related guide cards and contextual links are included in article copy.

## Research / Factual Sources

- MLB postseason schedule announcement: https://www.mlb.com/amp/news/press-release-mlb-announces-2026-postseason-schedule.html
- MLB postseason hub: https://www.mlb.com/postseason
- MLB schedule: https://www.mlb.com/schedule/2026-09-29
- FOX World Series page: https://www.fox.com/sports/baseball/mlb/watch-world-series
- NBA 2026-27 schedule release: https://pr.nba.com/2026-27-nba-regular-season-schedule
- NBA how-to-watch 2026-27: https://www.nba.com/news/how-to-watch-games-2026-27-season
- NBA key dates: https://www.nba.com/news/key-dates
- Amazon Fire TV app installation docs: https://www.developer.amazon.com/docs/fire-tv/installing-and-running-your-app.html
- Amazon Fire TV compatibility docs: https://developer.amazon.com/docs/app-submission/device-filtering-and-compatibility.html
- Google TV app install support: https://support.google.com/googletv/answer/10050570?hl=en
- TiviMate Google Play listing: https://play.google.com/store/apps/details/?hl=en-US&id=ar.tvplayer.tv
- TiviMate terms: https://tivimate.com/terms-of-use
- Smarters Pro official site: https://smarterspro.com/
- IPTV Smarters Pro features: https://getiptvsmarters.com/features
- Samsung Smart TV app support: https://www.samsung.com/us/support/answer/ANS10005205/
- Samsung developer installation FAQ: https://developer.samsung.com/smarttv/develop/faq/application-installation.html
- LG app installation support: https://www.lg.com/us/support/help-library/how-to-install-and-delete-apps-on-your-lg-tv--20155331395481
- IB Player Pro platform page: https://www.ibplayerpro.pro/

## Validation

- Word-count verifier: `node scripts/verify-blog-cluster.mjs` passed. All 10 articles are at least 2,500 visible words.
- Duplicate-content check: `node scripts/verify-blog-cluster.mjs` passed. No repeated long paragraphs were flagged.
- Internal-link verification: `node scripts/verify-blog-cluster.mjs` and `node scripts/verify-blog-routes.mjs http://localhost:3000` passed.
- Image-path verification: `node scripts/verify-blog-cluster.mjs` passed.
- TypeScript: `npm run typecheck` passed.
- Lint: `npm run lint` passed.
- Build: `npm run build` passed when run outside the sandbox. The sandboxed build failed before compilation because Next could not parse captured TypeScript `--showConfig` output; the escalated build compiled and generated all routes successfully.
- Route verification: `node scripts/verify-blog-routes.mjs http://localhost:3000` passed for `/blog`, `/sitemap.xml`, `/robots.txt`, and all 10 article URLs.
- Canonical check: route verifier confirmed self-referencing canonicals for all 10 article URLs on the local production server.
- Structured data check: route verifier confirmed `application/ld+json` on all article URLs.
- Indexability check: no `noindex` usage found in `src/app` or `src/config`; all article routes returned HTTP 200 locally.
- Browser/mobile check: Playwright representative article checks passed at 390x844, 768x1024, and 1440x900. It verified one H1, table presence, image presence, and no horizontal overflow for representative sports, comparison, and troubleshooting articles.
- Sports fact re-check: official MLB/NBA sources were searched again on 2026-09-27 before completion. Implemented MLB and NBA dates/platform facts still matched official sources.

## Remaining Issues

- Production canonical domain depends on `NEXT_PUBLIC_SITE_URL`, as in the existing site architecture. If unset, Next uses the request host.
- Playwright browser binaries were not initially present, so Chromium was installed with `npx playwright install chromium` before browser checks.
