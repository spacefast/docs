---
title: "quota_exceeded"
description: "This action would exceed a quota on the plan assigned to the owning customer. The problem details name which quota (for example, the spaces cap) and its limit."
---

This action would exceed a quota on the plan assigned to the owning customer. The problem details name which quota (for example, the spaces cap) and its limit.

**How to resolve:** Check the owner's usage and current plan. Choose a plan with enough capacity, or move the Space to an eligible team. Keep existing live Spaces serving.

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
  "type": "https://spacefast.com/docs/errors/quota_exceeded",
  "title": "Quota exceeded",
  "status": 409,
  "detail": "This action would exceed a quota on the plan assigned to the owning customer. The problem details name which quota (for example, the spaces cap) and its limit.",
  "code": "quota_exceeded",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
