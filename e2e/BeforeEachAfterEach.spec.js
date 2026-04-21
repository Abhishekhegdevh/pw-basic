import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('https://www.demoblaze.com/index.html');
  // Login
  await page.locator('#login2').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.locator("//button[normalize-space()='Log in']").click();
  await expect(page.locator("//a[@id='logout2']")).toBeVisible();
});


//  Test 1: Home Page Validation
test('Home Page Test page', async ({page}) => {

  const products = page.locator("#tbodyid h4 a");

  await expect(products).toHaveCount(9);

});

test('Add Product to Cart Test', async ({page}) => {

  // Click product
  await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();

  // Handle dialog BEFORE clicking (best practice)
  page.once('dialog', async dialog => {
    await expect(dialog.message()).toContain('Product added');
    await dialog.accept();
  });

  // Click add to cart
  await page.locator("//a[normalize-space()='Add to cart']").click();

});

test.afterEach(async ({page}) => {
  await page.locator("//a[@id='logout2']").click();
});