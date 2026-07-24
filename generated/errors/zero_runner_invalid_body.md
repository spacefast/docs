---
title: "zero_runner_invalid_body"
description: "The Zero runner returned an invalid response body."
---

The Zero runner returned an invalid response body.

**How to resolve:** Check the endpoint response and runner logs.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_runner_invalid_body",
    "message": "The Zero runner returned an invalid response body.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_runner_invalid_body",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
