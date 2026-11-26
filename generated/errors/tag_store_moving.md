---
title: "tag_store_moving"
description: "Tags are moving to a new store, a one-time step that takes a few seconds. Tag changes wait until it finishes; published tags keep serving."
---

Tags are moving to a new store, a one-time step that takes a few seconds. Tag changes wait until it finishes; published tags keep serving.

**How to resolve:** Retry after the Retry-After seconds. Nothing changed on your side.

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
  "type": "https://spacefast.com/docs/errors/tag_store_moving",
  "title": "Tag store moving",
  "status": 503,
  "detail": "Tags are moving to a new store, a one-time step that takes a few seconds. Tag changes wait until it finishes; published tags keep serving.",
  "code": "tag_store_moving",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
