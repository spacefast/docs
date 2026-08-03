---
title: "zero_artifact_invalid"
description: "The Zero endpoint artifact is missing required runtime metadata."
---

The Zero endpoint artifact is missing required runtime metadata.

**How to resolve:** Rebuild the Zero project and verify the generated zero endpoint artifacts are uploaded.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_artifact_invalid",
    "message": "The Zero endpoint artifact is missing required runtime metadata.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_artifact_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
