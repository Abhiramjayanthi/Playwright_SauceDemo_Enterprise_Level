import { Page, test } from '@playwright/test';
import { LoginPage } from '../PageObjects/LoginPage';

export class LoginSteps {
  private loginPage: LoginPage;

  constructor(private page: Page) {
    this.loginPage = new LoginPage(page);
  }

  async launchURL(env: string, links: any) {
    await test.step('Launch application', async () => {
      await this.page.goto(links[env]);
    });
  }

  async login(testData: any, password: string) {
    await test.step('Enter username', async () => {
      await this.loginPage.enterUsername(testData.validUser.username);
    });
    await test.step('Enter password', async () => {
      await this.loginPage.enterPassword(password);
    });
    await test.step('Click login', async () => {
      await this.loginPage.clickLogin();
    });
  }
  async getCurrentURL(){
    return await this.loginPage.getCurrentURL();
  }
}