---
title: "zero_generation_locked"
description: "This Space runs a zero.config.ts app and can't go back to an older Zero version."
---

This Space runs a zero.config.ts app and can't go back to an older Zero version.

**How to resolve:** Publish or promote a zero.config.ts version on this Space, or publish the Zero 0.8 app to another Space.

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
  "type": "https://spacefast.com/docs/errors/zero_generation_locked",
  "title": "Zero generation locked",
  "status": 422,
  "detail": "This Space runs a zero.config.ts app and can't go back to an older Zero version.",
  "code": "zero_generation_locked",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
