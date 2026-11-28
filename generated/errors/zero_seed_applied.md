---
title: "zero_seed_applied"
description: "Synced content was seeded when the Zero version finalized."
---

Synced content was seeded when the Zero version finalized.

**How to resolve:** Read the created, unchanged, updated and preserved counts in the publish receipt.

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
  "type": "https://spacefast.com/docs/errors/zero_seed_applied",
  "title": "Zero seed applied",
  "status": 422,
  "detail": "Synced content was seeded when the Zero version finalized.",
  "code": "zero_seed_applied",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
