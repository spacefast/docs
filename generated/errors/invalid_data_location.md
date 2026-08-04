---
title: "invalid_data_location"
description: "The requested data location is not a supported region."
---

The requested data location is not a supported region.

**How to resolve:** Pick a region from the documented data locations, or use auto.

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
  "type": "https://spacefast.com/docs/errors/invalid_data_location",
  "title": "Invalid data location",
  "status": 400,
  "detail": "The requested data location is not a supported region.",
  "code": "invalid_data_location",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
