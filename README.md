# Portfolio Next

Personal portfolio website for Mohamed El Amine Meghni, built with Next.js App Router.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- `lucide-react` icons
- React Compiler enabled (`reactCompiler: true`)

## Local Development

### Prerequisites

- Node.js 22+ (recommended to match the Docker image)
- npm

### Install and run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

```bash
npm run dev       # Start dev server (Turbopack)
npm run build     # Production build (Webpack)
npm run start     # Run production server
npm run lint      # ESLint
npm run typecheck # TypeScript check (no emit)
```

## Project Structure

```text
src/
  app/                 # App Router pages, metadata routes, global styles
  components/sections/ # Portfolio sections (Hero, About, Skills, etc.)
  components/ui/       # Shared UI components
  data/                # Content data (projects, experience, skills)
  lib/                 # Constants and utility helpers
public/                # Static assets (images, resume)
docs/                  # Product/spec documentation
```

## Production (Docker)

Build and run locally with Docker Compose:

```bash
docker compose up --build -d
```

The app runs on `http://localhost:3000`.

## Deployment Workflow

GitHub Actions deploys on pushes to `main` via `.github/workflows/deploy.yml`:

1. SSH into VPS
2. Clone/pull repository at `/srv/portfolio`
3. Rebuild Docker image
4. Restart services with `docker compose up -d`

Required repository secrets:

- `VPS_HOST`
- `VPS_USER`
- `VPS_SSH_KEY`
