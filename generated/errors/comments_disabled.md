---
title: "comments_disabled"
description: "Comments are off for this Space."
---

Comments are off for this Space.

**How to resolve:** Turn them on in the Space's Comments settings or run sf comments settings set --surface everywhere. Over the API, read `revision` with `getSpaceShare`, then send `comments: { previews: "on", live: "on" }` and that revision as `expectedRevision` to `updateSpaceShare`. If Comments are already on, turn on Page Enhancements in the Space's General settings. Over the API, read the Space's `config` and `settingsDigest` with `getSpace`, set `superpowers.enabled` to `true`, and send the whole `config` to `updateSpace` with that digest as `baseSettingsDigest`. `updateSpace` replaces the config, and the digest makes it refuse the write if the settings changed since your read.

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
  "type": "https://spacefast.com/docs/errors/comments_disabled",
  "title": "Comments disabled",
  "status": 422,
  "detail": "Comments are off for this Space.",
  "code": "comments_disabled",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
