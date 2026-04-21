const { test, expect } = require('@playwright/test');

test('Assertion', async ({ page }) => {
   await page.goto('https://demo.nopcommerce.com/register');
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
    /*
    await expect(page).toHaveTitle('nopCommerce demo store. Register');
  let welcomeText= await page.locator('.header-logo')
  await expect(welcomeText).toBeVisible();
 let searchText= await page.locator("//input[@id='small-searchterms']")
 await expect(searchText).toBeEnabled();
 */
//  const genderMale =  page.locator('#gender-male');  // Step 1: define
// await expect(genderMale).toBeVisible();           // Step 2: assert visible
// await genderMale.click();      
// await expect(genderMale).toBeChecked();
// // const newsletter =  page.locator('#Newsletter');
// // await newsletter.check(); 
// // await expect(newsletter).toBeChecked();
//   let registerButton= await page.locator('#register-button')
//   await expect(registerButton).toHaveAttribute('type','submit');

  await expect(page.locator("//h1[normalize-space()='Register']")).toHaveText('Register');
  await expect(page.locator("//h1[normalize-space()='Register']")).toContainText('Reg');
  //#Email
   const emailtext= page .locator('#Email')
   await emailtext.fill('a@x.com')
   await expect(emailtext).toHaveValue('a@x.com')
});