const { test, expect } = require('@playwright/test');

test('All checkbox test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const checkboxLocator = page.locator(".form-check-inline input[type='checkbox']");
  const allCheckboxes = await checkboxLocator.all();
  for (const checkbox of allCheckboxes) { 
    await checkbox.check();
    await expect(checkbox).toBeChecked();
  }
  for (const checkbox of allCheckboxes) { 
    await checkbox.uncheck();
    // Optional post-condition to ensure it was unchecked
    await expect(checkbox).not.toBeChecked(); 
  }
  await page.waitForTimeout(5000);
});