---
title: "zero_dev_endpoint_failed"
description: "A local Zero dev endpoint failed while handling the request."
---

A local Zero dev endpoint failed while handling the request.

**How to resolve:** Check the local dev console output and fix the endpoint implementation.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_dev_endpoint_failed",
    "message": "A local Zero dev endpoint failed while handling the request.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_dev_endpoint_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
