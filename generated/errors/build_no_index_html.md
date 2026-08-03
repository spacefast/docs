---
title: "build_no_index_html"
description: "The build produced output but no index.html at the site root."
---

The build produced output but no index.html at the site root.

**How to resolve:** Make sure your build writes an index.html to the output directory, or point the output directory at the folder that contains it.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "build_no_index_html",
    "message": "The build produced output but no index.html at the site root.",
    "docsUrl": "https://docs.spacefast.com/errors/build_no_index_html",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
