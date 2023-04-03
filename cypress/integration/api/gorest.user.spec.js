describe('GoRest User API', () => {
    let users;
    before(() => {
        cy.request('https://gorest.co.in/public/v2/users').then((response) => {
            expect(response.status).to.eq(200);
            users = response.body;
        });
    });

    it('should return an non empty list', () => {
        expect(users).to.have.length.greaterThan(0);
    });

    it('should have at least one user whose name starts with the letter C', () => {
        const usersWithNameC = users.filter((user) => user.name.startsWith('C'));
        console.log(usersWithNameC)
        expect(usersWithNameC).to.have.length.greaterThan(0);
    });

    it('should display the users in the console', () => {
        expect(users).to.not.be.undefined;
        console.log(users);
    });
});
