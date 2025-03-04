describe("Tables", () => {
    beforeEach(() => {
      cy.acessLoginPage();
      cy.doLogin()
      cy.userLoggedIn();
  
      cy.accessMenu("/tables", "Tables");
    });
  
    it("Deve validar a linha do Github", () => {
        cy.contains('table tbody tr', '1004')

          .should('be.visible')
          .and('contain', 'Github')
          .and('contain', 'papitodev')
          .and('contain', 'Ativo')
    });

    it("Deve remover uma rede social", () => {
      const name = 'Facebook'
      cy.contains('table tbody tr', '1002')
        .find('.remove-item')
        .click()

      cy.contains('button', 'Excluir')
        .click()

        cy.get('table tbody')
          .should('not.contain', name)
      });

      it("Deve permanece na table ao desistir de excluir uma rede social", () => {
        const name = 'Youtube'
        cy.contains('table tbody tr', '1005')
          .find('.remove-item')
          .click()
  
        cy.contains('button', 'Cancelar')
          .click()
  
          cy.get('table tbody')
            .should('contain', name)
        });
  
  });
  