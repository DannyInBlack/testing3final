interface PreFormData {
  name: string;
  email: string;
}

export default class Signup {

  validatePreForm() {
    cy.get(".signup-form>h2").should('include.text', "New User Signup!");
  }
  
  validateMainForm() {
    cy.get(".login-form>h2").should('include.text', "New User Signup!");
  }

  fillPreForm(data: PreFormData) {
    cy.get("[data-qa=signup-name]").type(data.name);
    cy.get("[data-qa=signup-email]").type(data.email);
    cy.get("[data-qa=signup-button]").click();
  }
}