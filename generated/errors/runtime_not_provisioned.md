---
title: "runtime_not_provisioned"
description: "The space has not served a published version yet, so it has no runtime data to read."
---

The space has not served a published version yet, so it has no runtime data to read.

**How to resolve:** Publish a version first. If a publish is already running, wait for it — the operation receipt reports progress.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "runtime_not_provisioned",
    "message": "The space has not served a published version yet, so it has no runtime data to read.",
    "docsUrl": "https://docs.spacefast.com/errors/runtime_not_provisioned",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
