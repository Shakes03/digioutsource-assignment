'use strict';
module.exports = {
  '@tags': ['testing'],
  disabled:true,
  'Open a browser': (browser) => {
    browser.url('http://www.gamingclub.com?s=bfp33171&a=115299733123112');
    // browser.maximizeWindow();
    const landingPage = browser.page.landingPage();
	
	//landingPage.trackingVariablesAreValid();
	landingPage.loginToCasino();
	
    browser.end();
  },
};
