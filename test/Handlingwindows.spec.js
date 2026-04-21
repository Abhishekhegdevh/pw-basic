const{test,expect,chromium}=require ('@playwright/test');
test('handlingwindows', async () => {
  const browser= await chromium.launch()
const context=  await browser.newContext()
const page1=await context.newPage()
const page2=await context.newPage()

 const allpages=context.pages()
console.log("pages",allpages.length)
  await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

  const [newPage] = await Promise.all([
    context.waitForEvent('page'), // wait
page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click()
  ])
  await expect(newPage).toHaveTitle("OrangeHRM: All in One HR Software for Businesses")

  await newPage.waitForTimeout(3000)
});