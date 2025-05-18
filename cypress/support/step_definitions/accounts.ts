import { Given, When, Then, Before, BeforeAll } from "@badeball/cypress-cucumber-preprocessor";
import Nav from "../POM/navigate";
import Env from "../POM/env";
import Home from "../POM/home-pom";

const env = new Env();
const nav = new Nav();
const home = new Home();

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
})

When('Fill signup form', () => {})

When('Fill login form', () => {})

When('Fill out registration form', () => {})

When('Verify account creation success', () => {})

When('Verify account login success', () => {})

When('Verify account login failed', () => {})

When('Delete account', () => {})

Then('Verify account deletion success', () => {})

Then('Verify account creation failed', () => {})

Then('Logout', () => {})