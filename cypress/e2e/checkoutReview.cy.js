/// <reference types="Cypress"/>

import { getNumberFromText } from '../support/commands'

describe('Check Checkout', () => {
    it('Check add items to the Checkout: Overview', () => {
        cy.visit('');
        cy.loginUser('standard_user', 'secret_sauce');
        cy.addToCart('Sauce Labs Backpack', 'Sauce Labs Bolt T-Shirt');
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.checkItemInCart('Sauce Labs Backpack', 'Sauce Labs Bolt T-Shirt');
        cy.get('[data-test="checkout"]').click();
        cy.addUserInfo('John', 'Dow', '123456');
        cy.get('[data-test="continue"]').click();
        cy.checkItemInCart('Sauce Labs Backpack', 'Sauce Labs Bolt T-Shirt');
    });

    it('Check information in the Checkout: Your Information', () => {
        cy.visit('');
        cy.loginUser('standard_user', 'secret_sauce');
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]')
            .should('contain', '');
        cy.get('[data-test="lastName"]')
            .should('contain', '');
        cy.get('[data-test="postalCode"]')
            .should('contain', '');
    });

    it('Check Total price (with Tax) in checkout:overview page', () => {
        cy.visit('');
        cy.loginUser('standard_user', 'secret_sauce');
        cy.addToCart('Sauce Labs Backpack', 'Sauce Labs Bolt T-Shirt');
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="checkout"]').click();
        cy.addUserInfo('John', 'Dow', '123456');
        cy.get('[data-test="continue"]').click();
        cy.checkItemInCart('Sauce Labs Backpack', 'Sauce Labs Bolt T-Shirt');
        const configPrice = {
            totalSum: 0,
            priceSubTotal: 0,
            taxTotal: 0,
            priceTotal: 0,
        };
        cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > [data-test="inventory-item-price"]')
            .invoke('text')
            .then((text) => getNumberFromText(text, configPrice, "totalSum"))
            .then(() => {
                cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > [data-test="inventory-item-price"]')
                    .invoke('text')
                    .then((text) => getNumberFromText(text, configPrice, "totalSum"));
            })
            .then(() => {
                cy.get('[data-test="subtotal-label"]')
                    .invoke('text')
                    .then((text) => getNumberFromText(text, configPrice, "priceSubTotal"));
            })
            .then(() => {
                cy.get('[data-test="tax-label"]')
                    .invoke('text')
                    .then((text) => getNumberFromText(text, configPrice, "taxTotal"));
            })
            .then(() => {
                cy.get('[data-test="total-label"]')
                    .invoke('text')
                    .then((text) => getNumberFromText(text, configPrice, "priceTotal"));
            })
            .then(() => {
                expect(configPrice.totalSum + configPrice.taxTotal).to.equal(configPrice.priceTotal);
            })
    });

    it('Check Checkout:Complete! page', () => {
        cy.visit('');
        cy.loginUser('standard_user', 'secret_sauce');
        cy.addToCart('Sauce Labs Backpack', 'Sauce Labs Bolt T-Shirt');
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="checkout"]').click();
        cy.addUserInfo('John', 'Dow', '123456');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();
        cy.url().should('include', 'https://www.saucedemo.com/checkout-complete.html');
        cy.get('[data-test="title"]').should('contain', 'Checkout: Complete!');
        cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!');
    })
})
