const {test,expect}=require('@playwright/test')
test('doubleclick', async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");
await page.mouse.wheel(0, 1300);
await page.locator("//button[normalize-space()='Copy Text']").dblclick()
const copytext= await page.locator(" //input[@id='field2']");
await expect(copytext).toHaveValue("Hello World!");
await page.waitForTimeout(1000);
});  