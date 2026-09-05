---
title: "repository_ref_not_found"
description: "The branch, tag, or commit you asked to read does not exist in this repository. A repository nothing has been pushed to yet answers this for its own default branch."
---

The branch, tag, or commit you asked to read does not exist in this repository. A repository nothing has been pushed to yet answers this for its own default branch.

**How to resolve:** List the repository's branches (`GET /v1/spaces/{spaceId}/source/branches`) and read one that exists, or push to the branch first.

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
  "type": "https://spacefast.com/docs/errors/repository_ref_not_found",
  "title": "Repository ref not found",
  "status": 400,
  "detail": "The branch, tag, or commit you asked to read does not exist in this repository. A repository nothing has been pushed to yet answers this for its own default branch.",
  "code": "repository_ref_not_found",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
