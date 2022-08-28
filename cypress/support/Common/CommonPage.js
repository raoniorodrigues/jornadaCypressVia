/// <reference types="cypress" />

const el = require('./CommonElements').commonElements

class CommonPages {
    validatePageTitle(value){
        cy.title().should('include', value)
    }

    validateBePageTitleIsNotEmpty(){
        cy.get(el.PAGE_TITLE).should('not.be.empty')
    }

    validateTitleInPage(text) {
        cy.get(el.PAGE_TITLE).should('contain.text', text)
    }

    clickInMenuLogin(){
        cy.get(el.MENU_LOGIN_HOME).click()
    }

    clickInMenuRegister(){
        cy.get(el.MENU_REGISTER_HOME).click()
    }

    awaitImg(element){
        return cy.get(element,{ timeout: 60000 }).should('be.visible').and('have.attr', 'src')
    }
}

export default new CommonPages()