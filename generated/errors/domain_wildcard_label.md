---
title: "domain_wildcard_label"
description: "The hostname uses a wildcard label in a position that is not allowed."
---

The hostname uses a wildcard label in a position that is not allowed.

**How to resolve:** Use a single leading wildcard (*.example.com) or a concrete hostname.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "domain_wildcard_label",
    "message": "The hostname uses a wildcard label in a position that is not allowed.",
    "docsUrl": "https://docs.spacefast.com/errors/domain_wildcard_label",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
