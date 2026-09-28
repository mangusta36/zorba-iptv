# ZORBA 10-Blog Content Quality Remediation Report

Date: 2026-09-27

## 1. Articles Changed

All 10 existing URLs were remediated in `src/config/blog-data.json`. No slugs or primary keyword ownership changed.

## 2. Sections Removed

The repeated template sections were removed across the cluster:

- `A Practical Viewing Plan`
- `A Practical Setup Plan`
- `Mistakes To Avoid`
- `Detailed Checklist For Confident Setup`
- `How To Keep This Guide Current`
- `How To Maintain The Setup`

## 3. Sections Substantially Rewritten

Each article received intent-specific replacement sections. Examples:

- MLB Playoffs: schedule reading, round-by-round viewing scenarios, affiliate/authentication notes.
- World Series: FOX access paths, Games 5-7 handling, antenna viewing, FOX app authentication.
- NBA: League Pass decision tree, blackout examples, NBA partner patterns, local-rights scenarios.
- Firestick player comparison: player scorecard, viewer-type recommendations, premium tradeoffs.
- Firestick install: Developer Options variations, Downloader cleanup, install error map.
- Smarters: login screens, Live/VOD/Series behavior, Smarters-specific errors.
- TiviMate: playlist setup, EPG refresh habits, favorites/groups, Premium decision.
- Xtream Codes: credential anatomy, URL formatting, renewals, connection limits, credential security.
- Smart TV apps: platform-first selection, Samsung/LG/Android notes, external-device tradeoffs.
- Buffering: 15-layer diagnostic order, source/network/device/player/provider case studies.

## 4. Near-Duplicate Paragraphs Before Remediation

Improved detector: `node scripts/audit-blog-similarity.mjs 0.8 35`

Before remediation:

- Near-duplicate paragraph pairs at 0.80+ similarity: `405`
- Repeated generic endings found across sports and IPTV articles.
- Repeated cross-topic phrasing appeared in generator-created sections, including mixed baseball/basketball/setup language.

## 5. Near-Duplicate Paragraphs After Remediation

After remediation:

- Near-duplicate paragraph pairs at 0.80+ similarity: `0`
- Repeated full section architectures: none.
- Repeated paragraph openings: none.

## 6. Search Intent Findings

| Keyword | Dominant Intent | SERP/Research Finding |
| --- | --- | --- |
| how to watch MLB playoffs 2026 | Timely postseason viewing guide | Current results emphasize official schedule, rounds, dates, and broadcaster paths. |
| how to watch World Series 2026 | World Series-specific TV/streaming guide | Needs FOX, Game 1, Games 1-7 framework, local affiliate access. |
| how to watch NBA games 2026 | Season-long NBA viewing guide | Needs national vs local games, League Pass, blackouts, ABC/ESPN, NBC/Peacock, Prime Video. |
| best IPTV player for Firestick | Comparison | Results favor ranked/comparison pages with TiviMate, Smarters, EPG, recording, Fire TV fit. |
| how to install IPTV on Firestick | Step-by-step tutorial | Results favor prerequisites, Downloader, Install Unknown Apps, player install, login setup. |
| IPTV Smarters Pro Firestick | App-specific setup | Needs safe source, Xtream/M3U login, VOD/Series, EPG, Smarters-specific errors. |
| TiviMate Firestick | App-specific setup | Needs install, playlist, EPG, groups, favorites, Premium, TiviMate-specific errors. |
| Xtream Codes IPTV | Credential/setup explainer | Needs server URL, username, password, M3U differences, URL errors, credential privacy. |
| best IPTV app for Smart TV | Platform-selection comparison | Needs Samsung/Tizen, LG/webOS, Android/Google TV, native app-store limits. |
| IPTV buffering / IPTV keeps freezing | Troubleshooting authority | Needs layered diagnosis: source, internet, Wi-Fi, Ethernet, router, DNS, device, app, bitrate, VPN, heat, limits, congestion. |

