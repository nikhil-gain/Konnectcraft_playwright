import{test,expect}from'@playwright/test';

test('Handle dynamic elements',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    for(let i=1;i<=5;i++){
        let buttonLocator= page.locator('//button[text()="STOP" or text()="START"]');
        // because same button changes from START to STOP
// for css
// const button= page.locator('button[name="start"], button[name="stop"]');  , is or  // alternative way to locate the button using name attribute

// for playwright methods
// const button = page.getByRole('button', { name: /start|stop/i });  | is or   // alternative way to locate the button using role and name
        await buttonLocator.click();

        await page.waitForTimeout(2000);  // Wait for 2 second before the next iteration
    }
})