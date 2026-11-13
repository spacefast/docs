---
title: "source_fork_replaced"
description: "The remix destination no longer matches its captured source."
---

The remix destination no longer matches its captured source.

**How to resolve:** Keep any source edits and create a new remix from the current project.

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
  "type": "https://spacefast.com/docs/errors/source_fork_replaced",
  "title": "Source fork replaced",
  "status": 400,
  "detail": "The remix destination no longer matches its captured source.",
  "code": "source_fork_replaced",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
