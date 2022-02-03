// $env:PWDEBUG=1
const { addRemoveBaseTest } = require("./fixture/addRemoveFixture");
const { expect } = require("@playwright/test");
const { AddRemovePage } = require("../src/pageObjects/addRemovePage");
const { Helpers } = require("../src/helpers/helper");
const helper = new Helpers();

addRemoveBaseTest("Without Delete button", async ({ page }) => {
  const addRemovePage = new AddRemovePage(page);
  await expect(addRemovePage.deleteButtons).toHaveCount(0);
});

addRemoveBaseTest("Add Random number of Delete buttons", async ({ page }) => {
  const addRemovePage = new AddRemovePage(page);

  let randomNum = helper.getRandomPositiveInt(10);
  console.log(`random num: ${randomNum}`);

  await addRemovePage.clickOnAddElementButtonMultipleTimes(randomNum);

  await expect(addRemovePage.deleteButtons).toHaveCount(randomNum);
});

addRemoveBaseTest(
  "Add Random number of Delete buttons and remove 1",
  async ({ page }) => {
    const addRemovePage = new AddRemovePage(page);

    let randomNum = helper.getRandomPositiveInt(10);
    console.log(`random num: ${randomNum}`);

    await addRemovePage.clickOnAddElementButtonMultipleTimes(randomNum);
    await addRemovePage.clickOnDeleteButton();

    await expect(addRemovePage.deleteButtons).toHaveCount(randomNum - 1);
  }
);

addRemoveBaseTest(
  "Add Random number of Delete buttons and remove all",
  async ({ page }) => {
    const addRemovePage = new AddRemovePage(page);

    let randomNum = helper.getRandomPositiveInt(10);
    console.log(`random num: ${randomNum}`);

    await addRemovePage.clickOnAddElementButtonMultipleTimes(randomNum);
    await addRemovePage.clickOnDeleteButtonMultipleTimes(randomNum);

    await expect(page.locator("#elements > .added-manually")).toHaveCount(0);
  }
);
