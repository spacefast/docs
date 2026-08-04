---
title: Publish with Git — nothing to install
description: Push a repository to a temporary Git remote and get a live Spacefast URL without installing the CLI or creating an account.
---

`push.new` turns a Git push into a live site. You do not need the Spacefast CLI
or an account.

## Start a publish

1. Open [push.new](https://push.new).
2. Copy the `git remote add` command shown there.
3. Run it inside the repository you want to publish.
4. Push your current commit.

The commands look like this, but use the signed remote from your own session:

```bash
git remote add pushnew "https://signed-remote.example"
```

```bash
git push pushnew HEAD:main
```

The status page follows the publish and shows the live URL when it finishes.
It also gives you a link to keep the anonymous space in your account.

<Warning title="Keep the generated remote private">
  The signed Git remote is a temporary credential. Do not paste it into chat,
  logs, documentation, or a committed Git configuration. Remove it when you are
  done with `git remote remove pushnew`.
</Warning>

## What gets published

Spacefast detects the project, runs a supported static build when needed, and
publishes the resulting files. A repository that already contains an
`index.html` can publish without a build step.

The status page shows build and publish logs. If detection chooses the wrong
root or output directory, use [build settings](/publishing/git) with a saved
space instead.

## Keep the space

Claim the space from its status page before the countdown expires. Claiming
moves it into your account without changing the live URL.

For a direct file or folder upload instead, use [anonymous
publishing](/publishing/anonymous).
