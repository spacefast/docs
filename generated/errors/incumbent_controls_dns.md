---
title: "incumbent_controls_dns"
description: "Another team controls this domain's DNS, so the operation is blocked."
---

Another team controls this domain's DNS, so the operation is blocked.

**How to resolve:** Prove control by completing domain verification, or coordinate with the incumbent.

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
  "type": "https://docs.spacefast.com/docs/errors/incumbent_controls_dns",
  "title": "Incumbent controls dns",
  "status": 400,
  "detail": "Another team controls this domain's DNS, so the operation is blocked.",
  "code": "incumbent_controls_dns",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
