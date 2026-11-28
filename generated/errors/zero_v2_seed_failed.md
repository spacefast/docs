---
title: "zero_v2_seed_failed"
description: "Zero could not seed the synced source records during finalize."
---

Zero could not seed the synced source records during finalize.

**How to resolve:** Fix the file and pointer in the diagnostic, then publish again. Existing editable records are preserved.

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
  "type": "https://spacefast.com/docs/errors/zero_v2_seed_failed",
  "title": "Zero v2 seed failed",
  "status": 422,
  "detail": "Zero could not seed the synced source records during finalize.",
  "code": "zero_v2_seed_failed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
