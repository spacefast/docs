---
title: "zero_v2_manifest_invalid"
description: "The manifest the Zero compiler wrote on the host is not valid JSON."
---

The manifest the Zero compiler wrote on the host is not valid JSON.

**How to resolve:** Nothing in the project causes this, and publishing the same source again gives the same result. Contact support with the request ID.

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
  "type": "https://spacefast.com/docs/errors/zero_v2_manifest_invalid",
  "title": "Zero v2 manifest invalid",
  "status": 422,
  "detail": "The manifest the Zero compiler wrote on the host is not valid JSON.",
  "code": "zero_v2_manifest_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
