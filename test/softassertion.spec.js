const {test,expect}=require('@playwright/test')
test('soft assertion test', async ({ page }) => {
await page.goto("https://www.demoblaze.com/");
await expect.soft(page).toHaveTitle('STORE1');
await expect.soft(page).toHaveURL("https://www.demoblaze.com/")
await expect.soft(page.locator("//a[@id='nava']")).toBeVisible();
});
