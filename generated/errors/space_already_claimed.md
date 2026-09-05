---
title: "space_already_claimed"
description: "The Space has already been claimed by a team."
---

The Space has already been claimed by a team.

**How to resolve:** Publish with the team's API key, or ask the owner to create one for the agent.

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
  "type": "https://spacefast.com/docs/errors/space_already_claimed",
  "title": "Space already claimed",
  "status": 400,
  "detail": "The Space has already been claimed by a team.",
  "code": "space_already_claimed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
