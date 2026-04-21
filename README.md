A production-grade E2E test automation framework built with Playwright + JavaScript using the Page Object Model (POM) design pattern.

👤 Author
Abhishek VH — QA Automation Engineer
LinkedIn | abhishekit7800@gmail.com

🧪 Tech Stack
ToolVersionPlaywright^1.59.1JavaScript (CommonJS)ES6+Node.js18+BrowserChromium

📁 Project Structure
pw-basic/
├── demoblazePages/          # Page Object classes
│   ├── LoginPage.js         # Login page actions
│   ├── HomePage.js          # Homepage + product selection
│   └── CartPage.js          # Cart validation + cleanup
├── e2e/                     # Test spec files
│   ├── Pomdemoblaze.spec.js # E2E purchase flow test
│   ├── login1.spec.js       # Login tests
│   └── ...                  # Other test files
├── uploadfiles/             # Test data files
├── .gitignore
├── package.json
└── playwright.config.js     # Playwright configuration

✅ Test Coverage
FeatureStatusUser Login✅Product Search & Selection✅Add to Cart✅Cart Validation✅Alert Handling✅Screenshot on Failure✅Video Recording✅Trace Viewer✅

🚀 Getting Started
Prerequisites

Node.js 18+
VS Code

Installation
bash# Clone the repo
git clone https://github.com/Abhishekhegdevh/pw-basic.git

# Go into project
cd pw-basic

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

▶️ Running Tests
# Run all tests
npx playwright test

# Run specific file
npx playwright test Pomdemoblaze.spec.js

# Run with browser visible
npx playwright test --headed

# Run on specific browser
npx playwright test --project=chromium

# Debug mode
npx playwright test --debug

📊 Reports
bash# View HTML report
npx playwright show-report

# View trace on failure
npx playwright show-trace test-results/<folder>/trace.zip

 Application Under Test
Demoblaze — https://www.demoblaze.com
An e-commerce demo store used for automation practice.
 Key Concepts Covered

Page Object Model (POM)
Async/Await
XPath + CSS Locators
Dialog/Alert handling
Screenshot, Video & Trace reporting
beforeEach / afterAll hooks
Test isolation (cart cleanup)
Git version control

