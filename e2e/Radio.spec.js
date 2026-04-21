const {test,expect}=require('@playwright/test')
test('inputbox test', async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");
await page.check("//input[@id='male']");
await expect(page.locator("//input[@id='male']")).toBeChecked();
await expect(page.locator("//input[@id='female']")).not.toBeChecked();
await page.waitForTimeout(5000);
});