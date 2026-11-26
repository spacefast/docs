---
title: "build_source_import_partial"
description: "The commit is one part of a source import that was saved in several commits, so it holds only some of the files."
---

The commit is one part of a source import that was saved in several commits, so it holds only some of the files.

**How to resolve:** Build the latest commit on the branch, or the commit that finished the import. Do not build or roll back to a part commit.

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
  "type": "https://spacefast.com/docs/errors/build_source_import_partial",
  "title": "Build source import partial",
  "status": 422,
  "detail": "The commit is one part of a source import that was saved in several commits, so it holds only some of the files.",
  "code": "build_source_import_partial",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
