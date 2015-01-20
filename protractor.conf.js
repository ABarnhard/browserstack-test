exports.config = {
  seleniumAddress: 'http://hub.browserstack.com/wd/hub',
  multiCapabilities: [
    {
      'browserstack.user' : process.env.BSTACK_USER,
      'browserstack.key' : process.env.BSTACK_KEY,
      'browserName' : 'Chrome',
      'browser_version' : '38.0',
      'os' : 'OS X',
      'os_version' : 'Yosemite',
      'resolution' : '1280x960'
    },
    {
      'browserstack.user' : process.env.BSTACK_USER,
      'browserstack.key' : process.env.BSTACK_KEY,
      'browserName' : 'Firefox',
      'browser_version' : '33.0',
      'os' : 'OS X',
      'os_version' : 'Yosemite',
      'resolution' : '1280x960'
    }
  ],
  specs: [
    'test/e2e/**/*.spec.js'
  ],
  jasmineNodeOpts: {
    isVerbose: true,
    showColors: true,
    defaultTimeoutInterval: 30000
  },
  baseUrl: 'http://adambarnhard.com'
};
