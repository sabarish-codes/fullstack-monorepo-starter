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

---

## ⚡ One-Minute Overview

### 🧩 What is this?

A **reusable, production-oriented full-stack foundation** that takes a project from zero to a production-shaped application. It is **provider-agnostic**: nothing ties it to a specific cloud, and external services can be swapped without redesigning the app. The foundation is built once and reused across projects.

### 🎯 Why does it exist?

Every new project repeats the same setup work:

- Project structure, monorepo, and workspace configuration
- Database, migrations, and Redis
- Error handling, validation, and security middleware
- Logging, metrics, linting, formatting, and Git hooks
- Docker, Nginx, and monitoring
- CI/CD and production deployment

This starter does that work upfront, so you can spend your time on the **product and business logic** instead.

### 🚀 What do you get?

A foundation you can **clone, configure, extend, and build on**:

> **Build the foundation once. Reuse it everywhere. Focus on your product, not repetitive setup.**

---

## 👀 Visual Overview

> Screenshots and architecture visuals will be added here after the documentation is complete.

---

## 📚 Table of Contents

- [How to Read This Starter](#how-to-read-this-starter)
- [Design & Technology](#design--technology)
- [Project Structure & Development](#project-structure--development)
- [Frontend](#frontend)
- [Backend](#backend)
- [Infrastructure](#infrastructure)
- [Deployment & Operations](#deployment--operations)
- [Current Status & Extensibility](#current-status--extensibility)
- [Contributing & Support](#contributing--support)
- [License](#license)

---

<a id="how-to-read-this-starter"></a>

## 🧭 How to Read This Starter

I built this out of frustration with setting up the same tools and configuration for every new project. So I built the foundation once and made it reusable for my own projects.

**Already have your own boilerplate? Then you've felt this pain too. 😄**

Clone it, configure the environment, remove what you don't need, and start building. Not every project needs every component.

> **Start with the foundation. Understand the decisions. Then make it yours.**

---

<a id="design--technology"></a>

## 🧩 Design & Technology

### 🎯 Design Principles

- **Type-safe:** TypeScript across the whole stack.
- **Independent deployment:** frontend, backend, and monitoring are built and deployed separately.
- **Operational visibility:** logging, health checks, metrics, and monitoring from day one.
- **Secure defaults:** common protections are on from the start.
- **Replaceable infrastructure:** swap hosting providers or external services without redesigning the app.

### 🛠️ Technology Stack

<table>
  <tr>
    <th align="center"><b>Layer</b></th>
    <th align="center"><img src="https://raw.githubusercontent.com/sabarish-codes/fullstack-monorepo-starter/main/.github/assets/spacer.png" width="600" height="1" alt="" /></th>
  </tr>
  <tr>
    <td><b>Core & Monorepo</b></td>
    <td>
      <img src="https://skillicons.dev/icons?i=ts,nodejs" height="40" alt="TypeScript, Node.js" />
      <img src="https://cdn.simpleicons.org/pnpm" height="40" alt="pnpm" />
      <img src="https://cdn.simpleicons.org/turborepo" height="40" alt="Turborepo" />
    </td>
  </tr>
  <tr>
    <td><b>Backend</b></td>
    <td>
      <img src="https://skillicons.dev/icons?i=express,postgres,redis" height="40" alt="Express, PostgreSQL, Redis" />
      <img src="https://cdn.simpleicons.org/drizzle" height="40" alt="Drizzle ORM" />
      <img src="https://cdn.simpleicons.org/zod" height="40" alt="Zod" />
      <img src="https://cdn.simpleicons.org/pino" height="40" alt="Pino" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" height="40" alt="Swagger" />
      <img src="https://skillicons.dev/icons?i=jest" height="40" alt="Jest" />
    </td>
  </tr>
  <tr>
    <td><b>Frontend</b></td>
    <td>
      <img src="https://skillicons.dev/icons?i=react,vite" height="40" alt="React, Vite" />
      <img src="https://cdn.simpleicons.org/reactrouter" height="40" alt="React Router" />
      <img src="https://cdn.simpleicons.org/axios" height="40" alt="Axios" />
      <img src="https://cdn.simpleicons.org/tanstack" height="40" alt="TanStack Query" />
      <img src="https://cdn.simpleicons.org/reacthookform" height="40" alt="React Hook Form" />
      <img src="https://cdn.simpleicons.org/shadcnui" height="40" alt="shadcn/ui" />
      <img src="https://cdn.simpleicons.org/sentry" height="40" alt="Sentry" />
    </td>
  </tr>
  <tr>
    <td><b>Infrastructure</b></td>
    <td>
      <img src="https://skillicons.dev/icons?i=docker,nginx,prometheus,grafana" height="40" alt="Docker, Nginx, Prometheus, Grafana" />
    </td>
  </tr>
  <tr>
    <td><b>Dev & Quality</b></td>
    <td>
      <img src="https://skillicons.dev/icons?i=git,github" height="40" alt="Git, GitHub" />
      <img src="https://cdn.simpleicons.org/eslint" height="40" alt="ESLint" />
      <img src="https://cdn.simpleicons.org/prettier" height="40" alt="Prettier" />
      <img src="https://cdn.simpleicons.org/githubactions" height="40" alt="GitHub Actions" />
    </td>
  </tr>
</table>

### 🔐 Security Baseline

- **Helmet:** secure HTTP response headers.
- **CORS:** controlled cross-origin API access.
- **Rate limiting:** `express-rate-limit` protects against excessive requests (in-memory store).
- **Validation:** Zod checks environment variables at startup and request data before business logic.
- **Error handling:** internal details never reach API responses.

---

<a id="project-structure--development"></a>

## 📁 Project Structure & Development

### Repository Structure

A **pnpm workspace monorepo** with independently deployable applications.

```text
fullstack-monorepo-starter/
├── apps/
│   ├── api/        # Backend API
│   └── web/        # Frontend application
├── monitoring/     # Prometheus and Grafana configuration
├── nginx/          # Reverse proxy configuration
├── .github/        # CI/CD workflows
├── docker-compose.yml
├── pnpm-workspace.yaml
├── turbo.json
└── package.json
```

### Quick Start

**Prerequisites:** Node.js `24+`, pnpm `12.6.0`, Docker with Docker Compose, Git.

Run everything from the repository root.

```bash
# 1. Clone and install
git clone https://github.com/sabarish-codes/fullstack-monorepo-starter.git
cd fullstack-monorepo-starter
pnpm install

# 2. Create environment files (then edit the values for your setup)
cp .env.example .env
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env

# 3. Start PostgreSQL, Redis, Prometheus, and Grafana
docker compose up -d

# 4. Start the API and frontend
pnpm dev
```

**Verify**

```bash
curl http://localhost:3000/check   # API responds
docker compose ps                  # containers are running
```

Then open http://localhost:5173. If all three work, the local setup is ready.

To stop the supporting services, run `docker compose down`.

### Local URLs & Ports

| Service    | URL / Port                    |
| ---------- | ----------------------------- |
| Frontend   | http://localhost:5173         |
| API        | http://localhost:3000         |
| Swagger UI | http://localhost:3000/docs    |
| Metrics    | http://localhost:3000/metrics |
| PostgreSQL | `localhost:5432`              |
| Redis      | `localhost:6379`              |
| Prometheus | http://localhost:9090         |
| Grafana    | http://localhost:3001         |

### Commands

| Command            | Description                              |
| ------------------ | ---------------------------------------- |
| `pnpm dev`         | Run API and frontend in development      |
| `pnpm build`       | Build all apps                           |
| `pnpm lint`        | Run ESLint                               |
| `pnpm typecheck`   | Run TypeScript compiler checks           |
| `pnpm test`        | Run all tests                            |
| `pnpm format`      | Format code with Prettier                |
| `pnpm db:generate` | Generate a migration from schema changes |
| `pnpm db:migrate`  | Apply migrations                         |

Husky runs lint and formatting checks on commit, so problems are caught before CI.

---

<a id="frontend"></a>

## 🎨 Frontend

A **React + Vite** app in `apps/web/`, with the core libraries and providers already wired up so you can start on features.

| Concern | Library |
| ------- | ------- |
| Routing | React Router |
| Server state | TanStack Query |
| API calls | Axios |
| Forms | React Hook Form |
| Client state | Zustand |
| UI components | shadcn/ui |
| Notifications | Sonner |
| Error monitoring | Sentry |
| Testing | Vitest + React Testing Library |

Providers are initialized in the application entry point.

*(See `apps/web/src/main.tsx`)*

---

<a id="backend"></a>

## ⚙️ Backend

A modular Express API that keeps configuration, middleware, routes, business logic, and data access separate. New modules, services, and repositories can be added as the application grows.

The backend lives in `apps/api/`, with application code in `src/` and tests in `tests/`. All paths below are relative to `apps/api/`.

### 🚀 Application & Server Lifecycle

Application setup (`app.ts`) is separate from server startup (`server.ts`):

```text
server.ts                         app.ts
├── Load & validate env     →     ├── Middleware
├── Initialize Postgres/Redis     ├── Routes
├── Create HTTP server            ├── 404 handler
├── Start listening               └── Error handler
└── Graceful shutdown
```

Because `app.ts` never starts a server, tests can import the Express app directly without opening a port.

### 🛡️ Request Pipeline

```text
Request → Security & CORS → Logging → Rate limiting → Route → Validation → Business logic → Response
                                                          │
                                         any error ───────┴──→ Central error handler
```

### 🧱 What's Included

| Concern | Implementation | Location |
| ------- | -------------- | -------- |
| Config | Zod validates env at startup; invalid config stops the server (fail-fast) | `src/config/env.ts` |
| Errors | `AppError` for expected errors, `asyncHandler` forwards async rejections, `notFound` for unmatched routes, one central handler that never leaks internals | `src/errors/`, `src/utils/asyncHandler.ts`, `src/middleware/` |
| Validation | Zod validates request body, params, and query | `src/middleware/validate.ts` |
| Database | PostgreSQL with Drizzle ORM; Drizzle Kit for migrations | `src/db/`, `drizzle/`, `drizzle.config.ts` |
| Redis | Connected at startup, disconnected on shutdown; ready for caching and temporary state | `src/config/redis.ts` |
| Logging | Pino JSON logs, Pino HTTP request logs, sensitive values redacted | `src/config/logger.ts`, `src/app.ts` |
| Metrics | Prometheus metrics at `/metrics` | `src/metrics/` |
| Health | `GET /check` for process liveness; `GET /health` for readiness (API + PostgreSQL + Redis) | `src/routes/check.ts`, `src/routes/health.ts` |
| API docs | OpenAPI spec with Swagger UI at `/docs` | `src/docs/` |
| Tests | Jest + Supertest, run against the Express app without a live server | `tests/` |

---

<a id="infrastructure"></a>

## 🐳 Infrastructure

The infrastructure pieces of the starter: local services, the API image, the reverse proxy, and monitoring. How they are arranged in production is covered in [Deployment & Operations](#deployment--operations).

### 🧩 Local Services (Docker Compose)

Locally, the API and frontend run directly on your machine with `pnpm dev`. Docker Compose runs only the supporting services: **PostgreSQL**, **Redis**, **Prometheus**, and **Grafana**. Ports are listed in [Local URLs & Ports](#project-structure--development).

*(See `docker-compose.yml`)*

### 📦 API Docker Image

The API is containerized with a multi-stage `Dockerfile`: build dependencies stay in the build stage, and the final image contains only what the API needs to run. The release workflow publishes this image to GHCR.

*(See `apps/api/Dockerfile`)*

### 🔒 Nginx

Nginx is the reverse proxy in front of the API, so the API container is never exposed directly. It terminates HTTPS and forwards requests to the API. It is not part of the local setup.

*(See `nginx/`)*

### 📊 Monitoring

```text
API (/metrics) → Prometheus (scrapes) → Grafana (dashboards)
```

- **Prometheus** scrapes the API's `/metrics` endpoint and stores the metrics.
- **Grafana** reads from Prometheus and shows them as dashboards.

Both run as containers: locally through Docker Compose, and in production as their own containerized monitoring setup.

*(See `monitoring/`)*

---

<a id="deployment--operations"></a>

## 🚀 Deployment & Operations

How the application is validated, released, and deployed. The setup is **provider-agnostic**: the hosting provider can change without changing the application.

### 🔄 CI: Validation

Runs on every push to `main` and every pull request.

```text
Push / Pull Request
        ↓
Install Dependencies
        ↓
Lint → Typecheck → Test → Build
```

A change that fails any step is caught before it is merged.

*(See `.github/workflows/ci.yml`)*

### 🚢 CD: Release

Pushing a version tag (`v*`, for example `v0.1.0`) triggers the release workflow.

```text
Version Tag (v*)
        ↓
Docker Build (API)
        ↓
Push to GHCR
        ↓
Versioned API Image
```

The image is published to GitHub Container Registry and tagged with the release version, so every deployment is reproducible and traceable:

```text
ghcr.io/sabarish-codes/fullstack-monorepo-starter/api:v0.1.0
```

Tags follow `v0.1.0`, `v0.2.0`, `v1.0.0`, and so on.

*(See `.github/workflows/` and `apps/api/Dockerfile`)*

### 🏗️ Production Architecture

Production is split into **three independent deployments**:

```text
          ┌─────────────────────────────────────┐
          │  1. FRONTEND                        │
          │  React + Vite → dist/               │
          │  Static host / CDN (no Docker)      │
          └──────────────────┬──────────────────┘
                             │ HTTPS API requests
                             ▼
┌───────────────────────────────────────────────────┐
│  2. BACKEND SERVER                                │
│                                                   │
│   Internet ──HTTPS──► Nginx ──► API               │
│                     (container)  (container)      │
│                                  (private)        │
│                                    │              │
│                          ┌─────────┴────────┐     │
│                          ▼                  ▼     │
│                     PostgreSQL            Redis   │
│                  (external provider) (external)   │
└─────────────────────────▲─────────────────────────┘
                          │ HTTPS /metrics (scraped)
┌─────────────────────────┴─────────────────────────┐
│  3. MONITORING SERVER                             │
│                                                   │
│   Prometheus (scrapes API) ──► Grafana            │
│                (containers)                       │
└───────────────────────────────────────────────────┘
```

| Deployment | What runs | How it is deployed |
| ---------- | --------- | ------------------ |
| **Frontend** | Static files built by Vite | Uploaded to a CDN or static host such as Vercel or Netlify. No Docker. |
| **Backend server** | Nginx container and API container | Nginx is the only public entry point: it terminates HTTPS and forwards to the API. The API is never exposed directly. |
| **Monitoring server** | Prometheus and Grafana containers | Runs separately from the backend. Prometheus scrapes the API's `/metrics` over HTTPS. |

**External services.** PostgreSQL and Redis do not run in the backend containers. They are external providers, and the API connects to them through environment variables validated at startup.

**Why separate deployments?** Each part can be deployed, scaled, and replaced on its own. A frontend release never touches the API, and a monitoring outage never takes down the backend.

*(See `apps/api/Dockerfile`, `nginx/`, `monitoring/production/`, and `apps/api/src/config/env.ts`)*

### ✅ Production Verification

After deploying, check:

- [ ] **Frontend** loads.
- [ ] **API** `/health` responds, which confirms PostgreSQL and Redis connectivity.
- [ ] **Frontend → API** requests succeed over HTTPS.
- [ ] **Prometheus** shows the API target as UP.
- [ ] **Grafana** displays the collected metrics.

The exact commands depend on your hosting environment and domain.

---

<a id="current-status--extensibility"></a>

## 📌 Current Status & Extensibility

### 🚧 Not Preconfigured

These depend on your real production environment, so they are left for you to set up:

- **Production database migrations**: run `pnpm db:migrate` against your production database.
- **HTTPS/TLS**: needs your domain, certificates, and hosting environment.

### 🔧 Planned Extensions

- Authentication and authorization
- Redis-backed rate limiting for multi-instance deployments
- Background jobs and queues
- Additional integrations

---

<a id="contributing--support"></a>

## 🤝 Contributing & Support

Fixes and improvements are welcome. Fork the repo, create a feature branch, run `pnpm lint`, `pnpm typecheck`, and `pnpm test` locally, then open a pull request. Please keep changes focused and follow the existing conventions.

Found a bug or have a suggestion? Open a [GitHub Issue](https://github.com/sabarish-codes/fullstack-monorepo-starter/issues).

If this starter saved you some setup time, a ⭐ is appreciated.

<p align="left">
  <a href="https://github.com/sabarish-codes/fullstack-monorepo-starter">
    <img src="https://img.shields.io/github/stars/sabarish-codes/fullstack-monorepo-starter?style=social" alt="Star on GitHub" />
  </a>
</p>

---

<a id="license"></a>

## 📄 License

Licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.
