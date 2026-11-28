---
title: "tag_review_person_required"
description: "A Space under tag review puts tag code live only when one person submitted it and another approved or released it. A credential with no person behind it (a partner, machine, or platform credential) counts as nobody: it submitted the revision, or it is approving or releasing one that needs a second person. For a team revision, the Space that requires review is in `details.spaceId`."
---

A Space under tag review puts tag code live only when one person submitted it and another approved or released it. A credential with no person behind it (a partner, machine, or platform credential) counts as nobody: it submitted the revision, or it is approving or releasing one that needs a second person. For a team revision, the Space that requires review is in `details.spaceId`.

**How to resolve:** Use a credential that has a person behind it: the dashboard, `sf login`, an OAuth sign-in, or an API key a team member created. Submit the revision again that way if a person-less credential submitted it. The approver must be a different person from the submitter.

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
  "type": "https://spacefast.com/docs/errors/tag_review_person_required",
  "title": "Tag review person required",
  "status": 403,
  "detail": "A Space under tag review puts tag code live only when one person submitted it and another approved or released it. A credential with no person behind it (a partner, machine, or platform credential) counts as nobody: it submitted the revision, or it is approving or releasing one that needs a second person. For a team revision, the Space that requires review is in `details.spaceId`.",
  "code": "tag_review_person_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
