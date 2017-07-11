import { Assing2BindingPage } from './app.po';

describe('assing2-binding App', () => {
  let page: Assing2BindingPage;

  beforeEach(() => {
    page = new Assing2BindingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
