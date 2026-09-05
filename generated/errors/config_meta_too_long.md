---
title: "config_meta_too_long"
description: "A `meta` value in the Space config is longer than its character limit."
---

A `meta` value in the Space config is longer than its character limit.

**How to resolve:** Shorten the `meta` field named in the failure to its character limit.

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
  "type": "https://spacefast.com/docs/errors/config_meta_too_long",
  "title": "Config meta too long",
  "status": 400,
  "detail": "A `meta` value in the Space config is longer than its character limit.",
  "code": "config_meta_too_long",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
