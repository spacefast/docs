---
title: "zero_spam_unavailable"
description: "The spam service is not configured for this runtime."
---

The spam service is not configured for this runtime.

**How to resolve:** Publish the Space and call the endpoint on the live runtime; `sf dev` does not provide the spam service.

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
  "type": "https://spacefast.com/docs/errors/zero_spam_unavailable",
  "title": "Zero spam unavailable",
  "status": 400,
  "detail": "The spam service is not configured for this runtime.",
  "code": "zero_spam_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
