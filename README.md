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

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.
