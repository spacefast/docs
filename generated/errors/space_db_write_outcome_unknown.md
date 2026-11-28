---
title: "space_db_write_outcome_unknown"
description: "The database stopped answering while it saved the change, so the change may or may not have been written."
---

The database stopped answering while it saved the change, so the change may or may not have been written.

**How to resolve:** Read the rows with `listSpaceDatabaseRows` before sending the change again. Sending an insert again can add the rows twice.

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
  "type": "https://spacefast.com/docs/errors/space_db_write_outcome_unknown",
  "title": "Space db write outcome unknown",
  "status": 422,
  "detail": "The database stopped answering while it saved the change, so the change may or may not have been written.",
  "code": "space_db_write_outcome_unknown",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
