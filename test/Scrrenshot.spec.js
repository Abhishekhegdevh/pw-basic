const { test, expect } = require('@playwright/test');

test('Login', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await page.screenshot({path:'../screenshot/'+Date.now()+'homepage.png', fullPage: true });
});