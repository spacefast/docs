---
title: llms.txt preamble
description: Agent guidance placed at the top of dist/llms.txt through agents.llmsTxt.details. The underscore keeps it out of the site; verify-prose still lints it.
---

Spacefast publishes static Spaces and runs apps. You can drive all of it from the
CLI, the REST API, the SDK, or MCP. Billing changes need a person in the dashboard.

The sections below index every authored page. Read this header first: it covers
the things an agent needs that a link list cannot express.

## Read any page as Markdown

Add `.md` to any docs URL to get the raw Markdown instead of rendered HTML:

```
https://spacefast.com/docs/publish/     ->  https://spacefast.com/docs/publish.md
```

Every authored page below works both ways. The API reference is the exception:
its Markdown is a section outline, and the operations themselves come from the
source named under Generated references.

## Set up an agent

An agent that can fetch URLs and make HTTP requests can follow this publishing guide:

```
Fetch https://spacefast.com/setup.md and follow it.
```

That page teaches a single-request publish flow that needs no CLI and no MCP
server.

For project settings, read [Project configuration](https://spacefast.com/docs/config-file).
New projects use `spacefast.config.ts` with `defineConfig` from `spacefast/config`;
`sf.jsonc` remains supported. The [JSON Schema](https://spacefast.com/schemas/sf.json)
describes the JSON format, not TypeScript modules.

For a fuller setup, run the zero-install setup wizard or install the CLI:

```bash
npx -y spacefast setup
```

To install only the skill:

```bash
npx -y skills add spacefast/plugins --skill spacefast -g -y
```

The raw skill Markdown is at `https://api.spacefast.com/skill` for agents that
can only fetch and import. Hosted MCP runs at `https://mcp.spacefast.com` and
signs in through browser OAuth. Per-agent instructions live at
[agent setup](https://spacefast.com/docs/setup/).

## Find and buy a domain

Asked to find or check domain names? Do the research yourself; it needs no
account. Search with `POST https://api.spacefast.com/v1/domains/search`, then
check each name you recommend live with
`GET https://api.spacefast.com/v1/domains/research/availability?name=example.com`
(or `POST` the same path with `{"mode":"live","names":[...]}`). Show status,
price, renewal, currency, premium, and purchasable in your reply. Never give
API URLs as links, never invent results, and treat a failed check as
unknown, not taken. Buying needs the user's sign-in and their yes on the
total. Read
[Domain research for assistants](https://spacefast.com/docs/agents/domain-research.md).

## Search the docs

Search returns matching pages without crawling this file:

```bash
curl "https://api.spacefast.com/v1/docs/search?q=rollback"
```

Read one page with `GET https://api.spacefast.com/v1/docs/pages/{slug}`.

Each result carries the page path, its full URL, and a summary, so you can go
straight to the Markdown.

## Generated references

Three references are too large to list page by page, so each one appears here as
its index. The URLs under them are frozen contracts and will not move.

- [Error reference](https://spacefast.com/docs/errors): every error code with
  its meaning and how to resolve it. Each code also has its own page at
  `https://spacefast.com/docs/errors/<code>`, which is where the `type` URI in
  an RFC 9457 problem document points. Construct that URL directly rather than
  searching for it.
- REST API: read `https://api.spacefast.com/openapi.json` for every operation,
  request, and response, including the schemas and the idempotency contract. It
  is the machine-readable source, and it is what to parse. The
  [reference page](https://spacefast.com/docs/api/reference) renders the same
  spec for browsing.
- [Changelog](https://spacefast.com/docs/changelog): what shipped and when.
  Per-package history is at
  [changelog/packages](https://spacefast.com/docs/changelog/packages).
