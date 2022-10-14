const { devices } = require('@playwright/test');

const config = {
  testDir: './test',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  workers: 1,
  reporter: 'html',
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },

    {
      name: 'mobile_chrome',
      use: {
        ...devices['Pixel 5'],
      },
    },

    {
      name: 'mobile_safari',
      use: {
        ...devices['iPhone 12'],
      },
    },
  ],
};

module.exports = config;
