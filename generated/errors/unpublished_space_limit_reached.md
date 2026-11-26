---
title: "unpublished_space_limit_reached"
description: "This team already holds as many never-published Spaces as its plan allows."
---

This team already holds as many never-published Spaces as its plan allows.

**How to resolve:** Publish to one of the team's unpublished Spaces, or delete one, then create the new Space. Spaces with an upload or build in progress don't count.

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
  "type": "https://spacefast.com/docs/errors/unpublished_space_limit_reached",
  "title": "Unpublished space limit reached",
  "status": 422,
  "detail": "This team already holds as many never-published Spaces as its plan allows.",
  "code": "unpublished_space_limit_reached",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
