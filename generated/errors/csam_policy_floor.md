---
title: "csam_policy_floor"
description: "CSAM enforcement policy cannot be set below the mandatory account-suspend floor."
---

CSAM enforcement policy cannot be set below the mandatory account-suspend floor.

**How to resolve:** Set the CSAM category enforcement tier to account suspension.

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
  "type": "https://docs.spacefast.com/docs/errors/csam_policy_floor",
  "title": "Csam policy floor",
  "status": 400,
  "detail": "CSAM enforcement policy cannot be set below the mandatory account-suspend floor.",
  "code": "csam_policy_floor",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
