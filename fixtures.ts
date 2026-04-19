import { test as base } from '@playwright/test';
import { BasePage } from './steps/BasePage';
import links from './assets/links.json';
import testData from './assets/testData.json';

export const test = base.extend({
  basePage: async ({ page }, use) => {
    await use(new BasePage(page));
  },

  envLinksDataObject: async ({}, use) => {
    await use(links);
  },

  testDataObject: async ({}, use) => {
    await use(testData);
  }
});