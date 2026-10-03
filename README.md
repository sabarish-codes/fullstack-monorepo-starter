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
- [Architecture](#architecture)
- [Design & Technology](#design--technology)
- [Project Structure & Development](#project-structure--development)
- [Backend](#backend)
- [Infrastructure](#infrastructure)
- [Frontend](#frontend)
- [Deployment & Operations](#deployment--operations)
- [Project Status & Extensibility](#project-status--extensibility)
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

<a id="architecture"></a>

## 🏗️ Architecture

Visual overview of how the frontend, backend, infrastructure, and monitoring components fit together.

> Detailed architecture diagrams will be added here.

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

```bash
cp apps/api/.env.example apps/api/.env
```

Update `apps/api/.env` with your local configuration.

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
