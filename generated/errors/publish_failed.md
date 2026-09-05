---
title: "publish_failed"
description: "Copying the version's files into the live environment failed."
---

Copying the version's files into the live environment failed.

**How to resolve:** Publish again. If it keeps failing, contact Spacefast support with the `requestId`.

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
  "type": "https://spacefast.com/docs/errors/publish_failed",
  "title": "Publish failed",
  "status": 400,
  "detail": "Copying the version's files into the live environment failed.",
  "code": "publish_failed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
