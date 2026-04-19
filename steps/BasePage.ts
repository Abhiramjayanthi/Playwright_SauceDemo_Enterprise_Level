import { Page } from '@playwright/test';
import { LoginSteps } from './LoginSteps';
import { HomePageSteps } from './HomepageSteps';

export class BasePage {
  loginSteps: LoginSteps;
  homeSteps : HomePageSteps;

  constructor(private page: Page) {
    this.loginSteps = new LoginSteps(page);
    this.homeSteps=new HomePageSteps(page);
  }
}