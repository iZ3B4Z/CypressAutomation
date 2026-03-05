import BasePage from "./BasePage";

export default class HomePage extends BasePage {
    
    private inventoryContainer: string
    private prodSortContainer: string

    constructor() {
        super()
        this.inventoryContainer = '#inventory_container'
        this.prodSortContainer = '[data-test="product-sort-container"]'
    }

    public verifyHomePageIsVisible() {
        cy.get(this.inventoryContainer).should('be.visible')
    }

    public selectFilterAtoZ() {
        cy.get(this.prodSortContainer).select('Name (A to Z)')
    }

    public selectFilterZtoA() {
        cy.get(this.prodSortContainer).select('Name (Z to A)')
    }

    public selectFilterPriceLowtoHigh() {
        cy.get(this.prodSortContainer).select('Price (low to high)')
    }
    
    public selectFilterPriceHightoLow() {
        cy.get(this.prodSortContainer).select('Price (high to low)')
    }

    public verifyFilterAtoZ() {
        cy.get(this.inventoryItem).then(($els) => {
            const names = [...$els].map(el => el.innerText.trim())
            const sorted = [...names].sort((a, b) => a.localeCompare(b))
            expect(names).to.deep.equal(sorted)
        })
    }

    public verifyFilterZtoA() {
        cy.get(this.inventoryItem).then(($els) => {
            const names = [...$els].map(el => el.innerText.trim())
            const sorted = [...names].sort((a, b) => b.localeCompare(a))
            expect(names).to.deep.equal(sorted)
        })
    }

    public verifyFilterPriceLowtoHigh() {
        cy.get(this.inventoryItem).then(($els) => {
            const prices = [...$els].map(el => parseFloat(el.innerText.replace('$', '').trim()))
            const sorted = [...prices].sort((a, b) => a - b)
            expect(prices).to.deep.equal(sorted)
        })
    }

    public verifyFilterPriceHightoLow() {
        cy.get(this.inventoryItem).then(($els) => {
            const prices = [...$els].map(el => parseFloat(el.innerText.replace('$', '').trim()))
            const sorted = [...prices].sort((a, b) => b - a)
            expect(prices).to.deep.equal(sorted)
        })
    }

    public addProductToCart(productIndex: number) {
        cy.get(this.inventoryItem).eq(productIndex).find('button').click({force: true})
    }


    public addAllProductsToCart() {
        cy.get(this.inventoryItem).each(($el) => {
            cy.wrap($el).find('button').click({force: true})
        })
    }
}