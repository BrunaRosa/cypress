describe("Select", () => {
  beforeEach(() => {
    cy.acessLoginPage();
    cy.doLogin()
    cy.userLoggedIn();

    cy.accessMenu("/select", "Select");
  });

  it("Deve selecionar o framework de teste e linguagem usados no Curso Cypress Skills", () => {
    //seleciona o framework de teste
    cy
      .contains("label", "Selecione um Framework de Testes")
      .parent()
      .find("select")
      .select("Cypress");

    //seleciona a linguagem
    cy.get('input[placeholder^="Linguagens de programação"]').click();

    cy.contains(".option-item", "JavaScript").click();
  });

  it("Deve selecionar o framework de teste e mais de uma linguagem usados no Curso Cypress Skills", () => {
    const langs = ["JavaScript", "TypeScript"];

    //seleciona o framework de teste
    cy
      .contains("label", "Selecione um Framework de Testes")
      .parent()
      .find("select")
      .select("Cypress");

    //seleciona mais de uma linguagem
    cy.get('input[placeholder^="Linguagens de programação"]').click();

    langs.forEach(lang => {
      cy.contains(".option-item", new RegExp("^" + lang + "$")).click();
    });

    cy.get(".language-item").should("have.length", langs.length);
  });
});
