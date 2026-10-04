<div align="center">

  <h1 align="center">Full Stack Monorepo Starter</h1>

  <p align="center">
    <strong>Production-oriented full-stack foundation for building, deploying, and operating modern TypeScript applications.</strong>
  </p>

  <p align="center">
    Built with TypeScript, Node.js, pnpm, Turborepo, Express, React, PostgreSQL, Drizzle ORM, Redis, Docker, Nginx, Prometheus, Grafana, and GitHub Actions.
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=flat-square" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Node.js-24-339933?logo=nodedotjs&logoColor=white&style=flat-square" alt="Node.js 24" />
    <img src="https://img.shields.io/badge/pnpm-12-F69220?logo=pnpm&logoColor=white&style=flat-square" alt="pnpm 12" />
    <img src="https://img.shields.io/badge/Turborepo-2.11-000000?logo=turborepo&logoColor=white&style=flat-square" alt="Turborepo" />
    <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=flat-square" alt="React" />
    <img src="https://img.shields.io/badge/Express-000000?logo=express&logoColor=white&style=flat-square" alt="Express" />
    <img src="https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white&style=flat-square" alt="PostgreSQL" />
    <img src="https://img.shields.io/badge/Redis-DC382D?logo=redis&logoColor=white&style=flat-square" alt="Redis" />
    <img src="https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker&logoColor=white&style=flat-square" alt="Docker" />
    <img src="https://img.shields.io/badge/Nginx-009639?logo=nginx&logoColor=white&style=flat-square" alt="Nginx" />
    <img src="https://img.shields.io/badge/Swagger-85EA2D?logo=swagger&logoColor=black&style=flat-square" alt="Swagger API Docs" />
    <img src="https://img.shields.io/badge/Prometheus-E6522C?logo=prometheus&logoColor=white&style=flat-square" alt="Prometheus" />
    <img src="https://img.shields.io/badge/Grafana-F46800?logo=grafana&logoColor=white&style=flat-square" alt="Grafana" />
    <img src="https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white&style=flat-square" alt="ESLint" />
    <img src="https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=black&style=flat-square" alt="Prettier" />
    <img src="https://img.shields.io/badge/Husky-4A154B?style=flat-square" alt="Husky" />
    <a href="https://github.com/sabarish-codes/fullstack-monorepo-starter/releases">
      <img src="https://img.shields.io/badge/release-v0.1.0-10b981?style=flat-square" alt="Release: v0.1.0" />
    </a>
    <a href="https://github.com/sabarish-codes/fullstack-monorepo-starter/actions/workflows/ci.yml">
      <img src="https://img.shields.io/github/actions/workflow/status/sabarish-codes/fullstack-monorepo-starter/ci.yml?branch=main&label=CI%20Build&logo=githubactions&logoColor=white&style=flat-square" alt="CI Status" />
    </a>
    <a href="https://github.com/sabarish-codes/fullstack-monorepo-starter/blob/main/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square" alt="License: MIT" />
    </a>
  </p>

  <p align="center">
    <a href="https://github.com/sabarish-codes/fullstack-monorepo-starter">
      <img src="https://img.shields.io/badge/View%20Repository-181717?style=for-the-badge&logo=github&logoColor=white" alt="View Repository" />
    </a>
    <a href="https://github.com/sabarish-codes/fullstack-monorepo-starter/releases">
      <img src="https://img.shields.io/badge/View%20Releases-10b981?style=for-the-badge&logo=github&logoColor=white" alt="View Releases" />
    </a>
  </p>

</div>

## ⚡ One-Minute Overview

### 🧩 What is this?

A **reusable, production-oriented full-stack foundation** designed to take a project from **zero to a production-shaped application** without coupling the architecture to any specific **cloud provider**, eliminating repetitive setup work so the **foundation is built once and reused across projects**.

### 🎯 Why does it exist?

Starting every project from an empty repository means repeatedly setting up and configuring the same engineering foundations:

- Structuring the project
- Configuring the monorepo, workspace, and development environment
- Configuring the database, migrations, and Redis
- Setting up error handling, validation, and security middleware
- Configuring logging, metrics, linting, formatting, and Git hooks
- Containerizing the application and configuring Nginx
- Setting up monitoring
- Setting up CI/CD and preparing for production deployment

