# Testing Documentation

This directory contains all test configurations and load testing scripts for the Cargo Shipment Tracker.

## Directory Structure

```
tests/
├── load/               # Load testing with Artillery
│   ├── load-test.yml   # Artillery configuration
│   ├── processor.js    # Custom Artillery functions
│   └── test-data.csv   # Test user data
└── README.md          # This file
```

## Load Testing with Artillery

### Prerequisites
```bash
npm install -g artillery
```

### Running Load Tests
```bash
# From the tests/load directory
cd tests/load
artillery run load-test.yml

# With reporting
artillery run --output report.json load-test.yml
artillery report report.json
```

### Load Test Scenarios

1. **Health Check** (10% weight) - Verifies API availability
2. **User Authentication** (30% weight) - Tests login endpoints
3. **Get Shipments List** (40% weight) - Tests main shipment retrieval
4. **Create and Update Shipment** (15% weight) - Tests CRUD operations
5. **Get Statistics** (5% weight) - Tests analytics endpoints

### Load Test Phases

- **Warm up**: 60s @ 5 requests/second
- **Sustained load**: 120s @ 10 requests/second  
- **Peak load**: 60s @ 20 requests/second

## Backend Tests (Jest)

Located in `backend/` directory:
```bash
cd backend
npm test                # Run all tests
npm run test:watch      # Watch mode
npm run test:coverage   # With coverage
npm run test:integration # Integration tests only
```

## Frontend Tests (Vitest)

Located in `frontend/` directory:
```bash
cd frontend
npm test                # Run all tests
npm run test:watch      # Watch mode
npm run test:coverage   # With coverage
```

## E2E Tests (Cypress)

Located in `frontend/cypress/` directory:
```bash
cd frontend
npx cypress open        # Interactive mode
npx cypress run         # Headless mode
```

## CI/CD Integration

All tests are automatically run in the GitHub Actions CI/CD pipeline:
- Code quality checks (lint, format, audit)
- Unit tests with coverage
- Integration tests
- E2E tests
- Load tests (on staging)
- Security scans

See `.github/workflows/ci-cd.yml` for details.
