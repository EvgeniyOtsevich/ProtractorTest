var googleResultsPage =  function() {
	var links = element.all(by.css('cite.iUh30'))

	this.clickOnTheQueuerAppLink = function() {
		links.filter(function(element) {
			return element.getText().then(function(linkText){
				return linkText == 'https://queuer.app/';
			});
		}).first().click();
	};
};
module.exports = new googleResultsPage();