'use strict';
module.exports = {
  disabled:false,
  'Test jackpot city casino for scenario 2': (browser) => {
    browser.url('http://www.jackpotcitycasino.com?s=bfp33171&a=115299733123112');
    browser.maximizeWindow();
    
	const landingPage = browser.page.jackpotCityLandingPage();
	const casino = browser.page.casino();
	
	landingPage.trackingVariablesAreValid();
	landingPage.loginToCasino('daveautojpc','tester123');
	
	casino.validateUsernameIs('daveautojpc');	
	casino.clickTheDepositMenuOption();
	casino.visaIsDisplayedAndAvaliable();
	
	browser.saveScreenshot('screenshots/scenario2-bankingPage.jpg');
	
	casino.closeTheModal();
	casino.logoutOfCasino();
	
    browser.end();
  },
};

