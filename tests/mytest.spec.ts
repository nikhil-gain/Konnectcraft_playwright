import { test, expect } from '@playwright/test';

// fixture - global variable : page, browser

test('Verify page title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

    let title:string = await page.title();
    console.log("Page title is : ", title);
  
    await expect(page).toHaveTitle(/Playwright/);
});