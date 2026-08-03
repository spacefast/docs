---
title: "inject_invalid"
description: "The inject config key is malformed."
---

The inject config key is malformed.

**How to resolve:** Make inject an object whose head/bodyStart/bodyEnd/noscript entries are arrays of up to 16 strings.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "inject_invalid",
    "message": "The inject config key is malformed.",
    "docsUrl": "https://docs.spacefast.com/errors/inject_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
