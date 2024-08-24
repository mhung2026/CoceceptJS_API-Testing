# CodeceptJS API Testing
This project is designed to perform automated API testing using [CodeceptJS](https://codecept.io/). It provides a comprehensive setup for testing APIs with various scenarios to ensure the reliability and accuracy of the API responses.
## Project Structure
**tests/**
This directory contains all the test files. Each test file is responsible for testing a specific API endpoint or a group of related endpoints.

**output/**
This directory stores the test reports and screenshots (if any) generated after the tests are executed.

**codecept.conf.js**
This is the configuration file for CodeceptJS. It includes settings for the test runner, helpers, plugins, and more.

**package.json**
This file manages the project's dependencies and scripts
## Installation
1. **Clone the repository:**
  ```bash
  git clone https://github.com/your-username/CodeceptJS_API-Testing.git
  cd CodeceptJS_API-Testing
  ```
2. **Install dependencies:**

  ```bash
  npm i codeceptjs --save-dev
  ```
## Running Tests
1. **Run all tests:**
   ```bash
   npx codeceptjs run --steps
   ```
2. **Run a specific test file:**
   ```bash
   npx codeceptjs run tests/your-test-file.js --steps

   ```

3. **Generate a test report:**
   - After running the tests, you can view the report in the *output/ directory.*
## Writing Tests
1. **Create a new test file:**

   - Add a new JavaScript file in the tests/ directory with the .js extension.
   - Use the CodeceptJS syntax to define your test cases.
   - Example Test:
      ```code
      Scenario('Valid Input for an Adult', async ({ I }) => {
        const response = await I.sendPostRequest('/calculateBMI', {
          weight: 75,
          height: 180,
          age: 25,
          gender: true
        });
        I.seeResponseCodeIsSuccessful();
        I.seeResponseContainsJson({
          message: 'BMI calculation successful',
          weight: 75,
          height: 180,
          gender: 'Male',
          age: 25,
          bmiValue: 23.15,
          category: 'Normal'
        });
        console.log(response.statusText, response.data);
      });
      ```
    - Example API: [API_BMI](https://github.com/mhung2026/API_BMI)
2. Configuration
   - Update codecept.conf.js:
     - Configure the base URL, headers, and other settings in the codecept.conf.js file to match your API requirements.


