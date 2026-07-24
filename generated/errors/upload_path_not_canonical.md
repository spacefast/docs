---
title: "upload_path_not_canonical"
description: "An upload path is not in canonical (decoded, NFC-normalized) form."
---

An upload path is not in canonical (decoded, NFC-normalized) form.

**How to resolve:** Send paths exactly as declared, decoded once and NFC-normalized.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "upload_path_not_canonical",
    "message": "An upload path is not in canonical (decoded, NFC-normalized) form.",
    "docsUrl": "https://spacefast.com/docs/errors/upload_path_not_canonical",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
