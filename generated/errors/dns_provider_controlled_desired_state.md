---
title: "dns_provider_controlled_desired_state"
description: "This DNS provider is controlled through desired-state templates instead of direct record edits."
---

This DNS provider is controlled through desired-state templates instead of direct record edits.

**How to resolve:** Use the provider workflow template or primary-domain action for this provider-managed zone.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`. `code` is stable and machine-readable, `type` links to
this page, `title` is a short label, `status` repeats the HTTP status, and `detail`
explains this occurrence. `pointer` (when present) is an RFC 6901 JSON Pointer at the
offending field in the request body, and `details` may carry structured context. Match on
`code`, never on `detail`.

```json
{
  "type": "https://spacefast.com/docs/errors/dns_provider_controlled_desired_state",
  "title": "Dns provider controlled desired state",
  "status": 400,
  "detail": "This DNS provider is controlled through desired-state templates instead of direct record edits.",
  "code": "dns_provider_controlled_desired_state",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
