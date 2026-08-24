---
title: "confirmation_denied"
description: "A person reviewed this exact action and denied it. The denial is terminal."
---

A person reviewed this exact action and denied it. The denial is terminal.

**How to resolve:** Stop retrying. You cannot clear this yourself; report the denial to the person who asked for the action.

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
  "type": "https://spacefast.com/docs/errors/confirmation_denied",
  "title": "Confirmation denied",
  "status": 400,
  "detail": "A person reviewed this exact action and denied it. The denial is terminal.",
  "code": "confirmation_denied",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
