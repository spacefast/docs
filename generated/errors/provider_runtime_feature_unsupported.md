---
title: "provider_runtime_feature_unsupported"
description: "The publish declares a provider runtime feature Spacefast does not execute, so it ships as inert static content."
---

The publish declares a provider runtime feature Spacefast does not execute, so it ships as inert static content.

**How to resolve:** Remove the file, or move the behavior into a Spacefast runtime the platform executes.

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
  "type": "https://spacefast.com/docs/errors/provider_runtime_feature_unsupported",
  "title": "Provider runtime feature unsupported",
  "status": 400,
  "detail": "The publish declares a provider runtime feature Spacefast does not execute, so it ships as inert static content.",
  "code": "provider_runtime_feature_unsupported",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
