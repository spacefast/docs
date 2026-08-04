---
title: Publish as an agent
description: The one-call publish flow, the receipt fields that matter, and how to keep publishing after a space is claimed.
---

Use one curl call for a publish. Use the [CLI](/cli) for the full surface. Both
produce the same receipt.

## Publish with curl

```bash
curl -F "files=@index.html" https://api.spacefast.com/v1/publish
```

To publish a folder, zip it first. Send it as `-F archive=@site.zip`. The
response is `{ "data": <receipt> }`. The receipt contains everything that
matters:

- `data.space.liveUrl` — the live site.
- `data.version.immutableUrl` — the exact thing just published, frozen. It is
  reserved in the initial receipt. If the publish is still finalizing, poll
  `data.links.status` until the version status is `ready` before sharing it.
- `data.claim.url` and `data.claim.expiresAt` — anonymous spaces expire unless
  claimed within 6 hours. Always show the user the claim link and the deadline.
- `data.shareBlurb` — a paste-ready one-liner with the URL and claim nudge.
  Relay it verbatim.

For anonymous spaces, send the receipt's `data.claim.token` as
`Authorization: Bearer <claim-token>` when you poll `data.links.status`, read
`data.links.inspect` / `data.links.version`, finalize uploads, or update the
same `spaceId`. Never print the token back to the user. Errors come back as
JSON with stable `code` values and a `docsUrl` for recovery steps.

## Continue after claim

Claiming ends the claim token's publish rights. When the owner keeps agent
continuation on (the default at claim time), the token becomes a one-time
exchange voucher. The next publish with it fails with an error that points
here. Call `POST /v1/anonymous-claim/exchange` with the same bearer auth. Trade
the token once for a durable, publish-only API key scoped to that space. Save
the key to `.spacefast/state.json`. Retry the publish with the new key as the
bearer credential. The owner can see and revoke the key under Account → Access
tokens. If they turned continuation off, ask them to mint an access token in
the dashboard instead.

## Agent-safe behavior

- Incremental uploads send only changed files after the first publish.
- Finalize is the completion boundary for live publishes. Upload URLs can be
  refreshed without restarting a version.
- Space metadata, password protection, and SPA mode survive redeploys.
- Plan limits surface as diagnostics: publish the intended artifact, then read
  and report what the API or CLI says.
- Never print claim tokens, API keys, or `.spacefast/state.json` contents into
  transcripts.

Use `--json` on any CLI command when the output will be parsed. Publishing the
same directory again updates the space saved in `.spacefast/state.json`.

## Related

- [Set up an agent](/agents) — CLI, skill, and MCP in one command.
- [Auth and accounts](/agents/accounts) — which credential to use where.
- [REST API guide](/api) — the envelope, idempotency, and the granular flow.
