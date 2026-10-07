---
title: "publish_config_only_no_artifact"
description: "A configuration-only publish needs an existing ready version to carry forward."
---

A configuration-only publish needs an existing ready version to carry forward.

**How to resolve:** Publish the site content once, wait for it to be ready, then re-run the configuration-only publish.

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
  "type": "https://spacefast.com/docs/errors/publish_config_only_no_artifact",
  "title": "Publish config only no artifact",
  "status": 400,
  "detail": "A configuration-only publish needs an existing ready version to carry forward.",
  "code": "publish_config_only_no_artifact",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
