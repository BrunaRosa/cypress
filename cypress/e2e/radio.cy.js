describe('Radio Button', ()=> {
    beforeEach(()=> {
        cy.acessLoginPage()
    
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.clickButtonLogin()
        cy.userLoggedIn()
    
        cy.accessMenu('/radio', 'Radio Buttons')
    })

    it('Deve marcar o framework usado no Curso Cypress Skills', () =>{
        cy.contains('label', 'Cypress').click()
     })
})