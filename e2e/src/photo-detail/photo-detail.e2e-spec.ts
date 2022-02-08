import { browser, logging } from 'protractor';
import { PhotoDetailPage } from './photo-detail.po';

describe('Photo detail page', () => {

  let photoDetailPage: PhotoDetailPage = null;

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE
    } as logging.Entry));
  });

  beforeEach(async () => {
    photoDetailPage = new PhotoDetailPage();
    await photoDetailPage.getNavigateTo(14);
  });

  it('Should be on Photo detail page', async () => {
    const title = await photoDetailPage.getTitle();
    expect(title).toEqual(PhotoDetailPage.PAGE_TITLE);
  });

  it('Should publish a comment', async () => {
    const initialCommentListSize = await photoDetailPage.getCommentListSize();
    await photoDetailPage.fillComment('Some coment');
    await photoDetailPage.publishComment();
    const currentCommentSize = await photoDetailPage.getCommentListSize();
    expect(currentCommentSize).toBeGreaterThan(initialCommentListSize);
  });
  
});