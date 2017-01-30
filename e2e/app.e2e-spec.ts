import { TrihackPage } from './app.po';

describe('trihack App', function() {
  let page: TrihackPage;

  beforeEach(() => {
    page = new TrihackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
