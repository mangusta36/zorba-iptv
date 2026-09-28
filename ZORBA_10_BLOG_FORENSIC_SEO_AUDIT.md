# Zorba IPTV 10 Blog Article Forensic SEO Audit

Analysis-only audit completed on 2026-09-28. No source/content files were modified for this audit.

## 1. Executive Factual Summary

- The project contains exactly 10 blog articles, all stored in `src/config/blog-data.json` and rendered by `src/app/blog/[slug]/page.tsx`.
- Every inspected article has exactly one rendered article H1, a unique slug, page-level metadata, a canonical generated in `generateMetadata`, a hero image, visible FAQ content, source links, and JSON-LD for `BlogPosting`, `BreadcrumbList`, and `FAQPage`.
- Most articles are strong on structure, tables, topical separation, internal linking, and image/source record hygiene.
- Important issues remain: several articles sit slightly below the project's 2,500 visible-word target by my reader-visible count, every article repeats the same brand/legal FAQ question and answer, several brand homepage anchors still use secondary variants instead of the preferred `Zorba IPTV`, and production canonical correctness depends on `NEXT_PUBLIC_SITE_URL`.
- The strongest articles by coverage are `how-to-watch-mlb-playoffs-2026`, `how-to-watch-nba-games-2026-27`, `best-iptv-player-for-firestick-2026`, `xtream-codes-iptv-setup-guide`, `best-iptv-apps-smart-tv-2026`, and `how-to-fix-iptv-buffering-freezing`.
- Articles needing the most attention are `how-to-watch-world-series-2026`, `how-to-install-iptv-on-firestick-2026`, `iptv-smarters-pro-firestick-setup`, and `tivimate-firestick-setup-2026`, mostly because they are just under the 2,500-word floor and/or rely on closely related setup topics covered elsewhere.

## 2. Implementation Inspected

- Article data: `src/config/blog-data.json`
- Article data typing: `src/config/blog.ts`
- Article renderer: `src/app/blog/[slug]/page.tsx`
- Blog listing: `src/app/blog/page.tsx`
- Sitemap: `src/app/sitemap.ts`
- Robots: `src/app/robots.ts`
- Origin/canonical helper: `src/lib/site-origin.ts`
- Image source/license records: `public/images/blog/image-sources.json`

Key renderer facts:

- `generateStaticParams()` returns all blog slugs: `src/app/blog/[slug]/page.tsx:12`.
- Metadata title, description, canonical, Open Graph, and Twitter metadata are generated per article: `src/app/blog/[slug]/page.tsx:17`.
- Visible H1 is `article.title`: `src/app/blog/[slug]/page.tsx:78`.
- JSON-LD is built as an array containing `BlogPosting`, `BreadcrumbList`, and `FAQPage`: `src/app/blog/[slug]/page.tsx:219`.
- Publisher is `Zorba IPTV` with alternate names: `src/app/blog/[slug]/page.tsx:226`.

## 3. Inventory, Word Counts, Intent, Audience

Reader-visible word count methodology: counted article H1/title, deck/description, intro, section headings, section body text, lists, callouts, table text, and visible FAQ text. Excluded source code, metadata, JSON-LD, breadcrumbs, TOC labels, nav/footer, source-list boilerplate, and related-card UI.

| Article | Slug | Primary keyword | Intent | Audience | Words | Tone |
|---|---|---|---|---|---:|---|
| How to Watch MLB Playoffs 2026: Complete US Streaming Guide | `/blog/how-to-watch-mlb-playoffs-2026` | how to watch MLB playoffs 2026 | Informational / sports viewing guide | US MLB postseason viewer | 2,724 | Practical, cautious |
| How to Watch the 2026 World Series: TV Channels, Streaming & Schedule | `/blog/how-to-watch-world-series-2026` | how to watch World Series 2026 | Informational / event viewing guide | US World Series viewer | 2,474 | Practical, cautious |
| How to Watch NBA Games in 2026-27: Complete US Streaming Guide | `/blog/how-to-watch-nba-games-2026-27` | how to watch NBA games 2026 | Informational / sports viewing guide | US NBA viewer / cord-cutter | 2,525 | Practical, explanatory |
| Best IPTV Players for Firestick in 2026: TiviMate vs IPTV Smarters Pro & More | `/blog/best-iptv-player-for-firestick-2026` | best IPTV player for Firestick | Comparison | Firestick IPTV app chooser | 2,524 | Comparative, advisory |
| How to Install IPTV on Firestick in 2026: Complete Setup Guide | `/blog/how-to-install-iptv-on-firestick-2026` | how to install IPTV on Firestick | How-to | Beginner/intermediate Firestick user | 2,490 | Step-by-step, safety-aware |
| IPTV Smarters Pro on Firestick: Complete Setup Guide 2026 | `/blog/iptv-smarters-pro-firestick-setup` | IPTV Smarters Pro Firestick | How-to / app setup | Smarters + Firestick user | 2,482 | Practical, support-oriented |
| How to Set Up TiviMate on Firestick in 2026 | `/blog/tivimate-firestick-setup-2026` | TiviMate Firestick | How-to / app setup | TiviMate + Firestick user | 2,468 | Practical, support-oriented |
| Xtream Codes IPTV Setup Guide 2026: Firestick, Android TV & Smart TV | `/blog/xtream-codes-iptv-setup-guide` | Xtream Codes IPTV | How-to / explainer | User with provider credentials | 2,508 | Technical but accessible |
| Best IPTV Apps for Smart TV in 2026: Samsung, LG & Android TV | `/blog/best-iptv-apps-smart-tv-2026` | best IPTV app for Smart TV | Comparison | Smart TV owner | 2,543 | Comparative, platform-aware |
| IPTV Buffering? 15 Ways to Fix IPTV Freezing and Lag in 2026 | `/blog/how-to-fix-iptv-buffering-freezing` | IPTV buffering | Troubleshooting | User with playback problems | 2,531 | Diagnostic, practical |

Source line anchors in `src/config/blog-data.json`:

