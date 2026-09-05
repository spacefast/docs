---
title: "inject_invalid"
description: "The `inject` block in the Space config is not shaped as placement keys holding snippet arrays."
---

The `inject` block in the Space config is not shaped as placement keys holding snippet arrays.

**How to resolve:** Make `inject` an object whose keys hold arrays of snippet strings, and keep each array within its snippet cap.

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
  "type": "https://spacefast.com/docs/errors/inject_invalid",
  "title": "Inject invalid",
  "status": 400,
  "detail": "The `inject` block in the Space config is not shaped as placement keys holding snippet arrays.",
  "code": "inject_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
