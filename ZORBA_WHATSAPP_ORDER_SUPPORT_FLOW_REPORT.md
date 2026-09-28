# Zorba WhatsApp Order + Support Flow Report

## Scope

This task only changed CTA behavior around order/support actions. Navigation, SEO, pricing amounts, design, and content remain unchanged.

## Centralized WhatsApp implementation

The WhatsApp destination was centralized in:

- [src/config/site.ts](src/config/site.ts)
- [src/lib/whatsapp.ts](src/lib/whatsapp.ts)

The production number is now:

- 212753936672
- wa.me URL: https://wa.me/212753936672

The helper uses URL-safe encoding with `encodeURIComponent` and generates plan-aware messages from the common plan data instead of duplicating prices in multiple places.

## CTA audit

### Buttons changed to WhatsApp

- Homepage hero: Request a trial -> WhatsApp trial flow
- Homepage pricing selector: each plan CTA -> WhatsApp order flow with exact plan + price
- Pricing page: each plan CTA -> WhatsApp order flow with exact plan + price
- Header: Reseller -> WhatsApp reseller flow
- Header: Free Trial -> WhatsApp trial flow
- Footer: Free Trial -> WhatsApp trial flow
- Footer: Reseller -> WhatsApp reseller flow
- Footer: Contact -> WhatsApp support flow
- Checkout review screen: Order via WhatsApp -> WhatsApp order flow
- Order status page: Contact Support -> WhatsApp support flow
- Contact form submission -> WhatsApp support flow
- Trial form submission -> WhatsApp trial flow
- Reseller form submission -> WhatsApp reseller flow

### Buttons intentionally kept as normal navigation

- Home link
- Blog link
- FAQ link
- About link
- Pricing navigation (Explore plans) remains a normal route to the pricing page
- Change plan in checkout remains a normal route back to pricing
- Normal informational links in the site stay as page navigation

## Plan-specific message examples

Generated from centralized pricing config:

- 1 Month: "Hello, I came from the Zorba IPTV website pricing section. I want to order the 1 Month plan for $27."
- 3 Months: "Hello, I came from the Zorba IPTV website pricing section. I want to order the 3 Months plan for $37."
- 6 Months: "Hello, I came from the Zorba IPTV website pricing section. I want to order the 6 Months plan for $47."
- 12 Months: "Hello, I came from the Zorba IPTV website pricing section. I want to order the 12 Months plan for $67."

The prices remain the same and are sourced from the central pricing data; no second disconnected price list was introduced.

## Trial, support, and reseller message definitions

### Trial

"Hello, I came from the Zorba IPTV website. I would like to request a trial. Can you help me get started?"

### Support

"Hello, I came from the Zorba IPTV website. I need help with my Zorba IPTV service."

### Reseller

"Hello, I came from the Zorba IPTV website. I'm interested in reseller options and would like more information."

## Checkout behavior found

The checkout flow currently does not process a real payment. The review screen in [src/components/checkout-client.tsx](src/components/checkout-client.tsx) clearly shows that online payment is unavailable, and the API route in [src/app/api/checkout/route.ts](src/app/api/checkout/route.ts) returns a 503/validation response. This means the actual order handoff is effectively a human confirmation step through WhatsApp, which matches the business requirement.

The final CTA was updated to route the user to WhatsApp with the prefilled plan and price rather than leaving them stuck on a dead payment flow.

## Production phone validation

The project source was checked for old numbers and the production UI uses the centralized number:

- 212753936672

No remaining production UI references were found to 0753936672 in the actual app source files. The older local number is not used in the app runtime.

## Verification status

### Typecheck

Command run:

- `npm run typecheck`

Result:

- PASS

### Lint

Command run:

- `npm run lint`

Result:

- PASS

### Build

Command run:

- `npm run build`

Observed result in this terminal session:

- Next started the production build and reached: "Creating an optimized production build ..."
- No final success message or exit code was produced before the verification session stopped reporting output.

This means the build status is currently unconfirmed in this environment, even though the source-level validation passed. The build step should be re-run in a longer or less constrained environment if a full completion signal is required.

## Files updated

- [src/config/site.ts](src/config/site.ts)
- [src/lib/whatsapp.ts](src/lib/whatsapp.ts)
- [src/components/button.tsx](src/components/button.tsx)
- [src/components/pricing-selector.tsx](src/components/pricing-selector.tsx)
- [src/components/checkout-client.tsx](src/components/checkout-client.tsx)
- [src/components/request-form.tsx](src/components/request-form.tsx)
- [src/components/header.tsx](src/components/header.tsx)
- [src/components/footer.tsx](src/components/footer.tsx)
- [src/app/page.tsx](src/app/page.tsx)
- [src/app/checkout/success/page.tsx](src/app/checkout/success/page.tsx)
- [src/app/reseller/page.tsx](src/app/reseller/page.tsx)

## Conclusion

The WhatsApp CTA behavior is centralized and the order/support flows now route to the main support/order channel with plan-aware, short messages. Normal page navigation remains intact for informational links, while actionable sales and support buttons trigger WhatsApp with enough context for support to immediately understand the visitor source and intent.
