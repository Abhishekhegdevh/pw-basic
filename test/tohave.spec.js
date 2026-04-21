const { test, expect } = require('@playwright/test');

test('tohave', async ({ page }) => {
// await page.goto('https://www.html-code-generator.com/javascript/drop-down/year-month-day');

// const day=page.locator("//select[@id='php-day']/option")
// await page.locator('#php-day').scrollIntoViewIfNeeded();
// await expect(day).toHaveCount(32)

await page.goto('https://demo.nopcommerce.com/register');
const newsletterCheckbox = page.locator('#Newsletter');
await page.mouse.wheel(0, 500);
await expect(newsletterCheckbox).toBeChecked();
await page.waitForTimeout(5000);
});