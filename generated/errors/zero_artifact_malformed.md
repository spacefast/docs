---
title: "zero_artifact_malformed"
description: "The Zero endpoint artifact could not be parsed."
---

The Zero endpoint artifact could not be parsed.

**How to resolve:** Rebuild the Zero project; do not edit generated artifact JSON by hand.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_artifact_malformed",
    "message": "The Zero endpoint artifact could not be parsed.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_artifact_malformed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
