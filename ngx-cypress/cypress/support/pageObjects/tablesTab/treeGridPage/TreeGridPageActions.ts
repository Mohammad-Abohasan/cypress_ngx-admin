class TreeGridPageActions {
  elements = {};

  openTreeGridPage() {
    cy.intercept("/sockjs-node/info**").as("sockJs");
    cy.visit("pages/tables/tree-grid");

    cy.wait("@sockJs");
  }
}

export default TreeGridPageActions;
