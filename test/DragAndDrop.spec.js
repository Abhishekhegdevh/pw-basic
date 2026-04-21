const {test,expect}=require('@playwright/test')
test('draganddrop', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.mouse.wheel(0, 1300);
    const dragme=await page.locator("//p[normalize-space()='Drag me to my target']")
    const dropme=await page.locator("//div[@id='droppable']")
    await dragme.dragTo(dropme);
    await page.waitForTimeout(5000);
});  