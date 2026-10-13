---
title: "system_space_conflict"
description: "The tenant's system space changed since the value you sent as `baseSystemSpaceId`, so the update was rejected."
---

The tenant's system space changed since the value you sent as `baseSystemSpaceId`, so the update was rejected.

**How to resolve:** Re-read `/v1/tenants/{tenantId}`, confirm the current `systemSpaceId`, and retry with a matching `baseSystemSpaceId`.

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
  "type": "https://spacefast.com/docs/errors/system_space_conflict",
  "title": "System space conflict",
  "status": 400,
  "detail": "The tenant's system space changed since the value you sent as `baseSystemSpaceId`, so the update was rejected.",
  "code": "system_space_conflict",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
