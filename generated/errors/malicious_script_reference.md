---
title: "malicious_script_reference"
description: "A published file references a known compromised CDN (such as `polyfill.io`) or a browser crypto-mining endpoint."
---

A published file references a known compromised CDN (such as `polyfill.io`) or a browser crypto-mining endpoint.

**How to resolve:** Remove the compromised script or crypto-mining endpoint from your HTML/JS/CSS files and publish again.

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
  "type": "https://spacefast.com/docs/errors/malicious_script_reference",
  "title": "Malicious script reference",
  "status": 422,
  "detail": "A published file references a known compromised CDN (such as `polyfill.io`) or a browser crypto-mining endpoint.",
  "code": "malicious_script_reference",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
