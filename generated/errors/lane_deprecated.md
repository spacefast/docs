---
title: "lane_deprecated"
description: "This publish uses a deprecated runtime (Zero 0.8, zero.config.ts apps, managed content or Commerce) that no longer takes it. `details.lane` names the runtime, and `pointer`, when present, marks the input that asks for it. What is deployed keeps serving, rolling back and changing settings."
---

This publish uses a deprecated runtime (Zero 0.8, zero.config.ts apps, managed content or Commerce) that no longer takes it. `details.lane` names the runtime, and `pointer`, when present, marks the input that asks for it. What is deployed keeps serving, rolling back and changing settings.

**How to resolve:** For Zero 0.8, zero.config.ts apps or managed content, run `sf app migrate` in the project to write spacepress.config.ts, then publish again. For Commerce (`details.lane` `sell`), remove the `sell` block from the Space config, then publish again.

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
  "type": "https://spacefast.com/docs/errors/lane_deprecated",
  "title": "Lane deprecated",
  "status": 422,
  "detail": "This publish uses a deprecated runtime (Zero 0.8, zero.config.ts apps, managed content or Commerce) that no longer takes it. `details.lane` names the runtime, and `pointer`, when present, marks the input that asks for it. What is deployed keeps serving, rolling back and changing settings.",
  "code": "lane_deprecated",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
