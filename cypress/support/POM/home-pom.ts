export default class Home {
  signupLogin() {
    cy.get("[href='/login']").click();
  }
}