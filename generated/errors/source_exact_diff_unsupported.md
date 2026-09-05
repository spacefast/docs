---
title: "source_exact_diff_unsupported"
description: "CodeStorage compares from the shared ancestor instead of the two selected snapshots."
---

CodeStorage compares from the shared ancestor instead of the two selected snapshots.

**How to resolve:** This exact comparison requires provider support. Do not change the requested base, substitute another comparison, or retry the same request.

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
  "type": "https://spacefast.com/docs/errors/source_exact_diff_unsupported",
  "title": "Source exact diff unsupported",
  "status": 400,
  "detail": "CodeStorage compares from the shared ancestor instead of the two selected snapshots.",
  "code": "source_exact_diff_unsupported",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
