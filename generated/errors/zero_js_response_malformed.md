---
title: "zero_js_response_malformed"
description: "The Zero endpoint returned a malformed runner response."
---

The Zero endpoint returned a malformed runner response.

**How to resolve:** Return a valid Response or supported Zero handler result.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_js_response_malformed",
    "message": "The Zero endpoint returned a malformed runner response.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_js_response_malformed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
