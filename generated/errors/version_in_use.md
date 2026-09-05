---
title: "version_in_use"
description: "A channel, branch alias, or reusing draft still points at this version."
---

A channel, branch alias, or reusing draft still points at this version.

**How to resolve:** Point the referencing channels and aliases at another version, then delete this one.

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
  "type": "https://spacefast.com/docs/errors/version_in_use",
  "title": "Version in use",
  "status": 400,
  "detail": "A channel, branch alias, or reusing draft still points at this version.",
  "code": "version_in_use",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
