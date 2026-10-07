---
title: "token_audience_mismatch"
description: "The partner token audience does not match the audience for its issuer."
---

The partner token audience does not match the audience for its issuer.

**How to resolve:** Set aud to the exact audience that Spacefast assigned to the issuer.

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
  "type": "https://spacefast.com/docs/errors/token_audience_mismatch",
  "title": "Token audience mismatch",
  "status": 400,
  "detail": "The partner token audience does not match the audience for its issuer.",
  "code": "token_audience_mismatch",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
