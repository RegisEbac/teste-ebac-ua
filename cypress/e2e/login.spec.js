/// <reference types="cypress"  />

context('funcionalidade login', () => {

    it('Deve fazer login com sucesso', () => {
 cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
 cy.get('#username'). type( 'aluno_ebac@teste.com')
 cy.get('#password').type('teste@teste.com')
 cy.get('.woocommerce-form > .button').click()

 cy.get('.page-title').should('contain' , 'minha conta')
 cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'olá')
    })

    it('Deve exibir uma mensagen de erro ao inserir usuario ou senha inválidos', () => {

    })
})