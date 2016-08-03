import { NgTattooWithFormsPage } from './app.po';

describe('ng-tattoo-with-forms App', function() {
  let page: NgTattooWithFormsPage;

  beforeEach(() => {
    page = new NgTattooWithFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