- MLB Playoffs: `src/config/blog-data.json:3`
- World Series: `src/config/blog-data.json:400`
- NBA: `src/config/blog-data.json:847`
- Best Firestick Player: `src/config/blog-data.json:1308`
- Firestick Install: `src/config/blog-data.json:1806`
- IPTV Smarters: `src/config/blog-data.json:2268`
- TiviMate: `src/config/blog-data.json:2698`
- Xtream Codes: `src/config/blog-data.json:3170`
- Smart TV Apps: `src/config/blog-data.json:3695`
- Buffering: `src/config/blog-data.json:4162`

## 4. Primary Keyword Map And Placement

| Slug | SEO title | Meta description | H1 | Intro/body | URL | Image alt |
|---|---|---|---|---|---|---|
| `how-to-watch-mlb-playoffs-2026` | PASS | NEEDS IMPROVEMENT: no exact phrase, but intent clear | PASS | NEEDS IMPROVEMENT: intro uses close wording, not exact primary phrase | PASS | PASS: descriptive, not forced |
| `how-to-watch-world-series-2026` | PASS | NEEDS IMPROVEMENT: no exact phrase, but intent clear | PASS: close variant | NEEDS IMPROVEMENT: intro says "2026 World Series" but not full exact phrase | PASS | PASS |
| `how-to-watch-nba-games-2026-27` | PASS | NEEDS IMPROVEMENT: no exact phrase, but semantic match | PASS: close variant | PASS: answers intent quickly | PASS | PASS |
| `best-iptv-player-for-firestick-2026` | PASS | PASS: strong semantic match | PASS: close plural variant | PASS | PASS | PASS |
| `how-to-install-iptv-on-firestick-2026` | PASS | PASS: strong semantic match | PASS | PASS: opening answer-first, exact phrase not necessary | PASS | PASS |
| `iptv-smarters-pro-firestick-setup` | PASS | PASS: semantic match | PASS: close variant | PASS | PASS | PASS |
| `tivimate-firestick-setup-2026` | PASS | PASS: semantic match | PASS: close variant | PASS | PASS | PASS |
| `xtream-codes-iptv-setup-guide` | PASS | PASS | PASS | PASS | PASS | PASS |
| `best-iptv-apps-smart-tv-2026` | PASS | PASS: semantic match | PASS: plural close variant | PASS | NEEDS IMPROVEMENT: slug says `apps` while primary is singular `app`; not serious enough to change URL | PASS |
| `how-to-fix-iptv-buffering-freezing` | PASS | PASS | PASS | PASS | PASS | PASS |

No article shows keyword stuffing. The informational keyword remains more prominent than sitewide branded keyword usage.

## 5. Live SERP / Intent Research Summary

Live-search findings are separate from local article findings.

- MLB Playoffs 2026: Current results are schedule/channel guides and official league pages. MLB's Wild Card release confirms the 2026 postseason starts with Wild Card Series on NBC, Peacock, and NBCSN, and points to MLB.com/postseason for full schedule. Source: <https://www.mlb.com/press-release/press-release-broadcast-schedule-announced-for-the-2026-wild-card-series-presented-by-abbvie>
- World Series 2026: Current results expect Game 1 date, FOX/streaming path, schedule, and matchup caveats. FOX states 2026 World Series coverage begins Friday, October 23, 2026. Source: <https://www.fox.com/sports/baseball/mlb/watch-world-series>
- NBA 2026-27: Current results expect channel/service mapping, League Pass caveats, local blackout explanation, and device guidance. NBA says the 2026-27 season is under media agreements with Disney, NBCUniversal, and Amazon, with NBA League Pass also part of viewing paths. Source: <https://www.nba.com/news/how-to-watch-games-2026-27-season>
- Firestick IPTV player/app queries: Results are mostly comparison/listicle pages, often low-authority IPTV affiliate pages. Common subtopics: TiviMate vs IPTV Smarters, XCIPTV/OTT Navigator/Sparkle, free vs premium, EPG, M3U/Xtream, Fire TV performance.
- Firestick installation queries: Results expect app-store path vs sideloading, Downloader/unknown-app permissions, credential entry, EPG testing, safety warnings, and troubleshooting.
- IPTV Smarters/TiviMate setup queries: Results expect credential-format screenshots/steps, login error fixes, EPG/VOD handling, external players, and whether the app provides content. Official source quality is mixed, especially for Smarters-branded domains.
- Smart TV app queries: Results expect platform split: Samsung Tizen, LG webOS, Android TV/Google TV, store availability, app activation, and when to use external devices. Official support pages confirm Samsung/LG/Google install flows. Sources: <https://www.samsung.com/us/support/answer/ANS10005205/>, <https://www.lg.com/us/support/help-library/lg-tv-how-to-install-delete-apps-on-my-lg-smart-tv--20153096004539OLT>, <https://support.google.com/googletv/answer/10050570?hl=en>
- Buffering query: Results expect symptom-based troubleshooting by network, device, app, player settings, VPN/DNS, and stream source. Official Fire TV developer diagnostics support the device/resource angle. Source: <https://developer.amazon.com/docs/fire-tv/developer-tools.html>

## 6. Article-By-Article Audit

### 6.1 MLB Playoffs

- Topic/search intent: PASS. Dominant intent is clear: how US viewers can watch the 2026 MLB Playoffs.
- Intro: PASS. It immediately states start date, Wild Card format, and networks.
- Semantic coverage: PASS. Covers postseason dates, round structure, streaming service choice, devices, Firestick tips, official schedule reading, affiliates, and MLB.TV caveats.
- Information gain: PASS. Provides round-specific viewing scenarios and troubleshooting tables rather than generic "streaming guide" filler.
- Word count: PASS at 2,724.
- Freshness: VERIFIED for Wild Card start/platforms against current MLB release. Other later-round rights are plausible and source-backed in article, but should be rechecked immediately before/through October.
- Sources/E-E-A-T: PASS. Uses MLB, FOX, NBC sources.
- Internal links: PASS. All internal targets exist. Useful links to Firestick setup, buffering, and World Series.
- Brand integration: PASS. One homepage link with `Zorba IPTV`; not intrusive.
- Weaknesses: The article has an exact duplicate World Series FAQ question with the World Series article and a repeated sitewide legal/brand FAQ.

