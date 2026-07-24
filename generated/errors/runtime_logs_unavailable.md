---
title: "runtime_logs_unavailable"
description: "Server logs are not available because Spacefast serves your space as static files."
---

Server logs are not available because Spacefast serves your space as static files.

**How to resolve:** There is no running server process to log. Use the request logs in your dashboard to inspect recent traffic.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "runtime_logs_unavailable",
    "message": "Server logs are not available because Spacefast serves your space as static files.",
    "docsUrl": "https://spacefast.com/docs/errors/runtime_logs_unavailable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
