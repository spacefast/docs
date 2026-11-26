---
title: "zero_v2_initialize_failed"
description: "The Zero v2 version compiled, but the Space's WordPress could not start it. `details.runtimeDetails.reason` says why."
---

The Zero v2 version compiled, but the Space's WordPress could not start it. `details.runtimeDetails.reason` says why.

**How to resolve:** Read `details.runtimeDetails.reason`. Publish again, and contact support with the request ID if it keeps happening.

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
  "type": "https://spacefast.com/docs/errors/zero_v2_initialize_failed",
  "title": "Zero v2 initialize failed",
  "status": 422,
  "detail": "The Zero v2 version compiled, but the Space's WordPress could not start it. `details.runtimeDetails.reason` says why.",
  "code": "zero_v2_initialize_failed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
