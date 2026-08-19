---
search:
  tags: [remote, builds, deploy, source]
title: Build in the cloud without Git
description: Upload source with sf publish --remote and let Spacefast run the build, with no repository connection required.
---

[Publishing](/publish) uploads output you already have, and
[Build from Git](/publish/git) builds a connected repository on every push.
`sf publish --remote` is the path between them: upload your source as it
sits on disk, and Spacefast runs the build in the cloud — no repository
connection, no local build tools.

Use it when the machine holding the source should not run the build: a
laptop without the project's build tools, a CI job that only checks out code,
or an agent working in a sandbox.

## Publish from source

```bash
sf publish --remote
```

The CLI uploads a source archive, and the remote runner detects the
framework, install command, and build command, runs the build, and sends
the output through the normal publish path — a successful build produces a
[version](/publish/versions) like any other publish. When the app lives in
a repository subdirectory, point at it:

```bash
sf publish --remote --root-directory apps/web
```

Archives take this path on their own: `sf publish ./site.zip` always uses
remote detection, which packs static content unchanged and builds detected
applications.

The flags that shape a remote build:

| Flag                        | What it does                                                                 |
| --------------------------- | ---------------------------------------------------------------------------- |
| `--root-directory <dir>`    | Repository subdirectory that contains the app.                               |
| `--install-directory <dir>` | Repository subdirectory to run dependency installation from.                 |
| `--source-include <path>`   | Ignored file or directory to include in the source archive. Repeatable.      |
| `--ignored-build-command`   | Command that skips the build when it exits 0.                                |
| `--skip-install`            | Skip dependency installation.                                                |
| `--skip-build`              | Skip the build command and publish the selected directory unless `--output-directory` is set. |
| `--[no-]auto-finalize`      | Finalize the remote build automatically after staging its output.            |

`--prebuilt` is the opposite move: publish a prebuilt directory or archive
without installing or building anything. Detection overrides such as
`--build-command` and `--output-directory` work here too; the full set is
in the [`sf publish` reference](/cli#sf-publish-dir). For a space that also
has a repository connection, `sf builds detect` shows the detected app and
build settings, with ranked candidates when the repository holds more than
one app.

## Local builds, remote builds

`sf build` runs the same detect-build-and-pack step
[locally](/publish/git#local-builds) and writes
`.spacefast/build-output.tgz` for a plain `sf publish`. Reach for
`--remote` when the build should run on Spacefast's runner instead of your
machine; the result is the same kind of version either way.

## Watch the build

A remote publish creates a build you can follow like any other:
`sf builds ls`, `sf builds logs -f`, and `sf builds retry` all apply, and
[Build from Git](/publish/git#watch-and-manage-builds) covers the full set.
In scripts, `sf publish --remote --json --stream` emits a JSONL stream of
build and publish events. If a source upload stalls,
`sf builds resume-upload bld_123` refreshes the upload instruction.

## The API underneath

`POST /v1/spaces/{spaceId}/builds` creates a build from a repository or
source archive: repository inputs use the saved connection, and source
archive inputs receive a Build-owned upload instruction.
`POST /v1/builds/{buildId}/uploads/resume` returns a fresh upload
instruction for an archive build that is still waiting for its source. The
[API reference](/api/reference) has both operations.
