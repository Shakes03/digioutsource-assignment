'use strict';
module.exports = {
  '@tags': ['testing'],
  disabled:false,
  'Open a browser': (browser) => {
    browser.url('http://www.jackpotcitycasino.com?s=bfp33171&a=115299733123112');
    // browser.maximizeWindow();
    const landingPage = browser.page.landingPage();
	const casinoHomePage = browser.page.casinoHomePage();
	
	landingPage.trackingVariablesAreValid();
	landingPage.loginToCasino();
	casinoHomePage.validateUsernameIs('daveautojpc');
	casinoHomePage.clickTheDepositMenuOption();
	casinoHomePage.visaIsDisplayedAndAvaliable();
	browser.saveScreenshot('bankingPage');
	casinoHomePage.closeTheModal;
	
    browser.end();
  },
};

