const {test,expect}=require('@playwright/test')
test('dropdown', async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");
await page.mouse.wheel(0, 500);
//await page.locator('#country').selectOption('India');
//await page.locator('#country').selectOption({value:'uk'})
//    const option=page.locator('#country option')
//    await expect(option).toHaveCount(10);

    //    const option= await page.$$('#country option')
    //    await expect(option.length).toBe(10);
    //single line
  //await expect(page.locator('#country')).toContainText('Ind');
 //looping  
const options = await page.locator('#country option').allTextContents();

const cleanOptions = options.map(text => text.trim());

console.log(cleanOptions);
await page.waitForTimeout(5000);
});