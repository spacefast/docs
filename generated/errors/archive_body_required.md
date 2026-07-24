---
title: "archive_body_required"
description: "This request must carry an archive body but none was provided."
---

This request must carry an archive body but none was provided.

**How to resolve:** Send the zip bytes as the request body with the matching content-type header.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "archive_body_required",
    "message": "This request must carry an archive body but none was provided.",
    "docsUrl": "https://spacefast.com/docs/errors/archive_body_required",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
