var googlePage = require('./pages/googlePage');
var googleResultsPage = require('./pages/googleResultsPage');
var queuerLandingPage = require('./pages/queuerLandingPage');

describe('Protractor Test Queuer App', function() {
 beforeEach(function() {
    browser.waitForAngularEnabled(false);
  });

  it('Google search for queuer.app', function() {
  	googlePage.open();
  	googlePage.search('queuer.app')
  });

   it('Click on the link that has https://queuer.app in it.', function() {
   	googleResultsPage.clickOnTheQueuerAppLink()
  });

 it('Check that the banner reads. "Running a restaurant is hard......etc"', function() {
    expect(queuerLandingPage.getBannerText()).toContain('Running a restaurant is hard');
  });
});