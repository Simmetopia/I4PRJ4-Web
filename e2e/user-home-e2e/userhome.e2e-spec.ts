import { browser, element, by, ElementArrayFinder } from 'protractor';
import { UserHomeEndTest } from './userhome.po';

describe('User Home Tests', () => {
  let page: UserHomeEndTest;
  beforeEach(() => {
    browser.waitForAngularEnabled(true);
    page = new UserHomeEndTest();
  });
  it('Should login and show correct name', () => {
    page.login();
    expect(element(by.tagName('h1')).getText()).toContain('Peter');
  });
  it('Itemlist should contain 1 Bloodrinker', () => {
    page.login();
    expect(
      page
        .FindAllItemElements()
        .get(0)
        .getText()
    ).toContain('Cloth armor');
  });
  it('user should contain 3 saves', () => {
    page.login();
    expect(page.FindAllAppSmallSaveGameViewTags().count()).toBe(2);
  });
  it('Second save should contain Rapture Song Mail armor', () => {
    page.login();
    page.FindAllAppSmallSaveGameViewTags().then(data => {
      expect(data[1].getText()).toContain('Armor of Hugeormus Dongers');
    });
  });
  it('Sell item, item gets put on auction', () => {
    page.login();
    page
      .FindAllItemElements()
      .count()
      .then(data => {
        page
          .FindAllItemElements()
          .get(0)
          .element(by.tagName('input'))
          .sendKeys(200);
        page
          .FindAllItemElements()
          .get(0)
          .element(by.tagName('button'))
          .click();
        expect(page.FindAllItemElements().count()).toBe(data - 1);
      });
  });
});
