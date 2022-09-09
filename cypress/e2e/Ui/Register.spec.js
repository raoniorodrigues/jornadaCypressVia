/// <reference types="cypress" />

import RegistrationPage from '../../support/Registration/RegistrationPage'

describe('Validar página perfil', () => {
    before(() => {
        cy.visit('/')
    })

    context('Devo validar um registro realizado com sucesso', () => {
        it('Dado que realizo um registro com sucesso', () => {
            RegistrationPage.registerProfile()
        })
    })

    
})