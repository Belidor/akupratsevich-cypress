Feature: User_API

  Scenario: Retrieve a list of users and verify that at least one user is being returned
    Given I send a request to the User API
    Then I should receive a response
    And the list of users should not be empty

  Scenario: Retrieve a list of users and verify that there is at a minimum one user whose name starts with the letter C
    Given I send a request to the User API
    Then I should receive a response
    And the list should have at least one user whose name starts with the letter C

  Scenario: Retrieve a list of users and display it in the console
    Given I send a request to the User API
    Then I should receive a response
    And the list of users should not be empty
    And the users should be displayed in the console