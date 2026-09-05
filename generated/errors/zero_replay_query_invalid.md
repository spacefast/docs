---
title: "zero_replay_query_invalid"
description: "The realtime replay query is larger than the byte limit, or is otherwise invalid."
---

The realtime replay query is larger than the byte limit, or is otherwise invalid.

**How to resolve:** Shorten the replay query string, then retry.

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
  "type": "https://spacefast.com/docs/errors/zero_replay_query_invalid",
  "title": "Zero replay query invalid",
  "status": 400,
  "detail": "The realtime replay query is larger than the byte limit, or is otherwise invalid.",
  "code": "zero_replay_query_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
