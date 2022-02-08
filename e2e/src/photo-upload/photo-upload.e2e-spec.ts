import { browser, logging } from 'protractor';
import { HomePage } from '../home/home.po';

import { PhotoUploadPage } from './photo-upload.po';

describe('Photo upload page', () => {

  let homePage: HomePage = null;
  let photoUploadPage: PhotoUploadPage = null;

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE
    } as logging.Entry));
  });

  beforeEach(async () => {
    homePage = new HomePage();
    photoUploadPage = new PhotoUploadPage();

    await photoUploadPage.getNavigateTo();
  });

  it('Should navigate to photo upload page', async () => {
    const title = await photoUploadPage.getTitle();
    expect(title).toEqual(PhotoUploadPage.PAGE_TITLE);
  });

  it('Should upload photo with comment', async () => {
    await photoUploadPage.fillDescription('Some description');
    await photoUploadPage.selectImage();
    await photoUploadPage.upload();
    const title = await homePage.getTitle();
    expect(title).toEqual(HomePage.PAGE_TITLE);
  });
  
});