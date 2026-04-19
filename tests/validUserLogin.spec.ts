import { test } from '../fixtures';
import {test,expect } from '@playwright/test';

test('Valid User Login', async ({ basePage, envLinksDataObject, testDataObject }) => {
  const env = 'qa';
  await basePage.loginSteps.launchURL(env, envLinksDataObject);
  await basePage.loginSteps.login(testDataObject, process.env.VALID_PASSWORD);
  const currentURL=await basePage.loginSteps.getCurrentURL();
  expect(currentURL).toContain('inventory');
});