const { defineConfig } = require('cypress')

module.exports = defineConfig({
  baseUrl: 'http://localhost:7081',
  fixturesFolder: false,
  supportFile: false,
})