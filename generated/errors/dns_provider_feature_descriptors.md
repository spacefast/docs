---
title: "dns_provider_feature_descriptors"
description: "This provider exposes domain features through capability descriptors."
---

This provider exposes domain features through capability descriptors.

**How to resolve:** Render and run the advertised feature action instead of assuming a raw DNS record change.

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
  "type": "https://spacefast.com/docs/errors/dns_provider_feature_descriptors",
  "title": "Dns provider feature descriptors",
  "status": 400,
  "detail": "This provider exposes domain features through capability descriptors.",
  "code": "dns_provider_feature_descriptors",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