### 6.2 World Series

- Topic/search intent: PASS. Owns World Series-specific viewing path.
- Intro: PASS. It answers Game 1/FOX immediately.
- Semantic coverage: PASS. Covers FOX, schedule framework, teams-not-final caveat, devices, troubleshooting, antenna, authentication, delay/spoilers.
- Word count: NEEDS IMPROVEMENT at 2,474, 26 words below the project floor by this count.
- Freshness: VERIFIED for Game 1 on October 23 and FOX viewing path against FOX. The "teams not final" caveat is correct as of 2026-09-28.
- Sources/E-E-A-T: PASS. MLB and FOX are appropriate.
- Internal links: PASS. Strong ties to MLB playoffs and troubleshooting.
- Brand integration: NEEDS IMPROVEMENT. Homepage link anchor is `Zorba TV`, while current preferred visible brand anchor is `Zorba IPTV`.
- Weaknesses: Some overlap with MLB Playoffs is unavoidable, but shared World Series channel FAQ increases cannibalization risk slightly.

### 6.3 NBA Games 2026-27

- Topic/search intent: PASS. Clearly answers how to watch NBA games in the upcoming season.
- Intro: PASS. Gives season start date and national distribution pattern immediately.
- Semantic coverage: PASS. Covers national partners, League Pass, local-market games, blackout examples, device matrix, household scenarios.
- Word count: PASS at 2,525.
- Freshness: VERIFIED for media partners and viewing paths against NBA.com. Start date should be rechecked against NBA schedule pages close to season.
- Sources/E-E-A-T: PASS. NBA and Amazon sources are appropriate.
- Internal links: PASS. Links to Smart TV, Firestick, buffering.
- Brand integration: NEEDS IMPROVEMENT. Homepage brand link uses compact `ZorbaTV`, which is allowed as a variant but less preferred for normal visible copy.
- Weaknesses: Strong article; no serious topical drift.

### 6.4 Best IPTV Player For Firestick

- Topic/search intent: PASS. Comparison article matches SERP expectation.
- Intro: PASS. Immediately names TiviMate, IPTV Smarters Pro, and alternatives.
- Semantic coverage: PASS. Covers player vs service, comparison criteria, performance/storage, free vs premium, viewer-type choice.
- Word count: PASS at 2,524.
- Freshness: AMBIGUOUS. General player comparisons are current enough, but many SERP competitors make aggressive "tested" claims. This article avoids fake testing, which is good, but app availability/version claims should be periodically rechecked.
- Sources/E-E-A-T: NEEDS IMPROVEMENT. TiviMate/Amazon sources are good. Smarters source identity is less clear and should use the most authoritative app/vendor documentation available.
- Internal links: PASS. Strong cluster links to install, TiviMate, Smarters, Xtream, buffering.
- Brand integration: PASS. Uses `Zorba IPTV homepage` once.
- Weaknesses: Could mention why many competing "best IPTV" pages are service-affiliate biased, but the current restraint is good.

### 6.5 Install IPTV On Firestick

- Topic/search intent: PASS. How-to intent is clear.
- Intro: PASS. It answers the setup path immediately and distinguishes player vs lawful provider.
- Semantic coverage: PASS. Covers prerequisites, app-store vs sideloading, credentials, EPG, first playback test, errors, model notes, privacy.
- Word count: NEEDS IMPROVEMENT at 2,490, 10 words below target.
- Freshness: AMBIGUOUS. Amazon's developer docs confirm install/test and device compatibility concepts, but consumer Fire TV unknown-app permission behavior can change by OS version. Recent community reports suggest permission screens changed/bugged in 2026, so instructions should remain cautious.
- Sources/E-E-A-T: PASS/NEEDS IMPROVEMENT. Official Amazon and Google sources are good, but sideloading UX should cite an official Amazon consumer/support source if available.
- Internal links: PASS. All targets exist, but two commercial/support anchors use `Zorba TV` variants.
- Brand integration: PASS. One homepage link uses `Zorba IPTV`; commercial links are contextually useful.
- Weaknesses: This article overlaps with Smarters, TiviMate, and Xtream setup; current linking helps separate intents.

### 6.6 IPTV Smarters Pro Firestick

- Topic/search intent: PASS. App-specific setup intent is clear.
- Intro: PASS. It explains Smarters as a media player and not a content source.
- Semantic coverage: PASS. Covers install safety, Xtream/M3U, EPG/VOD, login screens, errors, profiles, playback settings.
- Word count: NEEDS IMPROVEMENT at 2,482.
- Freshness: UNVERIFIED/AMBIGUOUS. Smarters-branded official web presence is fragmented in search results, and the article currently relies on `smarterspro.com` / `getiptvsmarters.com` sources. Need stronger verification of which source is authoritative for IPTV Smarters Pro features and platform availability.
- Sources/E-E-A-T: NEEDS IMPROVEMENT. Good Amazon Fire TV sources; Smarters source quality is the main gap.
- Internal links: PASS. Good links to Firestick install, Xtream, buffering.
- Brand integration: NEEDS IMPROVEMENT. Homepage brand link anchor is `Zorba TV`, not preferred `Zorba IPTV`.
- Weaknesses: Because the app-specific setup naturally overlaps with Firestick install and Xtream Codes, ensure future edits keep Smarters-specific screens/errors front and center.

### 6.7 TiviMate Firestick

- Topic/search intent: PASS. TiviMate-specific Firestick setup.
- Intro: PASS. Identifies TiviMate's best-fit user and core setup path.
- Semantic coverage: PASS. Covers install, playlist, EPG, favorites, premium, backup, multiple playlists, errors.
- Word count: NEEDS IMPROVEMENT at 2,468.
- Freshness: AMBIGUOUS. Google Play/TiviMate terms sources are appropriate, but live search shows ongoing user confusion about Play Store availability on different Android TV/Google TV/Fire TV devices. Fire TV install method should be checked against official TiviMate guidance when available.
- Sources/E-E-A-T: PASS/NEEDS IMPROVEMENT. TiviMate Google Play and terms are good; Fire TV-specific installation caveats would benefit from a clearer official source.
- Internal links: PASS. Good cluster links.
- Brand integration: NEEDS IMPROVEMENT. Homepage link anchor is compact `ZorbaIPTV`; current editorial rule prefers `Zorba IPTV` in normal copy.
- Weaknesses: Strong but slightly below word floor; avoid padding with generic setup text already covered by Firestick install.

