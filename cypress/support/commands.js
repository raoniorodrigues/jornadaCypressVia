// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/// <reference types="Cypress" />
import auth from '../fixtures/api/auth.json'
import addXP from '../fixtures/api/addExpericence.json'
import addAcademicXP from '../fixtures/api/addAcademics.json'
import newUser from '../fixtures/api/registerUserForDelete.json'


Cypress.Commands.add("tokenJWT", () => {
    cy.request({
        method: 'POST',
        url: '/api/auth',
        body: auth
    }).then((response) => {
        return response.body.jwt
    })
})

Cypress.Commands.add("criarPostagem", (token, texto) => {
    cy.request({
        method: 'POST',
        url: '/api/posts',
        headers: {
            Cookie: token
        },
        body: {
            "text": texto
        }
    }).then((response) => {
        expect(response.status).to.eq(201)
        cy.log(response.body)
    })
})

Cypress.Commands.add("createExpecience", (token) => {
    cy.request({
        method: 'PUT',
        url: '/api/profile/experience',
        headers: {
            Cookie: token
        },
        body: addXP
    }).then((response) => {
        return response.body.experience[0]._id
    })
})

Cypress.Commands.add("createAcademics", (token) => {
    cy.request({
        method: 'PUT',
        url: '/api/profile/education',
        headers: {
            Cookie: token
        },
        body: addAcademicXP
    }).then((response) => {
        return response.body.education[0]._id
    })
})

Cypress.Commands.add("registerNewUser", () => {
    cy.request({
        method: 'POST',
        url: '/api/users',
        body: newUser
    }).then((response) => {
        return response.body.jwt
    })
})