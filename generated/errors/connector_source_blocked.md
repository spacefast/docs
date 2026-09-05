---
title: "connector_source_blocked"
description: "The source URL points somewhere the egress guard refuses to fetch."
---

The source URL points somewhere the egress guard refuses to fetch.

**How to resolve:** Use a public HTTPS URL. Private addresses, loopback, and cloud metadata endpoints are never fetched.

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
  "type": "https://spacefast.com/docs/errors/connector_source_blocked",
  "title": "Connector source blocked",
  "status": 400,
  "detail": "The source URL points somewhere the egress guard refuses to fetch.",
  "code": "connector_source_blocked",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
