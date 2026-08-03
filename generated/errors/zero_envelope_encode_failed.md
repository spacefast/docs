---
title: "zero_envelope_encode_failed"
description: "The PHP bridge could not encode the Zero runner request envelope."
---

The PHP bridge could not encode the Zero runner request envelope.

**How to resolve:** Retry with valid request data. Report the issue if it persists.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_envelope_encode_failed",
    "message": "The PHP bridge could not encode the Zero runner request envelope.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_envelope_encode_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
