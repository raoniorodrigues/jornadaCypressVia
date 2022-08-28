/// <reference types="cypress" />

import CommonPage from '../../support/Common/CommonPage'
import LoginPage from '../../support/Login/LoginPage'

describe('Validar página perfil', { tags: '@demo' }, () => {
    before(() => {
        cy.visit('/')
        CommonPage.clickInMenuLogin()
        LoginPage.fastLogin()
    })

    context('Dado que acesso a tela de login', () => {
        it('Então devo visualizar a tela login', () => {
            LoginPage.validateLogin()
        })
    })

    
})