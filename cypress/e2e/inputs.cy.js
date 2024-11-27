describe('Input fields', ()=> {
    
  beforeEach(()=> {
    cy.acessLoginPage()
  })

  it('Deve preencher os campos de textos com dados válidos', () =>{
    cy.login('papito@cyskills.com.br', 'showtime')
    cy.clickButtonLogin()
    cy.userLoggedIn()
    
    cy.menuInputsFields()
    cy.contains('h2','Input Fields').should('be.visible')

    cy.inputRegisterInformations('Bruna Silva','brunasilva@gmail.com','2024','2024-11-26')
  })  
})