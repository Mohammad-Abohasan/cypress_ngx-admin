import SmartTablePageActions from "../../support/pageObjects/tablesTab/smartTablePage/SmartTablePageActions";
import SmartTablePageAssertions from "../../support/pageObjects/tablesTab/smartTablePage/SmartTablePageAssertions";

const smartTablePageActions: SmartTablePageActions =
  new SmartTablePageActions();
const smartTablePageAssertions: SmartTablePageAssertions =
  new SmartTablePageAssertions();
  
describe("Smart Table: Check the Smart Table Validation", () => {
  it("Smart Table - Should ", () => {
    smartTablePageActions.openSmartTablePage();
    smartTablePageAssertions.checkSmartTablePageIsOpened();
  });
});
