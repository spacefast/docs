---
title: "source_nothing_staged"
description: "The staged source tree has no changes against the saved base."
---

The staged source tree has no changes against the saved base.

**How to resolve:** Stage the intended source changes before committing.

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
  "type": "https://spacefast.com/docs/errors/source_nothing_staged",
  "title": "Source nothing staged",
  "status": 400,
  "detail": "The staged source tree has no changes against the saved base.",
  "code": "source_nothing_staged",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
