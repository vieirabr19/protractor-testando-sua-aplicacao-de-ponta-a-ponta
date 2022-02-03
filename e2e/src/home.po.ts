import { browser, by, element, protractor } from 'protractor';

export class HomePage {

  static PAGE_TITLE = 'Timeline';

  getNavigationTo() {
    return browser.get(`${browser.baseUrl}/#/user/flavio`);
  }

  getWindowTitle() {
    return browser.getTitle();
  }

  photoListSize(){
    return element
      .all(by.css('.photo'))
      .count();
  }

  clickOnFirstItemFromPhotoList(){
    return element
      .all(by.css('.photo'))
      .first()
      .sendKeys(protractor.Key.ENTER);
  }

  fillSearchInputWith(text: string) {
    return element
      .all(by.css('ap-search input[type=search]'))
      .sendKeys(text);
  }

}
