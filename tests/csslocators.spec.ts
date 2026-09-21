/*
tag with id             : tag#id     or #id
tag with class          : tag.class  or .class
tag with any attribute  : tag[attribute=value]     or [attribute=value]
tag with class and attribute : tag.class[attribute=value]    or .class[attribute=value]
- Also tag is optional, so you can use #id, .class, [attribute=value], .class[attribute=value]
*/

import { test, expect, Locator } from '@playwright/test';

test('css locators', async ({ page }) => {

    await page.goto('https://demowebshop.tricentis.com/');
// 1. tag with id
    // const searchBox: Locator = page.locator('input#small-searchterms');
    // await searchBox.fill('laptop');
    await expect(page.locator('input#small-searchterms')).toBeVisible();
    await page.locator('#small-searchterms').fill('laptop');

// 2. tag with class
    await expect(page.locator('input.search-box-text')).toBeVisible(); //whenever space check full name if error then avoid second part of class name
    await page.locator('.search-box-text').fill('laptop');

// 3. tag with any attribute
    await expect(page.locator('input[value="Search store"]')).toBeVisible();
    await page.locator('[value="Search store"]').fill('laptop');

// 4. tag with class and attribute
    await expect(page.locator("input.search-box-text[autocomplete='off']")).toBeVisible();
    await page.locator(".search-box-text[autocomplete='off']").fill('laptop');

/* Relative path
    class^='ma' repres start with, class$='n' represent end with and class*=ai represent substring
    p[id='para1']+* gives all the siblings of other p
    p[id='para1']+p gives a next sibling only
    parent chid also exits. 


    In absolute --> not recommended to use
    html>head>body>div   -----> should use '>'
*/
})