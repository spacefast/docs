---
search:
  tags: [env, environment-variables, secrets]
title: Variables
description: Manage build and runtime configuration without committing secrets.
---

Space variables hold configuration and secrets for builds and runtimes. New
values are write-only by default. The API accepts them but never prints
them back.

To set a secret, pipe the value in so it never reaches shell history or the
process list:

```bash
printf %s "$API_TOKEN" | sf env set API_TOKEN --value-from-stdin --space docs
```

To set a non-secret value, pass `--no-secret`:

```bash
sf env set PUBLIC_ORIGIN https://www.example.com --no-secret --space docs
```

List variables with masked values, or remove one:

```bash
sf env ls --space docs
```

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

Unless you pass `--force`, Spacefast refuses to overwrite an existing file.
A pull never turns write-only credentials back into plaintext.

## Environments and branches

One variable can carry different production, preview, and branch values:

```bash
sf env set API_ORIGIN https://api.example.com --production-value https://api.example.com --preview-value https://preview-api.example.com --space docs
```

Use `--branch-value branch=value` more than once for exact branch
overrides. Imports accept `--production`, `--preview`, and repeatable
`--branch` flags.

## Team variables

Teams can hold shared variables that spaces inherit, and a space value
overrides the team value with the same name. Manage them in the dashboard
under the team's **Settings → Developer → Variables**; `sf env` targets a
space.

## Templates

Spacefast can substitute non-secret variables into published files. List the
files in `sf.jsonc` under [`templates`](/serve/settings#templates), then
reference values as `{{ vars.NAME }}`:

```js
// config.js, listed in templates
const API_ORIGIN = "{{ vars.API_ORIGIN }}";
```

Substitution happens at publish. Templates refuse secrets, and a template
that references one fails the publish with
[`secret_variable_in_template`](/errors/secret_variable_in_template).
[`_redirects`](/serve/redirects) destinations resolve `{{ vars.NAME }}` the
same way.

## Runtime files

Zero and Functions projects can keep server-only values in `.env.server`
next to `sf.jsonc`. The CLI never uploads that file as a static asset; on
publish it syncs the entries into the space as secrets.

For an existing project, generate a dotenv template from detected platform
config:

```bash
sf env export-template
```

Do not commit real credentials, `.env.server`, or pulled environment files.
