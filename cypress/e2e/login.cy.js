describe('Valida cenários de Login', () => {

  beforeEach(()=> {
    cy.viewport(1920,1080)
    cy.visit('https://playground.cyskills.com.br/login')
    cy.contains('h2', 'Faça login')
    .should('be.visible')
  })

  it('Deve logar com sucesso', () => {
    //Adiciona os dados
    cy.get('[data-cy="email"]').type('papito@cyskills.com.br')
    cy.get('[data-cy="password"]').type('showtime')

    //Envia os dados
    cy.get('[data-cy="login-button"]').click()

    // Valida página de Bem vindo
    cy.get('[data-cy="welcome-title"]')
      .should('be.visible')
      .and('have.text', 'Boas vindas ao Cypress Playground')
    
      cy.get('[data-cy="welcome-text"]')
      .should('be.visible')
      .and('have.text', 'Você está prestes a explorar uma aplicação web moderna desenvolvida com React.js, projetada especialmente para ajudá-lo a dar seus primeiros passos na automação de testes com o Cypress.')
  })

  it('Não deve logar com sucesso ao enviar email incorreto', () => {
    //Adiciona os dados
    cy.get('[data-cy="email"]').type('papi@cyskills.com.br')
    cy.get('[data-cy="password"]').type('showtime')

    //Envia os dados
    cy.get('[data-cy="login-button"]').click()

    cy.get('.notice p')
      .should('be.visible')
      .and('have.text','E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('Não deve logar com sucesso ao enviar email não cadastrado', () => {
    //Adiciona os dados
    cy.get('[data-cy="email"]').type('404@cyskills.com.br')
    cy.get('[data-cy="password"]').type('showtime')

    //Envia os dados
    cy.get('[data-cy="login-button"]').click()

    cy.get('.notice p')
      .should('be.visible')
      .and('have.text','E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('Não deve logar com sucesso ao enviar senha incorreta', () => {
    //Adiciona os dados
    cy.get('[data-cy="email"]').type('papito@cyskills.com.br')
    cy.get('[data-cy="password"]').type('54898954')

    //Envia os dados
    cy.get('[data-cy="login-button"]').click()

    cy.get('.notice p')
      .should('be.visible')
      .and('have.text','E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('Não deve logar com sucesso ao enviar senha com menos de 6 caracteres', () => {
    //Adiciona os dados
    cy.get('[data-cy="email"]').type('papito@cyskills.com.br')
    cy.get('[data-cy="password"]').type('show')

    //Envia os dados
    cy.get('[data-cy="login-button"]').click()

    cy.get('.notice p')
      .should('be.visible')
      .and('have.text','A senha precisa ter pelo menos 6 caracteres. Vamos tentar de novo!')
  })
})