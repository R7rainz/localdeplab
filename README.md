# Local deployment lab

A tiny Bun web app for practicing Git, Docker, secrets and deployment concepts.

## Run it directly

```bash
bun run src/server.ts
```

Open <http://localhost:3000> and check <http://localhost:3000/health>.

## Run the tests

```bash
bun test
```

## Run it with Docker

```bash
cp .env.example .env
docker compose up --build
```

Then open <http://localhost:3000>. Change `APP_GREETING` in `.env` and restart
the container to see configuration flow into the app.

## How this maps to the three tools

- **OpenHands:** ask it to add a small feature or test, then review the diff.
- **Dokploy:** later deploy this same Docker setup to a VPS.
- **Infisical:** later replace the local `.env` value with a centrally managed value.
