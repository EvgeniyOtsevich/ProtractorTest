var googlePage =  function() {
	var searchField = element(by.name('q'));

	this.open = function() {
		browser.get('http://google.com');
	};

	this.search = function(query){
		searchField.sendKeys(query).submit();
	};

};
module.exports = new googlePage();