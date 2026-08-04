---
title: Protect your account
description: Review active sessions, sign out devices, and revoke connected apps that should no longer have access.
---

The security page lists the sessions that can currently use your Spacefast
account. Each entry includes the browser or client, operating system, network
address, start time, and expiry. Your current session is marked.

## Revoke a session

Open account security. Choose a session you do not recognize or no longer use.
Revoke it. That device must sign in again.

Use **Sign out all other sessions** after losing a device or sharing a browser
by mistake. Your current session stays active.

Spacefast asks for a fresh sign-in before showing or changing sensitive
security settings. Completing an older browser login elsewhere does not bypass
it.

## Connected apps

Connected apps are services you authorized to act with your Spacefast identity.
The connections page shows each app and the teams it can reach.

Revoke an app when you no longer use it or do not recognize it. Revocation
stops future access. It does not undo changes the app already made.

## CLI credentials are separate

Browser sessions, OAuth connections, and CLI API keys have different
lifecycles. Revoking one does not revoke the others. After losing a device,
also review [API keys](/account/api-keys) and remove keys the lost computer
could still hold.

## Email you can rely on

Essential security messages always arrive. Two-factor, password, and other
account-protection emails cannot be turned off. Optional product and marketing
email is a per-user choice in your account notification settings.