### 6.8 Xtream Codes IPTV

- Topic/search intent: PASS. The article owns credential-format understanding, not app-specific setup.
- Intro: PASS. Defines the login format immediately.
- Semantic coverage: PASS. Covers server URL, username, password, M3U comparison, EPG, authentication errors, device notes, support etiquette.
- Word count: PASS at 2,508.
- Freshness: PASS/AMBIGUOUS. Credential-format content is relatively stable; app-specific support should be rechecked periodically.
- Sources/E-E-A-T: PASS. Uses TiviMate, Smarters, Samsung, LG, Google sources, though Smarters source authority remains the weakest.
- Internal links: PASS. Strong links to TiviMate, Smarters, Smart TV, contact.
- Brand integration: PASS. Homepage link is `Zorba IPTV homepage`.
- Weaknesses: Some sections repeat "EPG relationship and credential security" concepts; not severe.

### 6.9 Smart TV Apps

- Topic/search intent: PASS. Comparison by TV platform matches intent.
- Intro: PASS. Immediately frames Samsung/LG/Android TV differences.
- Semantic coverage: PASS. Covers Samsung Tizen, LG webOS, Android/Google TV, native app vs external device, activation caution, multi-TV homes.
- Word count: PASS at 2,543.
- Freshness: VERIFIED for Samsung/LG/Google install flows via official support pages. Specific IPTV app availability remains store/region-dependent and should stay caveated.
- Sources/E-E-A-T: PASS. Samsung, LG, Google, TiviMate sources are appropriate.
- Internal links: PASS. Good links to Firestick player, buffering, Xtream.
- Brand integration: NEEDS IMPROVEMENT. Homepage brand link anchor is `Zorba TV`, not preferred `Zorba IPTV`.
- Weaknesses: Slug plural `apps` vs primary singular `app` is acceptable; do not change indexed URL.

### 6.10 IPTV Buffering

- Topic/search intent: PASS. Troubleshooting intent is clear and dominant.
- Intro: PASS. It immediately identifies four likely failure buckets.
- Semantic coverage: PASS. Covers network, Wi-Fi, device resources, cache, decoder, bitrate, VPN, heat, app version, congestion, provider contact.
- Word count: PASS at 2,531.
- Freshness: PASS. Most troubleshooting advice is stable; Fire TV diagnostics source is current enough.
- Sources/E-E-A-T: PASS. Amazon/Google/TiviMate/Smarters sources are appropriate, with the same Smarters-source caveat.
- Internal links: PASS. Strong hub-style linking to setup and app articles.
- Brand integration: PASS. One homepage link uses `Zorba IPTV`.
- UX rendered check: PASS at 390, 768, and 1440 px on this representative article; no horizontal overflow, image loaded, tables present, TOC present.

## 7. Secondary / Semantic Keyword Gaps

| Article | Strong semantic coverage | Gaps / opportunities |
|---|---|---|
| MLB Playoffs | Wild Card, round structure, NBC/Peacock/NBCSN, FOX, schedule reading, device prep | Could add a clearer "what changes as matchups finalize" timestamp policy. |
| World Series | FOX, Game 1, antenna, authentication, latency, schedule | Slightly short; could add a compact "how to verify your local FOX station" section. |
| NBA | ABC/ESPN, NBC/Peacock, Prime, League Pass, blackout, local rights | Could add more regional sports network/OTA local-team caveats if sourced. |
| Best Firestick Player | TiviMate, Smarters, XCIPTV, OTT Navigator, Sparkle, EPG, M3U/Xtream | Could add explicit "what not to compare" anti-affiliate guidance. |
| Firestick Install | app-store vs sideloading, M3U, Xtream, EPG, developer options | Could add sourced note on current Fire OS unknown-app permission variations. |
| Smarters | Xtream, M3U, EPG, VOD, login errors, profiles | Needs stronger official-source support for platform/features. |
| TiviMate | playlist, EPG, groups, favorites, premium, backups | Could more clearly distinguish Android TV/Google TV official install from Fire TV sideloading. |
| Xtream Codes | URL/user/pass, M3U, EPG, authentication, support etiquette | Good; potential minor overlap with app-specific login sections. |
| Smart TV Apps | Samsung, LG, Android/Google TV, store availability, external device | Could add a sourced app-availability verification checklist by TV store. |
| Buffering | network, Wi-Fi, Ethernet, cache, decoder, bitrate, VPN, source | Strong; could include a simple "do not change everything at once" troubleshooting log template. |

## 8. Duplication / Originality Findings

Exact duplicate findings:

- The FAQ question `Does Zorba TV own the apps or sports broadcasts mentioned here?` appears in all 10 articles.
- Its answer is identical in all 10 articles: `No. Third-party leagues, broadcasters, devices, and player apps are mentioned descriptively...`
- `What channel is the 2026 World Series on?` appears in both the MLB Playoffs and World Series articles.

Semantic duplication:

- Firestick install, IPTV Smarters, TiviMate, and Xtream Codes all cover credentials, EPG, login errors, and buffering. Current intent separation is mostly good, but future edits should avoid adding generic setup blocks to all four pages.
- MLB Playoffs and World Series naturally overlap on FOX/World Series schedule; the World Series article should keep the deeper event-specific detail.

No broad keyword-swapped template problem remains. Pairwise 7-word-shingle similarity did not flag high-overlap article bodies outside the repeated FAQ/legal language.

## 9. Cannibalization Matrix

