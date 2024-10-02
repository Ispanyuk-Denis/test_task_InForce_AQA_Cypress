/// <reference types="Cypress"/>

describe('Check logout', () => {
  it('Check logout', () => {
    cy.visit('');
    cy.loginUser('standard_user', 'secret_sauce');
    cy.addToCart('Sauce Labs Backpack', 'Sauce Labs Bolt T-Shirt');
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="checkout"]').click();
    cy.addUserInfo('John', 'Dow', '123456');
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    cy.get('[data-test="back-to-products"]').click();
    cy.get('#react-burger-menu-btn').click();
    cy.get('[data-test="logout-sidebar-link"]').click();
    cy.url().should('include', 'https://www.saucedemo.com/');
    cy.get('[data-test="username"]').should('contain', '');
    cy.get('[data-test="password"]').should('contain', '');
    cy.get('[data-test="login-button"]').should('exist');
  })
})

