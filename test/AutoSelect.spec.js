const {test,expect}=require('@playwright/test')
test('Autodropdown', async ({ page }) => {
await page.goto("https://www.redbus.in/");
await page.locator("#srcinput").fill("Bangalore")
});