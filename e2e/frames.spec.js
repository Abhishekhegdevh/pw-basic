const { test, expect } = require('@playwright/test');

test('frames', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');
//   const allframes = page.frames();

//     // Print the total count to the console
//     console.log("Number of frames:", allframes.length);

// const frame1 = await page.frame({
//     url: 'https://ui.vision/demo/webtest/frames/frame_1.html'});
//   await frame1.fill("input[name='mytext1']", 'Hello');

const inputBox = page
    .frameLocator('frame[src="frame_1.html"]')
    .locator('input[name="mytext1"]');

  await inputBox.fill('Hello from frameLocator()');
  await page.waitForTimeout(5000);
});