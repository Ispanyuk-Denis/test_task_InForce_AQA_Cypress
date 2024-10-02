Cypress.Commands.add('addToCart', (...args) => {
    args.forEach((arg) => {
        cy.contains('div.inventory_item_name', arg)
            .parents('div.inventory_item_description')
            .find('button')
            .contains('Add to cart')
            .click();
    });
});

Cypress.Commands.add('checkPageError', () => {
    cy.window().then((win) => {
        const consoleError = cy.stub(win.console, 'error').as('consoleError');
        cy.get('@consoleError').should('have.length', 0);
    });
});

Cypress.Commands.add('loginUser', (userName, userPassword) => {
    cy.get('#user-name').type(userName);
    cy.get('#password').type(userPassword);
    cy.get('#login-button').click();
})

Cypress.Commands.add('checkItemInCart', (...args) => {
    args.forEach((arg) => {
        cy.get('[data-test="cart-list"]')
            .children('.cart_item')
            .should('contain', arg);
    })
})

Cypress.Commands.add('addUserInfo', (firstName, lastName, postalCode) => {
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
})

export function getNumberFromText(text, objConfig, editableKey) {
    const numbers1 = text.match(/\d+/g);
    const combinedNumber1 = numbers1.join('.');
    objConfig[editableKey] += parseFloat(combinedNumber1);
    return objConfig
}
