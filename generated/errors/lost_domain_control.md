---
title: "lost_domain_control"
description: "Spacefast no longer observes DNS control for this domain."
---

Spacefast no longer observes DNS control for this domain.

**How to resolve:** Restore the documented DNS records, then re-run domain verification.

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
  "type": "https://spacefast.com/docs/errors/lost_domain_control",
  "title": "Lost domain control",
  "status": 400,
  "detail": "Spacefast no longer observes DNS control for this domain.",
  "code": "lost_domain_control",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
