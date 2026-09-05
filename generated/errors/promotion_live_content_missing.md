---
title: "promotion_live_content_missing"
description: "The live tenant's system Space has no ready version whose content promotion can retain."
---

The live tenant's system Space has no ready version whose content promotion can retain.

**How to resolve:** Publish the live system Space once, then promote.

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
  "type": "https://spacefast.com/docs/errors/promotion_live_content_missing",
  "title": "Promotion live content missing",
  "status": 400,
  "detail": "The live tenant's system Space has no ready version whose content promotion can retain.",
  "code": "promotion_live_content_missing",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
