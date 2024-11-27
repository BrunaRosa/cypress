describe('Inputs', ()=> {

    beforeEach(()=> {
        cy.acessLoginPage()
      })
    it('Deve preencher os campos de textos com dados válidos', () =>{
    cy.login('papito@cyskills.com.br', 'showtime')
    cy.clickButtonLogin()
    cy.userLoggedIn()
    
    cy.accessMenu('/input-fields', 'Input Fields')

    cy.inputRegisterInformations('Bruna Silva','brunasilva@gmail.com','2024','2024-11-26')
    }) 

})