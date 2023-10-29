class TreeGridPageAssertions {
  elements = {
    searchInput: () => cy.getByAttribute("data-cy", "search-input"),
  };

  checkTreeGridPageIsOpened() {
    this.elements.searchInput().should("have.text", "Search:");
  }
}

export default TreeGridPageAssertions;
