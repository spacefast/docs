---
title: "dns_provider_replace_all_requires_fresh_plan"
description: "A replace-all DNS write needs a freshly computed plan."
---

A replace-all DNS write needs a freshly computed plan.

**How to resolve:** Recompute the DNS plan, then submit the replace-all write again.

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
  "type": "https://spacefast.com/docs/errors/dns_provider_replace_all_requires_fresh_plan",
  "title": "Dns provider replace all requires fresh plan",
  "status": 400,
  "detail": "A replace-all DNS write needs a freshly computed plan.",
  "code": "dns_provider_replace_all_requires_fresh_plan",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
