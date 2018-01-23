import { AppPage } from './app.po';

describe('ng-fundamentals App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  it('should reset all data for secure tests', () => {
    page.initalDonger();
  });
  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Kings Of Danger');
  });
});
