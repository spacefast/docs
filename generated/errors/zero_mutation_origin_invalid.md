---
title: "zero_mutation_origin_invalid"
description: "The cookie-authenticated Zero mutation did not prove the serving origin."
---

The cookie-authenticated Zero mutation did not prove the serving origin.

**How to resolve:** Send the write from the Space's exact origin with a non-safelisted content type, or use an explicit platform bearer for a non-browser client.

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
  "type": "https://spacefast.com/docs/errors/zero_mutation_origin_invalid",
  "title": "Zero mutation origin invalid",
  "status": 400,
  "detail": "The cookie-authenticated Zero mutation did not prove the serving origin.",
  "code": "zero_mutation_origin_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
