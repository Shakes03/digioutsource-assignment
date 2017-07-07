'use strict';
const validator = require('validator'); 

const actions = {
  trackingVariablesAreValid() {
    this.expect.element('@txtAffiliateID').to.have.value.that.equals('bfp33171');
     this.expect.element('@txtAdID').to.have.value.that.equals('115299733123112');
	this.getValue('@txtVengeID', result => 
		validator.isUUID(result.value+'',[3,4,5])
	);
    return this;
  },
  loginToCasino(username,password) {
    return this
	  .waitForElementVisible('@loginButton')
	  .click('@loginButton')
	  .waitForElementVisible('@username')
      .clearValue('@username')
	  .setValue('@username', username)
	  .clearValue('@password')
	  .setValue('@password', password)
	  .submitForm('@loginForm')
	  .waitForElementNotPresent('@loginOverlay')
	  .api.dismissAlert();
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
