---
title: "zero_artifact_malformed"
description: "The Zero endpoint artifact cannot be parsed."
---

The Zero endpoint artifact cannot be parsed.

**How to resolve:** Rebuild the Zero project. Do not edit generated artifact JSON by hand.

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
  "type": "https://spacefast.com/docs/errors/zero_artifact_malformed",
  "title": "Zero artifact malformed",
  "status": 400,
  "detail": "The Zero endpoint artifact cannot be parsed.",
  "code": "zero_artifact_malformed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
