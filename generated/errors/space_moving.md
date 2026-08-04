---
title: "space_moving"
description: "The space is moving between sites, which blocks this operation."
---

The space is moving between sites, which blocks this operation.

**How to resolve:** Wait for the move to finish, then retry.

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
  "type": "https://docs.spacefast.com/docs/errors/space_moving",
  "title": "Space moving",
  "status": 400,
  "detail": "The space is moving between sites, which blocks this operation.",
  "code": "space_moving",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
