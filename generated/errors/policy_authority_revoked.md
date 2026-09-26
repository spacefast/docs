---
title: "policy_authority_revoked"
description: "Spacefast did not publish this access change. The recorded requester is missing, inactive, or not permitted to change this Space's access."
---

Spacefast did not publish this access change. The recorded requester is missing, inactive, or not permitted to change this Space's access.

**How to resolve:** Publish again with current permission to manage this Space's access. For a scoped credential, request `spaces:access.write` during reauthorization. For an automated build, restore the repository connection and start a new build.

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
  "type": "https://spacefast.com/docs/errors/policy_authority_revoked",
  "title": "Policy authority revoked",
  "status": 400,
  "detail": "Spacefast did not publish this access change. The recorded requester is missing, inactive, or not permitted to change this Space's access.",
  "code": "policy_authority_revoked",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
