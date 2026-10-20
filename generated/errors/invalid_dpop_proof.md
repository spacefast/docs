---
title: "invalid_dpop_proof"
description: "The request's proof of possession is missing, invalid, or already used."
---

The request's proof of possession is missing, invalid, or already used.

**How to resolve:** Create a fresh DPoP proof with the token's key, the request method and URL, and the token hash in the `ath` claim. Retry with the new proof.

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
  "type": "https://spacefast.com/docs/errors/invalid_dpop_proof",
  "title": "Invalid dpop proof",
  "status": 400,
  "detail": "The request's proof of possession is missing, invalid, or already used.",
  "code": "invalid_dpop_proof",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
