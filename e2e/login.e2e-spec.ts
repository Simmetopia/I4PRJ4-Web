import { LoginPage } from './login.po';
import {
  browser,
  element,
  by,
  Key,
  ElementFinder,
  protractor
} from 'protractor';
import { resolve } from 'path';
import fs = require('fs');

describe('login form logs a user in', () => {
  let page: LoginPage;
  beforeEach(() => {
    page = new LoginPage();
    browser.waitForAngularEnabled(true);
  });
  it('should allow user to input name', () => {
    page.navigateTo();
    page.GetUsernameInputField().sendKeys('simon');
    expect(page.GetUsernameInputField().getAttribute('value')).toBe('simon');
  });
  it('should allow user to input password', () => {
    page.navigateTo();
    page.GetPasswordInputField().sendKeys('simon');
    expect(page.GetPasswordInputField().getAttribute('value')).toBe('simon');
  });
  it('Given Correct password and Username, navigate to home and view correct data', () => {
    page.navigateTo();
    page.GetUsernameInputField().sendKeys('simon');
    page.GetPasswordInputField().sendKeys('simon');
    page.GetLoginButton().click();
    browser.waitForAngular();
    expect(element(by.css('h1')).getText()).toContain('Peter');
  });
  it('Given wrong password and Username, show error', () => {
    page.navigateTo();
    page.GetUsernameInputField().sendKeys('WrongUserName');
    page.GetPasswordInputField().sendKeys('WrongPassWord');
    page.GetLoginButton().click();

    browser.wait(protractor.ExpectedConditions.alertIsPresent(), 1000);
    const alertDialog = browser.switchTo().alert();

    expect(alertDialog.getText()).toContain('incorrect');
    alertDialog.accept();
  });
});
