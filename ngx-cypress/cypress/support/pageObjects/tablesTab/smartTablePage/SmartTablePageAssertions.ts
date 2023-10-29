class SmartTablePageAssertions {
  elements = {
    title: () => cy.getByAttribute("data-cy", "smart-table-title"),
  };

  checkSmartTablePageIsOpened() {
    this.elements.title().should("have.text", " Smart Table ");
  }
}

export default SmartTablePageAssertions;
