const {test,expect}=require('@playwright/test')
test('dropdown', async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");
await page.mouse.wheel(0, 500);

//await page.selectOption('#colors',['Blue','Red'])
//  const option=page.locator('#colors option')
//  await expect(option).toHaveCount(7);
const content = await page.locator('#colors').textContent();
expect(content).toContain('Blue');
expect(content).not.toContain('Black');
await page.waitForTimeout(5000);

});