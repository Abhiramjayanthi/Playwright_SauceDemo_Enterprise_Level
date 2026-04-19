import { HomePage } from "../PageObjects/HomePage";
import { Page, test } from '@playwright/test';

export class HomePageSteps{
    private homepage: HomePage;
    constructor(private page:Page) {
        this.homepage = new HomePage(page);
    }
    async addProductsToCart(Products : string[]){
        await test.step('Adding Products based on the test data',async()=>{
            await this.homepage.addProductsToCart(Products);
        })
    }
}