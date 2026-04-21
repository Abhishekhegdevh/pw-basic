import {test,expect}from '@playwright/test'
import { LoginPage } from '../demoblazePages/LoginPage'
import { Homepage } from '../demoblazePages/HomePage.spec';
import { CartPage } from '../demoblazePages/CartPage.spec';
test('fleky',async({page})=>
{
const login=new LoginPage(page)
await login.gotoLoginPage()
await login.LoginPage('pavanol','test@123')
await page.waitForTimeout(3000)
//home 
const home=new Homepage(page)
await page.mouse.wheel(0, 1500);
await home.addProductTocart("Sony vaio i7")
await page.waitForTimeout(5000)
await home.goTocart()

//cart
const cart=new CartPage(page)
await page.waitForTimeout(4000)
const status=await cart.ProductinCart("Sony vaio i7")
await expect(status).toBe(true)
});