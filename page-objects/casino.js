'use strict';

const actions = {
  validateUsernameIs(name) {
    return this
	.expect.element('@username').text.contains(name);	 
  },
  clickTheDepositMenuOption() {    
      this.waitForElementVisible('@depositMenuOption');
	  this.click('@depositMenuOption');
	  this.api.elements('css selector', 'iframe', (frames) => 
		 this.api.frame({ELEMENT: frames.value[0].ELEMENT})
	 ); 
	return this;
  },
   visaIsDisplayedAndAvaliable() {
      this.waitForElementVisible('@visaOption');
	  this.expect.element('@visaDepositButton').to.be.enabled;
	  return this;
  },
    closeTheModal() {
	  this.api.frame(null);	
      this.waitForElementVisible('@closeModal');
	  this.click('@closeModal');
	  return this;
  },
  logoutOfCasino(){
	  this.waitForElementVisible('@userDetailsToggle');
	  this.click('@userDetailsToggle');
	  this.waitForElementVisible('@logoutLink');
	  this.click('@logoutLink');
	  this.waitForElementNotPresent('@username');
	return this;  
 },
};

module.exports = {
  elements: {
   username: '.user_details',
   depositMenuOption: '.icon-Deposit',
   bankingModal: '.banking',
   visaOption: '[title="VISA"]',
   visaDepositButton: {
	   selector: '//*[@id="bodyWrapper"]/div[4]/div[3]/div[2]/div/div/div[1]/div[2]/a',
	   locateStrategy: 'xpath'
   },
   closeModal: '.close-text',
   userDetailsToggle: '.mdi-chevron-double-down.arrowStyle',
   logoutLink: '#password-pop > div:nth-child(5) > a.white-text.title.ng-binding',   
  },
  commands: [actions],
};
