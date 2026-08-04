---
title: "anonymous_space_limit_reached"
description: "Too many unclaimed anonymous spaces are already active for this client."
---

Too many unclaimed anonymous spaces are already active for this client.

**How to resolve:** Log in to publish into an authenticated space, or claim/delete an existing anonymous space before creating another.

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
  "type": "https://spacefast.com/docs/errors/anonymous_space_limit_reached",
  "title": "Anonymous space limit reached",
  "status": 400,
  "detail": "Too many unclaimed anonymous spaces are already active for this client.",
  "code": "anonymous_space_limit_reached",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
