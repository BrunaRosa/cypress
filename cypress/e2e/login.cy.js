describe("Valida cenários de Login", () => {
  beforeEach(() => {
    cy.acessLoginPage();
  });

  it("Deve logar com sucesso", () => {
    cy.login("papito@cyskills.com.br", "showtime");
    cy.clickButtonLogin();

    cy.get('[data-cy="welcome-text"]')
      .should("be.visible")
      .and(
        "have.text",
        "Você está prestes a explorar uma aplicação web moderna desenvolvida com React.js, projetada especialmente para ajudá-lo a dar seus primeiros passos na automação de testes com o Cypress."
      );
  });

  it("Não deve logar com sucesso ao enviar email incorreto", () => {
    cy.login("papi@cyskills.com.br", "showtime");
    cy.clickButtonLogin();
    cy.messageValidateLogin(
      "E-mail ou senha incorretos. Por favor, tente novamente!"
    );
  });

  it("Não deve logar com sucesso ao enviar email não cadastrado", () => {
    cy.login("404@cyskills.com.br", "showtime");
    cy.clickButtonLogin();
    cy.messageValidateLogin(
      "E-mail ou senha incorretos. Por favor, tente novamente!"
    );
  });

  it("Não deve logar com sucesso ao enviar senha incorreta", () => {
    cy.login("papito@cyskills.com.br", "54898954");
    cy.clickButtonLogin();
    cy.messageValidateLogin(
      "E-mail ou senha incorretos. Por favor, tente novamente!"
    );
  });

  it("Não deve logar com sucesso ao enviar senha com menos de 6 caracteres", () => {
    cy.login("papito@cyskills.com.br", "show");
    cy.clickButtonLogin();
    cy.messageValidateLogin(
      "A senha precisa ter pelo menos 6 caracteres. Vamos tentar de novo!"
    );
  });

  it("Não deve logar com sucesso ao enviar email em branco", () => {
    cy.login("{backspace}", "showtime");
    cy.clickButtonLogin();
    cy.messageValidateLogin("Parece que você esqueceu de informar seu e-mail.");
  });

  it("Não deve logar com sucesso ao enviar senha em branco", () => {
    cy.login("papito@cyskills.com.br", "{backspace}");
    cy.clickButtonLogin();
    cy.messageValidateLogin("Por favor, digite sua senha para continuar.");
  });
});
