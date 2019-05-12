# ProtractorTest

## The repository contains automation framework for Protractor Test

### Setup 
1. Install npm
2. Clone projects 
```
  > https://github.com/EvgeniyOtsevich/ProtractorTest.git
```
3. Run `npm install`

### For running selenium server
4. Run `webdriver-manager update`
5. Run `webdriver-manager start`

If selenium server running not on local machine edit the conf.js and replace seleniumAddress with your own

### Execution  
1. Run `npm run tsc`
2. Run `protractor tmp/conf.js`
