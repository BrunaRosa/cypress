//tests Login
Cypress.Commands.add('login', (email, password) => { 
  cy.get('[data-cy="email"]').type(email)
  cy.get('[data-cy="password"]').type(password)

  cy.get('[data-cy="login-button"]').click()
})

Cypress.Commands.add('messageValidateLogin', (text) => { 
  cy.get('.notice p')
      .should('be.visible')
      .and('have.text', text)
})