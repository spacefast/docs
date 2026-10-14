---
title: "source_author_required"
description: "The credential has no complete registered profile, so a source commit needs an explicit author."
---

The credential has no complete registered profile, so a source commit needs an explicit author.

**How to resolve:** Send `author` with a name and an email when you create the workspace. Later mutations reuse that author.

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
  "type": "https://spacefast.com/docs/errors/source_author_required",
  "title": "Source author required",
  "status": 400,
  "detail": "The credential has no complete registered profile, so a source commit needs an explicit author.",
  "code": "source_author_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
