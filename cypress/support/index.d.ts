/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        login(username, password): Chainable<any>;
    }
}