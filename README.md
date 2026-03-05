# Cypress Automation Project

## Overview

This project is an end-to-end testing suite built with Cypress for automating tests on a bank application. It includes both UI and API tests, utilizing TypeScript for better type safety and maintainability. The project follows the Page Object Model (POM) design pattern for UI tests to ensure clean, reusable, and maintainable code.

## Tech Stack

- **Cypress**: Main testing framework for E2E tests.
- **TypeScript**: For type-safe test scripts.
- **cypress-xpath**: Plugin for XPath selectors in Cypress.
- **Node.js**: Runtime environment.

## Project Structure

```
cypress/
├── cypress.config.ui.ts      # UI test configuration
├── cypress.config.api.ts     # API test configuration
├── tsconfig.json             # TypeScript configuration
├── e2e/
│   ├── api/                  # API test files
│   └── ui/
│       └── login/
│           └── spec.cy.ts    # UI login test
├── fixtures/
│   └── example.json          # Test data fixtures
├── support/
│   ├── commands.ts           # Custom Cypress commands
│   ├── e2e.ts                # Global test setup
│   └── pages/
│       ├── BasePage.ts       # Base page class
│       └── LoginPage.ts      # Login page object
```

## How We Worked

### Testing Model: Page Object Model (POM)

We adopted the Page Object Model for UI tests to separate test logic from page-specific code. This approach:

- **Encapsulates page elements and actions** in dedicated classes (e.g., `LoginPage.ts`).
- **Promotes reusability** by allowing multiple tests to use the same page methods.
- **Simplifies maintenance** as UI changes only require updates in one place.
- **Improves readability** of test cases by abstracting low-level interactions.

For API tests, we use direct Cypress API commands without a specific model, focusing on straightforward request/response validations.

### File Management

- **Organized Structure**: Tests are separated into `ui/` and `api/` folders for clarity.
- **Configuration Separation**: Different config files for UI and API to handle specific settings (baseUrl, specPattern).
- **Support Files**: Custom commands and page objects in `support/` for shared functionality.
- **TypeScript**: All test files use `.ts` for better development experience and error catching.
- **Version Control**: Use Git for tracking changes, with meaningful commit messages.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/iZ3B4Z/CypressAutomation.git
   cd CypressAutomation
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Verify Cypress installation**:
   ```bash
   npx cypress verify
   ```

## Setup

1. **Environment Variables**:
   - For API tests, ensure the API endpoint is accessible.
   - No additional env vars are required, but you can set `CYPRESS_ENV=api` for API tests.

2. **Browser Setup**:
   - Cypress supports multiple browsers. By default, it uses Electron.
   - To run on Chrome: `npx cypress run --browser chrome`

3. **Test Data**:
   - Fixtures are in `cypress/fixtures/`. Update `example.json` with your test data.

## Running Tests

### Open Cypress Test Runner (Interactive)

- **UI Tests**:
  ```bash
  npx cypress open
  ```
  This opens the Cypress UI, and you can select tests from `cypress/e2e/ui/`.

- **API Tests**:
  ```bash
  CYPRESS_ENV=api npx cypress open
  ```

### Run Tests Headlessly

- **UI Tests**:
  ```bash
  npx cypress run
  ```

- **API Tests**:
  ```bash
  CYPRESS_ENV=api npx cypress run
  ```

### Custom Scripts (if added to package.json)

If scripts are added:
- `npm run cy:open:ui` for UI
- `npm run cy:open:api` for API

## Onboarding for New Team Members

1. **Get Familiar with Cypress**:
   - Read the [Cypress Documentation](https://docs.cypress.io/).
   - Understand basic commands: `cy.visit()`, `cy.get()`, `cy.click()`, etc.

2. **Understand the Project Structure**:
   - Review the folder layout above.
   - Look at `BasePage.ts` and `LoginPage.ts` to see POM in action.

3. **Run Your First Test**:
   - Follow the installation and setup steps.
   - Open Cypress and run the login test.

4. **Writing New Tests**:
   - For UI: Create a new page class in `support/pages/`, extend `BasePage`.
   - For API: Add test files in `e2e/api/`.
   - Use TypeScript for all new code.

5. **Best Practices**:
   - Avoid flaky tests by using proper waits and assertions.
   - Keep tests independent.
   - Use descriptive test names and comments.

6. **Contributing**:
   - Create a feature branch for changes.
   - Write tests for new features.
   - Run all tests before pushing.



