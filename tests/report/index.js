import reporter from 'cucumber-to-html'

const options = {
  theme: 'bootstrap',
  brandTitle: 'McCain MDIxAI Application',
  name: 'Cucumber Integration Tests',
  jsonFile: 'tests/report/cucumber.json',
  output: 'tests/report/cucumber.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true
}

reporter.generate(options)
