/// <reference types="Cypress" />

describe('StarWars Lego System', function() {
    beforeEach(function() {
        cy.visit('./index.html')
    })
    
    it('verifica o título da aplicação', function() {
        cy.title().should('eq', 'Star Wars')
    })

    it('buscar registro', function() {
        cy.get('input').type('Han Solo')
        cy.contains('button', 'Buscar').click()
        cy.contains('p', 'Han Solo')
    })

    it('busca vazia e checagem da mensagem', function() {
        cy.contains('button', 'Buscar').click()
        cy.get('.modal-content').contains('#modalMessage', 'O campo de busca é obrigatório!')
    })

    it('curtir personagem', function() {
        const userName = 'Mestre Yoda'
        cy.get(':nth-child(1) > [data-test="like"]').click()
        cy.get('.modal-content').contains('#modalMessage', `O personagem ${userName} recebeu um like!`)
    })

    it('deletar personagem', function() {
        const userName = 'Mestre Yoda'
        cy.get(':nth-child(1) > [data-test="remove"]').click()
        cy.get('.modal-content').contains('#modalMessage', 'Personagem removido com sucesso!')
        cy.get('p').contains(userName).should('not.exist');
    })
  })
  