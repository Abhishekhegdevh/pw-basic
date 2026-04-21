exports.LoginPage=class LoginPage
{
    constructor(page)
    {
        this.page=page;
        this.loginlink=' #login2';
        this.username="//input[@id='loginusername']";
        this.password="//input[@id='loginpassword']";
        this.loginbutton="//button[normalize-space()='Log in']"
    }
    async gotoLoginPage()
    {
        await this.page.goto("https://www.demoblaze.com/index.html")
    }

    async LoginPage(username,password)
    {
        await this.page.locator(this.loginlink).click()
        await this.page.locator(this.username).fill(username)
        await this.page.locator(this.password).fill(password)
        await this.page.locator(this.loginbutton).click()

    }
}