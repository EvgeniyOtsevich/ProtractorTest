// To run this example, first transpile it to javascript with `npm run tsc`,
// then run `protractor conf.js`.
import {Config} from 'protractor';

export let config: Config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  specs: [ 'spec.js' ],
  seleniumAddress: 'http://localhost:4444/wd/hub',

  noGlobals: true
};