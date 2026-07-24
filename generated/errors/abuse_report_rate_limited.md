---
title: "abuse_report_rate_limited"
description: "Too many abuse reports were submitted from this client in a short window."
---

Too many abuse reports were submitted from this client in a short window.

**How to resolve:** Wait for the window in the Retry-After header to pass before reporting again.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "abuse_report_rate_limited",
    "message": "Too many abuse reports were submitted from this client in a short window.",
    "docsUrl": "https://spacefast.com/docs/errors/abuse_report_rate_limited",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
