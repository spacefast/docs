---
title: Variables
description: Manage build and runtime configuration without committing secrets.
---

Space variables hold configuration and secrets for builds and runtimes. New
values are write-only by default: the API accepts them but never prints them
back.

Set a secret:

```bash
sf env set API_TOKEN "$API_TOKEN" --space docs
```

Set a readable, non-secret value explicitly:

```bash
sf env set PUBLIC_ORIGIN https://www.example.com --no-secret --space docs
```

List variables with masked values:

```bash
sf env ls --space docs
```

Remove one:

```bash
sf env rm API_TOKEN --space docs
```

## Import and pull dotenv files

Import a dotenv file as write-only values:

```bash
sf env import .env --space docs
```

Vercel, Netlify, and Cloudflare dotenv exports use the same command with a
`--from` value:

```bash
sf env import .env --from vercel --space docs
```

Pull readable effective values into `.env.local`:

```bash
sf env pull --space docs
```

In CI, print them to stdout instead of writing a file:

```bash
sf env pull --space docs --stdout > .env
```

Spacefast refuses to overwrite an existing file unless you pass `--force`.
A pull does not turn write-only credentials back into plaintext.

## Environments and branches

One variable can carry different production, preview, and branch values:

```bash
sf env set API_ORIGIN https://api.example.com --production-value https://api.example.com --preview-value https://preview-api.example.com --space docs
```

Use `--branch-value branch=value` more than once for exact branch overrides.
Imports accept `--production`, `--preview`, and repeatable `--branch` flags.

## Runtime files

Zero and Functions projects can keep server-only values in `.env.server` next
to `sf.jsonc`. The CLI never uploads that file as a static asset. On publish it
syncs the entries into the space as secrets.

For an existing project, generate a dotenv template from detected platform
config:

```bash
sf env export-template
```

Do not commit real credentials, `.env.server`, or pulled environment files.