## 7. Content Gaps Fixed

- Replaced generic maintenance/checklist endings with article-specific information gain.
- Added sport-specific MLB and NBA language; removed generic cross-sport phrasing from article data.
- Added platform and app-specific troubleshooting instead of duplicating broad buffering advice.
- Strengthened comparison criteria for Firestick players.
- Clarified player vs service distinctions without repeating the same paragraphs.
- Added concrete examples, decision trees, scorecards, and error maps.

## 8. Cannibalization Matrix

| URL | Primary Keyword | Search Intent | Secondary Queries | Closest Zorba URL | Why Both Exist | Internal-Link Relationship | Risk |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/blog/how-to-watch-mlb-playoffs-2026` | how to watch MLB playoffs 2026 | Broad postseason hub | Wild Card, ALDS/NLDS, ALCS/NLCS, World Series path | `/blog/how-to-watch-world-series-2026` | MLB page owns all postseason rounds; World Series page owns only Fall Classic. | MLB links to World Series as child. | Low |
| `/blog/how-to-watch-world-series-2026` | how to watch World Series 2026 | World Series guide | FOX, Game 1, Games 1-7, antenna | `/blog/how-to-watch-mlb-playoffs-2026` | Specific child page for World Series-only searchers. | Links back to MLB for earlier rounds. | Low |
| `/blog/how-to-watch-nba-games-2026-27` | how to watch NBA games 2026 | NBA season viewing guide | NBA without cable, League Pass, blackouts | Sports MLB pages | Different league, season structure, rights model. | Links to device guides only. | Low |
| `/blog/best-iptv-player-for-firestick-2026` | best IPTV player for Firestick | Comparison | TiviMate vs Smarters, EPG, recording | `/blog/how-to-install-iptv-on-firestick-2026` | Comparison chooses app; install guide performs setup. | Comparison links to install and child app guides. | Low |
| `/blog/how-to-install-iptv-on-firestick-2026` | how to install IPTV on Firestick | Installation tutorial | Downloader, Developer Options, M3U, Xtream | `/blog/best-iptv-player-for-firestick-2026` | Install owns workflow; comparison owns player choice. | Links to comparison before install. | Low |
| `/blog/iptv-smarters-pro-firestick-setup` | IPTV Smarters Pro Firestick | Smarters-specific setup | Xtream login, M3U, VOD, Series, EPG | Firestick install / TiviMate | Child app-specific guide, not general install/comparison. | Links to install, Xtream, buffering. | Low |
| `/blog/tivimate-firestick-setup-2026` | TiviMate Firestick | TiviMate-specific setup | playlists, EPG, favorites, Premium | Smarters / Firestick install | TiviMate-specific workflow distinct from Smarters. | Links to Xtream and buffering. | Low |
| `/blog/xtream-codes-iptv-setup-guide` | Xtream Codes IPTV | Credential explainer | server URL, username, password, M3U | TiviMate / Smarters | Supports app guides but owns credential format. | App guides link here for credential details. | Low |
| `/blog/best-iptv-apps-smart-tv-2026` | best IPTV app for Smart TV | Platform-selection comparison | Samsung, LG, Android TV, Google TV | Firestick player comparison | TV platform intent differs from Fire TV device intent. | Links to Xtream and buffering. | Low |
| `/blog/how-to-fix-iptv-buffering-freezing` | IPTV buffering / IPTV keeps freezing | Troubleshooting hub | freezing, lag, Wi-Fi, cache, decoder | All setup pages | Central diagnostic article; other pages link here instead of duplicating. | Receives troubleshooting links from setup articles. | Low |

## 9. Word Counts

| Article | Slug | Visible Words | Pass/Fail |
| --- | --- | ---: | --- |
| How to Watch MLB Playoffs 2026: Complete US Streaming Guide | how-to-watch-mlb-playoffs-2026 | 2771 | PASS |
| How to Watch the 2026 World Series: TV Channels, Streaming & Schedule | how-to-watch-world-series-2026 | 2510 | PASS |
| How to Watch NBA Games in 2026-27: Complete US Streaming Guide | how-to-watch-nba-games-2026-27 | 2574 | PASS |
| Best IPTV Players for Firestick in 2026: TiviMate vs IPTV Smarters Pro & More | best-iptv-player-for-firestick-2026 | 2567 | PASS |
| How to Install IPTV on Firestick in 2026: Complete Setup Guide | how-to-install-iptv-on-firestick-2026 | 2543 | PASS |
| IPTV Smarters Pro on Firestick: Complete Setup Guide 2026 | iptv-smarters-pro-firestick-setup | 2524 | PASS |
| How to Set Up TiviMate on Firestick in 2026 | tivimate-firestick-setup-2026 | 2512 | PASS |
| Xtream Codes IPTV Setup Guide 2026: Firestick, Android TV & Smart TV | xtream-codes-iptv-setup-guide | 2553 | PASS |
| Best IPTV Apps for Smart TV in 2026: Samsung, LG & Android TV | best-iptv-apps-smart-tv-2026 | 2588 | PASS |
| IPTV Buffering? 15 Ways to Fix IPTV Freezing and Lag in 2026 | how-to-fix-iptv-buffering-freezing | 2579 | PASS |

## 10. Fact Sources

- MLB postseason schedule: https://www.mlb.com/amp/news/press-release-mlb-announces-2026-postseason-schedule.html
- MLB postseason hub: https://www.mlb.com/postseason
- FOX MLB playoff schedule: https://www.foxsports.com/stories/mlb/2026-mlb-playoff-schedule-dates-rounds-how-watch
- NBA how-to-watch 2026-27: https://www.nba.com/news/how-to-watch-games-2026-27-season
- NBA schedule release: https://pr.nba.com/2026-27-nba-regular-season-schedule
- Amazon Fire TV app docs: https://www.developer.amazon.com/docs/fire-tv/installing-and-running-your-app.html
- TiviMate Google Play listing: https://play.google.com/store/apps/details/?hl=en-US&id=ar.tvplayer.tv
- TiviMate terms: https://tivimate.com/terms-of-use
- Smarters Pro official site: https://smarterspro.com/
- Samsung app support: https://www.samsung.com/us/support/answer/ANS10005205/
- LG app install support: https://www.lg.com/us/support/help-library/how-to-install-and-delete-apps-on-your-lg-tv--20155331395481
- Google TV app install support: https://support.google.com/googletv/answer/10050570?hl=en

## 11. Internal-Link Changes

- Preserved existing cluster links.
- Reduced generic troubleshooting duplication by pointing app/device pages to the buffering hub.
- Preserved parent/child relationships:
  - MLB Playoffs -> World Series.
  - Firestick comparison -> install -> Smarters/TiviMate.
  - App guides -> Xtream Codes for credential detail.
  - All relevant setup pages -> buffering hub.

## 12. Build / Typecheck / Lint Results

- `npm run typecheck`: passed.
- `npm run lint`: passed with no warnings after cleanup.
- `npm run build`: sandboxed run failed with the known Next/TypeScript `--showConfig` stdout capture issue; escalated build passed and generated all routes.
- `node scripts/verify-blog-cluster.mjs`: passed.
- `node scripts/audit-blog-similarity.mjs 0.8 35`: passed with 0 matches.
- `node scripts/verify-blog-routes.mjs http://localhost:3000`: passed for `/blog`, sitemap, robots, and all 10 articles.
- Playwright responsive checks: passed at 390px, 768px, and 1440px for representative remediated articles.

## 13. Remaining Warnings

- `NEXT_PUBLIC_SITE_URL` is blank in the local environment, so Next warns that metadata social image resolution falls back to `http://localhost:3000`. Production should set `NEXT_PUBLIC_SITE_URL` to the canonical domain.
- The original generator script still contains historical template-generation code; current article data has been remediated and verified. Avoid rerunning the original generator without the remediation scripts.
