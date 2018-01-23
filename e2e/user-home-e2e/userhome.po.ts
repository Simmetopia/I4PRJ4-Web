import {
  browser,
  by,
  element,
  ElementArrayFinder,
  ElementFinder
} from 'protractor';
import { LoginPage } from '../login.po';

export class UserHomeEndTest {
  navigateTo() {
    return browser.get('/');
  }

  login() {
    const loginPage = new LoginPage();
    loginPage.navigateTo();
    loginPage.GetUsernameInputField().sendKeys('simon');
    loginPage.GetPasswordInputField().sendKeys('simon');
    loginPage.GetLoginButton().click();
    browser.waitForAngular();
  }
  FindAllAppSmallSaveGameViewTags(): ElementArrayFinder {
    return element.all(by.tagName('app-small-savegame-view'));
  }
  FindAllItemElements(): ElementArrayFinder {
    return element.all(by.tagName('app-item-view'));
  }
}
