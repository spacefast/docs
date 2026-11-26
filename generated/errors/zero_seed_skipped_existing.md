---
title: "zero_seed_skipped_existing"
description: "Existing editable records were preserved during source seeding."
---

Existing editable records were preserved during source seeding.

**How to resolve:** Run sf zero sync to merge later source edits. Publishing never deletes records.

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
  "type": "https://spacefast.com/docs/errors/zero_seed_skipped_existing",
  "title": "Zero seed skipped existing",
  "status": 422,
  "detail": "Existing editable records were preserved during source seeding.",
  "code": "zero_seed_skipped_existing",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
