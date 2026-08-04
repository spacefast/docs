---
title: "space_claim_unavailable"
description: "This space cannot be claimed."
---

This space cannot be claimed.

**How to resolve:** Only anonymous, unexpired spaces with a valid claim token can be claimed.

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
  "type": "https://spacefast.com/docs/errors/space_claim_unavailable",
  "title": "Space claim unavailable",
  "status": 400,
  "detail": "This space cannot be claimed.",
  "code": "space_claim_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
