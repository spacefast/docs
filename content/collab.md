---
title: Collab
description: Leave review comments directly on a Spacefast preview — threaded, anchored to the page, and triaged from a shared inbox.
---

Collab turns any version URL into a place to give feedback. Reviewers open a preview, click on the part of the page they're commenting on, and leave a thread — no Spacefast account required if you allow anonymous reviewers. Comments are anchored to the page and to the exact [version](/rollback) they were left on, so feedback never drifts as the site changes.

## Turn it on

Enable Collab in your space settings under **Collab**. Once on, every version URL shows review controls. Options:

- **Comments on the live site** — extend commenting beyond preview snapshots to your published site.
- **Anonymous reviewers** — let people comment with just a name, or require them to sign in.
- **Invited reviewers** — invite specific people by email; they're added as reviewers automatically.
- **Notifications** — notify reviewers about new comments and replies, and about status changes.

## Review and resolve

Each comment is a thread with a status: **open**, then **resolved**, and reopened if it comes back. Reviewers reply inline; you triage everything from the **Collab inbox** in the dashboard, filtered by space or version.

## From the command line

Agents and scripts can read and act on threads with `sf annotations`:

```bash
sf annotations list --version v123 --status open   # open threads on a version
sf annotations get ann_123                          # one thread
sf annotations reply ann_123 --body "Fixed in the next build"
sf annotations resolve ann_123
sf annotations export --version v123 --format markdown  # review context for an agent
```

`sf annotations export` is the quickest way to hand a version's open feedback to an agent: it returns every thread as Markdown (or JSON) ready to act on.
