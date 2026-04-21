const { test, expect } = require('@playwright/test');

test('Alert with ok', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.mouse.wheel(0, 500);
/*
  //enable dialong window handler
  page.on('dialog', async (dialog) => {
    expect(dialog.type()).toContain('alert');        // check type
// check message
 await expect(dialog.message()).toContain('I am an alert box');
    await dialog.accept();
  })
  await page.locator('//button[normalize-space()="Alert"]')
  await page.waitForTimeout(5000);
  

  page.on('dialog', async (dialog) => {
    await expect(dialog.type()).toContain('confirm');          // it should be confirm
    await expect(dialog.message()).toContain('Press a button'); // check dialog text
  
    // Choose how to close:
    await dialog.accept(); 
  })
  await page.click("//button[@id='confirmBtn']");
  await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!');

  await page.waitForTimeout(5000);
});*/

page.on('dialog', async (dialog) => {
    await expect(dialog.type()).toContain('prompt');          // it should be confirm
    await expect(dialog.message()).toContain('Please enter your name'); // check dialog text
    expect(dialog.defaultValue()).toContain('Harry Potter');

    // Choose how to close:
   await dialog.accept('John');
  })
  await page.click("//button[@id='promptBtn']"); 
  await expect(page.locator("//p[@id='demo']")).toHaveText('Hello John! How are you today?');
  await page.waitForTimeout(5000);
});