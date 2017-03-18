import { TabNavigationNg2Page } from './app.po';

describe('tab-navigation-ng2 App', () => {
  let page: TabNavigationNg2Page;

  beforeEach(() => {
    page = new TabNavigationNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
