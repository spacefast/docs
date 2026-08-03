---
title: "zero_runner_response_encode_failed"
description: "The Zero runner could not encode its response."
---

The Zero runner could not encode its response.

**How to resolve:** Return JSON-serializable response metadata from the endpoint.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_runner_response_encode_failed",
    "message": "The Zero runner could not encode its response.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_runner_response_encode_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
