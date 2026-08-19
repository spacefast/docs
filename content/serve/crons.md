---
search:
  tags: [crons, schedule, jobs, sf.jsonc]
title: Scheduled jobs
description: Declare cron entries in sf.jsonc, and Spacefast requests your space's own paths on a schedule.
---

A cron entry asks Spacefast to request one of your space's own paths on a
schedule. There is no separate job runner to configure. The scheduled
request goes through the same routing a visitor gets, so the path can be a
[Zero](/zero) route, a [Functions](/functions) handler, or anything else
your space serves.

Crons live in [`sf.jsonc`](/serve/settings), so they travel with the
version. Publishing changes the schedule, a rollback restores the previous
one, and removing the `crons` key stops the work.

## Declare a job

Add a `crons` array to `sf.jsonc`, one entry per job:

```jsonc
{
  "crons": [
    { "path": "/api/digest", "schedule": "0 5 * * *" },
    { "path": "/api/cron/growth-report", "schedule": "weekly" },
  ],
}
```

Each entry names a `path` and a `schedule`. The path is literal. It must
start with `/`, and it cannot carry `*` splats, `:placeholder` segments, a
query, or a fragment.

Every path also compiles to a key, which is the path converted to lowercase
with runs of non-alphanumeric characters collapsed to one dash. For
example, `/api/digest` becomes `api-digest`. The key names the job in
`sf crons` output, and it must be unique. Declaring the same path twice, or
two paths that compile to the same key, fails validation with
`config_cron_duplicate_path`.

## Schedules

A schedule takes one of three forms, and Spacefast stores it exactly as you
wrote it:

| Form              | Values                                                      |
| ----------------- | ----------------------------------------------------------- |
| Named interval    | `hourly`, `daily`, `twicedaily`, `weekly`                   |
| Count shorthand   | `Nh` (1–12 per hour), `Nd` (1–23 per day), `Nw` (1–6 per week) |
| Crontab           | Five fields: minute, hour, day of month, month, weekday     |

Crontab fields accept numbers, `,` lists, `-` ranges, and `/` steps over
`*` or a range. For example, `*/5 * * * *` runs every five minutes.
Spacefast does not accept macros such as `@daily` or month and weekday
names such as `jan` and `mon`.

## How the request reaches your space

On schedule, Spacefast issues a `GET` request for the declared path against
the live version, dispatched exactly like a visitor request. Two things
mark the request as the platform's:

- The request carries an `x-spacefast-cron` header. The scheduler adds the
  header, and Spacefast strips it from every inbound request, so a handler
  that sees it knows that only the schedule could have sent it.
- When the space declares a `CRON_SECRET` runtime
  [variable](/publish/variables), the request carries
  `authorization: Bearer <CRON_SECRET>`. A space without the variable gets
  no `authorization` header at all.

`CRON_SECRET` is the half of the proof you own. Set it once, and have the
handler compare the bearer value before doing scheduled work.

A response of 400 or above counts as a failure, and `sf crons ls` reports
the last failure for each job.

## Inspect and test

List the jobs the live version declares:

```bash
sf crons ls --space docs
```

`sf crons run` requests the declared path over HTTPS immediately, so you
can see what the schedule sees without waiting for it. It sends the same
request without the platform's own cron header. A handler that checks
`CRON_SECRET` still needs the bearer header:

```bash
sf crons run /api/digest
```

```bash
sf crons run api-digest --header "authorization: Bearer $CRON_SECRET"
```

The target is a cron key or path, as shown by `sf crons ls`. When the path
answers 400 or above, the command exits non-zero.

## Limits

- A space can declare at most 8 entries.
- A path supports up to 512 characters and must contain at least one
  letter or digit.
- Publishing past a limit fails validation. The errors
  `config_cron_too_many`, `config_cron_invalid_path`,
  `config_cron_invalid_schedule`, and `config_cron_duplicate_path` name the
  exact entry and field.
