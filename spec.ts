import {browser, element, by, Key} from 'protractor';

describe('protractor with typescript typings', () => {
  beforeEach(() => {
      browser.waitForAngularEnabled(false);
   });

  it('Google search for queuer.app', () => {
    browser.get('http://google.com');
    element(by.name('q')).sendKeys('queuer.app' + Key.ENTER);
  });

  it('Google search for queuer.app', () => {
    let links = element.all(by.css('cite.iUh30'))
    links.filter(link => 
        link.getText().then(URL => 
          URL == 'https://queuer.app/'
      )
    ).first().click();
  });

  it('should list todos', function() {
    expect(element.all(by.css('.col-twelve')).first().getText()).toContain('Running a restaurant is hard')
  });
});