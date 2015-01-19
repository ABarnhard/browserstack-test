exports.config = {
  seleniumAddress: 'http://hub.browserstack.com/wd/hub',
  multiCapabilities: [
    {
      'browserstack.user' : process.env.BSTACK_USER,
      'browserstack.key' : process.env.BSTACK_KEY,
      'browserName': 'chrome'
    }
  ],
  suites: {
    //homepage: 'test/e2e/homepage/**/*.spec.js'
  },
  jasmineNodeOpts: {
    isVerbose: true,
    showColors: true,
    defaultTimeoutInterval: 30000
  },
  baseUrl: 'http://localhost:9000'
};
