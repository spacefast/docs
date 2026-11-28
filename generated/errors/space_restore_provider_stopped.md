---
title: "space_restore_provider_stopped"
description: "The Space's box ran out of room, so its takedown stopped the site at the provider. Restoring it now would serve the Space before its box can be checked."
---

The Space's box ran out of room, so its takedown stopped the site at the provider. Restoring it now would serve the Space before its box can be checked.

**How to resolve:** Nothing was changed, and the Space stays down. Contact support to free the box and lift the stop, then retry the restore or claim.

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
  "type": "https://spacefast.com/docs/errors/space_restore_provider_stopped",
  "title": "Space restore provider stopped",
  "status": 422,
  "detail": "The Space's box ran out of room, so its takedown stopped the site at the provider. Restoring it now would serve the Space before its box can be checked.",
  "code": "space_restore_provider_stopped",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
