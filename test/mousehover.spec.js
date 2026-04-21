const {test,expect}=require('@playwright/test')
test('dropdown', async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/") 
  const com=  await page.locator("//a[normalize-space()='Computers']")
  const des=await page.locator("//a[normalize-space()='Desktops']")
  await com.hover()
  await des.hover()
  await page.waitForTimeout(5000);
});  