class SmartTablePageActions {
  elements = {};

  openSmartTablePage() {
    cy.intercept("/sockjs-node/info**").as("sockJs");
    cy.visit("pages/tables/smart-table");

    cy.wait("@sockJs");
  }
}

export default SmartTablePageActions;
