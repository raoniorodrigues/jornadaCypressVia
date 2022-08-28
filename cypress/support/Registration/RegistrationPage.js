import Common from '../../support/Common/CommonPage'
import Utils from '../utils'

const el = require('./RegistrationElements').registrationElements

class RegistrationPage {
    registerProfile() {

        cy.fixture("registerUser").then((data) => { 
            Common.clickInMenuRegister()
            cy.get(el.REGISTER_FORM.NOME_INPUT).type(`${data.nome}`+ Utils.getRandonPassword())
            cy.get(el.REGISTER_FORM.EMAIL_INPUT).type(Utils.getRandonPassword() +`${data.email}`)
            cy.get(el.REGISTER_FORM.PASS_INPUT).type(data.password)
            cy.get(el.REGISTER_FORM.REPEAT_PASS_INPUT).type(data.passwordRpt)
            cy.get(el.REGISTER_FORM.REGISTER_SUBMIT_BTN).click()
        })

    }

}

export default new RegistrationPage()