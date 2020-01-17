var conf = require('../conf/nightwatch.conf.js');

module.exports = {
  'Open Website uber.com': function (browser) {
    browser
      .url('https://www.uber.com/fr/fr/')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .assert.title('Uber – Augmentez vos revenus en conduisant ou commandez une course dès maintenant')
  },
};



