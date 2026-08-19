---
title: Teams
description: Create teams, invite members, switch context, and set defaults for new spaces.
---

A team is the billing and ownership boundary for spaces, domains, API
keys, and plan limits. Your personal login can belong to many teams, and
CLI and dashboard commands run against the team you select. Dashboard teams
live at `my.spacefast.com/<team>`.

## Create and list

```bash
sf teams create "Acme Inc"
sf teams ls
```

`sf whoami` and `sf status` show the login and the CLI's current default
team.

## Switch teams

```bash
sf switch acme
```

`sf teams switch` is the same operation. Pass `-o` / `--team` on any
command to override the default for one call, or set `SPACEFAST_TEAM`.

## Invite members

Roles are `owner`, `admin`, or `member`:

```bash
sf teams invitations add jane@example.com --role member
sf teams invitations ls
sf teams invitations resend invite_123
sf teams invitations cancel invite_123
```

The invitee accepts with the invitation ID from the invite link:

```bash
sf teams accept invite_123
```

List or remove people already on the team:

```bash
sf teams members ls
sf teams members rm jane@example.com
```

The selected team's entitlements report its current member capacity.

## Access defaults for new spaces

When the team creates a space, Spacefast creates a root Grant from the
team default: `private`, `team`, or `public`. New teams default to `team`.

```bash
sf teams defaults
sf teams defaults private
```

Changing the default affects only spaces that you create afterward.
Existing space Grants do not change. To change them, use
[Access](/share).

## Audit log

Each team keeps an audit log of team-level events, in the dashboard under
**Settings → Activity**. For activity inside a single space, use
[monitoring](/operate/monitoring) instead.

## Related

- [API keys](/account/api-keys) covers machine access scoped to a team.
- [Manage spaces](/operate/spaces) covers creating and transferring
  spaces into a team.
- [`sf login`](/cli#sf-login) covers logging the CLI into the right
  account.
