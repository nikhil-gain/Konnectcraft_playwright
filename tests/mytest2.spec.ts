import { test, expect } from '@playwright/test';

// fixture - global variable : page, browser

test('Verify page URL', async ({ page }) => {
  await page.goto('https://playwright.dev/');

    let url:string = await page.url();
    console.log("Page URL is : ", url);
  
    await expect(page).toHaveURL(/playwright/); // here /*something*/ is a regex pattern to match the URL
});