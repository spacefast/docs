---
title: llms.txt preamble
description: Agent guidance placed at the top of dist/llms.txt through agents.llmsTxt.details. The underscore keeps it out of the site; verify-prose still lints it.
---

Spacefast is the build companion and infrastructure for people and AI agents: one Space combines static files, collections, server actions, MySQL, Workers, object storage, transactional email, crons, connectors, custom domains, and sharing—all configured in `spacefast.config.ts` and driven through the CLI, REST API, SDK, MCP, or Poppy. Billing changes require a person in the dashboard.

Read this header first: it gives you the exact machine-readable endpoints, setup paths, and reference pointers before the authored page index.

## Read any page as Markdown

Add `.md` to any docs URL to get raw Markdown without HTML chrome:

```text
https://spacefast.com/docs/publish/     ->  https://spacefast.com/docs/publish.md
```

Every authored page works both ways. For the OpenAPI references, parse the machine-readable specs below instead of scraping HTML.

## Machine-readable endpoints

| Need | Endpoint |
| --- | --- |
| Full docs corpus (all pages) | `https://spacefast.com/docs/llms-full.txt` |
| REST API OpenAPI spec | `https://api.spacefast.com/openapi.json` |
| Partner API OpenAPI spec | `https://api.spacefast.com/partner/openapi.json` |
| Agent onboarding playbook | `https://spacefast.com/setup.md` |
| HTTP publish contract | `https://spacefast.com/publish-spec.json` |
| Raw Spacefast skill | `https://api.spacefast.com/skill` |
| Hosted MCP server (OAuth) | `https://mcp.spacefast.com` |
| Poppy discovery (per Space) | `https://<space-host>/.well-known/poppy.json` |
| Search docs by keyword | `GET https://api.spacefast.com/v1/docs/search?q=<query>` |
| Read one docs page by slug | `GET https://api.spacefast.com/v1/docs/pages/{slug}` |
| Ask docs endpoint | `POST https://api.spacefast.com/v1/docs/ask` |

## Task-to-reference pointers

- **Exact CLI flags, exit codes, and anchors:** [CLI overview](https://spacefast.com/docs/cli.md) and [CLI reference](https://spacefast.com/docs/cli/reference.md).
- **Exact `spacefast.config.ts` keys and `sf.jsonc` fallback:** [Project configuration](https://spacefast.com/docs/config-file.md). New projects use `spacefast.config.ts` with `defineConfig` from `spacefast/config`; `sf.jsonc` remains permanently supported.
- **Exact RFC 9457 error codes:** construct `https://spacefast.com/docs/errors/<code>.md` directly from the problem document's `code`, or browse the [Error reference](https://spacefast.com/docs/errors.md).
- **Exact plan allowances and caps:** [Pricing and limits](https://spacefast.com/docs/pricing.md) and [Limits](https://spacefast.com/docs/limits.md).
- **HTTP request schemas and idempotency:** parse `https://api.spacefast.com/openapi.json`, or browse [REST API](https://spacefast.com/docs/api.md) and [API reference](https://spacefast.com/docs/api/reference).
- **Per-client agent setup and connection methods:** [Agent setup](https://spacefast.com/docs/setup/) and [Ways to connect](https://spacefast.com/docs/connect/).

## Set up an agent

Any agent that can fetch URLs and make HTTP requests can follow:

```text
Fetch https://spacefast.com/setup.md and follow it.
```

That guide distinguishes connected MCP/CLI clients, anonymous HTTP publishing (via `https://spacefast.com/publish-spec.json`), and full-stack Space apps.

For coding agents in a terminal, run the zero-install setup wizard or install the plugin/skill:

```bash
npx -y spacefast setup
npx -y skills add spacefast/plugins --skill spacefast -g -y
```

## Find and buy a domain

Asked to find or check domain names? Do the research yourself; it needs no account. Search with `POST https://api.spacefast.com/v1/domains/search`, then check each recommended name live with `GET https://api.spacefast.com/v1/domains/research/availability?name=example.com` (or `POST` the same path with `{"mode":"live","names":[...]}`). Show status, price, renewal, currency, premium, and purchasable in your reply. Never give API URLs as links, never invent results, and treat a failed check as unknown, not taken. Buying requires the user's sign-in and confirmation of the total. Read [Domain research for assistants](https://spacefast.com/docs/agents/domain-research.md).

## Search the docs

Search returns matching pages without crawling this index:

```bash
curl "https://api.spacefast.com/v1/docs/search?q=rollback"
```

Read one page with `GET https://api.spacefast.com/v1/docs/pages/{slug}`. Each result carries the page path, full URL, and summary.

## Generated references

Large generated families appear as their index pages below so this index stays concise; their URLs are frozen contracts:

- [Error reference](https://spacefast.com/docs/errors): every error code and resolution (`https://spacefast.com/docs/errors/<code>`).
- [API reference](https://spacefast.com/docs/api/reference): browsable REST API (`https://api.spacefast.com/openapi.json` for machine parsing).
- [Changelog](https://spacefast.com/docs/changelog): release timeline, with per-package history linked from it.
- [Agent setup](https://spacefast.com/docs/setup) and [Ways to connect](https://spacefast.com/docs/connect): generated per-agent setup pages and connection methods.
