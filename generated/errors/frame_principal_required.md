---
title: "frame_principal_required"
description: "A Frame launch needs a signed-in account session, not an API token."
---

A Frame launch needs a signed-in account session, not an API token.

**How to resolve:** Launch the Frame from a signed-in dashboard session so the runtime knows which account is editing.

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
  "type": "https://spacefast.com/docs/errors/frame_principal_required",
  "title": "Frame principal required",
  "status": 400,
  "detail": "A Frame launch needs a signed-in account session, not an API token.",
  "code": "frame_principal_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
