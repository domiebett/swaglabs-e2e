# Swaglabs End-to-End Testing Framework

This project is an end-to-end testing framework written using [Playwright](https://playwright.dev/) and TypeScript. It is designed to automate the testing of the Swaglabs application.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 14.x or higher)
- npm (version 6.x or higher) or yarn (version 1.x or higher)

## Installation

To set up the project, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/swaglabs-e2e.git
   cd swaglabs-e2e
   ```

2. Install the dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

3. Create an `.env` file and copy the contents of `env.example` into it:

   ```sh
   cp env.example .env
   ```

4. Fill in the appropriate variables in the `.env` file:
   - `STANDARD_USERNAME`: The username for logging into the application
   - `STANDARD_PASSWORD`: The password for logging into the application

## Running the Tests

To run the tests, use the following command:

```sh
npx playwright test
```

This will execute all the tests in the `e2e/tests` directory.

## Continuous Integration (CI) Implementation

The project uses GitHub Actions to run end-to-end tests automatically on each push or pull request to the `main` branch. The CI workflow is defined in the `.github/workflows/e2e.yml` file. It performs these actions:

1. Run end-to-end tests using Playwright.
2. Upload the Playwright HTML report as an artifact.

Additionally, the workflow deploys the Playwright report to GitHub Pages for easy access.

## HTML Test Reports

The HTML test reports generated by Playwright are automatically published to GitHub Pages. You can access the latest test reports at the following URL:

```
https://domiebett.github.io/swaglabs-e2e/
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.
