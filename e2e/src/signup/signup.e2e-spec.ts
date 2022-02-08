import { browser, logging } from 'protractor';
import { HomePage } from '../home/home.po';
import { SignInPage } from '../signin/signin.po';

import { SignUpPage } from './signup.po';

describe('Signup Page', () => {

  let signUpPage: SignUpPage = null;
  let signInPage: SignInPage = null;
  let homePage: HomePage = null;

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);

    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE
    } as logging.Entry));
  });

  beforeEach(async () => {
    signUpPage = new SignUpPage();
    signInPage = new SignInPage();
    homePage = new HomePage();

    await signUpPage.getNavigateTo();
  });

  it('Should be on Signup page', async () => {
    let title = await signUpPage.getTitle();
    expect(title).toEqual(SignUpPage.PAGE_TITLE);
  });

  it('Should register a user', async () => {
    const randomSufix = Math.round(Math.random() * 100000);
    await signUpPage.fillField('email', `email${randomSufix}@email.com`);
    await signUpPage.fillField('fullName', `some name ${randomSufix}`);
    const useName = `user${randomSufix}`;
    await signUpPage.fillField('userName', useName);
    const password = '12345678';
    await signUpPage.fillField('password', password);
    await signUpPage.register();
    let title = await signInPage.getTitle();
    expect(title).toEqual(SignInPage.PAGE_TITLE);
    await signInPage.fillUserNameField(useName);
    await signInPage.fillPasswordField(password);
    await signInPage.login();
    title = await homePage.getTitle();
    expect(title).toEqual(HomePage.PAGE_TITLE);
  });

});