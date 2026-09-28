# Zorba IPTV Sitewide Branded Keyword SEO Realignment

## Audit Inventory

Pre-edit audit found the site mostly using the visual brand `ZORBA` and editorial brand `Zorba TV`. The homepage, root metadata, About, Pricing, FAQ, Contact, Reseller, Free Trial, Blog listing, shared header/footer, sitemap/robots origin helper, blog JSON-LD, and all 10 blog entries were inspected.

Initial branded keyword state:

| Variant | Pre-edit status |
| --- | --- |
| `Zorba IPTV` / `zorba iptv` | Not established on indexable pages. |
| `Zorba TV` | Present mostly in blog disclaimers, authorship, and a few contextual support links. |
| `ZorbaTV` | Not present. |
| `ZorbaIPTV` / `zorbaiptv` | Not present. |
| `Zorba` | Present in blog copy and some UI text. |
| `ZORBA` | Present as the visual/logo brand and some page labels. |

Post-edit inventory:

| Variant | Count | Main locations |
| --- | ---: | --- |
| `Zorba IPTV` | 46 | Homepage metadata/H1/body/schema, root metadata, About, Pricing, FAQ, Contact, Reseller, Free Trial, Blog listing, blog homepage links, shared config. |
| `Zorba TV` | 73 | Homepage copy, root metadata, supporting pages, Blog listing, existing blog disclaimers, shared config. |
| `ZorbaTV` | 4 | About entity explanation, homepage/blog schema alternate names, one blog support link, shared config. |
| `ZorbaIPTV` | 4 | About entity explanation, homepage/blog schema alternate names, one blog support link, shared config. |
| `ZORBA` | 3 | Visual brand/logo usage retained. |

## Implementation Summary

- Homepage now owns branded intent with the title `Zorba IPTV | Official Zorba TV Website`, a matching meta description, one H1 containing `Zorba IPTV`, natural hero/body references to `Zorba TV`, and homepage Organization/WebSite JSON-LD when `NEXT_PUBLIC_SITE_URL` is configured.
- Root metadata now uses `Zorba IPTV` as the site/entity name, with Open Graph site name, Twitter metadata, and application name aligned.
- Shared site config now defines the editorial naming convention: `Zorba IPTV` as formal brand, `Zorba TV` as secondary name, and `ZorbaTV`/`ZorbaIPTV` as compact variants.
- About page explains the brand relationship naturally without inventing unsupported facts.
- Pricing, FAQ, Contact, Reseller, and Free Trial pages keep their original conversion/support intent while adding restrained branded context.
- FAQ page now emits FAQPage JSON-LD generated from the same FAQ array used for visible content.
- Blog listing metadata and copy now identify the guides as coming from Zorba IPTV/Zorba TV without changing article intent.
- Each of the 10 blog articles received one restrained contextual homepage link using varied anchors. Article H1s, SEO titles, primary keywords, URLs, and informational structure were preserved.
- Blog article JSON-LD publisher now uses `Zorba IPTV` with alternate names instead of only `ZORBA`.
- Header/footer home labels now point assistive technology to `Zorba IPTV home`; the visible logo remains `ZORBA`.
- `.env.example` now documents `NEXT_PUBLIC_SITE_URL` as required in production for canonical URLs, sitemap, robots, and structured data.

## Final Keyword Map

| Page/type | Primary role | Branded target |
| --- | --- | --- |
| `/` | Main branded authority page | Primary: `Zorba IPTV`; secondary: `Zorba TV`, `ZorbaTV`, `ZorbaIPTV`, `Zorba`. |
| `/about` | Entity/supporting brand page | Explains `Zorba IPTV` and `Zorba TV` as the same brand/entity. |
| `/pricing` | Commercial/pricing page | `Zorba IPTV plans`, `Zorba TV pricing`; pricing intent remains primary. |
| `/faq` | Support/FAQ page | `Zorba IPTV FAQ`, `Zorba TV setup/support`; FAQ schema matches visible content. |
| `/contact` | Support/contact page | `Zorba IPTV support`, `Zorba TV support`. |
| `/reseller` | Reseller conversion page | `Zorba IPTV reseller enquiries`, `Zorba TV reseller access`. |
| `/free-trial` | Trial conversion page | `Zorba IPTV free trial`, `Zorba TV` trial context. |
| `/blog` | Informational hub | Guides from `Zorba IPTV`/`Zorba TV`; not a branded landing page. |
| `/blog/*` | Supporting informational articles | Existing informational keywords preserved; one contextual homepage link per article reinforces `/`. |

## Canonical Note

No localhost canonical was hardcoded. Production canonical generation still depends on setting:

```env
NEXT_PUBLIC_SITE_URL=https://your-real-production-domain.com
```

The exact real Zorba production domain was not present in the project, so it was not guessed.
