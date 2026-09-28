# ZORBA Real Web Image Sourcing Report

Generated: September 27, 2026

## Summary

- Replaced generated-looking blog artwork with real, existing web-sourced images.
- Used 10 legally reusable Pexels photographs, one hero image per article.
- Downloaded images locally, converted/cropped them to 1200x630 WebP, and removed generated/stale image files from public/images/blog.
- Supporting images were not forced because the brief prioritized legal reuse and real imagery over filling every previous image slot. Article inline image arrays are now empty.
- Article prose, slugs, titles, keywords, descriptions, canonicals, schema shape, internal links, and FAQ/article copy were not intentionally changed.

## License Basis

All selected images are from Pexels pages that mark the asset as Free or Free to use. Pexels License states that photos/videos can be downloaded and used for free, attribution is not required, modification is allowed, and website/blog use is an allowed use case. License URL: https://www.pexels.com/license/

## Image Inventory

| Article | Local filename | Original source page | Creator/owner | License/reuse basis | Dimensions | Final WebP size |
| --- | --- | --- | --- | --- | --- | --- |
| how-to-watch-mlb-playoffs-2026 | /images/blog/mlb-playoffs-real-baseball-stadium-hero.webp | https://www.pexels.com/photo/crowd-on-a-baseball-stadium-17061702/ | Courtney Garner | Pexels License; Pexels marks the selected photo as Free/Free to use. Pexels License allows website/blog use and modification; attribution is not required. Real baseball stadium photograph selected for the MLB Playoffs article. | 1200x630 | 242.7 KB |
| how-to-watch-world-series-2026 | /images/blog/world-series-real-baseball-stadium-game-hero.webp | https://www.pexels.com/photo/baseball-match-at-stadium-25547642/ | NIKOLAI FOMIN | Pexels License; Pexels marks the selected photo as Free/Free to use. Pexels License allows website/blog use and modification; attribution is not required. Real baseball stadium photograph selected to visually differ from the MLB Playoffs stadium image. | 1200x630 | 139.7 KB |
| how-to-watch-nba-games-2026-27 | /images/blog/nba-real-indoor-basketball-court-hero.webp | https://www.pexels.com/photo/empty-indoor-basketball-court-with-official-29180063/ | Rodrigo Ortega | Pexels License; Pexels marks the selected photo as Free/Free to use. Pexels License allows website/blog use and modification; attribution is not required. Real basketball court and arena photograph selected for immediate basketball relevance. | 1200x630 | 87.7 KB |
| best-iptv-player-for-firestick-2026 | /images/blog/firestick-iptv-real-smart-tv-control-equipment-hero.webp | https://www.pexels.com/photo/modern-smart-tv-control-equipment-11031497/ | MOISES RIBEIRO | Pexels License; Pexels marks the selected photo as Free/Free to use. Pexels License allows website/blog use and modification; attribution is not required. Reusable real TV, remote, and streaming-device product-style photograph selected instead of an official Amazon asset whose editorial reuse was not verified. | 1200x630 | 21.9 KB |
| how-to-install-iptv-on-firestick-2026 | /images/blog/firestick-install-real-tv-remote-setup-hero.webp | https://www.pexels.com/photo/photo-of-person-holding-remote-control-4048092/ | Erik Mclean | Pexels License; Pexels marks the selected photo as Free/Free to use. Pexels License allows website/blog use and modification; attribution is not required. Real TV and remote setup photograph selected to communicate device setup without unverified Fire TV branding. | 1200x630 | 32.9 KB |
| iptv-smarters-pro-firestick-setup | /images/blog/iptv-smarters-real-tv-gadgets-setup-hero.webp | https://www.pexels.com/photo/modern-technology-setup-with-tv-and-gadgets-31121857/ | Jakub Zerdzicki | Pexels License; Pexels marks the selected photo as Free/Free to use. Pexels License allows website/blog use and modification; attribution is not required. No official IPTV Smarters media with clearly verified reuse terms was used; selected a real TV/device setup photo. | 1200x630 | 32.4 KB |
| tivimate-firestick-setup-2026 | /images/blog/tivimate-real-tv-remote-device-setup-hero.webp | https://www.pexels.com/photo/controlling-entertainment-devices-in-a-cozy-room-29148795/ | Jakub Zerdzicki | Pexels License; Pexels marks the selected photo as Free/Free to use. Pexels License allows website/blog use and modification; attribution is not required. No official TiviMate media with clearly verified reuse terms was used; selected a real TV/remote setup photo. | 1200x630 | 27.4 KB |
| xtream-codes-iptv-setup-guide | /images/blog/xtream-codes-real-tv-remote-streaming-hero.webp | https://www.pexels.com/photo/faceless-person-switching-channels-on-tv-7400892/ | Nothing Ahead | Pexels License; Pexels marks the selected photo as Free/Free to use. Pexels License allows website/blog use and modification; attribution is not required. No legitimate Xtream-specific photograph with verified reuse terms was found; selected a relevant real TV/streaming setup photo. | 1200x630 | 19.9 KB |
| best-iptv-apps-smart-tv-2026 | /images/blog/smart-tv-real-minimal-living-room-hero.webp | https://www.pexels.com/photo/tv-in-a-living-room-19866439/ | Lisa Anna | Pexels License; Pexels marks the selected photo as Free/Free to use. Pexels License allows website/blog use and modification; attribution is not required. Real modern living-room TV photograph selected for the Smart TV apps article. | 1200x630 | 32.1 KB |
| how-to-fix-iptv-buffering-freezing | /images/blog/iptv-buffering-real-wireless-router-hero.webp | https://www.pexels.com/photo/modern-wireless-router-with-antennas-29711663/ | Jakub Zerdzicki | Pexels License; Pexels marks the selected photo as Free/Free to use. Pexels License allows website/blog use and modification; attribution is not required. Real wireless router photograph selected for network and buffering troubleshooting relevance. | 1200x630 | 17.2 KB |

