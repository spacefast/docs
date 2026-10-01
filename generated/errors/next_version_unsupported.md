---
title: "next_version_unsupported"
description: "This Next.js version is incompatible with the bundled server runtime adapter."
---

This Next.js version is incompatible with the bundled server runtime adapter.

**How to resolve:** Upgrade Next.js to the minimum version named in the error, or publish a browser-ready static export.

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
  "type": "https://spacefast.com/docs/errors/next_version_unsupported",
  "title": "Next version unsupported",
  "status": 400,
  "detail": "This Next.js version is incompatible with the bundled server runtime adapter.",
  "code": "next_version_unsupported",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
