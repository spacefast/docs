---
title: "zero_v2_source_needs_full_publish"
description: "The publish changes part of a Zero project without the rest: script modules uploaded over a captured app, which would not change it, or zero.config.ts deleted alone, which would serve the project's private files."
---

The publish changes part of a Zero project without the rest: script modules uploaded over a captured app, which would not change it, or zero.config.ts deleted alone, which would serve the project's private files.

**How to resolve:** Publish the whole project: sf publish from the project directory, or every project file including zero.config.ts. To stop running a Zero app, publish a snapshot of the site that replaces it.

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
  "type": "https://spacefast.com/docs/errors/zero_v2_source_needs_full_publish",
  "title": "Zero v2 source needs full publish",
  "status": 422,
  "detail": "The publish changes part of a Zero project without the rest: script modules uploaded over a captured app, which would not change it, or zero.config.ts deleted alone, which would serve the project's private files.",
  "code": "zero_v2_source_needs_full_publish",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
