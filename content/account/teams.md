---
title: Teams
description: Create teams, invite members, switch context, and set defaults for new spaces.
---

A team is the billing and ownership boundary for spaces, domains, API keys, and
plan limits. Your personal login can belong to many teams. CLI and dashboard
commands run against the team you select.

Dashboard teams live at `my.spacefast.com/<team>`.

## Create and list

```bash
sf teams create "Acme Inc"
sf teams ls
```

`sf whoami` and `sf status` show the login and the CLI's current default team.

## Switch teams

```bash
sf switch acme
```

`sf teams switch` is the same operation. Pass `-o` / `--team` on any command to
override the default for one call, or set `SPACEFAST_TEAM`.

## Invite members

Roles are `owner`, `admin`, or `member`:

```bash
sf teams invitations add jane@example.com --role member
sf teams invitations ls
sf teams invitations resend invite_123
sf teams invitations cancel invite_123
```

The invitee accepts with the invitation id from the invite link:

```bash
sf teams accept invite_123
```

List or remove people already on the team:

```bash
sf teams members ls
sf teams members rm jane@example.com
```

The selected team's entitlements report its current member
capacity.

## Access defaults for new spaces

When the team creates a space, Spacefast materializes a root Grant from the
team default: `private`, `team`, or `public`. New teams default to `team`.

```bash
sf teams defaults
sf teams defaults private
```

This affects only the spaces you create after the change. Existing space Grants
do not change. Use [Access](/spaces/access) to change them.

## Audit log

Each team keeps an audit log of team-level events: find it in the dashboard
under **Settings → Activity**. For activity inside a single space, use
[monitoring](/spaces/monitoring) instead.

## Related

- [API keys](/account/api-keys) for machine access scoped to a team.
- [Spaces](/spaces) for creating and transferring spaces into a team.
- [`sf login`](/cli#sf-login) for logging the CLI into the right account.
