---
title: "data_location_immutable"
description: "This request tried to change data location through an immutable path."
---

This request tried to change data location through an immutable path.

**How to resolve:** Data location is fixed when the space is created and cannot be changed afterwards. Create a new space in the region you want.

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
  "type": "https://docs.spacefast.com/docs/errors/data_location_immutable",
  "title": "Data location immutable",
  "status": 400,
  "detail": "This request tried to change data location through an immutable path.",
  "code": "data_location_immutable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
