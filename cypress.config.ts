import { defineConfig } from 'cypress'

export default defineConfig({
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 10000,
  chromeWebSecurity: false,
  numTestsKeptInMemory: 0,
  video: false,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/report/mochawesome-report',
    charts: true,
    overwrite: false,
    html: false,
    json: true,
    timestamp: 'mmddyyyy_HHMMss',
  },
  failOnStatusCode: false,
  watchForFileChanges:true,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  env: {
    prod: false,
    auto: false,
    stage: false,
    username: '',
    password: '',
    domain: '',
    lookupsAPI: '#{LookupsApiEndpoint}#',
    employeeAPI: '#{EmployeesApiEndpoint}#',
    projectAPI: '#{ProjectsApiEndpoint}#',
    permissionsAPI: '#{PermissionsApiEndpoint}#',
    calendarAPI: '#{ConfiguratorApiEndpoint}#',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.ts')(on, config)
    },
      baseUrl: 'https://itlabs360-dev.it-labs.io',
  },
})
