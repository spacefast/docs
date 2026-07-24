---
title: "credential_retired"
description: "This request used a retired Spacefast token format or authentication header."
---

This request used a retired Spacefast token format or authentication header.

**How to resolve:** Run sf login again and send the new sfa_ key as Authorization: Bearer.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "credential_retired",
    "message": "This request used a retired Spacefast token format or authentication header.",
    "docsUrl": "https://spacefast.com/docs/errors/credential_retired",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
