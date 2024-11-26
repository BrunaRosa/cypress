describe('Valida cenários de Login', () => {

  beforeEach(()=> {
    cy.viewport(1920,1080)
    cy.visit('https://playground.cyskills.com.br/login')
    cy.contains('h2', 'Faça login')
    .should('be.visible')
  })

  it('Deve logar com sucesso', () => {
    cy.login('papito@cyskills.com.br', 'showtime')

    // Valida página de Bem vindo
    cy.get('[data-cy="welcome-title"]')
      .should('be.visible')
      .and('have.text', 'Boas vindas ao Cypress Playground')
    
      cy.get('[data-cy="welcome-text"]')
      .should('be.visible')
      .and('have.text', 'Você está prestes a explorar uma aplicação web moderna desenvolvida com React.js, projetada especialmente para ajudá-lo a dar seus primeiros passos na automação de testes com o Cypress.')
  })

  it('Não deve logar com sucesso ao enviar email incorreto', () => {
    cy.login('papi@cyskills.com.br', 'showtime')
    cy.messageValidateLogin('E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('Não deve logar com sucesso ao enviar email não cadastrado', () => {
    cy.login('404@cyskills.com.br', 'showtime')
    cy.messageValidateLogin('E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('Não deve logar com sucesso ao enviar senha incorreta', () => {
    cy.login('papito@cyskills.com.br', '54898954')
    cy.messageValidateLogin('E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('Não deve logar com sucesso ao enviar senha com menos de 6 caracteres', () => {
    cy.login('papito@cyskills.com.br', 'show')
    cy.messageValidateLogin('A senha precisa ter pelo menos 6 caracteres. Vamos tentar de novo!')
  })
})