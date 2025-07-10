# Calculator Implementation Process

This document summarizes the steps taken to build the calculator application found in this repository. The process largely followed the workflow described in `README.md` and can also be traced through the Git commit history.

## 1. Project Setup
- The repository was initialized with a `README.md` outlining the intended workflow and technology stack.
- Commit [`8652bee`](https://example.com/commit/8652bee) added this initial documentation.

## 2. Building the User Interface
- Based on a Figma design, the basic calculator UI was implemented using HTML and CSS.
- Files `index.html` and `styles.css` were introduced.
- See commit [`957d1b9`](https://example.com/commit/957d1b9) for the UI addition.

## 3. Implementing JavaScript Logic
- A simple `calculate` function was created in `script.js` to evaluate expressions.
- Event listeners were wired up so that buttons update the display and perform calculations.
- Commit [`21d2765`](https://example.com/commit/21d2765) contains the initial JavaScript logic.

## 4. Adding Unit Tests
- Jest was configured for JavaScript unit tests.
- Tests in `__tests__/calculator.test.js` verify basic arithmetic operations.
- This work was introduced in commit [`85c6ec8`](https://example.com/commit/85c6ec8).

## 5. Adding Feature Tests with Selenium
- Selenium-based tests in `tests/test_calculator.py` simulate user interactions via a headless Chrome browser.
- These tests ensure the calculator works correctly in the browser.
- See commit [`34cbb0e`](https://example.com/commit/34cbb0e) for the feature tests.

## 6. Current State
- The latest merge commit consolidates the feature tests and completes the basic calculator implementation.

To reproduce or extend this process, review the commit history and the files referenced above.
