const el = require('./DashboardElements').dashboardElements

class DashboardPage {
    editProfileBtn() {
        cy.get(el.DASHBOARD_PAGE.EDIT_PROFILE).click()
    }
    addExperienceBtn() {
        cy.get(el.DASHBOARD_PAGE.ADD_EXPERIENCE).click()
    }
    editAcademicBtn() {
        cy.get(el.DASHBOARD_PAGE.ADD_ACADEMIC_EDUCATION).click()
    }

}

export default new DashboardPage()