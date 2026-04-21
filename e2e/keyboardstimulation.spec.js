const {test,expect}=require('@playwright/test')
test('keyboard', async ({ page }) => {
    await page.goto("https://gotranscript.com/text-compare")
    await page.locator("[name='text1']").fill("hello world i am back")
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C');
    await page.keyboard.down('Tab');
await page.keyboard.up('Tab');
await page.keyboard.press('Control+V');
await page.waitForTimeout(5000);
}); 