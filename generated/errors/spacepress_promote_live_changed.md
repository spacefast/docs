---
title: "spacepress_promote_live_changed"
description: "Another version went live while this one was being promoted, so its migrations didn't run."
---

Another version went live while this one was being promoted, so its migrations didn't run.

**How to resolve:** Check which version is live now, then promote this one again.

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
  "type": "https://spacefast.com/docs/errors/spacepress_promote_live_changed",
  "title": "Spacepress promote live changed",
  "status": 422,
  "detail": "Another version went live while this one was being promoted, so its migrations didn't run.",
  "code": "spacepress_promote_live_changed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
