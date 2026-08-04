---
title: Comments
description: Leave comments directly on a Spacefast preview — threaded, anchored to the page, and triaged from a shared inbox.
---

Comments turn any version URL into a place to give feedback. Reviewers open a
preview, click the part of the page they mean, and leave a thread.
Spacefast anchors each comment to the page and to the exact
[version](/publishing/rollback). Feedback does not drift when the site changes.

## Turn it on

Enable Comments in the space settings. After that, version URLs show the
comment controls. Options include:

- **Comments on the live site** — extend feedback beyond version previews.
- **Anonymous reviewers** — accept a name without a Spacefast account, or
  require sign-in.
- **Invited reviewers** — invite specific people by email.
- **Notifications** — send new-thread, reply, and status updates.

Comments follow the space's [visitor access](/spaces/access). Sharing a private
version with the right person does not make the version public.

## Leave useful feedback

Click the page element or area you mean. Write the comment. Include a
screenshot when the visual state matters. Reviewers can reply and react in the
thread instead of opening a second conversation elsewhere.

## Review and archive

Each comment is a thread with a status: **open** or **archived**. Triage threads
from the **Comments inbox**. Filter by space or version. Use the unread filter
to find replies you did not read.

Archive a thread when the work finishes or the thread is no longer relevant. If
you enable anonymous feedback, review reported or suspicious messages from the
spam queue. Do not let them interrupt the ordinary inbox.

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
sf comments export --version v123 --format markdown
```

`sf comments export` is the quickest way to hand a version's open feedback to
an agent. It returns every thread as Markdown or JSON, ready to act on.
