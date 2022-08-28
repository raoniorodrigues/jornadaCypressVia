const el = require('./ProfileElements').profileElements

class ProfilePage {
    FillUpForm() {
        
        
        cy.fixture("createProfile").then((data) => { 
            cy.get(el.FORM_INPUTS.CLICK_STATUS_SELECT).click()
            cy.get(el.FORM_INPUTS.STATUS).click()
            cy.get(el.FORM_INPUTS.EMPRESA).type(data.empresa)
            cy.get(el.FORM_INPUTS.WEBSITE).type(data.website)
            cy.get(el.FORM_INPUTS.LOCALIZACAO).type(data.localizacao)
            cy.get(el.FORM_INPUTS.CONHECIMENTOS).type(data.conhecimentos)
            cy.get(el.FORM_INPUTS.GITHUB_USER).type(data.github_user)
            cy.get(el.FORM_INPUTS.BIOGRAFIA).type(data.biografia)
            
            // SUB-FORMULÁRIO PARA PREENCHIMENTO DE MIDIAS SOCIAIS
            cy.get(el.FORM_INPUTS.SOCIAL_MEDIA).click()
            cy.get(el.FORM_INPUTS.SOCIAL_MEDIA_TWITTER).type(data.social_media_twitter)
            cy.get(el.FORM_INPUTS.SOCIAL_MEDIA_FACEBOOK).type(data.social_media_facebook)
            cy.get(el.FORM_INPUTS.SOCIAL_MEDIA_YOUTUBE).type(data.social_media_youtube)
            cy.get(el.FORM_INPUTS.SOCIAL_MEDIA_LINKEDIN).type(data.social_media_linkedin)
            cy.get(el.FORM_INPUTS.SOCIAL_MEDIA_INSTAGRAM).type(data.social_media_instagram)
            cy.get(el.FORM_INPUTS.SOCIAL_MEDIA_MEDIUM).type(data.social_media_medium)
            
            cy.get(el.FORM_INPUTS.CRIAR_PERFIL_SUBMIT).click()
        })
    }

}

export default new ProfilePage()