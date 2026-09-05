---
title: "no_space_selected"
description: "The command found no Space to act on."
---

The command found no Space to act on.

**How to resolve:** Run `sf spaces ls` and pass the Space with `--space <space-id>`, or link the directory to a Space.

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
  "type": "https://spacefast.com/docs/errors/no_space_selected",
  "title": "No space selected",
  "status": 400,
  "detail": "The command found no Space to act on.",
  "code": "no_space_selected",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
