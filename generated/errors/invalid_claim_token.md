---
title: "invalid_claim_token"
description: "The claim token is invalid or does not match this space."
---

The claim token is invalid or does not match this space.

**How to resolve:** Use the exact claim URL returned by the publish that created the space.

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
  "type": "https://spacefast.com/docs/errors/invalid_claim_token",
  "title": "Invalid claim token",
  "status": 400,
  "detail": "The claim token is invalid or does not match this space.",
  "code": "invalid_claim_token",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
