---
title: "internal_notice_token_required"
description: "This internal comments endpoint needs a valid service token."
---

This internal comments endpoint needs a valid service token.

**How to resolve:** It's for Spacefast services only. If a Spacefast service hit this, contact support with the requestId.

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
  "type": "https://spacefast.com/docs/errors/internal_notice_token_required",
  "title": "Internal notice token required",
  "status": 400,
  "detail": "This internal comments endpoint needs a valid service token.",
  "code": "internal_notice_token_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
