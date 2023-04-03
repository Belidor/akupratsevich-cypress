import userData from '../../fixtures/shopping_cart.json'
describe('Shopping Cart Test', () => {
    it('successfully adds an item to the shopping cart and checks out', () => {

        cy.visit('https://www.saucedemo.com/');
        cy.login(userData.username, userData.password);

        cy.verifyPageTitle('Products');
        cy.addProductToCart('Sauce Labs Backpack');
        cy.verifyNumberOfProductsAddedToCart(1);

        cy.goToCheckout();

        cy.checkout(userData.firstName, userData.lastName, userData.postalCode);
        cy.verifyPageTitle('Checkout: Overview');

        cy.completeCheckout();
    });
});