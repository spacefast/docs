# Spacefast Docs

The documentation site for Spacefast, built with Blume.

The authored guides live in `content/`. API specifications, the CLI reference,
error pages, agent setup pages, npm package release history
(`generated/changelog/`), and compatibility redirects arrive as one verified
snapshot in `generated/`.

## Local development

Use Bun 1.3.11 and Node.js 24 or newer.

```bash
bun install --frozen-lockfile
```

```bash
bun run dev
```

The production checks are:

```bash
bun run check
```

```bash
bun run validate
```

```bash
bun run build
```

```bash
bun run audit
```

```bash
bun run verify:generated
```

```bash
bun run verify:public-safety
```

```bash
bun run verify:routes
```

Blume writes the static site to `dist/`. Pages emit flat at the tree root and
every URL carries the `/docs` base (`deployment.base` in `blume.config.ts`). The
Spacefast website build places this output under its own `dist/docs/` tree and
publishes one static artifact at `https://spacefast.com/docs`.

## Publishing

Merges to `main` run every Docs check, then notify the Spacefast monorepo with
the exact commit SHA. That repository owns the only production publisher: it
builds the website and this checkout together, composes the artifacts, and
publishes the resulting Website version. This repository never publishes the
Website Space directly.

## Repository safety

Treat this repository and its complete history as public. Contributor rules,
generated-file ownership, and the public-safety gate are documented in
`AGENTS.md`.
