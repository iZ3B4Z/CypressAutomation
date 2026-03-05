import BasePage from "./BasePage";

export default class LoginPage extends BasePage {
    private usernameField: string
    private passwordField: string
    private loginBtnField: string
    private errorMsgAlert: string
    private closeErrorBtn: string
    private loginMainPage: string

    constructor() {
        super()
        this.usernameField = '#user-name'
        this.passwordField = '#password'
        this.loginBtnField = '#login-button'
        this.errorMsgAlert = '[data-test="error"]'
        this.closeErrorBtn = '[data-test="error-button"]'
        this.loginMainPage = '.login_container'
    }

    public typeUsername(username: string) {
        cy.get(this.usernameField).type(username)
    }

    public typePassword(password: string) {
        cy.get(this.passwordField).type(password)
    }

    public clearUsernameField() {
        cy.get(this.usernameField).clear()
    }

    public clearPasswordField() {
        cy.get(this.passwordField).clear()
    }

    public verifyUsernameFieldCleared() {
        cy.get(this.usernameField).should('be.empty')
    } 

    public verifyPasswordFieldCleared() {
        cy.get(this.usernameField).should('be.empty')  
    }

    public verifyErrorMessageIsHidden () {
        cy.get(this.errorMsgAlert).should('not.exist')
    }

    public verifyErrorMessageIsShown() {
        cy.get(this.errorMsgAlert).should('be.visible')
    }

    public verifyLoginMainPage() {
        cy.get(this.loginMainPage).should('be.visible')
    }

    public verifyErrorMessage(message: string) {
        cy.get(this.errorMsgAlert).should('have.text' ,message)
    }

    public clickOnLoginButton() {
        cy.get(this.loginBtnField).click({force: true})
    }
    
    public closeErrorMessage() {
        cy.get(this.closeErrorBtn).click({force: true})
    }

    /**
     * * This following is function is used for a Hook
     * Users:
     * - standard: valid username
     * - locked: locked out username
     * - problem: user with problem in home page 
     * - performance: user with performance glitch in login
     * - error: user with errors in home page
     * - visual: user with visual errors in home page
     * - password: valid password
     */
    public userLogin(username: string, password: string) {
        this.typeUsername(username)
        this.typePassword(password)
        this.clickOnLoginButton()
    }
}
