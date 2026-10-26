# Zorba IPTV 2 Articles Strict Skill Compliance Report

Audit date: October 6, 2026

Scope:
- `/blog/best-iptv-player-for-apple-tv-2026`
- `/blog/iptv-epg-not-working-fix-tv-guide-2026`

## Research Summary

### Article 1: Best IPTV Player for Apple TV in 2026

- Primary keyword: `best IPTV player for Apple TV`
- Search intent identified: mixed comparison/listicle plus setup guidance. Current SERP patterns emphasize app shortlists, feature comparisons, Apple TV setup, Xtream Codes/M3U compatibility, and warnings that players do not include content.
- Recent/current facts verified:
  - UHF App Store listing verifies Apple TV availability and lists M3U8, Xtream, Plex, Jellyfin, Emby, and EPG-related features.
  - IPTVX App Store listing verifies Apple TV availability and lists Xtream API, M3U/M3U8, TV Guide, arbitrary EPG URL, catch-up, favorites, AirPlay, and iCloud sync.
  - Snappier IPTV App Store listing verifies Apple TV availability and lists Xtream Codes login, M3U import, external EPG URL support, multi-screen viewing, profiles, scheduled recordings, and no included content.
  - iPlayTV App Store listing lists Apple TV IPTV/M3U player features including remote playlists, Xtream Codes, full EPG, gzip/tar EPG URLs, time shift, frame-rate matching, and AirPlay 2.
  - TiviMate official device page states TiviMate is intended for Android TV devices and does not provide content.
- PAA/related questions researched and used:
  - What is the best IPTV player for Apple TV?
  - Can Apple TV use Xtream Codes?
  - Can I use an M3U playlist on Apple TV?
  - Is TiviMate available on Apple TV?
  - Do IPTV players include channels?
- Semantic/LSI phrases:
  - IPTV player Apple TV
  - best IPTV app for Apple TV
  - Apple TV IPTV player
  - IPTV app for tvOS
  - Xtream Codes Apple TV
  - M3U Apple TV
  - IPTVX Apple TV
  - UHF Apple TV
- Long-tail variants:
  - how to use IPTV on Apple TV
  - Apple TV IPTV player with Xtream Codes and M3U
- Competitor gaps found:
  - Many competitors list apps without separating IPTV player from IPTV service/content provider.
  - Several pages rely on affiliate-style claims instead of first-party App Store/developer verification.
  - TiviMate/Apple TV confusion is common and needed a verified official-source correction.
  - Zorba article improves the gap with official-source checks, verified-only comparison fields, legal setup framing, and a clearer decision path by source format.
- Key sources:
  - https://apps.apple.com/us/app/uhf-love-your-iptv/id6443751726?platform=tv
  - https://apps.apple.com/us/app/iptvx/id1451470024?platform=appleTV
  - https://apps.apple.com/us/app/snappier-iptv/id1579702567?platform=tv
  - https://apps.apple.com/us/app/iplaytv-iptv-m3u-player/id1072226801
  - https://tivimate.com/dashboard/devices

### Article 2: IPTV EPG Not Working? Fix a Blank or Wrong TV Guide

- Primary keyword: `IPTV EPG not working`
- Search intent identified: how-to troubleshooting. Current SERP patterns emphasize blank guide, No Information, wrong time, XMLTV URL, refresh/cache, channel mapping, and player-specific symptoms.
- Recent/current facts verified:
  - XMLTV DTD documents `channel id` and `programme` entries with `start`, `stop`, and `channel` attributes.
  - XMLTV format documentation uses channel IDs and programme entries to describe guide data independent of playable streams.
  - Current troubleshooting SERPs consistently distinguish EPG source/URL, refresh/cache, time zone/offset, and channel mapping/tvg-id causes.
  - TiviMate official source confirms Android TV focus, so article avoids presenting TiviMate UI paths as Apple TV guidance.
- PAA/related questions researched and used:
  - Why does my IPTV say No Information?
  - What is an XMLTV EPG URL?
  - Why is my IPTV guide showing the wrong time?
  - Why does EPG work for some channels but not others?
  - How do I refresh IPTV EPG?
- Semantic/LSI phrases:
  - IPTV EPG not loading
  - IPTV EPG not showing
  - IPTV TV guide not working
  - IPTV no information EPG
  - XMLTV not working
  - IPTV EPG wrong time
  - EPG URL IPTV
  - IPTV channel mapping
- Long-tail variants:
  - IPTV guide blank but channels work
  - IPTV EPG wrong time tvg-id XMLTV fix
