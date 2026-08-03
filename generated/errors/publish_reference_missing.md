---
title: "publish_reference_missing"
description: "Published HTML, CSS, or JavaScript references an internal path that is not in the version."
---

Published HTML, CSS, or JavaScript references an internal path that is not in the version.

**How to resolve:** Publish the missing artifact, or correct the reference to a route that this version serves.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "publish_reference_missing",
    "message": "Published HTML, CSS, or JavaScript references an internal path that is not in the version.",
    "docsUrl": "https://docs.spacefast.com/errors/publish_reference_missing",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
