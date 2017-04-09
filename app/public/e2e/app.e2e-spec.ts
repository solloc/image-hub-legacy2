import { ImageHubClientPage } from './app.po';

describe('image-hub-client App', () => {
  let page: ImageHubClientPage;

  beforeEach(() => {
    page = new ImageHubClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