- Competitor gaps found:
  - Many pages give a short list of fixes without explaining why playlist/login, EPG/XMLTV, and mapping fail independently.
  - Some pages overstate one cause as universal.
  - Player-specific guidance often invents or generalizes menu paths.
  - Zorba article improves the gap with a layered diagnostic model, sanitized tvg-id/XMLTV example, cautious player-specific section, and source-vs-app decision tree.
- Key sources:
  - https://github.com/XMLTV/xmltv/blob/master/xmltv.dtd
  - https://wiki.xmltv.org/index.php/XMLTVFormat
  - https://tivimate.com/dashboard/devices
  - https://apps.apple.com/us/app/snappier-iptv/id1579702567?platform=tv
  - https://apps.apple.com/us/app/iplaytv-iptv-m3u-player/id1072226801

## Verification Results

- Typecheck: PASS, `npm run typecheck`
- Lint: PASS, `npm run lint`
- Production build: PASS, `npm run build`
- Blog route verification: PASS, `node scripts/verify-blog-routes.mjs http://localhost:3000`
- Word-count/internal-link/image-path verifier: PASS, `node scripts/verify-blog-cluster.mjs`
- Similarity audit: PASS, `node scripts/audit-blog-similarity.mjs 0.8 35` reported `Near-duplicate paragraph matches >= 0.8: 0`
- Responsive QA: PASS at 390px, 768px, and 1440px for both article URLs. Playwright reported no horizontal overflow, exactly one H1, usable tables with `thead`/`tbody`, and figure/figcaption counts matching section-image requirements.
- Schema QA: PASS. Rendered JSON-LD contains BlogPosting, BreadcrumbList, and FAQPage. BlogPosting values match article title/description/date/image. FAQPage questions and answers exactly match visible FAQ content.
- Routing/indexability QA: PASS. Both URLs return HTTP 200, appear on `/blog`, are included in sitemap through existing sitemap generation, have self-referencing canonical URLs, and have no rendered `noindex`.

## Compliance Matrix: Article 1

Article: Best IPTV Player for Apple TV in 2026: tvOS Apps Compared

| Requirement | Result | Verification |
| --- | --- | --- |
| fresh SERP research | PASS | Web research performed October 6, 2026 |
| search intent identified | PASS | Mixed comparison/listicle plus setup guidance |
| 2-3 current facts researched | PASS | App Store and official TiviMate facts documented above |
| 3-5 PAA/related questions researched | PASS | 5 FAQ/PAA questions documented above |
| 5-8 semantic keywords identified | PASS | 8 semantic phrases documented above |
| competitor gaps identified | PASS | Gap analysis documented above |
| title <=60 | PASS | SEO title length 37 |
| meta <=155 | PASS | Meta description length 117 |
| primary keyword in required locations | PASS | H1/title, first sentence, H2 equivalent, and body |
| exactly one H1 | PASS | Playwright rendered check |
| answer-first opening <=80 words | PASS | First visible paragraph 66 words |
| 3+ useful H2s | PASS | 7 article H2 sections |
| correct heading hierarchy | PASS | Existing renderer uses H1, H2, H3 without skipped article levels |
| 2+ recent verifiable facts | PASS | UHF/IPTVX/Snappier/iPlayTV/TiviMate facts verified |
| useful table | PASS | Player comparison table |
| 2+ contextual internal links | PASS | Homepage, Xtream Codes, Firestick, Smart TV, buffering links |
| Zorba IPTV homepage anchor | PASS | One contextual `Zorba IPTV` homepage anchor |
| 3+ visible FAQs | PASS | 5 visible FAQs |
| FAQ schema exactly matches visible FAQ | PASS | Rendered schema comparison passed |
| BlogPosting schema | PASS | Rendered JSON-LD contains BlogPosting with required fields |
| hero WebP | PASS | `/images/blog/apple-tv-iptv-player-living-room-hero.webp` |
| hero dimensions/optimization | PASS | 1200x630 data, local WebP |
| image block accounted for EACH H2 | PASS | 7 H2s and 7 section figures |
| meaningful alt text | PASS | Hero and section alt text descriptive, no keyword stuffing |
| figure/figcaption implementation | PASS | Renderer outputs `figure` and `figcaption` for section images |
| image source/license recorded | PASS | `public/images/blog/image-sources.json` updated |
| semantic HTML | PASS | Rendered H1/H2/H3/P/table/thead/tbody/figure/figcaption/a verified |
| readable paragraph structure | PASS | Paragraphs are short and sectioned with table/callout support |
| external-link handling | PASS | Existing renderer uses external anchors with `rel="noopener noreferrer"` |
| closing CTA | PASS | Final takeaway paragraph links to `Zorba IPTV` |
| >=2,500 reader-visible words | PASS | 2,798 custom visible-word count; 2,836 existing verifier count |
| no substantial duplicate prose | PASS | Similarity audit found 0 matches over threshold |
| no cannibalization | PASS | Scoped to Apple TV/tvOS player selection |
| HTTP 200 | PASS | Route verifier returned 200 |
| correct canonical | PASS | `https://www.zorbatv.us/blog/best-iptv-player-for-apple-tv-2026` |
| indexable | PASS | No rendered noindex |
| appears on /blog | PASS | `/blog` rendered links to slug |
| sitemap inclusion | PASS | Route verifier checked sitemap inclusion |
| responsive at 390px | PASS | Playwright no overflow |
| responsive at 768px | PASS | Playwright no overflow |
| responsive at 1440px | PASS | Playwright no overflow |
| typecheck PASS | PASS | `npm run typecheck` |
| lint PASS | PASS | `npm run lint` |
| production build PASS | PASS | `npm run build` |

