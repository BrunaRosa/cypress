Cypress.Commands.add('clickButtonLogin', () => { 
    cy.get('[data-cy="login-button"]').click()
  })