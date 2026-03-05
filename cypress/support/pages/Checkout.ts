import BasePage from "./BasePage";


export default class Checkout extends BasePage {

    private cartList: string
    private cartBadge: string
    private cartItem: string

    constructor() {
        super()
        this.cartList = '[data-test="cart-list"]'
        this.cartBadge = '.shopping_cart_badge'
    }

    public verifyCartPageIsVisible() {
        cy.get(this.cartList).should('be.visible')
    }

    public verifyProductWasAddedToCart() {
        cy.get(this.inventoryItem).should('have.length', 1)
    }

    public verifyAllProductsWereAddedToCart() {
        cy.get(this.inventoryItem).should('have.length', 6)
    }

    public verifyThatCheckoutCounterMatch() {
        cy.get(this.inventoryItem).its('length').then((itemsCount) => {
            cy.get(this.cartBadge)
            .invoke('text')
            .then((badgeCount) => {
                expect(Number(badgeCount)).to.equal(itemsCount)
            })
        })
    }

    public DeleteAllProductsFromCart() {
        cy.get(this.inventoryItem).each(($el) => {
            cy.wrap($el).find('button').click({force: true})
        })
    }

    public verifyAnyProductExists() {
        cy.get(this.inventoryItem).should('not.exist')
    }

    
}