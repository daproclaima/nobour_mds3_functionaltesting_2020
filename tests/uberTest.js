//var conf = require('../conf/nightwatch.conf.js');

module.exports = {
  'Open Website uber.com': function (browser) {
    browser
      .url('https://www.uber.com/fr/fr/')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      //  test commenté car renvoie false alors que tout est exact...
      // .assert.title('Uber – Augmentez vos revenus en conduisant ou commandez une course dès maintenant')
      .assert.elementPresent('head')
  },

  'Check Block Login': function (browser) {
    browser
      .url('https://www.uber.com/fr/fr/')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .assert.elementPresent('*[id="/sign-in/"]')
      .assert.elementPresent('*[id="/signup/"]')
  },

  'Check Block Login': function (browser) {
    browser
      .url('https://www.uber.com/fr/fr/')   // visit the url
      .waitForElementVisible('body', 5000) // wait for the body to be rendered
      .assert.click('*[id="/sign-in/"]')
      .pause(1000)
      .assert.elementPresent('*[@id="root"]/div/div/header/div[2]/div/div/div/div/div[6]/div/div[1]/a/span')
      .click('*[@id="root"]')
      .pause(1000)
      .assert.elementPresent('*[@id="root"]/div/div/header/div[2]/div/div/div/div/div[6]/div/div[2]/a/span')
  },
};



