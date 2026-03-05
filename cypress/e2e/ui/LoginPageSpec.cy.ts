/// <reference types="cypress" />

import LoginPage from "../../support/pages/LoginPage";
import HomePage from "../../support/pages/HomePage";
import Navbar from "../../support/components/Navbar";

// Initialization
let loginPage: LoginPage
let homePage: HomePage
let navbar: Navbar

describe('User Authentication', () => {

  beforeEach(() => {
    cy.fixture('users').as('userData')
    cy.fixture('loginPageData').as('loginData')
    
    loginPage = new LoginPage()
    homePage = new HomePage()
    navbar = new Navbar()

    cy.visit('/')
  });

  it('Should log in successfully with valid credentials', () => {
    cy.get('@userData').then((user: any) => {
      loginPage.verifyLoginMainPage()
      loginPage.typeUsername(user.standard)
      loginPage.typePassword(user.password)
      loginPage.clickOnLoginButton()

      homePage.verifyHomePageIsVisible()

      navbar.userLogout()

      loginPage.verifyLoginMainPage()
    })
  });

  it('Should not log in with a locked user credentials', () => {
    cy.get('@userData').then((user: any) => {
      cy.get('@loginData').then((login: any) => {
        loginPage.verifyLoginMainPage()
        loginPage.typeUsername(user.locked)
        loginPage.typePassword(user.password)
        loginPage.clickOnLoginButton()
        loginPage.verifyErrorMessageIsShown
        loginPage.verifyErrorMessage(login.errorMsg)
        loginPage.closeErrorMessage()
        loginPage.verifyErrorMessageIsHidden()
      })
    })
  });

  it('Should log in successfully with a problem user credentials', () => {
    cy.get('@userData').then((user: any) => {
      loginPage.verifyLoginMainPage()
      loginPage.typeUsername(user.problem)
      loginPage.typePassword(user.password)
      loginPage.clickOnLoginButton()

      homePage.verifyHomePageIsVisible()
      navbar.userLogout()

      loginPage.verifyLoginMainPage()
    })
  });

  it('Should log in successfully with a glitched performance user credentials', () => {
    cy.get('@userData').then((user: any) => {
      loginPage.verifyLoginMainPage()
      loginPage.typeUsername(user.performance)
      loginPage.typePassword(user.password)
      loginPage.clickOnLoginButton()

      homePage.verifyHomePageIsVisible()
      navbar.userLogout()

      loginPage.verifyLoginMainPage()
    })
  });

  it('Should log in successfully with a visual issues user credentials', () => {
    cy.get('@userData').then((user: any) => {
      loginPage.verifyLoginMainPage()
      loginPage.typeUsername(user.visual)
      loginPage.typePassword(user.password)
      loginPage.clickOnLoginButton()

      homePage.verifyHomePageIsVisible()
      navbar.userLogout()

      loginPage.verifyLoginMainPage()
    })
  });

});