import { defineConfig } from "cypress";
// import allureWriter from "@shelex/cypress-allure-plugin/writer";
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  projectId: process.env.CYPRESS_PROJECT_ID,
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    baseUrl: "http://localhost:4200/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // allureWriter(on, config);
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
    env: {
      allure: true,
      allureResultsPath: "allure-results",
    },
    screenshotOnRunFailure: true,
  },
});
