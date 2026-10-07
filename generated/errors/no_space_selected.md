---
title: "no_space_selected"
description: "The command needs a Space and this directory does not select one."
---

The command needs a Space and this directory does not select one.

**How to resolve:** Pass --space, link the directory with `sf link --space <id>`, or run it where a project link already selects a Space. `sf spaces ls` lists what the credential can reach.

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
  "detail": "The command needs a Space and this directory does not select one.",
  "code": "no_space_selected",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
