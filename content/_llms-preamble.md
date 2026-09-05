---
title: llms.txt preamble
description: The header spliced into dist/llms.txt by scripts/build-llms-index.mjs. The underscore keeps it out of the site; verify-prose still lints it.
---

Spacefast publishes static sites and runs apps. You can drive all of it from the
CLI, the REST API, the SDK, or MCP, with no dashboard visit required.

The sections below index every authored page. Read this header first: it covers
the things an agent needs that a link list cannot express.

## Read any page as Markdown

Add `.md` to any docs URL to get the raw Markdown instead of rendered HTML:

```
https://spacefast.com/docs/publish      ->  https://spacefast.com/docs/publish.md
```

Every authored page below works both ways. The API reference is the exception:
its Markdown is a section outline, and the operations themselves come from the
source named under Reference surfaces.

## Set up an agent

Any agent that can fetch a URL learns to publish from one prompt:

```
Fetch https://spacefast.com/setup.md
```

That page teaches a single-request publish flow that needs no CLI and no MCP
server.

For a fuller setup, install the CLI and let it configure the rest:

```bash
npm install -g spacefast
sf setup agent
```

To install only the skill:

```bash
npx -y skills add spacefast/plugins --skill spacefast -g -y
```

The raw skill Markdown is at `https://api.spacefast.com/skill` for agents that
can only fetch and import. Hosted MCP runs at `https://mcp.spacefast.com` and
signs in through browser OAuth. Per-agent instructions live at
[spacefast.com/setup](https://spacefast.com/setup).

## Search the docs

Search returns matching pages without crawling this file:

```bash
curl "https://api.spacefast.com/v1/docs/search?q=rollback"
```

Each result carries the page path, its full URL, and a summary, so you can go
straight to the Markdown.

## Reference surfaces

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
