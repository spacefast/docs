---
title: "show_and_tell_ineligible"
description: "This space is not eligible for Show & Tell."
---

This space is not eligible for Show & Tell.

**How to resolve:** Check details.reason. Publish a live version, ensure the live Space is public and enabled, and submit from its self-serve owning team. Sharing settings are never changed by submission.

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
  "type": "https://spacefast.com/docs/errors/show_and_tell_ineligible",
  "title": "Show and tell ineligible",
  "status": 400,
  "detail": "This space is not eligible for Show & Tell.",
  "code": "show_and_tell_ineligible",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
