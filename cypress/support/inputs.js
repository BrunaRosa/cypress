Cypress.Commands.add('inputRegisterInformations', (name, email, numberId, date) => { 
    cy.get('[data-cy="fullname"]').type(name)
    cy.get('[data-cy="email"]').type(email)
    cy.get('[data-cy="number"]').type(numberId)
    cy.get('[data-cy="date"]').type(date)
})