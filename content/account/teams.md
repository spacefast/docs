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
```

```bash
sf teams ls
```

`sf whoami` and `sf status` show the login and the default team that the CLI
uses next.

## Switch teams

```bash
sf switch acme
```

`sf teams switch` is the same operation. Pass `-o` / `--team` on any command to
override the default for one call. Or set `SPACEFAST_TEAM`.

## Invite members

Roles are `owner`, `admin`, or `member`:

```bash
sf teams invitations add jane@example.com --role member
```

```bash
sf teams invitations ls
```

```bash
sf teams invitations resend inv_123
```

```bash
sf teams invitations cancel inv_123
```

The invitee accepts with the invitation id from the invite link:

```bash
sf teams accept inv_123
```

List or remove people already on the team:

```bash
sf teams members ls
```

```bash
sf teams members rm jane@example.com
```

The selected team's [entitlements](/account/billing) report its current member
capacity. The dashboard shows available options when an invitation would exceed
it.

## Access defaults for new spaces

When the team creates a space, Spacefast materializes a root Grant from the
team default: `private`, `team`, or `public`.

```bash
sf teams defaults
```

```bash
sf teams defaults private
```

This affects only the spaces you create after the change. Existing space Grants
do not change. Use [Access](/spaces/access) to change them.

## Related

- [API keys](/account/api-keys) for machine access scoped to a team.
- [Spaces](/spaces) for creating and transferring spaces into a team.
- [`sf login`](/cli#sf-login) for logging the CLI into the right account.
