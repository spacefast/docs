---
title: Passwords & access
description: Gate a Spacefast space with a shared password, identity- and location-aware access rules, or path-scoped Basic Auth — and control exactly who sees what.
---

Spacefast gives you three ways to control who can see a space, from simplest to most precise:

- **Space password** — one shared secret over everything.
- **Access rules** — allow, block, or require sign-in by identity, IP range, country, or path.
- **`_headers` Basic Auth** — path-scoped, file-based credentials that travel with your publish.

You can combine them. They resolve into a single policy you can inspect at any time with `sf access effective`.

## Space password

A space password protects the whole space, including permanent Version URLs. It works on any claimed space on any plan.

```bash
sf password set
printf '%s\n' "$PASSWORD" | sf password set --stdin
sf password clear
```

`sf password set` prompts interactively, or reads from stdin with `--stdin`. The API equivalent is the `password` field on the space `PATCH` route: a string enables or replaces the password, `null` clears it.

Passwords are stored hashed, never in plain text. A visitor who enters the password gets a cookie for the space; changing or clearing the password invalidates every previously issued cookie, so rotating it locks everyone out immediately.

## Access rules

Access rules go beyond a single password: each rule **allows**, **denies**, or **challenges** (requires sign-in) for visitors matching some condition. Rules are evaluated top to bottom, first match wins.

Manage them with `sf access`:

| Command                                      | What it does                                                                 |
| -------------------------------------------- | ---------------------------------------------------------------------------- |
| `sf access effective` (alias `sf access ls`) | Show the resolved policy — every rule with its source and order. Start here. |
| `sf access show`                             | Show just the rules you've set on this space.                                |
| `sf access grant <audience>`                 | Require visitors to sign in as that audience to enter.                       |
| `sf access ban <audience>`                   | Prepend a deny to the cloud lane for that audience.                           |
| `sf access set <file.json>`                  | Replace all of your rules from a JSON document (full control).               |
| `sf access rm <index>`                       | Remove one rule by the `[index]` shown in `sf access show`.                  |
| `sf access clear`                            | Remove all of your rules.                                                    |

### Lock a space to an audience

An **audience** is an identity glob, matched against people who sign in to Spacefast. Grant one to require sign-in:

```bash
sf access grant 'team:team_123:member'    # anyone on your team
sf access grant 'email:*@acme.com'        # a signed-in user whose email matches
```

Common audience prefixes: `team:<id>:member`, `user:<id>`, `email:` (supports `*` globs against the signed-in user's verified email), and service/external tokens (`svc:`, `ext:`). Visitors are prompted to sign in and are admitted only if their identity matches. Granting by team is the most reliable way to share with named people today.

### Block an audience, an IP range, or a country

`sf access ban` blocks an identity audience by prepending a deny to the cloud lane:

```bash
sf access ban 'email:*@spammer.example'
```

To block by **IP range** or **country**, or to mix conditions, write the rules directly with `sf access set`. A rule is `{ match, effect, auth? }`:

```json
{
  "rules": [
    { "match": { "country": "RU" }, "effect": "deny" },
    { "match": { "ipCidrs": ["203.0.113.0/24"] }, "effect": "deny" },
    {
      "match": { "pathPattern": "/admin/*" },
      "effect": "challenge",
      "auth": { "token": { "requiredGrants": ["team:team_123:member"] } }
    }
  ]
}
```

```bash
sf access set rules.json
```

`match` conditions (all optional, AND-combined): `pathPattern` (glob), `channel`, `ipCidrs`, `country` (ISO-3166 alpha-2), `host`, `agent`, and a single `header`. `effect` is `allow`, `deny`, or `challenge`. A `challenge` rule carries `auth` — either a `token` with `requiredGrants`, or a `password`.

The example above keeps the site public while blocking a country and an IP range, and requiring a team login only under `/admin`.

### Where rules can live

Rules resolve from three sources, in order — **first match wins**:

1. **Platform** — plan-level defaults you can't override (see the note below).
2. **File** — rules you commit to `access.rules` in [`sf.jsonc`](/configuration), so they version and roll back with your site.
3. **Cloud** — rules you set with `sf access`, applied live without a republish.

There is no separate ban pre-pass. `sf access ban` assigns the new deny the first
order inside the cloud lane, so it wins over later cloud allows; platform and
file rules still have earlier merged order values. Put a file-lane deny before
file-lane allows when that deny must travel with the version, and confirm the
actual merged order with `sf access effective`.

File rules use the exact same rule shape as `sf access set` and compile when you publish. An invalid rule fails the publish with a `config_invalid` diagnostic — it is never silently dropped.

```jsonc
// sf.jsonc
{
  "access": {
    "rules": [
      { "match": { "ipCidrs": ["203.0.113.0/24"] }, "effect": "deny" },
      {
        "match": { "pathPattern": "/admin/**" },
        "effect": "challenge",
        "auth": { "token": { "requiredGrants": ["team:team_123:member"] } },
      },
    ],
  },
}
```

Because the rules ship with the publish, `sf rollback` restores the previous version's rules along with its files. Use the cloud lane instead when a rule must change right now, without a republish.

`sf access effective` prints all three merged, each tagged with its `source` and `order`, so you always know which rule decided a request.

:::note
On the Free plan, Version URLs become login-walled 7 days after they're published; on paid plans they stay open as long as you keep them. Paid plans also unlock `_headers` Basic Auth (below).
:::

## `_headers` Basic Auth

:::note
Not available on Free. Available on Personal and Work.
:::

Use a `Basic-Auth` line in [`_headers`](/headers) to protect matching paths with named credentials. Credentials are one or more space-separated `username:password` pairs.

```text
/preview/*
  Basic-Auth: editor:preview-password

/staging/*
  Basic-Auth: alice:one-password bob:another-password
```

- Username cannot contain `:` or whitespace.
- Password cannot contain whitespace and must be non-empty.
- `Basic-Auth` is never sent in the response, and `! Basic-Auth` is invalid because Basic Auth must be configured with credentials.

Because `_headers` ships with each publish, Basic Auth credentials are versioned
with your files and roll back with versions. Anyone who can read the repository
or a retained version may recover historical credentials. Use unique,
non-reused passwords and rotate them after exposure or access changes.
Anonymous spaces cannot use it.

## Which one to use

- **Space password** for one shared secret over everything — client previews, unfinished launches, internal docs. Works on every plan, managed from the CLI or API without touching your files.
- **Access rules** when _who_ or _where_ matters — restrict to a company's email domain or a team, block an abusive IP or country, or require sign-in on just `/admin`. Cloud rules apply live; file rules version with your site.
- **Basic Auth** for specific paths with multiple named users where you want the credentials to live in your repo and roll back with each publish.

## What visitors see

A password-protected space shows the platform password page, themed to your space; entry is remembered until the password changes. A `challenge` access rule prompts the visitor to sign in and admits them only if their identity matches. A `deny` rule serves the platform access-denied page with a `403` (the `X-Spacefast-Reason` header names the rule's `reasonCode` when set). Basic Auth paths return a `401` challenge with nothing else.
