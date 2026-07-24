---
title: Comments
description: Leave comments directly on a Spacefast preview — threaded, anchored to the page, and triaged from a shared inbox.
---

Comments turn any version URL into a place to give feedback. Reviewers open a preview, click on the part of the page they're commenting on, and leave a thread — no Spacefast account required if you allow anonymous reviewers. Comments are anchored to the page and to the exact [version](/rollback) they were left on, so feedback never drifts as the site changes.

## Turn it on

Enable Comments in your space settings. Once on, every version URL shows the native comment controls. Options:

- **Comments on the live site** — extend commenting beyond preview snapshots to your published site.
- **Anonymous reviewers** — let people comment with just a name, or require them to sign in.
- **Invited reviewers** — invite specific people by email; they're added as reviewers automatically.
- **Notifications** — notify reviewers about new comments and replies, and about status changes.

## Review and archive

Each comment is a thread with a status: **open** or **archived**. Reviewers reply inline; you triage everything from the **Comments inbox** in the dashboard, filtered by space or version.

## From the command line

Agents and scripts can read and act on threads with `sf comments`:

```bash
sf comments list --version v123 --status open
sf comments get cmt_123
sf comments reply cmt_123 --body "Fixed in the next build"
sf comments archive cmt_123
sf comments export --version v123 --format markdown
```

`sf comments export` is the quickest way to hand a version's open feedback to an agent: it returns every thread as Markdown (or JSON) ready to act on.
