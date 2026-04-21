const {test,expect}=require('@playwright/test')
test('uploadfile', async ({ page }) => {
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    //await page.waitForSelector("#filesToUpload")
       const filesToUpload=await page.locator("#filesToUpload");
       await filesToUpload.setInputFiles([
        '../uploadfiles/PetStore.postman_test_run.json',
        '../uploadfiles/Routes.properties'
      ]);
  await expect (page.locator("#fileList li:nth-child(1)")).toHaveText('PetStore.postman_test_run.json')
 await expect(page.locator("#fileList li:nth-child(2)")).toHaveText('Routes.properties')
    await page.waitForTimeout(5000);
});