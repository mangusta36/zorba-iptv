import { chromium } from 'playwright';

const browser = await chromium.launch({ executablePath: '/usr/bin/chromium', headless: true, args: ['--no-sandbox'] });
for (const [name, width, height] of [['desktop', 1440, 900], ['mobile', 390, 844]]) {
  const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  await page.addInitScript(() => {
    window.__vitals = { lcp: 0, cls: 0, longTasks: 0 };
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) window.__vitals.lcp = entry.startTime;
    }).observe({ type: 'largest-contentful-paint', buffered: true });
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) if (!entry.hadRecentInput) window.__vitals.cls += entry.value;
    }).observe({ type: 'layout-shift', buffered: true });
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) window.__vitals.longTasks += Math.max(0, entry.duration - 50);
    }).observe({ type: 'longtask', buffered: true });
  });
  await page.goto('http://127.0.0.1:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  const result = await page.evaluate(() => {
    const resources = performance.getEntriesByType('resource');
    const scripts = resources.filter((entry) => entry.initiatorType === 'script');
    const images = [...document.images];
    return {
      ...window.__vitals,
      domContentLoaded: performance.getEntriesByType('navigation')[0]?.domContentLoadedEventEnd,
      jsTransferBytes: scripts.reduce((total, entry) => total + entry.transferSize, 0),
      scriptRequests: scripts.length,
      imageCount: images.length,
      loadedImages: images.filter((img) => img.complete && img.naturalWidth > 0).length,
      horizontalOverflow: document.documentElement.scrollWidth > innerWidth,
    };
  });
  console.log(JSON.stringify({ viewport: name, ...result }));
  await context.close();
}
await browser.close();
