import user from '../../fixtures/user.json'
import util from '../utils'

const el = require('./LoginElements').authElements

class AuthPage {
    validateLogin() {
        cy.get(el.MENSAGEM.WELCOME).should('contain', 'Login')
        cy.get(el.MENSAGEM.INFORMATIVE).should('contain', 'Acessar Conta') 
        cy.get(el.LOGIN.BTN_LOGIN, { timeout: 3000 }).should('be.visible')
    }

    fastLogin(username, passwd) {
        this.fillFieldUsername(username)
        this.fillFieldPassword(passwd)
        this.clickInButtonLogin()
    }

    fillFieldUsername(username) {
        cy.get(el.LOGIN.USERNAME, { timeout: 10000 }).should('have.length', 1).and('be.visible')
        cy.get(el.LOGIN.USERNAME).type(username)
    }

    fillFieldPassword(passwd) {
        cy.get(el.LOGIN.PASSWORD, { timeout: 10000 }).should('have.length', 1).and('be.visible')
        cy.get(el.LOGIN.PASSWORD).type(passwd)
    }

    clickInButtonLogin() {
        cy.get(el.LOGIN.BTN_LOGIN).click()
    }

    clickInButtonContinueLogin() {
        cy.get(el.LOGIN.BTN_CONTINUE_LOGIN).click()
    }

    validateInvalidUserMessage() {
        cy.get(el.MENSAGEM.INVALID).should('contain', 'Invalid username or password!')
    }

    authenticateUser() {
        this.fastLogin(user.username, user.password)
    }

    authenticateWithPasswordInvalid() {
        this.fastLogin(user.username, util.getRandonPassword())
    }

    authenticateWithDataInvalid() {
        this.fastLogin(util.getRandomPhone(), util.getRandonPassword())
    }

}

export default new AuthPage()