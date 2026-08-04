---
title: "path_case_collision"
description: "Two file paths differ only by letter case, which collides on serving."
---

Two file paths differ only by letter case, which collides on serving.

**How to resolve:** Rename one of the files so paths are unique case-insensitively.

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
  "type": "https://spacefast.com/docs/errors/path_case_collision",
  "title": "Path case collision",
  "status": 400,
  "detail": "Two file paths differ only by letter case, which collides on serving.",
  "code": "path_case_collision",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
