---
title: "zero_realtime_space_required"
description: "The Zero realtime request does not identify a space."
---

The Zero realtime request does not identify a space.

**How to resolve:** Use a /spaces/{spaceId} realtime URL or include a valid spaceId query parameter.

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
  "type": "https://spacefast.com/docs/errors/zero_realtime_space_required",
  "title": "Zero realtime space required",
  "status": 400,
  "detail": "The Zero realtime request does not identify a space.",
  "code": "zero_realtime_space_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
