---
title: "token_subject_invalid"
description: "The partner token's `sub` claim is not a normalized lowercase principal ID."
---

The partner token's `sub` claim is not a normalized lowercase principal ID.

**How to resolve:** Mint the token with `sub` set to the normalized lowercase principal ID.

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
  "type": "https://spacefast.com/docs/errors/token_subject_invalid",
  "title": "Token subject invalid",
  "status": 400,
  "detail": "The partner token's `sub` claim is not a normalized lowercase principal ID.",
  "code": "token_subject_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
