Cypress.Commands.add('login', (username, password) => {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
});

Cypress.Commands.add('addProductToCart', (productName) => {
    cy.get('.inventory_list .inventory_item').each(($el, index, $list) => {
        if ($el.find('.inventory_item_name').text().includes(productName)) {
            cy.wrap($el).find('.btn_inventory').click();
        }
    });
});

Cypress.Commands.add('verifyNumberOfProductsAddedToCart', (number) => {
    cy.get('.shopping_cart_badge').should('have.text', number);
});

Cypress.Commands.add('verifyPageTitle', (title) => {
    cy.get('.title').should('have.text', title);
});

Cypress.Commands.add('checkout', (firstName, lastName, postalCode) => {
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
    cy.get('.btn_primary.cart_button').click();
});

Cypress.Commands.add('completeCheckout', () => {
    cy.get('[data-test="finish"]').click();
    cy.get('.complete-header').should('have.text', 'Thank you for your order!');
});

Cypress.Commands.add('goToCheckout', () => {
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
});