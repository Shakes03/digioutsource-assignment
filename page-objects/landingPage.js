'use strict';
const validator = require('validator'); 

const actions = {
  trackingVariablesAreValid() {
   // this.expect.element('@txtAffiliateID').to.have.value.that.equals('bfp33171');
    // this.expect.element('@txtAdID').to.have.value.that.equals('115299733123112');
	this.getValue('@txtVengeID', result => 
		validator.isEmail(result.value+'')
	);
    return this;
  },
  loginToCasino() {
    return this
	  .waitForElementVisible('@loginButton')
	  .click('@loginButton')
	  .waitForElementVisible('@username')
      .clearValue('@username')
	  .setValue('@username', 'daveautojpc')
	  .clearValue('@password')
	  .setValue('@password', 'tester123')
	  .submitForm('@loginForm')
	  .waitForElementNotPresent('@loginOverlay')
	  .api.dismissAlert();
  },
  clickTheCreateSchemeButton() {
    return this
      .click('@schemeCreateButton');
  },
};

module.exports = {
  elements: {
    txtAffiliateID: '#txtAffiliateID',
    txtAdID: '#txtAdID',
    txtVengeID: '#txtVengeID',
	// login	
	loginButton: 'a.launchLogin',
	loginForm: 'form#Venge113',
	loginOverlay: '#login',
	username: '#VaultAccountNumber',
	password: '#LoginPassword',
	submitButton: '#Venge_Submit',	
  },
  commands: [actions],
};
