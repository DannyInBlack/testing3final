Feature: Account registration and login
  Scenario: Register user
    Given Navigate to Website URL
    When Click on signup
    And Fill signup form
    And Fill out registration form
    And Verify account creation success
    And Verify account login success
    And Delete account
    Then Verify account deletion success

  Scenario: Login user with correct email and password
    Given Navigate to Website URL
    When Click on signup
    And Fill login form
    And Verify account login success
    And Delete account
    Then Verify account deletion success

  Scenario: Login user with incorrect email and password
    Given Navigate to Website URL
    When Click on signup
    And Fill login form
    And Verify account login failed
    And Delete account
    Then Verify account deletion success

  Scenario: Logout user
    Given Navigate to Website URL
    When Click on signup
    And Fill login form
    And Verify account login success
    Then Logout

  Scenario: Register user with existing email
    Given Navigate to Website URL
    When Click on signup
    And Fill signup form
    Then Verify account creation failed

      


  