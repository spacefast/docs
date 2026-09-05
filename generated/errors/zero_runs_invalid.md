---
title: "zero_runs_invalid"
description: "The finalize request's `zero_runs` value is not an array."
---

The finalize request's `zero_runs` value is not an array.

**How to resolve:** Send `zero_runs` as an array of run handler entries.

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
  "type": "https://spacefast.com/docs/errors/zero_runs_invalid",
  "title": "Zero runs invalid",
  "status": 400,
  "detail": "The finalize request's `zero_runs` value is not an array.",
  "code": "zero_runs_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
