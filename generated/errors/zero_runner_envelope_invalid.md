---
title: "zero_runner_envelope_invalid"
description: "The runner returned an envelope the runtime cannot read."
---

The runner returned an envelope the runtime cannot read.

**How to resolve:** Rebuild the capsule with `sf build`, then publish again.

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
  "type": "https://spacefast.com/docs/errors/zero_runner_envelope_invalid",
  "title": "Zero runner envelope invalid",
  "status": 400,
  "detail": "The runner returned an envelope the runtime cannot read.",
  "code": "zero_runner_envelope_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
