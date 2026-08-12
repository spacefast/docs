---
title: Comments
description: Leave comments directly on a Spacefast preview, threaded, anchored to the page, and triaged from a shared inbox.
---

Comments turn any version URL into a place to give feedback. Reviewers open a
preview, click the part of the page they mean, and leave a thread. On version
previews, Spacefast anchors each comment to the page and to the exact
[version](/publishing/channels); on the live site, threads anchor to the page.

## Turn it on

Enable page enhancements in the space's General settings first, then enable
Comments. After that, version URLs show the comment controls. Options include:

- **Surface**: previews only, or the live site too (`off`, `previews`,
  `everywhere`).
- **Spam filtering**: on by default.
- **Notifications**: two switches, new comments (threads and replies) and
  status changes.

Who can comment comes from the space's [visitor access](/spaces/access):
invite people, mint links, or allow anonymous commenters there. Sharing a
private version with the right person does not make the version public.

## Leave useful feedback

Click the page element or area you mean, write the comment, and draw directly
on the page when pointing beats prose. Each comment captures a screenshot of
the page state by default, so feedback still makes sense after the content
changes. Reviewers can also attach images and files (up to 10 per comment,
5 MB each), and reply and react in the thread.

## Review and archive

Each comment is a thread with a status: **open** or **archived**. Triage
threads from the space's **Comments** page, filtering by status, version,
page, author, or unread, with full-text search.

Archive a thread when the work finishes or the thread is no longer relevant.
Spam filtering is on by default: suspected spam is held out of the main list,
and team admins can review it under the **Spam** filter.

## Embed on another site

A space's comment overlay can load on a third-party site. Allowlist the exact
`https` origins (up to 20, no wildcards):

```bash
sf comments settings set --embed-allow https://staging.example.com
```

An embed origin sees the space at its previews tier with a reduced feature
set. Remove an origin with `--embed-remove`.

## From the command line

Agents and scripts can read and act on threads with `sf comments`:

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

```bash
sf comments export --version v123 --status open --format markdown
```

Use `sf comments export` to hand a version's open feedback to an agent. It
returns every matching thread as Markdown or JSON.
