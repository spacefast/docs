---
title: "tag_review_inheritance_through_tags"
description: "This Space requires review, so its team tag inheritance turns on only in Tags settings, which checks that the team's released tags were reviewed."
---

This Space requires review, so its team tag inheritance turns on only in Tags settings, which checks that the team's released tags were reviewed.

**How to resolve:** Turn inheritance on in the Space's Tags settings, or keep it off in this config with `superpowers.tags.inheritance.inherited: false`.

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
  "type": "https://spacefast.com/docs/errors/tag_review_inheritance_through_tags",
  "title": "Tag review inheritance through tags",
  "status": 409,
  "detail": "This Space requires review, so its team tag inheritance turns on only in Tags settings, which checks that the team's released tags were reviewed.",
  "code": "tag_review_inheritance_through_tags",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
