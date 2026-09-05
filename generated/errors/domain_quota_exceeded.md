---
title: "domain_quota_exceeded"
description: "The team reached its plan's cap on custom domains."
---

The team reached its plan's cap on custom domains.

**How to resolve:** Delete a custom domain to free a slot, or move the team to a plan with a higher cap.

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
  "type": "https://spacefast.com/docs/errors/domain_quota_exceeded",
  "title": "Domain quota exceeded",
  "status": 400,
  "detail": "The team reached its plan's cap on custom domains.",
  "code": "domain_quota_exceeded",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