This starter provides those foundations upfront, so you can spend your time building the **actual product and business logic** instead of repeating the same setup work.

### 🚀 What do you get?

A foundation you can **clone, configure, extend, and build on**:

> **Build the foundation once. Reuse it everywhere. Focus on your product, not repetitive setup.**

---

<br><br>

## 👀 Visual Overview

> Screenshots and architecture visuals will be added here after the documentation is complete.

<br><br>

## 📚 Table of Contents

- [How to Read This Starter](#how-to-read-this-starter)
- [Design & Technology](#design--technology)
- [Project Structure & Development](#project-structure--development)
- [Backend](#backend)
- [Infrastructure](#infrastructure)
- [Frontend](#frontend)
- [Deployment & Operations](#deployment--operations)
- [Current Status & Extensibility](#current-status--extensibility)
- [Contributing](#contributing)
- [Support & Community](#support--community)
- [License](#license)

<br><br>

<a id="how-to-read-this-starter"></a>

## 🧭 How to Read This Starter

I built this starter out of **frustration** with setting up the same tools, configuration, and project foundations every time I started something new.

So I built the foundation once — and made it reusable for **my own projects**.

### 👥 Who Is This For?

Primarily for **beginner to intermediate developers** who want to understand how the pieces of a modern full-stack application fit together while avoiding repetitive setup work.

> **If you're a senior engineer, you probably know more than me already — you're probably in the wrong place. 😄**

- **As a starter:** Clone it, configure the environment, remove what you do not need, and start building.
- **As a reference:** Explore the architecture, decisions, infrastructure, and deployment setup to understand how the pieces connect.

Not every project needs every component included here. The foundation is meant to be **understood, adapted, and extended according to the project's requirements.**

> **Start with the foundation. Understand the decisions. Then make it yours.**


<br><br>

<a id="design--technology"></a>

## 🧩 Design & Technology

This section explains the technologies used in the starter, the reasoning behind the major choices, and the engineering foundations included by default.

### 🎯 Design Principles

- **Type-safe:** TypeScript is used across the application stack.
- **Clear separation:** Applications and infrastructure are kept separate.
- **Independent deployment:** Frontend and backend can be built and deployed independently.
- **Operational visibility:** Logging, health checks, metrics, and monitoring are part of the foundation.
- **Secure defaults:** Common security protections are included from the start.
- **Replaceable infrastructure:** External services and deployment providers can be changed without redesigning the application.

### 🛠️ Technology Stack

<table width="120%">
<tr>

<td width="50%" valign="top">

#### Core & Monorepo

<p>
  <img src="https://skillicons.dev/icons?i=ts,nodejs" height="45" alt="TypeScript, Node.js" />
  <img src="https://cdn.simpleicons.org/pnpm" height="45" alt="pnpm" />
  <img src="https://cdn.simpleicons.org/turborepo" height="45" alt="Turborepo" />
</p>

#### Development & Quality

<p>
  <img src="https://skillicons.dev/icons?i=git,github" height="45" alt="Git, GitHub" />
  <img src="https://cdn.simpleicons.org/eslint" height="45" alt="ESLint" />
  <img src="https://cdn.simpleicons.org/prettier" height="45" alt="Prettier" />
  <img src="https://cdn.simpleicons.org/githubactions" height="45" alt="GitHub Actions" />
</p>

#### Infrastructure & Operations

<p>
  <img src="https://skillicons.dev/icons?i=docker,nginx,prometheus,grafana" height="45" alt="Docker, Nginx, Prometheus, Grafana" />
</p>

</td>

<td width="65%" valign="top">

#### Backend

<p>
  <img src="https://skillicons.dev/icons?i=express,postgres,redis" height="45" alt="Express, PostgreSQL, Redis" />
  <img src="https://cdn.simpleicons.org/drizzle" height="45" alt="Drizzle ORM" />
  <img src="https://cdn.simpleicons.org/zod" height="45" alt="Zod" />
  <img src="https://cdn.simpleicons.org/pino" height="45" alt="Pino" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" height="45" alt="Swagger" />
  <img src="https://skillicons.dev/icons?i=jest" height="45" alt="Jest" />
</p>

#### Frontend

<p>
  <img src="https://skillicons.dev/icons?i=react,vite" height="45" alt="React, Vite" />
  <img src="https://cdn.simpleicons.org/reactrouter" height="45" alt="React Router" />
  <img src="https://cdn.simpleicons.org/axios" height="45" alt="Axios" />
  <img src="https://cdn.simpleicons.org/tanstack" height="45" alt="TanStack Query" />
  <img src="https://cdn.simpleicons.org/reacthookform" height="45" alt="React Hook Form" />
  <img src="https://cdn.simpleicons.org/shadcnui" height="45" alt="shadcn/ui" />
  <img src="https://cdn.simpleicons.org/sentry" height="45" alt="Sentry" />
</p>

</td>

</tr>
</table>

### 🔐 Security Baseline

- **Helmet** — sets secure HTTP response headers.
- **CORS** — controls cross-origin API access.
- **Rate Limiting** — protects API endpoints from excessive requests.
- **Environment Validation** — validates configuration with Zod before the server starts.
- **Input Validation** — validates incoming request data before business logic.
- **Error Handling** — avoids exposing internal implementation details in API responses.

<br><br>

<a id="project-structure--development"></a>

## 📁 Project Structure & Development

### Repository Structure

The repository is organized as a **pnpm workspace monorepo** with independently deployable applications.

```text
fullstack-monorepo-starter/
├── apps/
│   ├── api/        # Backend API
│   └── web/        # Frontend application
├── monitoring/     # Monitoring infrastructure
├── nginx/          # Reverse proxy configuration
├── .github/        # CI/CD workflows
├── docker-compose.yml
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── README.md
```

### Quick Start

#### Prerequisites

- Node.js `24+`
- pnpm `12.6.0`
- Docker with Docker Compose
- Git

#### 1. Clone the Repository

Run all commands from the repository root.

```bash
git clone https://github.com/sabarish-codes/fullstack-monorepo-starter.git
cd fullstack-monorepo-starter
```

#### 2. Install Dependencies

```bash
pnpm install
```

#### 3. Configure Environment

Create the environment files from their examples:

```bash
cp .env.example .env
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env
```

Update the three `.env` files with your local configuration.

#### 4. Start Supporting Services

```bash
docker compose up -d
```

Starts PostgreSQL, Redis, Prometheus, and Grafana.

#### 5. Start the Application

```bash
pnpm dev
```

Starts the frontend and backend from the repository root.

#### 6. Verify

```bash
curl http://localhost:3000/check
```

Check running services:

```bash
docker compose ps
```

Open the frontend:

```text
http://localhost:5173
```

If the API responds, the frontend loads, and the containers are running, the local setup is ready.

<br><br>

<a id="backend"></a>

## ⚙️ Backend

This section explains the API architecture, server lifecycle, database integration, validation, observability, and testing foundation.

### Backend Architecture

The backend follows a **modular architecture** with clear separation between application configuration, middleware, routes, business logic, data access, and infrastructure.

It provides a structured foundation without forcing a rigid application design. New modules, services, repositories, and features can be added as the application grows.

> The starter provides the foundation; the application architecture can evolve according to the project's requirements.

### 🚀 Application & Server Lifecycle

The backend separates **application setup** from **server startup**:

```text
server.ts
   │
   ├── Load & validate environment
   ├── Initialize infrastructure
   ├── Create HTTP server
   └── Start listening
            │
            ▼
          app.ts
            │
            ├── Middleware
            ├── Routes
            ├── 404 handler
            └── Error handler
```

- **`app.ts`** — configures the Express application, middleware, and routes.
- **`server.ts`** — handles environment validation, infrastructure initialization, server startup, and graceful shutdown.

This separation also keeps the Express application independently testable without starting a real HTTP server.

### 🛡️ Middleware & Request Pipeline

Requests pass through a predictable middleware pipeline before reaching application logic:

```text
Request
  ↓
Security & CORS
  ↓
Request Logging
  ↓
Rate Limiting
  ↓
Route
  ↓
Input Validation
  ↓
Business Logic
  ↓
Response
  ↓
Error Handler
```

The middleware layer handles common concerns such as security, CORS, logging, rate limiting, and request validation before the request reaches business logic.

*(See `src/middleware/` and `src/app.ts`)*

### 🚨 Error Handling

Errors are handled centrally so routes and services can focus on application logic.

- **AppError** — represents expected application errors with status codes and messages. *(See `src/errors/AppError.ts`)*
- **asyncHandler** — forwards rejected async operations to the central error handler. *(See `src/utils/asyncHandler.ts`)*
- **notFound** — handles requests that do not match any registered route. *(See `src/middleware/notFound.ts`)*
- **Error handler** — formats API errors consistently and prevents internal implementation details from being exposed. *(See `src/middleware/errorHandler.ts`)*

```text
Route / Service
      ↓
   AppError
      ↓
Central Error Handler
      ↓
Consistent API Response
```

### ✅ Validation & Configuration

Configuration and incoming request data are validated before reaching application logic.

- **Environment validation** — Zod validates required environment variables when the server starts. *(See `src/config/env.ts`)*
- **Request validation** — request bodies, parameters, and query data are validated before processing. *(See `src/middleware/validate.ts`)*
- **Fail-fast startup** — invalid environment configuration prevents the server from starting.

### 🗄️ Database & Migrations

The API uses **PostgreSQL** with **Drizzle ORM** for type-safe database access and schema management.

```text
Application
    ↓
Drizzle ORM
    ↓
PostgreSQL
```

- **Drizzle ORM** — type-safe queries and schema definitions. *(See `src/db/`)*
- **Migrations** — version-controlled database schema changes. *(See `drizzle/`)*
- **Drizzle Kit** — manages schema and migration operations. *(See `drizzle.config.ts`)*

### ⚡ Redis

Redis is included as the application's fast in-memory data store and is ready for caching, temporary state, rate limiting, and other performance-sensitive workloads.

```text
Application
    ↓
Redis Client
    ↓
Redis
```

The Redis connection is initialized during server startup and cleanly disconnected during shutdown.

*(See `src/config/redis.ts`)*

### 📊 Logging & Observability

The backend includes structured logging and application metrics to make runtime behavior easier to inspect and debug.

- **Pino** — structured JSON application logging. *(See `src/config/logger.ts`)*
- **Pino HTTP** — request-level logging. *(See `src/app.ts`)*
- **Redaction** — sensitive values are excluded from logs. *(See `src/config/logger.ts`)*
- **Prometheus metrics** — exposes application metrics through `/metrics`. *(See `src/metrics/`)*

```text
Request
  ├── Pino HTTP → Structured Logs
  └── Prometheus → Application Metrics
```

### ❤️ Health & Readiness

The API exposes a lightweight health endpoint for verifying that the service is running.

```text
GET /check
```

Useful for:

- Local development checks
- Container health checks
- Reverse proxy or load balancer checks
- Deployment verification

The endpoint provides a simple signal that the API process is responding.

*(See `src/routes/check.ts` and `src/app.ts`)*

### 📖 API Documentation

The API is documented using **OpenAPI/Swagger**.

```text
Express API
     ↓
OpenAPI Specification
     ↓
Swagger UI
```

Swagger provides an interactive interface to:

- Explore available endpoints
- View request and response schemas
- Understand API parameters
- Test endpoints during development

*(See `src/docs/` and `src/app.ts`)*

### 🧪 Testing

The backend uses **Jest** and **Supertest** for automated API testing.

- **Jest** — test runner and assertions.
- **Supertest** — tests HTTP endpoints without requiring a running server.
- Tests can be run through the monorepo from the repository root.

```text
Test
  ↓
Express App
  ↓
Route / Middleware / Logic
  ↓
Response
  ↓
Assertions
```

*(See `src/**/*.test.ts` and the API Jest configuration.)*

<br><br>

<a id="infrastructure"></a>

## 🐳 Infrastructure

Infrastructure provides the **local runtime environment and supporting services** required by the application.

It covers containerization, local services, networking, reverse proxying, and monitoring.

### 🐳 Docker

Docker containerizes the backend and provides an isolated runtime environment.

- **API** — runs the backend in a container.
- **Multi-stage build** — separates build dependencies from the production runtime.

*(See `apps/api/Dockerfile`)*

### 🧩 Docker Compose

Docker Compose runs the supporting infrastructure locally as a group of services.

```text
Docker Compose
   ├── PostgreSQL
   ├── Redis
   ├── Prometheus
   └── Grafana
```

Start the services with:

```bash
docker compose up -d
```

Stop them with:

```bash
docker compose down
```

*(See `docker-compose.yml`)*

### 🌐 Container Networking

Docker provides an internal network that allows containers to communicate with each other using their service names.

```text
API
 ├── PostgreSQL
 ├── Redis
 └── Monitoring
```

This keeps service-to-service communication independent of host-specific addresses.

*(See `docker-compose.yml`)*

### 🗄️ PostgreSQL & Redis

The starter runs PostgreSQL and Redis locally through Docker Compose.

- **PostgreSQL** — primary relational database for the API.
- **Redis** — in-memory data store for caching and other fast-access workloads.

```text
API
 ├── PostgreSQL
 └── Redis
```

*(See `docker-compose.yml` and `apps/api/src/config/`)*

### 🌐 Nginx

Nginx provides a local reverse-proxy layer for running the application in a production-like network setup.

```text
Client
   ↓
Nginx
   ↓
API
```

It allows the API to be accessed through a single entry point while the backend remains behind the proxy.

*(See `nginx/`)*

### 📊 Monitoring

The starter includes Prometheus and Grafana for monitoring the API locally.

```text
API
  │
  │ /metrics
  ▼
Prometheus
  │
  ▼
Grafana
```

- **Prometheus** — collects and stores application metrics.
- **Grafana** — visualizes those metrics through dashboards.

*(See `prometheus/`, `grafana/`, and `monitoring/`)*

#### 🔭 Prometheus

Prometheus collects metrics exposed by the API through the `/metrics` endpoint.

```text
API
  │
  │ /metrics
  ▼
Prometheus
```

*(See `prometheus/`)*

#### 📈 Grafana

Grafana connects to Prometheus and provides dashboards for viewing the collected metrics.

```text
Prometheus
     ↓
  Grafana
     ↓
Dashboards
```

*(See `grafana/`)*

<br><br>

<a id="frontend"></a>

## 🎨 Frontend

The frontend is a **React + Vite** application with the core libraries and providers configured as a starting point for building application-specific features.

### Frontend Setup

The starter includes the basic frontend foundation:

- **React + Vite** — application runtime and development tooling.
- **React Router** — client-side routing.
- **TanStack Query** — server-state management.
- **Axios** — API communication.
- **React Hook Form** — form handling.
- **Zustand** — client-side state management.
- **shadcn/ui** — reusable UI components.
- **Toasts** — user feedback for application actions.
- **Sentry** — frontend error monitoring.
- **Vitest + React Testing Library** — frontend testing.

Core providers and setup are initialized in the application entry point.

*(See `apps/web/src/main.tsx`)*

<br><br>

<a id="deployment--operations"></a>

## 🚀 Deployment & Operations

This section covers how the application is **validated, released, deployed, and monitored** in a production-oriented environment.

The setup remains **provider-agnostic**, allowing the deployment environment to be changed without changing the core application architecture.

### 🔄 CI/CD

The deployment pipeline is split into **CI for validation** and **CD for releases**.

```text
       CI
Push / Pull Request
        ↓
Install Dependencies
        ↓
      Lint
        ↓
    Typecheck
        ↓
      Test
        ↓
     Build


       CD
Version Tag (v*)
        ↓
   Docker Build
        ↓
   Push to GHCR
        ↓
Versioned API Image
```

### 🧪 Continuous Integration

GitHub Actions validates changes on:

- Pushes to `main`
- Pull requests

Checks include:

- Lint
- Typecheck
- Tests
- Build

*(See `.github/workflows/ci.yml`)*

### 🚢 Continuous Delivery

Creating a version tag such as `v0.1.0` triggers the release workflow.

The workflow:

1. Builds the API Docker image.
2. Tags the image with the release version.
3. Publishes it to GitHub Container Registry.

*(See `.github/workflows/`)*

### 🏷️ Release Strategy

Releases use version tags such as:

```text
v0.1.0
v0.2.0
v1.0.0
```

Versioned releases provide a clear and traceable deployment artifact.

### 📦 Container Registry

API images are published to **GitHub Container Registry (GHCR)**.

```text
ghcr.io/sabarish-codes/fullstack-monorepo-starter/api:v0.1.0
```

Versioned image tags keep deployments reproducible and traceable.

*(See `.github/workflows/` and `apps/api/Dockerfile`)*

### 🚀 Production Deployment

The starter uses **independent deployments** for the frontend, backend, and monitoring systems.

```text
                    PRODUCTION APPLICATION

┌──────────────────────────┐
│   Frontend Deployment    │
│                          │
│   React + Vite → dist/   │
│          ↓               │
│    Static Host / CDN     │
└────────────┬─────────────┘
             │
             │ HTTPS API requests
             ▼

┌──────────────────────────┐
│     API Deployment       │
│                          │
│  Nginx → API Container   │
│              │           │
│       ┌──────┴──────┐    │
│       ▼             ▼    │
│  PostgreSQL       Redis  │
│   (Managed)      (Managed)│
└────────────┬─────────────┘
             │
             │ HTTPS /metrics
             ▼

┌──────────────────────────┐
│ Monitoring Deployment    │
│                          │
│  Separate Monitoring     │
│       Server             │
│          │               │
│   ┌──────┴──────┐        │
│   ▼             ▼        │
│Prometheus → Grafana      │
│     │                    │
│     └─ scrapes API       │
│        /metrics          │
└──────────────────────────┘
```

- **Frontend** — built as static files and deployed independently to a static host or CDN.
- **API** — deployed independently as a Docker container behind Nginx.
- **Database & Redis** — connected to the API as external managed services.
- **Monitoring** — deployed separately from both the frontend and API.
- **Prometheus** — periodically scrapes the API's `/metrics` endpoint.
- **Grafana** — visualizes the metrics collected by Prometheus.

This separation allows each part of the system to be deployed and scaled independently.

The exact hosting provider is intentionally left open so the deployment can be adapted to different environments.

*(See `apps/api/Dockerfile`, `nginx/`, and `monitoring/production/`)*

### 🔒 Nginx & HTTPS

Nginx is the public entry point for the API.

```text
Internet
   ↓ HTTPS
Nginx
   ↓
Private API Container
```

- Terminates HTTPS/TLS.
- Forwards API traffic to the backend.
- Keeps the API container from being directly exposed.

TLS and domain configuration depend on the hosting environment.

*(See `nginx/`)*

### ☁️ External Services

Production deployments can use managed services for infrastructure that runs outside the application containers.

- **PostgreSQL** — managed database.
- **Redis** — managed in-memory data store.
- **Static Host / CDN** — serves the frontend.
- **Monitoring Server** — runs Prometheus and Grafana separately.

Service configuration is provided through environment variables.

*(See `apps/api/src/config/env.ts`)*

### ✅ Production Verification

After deployment, verify the main system components:

- **Frontend** — loads successfully.
- **API** — health endpoint responds.
- **API connectivity** — frontend can communicate with the API.
- **Monitoring** — Prometheus receives API metrics.
- **Grafana** — displays the collected metrics.

The exact verification commands depend on the hosting environment and deployed domain.

environment and deployed domain.

<br><br>

<a id="current-status--extensibility"></a>

## 📌 Current Status & Extensibility

### 🚧 Environment-Specific Setup

These are intentionally not preconfigured because they depend on the actual production environment:

- **Production database migrations** — require the project's real production database.
- **HTTPS/TLS** — requires the project's real domain, certificates, and hosting environment.

### 🔧 Future Extensions

- Authentication & authorization
- Application-specific modules and business logic
- Background jobs and queues
- Additional integrations and infrastructure

<br><br>

<a id="contributing"></a>

## 🤝 Contributing

Contributions, fixes, and improvements are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Run the checks locally.
5. Open a pull request.

Please keep changes focused and follow the existing project conventions.

<br><br>

<a id="support--community"></a>

## ⭐ Support & Community

If this starter helps you build faster or learn something useful:

- 🐛 **Report bugs** through GitHub Issues
- 💡 **Suggest improvements**
- 💬 **Share feedback**

<p align="left">
  <a href="https://github.com/sabarish-codes/fullstack-monorepo-starter">
    <img src="https://img.shields.io/github/stars/sabarish-codes/fullstack-monorepo-starter?style=social" alt="Star on GitHub" />
  </a>
</p>

<br><br>

<a id="license"></a>

## 📄 License

This project is licensed under the **MIT License**.

See the [LICENSE](./LICENSE) file for the full license text.
