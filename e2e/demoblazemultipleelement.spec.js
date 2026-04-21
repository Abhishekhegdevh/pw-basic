const { test, expect } = require('@playwright/test');

test('Multiple Elements', async ({ page }) => {
   await page.goto('https://www.demoblaze.com/index.html');
  const products= await page.$$("//div[@id='tbodyid']//h4");
  for(let product of products){
    let productName=await product.textContent();
    console.log(productName);
  }
});