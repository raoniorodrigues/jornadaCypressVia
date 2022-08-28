/// <reference types="cypress" />

import CommonPage from '../../support/Common/CommonPage'
import LoginPage from '../../support/Login/LoginPage'
import HomePage from '../../support/Home/HomePage'
import ProfilePage from '../../support/Profile/ProfilePage'
import RegistrationPage from '../../support/Registration/RegistrationPage'
import ExperiencePage from '../../support/Dashboard/AddExperience/ExperiencePage'
import AcademicPage from '../../support/Dashboard/AddAcademics/AcademicPage'

const el = require('../../support/Dashboard/DashboardElements').dashboardElements

describe('Devo realizar login com usuário e senha válidos', { tags: '@demo' }, () => {
    before(() => {
        cy.visit('/')
        RegistrationPage.registerProfile()
        // CommonPage.clickInMenuLogin()
        // cy.fixture("user").then((data) => { 
        //     LoginPage.fastLogin(data.email, data.password)
        // })
    })

    context('Devo validar o cadastro de Perfil com Sucesso', () => {
        it('Dado que clico no botão Criar Perfil', () => {
            HomePage.clicarBtnCriarPerfil()
            ProfilePage.FillUpForm()
        })
        
        it('Quando realizo adiciono uma nova experiência', () => {
            ExperiencePage.createExperience()
        });

        it('E adiciono uma Formação Academica', () => {
            AcademicPage.createAcademics()
        });
    })

    after(() => {
        cy.get(el.DASHBOARD_PAGE.DELETE_PROFILE).click
    });

})