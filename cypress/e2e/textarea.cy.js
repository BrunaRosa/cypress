describe('TextArea', ()=> {
    
  beforeEach(()=> {
    cy.acessLoginPage()
  })

  it('Deve preencher os campos de text area', () =>{
    cy.login('papito@cyskills.com.br', 'showtime')
    cy.clickButtonLogin()
    cy.userLoggedIn()

    cy.accessMenu('/textarea', 'Textarea')
    
    cy.get('textarea[name=message]').type('Boas vindas ao Cypress Skills.Um curso de formação completo para você aprender automação de testes')

    
  })  
})