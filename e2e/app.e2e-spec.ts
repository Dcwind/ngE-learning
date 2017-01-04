import { NgELearningPage } from './app.po';

describe('ng-e-learning App', function() {
  let page: NgELearningPage;

  beforeEach(() => {
    page = new NgELearningPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
