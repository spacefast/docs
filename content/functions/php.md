---
title: Functions for PHP
search:
  tags: [php, handlers, sf_json, functions]
description: "Commit a functions/<route>.php file and it executes at its route, with sf_* helpers for the request, the database, spam checks, and email."
---

A committed `functions/<route>.php` file executes at its derived route.
There is nothing to declare. Publish a static space with a PHP file under
`functions/`, and that one route runs code while everything else stays
static. The handler uses a small `sf_*` prelude to read the request, send
JSON, and reach the same brokered [database](/database), spam, and
[email](/services) services the other runtimes get.

```php
<?php // functions/hello.php serves at /hello
sf_json(['hello' => sf_body()['name'] ?? 'world']);
```

Only files under `functions/` execute. Spacefast serves a stray `.php`
file anywhere else in the publish as inert text, like any other upload.
The handler source itself never serves. Requesting `/functions/hello.php`
returns 404.

## Routes

The route is the file path with the `functions/` prefix and the `.php`
suffix removed. A trailing `index` segment also drops:

| File                        | Route    |
| --------------------------- | -------- |
| `functions/hello.php`       | `/hello` |
| `functions/api/index.php`   | `/api`   |
| `functions/index.php`       | `/`      |

Routes are literal. A segment that is empty, contains `[` or `]`, or starts
with `:` or `.` is not routed in this lane, so a pattern-named file such
as `functions/[id].php` stays an inert upload. A file you commit at the
same key outranks the PHP route, and redirects and [Zero](/zero-runtime) endpoints
win over it. This is the same precedence the
[JavaScript Functions](/functions) lane gets.

## The sf_* prelude

| Helper                | What it does                                                              |
| --------------------- | ------------------------------------------------------------------------- |
| `sf_body()`           | The parsed request body. JSON decodes to an array, a form body decodes to its fields, any other body arrives as its raw string, and no body gives `null`. Malformed JSON fails as a 400, never a silent `null`. |
| `sf_json($data, $status = 200)` | Send `$data` as a JSON response and finish the request.         |
| `sf_auth()`           | The verified visitor identity, in the exact shape a Zero endpoint's `auth` context has: `user`, `userId`, `provider`, `isGuest`, `isAuthenticated`, and the profile fields when identified. |
| `sf_db()`             | The space's [database](/database). A space with no database attached returns a 503 with `php_function_database_unavailable`, because the missing database is a publish-time fact, not a handler error. |
| `sf_spam($submission)` | Classify one visitor submission and return `['spam' => bool, 'discard' => bool]`. |
| `sf_report_spam($submission)` | File a correction: something the verdict let through was spam after all. |
| `sf_report_ham($submission)` | The opposite correction: something flagged was legitimate. |
| `sf_email($message)`  | Queue one message through the space's outbox and return its id.           |

Database failures carry the same error codes as Zero, such as
`zero_db_query_failed` and `zero_db_capability_denied`, so one contract
explains both runtimes.

## How this lane differs from Zero

The brokered services are the same [platform services](/services) Zero
gets, with two deliberate differences:

- **Spam evidence: explicit values win.** Both lanes fill `userIp`,
  `userAgent`, and `referrer` from the visitor's request. The IP comes from
  the platform-resolved trusted peer, never from a client-settable header. In
  a Zero mutation those values are host-owned and final. A PHP handler can
  name any of them explicitly, and the platform takes its value. That is
  what a handler needs when it relays a submission it received from another
  visitor. The corrections
  (`sf_report_spam`, `sf_report_ham`) default nothing: a correction
  describes an earlier request, so its submission carries its own
  complete evidence, `userIp` included.
- **Email does not join your transaction.** The outbox row lands on the
  broker's connection, not on this request's, so a handler that rolls back
  its database work has still queued the mail. Send the message after the
  write it announces, not inside it. A space with no database has nowhere
  to queue, and the broker returns `email_outbox_unavailable`.

`from` is optional and defaults to the space's first verified sender. An
explicit `from` must also be verified, or the broker refuses with
`email_sender_unverified`. Verified senders are management state, not
version content. Rolling a version back does not change which addresses
the space has verified.

## Containment

Handlers run inside a hardened worker. The process is jailed to its own
version's files, and the platform scrubs the environment before your code
runs. `getenv()` sees no platform or database variables, and credentials
for the brokered services never enter the handler. The platform owns
transport and security headers on the response, the same way it does for
[every runtime](/functions#runtime-contract).

## Operate

PHP handlers are ordinary versioned content. They publish, promote, and
roll back with the files beside them. Their output appears in the runtime
logs:

```bash
sf logs runtime --follow
```

The team's entitlements set the number of PHP workers per serving site.
See [Plans, limits, and usage](/account/plans).
