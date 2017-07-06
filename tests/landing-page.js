'use strict';
module.exports = {
  '@tags': ['testing'],
  'Open a browser': (browser) => {
    browser.init();
    browser.maximizeWindow();

    browser.end();
  },
};
