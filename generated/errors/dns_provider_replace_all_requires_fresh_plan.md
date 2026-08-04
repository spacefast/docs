---
title: "dns_provider_replace_all_requires_fresh_plan"
description: "This provider requires a fresh full-zone plan before replacing DNS records."
---

This provider requires a fresh full-zone plan before replacing DNS records.

**How to resolve:** Refresh the provider snapshot, review the replace-all plan, then run the action from that fresh plan.

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
  "type": "https://docs.spacefast.com/docs/errors/dns_provider_replace_all_requires_fresh_plan",
  "title": "Dns provider replace all requires fresh plan",
  "status": 400,
  "detail": "This provider requires a fresh full-zone plan before replacing DNS records.",
  "code": "dns_provider_replace_all_requires_fresh_plan",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
