---
title: "zero_artifact_abi_mismatch"
description: "The Zero endpoint artifact was built for a different runner ABI."
---

The Zero endpoint artifact was built for a different runner ABI.

**How to resolve:** Rebuild and republish the Zero project with the current Spacefast CLI and runtime.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_artifact_abi_mismatch",
    "message": "The Zero endpoint artifact was built for a different runner ABI.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_artifact_abi_mismatch",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
