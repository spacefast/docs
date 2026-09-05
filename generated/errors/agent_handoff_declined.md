---
title: "agent_handoff_declined"
description: "The agent handoff was declined and cannot be redeemed."
---

The agent handoff was declined and cannot be redeemed.

**How to resolve:** Ask the user to mint a fresh handoff for this Space and client, then redeem that link once.

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
  "type": "https://spacefast.com/docs/errors/agent_handoff_declined",
  "title": "Agent handoff declined",
  "status": 400,
  "detail": "The agent handoff was declined and cannot be redeemed.",
  "code": "agent_handoff_declined",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
