---
title: "runtime_dev_unsupported"
description: "The local dev server cannot serve this Space's runtime kind."
---

The local dev server cannot serve this Space's runtime kind.

**How to resolve:** Publish the Space and use its live URL, or switch to a runtime kind `sf dev` serves.

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
  "type": "https://spacefast.com/docs/errors/runtime_dev_unsupported",
  "title": "Runtime dev unsupported",
  "status": 400,
  "detail": "The local dev server cannot serve this Space's runtime kind.",
  "code": "runtime_dev_unsupported",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
