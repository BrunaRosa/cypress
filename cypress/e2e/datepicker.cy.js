describe("Checkbox", () => {
    beforeEach(() => {
      cy.acessLoginPage();
  
      cy.login("papito@cyskills.com.br", "showtime");
      cy.clickButtonLogin();
      cy.userLoggedIn();
  
      cy.accessMenu("/date-picker", "Date Picker");
    });
  
    it("Deve adicionar minha data de aniversário", () => {
        cy.get('input[placeholder="Escolha uma data"][readonly]')
          .click()

        cy.get('select[aria-label="Month"]')
          .select('Outubro')

        cy.get('input[aria-label="Year"]')
          .type('1991')

        cy.get('span[aria-label="Outubro 6, 1991"]')
          .click()
    });
  
  });
  