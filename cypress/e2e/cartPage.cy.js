/// <reference types="Cypress"/>

describe('Check add many position to cart', () => {
    it('Check add 1 position to cart', () => {
        cy.visit('');
        cy.loginUser('standard_user', 'secret_sauce');
        cy.addToCart('Sauce Labs Backpack');
        cy.get('[data-test="shopping-cart-badge"]').should('contain', '1');
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.checkItemInCart('Sauce Labs Backpack');
    })
    it('Check add 2 position to cart', () => {
        cy.visit('');
        cy.loginUser('standard_user', 'secret_sauce');
        cy.addToCart('Sauce Labs Backpack', 'Sauce Labs Bolt T-Shirt');
        cy.get('[data-test="shopping-cart-badge"]').should('contain', '2');
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.checkItemInCart('Sauce Labs Backpack', 'Sauce Labs Bolt T-Shirt');
    })
})