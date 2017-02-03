import { MeSitePage } from './app.po';

describe('me-site App', function() {
  let page: MeSitePage;

  beforeEach(() => {
    page = new MeSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
