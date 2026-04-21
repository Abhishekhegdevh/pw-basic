const { test, chromium, expect } = require('@playwright/test');
 /*
test('test1', async ({ page }) => {
    console.log('this is my test one');
  });
  
  test.skip('test2', async ({ page }) => {
    console.log('this is my test two');
  });

  test('test3', async ({ page,browserName }) => {
    console.log('this is my test three')
    if(browserName=='chromium')
    {
        test.skip()
    }
  });
  
  test('test4', async ({ page }) => {
 test.fixme()
    console.log('this is my test four');
  });

  test.fail('test5', async ({ page }) => {
    test.fail()
    console.log('this is my test five');
    expect(1).toBe(3)
  });

test('test7', async ({ page }) => {

    test.setTimeout(5000)
   await page.goto("https://www.demoblaze.com/index.html")
    console.log('this is my test 7');
  });
  */

  //describe + beforeEach
  test.describe('Demoblaze Tests', () => {

    // runs before each test
    test.beforeEach(async ({ page }) => {
      await page.goto('https://www.demoblaze.com/index.html');
    });
  
    test('home page title', async ({ page }) => {
      await expect(page).toHaveTitle(/STORE/);
    });
  
    test('click login button', async ({ page }) => {
      await page.click('#login2');
      await expect(page.locator('#logInModal')).toBeVisible();
    });
  
  });