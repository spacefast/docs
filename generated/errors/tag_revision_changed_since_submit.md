---
title: "tag_revision_changed_since_submit"
description: "This tag revision was edited after it was submitted, while no review applied. Under review it is approved and released only as its submitter sent it."
---

This tag revision was edited after it was submitted, while no review applied. Under review it is approved and released only as its submitter sent it.

**How to resolve:** Submit the revision again, then ask another owner or admin to approve it.

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
  "type": "https://spacefast.com/docs/errors/tag_revision_changed_since_submit",
  "title": "Tag revision changed since submit",
  "status": 409,
  "detail": "This tag revision was edited after it was submitted, while no review applied. Under review it is approved and released only as its submitter sent it.",
  "code": "tag_revision_changed_since_submit",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
