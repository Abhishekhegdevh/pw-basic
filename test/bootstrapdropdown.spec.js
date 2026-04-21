const {test,expect}=require('@playwright/test')
test('bootstrapdropdown', async ({ page }) => {
    await page.goto('https://preview.colorlib.com/theme/bootstrap/multiselect-01/?_gl=1*1dbs9mf*_ga*MTIyNjU2OTgyMS4xNzc2MzIxNTQ5*_ga_SEKJ4E9T4H*czE3NzYzMjE1NDkkbzEkZzEkdDE3NzYzMjE2NzAkajQ2JGwwJGgwJGQzdjlEXzVVOXo1R2NCalVaYzJ6LTZKanFXa3R1QWxsOVlR');
   await page.locator('.multiselect-selected-text').click();
//     const dropdownButton = page.locator('ul>li');
//    await expect(dropdownButton).toHaveCount(7);
//     await page.waitForTimeout(5000);
// const text= await page.locator('ul>li').allTextContents();
// console.log(text);
// await page.selectOption('.multiselect-selected-text',[' JavaScript','SQL'])
// await page.waitForTimeout(5000);
/*
const targetValues = ['Java', 'JavaScript'];
const options = await page.$$('ul li label');
for (const option of options) {
    const text = (await option.textContent()).trim();

    if (targetValues.includes(text)) {
        await option.click();
    }
}*/

const targetValues = ['Java', 'JavaScript'];

const options = page.locator('ul li label');

const count = await options.count();

for (let i = 0; i < count; i++) {

    const option = options.nth(i);
    const text = (await option.textContent()).trim();

    if (targetValues.includes(text)) {
        await option.click();
    }
}
await page.waitForTimeout(5000);
});