| Pair | Risk | Why |
|---|---|---|
| Firestick player comparison vs Firestick installation | MEDIUM | Both target Firestick IPTV users, but comparison chooses a player while install teaches workflow. Internal links correctly separate them. |
| Firestick installation vs IPTV Smarters Firestick | MEDIUM | Both include Firestick install and credentials, but Smarters is app-specific. Keep Smarters UI/login errors unique. |
| Firestick installation vs TiviMate Firestick | MEDIUM | Same setup overlap; TiviMate article should stay focused on TiviMate features, EPG, premium, groups. |
| IPTV Smarters vs TiviMate | LOW/MEDIUM | Both are app setup pages but distinct branded apps. Comparison page owns head-to-head intent. |
| Xtream Codes vs player setup guides | MEDIUM | Xtream content is credential-format explanation used by app guides. Keep it as "credentials concept" hub, not app install guide. |
| Smart TV apps vs Firestick apps | LOW | Platform intent differs: TV OS app store vs Fire TV device. |
| MLB postseason vs World Series | MEDIUM | Shared sports event hierarchy; MLB Playoffs should own full postseason, World Series should own Fall Classic-only details. |
| General sports streaming vs league/event-specific content | LOW | Current cluster has event/league specificity; no generic sports-streaming article competing. |

## 10. Internal-Link Map

No broken internal links found in article body/rich text.

| Article | Internal links |
|---|---|
| MLB Playoffs | `/`, Firestick setup, buffering, World Series |
| World Series | MLB playoffs, `/`, Smart TV apps, Firestick setup, buffering |
| NBA | `/`, Smart TV apps, Firestick setup, buffering |
| Best Firestick Player | Firestick setup, `/`, TiviMate, Smarters, Xtream, buffering |
| Firestick Install | Best Firestick players, Xtream, `/`, buffering, contact, pricing |
| Smarters | Firestick setup, Xtream, `/`, buffering |
| TiviMate | Best Firestick players, Xtream, `/`, buffering, Smarters |
| Xtream Codes | TiviMate, Smarters, Smart TV apps, `/`, contact |
| Smart TV Apps | Best Firestick players, `/`, buffering, Xtream |
| Buffering | `/`, Firestick setup, TiviMate, Smarters, Smart TV apps, Best Firestick players |

## 11. Zorba IPTV Brand-Link Audit

All 10 articles have one contextual homepage brand link in the intro. None look like they are primarily trying to rank for `Zorba IPTV`.

Needs improvement:

- `how-to-watch-world-series-2026`: homepage anchor is `Zorba TV`, not preferred `Zorba IPTV`.
- `how-to-watch-nba-games-2026-27`: homepage anchor is `ZorbaTV`, acceptable as a search variant but less natural.
- `iptv-smarters-pro-firestick-setup`: homepage anchor is `Zorba TV`.
- `tivimate-firestick-setup-2026`: homepage anchor is `ZorbaIPTV`.
- `best-iptv-apps-smart-tv-2026`: homepage anchor is `Zorba TV`.

Do not add additional branded homepage links; just consider normalizing these anchors if future edits are made.

## 12. Image / Source / License Audit

Every article currently uses one hero image; no inline image records are present in the article data arrays. All local hero files exist under `public/images/blog/`.

| Article | Image | Local file | Source/license record |
|---|---|---|---|
| MLB Playoffs | Real baseball stadium | PASS | PASS: Pexels, Courtney Garner |
| World Series | Real baseball stadium/game | PASS | PASS: Pexels, NIKOLAI FOMIN |
| NBA | Indoor basketball court | PASS | PASS: Pexels, Rodrigo Ortega |
| Best Firestick Player | TV/control equipment | PASS | PASS: Pexels, MOISES RIBEIRO |
| Firestick Install | TV remote setup | PASS | PASS: Pexels, Erik Mclean |
| Smarters | TV/gadgets setup | PASS | PASS: Pexels, Jakub Zerdzicki |
| TiviMate | Remote/device setup | PASS | PASS: Pexels, Jakub Zerdzicki |
| Xtream Codes | Remote/TV streaming | PASS | PASS: Pexels, Nothing Ahead |
| Smart TV Apps | Minimal living room TV | PASS | PASS: Pexels, Lisa Anna |
| Buffering | Wireless router | PASS | PASS: Pexels, Jakub Zerdzicki |

Alt text is descriptive and avoids obvious stuffing. Image dimensions are consistently 1200x630 in the data. Rendered representative image loaded correctly at 390, 768, and 1440 px.

## 13. Tables

| Article | Table status | Notes |
|---|---|---|
| MLB Playoffs | GOOD | Viewing map, device checklist, troubleshooting, scenarios are useful. |
| World Series | GOOD | Schedule/access/antenna tables are useful. |
| NBA | GOOD | Decision table and device matrix fit intent. |
| Best Firestick Player | GOOD | Comparison and scorecard tables are central to intent. |
| Firestick Install | GOOD | Requirements, testing, error map help. |
| Smarters | GOOD | Login/setup/switching tables help. |
| TiviMate | GOOD | Fit, organization, error/tuning maps help. |
| Xtream Codes | GOOD | Credential anatomy and error-by-field tables are useful. |
| Smart TV Apps | GOOD | Platform comparison is essential. |
| Buffering | GOOD | Symptom/layer tables are essential. |

## 14. FAQ Audit

- Visible FAQs are rendered directly from `article.faq`.
- FAQ schema is generated from the same `article.faq` array, so visible/schema consistency is PASS.
- Repeated sitewide legal/brand FAQ is the main duplication problem. It is useful risk disclosure, but repeating the exact same question and answer across all 10 articles is a quality weakness.
- No FAQ appears to be keyword stuffed.
- Sports FAQs align with real user intent; app/setup FAQs are practical.

## 15. Schema Audit

Schema emitted per article:

- `BlogPosting`
- `BreadcrumbList`
- `FAQPage`

PASS:

- No fabricated ratings/reviews found.
- Publisher is `Zorba IPTV` with alternates.
- FAQ schema is generated from visible FAQ content.
- `mainEntityOfPage` uses the canonical URL variable.

Needs improvement / note:

- The JSON-LD script serializes an array of three schema objects in one script. This is valid JSON-LD practice, though rendered HTML fetch counted two `application/ld+json` strings because Next may add metadata-related output.
- The JSON-LD serialization does not sanitize `<` in this file; current content is controlled local JSON and low risk, but Next's docs recommend escaping `<` when using `dangerouslySetInnerHTML`.

