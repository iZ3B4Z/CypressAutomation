import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://restful-booker.herokuapp.com',
    specPattern: 'cypress/e2e/api/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
