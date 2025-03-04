//tests Login
Cypress.Commands.add('acessLoginPage', () => { 
  cy.viewport(1920,1080)
  cy.visit('https://playground.cyskills.com.br/login')
  cy.contains('h2', 'Faça login')
  .should('be.visible')
})

Cypress.Commands.add('login', (email, password) => { 

  if (email){
    cy.get('[data-cy="email"]').type(email)
  }

  if (password){
    cy.get('[data-cy="password"]').type(password)
  }
})


Cypress.Commands.add('doLogin', () => { 
  cy.login("papito@cyskills.com.br", "showtime");
  cy.clickButtonLogin();
})


Cypress.Commands.add('userLoggedIn', () => { 
  cy.get('[data-cy="welcome-title"]')
  .should('be.visible')
  .and('have.text', 'Boas vindas ao Cypress Playground')
})

Cypress.Commands.add('messageValidateLogin', (text) => { 
  cy.get('.notice p')
      .should('be.visible')
      .and('have.text', text)
})