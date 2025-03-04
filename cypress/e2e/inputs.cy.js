describe("Inputs", () => {
  beforeEach(() => {
    cy.acessLoginPage();
    cy.doLogin()
  });
  
  it("Deve preencher os campos de textos com dados válidos", () => {
    cy.userLoggedIn();

    cy.accessMenu("/input-fields", "Input Fields");

    cy.inputRegisterInformations(
      "Bruna Silva",
      "brunasilva@gmail.com",
      "2024",
      "2024-11-26"
    );
  });
});
