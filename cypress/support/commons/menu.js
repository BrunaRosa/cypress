//tests Login
Cypress.Commands.add('accessMenu', (route, title) => { 
  cy.get(`nav a[href="${route}"]`).click()
  cy.contains('h2', title).should('be.visible')
})