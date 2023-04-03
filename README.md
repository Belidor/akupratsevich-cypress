# Artem Kupratsevich Cypress Test Task

This project contains a test automation solution for several scenarios using the Cypress testing framework.

## Challenge:

The solution includes the following test scenarios:

**TEST 1**: Retrieve a list of users and verify that at least one user is being returned. The test fails when a response is not returned, or the list contains zero users.

**TEST 2**: Retrieve a list of users and verify that there is at a minimum one user whose name starts with the letter C. The test fails either when a response is not returned, or no usernames match the set criteria.

**TEST 3**: Retrieve a list of users and display it in the console. The test fails when a response is not returned, or the list contains zero users.

**TEST 4**: Using a test framework, create a test scenario in which a user adds an item to a shopping cart and successfully checks out on https://www.saucedemo.com/. Each step of the test must be asserted to ensure the correct page has indeed loaded. The test result is considered a PASS only if all the steps execute successfully.

## Installation

Clone the repository
```bash
git clone
```
Install dependencies
```bash
npm install
```
## Usage

To open Cypress, run the following command:
```bash 
npx cypress open
```
## Running Tests

To execute the tests, run the following command:

```bash
npx cypress run
```