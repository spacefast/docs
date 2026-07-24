---
title: "cli_upgrade_required"
description: "This CLI version is too old to talk to the API safely."
---

This CLI version is too old to talk to the API safely.

**How to resolve:** Upgrade the CLI to the latest release and retry.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "cli_upgrade_required",
    "message": "This CLI version is too old to talk to the API safely.",
    "docsUrl": "https://spacefast.com/docs/errors/cli_upgrade_required",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
