export type DurationKey = "1-month" | "3-months" | "6-months" | "12-months";
export type DeviceCount = 1 | 2 | 3;

export const siteConfig = {
  brand: {
    name: "ZORBA",
    formalName: "Zorba IPTV",
    secondaryName: "Zorba TV",
    compactNames: ["ZorbaTV", "ZorbaIPTV"],
    tagline: "Entertainment for every screen, on your terms.",
    domain: process.env.NEXT_PUBLIC_SITE_URL || ""
  },
  contact: {
    email: process.env.CONTACT_EMAIL || "",
    whatsapp: process.env.WHATSAPP_NUMBER || "212753936672",
    whatsappInternational: "212753936672",
    whatsappUrl: "https://wa.me/212753936672",
    supportHours: "Support availability is configurable by the website owner."
  },
  social: {
    facebook: "",
    instagram: "",
    x: ""
  },
  integrations: {
    formWebhookConfigured: Boolean(process.env.FORM_WEBHOOK_URL),
    paymentProvider: process.env.PAYMENT_PROVIDER || "",
    authProvider: process.env.AUTH_PROVIDER || ""
  }
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Reseller", href: "/reseller" },
  { label: "Free Trial", href: "/free-trial" }
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
  { label: "Refund Policy", href: "/refund-policy" }
];

export const pricingFeatures = [
  "Live and on-demand categories",
  "HD and 4K playback where available",
  "Compatible IPTV player apps",
  "Setup details after order approval",
  "Customer support options"
];

export const pricingPlans: Record<
  DeviceCount,
  Array<{
    id: DurationKey;
    duration: string;
    price: number;
    featured?: boolean;
  }>
> = {
  1: [
    { id: "1-month", duration: "1 Month", price: 27 },
    { id: "3-months", duration: "3 Months", price: 37 },
    { id: "6-months", duration: "6 Months", price: 47, featured: true },
    { id: "12-months", duration: "12 Months", price: 67 }
  ],
  2: [
    { id: "1-month", duration: "1 Month", price: 27 },
    { id: "3-months", duration: "3 Months", price: 37 },
    { id: "6-months", duration: "6 Months", price: 47, featured: true },
    { id: "12-months", duration: "12 Months", price: 67 }
  ],
  3: [
    { id: "1-month", duration: "1 Month", price: 27 },
    { id: "3-months", duration: "3 Months", price: 37 },
    { id: "6-months", duration: "6 Months", price: 47, featured: true },
    { id: "12-months", duration: "12 Months", price: 67 }
  ]
};

export const faqs = [
  {
    question: "What is Zorba IPTV?",
    answer:
      "Zorba IPTV brings entertainment plans, device options and setup guidance together for viewers using compatible IPTV player apps and screens."
  },
  {
    question: "Is Zorba TV the same as Zorba IPTV?",
    answer:
      "Yes. Zorba IPTV is the formal brand reference, and Zorba TV is a natural shorthand used across the site. Some users may also type ZorbaTV or ZorbaIPTV when looking for the same brand."
  },
  {
    question: "Which devices are compatible?",
    answer:
      "Zorba IPTV offers setup guidance for common smart TVs, streaming devices, phones, tablets and computers. Check your player app requirements before choosing a plan."
  },
  {
    question: "How is a subscription activated?",
    answer:
      "Account details and setup guidance are provided after an order is approved. Online payments are currently unavailable."
  },
  {
    question: "What internet speed is recommended?",
    answer:
      "A stable broadband connection is recommended. Higher quality streams generally require more bandwidth."
  },
  {
    question: "Can I use multiple connections?",
    answer:
      "Yes. Choose one, two, or three devices when selecting a plan. Concurrent use should match your selected plan."
  },
  {
    question: "Is a free trial available?",
    answer:
      "You can request a Zorba TV trial from the Free trial page. Availability is subject to review."
  },
  {
    question: "How does customer support work?",
    answer:
      "Visit the Contact page for Zorba IPTV support options. Response times depend on current service availability."
  },
  {
    question: "How do renewals work?",
    answer:
      "Renewal details will be provided with the subscription terms before online orders are enabled."
  }
];

export const reseller = {
  packages: [
    {
      name: "Starter",
      description: "Entry package structure for approved resellers.",
      terms: "Ask us for current terms and availability."
    },
    {
      name: "Growth",
      description: "Expanded package structure for active reseller operations.",
      terms: "We can discuss options for your operation."
    },
    {
      name: "Agency",
      description: "Large account structure for teams managing multiple customers.",
      terms: "Enquire for a tailored discussion."
    }
  ],
  benefits: [
    { title: "Centralized management" },
    { title: "Configurable packages" },
    { title: "A direct point of contact" },
    { title: "Entertainment-focused brand" }
  ]
};