## Articles Without Suitable Reusable Hero Images

None. A reusable real hero image was found and locally optimized for all 10 articles.

## Supporting Image Decision

No supporting images were added in this pass. The prior supporting images were generated-looking diagrams/mockups, and suitable official app-specific media for IPTV Smarters, TiviMate, or Xtream Codes was not used because reuse permission could not be clearly verified. Rather than generating filler or using questionable screenshots, the article renderer now skips missing inline images safely.

## Validation Results

| Check | Result |
| --- | --- |
| npm run typecheck | Passed |
| npm run lint | Passed |
| npm run build | Passed |
| Local image existence | Passed: all 10 referenced hero images exist in public/images/blog |
| Referenced image HTTP checks | Passed: all 10 local image URLs returned 200 from the local Next server |
| Dimensions | Passed: all hero images are 1200x630 WebP |
| /blog visual QA at 390px, 768px, 1440px | Passed: final screenshots show real photographic/source imagery, not generated artwork |
| Overflow and alt checks | Passed: tested pages had no horizontal overflow and 0 empty image alt attributes |

## Screenshots Generated

- reports/zorba-real-web-image-screenshots/article-mlb-mobile.png (240.7 KB)
- reports/zorba-real-web-image-screenshots/article-smart-tv-desktop.png (426.1 KB)
- reports/zorba-real-web-image-screenshots/blog-1440.png (876.2 KB)
- reports/zorba-real-web-image-screenshots/blog-390.png (327.8 KB)
- reports/zorba-real-web-image-screenshots/blog-768.png (437.0 KB)
- reports/zorba-real-web-image-screenshots/blog-full-1440.png (1332.7 KB)
- reports/zorba-real-web-image-screenshots/blog-full-390.png (992.4 KB)

## Source Record

Machine-readable source records are in public/images/blog/image-sources.json.
