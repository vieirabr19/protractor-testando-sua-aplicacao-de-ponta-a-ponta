import { browser, by, element, protractor } from 'protractor';

export class HomePage {

  static PAGE_TITLE = 'Timeline';

  getNavigationTo() {
    return browser.get(`${browser.baseUrl}/#/user/flavio`);
  }

  getWindowTitle() {
    return browser.getTitle();
  }

  getPhotoListSize(){
    return element
      .all(by.css('.photo'))
      .count();
  }

  getClickOnFirstItemFromPhotoList(){
    return element
      .all(by.css('.photo'))
      .first()
      .sendKeys(protractor.Key.ENTER);
  }

  getFillSearchInputWith(text: string) {
    return element
      .all(by.css('ap-search input[type=search]'))
      .sendKeys(text);
  }

}
