'use strict';
const actions = {
  headingHasValue(text) {
    return this
      .waitForElementVisible('@subHeading')
      .expect.element('@subHeading').text.to.equal(text);
  },
  createSchemeButtonIsVisible() {
    return this
      .waitForElementVisible('@schemeCreateButton')
      .expect.element('@schemeCreateButton').to.be.visible;
  },
  clickTheCreateSchemeButton() {
    return this
      .click('@schemeCreateButton');
  },
};

module.exports = {
  elements: {
    subHeading: 'h1',
    memberSearchLink: 'div.active-container a',
    schemeCreateButton: '[data-qa="create-scheme-link"]',
  },
  commands: [actions],
};
