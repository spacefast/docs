---
title: "team_design_system_asset_type_invalid"
description: "The filename, declared content type, and file bytes do not agree."
---

The filename, declared content type, and file bytes do not agree.

**How to resolve:** Use the file's actual type and a matching supported extension, including DOCX. Read the uploadTeamDesignSystemAsset schema for accepted extension/MIME pairs.

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
  "type": "https://spacefast.com/docs/errors/team_design_system_asset_type_invalid",
  "title": "Team design system asset type invalid",
  "status": 400,
  "detail": "The filename, declared content type, and file bytes do not agree.",
  "code": "team_design_system_asset_type_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
