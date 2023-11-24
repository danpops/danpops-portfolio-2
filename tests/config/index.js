const theme = require('./theme.json')
const DEFAULT_CONFIG = {
  format: ['@cucumber/pretty-formatter', 'json:tests/report/cucumber.json'],
  formatOptions: { colorsEnabled: true, theme },
  noStrict: true,
  forceExit: true,
  // DO NOT CHANGE THE ORDER OF INTEGRATION TEST PATHS.
  // CHANGING THE ORDER WILL RESULT IN BROKEN TESTS.
  // DATA IS RECYCLED THROUGHOUT ALL FEATURES.
  paths: ['tests/features/**/*.feature'],
  require: [
    'tests/actions/**/*.js',
    'tests/page/**/*.js',
    'tests/support/**/*.js',
    'tests/steps/**/*.js'
  ],
  tags: 'not @flaky'
}
module.exports = {
  default: DEFAULT_CONFIG,
  smoke: { ...DEFAULT_CONFIG, tags: 'not @local and not @flaky' }
}
