---
title: "join_link_not_found"
description: "No team join link matches this token. It may have been reset."
---

No team join link matches this token. It may have been reset.

**How to resolve:** Ask someone on the team for the current join link.

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
  "type": "https://spacefast.com/docs/errors/join_link_not_found",
  "title": "Join link not found",
  "status": 400,
  "detail": "No team join link matches this token. It may have been reset.",
  "code": "join_link_not_found",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
