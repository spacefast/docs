# Spacefast Docs

The documentation site for [Spacefast](https://spacefast.com/docs/). Guides live
in `content/`, organized into Docs, CLI, API, Agents, and Platforms tabs. Everything under
`generated/` is a verified snapshot — don't edit it by hand.

## Development

Requires Bun 1.3.11 and Node.js 24+.

```bash
bun install --frozen-lockfile
bun run dev
```

Every build fetches and validates the public pricing document from
`https://api.spacefast.com/v1/pricing`. A failed fetch or invalid document stops
the build. `SPACEFAST_API_ORIGIN` selects another API origin. The build prepares
one pricing snapshot for all tables, prose, Markdown mirrors, and search data.

For local work or CI before the endpoint is deployed, use the captured test
fixture explicitly:

```bash
export SPACEFAST_PRICING_FIXTURE=test/fixtures/pricing-document.json
bun run build
bun run test:docs
bun run verify:routes
```

The fixture is test data, never an automatic fallback. The vendored pricing
schema is checked against the generated API contract. `content/_pricing/` is
an ignored build overlay; edit the catalog that the API serves to change prices.

Before opening a PR:

```bash
bun run check
```

## Contributing

Treat this repository and its full history as public. Contributor rules and the public-safety gate are documented in [AGENTS.md](AGENTS.md).
