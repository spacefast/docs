---
title: "dns_provider_feature_unavailable"
description: "The domain's current DNS provider does not offer this feature action or service template."
---

The domain's current DNS provider does not offer this feature action or service template.

**How to resolve:** Choose a feature or template the provider supports, or move the zone to a provider that offers it.

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
  "type": "https://spacefast.com/docs/errors/dns_provider_feature_unavailable",
  "title": "Dns provider feature unavailable",
  "status": 400,
  "detail": "The domain's current DNS provider does not offer this feature action or service template.",
  "code": "dns_provider_feature_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
