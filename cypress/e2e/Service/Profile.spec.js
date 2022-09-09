/// <reference types="cypress" />
import profile from '../../fixtures/api/createProfile.json'
import addXP from '../../fixtures/api/addExpericence.json'
import academicsXP from '../../fixtures/api/addAcademics.json'

describe('Validar Profiles', () => {
    let token;

    beforeEach(() => {
        cy.tokenJWT().then((auth) => {
            token = auth
        })
    });

    it('Selecionar o perfil do usuário logado', () => {
        cy.request({
            method: 'GET',
            url: '/api/profile/me',
            headers: {
                Cookie: token
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            cy.log(response.body)
        })
    });

    it('Criar/Atualizar perfil', () => {
        cy.request({
            method: 'POST',
            url: '/api/profile',
            headers: {
                Cookie: token
            },
            body: profile
        }).then((response) => {
            expect(response.status).to.eq(200)
            cy.log(response.body)
        })
    });

    it.only('Criar Experiência Profissional ', () => {
        cy.request({
            method: 'PUT',
            url: '/api/profile/experience',
            headers: {
                Cookie: token
            },
            body: addXP
        }).then((response) => {
            expect(response.status).to.eq(200)
            cy.log(response.body)        })
    });
    it.only('Criar Formação Academica ', () => {
        cy.request({
            method: 'PUT',
            url: '/api/profile/education',
            headers: {
                Cookie: token
            },
            body: academicsXP
        }).then((response) => {
            return response.body.education[0]._id
        })
    });
    
    it('Selecionar todos os perfis cadastrados', () => {
        cy.request({
            method: 'GET',
            url: '/api/profile'
        }).then((response) => {
            expect(response.status).to.eq(200)
            cy.log(response.body)
        })
    });

    it('Selecionar o perfil do usuário logado', () => {
        cy.request({
            method: 'GET',
            url: 'api/profile/user/631a69173dddcb00151c0966',
        }).then((response) => {
            expect(response.status).to.eq(200)
            cy.log(response.body)
        })
    });
});

describe('Atualizar informações do Usuário', () => {
    let token;

    beforeEach(() => {
        cy.tokenJWT().then((auth) => {
            token = auth
        })
    });
    it('Selecionar o perfil do usuário logado', () => {
        cy.request({
            method: 'PUT',
            url: '/api/profile/experience',
            headers: {
                Cookie: token
            },
            body: addXP
        }).then((response) => {
            expect(response.status).to.eq(200)
            cy.log(response.body)
        })
    });
});
