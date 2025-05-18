class home {
  homeNav(data: any) {
    cy.visit(data.home.url);
    cy.title().should('include', data.home.title);
  }
}

export default home;