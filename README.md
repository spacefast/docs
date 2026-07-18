# Spacefast Docs

The public documentation site for Spacefast, built with Blume 1.0.4.

This bootstrap starts small on purpose: an overview, a focused quickstart, and
scaffolding for the reference sections that follow. Missing sections are not
placeholder pages. They land when their public source is ready.

## Local development

Use Bun 1.3.11 and Node.js 24 or newer.

```bash
bun install --frozen-lockfile
bun run dev
```

The production checks are:

```bash
bun run check
bun run validate
bun run build
bun run verify:public-safety
bun run verify:routes
```

Blume writes the static site to `dist/`. The site is built for
`https://spacefast.com/docs`; `deployment.base` supplies the `/docs` host prefix,
so the physical overview remains `dist/index.html` rather than
`dist/docs/index.html`.

## Publishing the static artifact

`public/sf.jsonc` is copied to the root of `dist/` during the build. Publish the
already-built directory without running another build:

```bash
sf publish dist --prebuilt
```

## Repository safety

Treat this repository and its complete history as public. Contributor rules,
generated-file ownership, and the public-safety gate are documented in
`AGENTS.md`.
