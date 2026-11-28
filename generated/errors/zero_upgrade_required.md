---
title: "zero_upgrade_required"
description: "Zero 0.8 publishing is turned off, so no new Zero 0.8 version is published or remixed. A Space that already serves a Zero 0.8 app keeps serving it."
---

Zero 0.8 publishing is turned off, so no new Zero 0.8 version is published or remixed. A Space that already serves a Zero 0.8 app keeps serving it.

**How to resolve:** Keep the deployed app as it is: it keeps serving. Publish again once Zero publishing is turned back on.

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
  "type": "https://spacefast.com/docs/errors/zero_upgrade_required",
  "title": "Zero upgrade required",
  "status": 422,
  "detail": "Zero 0.8 publishing is turned off, so no new Zero 0.8 version is published or remixed. A Space that already serves a Zero 0.8 app keeps serving it.",
  "code": "zero_upgrade_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
