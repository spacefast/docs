---
title: "spacepress_promote_initialize_required"
description: "This SpacePress version hasn't run its migrations on the live database yet, so it can't go live."
---

This SpacePress version hasn't run its migrations on the live database yet, so it can't go live.

**How to resolve:** Promote it again with a current Spacefast CLI or dashboard, which runs the migrations first.

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
  "type": "https://spacefast.com/docs/errors/spacepress_promote_initialize_required",
  "title": "Spacepress promote initialize required",
  "status": 422,
  "detail": "This SpacePress version hasn't run its migrations on the live database yet, so it can't go live.",
  "code": "spacepress_promote_initialize_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
