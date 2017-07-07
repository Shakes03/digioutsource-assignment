'use strict';
module.exports = {
  disabled: false,
  'Test gaming club casino for scenario 1': (browser) => {
    const landingPage = browser.page.gamingClubLandingPage();
    const casino = browser.page.casino();

    landingPage.navigateToSite('http://www.gamingclub.com');

    landingPage.trackingVariablesAreValid();
    landingPage.loginToCasino('daveautogcc', 'test');

    casino.validateUsernameIs('daveautogcc');
    casino.clickTheDepositMenuOption();
    casino.visaIsDisplayedAndAvaliable();

    browser.saveScreenshot('screenshots/scenario1-bankingPage.png');

    casino.closeTheModal();
    casino.logoutOfCasino();

    browser.end();
  },
};
