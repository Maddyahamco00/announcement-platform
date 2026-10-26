# Announcement Platform

An announcement platform that allows organisations, religious groups, schools, associations, and communities to send announcements to registered members through SMS and WhatsApp.

**Core promise:** Create an announcement once, deliver it through SMS and WhatsApp, and let recipients read or listen to it using a link (with text-to-speech audio generation).

> [!NOTE]
> **Foundation Only:** This repository is currently at the foundation stage (**TASK-001.1: Project Structure**). Business logic, authentication, database schemas, messaging providers, and audio synthesis will be implemented in subsequent phases.

---

## Architecture Overview

This project is organized as an npm workspaces monorepo:

- **Frontend (`apps/web`):** React 18, TypeScript, and Vite.
- **Backend (`apps/api`):** Node.js, Express, and TypeScript.
- **Package Manager:** npm (workspaces enabled).

```text
announcement-platform/
├── apps/
│   ├── web/          # React + Vite frontend application
│   └── api/          # Express + TypeScript API server
├── docs/             # Project documentation
├── .env.example      # Environment variables template
├── .gitignore        # Git ignore rules
├── package.json      # Root workspace configuration
└── README.md         # Project documentation
```

---

## Prerequisites

- **Node.js:** `>= 20.0.0` (LTS recommended, tested on Node v22)
- **npm:** `>= 10.0.0`
- **Git**

---

## Installation

From the repository root, install dependencies for all workspaces:

```bash
npm install
```

---

## Running in Development

### Backend API
To run the backend API server in watch mode:

```bash
npm run dev:api
```
The API server starts at `http://localhost:3000`.

### Frontend Web
To run the Vite development server:

```bash
npm run dev:web
```
The web application is accessible at `http://localhost:5173`.

---

## Health Check Endpoint

Verify that the backend API is operational:

- **URL:** `http://localhost:3000/health`
- **Method:** `GET`
- **Sample Response:**
  ```json
  {
    "status": "ok",
    "service": "announcement-platform-api"
  }
  ```

---

## Building for Production

### Build Both Applications
```bash
npm run build
```

### Build Frontend Only
```bash
npm run build:web
```
Build output is generated in `apps/web/dist/`.

### Build Backend Only
```bash
npm run build:api
```
TypeScript compilation output is generated in `apps/api/dist/`.

---

## Environment Configuration

A template is provided in [`.env.example`](.env.example):

```dotenv
NODE_ENV=development
API_PORT=3000
WEB_PORT=5173
```

Copy `.env.example` to `.env` if local overrides are needed:

```bash
cp .env.example .env
```
All `.env` files are ignored by git to prevent secret leakage.
