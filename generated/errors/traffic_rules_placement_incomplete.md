---
title: "traffic_rules_placement_incomplete"
description: "The redirects and headers this version runs at the edge are not all there, so going live would drop them."
---

The redirects and headers this version runs at the edge are not all there, so going live would drop them.

**How to resolve:** The error names each rule the edge did not take, with the lane it was declared in and its position in that lane. If traffic rules are paused, resume them and publish again. If the edge refused a rule, or the space is over the edge's rule allowance, fix or remove that rule — `GET /v1/spaces/{spaceId}/rules` reports what the edge said about each one — and publish again. To keep every rule at the space instead, turn off `placement.edge` in the space's settings and publish again.

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
  "type": "https://spacefast.com/docs/errors/traffic_rules_placement_incomplete",
  "title": "Traffic rules placement incomplete",
  "status": 400,
  "detail": "The redirects and headers this version runs at the edge are not all there, so going live would drop them.",
  "code": "traffic_rules_placement_incomplete",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
