import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const browser = await chromium.launch({ executablePath: '/usr/bin/chromium', headless: true, args: ['--no-sandbox'] });
const paths = process.argv[2] === 'local' ? ['pricing', 'blog', 'faq', 'about', 'reseller', 'free-trial', 'contact', 'checkout'] : process.argv[2] === 'local-rest' ? ['checkout/success', 'checkout/cancel', 'privacy-policy', 'terms-and-conditions', 'refund-policy'] : process.argv[2] === 'reference-rest' ? ['contact', 'about', 'checkout', 'checkout/success', 'checkout/cancel', 'privacy-policy', 'terms-and-conditions', 'refund-policy', 'blog'] : process.argv[2] === 'reference-faq' ? ['faq'] : ['pricing', 'blog', 'faq', 'about', 'reseller', 'free-trial'];
await mkdir('visual-screenshots/pages', { recursive: true });
const sites = process.argv[2]?.startsWith('local') ? [['local', 'http://127.0.0.1:3000']] : [['reference', 'https://www.zorbatv.us']];
for (const [site, base] of sites) {
  for (const path of paths) {
    for (const [size, width, height] of [['desktop', 1440, 900], ['mobile', 390, 844]]) {
      const page = await browser.newPage({ viewport: { width, height }, ignoreHTTPSErrors: true });
      try {
        const response = await page.goto(`${base}/${path}`, { waitUntil: 'domcontentloaded', timeout: 25000 });
        await page.waitForTimeout(900);
        await mkdir(`visual-screenshots/pages/${site}-${path.split('/').slice(0, -1).join('/')}`, { recursive: true });
        await page.screenshot({ path: `visual-screenshots/pages/${site}-${path}-${size}.png`, fullPage: true, animations: 'disabled' });
        console.log(JSON.stringify({ site, path, size, status: response?.status(), title: await page.title() }));
      } catch (error) { console.log(JSON.stringify({ site, path, size, error: String(error) })); }
      await page.close();
    }
  }
}
await browser.close();
