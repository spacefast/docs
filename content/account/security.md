---
title: Protect your account
description: Review active sessions and sign out devices that should no longer have access.
---

The security page lists the sessions that can currently use your Spacefast
account. Each entry includes the browser or client, operating system, network
address, start time, and expiry. Your current session is marked.

## Revoke a session

Open account security, choose a session you do not recognize or no longer use,
and revoke it. That device must sign in again.

Use **Sign out all other sessions** after losing a device or sharing a browser
by mistake. Your current session stays active.

Spacefast asks for a fresh sign-in before showing or changing sensitive
security settings. That check is deliberate; completing an older browser login
elsewhere does not bypass it.

## CLI credentials are separate

Browser sessions and CLI API keys have different lifecycles. Revoking a browser
session does not replace reviewing [API keys](/account/api-keys) and removing
keys a lost computer could still hold.
