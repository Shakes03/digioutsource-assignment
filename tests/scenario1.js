'use strict';
module.exports = {
  disabled:false,
  'Test gaming club casino for scenario 1': (browser) => {
    browser.url('http://www.gamingclub.com?s=bfp33171&a=115299733123112');
    browser.maximizeWindow();
	
    const landingPage = browser.page.gamingClubLandingPage();
	const casino = browser.page.casino();
	
	landingPage.trackingVariablesAreValid();
	landingPage.loginToCasino('daveautogcc','test');
	
	casino.validateUsernameIs('daveautogcc');
	casino.clickTheDepositMenuOption();
	casino.visaIsDisplayedAndAvaliable();
	
	browser.saveScreenshot('screenshots/scenario1-bankingPage.png');
	
	casino.closeTheModal();
	casino.logoutOfCasino();
	
    browser.end();
  },
};
