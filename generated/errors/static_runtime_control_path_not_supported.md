---
title: "static_runtime_control_path_not_supported"
description: "The publish contains a reserved runtime control path a static publish cannot upload."
---

The publish contains a reserved runtime control path a static publish cannot upload.

**How to resolve:** Rename or remove the reserved file at the root of the publish directory, then publish again.

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
  "type": "https://spacefast.com/docs/errors/static_runtime_control_path_not_supported",
  "title": "Static runtime control path not supported",
  "status": 400,
  "detail": "The publish contains a reserved runtime control path a static publish cannot upload.",
  "code": "static_runtime_control_path_not_supported",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
