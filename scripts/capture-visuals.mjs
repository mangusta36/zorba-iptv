import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const browser = await chromium.launch({ executablePath: '/usr/bin/chromium', headless: true, args: ['--no-sandbox'] });
const viewports = [
  ['desktop', 1440, 900],
  ['laptop', 1280, 800],
  ['tablet', 768, 1024],
  ['mobile', 390, 844],
];
const output = 'visual-screenshots';
await mkdir(output, { recursive: true });
const sites = process.argv[2] === 'fresh' ? [['reference-fresh', 'https://www.zorbatv.us'], ['local-fresh', 'http://127.0.0.1:3000']] : process.argv[2]?.startsWith('after') ? [[`local-${process.argv[2]}`, 'http://127.0.0.1:3000']] : [['reference', 'https://www.zorbatv.us'], ['local-before', 'http://127.0.0.1:3000']];
for (const [site, base] of sites) {
  for (const [name, width, height] of viewports) {
    const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1, ignoreHTTPSErrors: true });
    try {
      await page.goto(base, { waitUntil: 'domcontentloaded', timeout: 45000 });
      await page.waitForTimeout(3000);
      await page.screenshot({ path: `${output}/${site}-${name}.png`, fullPage: true, animations: 'disabled' });
      const metrics = await page.evaluate(() => ({
        title: document.title,
        width: document.documentElement.scrollWidth,
        height: document.documentElement.scrollHeight,
        sections: [...document.querySelectorAll('header, main > section, footer')].map((el) => ({
          tag: el.tagName,
          heading: el.querySelector('h1,h2')?.textContent?.trim().slice(0, 90),
          top: Math.round(el.getBoundingClientRect().top + scrollY),
          height: Math.round(el.getBoundingClientRect().height),
          background: getComputedStyle(el).backgroundColor,
        })),
      }));
      console.log(JSON.stringify({ site, viewport: name, metrics }));
    } catch (error) {
      console.log(JSON.stringify({ site, viewport: name, error: String(error) }));
    }
    await page.close();
  }
}
await browser.close();
