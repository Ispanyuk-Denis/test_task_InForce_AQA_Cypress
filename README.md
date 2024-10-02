# Running Cypress Automated Tests

This repository contains automated tests written using Cypress. To run the tests, please follow these steps:

## Prerequisites

Make sure you have the following components installed:

1. **Node.js** (version 18 or higher)
2. **npm** (usually installed along with Node.js)

## Installing Dependencies

1. Clone the repository:

   ```bash
   git clone https://github.com/Ispanyuk-Denis/test_task_InForce_AQA_Cypress.git
   cd test_task_InForce_AQA_Cypress
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Running Tests

You can now run the automated tests:

### In Interactive Mode

To open Cypress in a graphical interface, run:

```bash
npx cypress open
```

This will open the Cypress window, where you can select and run tests.

### In Command Line Mode

If you want to run the tests in the background (without the graphical interface), use:

```bash
npx cypress run
```

## Additional Options

Cypress supports various flags that may be useful:

- To run a specific test:

  ```bash
  npx cypress run --spec "cypress/integration/your_test_name.js"
  ```

- To output results in HTML format:

  ```bash
  npx cypress run --reporter mocha-html
  ```

## Conclusion

You are now ready to run automated tests using Cypress in this repository. If you have any questions or issues, please check the Cypress documentation or contact the project developers.
