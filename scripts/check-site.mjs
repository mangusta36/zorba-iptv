import { chromium } from 'playwright';

const browser = await chromium.launch({ executablePath: '/usr/bin/chromium', headless: true, args: ['--no-sandbox'] });
const base = 'http://127.0.0.1:3000';
const results = [];
const check = (name, ok, detail = '') => { results.push({ name, ok, detail }); console.log(`${ok ? 'PASS' : 'FAIL'} ${name}${detail ? `: ${detail}` : ''}`); };
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.goto(base);
const expectedNav = ['Home', 'Pricing', 'Blog', 'FAQ', 'About', 'Reseller', 'Free Trial'];
const desktopNav = await page.getByRole('navigation', { name: 'Main navigation' }).locator('a').allTextContents();
check('desktop navigation order', JSON.stringify(desktopNav) === JSON.stringify(expectedNav), desktopNav.join(', '));
const links = [...new Set(await page.locator('a[href^="/"]').evaluateAll(anchors => anchors.map(anchor => anchor.getAttribute('href'))))];
for (const href of links) {
  if (href?.startsWith('/checkout?')) continue;
  const response = await page.request.get(`${base}${href}`);
  check(`navigation ${href}`, response.ok(), `${response.status()}`);
}

await page.goto(`${base}/pricing`);
await page.getByRole('button', { name: '2 Devices' }).first().click();
check('pricing device selector', await page.getByText('$29').count() > 0);
await page.getByRole('link', { name: /Choose plan/ }).first().click();
await page.waitForURL(/checkout\?duration=1-month&devices=2/);
await page.getByText('$29').waitFor();
check('checkout plan selection', page.url().includes('devices=2') && await page.getByText('$29').count() > 0, page.url());
const checkoutResult = await page.request.post(`${base}/api/checkout`, { data: { duration: '1-month', devices: 2 } });
check('checkout provider guard', checkoutResult.status() === 503);
const invalidResult = await page.request.post(`${base}/api/checkout`, { data: { duration: 'unknown', devices: 9 } });
check('checkout server validation', invalidResult.status() === 400);

await page.goto(`${base}/faq`);
const faq = page.getByRole('button', { name: 'What is IPTV?' });
await faq.click();
check('FAQ accordion', await faq.getAttribute('aria-expanded') === 'false');

for (const removed of ['/channel-list', '/login', '/register']) {
  const response = await page.request.get(`${base}${removed}`);
  check(`removed route ${removed}`, response.status() === 404, `${response.status()}`);
}

for (const path of ['contact', 'free-trial']) {
  await page.goto(`${base}/${path}`);
  const form = page.locator('form').first();
  await form.locator('button[type="submit"]').click();
  check(`${path} required fields`, !(await form.locator('input:invalid').count() === 0));
  await form.locator('input[name="name"]').fill('Test User');
  await form.locator('input[name="email"]').fill('test@example.com');
  if (path === 'contact') { await form.locator('input[name="subject"]').fill('Question'); await form.locator('textarea[name="message"]').fill('Hello'); }
  else { await form.locator('input[name="whatsapp"]').fill('1234567890'); await form.locator('select[name="device"]').selectOption('Smart TV'); }
  await form.locator('button[type="submit"]').click();
  await form.getByRole('status').waitFor();
  const statusText = await form.getByRole('status').textContent();
  check(`${path} integration guard`, !(statusText || '').toLowerCase().includes('success'), statusText || '');
}

await page.goto(`${base}/blog`);
check('empty blog', await page.getByText('Articles coming soon.').isVisible());
const missing = await page.request.get(`${base}/blog/does-not-exist`);
check('missing blog article', missing.status() === 404);

await page.setViewportSize({ width: 390, height: 844 });
await page.goto(base);
const menu = page.getByRole('button', { name: 'Open navigation menu' });
await menu.click();
check('mobile menu opens', await page.getByRole('navigation', { name: 'Mobile navigation' }).isVisible());
const mobileNav = await page.getByRole('navigation', { name: 'Mobile navigation' }).locator('a').allTextContents();
check('mobile navigation order', JSON.stringify(mobileNav) === JSON.stringify(expectedNav), mobileNav.join(', '));
await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Pricing' }).click();
await page.waitForURL('**/pricing');
check('mobile menu navigation', page.url().endsWith('/pricing'));

for (const width of [375, 390, 768, 1024, 1280, 1440]) {
  await page.setViewportSize({ width, height: 900 });
  await page.goto(base);
  const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  check(`no overflow ${width}`, scrollWidth <= width, `${scrollWidth}px`);
}

await page.goto(base);
for (const img of await page.locator('img').all()) {
  await img.scrollIntoViewIfNeeded();
  await img.evaluate(element => element.decode().catch(() => {}));
}
const images = await page.locator('img').evaluateAll(elements => elements.map(img => ({ src: img.currentSrc, complete: img.complete, width: img.naturalWidth })));
check('homepage images load', images.every(img => img.complete && img.width > 0), JSON.stringify(images.filter(img => !img.complete || img.width === 0)));

await browser.close();
if (results.some(result => !result.ok)) process.exitCode = 1;
