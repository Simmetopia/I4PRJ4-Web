import { browser, element, by, Key, ElementFinder } from 'protractor';
export class HighscorePage {
  navigateTo() {
    return browser.get('/highscore');
  }
  GetTableRowHead() {
    return element(by.tagName('mat-header-row')).getText();
  }
  GetAllRows() {
    return element.all(by.tagName('mat-row'));
  }
}
