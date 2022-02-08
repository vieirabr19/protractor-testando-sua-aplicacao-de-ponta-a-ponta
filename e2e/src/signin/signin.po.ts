import { browser, by, element } from 'protractor';

export class SignInPage {
  static PAGE_TITLE = 'Sign in';

  getTitle() {
    return browser.getTitle();
  }

  fillUserNameField(text: string) {
    return element(by.css('input[formcontrolname=userName]')).sendKeys(text);
  }

  fillPasswordField(text: string) {
    return element(by.css('input[formcontrolname=password]')).sendKeys(text);
  }

  login() {
    return element.all(by.css('button[type=submit')).click();
  }
}