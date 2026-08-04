---
title: "dns_import_partial_visibility"
description: "The DNS import cannot see the full zone, so importing would lose records."
---

The DNS import cannot see the full zone, so importing would lose records.

**How to resolve:** Verify delegation and retry once the full zone is visible.

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
  "type": "https://spacefast.com/docs/errors/dns_import_partial_visibility",
  "title": "Dns import partial visibility",
  "status": 400,
  "detail": "The DNS import cannot see the full zone, so importing would lose records.",
  "code": "dns_import_partial_visibility",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
