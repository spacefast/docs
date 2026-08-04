---
title: "custom_certificates_require_dedicated_site"
description: "Custom certificates are unavailable while this space uses shared placement."
---

Custom certificates are unavailable while this space uses shared placement.

**How to resolve:** Move the space to dedicated placement before managing custom certificates.

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
  "type": "https://docs.spacefast.com/docs/errors/custom_certificates_require_dedicated_site",
  "title": "Custom certificates require dedicated site",
  "status": 400,
  "detail": "Custom certificates are unavailable while this space uses shared placement.",
  "code": "custom_certificates_require_dedicated_site",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
