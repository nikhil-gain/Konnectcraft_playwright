import{test, expect, Locator} from '@playwright/test';
// Locator is a fixture

test("Verify Playwright locators", async ({page}) => {
    
    await page.goto("https://ecommerce-playground.lambdatest.io/");

//  1. page.getByAltText() to locate an element, usually image, based on alt attribute.
    // supports alt text such as img and area elements, as well as input elements of type image.

    const logo:Locator = page.getByAltText("Poco Electro"); //returns locator so type is locator
    // no await above because not returing a promise, just returning a locator object and not performing any action on it yet.
//    logo.click();
    await expect(logo).toBeVisible(); // now we are performing an action on the locator, so we need to await it.


//  2. page.getByText() to locate by text content. you can match by substring, exact string, regular expression.
// locate by visible text.
// use this locator to find non interactive elements like div, span, p, h1-h6, etc. and
// for interactive elements like button, a, input, etc. use get by role locator.

    await expect(page.getByText("Top Trending Categories")).toBeVisible(); //without creating any variable like in above example. this is case sensitive.
    await expect(page.getByText(/top\s+TRending\s+cateGories/i)).toBeVisible(); //regualar expression- case insensitive.

// 3. page.getByRole() to locate by role. role is an explicit and implicit accessibility  attribute. it is used to identify the purpose of an element on a web page.
// include buttons, checkboxes, links, tables,  headings, span, etc. ARIA role define the role. 
    
    // await page.getByRole("link", {name:"Blog", exact: true}).click();  
    // await expect(page.getByRole("heading", {name: "Latest Articles"})).toBeVisible(); //can also use getByText() 

    await page.getByRole("button", { name: "My account" }).click();
    await page.getByRole("link", { name: "Register" }).click();
    await expect(page).toHaveURL(/.*account\/register/);

    await page.waitForLoadState("domcontentloaded");

    await expect(page.getByRole("heading", { name: "Register Account" })).toBeVisible();

// 4. page.getByLabel() to locate a form control by associated label's text.
// when to use: Ideal for form fields with visible labels. (signup form where the fiels are labels in inspect.)

    await page.getByLabel("First Name").fill("John");
    await page.getByLabel("Last Name").fill("Doe");
    await page.getByLabel("E-Mail").fill("john.doe@example.com");
    await page.getByLabel("Telephone").fill("1234567890");

// 5. page.getByPlaceholder() to locate element with a placeholder text.
// best for input without a label but having a placeholder.
    await page.getByPlaceholder("Password", { exact: true }).fill("Password123"); 
    await page.getByPlaceholder("Password Confirm", { exact: true }).fill("Password123");
// why added exact:true above? because there are two input fields with placeholder text containing "Password" and we want to fill the exact one.

// 6.page.getByTitle() to locate an element by its title attribute.
//    when the element has a meaningful title attribute. Difficult tofind in multipage website.
// example: <a href="https://example.com" title="Example Site">Visit Example</a>
// await page.getByTitle("Example Site").toHaveText("Visit Example"); // locates the link by its title attribute and clicks on it.


// 7. page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
// when to use: when the text or role based locators are unstable or not suitable.
// customizable  attribute form playwright.config.ts file. by changing the testIdAttribute property in the config file, you can use a different attribute for test id selection.

// could also add local html in new file as app.html inside tests folder & with live sever extension, run html file realtime in browser.

})
