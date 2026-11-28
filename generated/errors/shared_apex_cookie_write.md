---
title: "shared_apex_cookie_write"
description: "An artifact contains a literal cookie write targeting a shared Space domain."
---

An artifact contains a literal cookie write targeting a shared Space domain.

**How to resolve:** Remove the Domain attribute or use this Space's full hostname. The problem details name the file, line, and domain. This best-effort static check covers literal JavaScript cookie assignments and recognized cookie-library options in scripts and HTML script blocks. It cannot prevent dynamic, obfuscated, or remotely loaded JavaScript and is not a security boundary.

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
  "type": "https://spacefast.com/docs/errors/shared_apex_cookie_write",
  "title": "Shared apex cookie write",
  "status": 422,
  "detail": "An artifact contains a literal cookie write targeting a shared Space domain.",
  "code": "shared_apex_cookie_write",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
