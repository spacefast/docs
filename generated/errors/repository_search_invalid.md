---
title: "repository_search_invalid"
description: "The repository refused the search input."
---

The repository refused the search input.

**How to resolve:** Check that the pattern is a valid regular expression, that paths and globs are repository-relative, and that any cursor came from the previous page of this same search.

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
  "type": "https://spacefast.com/docs/errors/repository_search_invalid",
  "title": "Repository search invalid",
  "status": 422,
  "detail": "The repository refused the search input.",
  "code": "repository_search_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
