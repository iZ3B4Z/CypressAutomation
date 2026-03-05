export default class Navbar {
    
    private burgerMenuBtn: string
    private logoutBtn: string
    private checkoutIcon: string

    constructor() {
        this.burgerMenuBtn = '#react-burger-menu-btn'
        this.logoutBtn = '#logout_sidebar_link'
        this.checkoutIcon = '[data-test="shopping-cart-link"]'
    }

    public userLogout() {
        cy.get(this.burgerMenuBtn).click({force: true})
        cy.get(this.logoutBtn).click({force: true})
    }

    public clickOnCheckoutIcon() {
        cy.get(this.checkoutIcon).click({force: true})
    }
}