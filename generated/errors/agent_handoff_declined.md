---
title: "agent_handoff_declined"
description: "The app-private agent handoff cannot be redeemed."
---

The app-private agent handoff cannot be redeemed.

**How to resolve:** Ask the user to create a fresh handoff for this space and client, then redeem that new link once.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`. `code` is stable and machine-readable, `type` links to
this page, `title` is a short label, `status` repeats the HTTP status, and `detail`
explains this occurrence. `pointer` (when present) is an RFC 6901 JSON Pointer at the
offending field in the request body, and `details` may carry structured context. Match on
`code`, never on `detail`.

```json
{
  "type": "https://docs.spacefast.com/docs/errors/agent_handoff_declined",
  "title": "Agent handoff declined",
  "status": 400,
  "detail": "The app-private agent handoff cannot be redeemed.",
  "code": "agent_handoff_declined",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
