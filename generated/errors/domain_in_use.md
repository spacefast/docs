---
title: "domain_in_use"
description: "The domain is in use by another binding or assignment."
---

The domain is in use by another binding or assignment.

**How to resolve:** Remove the existing use of the domain before retrying.

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
  "type": "https://spacefast.com/docs/errors/domain_in_use",
  "title": "Domain in use",
  "status": 400,
  "detail": "The domain is in use by another binding or assignment.",
  "code": "domain_in_use",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
