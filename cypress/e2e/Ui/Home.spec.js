/// <reference types="cypress" />

import HomePage from '../../support/Home/HomePage'
import CommonPage from '../../support/Common/CommonPage'

describe('Validar a home', { tags: '@demo' }, () => {
    before('Dado que acesso a home', () => {
        cy.visit('/')
    })

    context('Dado que acesso a home', { tags: '@home' }, () => {
        it('Então devo visualizar a logo e ser direcionado para conexaoqa.herokuapp.com', () => {
            CommonPage.validateBePageTitleIsNotEmpty
            CommonPage.validatePageTitle("ConexaoQA")
            CommonPage.validateTitleInPage("ConexãoQA")
        })

        it('Clicar no Botão Criar Perfil', () => {
            
        });
    })

})