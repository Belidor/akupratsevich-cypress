const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

let users;

Given('I send a request to the User API', () => {
    cy.request('https://gorest.co.in/public/v1/users').then((response) => {
        expect(response.status).to.eq(200);
        users = response.body.data;
    });
});

Then('I should receive a response', () => {
    expect(users).to.not.be.undefined;
});

Then('the list of users should not be empty', () => {
    expect(users).to.have.length.greaterThan(0);
});

Then('the list should have at least one user whose name starts with the letter C', () => {
    const usersWithNameC = users.filter((user) => user.name.startsWith('C'));
    expect(usersWithNameC).to.have.length.greaterThan(0);
});

Then('the users should be displayed in the console', () => {
    console.log(users);
});