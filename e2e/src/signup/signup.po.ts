import { browser, by, element } from 'protractor';

export class SignUpPage {
  static PAGE_TITLE = 'Sign up';

  getNavigateTo(){
    return browser.get(`${browser.baseUrl}#/home/signup`);
  }

  getTitle() {
    return browser.getTitle();
  }

  fillField(control: string, text: string) {
    return element(by.formControlName(control)).sendKeys(text);
  }

  // fillEmailField(text: string) {
  //   return element(by.css('input[formcontrolname=email]')).sendKeys(text);
  // }

  // fillFullNameField(text: string) {
  //   return element(by.css('input[formcontrolname=fullName]')).sendKeys(text);
  // }

  // fillUserNameField(text: string) {
  //   return element(by.css('input[formcontrolname=userName]')).sendKeys(text);
  // }

  // fillPasswordField(text: string) {
  //   return element(by.css('input[formcontrolname=password]')).sendKeys(text);
  // }

  register() {
    return element.all(by.css('button[type=submit')).click();
  }
}