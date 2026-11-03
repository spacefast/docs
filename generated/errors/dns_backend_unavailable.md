---
title: "dns_backend_unavailable"
description: "Spacefast DNS could not be reached, so the change is saved but not served yet."
---

Spacefast DNS could not be reached, so the change is saved but not served yet.

**How to resolve:** Don't resend the change: it's saved, and Spacefast publishes the saved zone on its own once DNS is reachable again.

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
  "type": "https://spacefast.com/docs/errors/dns_backend_unavailable",
  "title": "Dns backend unavailable",
  "status": 400,
  "detail": "Spacefast DNS could not be reached, so the change is saved but not served yet.",
  "code": "dns_backend_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
