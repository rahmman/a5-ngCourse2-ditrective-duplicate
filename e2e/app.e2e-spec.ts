import { A5DitrectiveDuplicatePage } from './app.po';

describe('a5-ditrective-duplicate App', function() {
  let page: A5DitrectiveDuplicatePage;

  beforeEach(() => {
    page = new A5DitrectiveDuplicatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
