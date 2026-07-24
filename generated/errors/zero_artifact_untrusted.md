---
title: "zero_artifact_untrusted"
description: "A Zero route points to an uploaded artifact that the runtime did not compile."
---

A Zero route points to an uploaded artifact that the runtime did not compile.

**How to resolve:** Declare the endpoint in zero_endpoints so finalize generates trusted bytecode.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_artifact_untrusted",
    "message": "A Zero route points to an uploaded artifact that the runtime did not compile.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_artifact_untrusted",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
