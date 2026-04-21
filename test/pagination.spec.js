const { test, expect } = require('@playwright/test');

test('handle web table and pagination', async ({ page }) => {
  // 1. Open the page
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.mouse.wheel(0, 2800);
 const table= await page.locator('#productTable')

 //count colums and rows
  const columns=await table.locator('thead tr th')
  console.log('columns',await columns.count())
  expect(await columns.count()).toBe(4)
//rows
const rows=await table.locator('tbody tr')
console.log('rows',await rows.count())
expect(await rows.count()).toBe(5)
/*
// Selecting checkbox for one specific product (Product 4)
 await selectProduct(rows, page, 'Smartphone');
await selectProduct(rows, page, 'Tablet');
await selectProduct(rows, page, 'Smartwatch');

await page.waitForTimeout(5000);
});

//print all product details  in single page
//Think of the rows in the table as drawers in the cabinet.
// "Start at the very top drawer (drawer 0). Count how many drawers there //are, and open them one by one until you reach the bottom
for (let i = 0; i < await rows.count(); i++) {
  //2nd 
  const row=rows.nth(i)
  //1st 
  const tds=row.locator('td')

  //Inside each drawer, there are a bunch of separate folders lined up side-by-side. In HTML code, these folders are called td.
  for (let j = 0; j < await tds.count()-1; j++) {

    //Finally, when the helper pulls out a folder, they read the word written inside it out loud
     console.log(await tds.nth(j).textContent())
}
}
*/
//print all product details  in single page
  const pages=await page.locator('.pagination li a')
console.log('Pages','await  page count()')
for(let p=0;p<await pages.count();p++)
{
 if(p>0)
 {
  await pages.nth(p).click()
 }
 for (let i = 0; i < await rows.count(); i++) {
  //2nd 
  const row=rows.nth(i)
  //1st 
  const tds=row.locator('td')

  //Inside each drawer, there are a bunch of separate folders lined up side-by-side. In HTML code, these folders are called td.
  for (let j = 0; j < await tds.count()-1; j++) {

    //Finally, when the helper pulls out a folder, they read the word written inside it out loud
     console.log(await tds.nth(j).textContent())
}
}
await page.waitForTimeout(3000);
}
 async function selectProduct(rows,page,name)
 {
 const matchrow=rows.filter({
  has:page.locator('td'),
  hasText:name
});
await matchrow.locator("input").check();
 }
 await page.waitForTimeout(5000);
});