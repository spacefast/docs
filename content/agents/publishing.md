---
title: Publish as an agent
description: The one-call publish flow, the receipt fields that matter, and how to keep publishing after a space is claimed.
---

One curl call publishes; the [CLI](/cli) covers the full surface. Both
produce the same receipt.

## Publish with curl

```bash
curl -F "files=@index.html" https://api.spacefast.com/v1/publish
```

To publish a folder, zip it first. Send it as `-F archive=@site.zip`. The
response is a JSON envelope; `data` is the receipt, and it contains everything
that matters:

- **`data.space.liveUrl`**: the live site.
- **`data.version.immutableUrl`**: the published bytes, frozen, reserved in
  the initial receipt. Poll `data.links.status` until the version status is
  `ready` before sharing it.
- **`data.claim.claimUrl`** and **`data.claim.expiresAt`**: anonymous spaces
  expire unless claimed within 6 hours. Always show the user the claim link and
  the deadline. `data.claim.url` is the site link, the same key in the live
  URL's path, so they can look at the space first.
- **`data.shareBlurb`**: a paste-ready one-liner with the URL and claim nudge.
  Relay it verbatim.

For anonymous spaces, `data.claim.key` (`sfc_…`) is the space key. Send it as
`Authorization: Bearer sfc_…` when you poll `data.links.status`, read
`data.links.inspect` / `data.links.version`, finalize uploads, or update the
same `spaceId`; it authorizes every other operation on the space too, including
delete and restore. Hand the user the claim link, never the bare key. Errors
come back as problem documents with stable `code` values and a `type` URL for
recovery steps.

## Continue after claim

Claiming ends the space key's publish rights. When the owner keeps agent
continuation on (the default at claim time), the key becomes a one-time
exchange voucher, and the next publish with it fails with an error that points
here. CLI agents run [`sf continue`](/cli#sf-continue) to exchange the saved key
for a durable space access token in one command. API-only agents:

1. Call `POST /v1/claim/exchange` with the same bearer auth to trade the key
   once for a durable, publish-only API key scoped to that space.
2. Save the key to `.spacefast/state.json`.
3. Retry the publish with the new key as the bearer credential.

The owner can see and revoke the key under **Account → Access tokens**. If
they turned continuation off, ask them to mint an access token in the
dashboard instead.

## Agent-safe behavior

- Incremental uploads send only changed files after the first publish.
- Finalize is the completion boundary for live publishes. Refresh upload URLs
  without restarting a version.
- Space metadata, access settings, and SPA mode survive redeploys.
- Plan limits surface as diagnostics: publish the intended artifact, then read
  and report what the API or CLI says.
- Never print secrets into transcripts; the full rules live in
  [Auth and accounts](/agents#auth-and-accounts).

Use `--json` on any CLI command when you parse the output, for example
`sf publish --json` for repeat local updates. Publishing the same directory
again updates the space saved in `.spacefast/state.json`.

## Related

- **[Set up an agent](/agents)**: CLI, skill, and MCP in one command.
- **[Auth and accounts](/agents#auth-and-accounts)**: which credential to use
  where.
- **[REST API guide](/api)**: the envelope, idempotency, and the granular
  flow.
