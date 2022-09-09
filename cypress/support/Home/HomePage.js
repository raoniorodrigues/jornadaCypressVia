/// <reference types="cypress" />

const el = require('./HomeElements').homeElements

class HomePage {
    validatePageTitle(value) {
        cy.title().should('eq', value)
    }

    validateLogoText(text){
        cy.get('[data-test="navbar-conexaoQA"]').should('have.attr', 'href').and('contain.text', text)
    }

    clicarBtnCriarPerfil(){
        cy.get(el.BTN_CRIAR_PERFIL).click()
    }
    
}

export default new HomePage()