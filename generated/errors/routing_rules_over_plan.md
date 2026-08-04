---
title: "routing_rules_over_plan"
description: "The published _redirects and _headers exceed the plan's routing-rule allowance."
---

The published _redirects and _headers exceed the plan's routing-rule allowance.

**How to resolve:** Reduce the rule count. Still stuck? POST /v1/feedback with the error code and request id.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`. `code` is stable and machine-readable, `type` links to
this page, `title` is a short label, `status` repeats the HTTP status, and `detail`
explains this occurrence. `pointer` (when present) is an RFC 6901 JSON Pointer at the
offending field in the request body, and `details` may carry structured context. Match on
`code`, never on `detail`.

```json
{
  "type": "https://spacefast.com/docs/errors/routing_rules_over_plan",
  "title": "Routing rules over plan",
  "status": 400,
  "detail": "The published _redirects and _headers exceed the plan's routing-rule allowance.",
  "code": "routing_rules_over_plan",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
