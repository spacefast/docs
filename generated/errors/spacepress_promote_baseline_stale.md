---
title: "spacepress_promote_baseline_stale"
description: "Another version went live after this one was published, and this one couldn't be compiled again against the live database."
---

Another version went live after this one was published, and this one couldn't be compiled again against the live database.

**How to resolve:** Publish this version again, then promote the new one.

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
  "type": "https://spacefast.com/docs/errors/spacepress_promote_baseline_stale",
  "title": "Spacepress promote baseline stale",
  "status": 422,
  "detail": "Another version went live after this one was published, and this one couldn't be compiled again against the live database.",
  "code": "spacepress_promote_baseline_stale",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
