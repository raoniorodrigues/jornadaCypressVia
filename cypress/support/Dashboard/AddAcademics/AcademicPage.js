const el = require('./academicElements').academicElements
const eldashboard = require('../DashboardElements').dashboardElements

import DashboardPage from '../DashboardPage'

class AcademicPage {
    createAcademics() {
        cy.fixture("createAcademics").then((data) => { 
            DashboardPage.editAcademicBtn()
            cy.get(el.ACADEMICS_PAGE.SCHOOL_INPUT).type(data.school)
            cy.get(el.ACADEMICS_PAGE.DEGREE_INPUT).type(data.degree)
            cy.get(el.ACADEMICS_PAGE.COURSE_INPUT).type(data.course)
            cy.get(el.ACADEMICS_PAGE.INIT_DATE_INPUT).type(data.init_date)
            cy.get(el.ACADEMICS_PAGE.FINAL_DATE_INPUT).type(data.final_date)
            cy.get(el.ACADEMICS_PAGE.ACA_DESC_INPUT).type(data.academic_desc)
            cy.get(el.ACADEMICS_PAGE.BTN_ADD_ACADEMIC).click()
            
            //Verificar se a Formação Academica foi criada com sucesso
            cy.get(eldashboard.DASHBOARD_PAGE.RETURN_ALL_DASHBOARD_PAGE).should('contain.text', data.school)
            cy.get(eldashboard.DASHBOARD_PAGE.RETURN_ALL_DASHBOARD_PAGE).should('contain.text', data.degree)
            cy.get(eldashboard.DASHBOARD_PAGE.RETURN_ALL_DASHBOARD_PAGE).should('contain.text', data.init_date)
            cy.get(eldashboard.DASHBOARD_PAGE.RETURN_ALL_DASHBOARD_PAGE).should('contain.text', data.final_date)
            
        })
    }
}

export default new AcademicPage()