---
title: "connector_policy_blocked"
description: "The effective team connector policy blocks this connector."
---

The effective team connector policy blocks this connector.

**How to resolve:** Ask a team admin to inspect the team connector policy and controlling parent. A sub-team cannot override an inherited policy.

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
  "type": "https://spacefast.com/docs/errors/connector_policy_blocked",
  "title": "Connector policy blocked",
  "status": 400,
  "detail": "The effective team connector policy blocks this connector.",
  "code": "connector_policy_blocked",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
