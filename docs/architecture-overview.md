# Architecture Overview

## Introduction

The Announcement Platform allows organisations, religious groups, schools, associations, and communities to send announcements to registered members through SMS and WhatsApp, with text-to-speech audio versions available via a web link.

## Workspace Layout

The repository is structured as an npm workspaces monorepo:

- `apps/web`: Frontend single-page application built with React, TypeScript, and Vite.
- `apps/api`: Backend REST API built with Node.js, Express, and TypeScript.
- `docs/`: Technical specifications and architectural documentation.

## Phase Status

- **TASK-001.1: Project Structure** (Completed)
  - Monorepo directory layout established.
  - Development and build pipelines configured.
  - Health check endpoint `/health` active on the API.
  - Placeholder landing page active on the Web client.
  - External business integrations (database, auth, SMS, WhatsApp, TTS) are intentionally deferred to subsequent tasks.