## Compliance Matrix: Article 2

Article: IPTV EPG Not Working? Fix a Blank or Wrong TV Guide (2026)

| Requirement | Result | Verification |
| --- | --- | --- |
| fresh SERP research | PASS | Web research performed October 6, 2026 |
| search intent identified | PASS | How-to troubleshooting |
| 2-3 current facts researched | PASS | XMLTV, current troubleshooting SERP, and TiviMate facts documented above |
| 3-5 PAA/related questions researched | PASS | 5 FAQ/PAA questions documented above |
| 5-8 semantic keywords identified | PASS | 8 semantic phrases documented above |
| competitor gaps identified | PASS | Gap analysis documented above |
| title <=60 | PASS | SEO title length 46 |
| meta <=155 | PASS | Meta description length 119 |
| primary keyword in required locations | PASS | H1/title, first sentence, H2, and body |
| exactly one H1 | PASS | Playwright rendered check |
| answer-first opening <=80 words | PASS | First visible paragraph 63 words |
| 3+ useful H2s | PASS | 10 article H2 sections |
| correct heading hierarchy | PASS | Existing renderer uses H1, H2, H3 without skipped article levels |
| 2+ recent verifiable facts | PASS | XMLTV and current player/source facts verified |
| useful table | PASS | Troubleshooting symptom table |
| 2+ contextual internal links | PASS | Homepage, buffering, Xtream Codes, Apple TV, IPTV Smarters links |
| Zorba IPTV homepage anchor | PASS | One contextual `Zorba IPTV` homepage anchor |
| 3+ visible FAQs | PASS | 5 visible FAQs |
| FAQ schema exactly matches visible FAQ | PASS | Rendered schema comparison passed |
| BlogPosting schema | PASS | Rendered JSON-LD contains BlogPosting with required fields |
| hero WebP | PASS | `/images/blog/iptv-epg-tv-guide-remote-hero.webp` |
| hero dimensions/optimization | PASS | 1200x630 data, local WebP |
| image block accounted for EACH H2 | PASS | 10 H2s and 10 section figures |
| meaningful alt text | PASS | Hero and section alt text descriptive, no keyword stuffing |
| figure/figcaption implementation | PASS | Renderer outputs `figure` and `figcaption` for section images |
| image source/license recorded | PASS | `public/images/blog/image-sources.json` updated |
| semantic HTML | PASS | Rendered H1/H2/H3/P/table/thead/tbody/figure/figcaption/a verified |
| readable paragraph structure | PASS | Paragraphs are short and sectioned with table/callout support |
| external-link handling | PASS | Existing renderer uses external anchors with `rel="noopener noreferrer"` |
| closing CTA | PASS | Final takeaway paragraph links to `Zorba IPTV` |
| >=2,500 reader-visible words | PASS | 2,594 custom visible-word count; 2,631 existing verifier count |
| no substantial duplicate prose | PASS | Similarity audit found 0 matches over threshold |
| no cannibalization | PASS | Scoped to EPG/XMLTV/TV guide troubleshooting |
| HTTP 200 | PASS | Route verifier returned 200 |
| correct canonical | PASS | `https://www.zorbatv.us/blog/iptv-epg-not-working-fix-tv-guide-2026` |
| indexable | PASS | No rendered noindex |
| appears on /blog | PASS | `/blog` rendered links to slug |
| sitemap inclusion | PASS | Route verifier checked sitemap inclusion |
| responsive at 390px | PASS | Playwright no overflow |
| responsive at 768px | PASS | Playwright no overflow |
| responsive at 1440px | PASS | Playwright no overflow |
| typecheck PASS | PASS | `npm run typecheck` |
| lint PASS | PASS | `npm run lint` |
| production build PASS | PASS | `npm run build` |

## Final Status

Strict skill compliance: PASS

Final verdict: SAFE TO DEPLOY