## 16. Canonical / Indexability Audit

Local rendered checks against three representative articles:

- `/blog/how-to-watch-mlb-playoffs-2026`: HTTP 200, one H1, no noindex, canonical rendered to local origin during localhost test.
- `/blog/best-iptv-player-for-firestick-2026`: HTTP 200, one H1, no noindex, canonical rendered to local origin during localhost test.
- `/blog/how-to-fix-iptv-buffering-freezing`: HTTP 200, one H1, no noindex, canonical rendered to local origin during localhost test.

Project implementation:

- Article canonical is `${origin}/blog/${article.slug}` in `generateMetadata`: `src/app/blog/[slug]/page.tsx:23`.
- `origin` comes from `NEXT_PUBLIC_SITE_URL` when set, otherwise request headers/local host: `src/lib/site-origin.ts:4`.
- All 10 article slugs are included in sitemap generation: `src/app/sitemap.ts:24`.
- Robots allows all and points to sitemap: `src/app/robots.ts:5`.

Needs improvement:

- Production canonical correctness is UNVERIFIED until `NEXT_PUBLIC_SITE_URL` is set to the real production domain.
- During local production-server test, Next warned that `metadataBase` was not set and it used `http://localhost:3000` for social images. This is expected when `NEXT_PUBLIC_SITE_URL` is blank locally, but it confirms production env configuration is required.

## 17. Factual Freshness Audit

| Article | Status | Evidence / caveat |
|---|---|---|
| MLB Playoffs | VERIFIED | MLB current release confirms Wild Card schedule and NBC/Peacock/NBCSN. |
| World Series | VERIFIED | FOX confirms 2026 World Series begins Oct. 23 on FOX/FOX One; teams not final is correct. |
| NBA | VERIFIED | NBA.com confirms current media partners and viewing paths for 2026-27. |
| Best Firestick Player | AMBIGUOUS | App landscape changes quickly; claims are restrained but should be refreshed with official app listings. |
| Firestick Install | AMBIGUOUS | Official Amazon developer docs support install/debug concepts; consumer unknown-app permission behavior appears volatile in 2026. |
| Smarters | UNVERIFIED / AMBIGUOUS | Smarters source authority is unclear; multiple similarly named domains appear in search. |
| TiviMate | AMBIGUOUS | Google Play/TiviMate sources are good; Fire TV-specific install behavior remains device/OS-dependent. |
| Xtream Codes | PASS / AMBIGUOUS | Credential format is stable; app compatibility should be periodically rechecked. |
| Smart TV Apps | VERIFIED / AMBIGUOUS | Samsung/LG/Google install flows are official; individual IPTV app store availability remains region/device-specific. |
| Buffering | PASS | Troubleshooting logic is stable; Fire TV diagnostics source supports device-resource framing. |

## 18. UX / Technical Render Audit

Representative rendered test: `/blog/how-to-fix-iptv-buffering-freezing`.

| Viewport | Result |
|---|---|
| 390px | PASS: no horizontal overflow, image loaded, TOC present, 5 tables rendered. |
| 768px | PASS: no horizontal overflow, image loaded, TOC present. |
| 1440px | PASS: no horizontal overflow, image loaded, TOC present. |

Template-level notes:

- TOC exists and links to all H2 sections plus FAQ and Sources.
- Tables use semantic `<table>`, `<caption>`, `<thead>`, `<tbody>`.
- Images use Next Image dimensions and responsive sizes.
- Article body is structured with headings, lists, tables, callouts, and FAQ.

## 19. Category Scorecards

### MLB Playoffs

| Category | Status | Evidence |
|---|---|---|
| Search intent | PASS | Clear postseason viewing guide. |
| Primary keyword targeting | PASS | Title/H1/slug aligned. |
| Semantic coverage | PASS | Dates, rounds, channels, devices. |
| Audience fit | PASS | US sports viewer. |
| 2,500+ visible words | PASS | 2,724. |
| Originality | NEEDS IMPROVEMENT | Repeated legal FAQ; shared World Series FAQ. |
| Information gain | PASS | Round/viewing scenarios and tables. |
| Factual freshness | PASS | MLB/NBC/FOX sourced. |
| Sources/E-E-A-T | PASS | Official sports sources. |
| Internal linking | PASS | Relevant and working. |
| Brand integration | PASS | One natural homepage link. |
| Images | PASS | Real image, source record. |
| Heading structure | PASS | Logical. |
| Title/meta | PASS | Concise, unique. |
| FAQ | NEEDS IMPROVEMENT | Repeated legal FAQ. |
| Schema | PASS | BlogPosting/Breadcrumb/FAQ. |
| Canonical/indexability | NEEDS IMPROVEMENT | Env-dependent production domain. |
| UX | PASS | Template passed representative checks. |

### World Series

| Category | Status | Evidence |
|---|---|---|
| Search intent | PASS | World Series-specific viewing path. |
| Primary keyword targeting | PASS | Title/slug aligned; H1 close variant. |
| Semantic coverage | PASS | FOX, schedule, devices, antenna, auth. |
| Audience fit | PASS | US event viewer. |
| 2,500+ visible words | NEEDS IMPROVEMENT | 2,474. |
| Originality | NEEDS IMPROVEMENT | Overlaps with MLB Playoffs and repeated legal FAQ. |
| Information gain | PASS | World Series-specific checks. |
| Factual freshness | PASS | FOX confirms Game 1/date. |
| Sources/E-E-A-T | PASS | MLB/FOX. |
| Internal linking | PASS | Relevant and working. |
| Brand integration | NEEDS IMPROVEMENT | Homepage anchor is `Zorba TV`. |
| Images | PASS | Real image, source record. |
| Heading structure | PASS | Logical. |
| Title/meta | PASS | Good title/meta lengths. |
| FAQ | NEEDS IMPROVEMENT | Repeated legal FAQ and duplicate channel FAQ with MLB article. |
| Schema | PASS | Generated from content. |
| Canonical/indexability | NEEDS IMPROVEMENT | Env-dependent production domain. |
| UX | PASS | Template-level and representative checks. |

