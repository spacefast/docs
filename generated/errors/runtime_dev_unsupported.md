---
title: "runtime_dev_unsupported"
description: "`sf dev` cannot run this runtime locally yet."
---

`sf dev` cannot run this runtime locally yet.

**How to resolve:** Run your framework's own dev server (`next dev`, `vite`, …) and publish with `sf publish` when you are ready.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "runtime_dev_unsupported",
    "message": "`sf dev` cannot run this runtime locally yet.",
    "docsUrl": "https://docs.spacefast.com/errors/runtime_dev_unsupported",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
