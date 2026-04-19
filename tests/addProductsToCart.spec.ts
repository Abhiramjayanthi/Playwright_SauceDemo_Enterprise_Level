import { test } from '../fixtures';
import {expect } from '@playwright/test';
test.only('User adds multiple or Single product to cart',async({page, basePage, envLinksDataObject, testDataObject})=>{
  const env = 'qa';
  await basePage.loginSteps.launchURL(env, envLinksDataObject);
  await basePage.loginSteps.login(testDataObject, process.env.VALID_PASSWORD);
  await basePage.homeSteps.addProductsToCart(testDataObject.Products);
  await expect(page.locator('.shopping_cart_link')).toHaveText(testDataObject.Products.length.toString());
})