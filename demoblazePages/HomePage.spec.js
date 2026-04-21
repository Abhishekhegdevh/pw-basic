exports.Homepage =
class Homepage {
  constructor(page) {
    this.page = page;
    this.productList = '//*[@id="tbodyid"]/div/div/div/h4/a';
    this.addtocart   = '.btn.btn-success.btn-lg';
    this.cart        = '#cartur';
  }

  async addProductTocart(productName) {
    // Step 1 — find product and click
    const productList = await this.page.$$(this.productList);
    for (const product of productList) {
      const text = await product.textContent();
      if (productName == text.trim()) {
        await product.click();
        break;
      }
    }

    // Step 2 — register dialog BEFORE addtocart click
    this.page.once('dialog', async dialog => {
      await dialog.accept();
    });

    // Step 3 — click Add to cart
    await this.page.locator(this.addtocart).click();
  }

  async goTocart() {
    await this.page.locator(this.cart).click();
  }
}