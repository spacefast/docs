---
title: Try the CLI in your browser
description: Publish and manage a Spacefast site from a browser terminal before installing anything.
---

The [Spacefast browser terminal](https://my.spacefast.com/terminal) gives you a
working shell and a useful slice of the `sf` CLI. It is the fastest way to try
Spacefast when you do not want to install anything yet.

## Publish the sample site

The terminal starts with a small static site in `/workspace/site`.

```bash
cd /workspace/site
```

```bash
sf publish .
```

The receipt includes the live URL, version, and a link for keeping the space.
Open the live URL from the terminal with:

```bash
open https://example.sf.space
```

Replace the example URL with the one from your publish receipt.

## Sign in when you need your account

Anonymous publishing works without a login. To manage spaces already in your
account, run:

```bash
sf login
```

The terminal opens the device-login page in a new tab. Return after approving
it, then check the active identity with `sf whoami`.

## What works here

The browser terminal can publish files, inspect spaces and versions, move the
live version, manage variables, attach and check domains, and read the bundled
help. Run `sf --help` to explore its commands.

It is a browser sandbox, not your computer. Commands that need local files,
installed packages, or a full operating system belong in the [real
CLI](/cli). If the terminal says a command is unavailable, install the CLI and
run it locally.

## Keep going

- [Publish your own files](/getting-started/quickstart)
- [Publish with Git and no installation](/publishing/push-new)
- [Set up an agent](/getting-started/agents)
