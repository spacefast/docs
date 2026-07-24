---
title: "zero_endpoint_invalid"
description: "A Zero endpoint definition or its database metadata is invalid."
---

A Zero endpoint definition or its database metadata is invalid.

**How to resolve:** Fix the endpoint method, route, source, capabilities, or database metadata and publish again.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_endpoint_invalid",
    "message": "A Zero endpoint definition or its database metadata is invalid.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_endpoint_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
