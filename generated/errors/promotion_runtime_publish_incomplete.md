---
title: "promotion_runtime_publish_incomplete"
description: "The promoted version was accepted but its runtime publish did not finish, so live is unchanged."
---

The promoted version was accepted but its runtime publish did not finish, so live is unchanged.

**How to resolve:** Retry the promotion. If it keeps failing, contact support with the `requestId`.

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
  "type": "https://spacefast.com/docs/errors/promotion_runtime_publish_incomplete",
  "title": "Promotion runtime publish incomplete",
  "status": 400,
  "detail": "The promoted version was accepted but its runtime publish did not finish, so live is unchanged.",
  "code": "promotion_runtime_publish_incomplete",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
