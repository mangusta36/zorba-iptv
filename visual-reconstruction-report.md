# Visual reconstruction report

## 2026-09-20 revision

The current pass compared the saved Chromium reference captures with fresh local captures at 1440 × 900, 1280 × 800, 768 × 1024, and 390 × 844. A fresh reference browser navigation timed out because this environment could not resolve `www.zorba.network`; the saved captures remain the visual baseline. The reference homepage was also checked through the web tool for its current section order and linked pages.

The homepage now uses the original sports montage in a split desktop hero and a text-only mobile hero. The category band, poster rows, broad dark editorial panels, centered pricing heading, tall trial and paid plan cards, two-column FAQ, eight benefit tiles, and expanded footer follow the reference's observed proportions. Pricing keeps all four configured paid durations per device count; on large screens the fifth card is reachable by horizontal scroll. The pricing, channel-list, and reseller pages now share an original poster banner. Pricing also includes the reference's sports and three-step sections. Hidden editorial images were removed from the DOM.

The final local homepage measures 7,092 px at 1440 px and about 10,413 px at 390 px, compared with 7,673 px and 12,105 px in the saved reference captures. The biggest remaining differences are the original, unbranded media; shorter mobile gallery and overall page; honest service copy; and locally configured pricing. The channel page keeps functional search and filters around an empty verified catalog.

`npm run lint`, `npm run typecheck`, and `npm run build` pass. The build uses Next's supported webpack path because Turbopack could not bind its local CSS worker port in this environment. The production build generated 26 pages. Browser checks pass for linked routes, menu navigation, the device selector, checkout selection and validation, forms, FAQ, channel search, empty blog and missing article, image loading after scroll, and no overflow at 375, 390, 768, 1024, 1280, or 1440 px.

Isolated, unthrottled Chromium measurements against the production build: desktop LCP 368 ms, CLS 0, long-task blocking proxy 208 ms, and 164,621 JS transfer bytes; mobile LCP 272 ms, CLS 0, proxy 111 ms, and 156,133 JS transfer bytes. These are local lab values, not Lighthouse scores. INP was not measured. Eighteen homepage image elements were present and all loaded when brought into view; the seven visible on initial mobile load loaded while the rest stayed lazy.

The blog data remains empty, unknown article paths return 404, and this pass added no keyword targeting.

Date: 2026-09-19. Reference: https://www.zorba.network/. Local preview: http://127.0.0.1:3000.

## Reference inspection

Rendered reference screenshots were captured with Chromium at 1440x900, 1280x800, 768x1024, and 390x844. The complete homepage was inspected at each size. Desktop and mobile screenshots were also captured for the reference pricing, channel list, reseller, login, FAQ, privacy policy, refund policy, and blog pages. The reference register, free-trial, contact, about, checkout, checkout success/cancel, and terms-and-conditions URLs returned 404. The reference login URL renders a WordPress administration login, which is visually unrelated to the public site. Those local pages follow the reconstructed public design system.

Screenshot files are under `visual-screenshots/`: `reference-*.png`, `local-before-*.png`, `local-after-*.png`, `local-after-v2-*.png`, `local-after-v3-*.png`, and `pages/{reference,local}-*.png`. The initial and final homepage sets each cover all four requested viewport sizes. The full baseline comparison is in `visual-reconstruction-audit.md`.

## Main differences found

The old local hero used a framed living-room photo and a floating technical card, while the reference uses short copy on the left and a large unframed sports collage on the right. The old entertainment area was a five-card feature grid; the reference uses a narrow visual band, a wide two-row poster gallery, a dark editorial panel, and another poster strip. The old pricing section had only four generic cards, without a trial card. The old homepage placed device and feature grids where the reference has channels and sports presentation sections. The old guide had five steps rather than three, the FAQ was single-column, and the benefits area had four large cards rather than eight compact items. The previous coral/cyan palette and gradient backgrounds also differed substantially from the reference's dark violet treatment.

The original `Section` animation kept offscreen content at zero opacity in full-page captures. That hidden initial state has been removed.

## Reconstruction

The shared header, buttons, page banners, section styles, pricing selector, FAQ, footer, and color tokens were redesigned. The desktop header now uses a compact logo/nav/actions arrangement, and mobile uses menu/brand/login. Internal pages share a dark media banner made with original artwork.

The homepage now follows the requested sequence: header, split hero, entertainment strip, movies/series gallery, device editorial panel, poster showcase, pricing, international television, movies/sports, three-step guide, FAQ, eight service-benefit items, and footer. Pricing retains the central owner-set prices and updates all four plans across one, two, and three devices. A trial card sits beside them. The additional fourth paid plan is shown even though the reference screenshot exposes only three paid cards at once.

The reference pricing, channel list, and reseller pages informed the matching local page layouts. The pricing page has a media banner, device selector, plan cards, comparison, and FAQ. The channel page keeps its functional search and filters with an honest empty catalog state. The reseller page keeps owner-editable package data, benefits, and intake form. Login, register, trial, FAQ, contact, about, checkout, legal, and blog pages retain their local workflows while adopting the shared header, footer, palette, and banner treatment.

The hero collage and two poster sheets were generated as original images and stored as optimized WebP assets in `public/`. The collage contains anonymous, unbranded athletes. The poster sheets contain original fictional scenes without titles or logos. Existing Unsplash editorial images remain in the two lower content bands; browser checks confirmed they load.

## Three visual reviews

1. Baseline: reference and previous local screenshots exposed the missing image hierarchy and oversized generic cards.
2. First rebuild: captures showed the overall desktop structure much closer but a repeated poster row and mobile logo/login crowding. A second original poster sheet and smaller mobile brand solved those issues.
3. Final polish: the pricing page heading was centered, customer-facing plan copy was simplified, contact placeholders were removed, and screenshots were recaptured at every requested width.

Final homepage height is about 6,477px at 1440px versus 7,674px in the reference, and about 11,403px at 390px versus 12,104px. The biggest remaining differences are original media in place of protected posters/logos, a slightly shorter desktop page, five pricing cards rather than four visible cards, and the local channel browser instead of the reference's large empty embedded panel. The local layout has no horizontal overflow at 390, 768, 1280, or 1440px. This is a close structural reconstruction, not a pixel-perfect replica.

## Functional verification

`scripts/check-site.mjs` passed browser checks for every linked route, mobile menu navigation, device selector price change, checkout plan transfer, server-side checkout validation, FAQ accordion, channel search, contact and trial required fields, backend-unconfigured form responses, empty blog, missing article 404, image loading, and horizontal overflow at all four widths. Contact, trial, payment, and authentication require provider configuration; none report a fake success.

`npm run lint`, `npm run typecheck`, and `npm run build` all passed. Next.js 16.3.5 compiled the production app and generated 26 static pages. The preview URL responded with HTTP 200 after the build.

The blog data remains an empty array. `/blog` is accessible, nonexistent article URLs return 404, and no sample posts or fake URLs were added. No keyword research, keyword-targeted content, or meta keywords tag was added. Existing robots and sitemap routes remain in place.
