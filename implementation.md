# Backend Implementation Plan

## 1. Overview
The goal is to migrate the e-commerce application from a serverless architecture (using Netlify Functions) to a minimal, distributed, and scalable production-ready backend. 

## 2. Architecture Components
- **API Gateway / Load Balancer**: Nginx (or an Express API Gateway) to route external traffic to appropriate microservices and handle load balancing.
- **Microservices**:
  - **Product Service**: Handles fetching, searching, and managing product data (migrated from Airtable).
  - **Payment & Order Service**: Handles checkout processes and Stripe integrations.
- **Message Queue**: Redis (via BullMQ) or RabbitMQ to manage asynchronous tasks such as sending confirmation emails and processing heavy background jobs.
- **Database**: PostgreSQL (or MongoDB) replacing Airtable for data persistence.

## 3. Technology Stack
- **Runtime**: Node.js with Express.js or Fastify
- **Database**: PostgreSQL with Prisma ORM
- **Message Broker**: Redis (via BullMQ)
- **Payment Processing**: Stripe API
- **Containerization**: Docker & Docker Compose for local orchestration and deployment

## 4. Implementation Steps
### Phase 1: Setup & Scaffolding
1. Initialize the backend infrastructure (e.g., inside a `/backend` directory).
2. Set up `docker-compose.yml` with the required infrastructure: Nginx, PostgreSQL, Redis, and empty Node.js services.

### Phase 2: Core Services Development
1. **Product Service**: Migrate the existing data retrieval logic from Airtable functions. Connect to PostgreSQL and expose REST endpoints (`GET /api/products`, `GET /api/products/:id`).
2. **Payment Service**: Migrate Stripe logic from `functions/create-payment-intent.js`. Expose `POST /api/create-payment-intent`.

### Phase 3: Message Queue Integration
1. Set up BullMQ with Redis.
2. Create background workers for post-purchase actions (e.g., `send-confirmation-email`, `inventory-update`).
3. Dispatch these jobs from the Payment Service after a successful Stripe payment webhook is received.

### Phase 4: API Gateway Configuration
1. Configure Nginx (`nginx.conf`) to route `/api/products/*` to the Product Service and `/api/checkout/*` to the Payment Service.
2. Update frontend `.env` to point to the new Nginx Gateway instead of the Netlify Functions URLs.

### Phase 5: Testing & Refinement
1. Verify the end-to-end checkout flow locally using Docker.
2. Ensure the frontend gracefully handles any altered API responses or latency.
