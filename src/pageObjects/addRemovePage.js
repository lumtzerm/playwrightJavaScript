const { expect } = require("@playwright/test");

class AddRemovePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.deleteButtons = page.locator("#elements > .added-manually");
    this.addElementButton = page.locator("[onclick='addElement()']");
  }

  async open() {
    await this.page.click("text=Add/Remove Elements");
    await expect(this.page.locator("div > h3")).toHaveText(
      "Add/Remove Elements"
    );
  }

  //TODO: maybe create one method with two parameters?
  async clickOnAddElementButtonMultipleTimes(numberOfClicks) {
    for (let inc = 1; inc <= numberOfClicks; inc++) {
      await this.addElementButton.click();
    }
  }

  async clickOnDeleteButton() {
    //TODO all added DELETE buttons have same locator
    //can be extended as first child
    await this.deleteButtons.first().click();
  }

  async clickOnDeleteButtonMultipleTimes(numberOfClicks) {
    for (let inc = 1; inc <= numberOfClicks; inc++) {
      await this.clickOnDeleteButton();
    }
  }
}
module.exports = { AddRemovePage };
