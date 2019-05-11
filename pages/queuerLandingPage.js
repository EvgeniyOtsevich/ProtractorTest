var queuerLandingPage =  function() {
	var bannerText = element.all(by.css('.col-twelve'));

	this.getBannerText = function() {
		return bannerText.first().getText();
	};

};
module.exports = new queuerLandingPage();