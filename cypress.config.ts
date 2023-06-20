import { defineConfig } from 'cypress';
import fs from 'fs';

export default defineConfig({
  chromeWebSecurity: false,
  env: {
    APP_URL: 'http://localhost:3000',
  },
  viewportWidth: 1200,
  viewportHeight: 800,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  video: false,
  projectId: 'cypress-playground',
  scrollBehavior: false,
  numTestsKeptInMemory: 20,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      on('task', {
        readFileMaybe(filename) {
          if (fs.existsSync(filename)) {
            return fs.readFileSync(filename, 'utf8');
          }

          return null;
        },
      });
      return config;
    },
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    supportFile: false,
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
});