### NBA

| Category | Status | Evidence |
|---|---|---|
| Search intent | PASS | How-to-watch NBA guide. |
| Primary keyword targeting | PASS | Title/slug and close H1. |
| Semantic coverage | PASS | Partners, League Pass, blackouts, devices. |
| Audience fit | PASS | US NBA viewer. |
| 2,500+ visible words | PASS | 2,525. |
| Originality | NEEDS IMPROVEMENT | Repeated legal FAQ only. |
| Information gain | PASS | Decision logic/blackout examples. |
| Factual freshness | PASS | NBA source supports media partner info. |
| Sources/E-E-A-T | PASS | NBA/Amazon sources. |
| Internal linking | PASS | Relevant cluster links. |
| Brand integration | NEEDS IMPROVEMENT | Homepage anchor is `ZorbaTV`. |
| Images | PASS | Real image, source record. |
| Heading structure | PASS | Logical. |
| Title/meta | PASS | Concise. |
| FAQ | NEEDS IMPROVEMENT | Repeated legal FAQ. |
| Schema | PASS | Generated from content. |
| Canonical/indexability | NEEDS IMPROVEMENT | Env-dependent production domain. |
| UX | PASS | Template-level and representative checks. |

### Best Firestick Player

| Category | Status | Evidence |
|---|---|---|
| Search intent | PASS | Comparison/listicle intent matched. |
| Primary keyword targeting | PASS | Title, body, slug. |
| Semantic coverage | PASS | Player criteria and alternatives. |
| Audience fit | PASS | Firestick app chooser. |
| 2,500+ visible words | PASS | 2,524. |
| Originality | NEEDS IMPROVEMENT | Repeated legal FAQ only. |
| Information gain | PASS | Comparison criteria and scorecard. |
| Factual freshness | NEEDS IMPROVEMENT | App landscape should be rechecked periodically. |
| Sources/E-E-A-T | NEEDS IMPROVEMENT | Smarters source authority unclear. |
| Internal linking | PASS | Strong. |
| Brand integration | PASS | One natural homepage link. |
| Images | PASS | Real image/source. |
| Heading structure | PASS | Logical. |
| Title/meta | PASS | Concise. |
| FAQ | NEEDS IMPROVEMENT | Repeated legal FAQ. |
| Schema | PASS | Good. |
| Canonical/indexability | NEEDS IMPROVEMENT | Env-dependent production domain. |
| UX | PASS | Template-level and representative checks. |

### Firestick Install

| Category | Status | Evidence |
|---|---|---|
| Search intent | PASS | How-to setup guide. |
| Primary keyword targeting | PASS | Title/H1/slug aligned. |
| Semantic coverage | PASS | Prereqs, credentials, EPG, errors. |
| Audience fit | PASS | Beginner/intermediate. |
| 2,500+ visible words | NEEDS IMPROVEMENT | 2,490. |
| Originality | NEEDS IMPROVEMENT | Overlap with Smarters/TiviMate/Xtream, repeated legal FAQ. |
| Information gain | PASS | Practical setup flow. |
| Factual freshness | NEEDS IMPROVEMENT | Fire OS permission behavior may change. |
| Sources/E-E-A-T | PASS | Amazon/Google/app sources. |
| Internal linking | PASS | Relevant and working. |
| Brand integration | PASS | One homepage link. |
| Images | PASS | Real image/source. |
| Heading structure | PASS | Logical. |
| Title/meta | PASS | Good. |
| FAQ | NEEDS IMPROVEMENT | Repeated legal FAQ. |
| Schema | PASS | Good. |
| Canonical/indexability | NEEDS IMPROVEMENT | Env-dependent production domain. |
| UX | PASS | Template-level and representative checks. |

### IPTV Smarters

| Category | Status | Evidence |
|---|---|---|
| Search intent | PASS | App-specific setup. |
| Primary keyword targeting | PASS | Title/slug close. |
| Semantic coverage | PASS | Login, M3U, Xtream, EPG, VOD. |
| Audience fit | PASS | Smarters Firestick user. |
| 2,500+ visible words | NEEDS IMPROVEMENT | 2,482. |
| Originality | NEEDS IMPROVEMENT | Overlap with Firestick/Xtream, repeated legal FAQ. |
| Information gain | PASS | App-specific login/error sections. |
| Factual freshness | NEEDS IMPROVEMENT | Source authority ambiguous. |
| Sources/E-E-A-T | NEEDS IMPROVEMENT | Need clearer official Smarters source. |
| Internal linking | PASS | Good. |
| Brand integration | NEEDS IMPROVEMENT | Homepage anchor `Zorba TV`. |
| Images | PASS | Real image/source. |
| Heading structure | PASS | Logical. |
| Title/meta | PASS | Good. |
| FAQ | NEEDS IMPROVEMENT | Repeated legal FAQ. |
| Schema | PASS | Good. |
| Canonical/indexability | NEEDS IMPROVEMENT | Env-dependent production domain. |
| UX | PASS | Template-level and representative checks. |

### TiviMate

| Category | Status | Evidence |
|---|---|---|
| Search intent | PASS | TiviMate Firestick setup. |
| Primary keyword targeting | PASS | Title/slug close. |
| Semantic coverage | PASS | Playlist, EPG, groups, premium, errors. |
| Audience fit | PASS | TiviMate user. |
| 2,500+ visible words | NEEDS IMPROVEMENT | 2,468. |
| Originality | NEEDS IMPROVEMENT | Overlap with Firestick/Xtream, repeated legal FAQ. |
| Information gain | PASS | TiviMate-specific organization and tuning. |
| Factual freshness | NEEDS IMPROVEMENT | App availability/install path should be checked. |
| Sources/E-E-A-T | PASS/NEEDS IMPROVEMENT | TiviMate sources good; Fire TV path needs clarity. |
| Internal linking | PASS | Good. |
| Brand integration | NEEDS IMPROVEMENT | Homepage anchor `ZorbaIPTV`. |
| Images | PASS | Real image/source. |
| Heading structure | PASS | Logical. |
| Title/meta | PASS | Good. |
| FAQ | NEEDS IMPROVEMENT | Repeated legal FAQ. |
| Schema | PASS | Good. |
| Canonical/indexability | NEEDS IMPROVEMENT | Env-dependent production domain. |
| UX | PASS | Template-level and representative checks. |

