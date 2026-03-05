/// <reference types="cypress" />

import LoginPage from "../../support/pages/LoginPage";
import HomePage from "../../support/pages/HomePage";

// Initialization
let loginPage: LoginPage
let homePage: HomePage

describe('Home Page Assertions and Verifications', () => {

  beforeEach(() => {
    cy.fixture('users').as('userData')

    loginPage = new LoginPage()
    homePage = new HomePage()
    cy.visit('/')

    cy.get('@userData').then((user: any) => {
      loginPage.userLogin(user.standard, user.password)
    })

    homePage.verifyHomePageIsVisible()
  });

  it('Should verify the A to Z selection', () => {
    homePage.selectFilterAtoZ()
    homePage.verifyFilterAtoZ()
  });

  it('Should verify the Z to A selection', () => {
    homePage.selectFilterZtoA()
    homePage.verifyFilterZtoA()
  });

  it('Should verify the price low to high selection', () => {
    homePage.selectFilterPriceLowtoHigh()
    homePage.selectFilterPriceLowtoHigh()
  });

  it('Should verify the price high to low selection', () => {
    homePage.selectFilterPriceHightoLow()
    homePage.selectFilterPriceHightoLow()
  });

});