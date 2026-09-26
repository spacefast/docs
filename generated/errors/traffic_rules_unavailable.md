---
title: "traffic_rules_unavailable"
description: "This space has no edge yet, so it cannot hold or check traffic rules."
---

This space has no edge yet, so it cannot hold or check traffic rules.

**How to resolve:** Publish the space once; its traffic rules take effect with that publish.

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
  "type": "https://spacefast.com/docs/errors/traffic_rules_unavailable",
  "title": "Traffic rules unavailable",
  "status": 400,
  "detail": "This space has no edge yet, so it cannot hold or check traffic rules.",
  "code": "traffic_rules_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