### Xtream Codes

| Category | Status | Evidence |
|---|---|---|
| Search intent | PASS | Credential-format explainer/setup. |
| Primary keyword targeting | PASS | Strong. |
| Semantic coverage | PASS | URL/user/pass/M3U/EPG/errors. |
| Audience fit | PASS | User with credentials. |
| 2,500+ visible words | PASS | 2,508. |
| Originality | NEEDS IMPROVEMENT | Repeated legal FAQ; minor credential/EPG repetition. |
| Information gain | PASS | Field-specific error tables. |
| Factual freshness | PASS/NEEDS IMPROVEMENT | Stable topic but app compatibility changes. |
| Sources/E-E-A-T | PASS/NEEDS IMPROVEMENT | Smarters source caveat. |
| Internal linking | PASS | Good. |
| Brand integration | PASS | One homepage link. |
| Images | PASS | Real image/source. |
| Heading structure | PASS | Logical. |
| Title/meta | PASS | Good. |
| FAQ | NEEDS IMPROVEMENT | Repeated legal FAQ. |
| Schema | PASS | Good. |
| Canonical/indexability | NEEDS IMPROVEMENT | Env-dependent production domain. |
| UX | PASS | Template-level and representative checks. |

### Smart TV Apps

| Category | Status | Evidence |
|---|---|---|
| Search intent | PASS | Platform comparison. |
| Primary keyword targeting | PASS | Good despite slug plural. |
| Semantic coverage | PASS | Samsung/LG/Android/Google TV. |
| Audience fit | PASS | Smart TV owner. |
| 2,500+ visible words | PASS | 2,543. |
| Originality | NEEDS IMPROVEMENT | Repeated legal FAQ only. |
| Information gain | PASS | Platform-first decisions. |
| Factual freshness | PASS | Official Samsung/LG/Google sources. |
| Sources/E-E-A-T | PASS | Strong official platform sources. |
| Internal linking | PASS | Good. |
| Brand integration | NEEDS IMPROVEMENT | Homepage anchor `Zorba TV`. |
| Images | PASS | Real image/source. |
| Heading structure | PASS | Logical. |
| Title/meta | PASS | Good. |
| FAQ | NEEDS IMPROVEMENT | Repeated legal FAQ. |
| Schema | PASS | Good. |
| Canonical/indexability | NEEDS IMPROVEMENT | Env-dependent production domain. |
| UX | PASS | Template-level and representative checks. |

### Buffering

| Category | Status | Evidence |
|---|---|---|
| Search intent | PASS | Troubleshooting. |
| Primary keyword targeting | PASS | Strong. |
| Semantic coverage | PASS | Network/device/app/source layers. |
| Audience fit | PASS | Frustrated end user. |
| 2,500+ visible words | PASS | 2,531. |
| Originality | NEEDS IMPROVEMENT | Repeated legal FAQ only. |
| Information gain | PASS | Layered diagnostic workflow. |
| Factual freshness | PASS | Stable troubleshooting, official device docs. |
| Sources/E-E-A-T | PASS | Good. |
| Internal linking | PASS | Strong hub links. |
| Brand integration | PASS | One homepage link. |
| Images | PASS | Real image/source. |
| Heading structure | PASS | Logical. |
| Title/meta | PASS | Good. |
| FAQ | NEEDS IMPROVEMENT | Repeated legal FAQ. |
| Schema | PASS | Good. |
| Canonical/indexability | NEEDS IMPROVEMENT | Env-dependent production domain. |
| UX | PASS | Rendered checks passed. |

## 20. Problems Grouped By Severity

### Critical

- None found in source content or rendering.

### Important

- Production canonical/social image correctness is env-dependent. `NEXT_PUBLIC_SITE_URL` must be set to the real production domain; otherwise local/request host can be used. Responsible files: `src/lib/site-origin.ts:4`, `src/app/blog/[slug]/page.tsx:23`, `src/app/sitemap.ts:6`, `src/app/robots.ts:5`.
- Several articles fall below the project's 2,500 visible-word target by this count: World Series, Firestick Install, IPTV Smarters, TiviMate.
- Smarters source authority is ambiguous; verify official Smarters source before relying on feature/platform claims.
- Repeated legal/brand FAQ across all 10 articles creates exact duplicate FAQ content.

### Minor

- Several homepage brand anchors use `Zorba TV`, `ZorbaTV`, or `ZorbaIPTV` instead of preferred normal-copy anchor `Zorba IPTV`.
- `best-iptv-apps-smart-tv-2026` slug uses plural `apps` while primary keyword is singular `best IPTV app for Smart TV`; do not change URL unless there is a serious indexing reason.
- Article JSON-LD should escape `<` in serialized JSON-LD if future content becomes less controlled.
- Local rendered test produced a metadataBase warning when `NEXT_PUBLIC_SITE_URL` was blank.

## 21. Recommended Fixes Only

Do not implement these as part of this audit.

1. Set `NEXT_PUBLIC_SITE_URL` in production to the real canonical domain.
2. Normalize one homepage brand anchor in each affected blog article to `Zorba IPTV` during a future small copy pass.
3. Slightly expand the four below-floor articles with genuinely useful, sourced information:
   - World Series: local FOX/antenna verification or FOX app authentication checklist.
   - Firestick Install: current Fire OS unknown-app permission variations.
   - IPTV Smarters: verified source/app identity and exact login-screen decision points.
   - TiviMate: official availability/install-path caveats by Android TV/Google TV/Fire TV.
4. Replace the repeated legal/brand FAQ with either a shorter shared disclaimer outside FAQ schema or article-specific disclosure questions.
5. Re-verify Smarters official sources and update source labels only after confirming the authoritative domain.
6. Before October sports events, refresh MLB/NBA dates, networks, and service naming against official sources.

