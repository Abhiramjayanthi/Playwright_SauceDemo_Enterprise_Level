import { Page } from '@playwright/test';
import { homepageLocators } from '../pageLocators/homepageLocators';

export class HomePage {
    constructor(private page: Page) {}
    
    async addProductsToCart(Products :string[]){
        const items = await this.page.locator(homepageLocators.inventoryItems);
        const count = await items.count();
        for(let i=0;i<count;i++){
            const item = items.nth(i);
            const name =await item.locator(homepageLocators.ProductsInHomepage).textContent();
            if(name && Products.includes(name.trim())){
                await item.locator(homepageLocators.addToCartButton).click();
            }
        }
    }
}