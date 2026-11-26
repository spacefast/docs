---
title: "zero_v2_capture_failed"
description: "The host could not capture the Zero project's TypeScript sources into a bundle."
---

The host could not capture the Zero project's TypeScript sources into a bundle.

**How to resolve:** Run `sf zero check --json` and fix what it reports, then publish from the project directory with `sf publish`, which captures the sources locally.

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
  "type": "https://spacefast.com/docs/errors/zero_v2_capture_failed",
  "title": "Zero v2 capture failed",
  "status": 422,
  "detail": "The host could not capture the Zero project's TypeScript sources into a bundle.",
  "code": "zero_v2_capture_failed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
