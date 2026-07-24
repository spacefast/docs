---
title: "invalid_publish_payload"
description: "The publish payload is malformed."
---

The publish payload is malformed.

**How to resolve:** Check the request against the publish schema in the API docs.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "invalid_publish_payload",
    "message": "The publish payload is malformed.",
    "docsUrl": "https://spacefast.com/docs/errors/invalid_publish_payload",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
