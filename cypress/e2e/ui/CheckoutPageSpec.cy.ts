/// <reference types="cypress" />

import LoginPage from "../../support/pages/LoginPage";
import HomePage from "../../support/pages/HomePage";
import Checkout from "../../support/pages/Checkout";
import Navbar from "../../support/components/Navbar";

// Initialization
let loginPage: LoginPage
let homePage: HomePage
let navbar: Navbar
let checkout: Checkout

describe('Checkout Assertions and Verifications', () => {

  beforeEach(() => {
    cy.fixture('users').as('userData')

    loginPage = new LoginPage()
    homePage = new HomePage()
    navbar = new Navbar()
    checkout = new Checkout()

    cy.visit('/')

    cy.get('@userData').then((user: any) => {
      loginPage.userLogin(user.standard, user.password)
    })

    homePage.verifyHomePageIsVisible()
  });

  it('Should add successfully one product into the cart', () => {
    homePage.addProductToCart(0)
    navbar.clickOnCheckoutIcon()
    checkout.verifyCartPageIsVisible()
    checkout.verifyProductWasAddedToCart()
    checkout.verifyThatCheckoutCounterMatch()
  });

  it('Should add all the products successfully into the cart', () => {
    homePage.addAllProductsToCart()
    navbar.clickOnCheckoutIcon()
    checkout.verifyCartPageIsVisible()
    checkout.verifyAllProductsWereAddedToCart()
    checkout.verifyThatCheckoutCounterMatch()
  });

  it('Should delelte all products from the cart', () => {
    homePage.addAllProductsToCart()
    navbar.clickOnCheckoutIcon()
    checkout.verifyCartPageIsVisible()
    checkout.DeleteAllProductsFromCart()
    checkout.verifyAnyProductExists()
  })

});