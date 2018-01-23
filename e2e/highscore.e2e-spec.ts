import { browser } from 'protractor';

import { HighscorePage } from './highscore.po';

describe('highscore view', () => {
  let page: HighscorePage;
  beforeEach(() => {
    page = new HighscorePage();
  });
  it('should find the headers', () => {
    page.navigateTo();
    expect(page.GetTableRowHead()).toContain('Username');
  });
});
