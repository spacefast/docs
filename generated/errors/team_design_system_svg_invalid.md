---
title: "team_design_system_svg_invalid"
description: "The SVG contains unsupported elements, attributes, or external content."
---

The SVG contains unsupported elements, attributes, or external content.

**How to resolve:** Export a self-contained SVG with basic shapes and local references, or upload a raster image.

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
  "type": "https://spacefast.com/docs/errors/team_design_system_svg_invalid",
  "title": "Team design system svg invalid",
  "status": 400,
  "detail": "The SVG contains unsupported elements, attributes, or external content.",
  "code": "team_design_system_svg_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
