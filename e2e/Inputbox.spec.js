const {test,expect}=require('@playwright/test')
test('inputbox test', async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");
await expect(page.locator("#name")).toBeVisible();

page.locator("#name").fill("john")
await page.waitForTimeout(5000);
});