---
title: "zero_v2_migration_failed"
description: "A database migration in this Zero app failed against the Space's existing data. The error message names the migration, the statement and the database's answer."
---

A database migration in this Zero app failed against the Space's existing data. The error message names the migration, the statement and the database's answer.

**How to resolve:** Fix the migration so it works with the rows already stored, for example delete or update dependent rows before changing their parent, then publish again. Statements before the failing one have already run, so write the fix to work from that state. The live version keeps serving meanwhile.

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
  "type": "https://spacefast.com/docs/errors/zero_v2_migration_failed",
  "title": "Zero v2 migration failed",
  "status": 422,
  "detail": "A database migration in this Zero app failed against the Space's existing data. The error message names the migration, the statement and the database's answer.",
  "code": "zero_v2_migration_failed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
