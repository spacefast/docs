---
title: "routing_rules_over_plan"
description: "The published _redirects and _headers exceed the plan's routing-rule allowance."
---

The published _redirects and _headers exceed the plan's routing-rule allowance.

**How to resolve:** Reduce the rule count. Still stuck? POST /v1/feedback with the error code and request id.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "routing_rules_over_plan",
    "message": "The published _redirects and _headers exceed the plan's routing-rule allowance.",
    "docsUrl": "https://spacefast.com/docs/errors/routing_rules_over_plan",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
