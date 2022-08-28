const el = require('./experienceElements').experienceElements
const eldashboard = require('../DashboardElements').dashboardElements
import DashboardPage from '../DashboardPage'

class ExperiencePage {
    createExperience() {
        cy.fixture("createExperience").then((data) => { 
            DashboardPage.addExperienceBtn()
            cy.get(el.EXPERIENCE_PAGE.POSICAO_INPUT).type(data.posicao)
            cy.get(el.EXPERIENCE_PAGE.COMPANY_INPUT).type(data.company)
            cy.get(el.EXPERIENCE_PAGE.LOCATION_INPUT).type(data.location)
            cy.get(el.EXPERIENCE_PAGE.INIT_DATE_INPUT).type(data.init_date)
            cy.get(el.EXPERIENCE_PAGE.ACTUAL_COMBOBOX).click()
            cy.get(el.EXPERIENCE_PAGE.XP_DESC_INPUT).type(data.xp_desc)
            cy.get(el.EXPERIENCE_PAGE.BTN_ADD_XP).click()
            
            //Verificar se a experiência foi criada com sucesso
            cy.get(eldashboard.DASHBOARD_PAGE.RETURN_ALL_DASHBOARD_PAGE).should('contain.text', data.posicao)
            cy.get(eldashboard.DASHBOARD_PAGE.RETURN_ALL_DASHBOARD_PAGE).should('contain.text', data.company)
            cy.get(eldashboard.DASHBOARD_PAGE.RETURN_ALL_DASHBOARD_PAGE).should('contain.text', data.init_date)
            cy.get(eldashboard.DASHBOARD_PAGE.RETURN_ALL_DASHBOARD_PAGE).should('contain.text', data.final_date)
            
        })
    }
}

export default new ExperiencePage()