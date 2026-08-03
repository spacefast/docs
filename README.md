# Spacefast Docs

The documentation site for Spacefast, built with Blume.

The authored guides live in `content/`. API specifications, the CLI reference,
error pages, and compatibility redirects arrive as one verified snapshot in
`generated/`.

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
bun run verify:generated
```

```bash
bun run verify:public-safety
```

```bash
bun run verify:routes
```

Blume writes the static site to `dist/`. The site is built for
`https://docs.spacefast.com` at the origin root.

## Publishing the static artifact

`public/spacefast.jsonc` is copied to the root of `dist/` during the build. Publish the
already-built directory without running another build:

```bash
sf publish dist --prebuilt
```

## Repository safety

Treat this repository and its complete history as public. Contributor rules,
generated-file ownership, and the public-safety gate are documented in
`AGENTS.md`.
