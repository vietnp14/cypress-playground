import { defineConfig } from 'cypress';
import { cloudPlugin } from 'cypress-cloud/plugin';

export default defineConfig({
  projectId: 'cypress-playground',
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
  scrollBehavior: false,
  numTestsKeptInMemory: 20,
  e2e: {
    setupNodeEvents(on, config) {
      return cloudPlugin(on, config);
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
