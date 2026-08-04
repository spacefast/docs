---
title: "import_not_cancelable"
description: "The import has progressed past the point where it can be canceled."
---

The import has progressed past the point where it can be canceled.

**How to resolve:** Wait for the import to finish. Completed imports can be deleted as versions.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`. `code` is stable and machine-readable, `type` links to
this page, `title` is a short label, `status` repeats the HTTP status, and `detail`
explains this occurrence. `pointer` (when present) is an RFC 6901 JSON Pointer at the
offending field in the request body, and `details` may carry structured context. Match on
`code`, never on `detail`.

```json
{
  "type": "https://spacefast.com/docs/errors/import_not_cancelable",
  "title": "Import not cancelable",
  "status": 400,
  "detail": "The import has progressed past the point where it can be canceled.",
  "code": "import_not_cancelable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
