---
title: "traffic_rules_paused"
description: "An ingress policy cannot be applied while traffic rules are paused."
---

An ingress policy cannot be applied while traffic rules are paused.

**How to resolve:** Resume traffic rules, then apply the ingress policy again.

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
  "type": "https://spacefast.com/docs/errors/traffic_rules_paused",
  "title": "Traffic rules paused",
  "status": 400,
  "detail": "An ingress policy cannot be applied while traffic rules are paused.",
  "code": "traffic_rules_paused",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
