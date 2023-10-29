import TreeGridPageActions from "../../support/pageObjects/tablesTab/treeGridPage/TreeGridPageActions";
import TreeGridPageAssertions from "../../support/pageObjects/tablesTab/treeGridPage/TreeGridPageAssertions";

const treeGridPageActions: TreeGridPageActions = new TreeGridPageActions();
const treeGridPageAssertions: TreeGridPageAssertions =
  new TreeGridPageAssertions();

describe("Tree Grid: Check the Tree Grid Validation", () => {
  it("Tree Grid - Should ", () => {
    treeGridPageActions.openTreeGridPage();
    treeGridPageAssertions.checkTreeGridPageIsOpened();
  });
});
