---
title: "zero_runner_protocol_unsupported"
description: "The Zero runner received an unsupported invoke protocol."
---

The Zero runner received an unsupported invoke protocol.

**How to resolve:** Rebuild and redeploy so the PHP bridge and Rust runner versions match.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_runner_protocol_unsupported",
    "message": "The Zero runner received an unsupported invoke protocol.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_runner_protocol_unsupported",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
