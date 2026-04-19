import { Page } from '@playwright/test';
import { LoginSteps } from './LoginSteps';

export class BasePage {
  loginSteps: LoginSteps;

  constructor(private page: Page) {
    this.loginSteps = new LoginSteps(page);
  }
}