---
title: "issuer_proof_invalid"
description: "The issuer key-possession proof did not verify or is stale."
---

The issuer key-possession proof did not verify or is stale.

**How to resolve:** Re-sign the challenge nonce with the issuer key and send the fresh proof in `proof`.

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
  "type": "https://spacefast.com/docs/errors/issuer_proof_invalid",
  "title": "Issuer proof invalid",
  "status": 400,
  "detail": "The issuer key-possession proof did not verify or is stale.",
  "code": "issuer_proof_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
