---
title: "runtime_capabilities_pending"
description: "This Space's server doesn't support this yet: its runtime is updating, or the feature arrives with the next runtime release."
---

This Space's server doesn't support this yet: its runtime is updating, or the feature arrives with the next runtime release.

**How to resolve:** Wait for the `Retry-After` interval, then retry. A publish retries on its own; inspect its operation for progress.

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
  "type": "https://spacefast.com/docs/errors/runtime_capabilities_pending",
  "title": "Runtime capabilities pending",
  "status": 422,
  "detail": "This Space's server doesn't support this yet: its runtime is updating, or the feature arrives with the next runtime release.",
  "code": "runtime_capabilities_pending",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
