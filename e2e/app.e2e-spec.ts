import { SellbritePage } from './app.po';

describe('sellbrite App', () => {
  let page: SellbritePage;

  beforeEach(() => {
    page = new SellbritePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
