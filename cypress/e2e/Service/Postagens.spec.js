/// <reference types="cypress" />
import auth from '../../fixtures/api/auth.json'

describe('Testes de Criação de Postagens', () => {
    let token;

    beforeEach(() => {
        cy.tokenJWT().then((auth) =>{
            token = auth
        })
    });
    it('[POST] - Criar uma postagem', () => {
        cy.request({
            method: 'POST',
            url: '/api/posts',
            headers: {
                Cookie: token
            },
            body: {
                "text": "Postagem Raoni Teste"
            }
        }). then((response) => {
            expect(response.status).to.eq(201)   
            cy.log(response.body)
        })
    });

    it('[GET] - Consultar uma postagem', () => {
        cy.request({
            method: 'GET',
            url: '/api/posts',
            headers: {
                Cookie: token
            }
        }). then((response) => {
            expect(response.status).to.eq(200)   
            cy.log(response.body)
        })
    });
    it('[GET] - Consultar uma postagem por ID', () => {
        cy.criarPostagem(token, "Postagem Teste Raoni").then((response)=>{
            let id = response.body._id

            cy.request({
                method: 'GET',
                url: `/api/posts/${id}`,
                headers: {
                    Cookie: token
                }
            }). then((response) => {
                expect(response.status).to.eq(200)   
                cy.log(response.body)
            })
        })
    });
});

describe('Teste de Exclusão', () => {

    let token;

    beforeEach(() => {
        cy.tokenJWT().then((auth) =>{
            token = auth
        })
    });
    
    it('[DELETE] - Deletar uma postagem uma postagem por ID', () => {
        cy.criarPostagem(token, "Postagem Teste Raoni").then((response)=>{
            let id = response.body._id

            cy.request({
                method: 'DELETE',
                url: `/api/posts/${id}`,
                headers: {
                    Cookie: token
                }
            }). then((response) => {
                expect(response.status).to.eq(200)   
                cy.log(response.body)
            })
        })
    });

    it('[DELETE] - Deletar uma postagem uma postagem por ID inexistente', () => {
        cy.criarPostagem(token, "Postagem Teste Raoni").then((response)=>{
            let id = response.body._id

            cy.request({
                method: 'DELETE',
                url: '/api/posts/XPTO0000',
                failOnStatusCode: false,
                headers: {
                    Cookie: token
                }
            }). then((response) => {
                expect(response.status).to.eq(404)   
                cy.log(response.body)
            })
        })
    });
});