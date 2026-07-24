---
title: "runtime_api_not_found"
description: "The runtime management endpoint was not found."
---

The runtime management endpoint was not found.

**How to resolve:** Send the request with the management hostname as the Host header; management routes are not served on public hostnames.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "runtime_api_not_found",
    "message": "The runtime management endpoint was not found.",
    "docsUrl": "https://spacefast.com/docs/errors/runtime_api_not_found",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
