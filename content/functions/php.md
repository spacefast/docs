---
title: Functions for PHP
search:
  tags: [php, handlers, sf_json, functions]
description: "Commit a functions/<route>.php file and it executes at its route, with sf_* helpers for the request, the database, spam checks, and email."
---

A committed `functions/<route>.php` file executes at its derived route.
There is nothing to declare: publish a static space with a PHP file under
`functions/`, and that one route runs code while everything else stays
static. The handler writes to a small `sf_*` prelude — request in, JSON
out, with the same brokered [database](/database), spam, and
[email](/services) the other runtimes get.

```php
<?php // functions/hello.php — serves at /hello
sf_json(['hello' => sf_body()['name'] ?? 'world']);
```

Only files under `functions/` execute. A stray `.php` file anywhere else in
the publish is served as inert text like any other upload, and the handler
source itself never serves: requesting `/functions/hello.php` returns 404.

## Routes

The route is the file path with the `functions/` prefix and `.php` suffix
removed, and a trailing `index` segment drops:

| File                        | Route    |
| --------------------------- | -------- |
| `functions/hello.php`       | `/hello` |
| `functions/api/index.php`   | `/api`   |
| `functions/index.php`       | `/`      |

Routes are literal. A segment that is empty, contains `[` or `]`, or starts
with `:` or `.` is not routed in this lane, so a pattern-named file such
as `functions/[id].php` stays an inert upload. A file you commit at the
same key outranks the PHP route, and redirects and [Zero](/zero) actions
win over it — the same precedence the [JS Functions](/functions) lane gets.

## The sf_* prelude

| Helper                | What it does                                                              |
| --------------------- | ------------------------------------------------------------------------- |
| `sf_body()`           | The parsed request body: JSON decodes to an array, form bodies answer as their fields, any other body answers as its raw string, and no body answers `null`. Malformed JSON fails loudly as a 400, never a silent `null`. |
| `sf_json($data, $status = 200)` | Send `$data` as a JSON response and finish the request.         |
| `sf_auth()`           | The verified visitor identity, in the exact shape a Zero endpoint's `auth` context has: `user`, `userId`, `provider`, `isGuest`, `isAuthenticated`, and the profile fields when identified. |
| `sf_db()`             | The space's [database](/database). A space with no database attached answers a named 503, `php_function_database_unavailable`, because that is a publish-time fact rather than something the handler did wrong. |
| `sf_spam($submission)` | Classify one visitor submission; returns `['spam' => bool, 'discard' => bool]`. |
| `sf_email($message)`  | Queue one message through the space's outbox and return its id.           |

Database failures carry the same error vocabulary the capsule lane
surfaces (`zero_db_query_failed`, `zero_db_capability_denied`, and
friends), so one contract explains both runtimes.

## How this lane differs from Zero

The brokered services are the same services [Zero](/services) gets, with
two deliberate differences:

- **Spam evidence is yours to supply.** A Zero mutation gets the visitor's
  IP and user agent from the trusted request envelope; a PHP handler names
  them in the submission itself. Nothing is defaulted for you — one shared
  address for every visitor would be a worse verdict than none. The
  correction verbs (`reportSpam`, `reportHam`) stay on the capsule surface.
- **Email does not join your transaction.** The outbox row lands on the
  broker's connection, not on this request's, so a handler that rolls its
  database work back has still queued the mail. Send after the write it
  announces, not inside it. A space with no database has nowhere to queue,
  and the broker says so: `email_outbox_unavailable`.

`from` is optional and defaults to the space's first verified sender; an
explicit `from` must also be verified or the broker refuses with
`email_sender_unverified`. Who a space may send as is management state,
not version content: rolling a version back does not roll back which
addresses it has proven it owns.

## Containment

Handlers run inside a hardened worker: the process is jailed to its own
version's files, and the platform environment is scrubbed before your code
runs — `getenv()` sees no platform or database variables, and credentials
for the brokered services never enter the handler at all. The platform
owns transport and security headers on the response, the same way it does
for [every runtime](/functions#runtime-contract).

## Operate

PHP handlers are ordinary versioned content: they publish, promote, and
roll back with the files beside them, and their output appears in the
runtime logs:

```bash
sf logs runtime --follow
```

The team's entitlements set the number of PHP workers per serving site;
see [Plans, limits, and usage](/account/plans).
