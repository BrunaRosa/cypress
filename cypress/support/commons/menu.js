//tests Login
Cypress.Commands.add('menuInputsFields', () => { 
  cy.get('nav a[href="/input-fields"]').click()
})