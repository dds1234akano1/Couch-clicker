const puppeteer = require('puppeteer');

(async () => {
  // Launch a new browser instance
  const browser = await puppeteer.launch({ headless: false }); // Set headless to false to see the browser actions
  const page = await browser.newPage();

  // Navigate to your target website
  await page.goto('https://couch-clicker.pages.dev');

  // Wait for the button to be available (replace with correct selector if needed)
  await page.waitForSelector('button[aria-label="Open in app"]');

  // Click the "Open in app" button
  await page.click('button[aria-label="Open in app"]');

  // Close the browser after some time (if needed)
  // await browser.close();
})();
