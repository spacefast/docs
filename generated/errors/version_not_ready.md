---
title: "version_not_ready"
description: "The version is not ready yet."
---

The version is not ready yet.

**How to resolve:** Read the version status and its operation receipt. Wait for an active finalize operation to finish; if the version failed, inspect its diagnostics and publish corrected content. Promotion and comparison require a ready version. See [Versions and rollback](/docs/versions-and-rollback/).

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
  "type": "https://spacefast.com/docs/errors/version_not_ready",
  "title": "Version not ready",
  "status": 400,
  "detail": "The version is not ready yet.",
  "code": "version_not_ready",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
