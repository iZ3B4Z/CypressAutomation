export default class BasePage {

    public inventoryItem: string

    constructor() {
        this.inventoryItem = '[data-test="inventory-item"]'
    }

    protected goToUrl(url: string): void {
        cy.visit(url)
    }

}