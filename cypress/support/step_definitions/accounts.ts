import { Given, When, Then, Before, BeforeAll } from "@badeball/cypress-cucumber-preprocessor";
import Nav from "../POM/navigate";
import Env from "../POM/env";
import Home from "../POM/home-pom";
import Signup from "../POM/signup-pom";
import Login from "../POM/login-pom";

const env = new Env();
const nav = new Nav();
const home = new Home();
const signup = new Signup();
const login = new Login();

BeforeAll(() => {
  env.loadData();
});

Before(() => {
  nav.setRoutes(env.data.routes);
});

Given('Navigate to Website URL', () => {
  nav.visit("home");
})

When('Click on signup', () => {
  home.signupLogin();
  nav.setCurrentRoute("login");
})

When('Fill signup form', () => {
  signup.validatePreForm();
  signup.fillPreForm(env.data.validSignup);
  nav.setCurrentRoute("signup");
})

When('Fill login form', () => {
  // return "skipped";
})

When('Fill out registration form', () => {
  signup.validateMainForm();
  
  // return "skipped";
})

When('Verify account creation success', () => {})

When('Verify account login success', () => {})

When('Verify account login failed', () => {})

When('Delete account', () => {})

Then('Verify account deletion success', () => {})

Then('Verify account creation failed', () => {})

Then('Logout', () => {})