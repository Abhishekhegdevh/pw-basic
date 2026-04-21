const { test, expect } = require('@playwright/test');

test('addtocart', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
   await page.click('id=login2');
   await page.fill('#loginusername','pavanol');
   await page.fill("//input[@id='loginpassword']", 'test@123');
   await page.click("//button[normalize-space()='Log in']");
   //add
   await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
   page.on('dialog', async dialog => {
    await expect(dialog.message()).toContain('Product added');
    await dialog.accept();
  });
  await page.locator(" //a[normalize-space()='Add to cart']").click()

  let logoutButton=page.locator('//a[normalize-space()="Log out"]');
  await logoutButton.click()
});