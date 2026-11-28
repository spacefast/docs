---
title: "zero_v2_source_layout"
description: "The Zero v2 project's files don't fit the layout the host compiles: a public/ file would land in a directory the engine owns (public/.zero-source/ or public/.zero-compiled/), public/ holds another public/ directory, or .zero-source/ holds something besides app.zero.json, vendor.zero.json and manifest.json."
---

The Zero v2 project's files don't fit the layout the host compiles: a public/ file would land in a directory the engine owns (public/.zero-source/ or public/.zero-compiled/), public/ holds another public/ directory, or .zero-source/ holds something besides app.zero.json, vendor.zero.json and manifest.json.

**How to resolve:** Serve pages and assets from public/ (public/index.html serves at /), keep zero.config.ts and its modules at the project root, and don't put .zero-source/, .zero-compiled/ or public/ inside public/. Upload .zero-source/ only as the bundle a current CLI captures. Some older hosts also refuse a public/ file whose root path is already in the version, such as public/index.html beside an uploaded or previously published index.html. Upload only public/index.html, and publish the whole project as a snapshot so nothing from the previous version is kept: `sf publish` does this by default, and the API or MCP publish takes `publishMode: "snapshot"`.

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
  "type": "https://spacefast.com/docs/errors/zero_v2_source_layout",
  "title": "Zero v2 source layout",
  "status": 422,
  "detail": "The Zero v2 project's files don't fit the layout the host compiles: a public/ file would land in a directory the engine owns (public/.zero-source/ or public/.zero-compiled/), public/ holds another public/ directory, or .zero-source/ holds something besides app.zero.json, vendor.zero.json and manifest.json.",
  "code": "zero_v2_source_layout",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
