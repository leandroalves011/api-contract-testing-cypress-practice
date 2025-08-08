const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://fakerestapi.azurewebsites.net',
    setupNodeEvents(on, config) {
    },
  },
});



// const { defineConfig } = require("cypress")

// module.exports = defineConfig({
//   viewportHeight: 1024,
//   viewportWidth: 1700,
//   e2e: {
//     fixturesFolder: false,
//   },
// })
