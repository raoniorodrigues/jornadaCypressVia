/// <reference types="cypress" />
describe('Deleta Experiencia Profissional', () => {
    let token;
    let addXP;

    beforeEach(() => {
        cy.tokenJWT().then((auth) => {
            token = auth
        })

        cy.createExpecience(token).then((xp) => {
            addXP = xp
        })


    });

    it('[DELETE] - Deleta uma experiência pelo ID', () => {
        cy.request({
            method: 'DELETE',
            url: `api/profile/experience/${addXP}`,
            headers: {
                Cookie: token
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            cy.log(response.body)
        })
    });
});
describe('Deve criar e deletar Formação Academica', () => {
    let token;
    let addAcademicXP;

    beforeEach(() => {
        cy.tokenJWT().then((auth) => {
            token = auth
        })

        cy.createAcademics(token).then((xp) => {
            addAcademicXP = xp
        })


    });

    it('[DELETE] - Deleta uma formação academica pelo ID', () => {
        cy.request({
            method: 'DELETE',
            url: `api/profile/education/${addAcademicXP}`,
            headers: {
                Cookie: token
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            cy.log(response.body)
        })
    });
});

describe('Deleta usuário cadastrado', () => {
    let token;

    beforeEach(() => {
        cy.registerNewUser().then((auth) => {
            token = auth
        })


    });

    it.only('[DELETE] - Deve remover um usuário cadastrado através do seu Token', () => {
        cy.request({
            method: 'DELETE',
            url: "api/profile",
            headers: {
                Cookie: token
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            cy.log(response.body)
        })
    });
});
