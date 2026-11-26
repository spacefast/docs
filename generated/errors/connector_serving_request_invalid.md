---
title: "connector_serving_request_invalid"
description: "This role has nothing to ask site serving for."
---

This role has nothing to ask site serving for.

**How to resolve:** Ask only for a `team` role bound to a team connection that does not serve sites yet. Run `sf connectors bindings --space <ref>` to see each role's state.

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
  "type": "https://spacefast.com/docs/errors/connector_serving_request_invalid",
  "title": "Connector serving request invalid",
  "status": 422,
  "detail": "This role has nothing to ask site serving for.",
  "code": "connector_serving_request_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
