const base = require("@playwright/test");
const { AddRemovePage } = require("../../src/pageObjects/addRemovePage");
const { expect } = require("@playwright/test");

// Playwright Fixture: Extend basic test
exports.addRemoveBaseTest = base.test.extend({
  page: async ({ page }, use) => {
    await page.goto("http://the-internet.herokuapp.com/");
    const addRemovePage = new AddRemovePage(page);
    await addRemovePage.open();
    await use(page);
  },
});
