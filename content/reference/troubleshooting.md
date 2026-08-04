---
title: Troubleshooting
description: Troubleshooting guidance for publishes, routing, domains, DNS, headers, and version diagnostics.
---

Find the symptom below and run the check next to it.

## DNS diagnostics

```bash
sf domains add www.example.com --wait
```

```bash
sf domains check www.example.com
```

If DNS fails, check that the hostname, record type, and target value exactly match the space instructions.

## Missing index

If the homepage is missing, check that your folder or zip has `index.html` at the root. SPA mode also requires root `index.html`.

## Upload or finalize failures

Retry the publish. Incremental hashing skips unchanged files where possible.
When Spacefast rejects a publish because it exceeds the storage quota, the live
site is not affected. Delete old versions or add storage. Then publish again.

## Rollback recovery

A bad publish never takes the live site down. Promote a known-good version to
recover.

```bash
sf versions ls
```

```bash
sf rollback v12
```

## Version URL asks for sign-in

The live URL is not affected. The team's current entitlements decide whether
older immutable version URLs remain public. See
[Roll back](/publishing/rollback).

## Password or Basic Auth prompts

A password wall on every page means space password protection is on. A browser
sign-in prompt on specific paths means a `_headers` `Basic-Auth` rule matches
them. See [Passwords & access](/spaces/access).

## Local CLI setup

`sf doctor` checks local state, auth, API reachability, and the current space link.
