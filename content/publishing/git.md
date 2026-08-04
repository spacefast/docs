---
title: Build from Git
description: Connect a Git repository so Spacefast builds and publishes your space on every push, with branch previews and pull-request previews.
---

Instead of uploading a prebuilt folder, you can connect a Git repository. Spacefast
runs your build in the cloud. Every push produces a new
[version](/publishing/rollback). Pushes to your production branch publish
automatically. Other branches and pull requests get their own preview URLs.

## Connect a repository

The fastest path is GitHub. Install the Spacefast GitHub App. Pick a repository.
Spacefast detects your framework and build settings:

```bash
sf git connect --provider github --repository owner/repo
```

`sf git connect` saves the connection to the current space. Useful flags:

| Flag                                                                             | What it does                                                                                                                                                                                         |
| -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--production-branch <name>`                                                     | Branch whose builds publish to the live channel (defaults to the repo default branch).                                                                                                               |
| `--build-command`, `--install-command`, `--output-directory`, `--root-directory` | Override detected build settings.                                                                                                                                                                    |
| `--framework-preset <name>`                                                      | Pin a framework instead of auto-detecting.                                                                                                                                                           |
| `--apply-best`                                                                   | Detect and save the best build settings during connect.                                                                                                                                              |
| `--auto-deploy-production` / `--no-auto-deploy-production`                       | Whether production-branch pushes build and publish (default on).                                                                                                                                     |
| `--auto-deploy-previews` / `--no-auto-deploy-previews`                           | Whether other branches and PRs build previews (default on).                                                                                                                                          |
| `--build-now`                                                                    | Queue a build immediately after connecting.                                                                                                                                                          |
| `--install-directory`                                                            | Dependency install directory, when it differs from the app root.                                                                                                                                     |
| `--ignored-build-command`                                                        | Command that skips the build when it exits 0.                                                                                                                                                        |
| `--platform-preset <name>`                                                       | Import build settings from another platform's config, such as Vercel or Cloudflare. Pair with `--allow-unsupported-platform-features` to proceed when that config uses features Spacefast cannot run. |
| `--config <path>`                                                                | Read repository build settings from an `sf.jsonc` file.                                                                                                                                              |
| `--ref <ref>`                                                                    | Ref, branch, tag, or commit to sync or build after connecting.                                                                                                                                       |
| `--sync`                                                                         | Request a repository sync after connecting.                                                                                                                                                          |

GitHub is the first-class provider. The App install and repository picker handle
authentication for you. GitLab, Bitbucket, and plain Git remotes work too. They
have no app or OAuth flow. Connect them with `--clone-url <url>` and a
`--credential` (or set `SPACEFAST_REPOSITORY_CREDENTIAL`). Use `sf git ls` to
inspect the connection. Use `sf git update` to change settings. Use
`sf git disconnect` to remove it.

Building from a repo requires the static runtime. Spacefast runs your build,
packs the static output, and creates a version through the normal publish path.

## What a push does

After you connect the repository, Spacefast listens for repository events:

- **Push to the production branch** → Spacefast builds the commit. If `auto-deploy-production` is on, Spacefast promotes the new version to your **live** channel. This is a real publish.
- **Push to any other branch** → Spacefast builds a **preview** version when `auto-deploy-previews` is on. The preview gets its own branch subdomain. Spacefast slugifies the branch name: slashes and underscores become dashes. It then uses the slug as a hostname label in front of your space's hostname. The preview URL for branch `feature/nav` looks like `https://br-feature-nav--<your-space-host>/`. If you delete the branch, Spacefast retires its preview.
- **Pull request** (opened, reopened, synchronized, or marked ready for review) → Spacefast builds a **PR preview**. If you close the pull request, Spacefast retires the preview.

Spacefast skips pushes that do not touch your app root or install directory.
There is no rebuild for an unrelated change. **Spacefast also skips pull
requests from forks** — it never exposes build secrets to untrusted code.

## Trigger a build manually

You do not have to wait for a push:

```bash
sf git build --branch main          # build the current production settings now
```

```bash
sf git build --pull-request 42      # build a specific PR
```

```bash
sf git build --target preview --wait  # force a preview build and wait for it
```

`sf git build` accepts the same per-build overrides as connect
(`--build-command`, `--output-directory`, and so on). It also accepts `--wait`
/ `--wait-timeout` to block until the build finishes.

## Watch and manage builds

Every build is a tracked object you can follow to completion:

```bash
sf builds ls                 # recent builds, newest first
```

```bash
sf builds get bld_123        # status and details for one build
```

```bash
sf builds logs bld_123 -f    # stream runner logs live
```

```bash
sf builds retry bld_123      # re-run with the same input and settings
```

```bash
sf builds cancel bld_123     # cancel a queued or running build
```

```bash
sf builds resume-upload bld_123  # refresh the source upload for a build waiting on its archive
```

Builds move through `queued` → `running` → a terminal `succeeded`, `failed`,
`canceled`, or `skipped`. `sf builds logs -f` follows the live log stream until
the build reaches a terminal state.

## When a build fails

A failed build carries a stable error code. `sf builds get` shows the code.
`sf builds logs` shows what happened. Each code has its own page:

- [`build_command_missing`](/errors/build_command_missing) — Spacefast could not find a build or install command.
- [`build_install_failed`](/errors/build_install_failed) — the dependency install step failed.
- [`build_timeout`](/errors/build_timeout) — the build exceeded its time limit.
- [`build_oom`](/errors/build_oom) — the build process was killed, most likely out of memory.
- [`build_output_dir_missing`](/errors/build_output_dir_missing) — the build finished, but it did not produce its output directory.
- [`build_no_index_html`](/errors/build_no_index_html) — the build produced output but no `index.html` at the site root.

Fix the settings or the code. Then run `sf builds retry`, or push again.

## What appears on GitHub

For a GitHub App connection, Spacefast reports build status back to the repository:

- A check run named **Spacefast Builds** on the commit. Spacefast updates it as the build progresses.
- A GitHub **Deployment** for the built version.
- On pull requests, a comment with the preview URL. Spacefast updates the comment as new commits build.

## Push-to-deploy without a connection

If you would rather push straight to Spacefast instead of wiring up a provider,
install a signed push remote:

```bash
sf git origin            # adds a `spacefast` remote next to your `origin`
```

```bash
git push spacefast main  # deploys the pushed commit
```

Use `sf git origin --set-origin` to make Spacefast your `origin` remote instead
of adding a second one.

## Local builds

`sf build [dir]` runs the same detect-build-and-pack step **locally**. It writes
a `.spacefast/build-output.tgz` you can publish with `sf publish`. It is handy
for debugging your build settings or for CI that wants to build before uploading.
This is separate from cloud builds. It never touches a repository connection.
