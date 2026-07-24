---
title: "invalid_data_location"
description: "The requested data location is not a supported region."
---

The requested data location is not a supported region.

**How to resolve:** Pick a region from the documented data locations, or use auto.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "invalid_data_location",
    "message": "The requested data location is not a supported region.",
    "docsUrl": "https://spacefast.com/docs/errors/invalid_data_location",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
