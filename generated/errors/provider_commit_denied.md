---
title: "provider_commit_denied"
description: "The domain changed hands or lost access before the registrar call, so nothing was sent."
---

The domain changed hands or lost access before the registrar call, so nothing was sent.

**How to resolve:** Nothing was sent to the registrar, and any payment was refunded. Contact support with the `requestId` if this looks wrong.

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
  "type": "https://spacefast.com/docs/errors/provider_commit_denied",
  "title": "Provider commit denied",
  "status": 400,
  "detail": "The domain changed hands or lost access before the registrar call, so nothing was sent.",
  "code": "provider_commit_denied",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
