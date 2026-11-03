---
title: "dev_relay_decision_invalid"
description: "The dev relay enrollment is already in the requested state, or no longer exists."
---

The dev relay enrollment is already in the requested state, or no longer exists.

**How to resolve:** Reload the Dev relay list. Another admin may have decided it already.

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
  "type": "https://spacefast.com/docs/errors/dev_relay_decision_invalid",
  "title": "Dev relay decision invalid",
  "status": 400,
  "detail": "The dev relay enrollment is already in the requested state, or no longer exists.",
  "code": "dev_relay_decision_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
