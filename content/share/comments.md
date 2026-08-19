---
search:
  tags: [feedback, review]
title: Comments
description: Leave threaded comments anchored to the page on any Spacefast preview, and triage them from a shared inbox.
---

Comments turn any version URL into a place to give feedback. A reviewer
opens a preview, clicks the part of the page they mean, and leaves a
thread. On version previews, each comment anchors to the page and to the
exact [version](/publish/versions); on the live site, threads anchor to the
page.

## Turn on comments

In the space's General settings, enable page enhancements, then enable
Comments. From then on, version URLs show the comment controls. Three
options matter:

- **Surface**: previews only, or the live site too (`off`, `previews`,
  `everywhere`).
- **Spam filtering**: on by default.
- **Notifications**: two switches, one for new comments (threads and
  replies) and one for status changes.

The space's [visitor access](/share) controls who can comment. Invite
people, create Links, or allow anonymous commenters there. Sharing a
private version with the right person does not make the version public.

## Leave useful feedback

Click the page element or area you mean, then write the comment. When a
drawing is clearer than words, draw directly on the page. Each comment
captures a screenshot of the page state by default, so feedback still
makes sense after the content changes. Reviewers can also attach images
and files (up to 10 per comment, 5 MB each), reply, and react in the
thread.

## Review and archive

Each thread has a status, `open` or `archived`. Triage threads from the
space's **Comments** page. Filter by status, version, page, author, or
unread state, and search the full text. Archive a thread when the work
finishes or the thread stops being relevant.

The spam filter holds suspected spam out of the main list, and team
admins can review it under the **Spam** filter.

## Embed on another site

A space's comment overlay can load on a third-party site. Allowlist the
exact `https` origins, up to 20 with no wildcards:

```bash
sf comments settings set --embed-allow https://staging.example.com
```

An embed origin sees the space at its previews tier with a reduced feature
set. Remove an origin with `--embed-remove`.

## From the command line

Agents and scripts read and act on threads with `sf comments`:

```bash
sf comments list --version v123 --status open
```

```bash
sf comments get cmt_123
```

```bash
sf comments reply cmt_123 --body "Fixed in the next build"
```

```bash
sf comments archive cmt_123
```

To hand a version's open feedback to an agent, export every matching thread
as Markdown or JSON:

```bash
sf comments export --version v123 --status open --format markdown
```
