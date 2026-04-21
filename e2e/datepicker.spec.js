const { test, expect } = require('@playwright/test');
test('handle date picker via typing and calendar navigation', async ({ page }) => {
    // 1. Open the test site that contains the date picker
    await page.goto('https://testautomationpractice.blogspot.com/');

    //`//a[@class='ui-state-default'][text()='${date}'`]

    await page.locator('#datepicker').click()
    const year="2020"
    const month="August"
    const date=7
    while(true)
    {
 const currentmonth=await page.locator('.ui-datepicker-month').textContent()
  const currentyear=await page.locator('.ui-datepicker-year').textContent()
    if(currentyear==year && currentmonth==month)
    {
       break;
    }
    if (Number(currentyear) < Number(year)) {
        await page.locator('[title="Next"]').click();
      } else {
        await page.locator('[title="Prev"]').click();
      }
    }
    await page.locator(`//a[@class='ui-state-default'][text()='${date}']`).click()
    await page.waitForTimeout(5000);
});