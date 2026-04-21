exports.CartPage=class CartPage
{
    constructor(page)
    {
        this.page=page;
        this.numofproducts='//tbody[@id="tbodyid"]//td[2]';
        this.deleteBtn='//a[text()="Delete"]';
    }

    async ProductinCart(productName) {
        const products = await this.page.$$(this.numofproducts);
        for (let product of products) {
          const text = await product.textContent();
          if (productName == text.trim()) { 
            return true;
          }
        }
        return false;
      }
    }