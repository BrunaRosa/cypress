describe("Checkbox", () => {
    beforeEach(() => {
      cy.acessLoginPage();
      cy.doLogin()
      cy.userLoggedIn();
  
      cy.accessMenu("/tags", "Tags");
    });
  
    it("Deve adicionar algumas tags", () => {
      const tags = ['Cypress', 'Javascript', 'Nodejs']

      tags.forEach(t => {
        cy.get('.new-tag')
          .type(`${t}{Enter}`)
          .should('have.value', '')
        cy.wait(500)
      })

      tags.forEach(t => {
        cy.get('.tag-input')
          .should('contain', t)
      })
    });
  
  });
  