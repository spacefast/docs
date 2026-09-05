---
title: "prebuilt_metadata_invalid"
description: "The archive's build metadata sidecar is present but unreadable."
---

The archive's build metadata sidecar is present but unreadable.

**How to resolve:** Run `sf build` to regenerate the archive, or delete the `.meta.json` sidecar if the archive holds plain files.

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
  "type": "https://spacefast.com/docs/errors/prebuilt_metadata_invalid",
  "title": "Prebuilt metadata invalid",
  "status": 400,
  "detail": "The archive's build metadata sidecar is present but unreadable.",
  "code": "prebuilt_metadata_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
