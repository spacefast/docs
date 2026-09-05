---
title: "invalid_grant"
description: "The grant or assertion presented at the token endpoint is expired, revoked, or untrusted."
---

The grant or assertion presented at the token endpoint is expired, revoked, or untrusted.

**How to resolve:** Re-authorize the agent grant, or present an assertion from a trusted issuer with `typ` set to `oauth-id-jag+jwt`.

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
  "type": "https://spacefast.com/docs/errors/invalid_grant",
  "title": "Invalid grant",
  "status": 400,
  "detail": "The grant or assertion presented at the token endpoint is expired, revoked, or untrusted.",
  "code": "invalid_grant",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
