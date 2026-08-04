---
title: "agent_handoff_origin_unsupported"
description: "The dashboard origin this deployment is configured with cannot mint canonical agent handoff links."
---

The dashboard origin this deployment is configured with cannot mint canonical agent handoff links.

**How to resolve:** Point SPACEFAST_DASHBOARD_URL at a valid HTTP(S) origin. If you cannot change it, contact support.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`.

- `code` is stable and machine-readable.
- `type` links to this page.
- `title` is a short label.
- `status` repeats the HTTP status.
- `detail` explains this occurrence.
- `pointer`, when present, is an RFC 6901 JSON Pointer at the offending field in the request body.
- `details`, when present, carries structured context.

Match on `code`, never on `detail`.

```json
{
  "type": "https://spacefast.com/docs/errors/agent_handoff_origin_unsupported",
  "title": "Agent handoff origin unsupported",
  "status": 400,
  "detail": "The dashboard origin this deployment is configured with cannot mint canonical agent handoff links.",
  "code": "agent_handoff_origin_unsupported",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
