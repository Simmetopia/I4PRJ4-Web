import { browser, element, by, Key, ElementFinder } from 'protractor';
export class LoginPage {
  navigateTo() {
    return browser.get('/login');
  }
  GetUsernameInputField(): ElementFinder {
    return element(by.css('#username'));
  }
  GetPasswordInputField(): ElementFinder {
    return element(by.id('exampleInputPassword1'));
  }
  GetLoginButton(): ElementFinder {
    return element(by.id('loginbutton'));
  }
}
