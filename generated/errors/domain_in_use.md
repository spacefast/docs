---
title: "domain_in_use"
description: "The domain is still assigned to a Space or has DNS work in flight."
---

The domain is still assigned to a Space or has DNS work in flight.

**How to resolve:** Set the domain's `spaceId` to `null` and wait for queued DNS operations to finish, then retry.

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
  "type": "https://spacefast.com/docs/errors/domain_in_use",
  "title": "Domain in use",
  "status": 400,
  "detail": "The domain is still assigned to a Space or has DNS work in flight.",
  "code": "domain_in_use",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
