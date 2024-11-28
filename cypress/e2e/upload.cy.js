describe('Upload', ()=> {

    beforeEach(()=> {
        cy.acessLoginPage()
    
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.clickButtonLogin()
        cy.userLoggedIn()
    
        cy.accessMenu('/upload', 'Upload')
    })

    it('Deve fazer um upload de uma imagem ', () =>{
        cy.get('input[name="doc"]')
          .selectFile('cypress/fixtures/images/piu_piu.png')
          .then(element =>{
            expect(element[0].files[0].name).to.equal('piu_piu.png')
          })

        cy.get('#image-upload')
          .find('img')
          .should('be.visible')
          .should('have.attr', 'src')
          .and('include', 'blob')
    })

    it('Deve fazer um upload de uma doc', () =>{
        cy.get('input[name="doc"]')
          .selectFile('cypress/fixtures/docs/Outsider - Stephen King.pdf')
          .then(element =>{
            expect(element[0].files[0].name).to.equal('Outsider - Stephen King.pdf')
          })
    }) 

})