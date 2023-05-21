const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  projectId: "8cgenc",

  env:{
    Environment : "QA",
    QA : "https://rahulshettyacademy.com/angularpractice/",
    UAT:"https://rahulshettyacademy.com/angularpractice/"
  },

  retries:{
    runMode: 1
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:"cypress/integeration/examples/*.js"
  },
});
