export default class Env {
  data: any;

  loadData() {
    if(!this.data) {
      cy.fixture("data.json").then(data => {
        this.data = data;
      })
    }
  }
}