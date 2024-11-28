describe("Checkbox", () => {
  beforeEach(() => {
    cy.acessLoginPage();

    cy.login("papito@cyskills.com.br", "showtime");
    cy.clickButtonLogin();
    cy.userLoggedIn();

    cy.accessMenu("/checkbox", "Checkbox");
  });

  it("Deve selecionar o campo de checkbox", () => {
    cy.get("input[value=1]").parent().click();
    cy.get('label[for="python"]').click();
  });

  it("Deve selecionar todos os checkboxes", () => {
    const langs = ["javascript", "python", "rust", "go", "typescript"];
    langs.forEach(lang => {
      cy.get(`label[for="${lang}"]`).click();
    });
  });
});
