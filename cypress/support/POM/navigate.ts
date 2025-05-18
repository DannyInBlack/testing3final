export default class Nav {
  routes: object;
  currentRoute: string;

  setRoutes(routes: object) {
    this.routes = routes;
  }

  visit(route: string) {
    cy.visit(this.routes[route].path);
    this.setCurrentRoute(route);
  }

  setCurrentRoute(route: string) {
    this.currentRoute = route;
    this.validateRoute();
  }

  validateRoute() {
    cy.url().should('include', this.routes[this.currentRoute].path);
    cy.title().should('include', this.routes[this.currentRoute].title);
  }
}