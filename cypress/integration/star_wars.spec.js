/// <reference types="Cypress" />

describe('Star Wars App', () => {
    beforeEach(() => {
        cy.visit('./index.html')
    });
  
    it('Deve exibir o título e cumprimentar o usuário', () => {
      cy.get('h1').should('contain', 'Star Wars Lego');
      cy.get('small').should('contain', 'Olá, Alex Oliveira!');
    });
  
    it('Deve buscar um personagem pelo nome', () => {
      cy.get('input[placeholder="Buscar por nome:"]').type('Luke Skywalker');
      cy.get('button').contains('Buscar').click();
      cy.get('.characters .item').should('have.length', 1);
      cy.get('.characters .item p').should('contain', 'Luke Skywalker');
    });
  
    it('Deve exibir uma mensagem se o campo de busca estiver vazio', () => {
      cy.get('button').contains('Buscar').click();
      cy.get('#myModal').should('be.visible');
      cy.get('#modalMessage').should('contain', 'O campo de busca é obrigatório!');
      cy.wait(2000); // Espera 2 segundos para a modal fechar automaticamente
      cy.get('#myModal').should('not.be.visible');
    });
  
    it('Deve exibir uma mensagem se nenhum personagem for encontrado', () => {
      cy.get('input[placeholder="Buscar por nome:"]').type('Obi-Wan');
      cy.get('button').contains('Buscar').click();
      cy.get('#myModal').should('be.visible');
      cy.get('#modalMessage').should('contain', 'Nenhum registro encontrado!');
      cy.wait(2000); // Espera 2 segundos para a modal fechar automaticamente
      cy.get('#myModal').should('not.be.visible');
    });
  
    it('Deve dar um like em um personagem', () => {
      cy.get('.characters .item').first().within(() => {
        cy.get('span[data-test="like"]').click();
      });
      cy.get('#myModal').should('be.visible');
      cy.get('#modalMessage').should('contain', 'O personagem Mestre Yoda recebeu um like!');
      cy.wait(2000); // Espera 2 segundos para a modal fechar automaticamente
      cy.get('#myModal').should('not.be.visible');
    });
  
    it('Deve remover um personagem', () => {
      cy.get('.characters .item').first().within(() => {
        cy.get('span[data-test="remove"]').click();
      });
      cy.get('#myModal').should('be.visible');
      cy.get('#modalMessage').should('contain', 'Personagem removido com sucesso!');
      cy.wait(2000); // Espera 2 segundos para a modal fechar automaticamente
      cy.get('#myModal').should('not.be.visible');
      cy.get('.characters .item').should('have.length', 7);
    });
  });
  