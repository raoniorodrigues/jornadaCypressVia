/// <reference types="cypress" />
import auth from '../../fixtures/api/auth.json'

it('[POST] - Teste de Autenticação', { tags: '@demo' },  () => {
    cy.request({
        method: 'POST',
        url: '/api/auth',
        body: auth
    }). then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.be.not.empty      
        expect(response.body).to.be.property('jwt')
        cy.getCookies('conexaowa.herokuapp.com').should('exist')

        cy.log(response.body)
    })
});