'use strict';
const validator = require('validator'); 

const actions = {
  trackingVariablesAreValid() {
    this.expect.element('@txtAffiliateID').to.have.value.that.equals('bfp33171');
     this.expect.element('@txtAdID').to.have.value.that.equals('115299733123112');
	this.getValue('@txtVT', result => 
		validator.isInt(result.value+'')
	);
    return this;
  },
  openLoginModal() {
	  this.waitForElementVisible('@loginButton');
	  this.click('@loginButton');
	  this.api.elements('css selector', 'iframe', (frames) => 
		this.api.frame({ELEMENT: frames.value[1].ELEMENT})
	  );
	 return this;
  },
  loginToCasino(username,password){
	  this.openLoginModal();
	   this.waitForElementVisible('@username');
      this.clearValue('@username');
	  this.setValue('@username', username);
	  this.clearValue('@password');
	  this.setValue('@password', password);
	  this.submitForm('@loginForm');
	  this.waitForElementNotPresent('@loginOverlay');
	  this.api.dismissAlert();
	  return this;
  },
};

module.exports = {
  elements: {
    txtAffiliateID: '#txtAffiliateID',
    txtAdID: '#txtAdID',
    txtVT: '#txtVT',
	// login	
	loginButton: '.icon-login',
	loginForm: 'form#Venge149',
	loginOverlay: '#login',
	username: '#VaultAccountNumber',
	password: '#LoginPassword',
	submitButton: '#Venge_Submit',	
  },
  commands: [actions],
};
