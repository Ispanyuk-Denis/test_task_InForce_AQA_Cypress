/// <reference types="Cypress"/>

describe('Check login page', () => {
    it('Check that the login page is accessible and loads without errors', () => {
        cy.visit('');
        cy.checkPageError();
        cy.url().should('include', 'https://www.saucedemo.com/');
        cy.get('#user-name').should('exist');
        cy.get('#password').should('exist');
        cy.get('#login-button').should('exist');
    });
    it('Check that a user with valid login credentials can log in successfully', () => {
        cy.visit('');
        cy.loginUser('standard_user', 'secret_sauce');
        cy.checkPageError();
        cy.url().should('include', 'https://www.saucedemo.com/inventory.html')
        cy.get('.app_logo').should('exist');
    });
    it('Check that a user with invalid password cannot log in and sees an appropriate', () => {
        cy.visit('');
        cy.loginUser('standard_user', 'secret');
        cy.get('[data-test="error"]').should('exist');
        cy.url().should('include', 'https://www.saucedemo.com/');
    });
    it('Check that a user with invalid login cannot log in and sees an appropriate', () => {
        cy.visit('');
        cy.loginUser('standard', 'secret_sauce');
        cy.get('[data-test="error"]').should('exist');
        cy.url().should('include', 'https://www.saucedemo.com/');
    });
});