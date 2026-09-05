---
title: "promotion_live_system_space_not_designated"
description: "The live tenant has no designated system Space."
---

The live tenant has no designated system Space.

**How to resolve:** Designate the live tenant's system Space, then promote.

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
  "type": "https://spacefast.com/docs/errors/promotion_live_system_space_not_designated",
  "title": "Promotion live system space not designated",
  "status": 400,
  "detail": "The live tenant has no designated system Space.",
  "code": "promotion_live_system_space_not_designated",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
