/// <reference types="cypress" />

describe('App', () => {
    it('Load App', () => {
        cy.visit('/');

        //Check title load correctly
        cy.contains('label', 'What needs to be done?');
        cy.get('[data-cy=appTitle]')
            .invoke('text')
            .should('equal', 'What needs to be done?');

        //Check form loads correctly
        cy.get('[data-cy=addForm]')
            .should('exist');

        cy.get('[data-cy=btnAdd]')
            .should('exist')
            .should('have.class', 'btn__primary');
    });

    it('Add Todo', () => {
        cy.get('[data-cy=todoName]')
            .should('exist');

        cy.get('[data-cy=todoName]').type('Test Todo');
        cy.get('[data-cy=btnAdd]').click();
        cy.contains('label', 'Test Todo');
    });

    it('Delete Todo', () => {
        cy.get('[data-cy=btnDelete]').last().click();
        cy.contains('label', 'Test Todo').should('not.exist');
    });

    it('Edit Todo', () => {
        cy.get('[data-cy=btnEdit]').first().click();
        cy.get('[data-cy=inputEditTodo]').invoke('val', '');
        cy.get('[data-cy=inputEditTodo]').type('Test Edit');

        cy.get('[data-cy=btnSaveEdit]').click();

        cy.get('[data-cy=labelTodoName]').first()
            .invoke('text')
            .should('equal', 'Test Edit');
    });

    it('Filter All Todos', () => {
        cy.contains('button', 'All').click();

        cy.get('[data-cy=todo]').should('have.length', 3);
    });

    it('Filter Active Todos', () => {
        cy.contains('button', 'Active').click();

        cy.get('[data-cy=todo]').should('have.length', 2);
    });

    it('Filter Active Todos', () => {
        cy.contains('button', 'Completed').click();

        cy.get('[data-cy=todo]').should('have.length', 1);
    });
});