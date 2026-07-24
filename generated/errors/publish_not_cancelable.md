---
title: "publish_not_cancelable"
description: "The publish has progressed past the point where it can be canceled."
---

The publish has progressed past the point where it can be canceled.

**How to resolve:** Wait for the publish to finish, then roll back by promoting a previous version if needed.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "publish_not_cancelable",
    "message": "The publish has progressed past the point where it can be canceled.",
    "docsUrl": "https://spacefast.com/docs/errors/publish_not_cancelable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
