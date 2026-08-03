---
title: "zero_query_name_missing"
description: "A Zero realtime query subscription did not include a query name."
---

A Zero realtime query subscription did not include a query name.

**How to resolve:** Send a query.subscribe frame with a valid query name.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_query_name_missing",
    "message": "A Zero realtime query subscription did not include a query name.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_query_name_missing",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
