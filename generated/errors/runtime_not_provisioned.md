---
title: "runtime_not_provisioned"
description: "The Space has not served a published version, so its runtime does not exist yet."
---

The Space has not served a published version, so its runtime does not exist yet.

**How to resolve:** Publish the Space, then retry once its first version is live.

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
  "type": "https://spacefast.com/docs/errors/runtime_not_provisioned",
  "title": "Runtime not provisioned",
  "status": 400,
  "detail": "The Space has not served a published version, so its runtime does not exist yet.",
  "code": "runtime_not_provisioned",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
