import{test, expect, Locator} from '@playwright/test';

// to run this test, use the command: npx playwright test tests/xpathlocators.spec.ts

test("Xpath demo in Playwright", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
 
//1. Absolute Xpath - logo
    const absoluteLogo: Locator = page.locator("//html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");
    // const absoluteLogo: Locator = page.locator("xpath=/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");   
    // xpath is recognized by default as // or xpath=...path in "".
    await expect(absoluteLogo).toBeVisible();
    
//2. Relative Xpath - logo
    const relativeLogo: Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']");
    await expect(relativeLogo).toBeVisible();

//3. contains()
    const products: Locator = page.locator("//h2/a[contains(@href,'computer')]");
    
    const productsCount: number = await products.count();  //4
    console.log("Total products count: ", productsCount);
    expect(productsCount).toBeGreaterThan(0);

//  console.log(await products.textContent()); // strict mode violation as same product holds 4 different data
    console.log("First product name: ", await products.first().textContent()); // to get the first product name, index start at 0.
    console.log("Last product name: ", await products.last().textContent()); // to get the last product name. 
    console.log("Nth product name: ", await products.nth(1).textContent()); // to get the Nth product name

    let productTitles: string[] = await products.allTextContents(); // allTextContents provides array of all strings.
    for (let pt of productTitles) {
        console.log("Product title: ", pt);
    }

//4. starts-with()
    const buildingProducts: Locator = page.locator("//h2/a[starts-with(@href,'/build')]");
    const countBuildingProducts: number = await buildingProducts.count();
    console.log("Total building products count: ", countBuildingProducts);
    expect(countBuildingProducts).toBeGreaterThan(0);

// 5. text() or .
    const reglink: Locator = page.locator("//a[text()='Register']");
    await expect(reglink).toBeVisible();

//6. last()
    const lastItem: Locator = page.locator("//div[@class='column follow-us']//li[last()]");
    await expect(lastItem).toBeVisible();
    console.log("Last item text: ", await lastItem.textContent());

//7.position()
    const positionItem: Locator = page.locator("//div[@class='column follow-us']//li[position()=3]");
    await expect(positionItem).toBeVisible();
    console.log("Position item text: ", await positionItem.textContent());



})    