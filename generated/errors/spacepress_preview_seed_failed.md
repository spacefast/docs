---
title: "spacepress_preview_seed_failed"
description: "This preview could not set up its database from the version's seed."
---

This preview could not set up its database from the version's seed.

**How to resolve:** Reload to try again. If it keeps failing, check the seed records in the version's source.

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
  "type": "https://spacefast.com/docs/errors/spacepress_preview_seed_failed",
  "title": "Spacepress preview seed failed",
  "status": 422,
  "detail": "This preview could not set up its database from the version's seed.",
  "code": "spacepress_preview_seed_failed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
