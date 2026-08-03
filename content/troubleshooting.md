---
title: Troubleshooting
description: Troubleshooting guidance for publishes, routing, domains, DNS, headers, and version diagnostics.
---

## DNS diagnostics

```bash
sf domains add www.example.com --wait
```

```bash
sf domains check www.example.com
```

If DNS fails, confirm the hostname, record type, and target value exactly match the space instructions.

## Missing index

If the homepage is missing, confirm your folder or zip has `index.html` at the root. SPA mode also requires root `index.html`.

## Upload or finalize failures

Retry the publish. Incremental hashing avoids resending unchanged files where possible. If publishes are rejected over storage quota, the live site is unaffected — delete old versions or add storage, then publish again.

## Rollback recovery

The live site is never taken down by a bad publish; promote a known-good version to recover.

```bash
sf versions ls
```

```bash
sf rollback v12
```

## Version URL asks for sign-in

On Free, permanent Version URLs are public for 7 days after publish, then require sign-in. The live URL is unaffected. On Personal and Work, version URLs stay public. See [Rollback & versions](/rollback).

## Password or Basic Auth prompts

A password wall on every page means space password protection is on; a browser sign-in prompt on specific paths means a `_headers` `Basic-Auth` rule matches them. See [Passwords & access](/access).

## Local CLI setup

`sf doctor` checks local state, auth, API reachability, and the current space link.
