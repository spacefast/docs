---
title: "domain_registrar_disputed"
description: "The registry has a dispute flag on this domain, so its registration can't change."
---

The registry has a dispute flag on this domain, so its registration can't change.

**How to resolve:** Contact support. Nothing changes at the registrar until the dispute is resolved.

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
  "type": "https://spacefast.com/docs/errors/domain_registrar_disputed",
  "title": "Domain registrar disputed",
  "status": 422,
  "detail": "The registry has a dispute flag on this domain, so its registration can't change.",
  "code": "domain_registrar_disputed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
