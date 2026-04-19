import { Page } from '@playwright/test';
import { loginLocators } from '../pageLocators/loginLocators';

export class LoginPage {
  constructor(private page: Page) {}

  async enterUsername(username: string) {
    await this.page.fill(loginLocators.username, username);
  }

  async enterPassword(password: string) {
    await this.page.fill(loginLocators.password, password);
  }

  async clickLogin() {
    await this.page.click(loginLocators.loginBtn);
  }
  async getCurrentURL(){
    return this.page.url(); //,url is built-in Playwright method gives current url of the page
  }
}