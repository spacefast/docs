---
title: "connector_approval_required"
description: "The call needs a person to approve it before it runs."
---

The call needs a person to approve it before it runs.

**How to resolve:** Open the approval URL so someone can approve or deny it, then poll the run until it leaves awaiting_approval.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`.

- `code` is stable and machine-readable.
- `type` links to this page.
- `title` is a short label.
- `status` repeats the HTTP status.
- `detail` explains this occurrence.
- `pointer`, when present, is an RFC 6901 JSON Pointer at the offending field in the request body.
- `details`, when present, carries structured context.

Match on `code`, never on `detail`.

```json
{
  "type": "https://spacefast.com/docs/errors/connector_approval_required",
  "title": "Connector approval required",
  "status": 400,
  "detail": "The call needs a person to approve it before it runs.",
  "code": "connector_approval_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
