---
title: "runtime_token_bad_signature"
description: "The runtime token signature did not verify."
---

The runtime token signature did not verify.

**How to resolve:** Mint a fresh token. Verify clocks and JWKS freshness if it persists.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`. `code` is stable and machine-readable, `type` links to
this page, `title` is a short label, `status` repeats the HTTP status, and `detail`
explains this occurrence. `pointer` (when present) is an RFC 6901 JSON Pointer at the
offending field in the request body, and `details` may carry structured context. Match on
`code`, never on `detail`.

```json
{
  "type": "https://docs.spacefast.com/docs/errors/runtime_token_bad_signature",
  "title": "Runtime token bad signature",
  "status": 400,
  "detail": "The runtime token signature did not verify.",
  "code": "runtime_token_bad_signature",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
