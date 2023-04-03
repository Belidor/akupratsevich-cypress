describe('Shopping Cart Test', () => {
    it('successfully adds an item to the shopping cart and checks out', () => {
        // 1. Navigate to site https://www.saucedemo.com/
        cy.visit('https://www.saucedemo.com/');

        // 2. Log in as standard_user using password secret_sauce
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        // Assert that the correct page has loaded
        cy.get('.header_secondary_container > .title').should('have.text', 'Products');

        // 3. Buy an item of your choosing
        cy.get('.inventory_list .inventory_item:first-child .btn_inventory').click();

        // 4. Complete the checkout process
        cy.get('.shopping_cart_link').click();
        cy.get('.checkout_button').click();

        // Fill out the checkout form
        cy.get('[data-test="firstName"]').type('John');
        cy.get('[data-test="lastName"]').type('Doe');
        cy.get('[data-test="postalCode"]').type('12345');
        cy.get('.btn_primary.cart_button').click();

        // Assert that we are on the correct page
        cy.get('.subheader').should('have.text', 'Checkout: Overview');

        // Confirm the order
        cy.get('.btn_action.cart_button').click();

        // Assert that the checkout is complete
        cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER');

        // 5. Close the browser (Cypress will automatically close the browser after the test)
    });
});