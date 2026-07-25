# Spacefast Developers

The developer documentation site for Spacefast, built with Blume.

The authored guides live in `content/`. API specifications, the CLI reference,
error pages, and compatibility redirects arrive as one verified snapshot in
`generated/`.

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
bun run verify:generated
bun run verify:public-safety
bun run verify:routes
```

Blume writes the static site to `dist/`. The site is built for
`https://developers.spacefast.com` at the origin root.

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
