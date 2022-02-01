import { browser } from 'protractor';

describe('Home page', () => {

  it('Should navigate to user profile', async () => {
    await browser.get(`${browser.baseUrl}/#/user/flavio`);
    const title = await browser.getTitle();
    expect(title).toEqual('Timeline');
  });

});