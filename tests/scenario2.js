'use strict';
module.exports = {
  disabled: false,
  'Test jackpot city casino for scenario 2': (browser) => {
    const landingPage = browser.page.jackpotCityLandingPage();
    const casino = browser.page.casino();

    landingPage.navigateToSite('http://www.jackpotcitycasino.com');

    landingPage.trackingVariablesAreValid();
    landingPage.loginToCasino('daveautojpc', 'tester123');

    casino.validateUsernameIs('daveautojpc');
    casino.clickTheDepositMenuOption();
    casino.visaIsDisplayedAndAvaliable();

    browser.saveScreenshot('screenshots/scenario2-bankingPage.jpg');

    casino.closeTheModal();
    casino.logoutOfCasino();

    browser.end();
  },
};
