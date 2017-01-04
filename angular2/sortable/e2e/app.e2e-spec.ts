import { SortablePage } from './app.po';

describe('sortable App', function() {
  let page: SortablePage;

  beforeEach(() => {
    page = new SortablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
