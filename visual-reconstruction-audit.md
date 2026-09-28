# Visual reconstruction audit

Reference: https://www.zorba.network/ (rendered in Chromium on 2026-09-19). Baseline screenshots: `visual-screenshots/reference-{desktop,laptop,tablet,mobile}.png` and `visual-screenshots/local-before-{desktop,laptop,tablet,mobile}.png`.

## Reference composition

At 1440px, the page is 7,674px tall. A 109px transparent header overlays a dark violet hero of about 610px. Hero copy occupies the left half and a large sports montage the right half. A roughly 100px entertainment strip follows. The gallery has a centered heading and two rows of narrow posters across the viewport. A broad, nearly black editorial panel follows, then a second horizontal poster strip. Pricing starts around the middle of the page with a centered heading, three part device selector, a trial card and four subscription cards. Two broad text and image editorial bands follow. The last third contains a three step guide, two column FAQ, eight compact benefit cards, and a multi column footer.

The desktop palette is black and deep violet with white headings, muted gray paragraphs, and bright violet CTAs. Content spans around 1300px at large widths. The reference uses relatively square buttons, minimal borders, dense text, and strong image scale. The mobile header is compact with menu, centered identity, and login. The hero copy centers; the hero montage is suppressed at 390px. Poster rows become a narrow horizontal view. The pricing area stacks cards. Full mobile page height measured 12,104px.

## Section-level visual observations

These are rendered observations at 1440px, not claims about the reference's private CSS values. Heights are approximate because image loading and browser fonts can change the final measurement.

| Order | Section | Rendered treatment and layout | Responsive and interaction notes |
| --- | --- | --- | --- |
| 1 | Header | About 109px; transparent over near-black violet; identity left, four center links, two violet rectangular actions right. White 14-16px nav with active underline. | At 390px, about 70px tall with menu at left, brand centered, login at right. Desktop hover and active link highlight. |
| 2 | Hero | About 610px; dark grid/star texture; left headline around 50px with a ~600px measure, muted description, two 150-200px CTAs; large unframed sports collage right. Container near 1300px. | Text and CTAs center on mobile; large collage is absent from the captured first mobile viewport. Buttons remain side by side at 390px. |
| 3 | Entertainment strip | Full-width violet band about 100px tall, horizontally aligned high-contrast wordmarks/logos. | Horizontally clipped/scrolling on mobile; no multi-row stack. |
| 4 | Movies gallery | Black-violet section with centered ~44px heading, muted short description, two rows of portrait media across nearly full viewport. Gaps about 8-14px, subtle corners. | Portrait content narrows/reflows at tablet and mobile widths; media remains the primary visual rather than descriptive cards. |
| 5 | Entertainment showcase | Broad nearly-black editorial panel, rounded corners around 24px, roughly 400px tall, with left heading and paragraph and a mostly open right side in the captured reference. | Text moves toward the top of the panel on mobile. |
| 6 | Second poster strip | One horizontal row of tall entertainment images inside a wide container, about 200-260px image height. | Fewer images visible at once at narrower widths. |
| 7 | Pricing | Dark band with centered eyebrow and ~40px title; three-part device selector; trial plus paid plan cards. Cards are narrow, tall, lightly bordered dark panels with a strong price line, compact check-list, full-width violet CTA, small payment note; 4 cards visible in the desktop capture. | Device tabs update card contents. Cards stack on mobile. Violet hover/selected states. |
| 8 | International channels | Wide dark editorial band with left title/description and right visual area; generous vertical padding. | Text and media stack on mobile. |
| 9 | Movies and sports | Alternating editorial composition, text toward right, media toward left, on near-black background. | Stacks into one column on mobile. |
| 10 | Getting started | Small eyebrow, ~38px heading, introductory line, then three evenly spaced icon/text steps on a dark surface. | Three steps stack on mobile. |
| 11 | FAQ | Centered intro; dense two-column question and answer presentation with violet circular question icons and minimal dividers. | Single column at mobile width. Question controls reveal answer content. |
| 12 | Benefits | Deep violet full-width band, centered intro, eight compact tiles in a four-column/two-row grid. Circular violet icon treatments; low-radius dark tiles. | Two columns then one/two depending on narrow width. |
| 13 | Footer | About 594px on desktop; violet block with brand, company/page/legal columns and a bottom copyright line; small muted text and minimal separators. | Columns stack on mobile; the captured mobile footer is about 1,142px tall. |

The reference uses short easing on hover states and menu/accordion controls; no large section motion was required to convey the page structure. Its images and logos are protected or third-party media, so the local visual assets preserve proportions and mood rather than copying the source imagery.

## Baseline differences

| Area | Reference | Previous local implementation |
| --- | --- | --- |
| Header | 109px on desktop, compact mobile menu and login | 81px sticky bar, extra top navigation items, icon badge |
| Hero | ~610px, tight left copy, large unframed sports artwork | ~825px, long operational copy, framed living room image and floating card |
| Entertainment strip | narrow, full width image led band | missing |
| Gallery | two rows of portrait imagery across the page | five text cards with landscape thumbnails |
| Editorial showcase | wide dark panel, then another poster row | generic feature grid |
| Pricing | centered introduction and device selector; trial plus four plans | left aligned introduction and four generic surface cards |
| Channels and sports | two substantial editorial image bands | device icon grid; no corresponding bands |
| Guide | three icon steps | five cards |
| FAQ | dense two column presentation | one column accordion |
| Benefits | eight compact tiles near footer | four large cards before FAQ |
| Footer | larger multi column dark violet structure | compact four column utility footer |

The previous local page measured 7,008px on desktop and 13,022px on mobile. Its visual density came from oversized text cards instead of the reference's image led sections. The old coral, cyan, and gradient treatment also diverged from the reference's violet accents. Shared styles carried these differences into internal pages.

Original media will be used in the reconstruction. The reference's movie posters, sports personalities, and platform logos are excluded because they are protected or suggest commercial affiliations.
