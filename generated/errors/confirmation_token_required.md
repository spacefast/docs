---
title: "confirmation_token_required"
description: "This exact action already has a decision, and a retry without its continuation token cannot clear the gate."
---

This exact action already has a decision, and a retry without its continuation token cannot clear the gate.

**How to resolve:** Send the original request again with the continuation token from its first `confirmation_required` response, in the `X-Spacefast-Continuation-Token` header (`--continuation-token` on `sf rollback` and `sf promote`).

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
  "type": "https://spacefast.com/docs/errors/confirmation_token_required",
  "title": "Confirmation token required",
  "status": 400,
  "detail": "This exact action already has a decision, and a retry without its continuation token cannot clear the gate.",
  "code": "confirmation_token_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
