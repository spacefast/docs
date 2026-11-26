---
title: "runtime_promotion_dispatch_failed"
description: "The platform release promotion could not be handed to its workflow."
---

The platform release promotion could not be handed to its workflow.

**How to resolve:** Nothing was promoted. Retry shortly; if it keeps failing, check the promotion workflow's GitHub App installation.

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
  "type": "https://spacefast.com/docs/errors/runtime_promotion_dispatch_failed",
  "title": "Runtime promotion dispatch failed",
  "status": 422,
  "detail": "The platform release promotion could not be handed to its workflow.",
  "code": "runtime_promotion_dispatch_failed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
