---
title: CLI reference
description: Command-line documentation for publishing, inspecting, claiming, deleting, and operating Spacefast spaces.
---

Use this reference to look up Spacefast CLI commands, arguments, flags, examples, and environment variables.

## Set up with your agent

Tell your agent to pick the smallest lane that does the job:

- Start with the no-install publish API for the first live URL.
- Use `sf publish --json` for repeat local updates.
- Connect On-Device MCP when the agent needs checkout-aware file access, logs, rollback, domains, or workspace edits.
- Use hosted MCP for cloud agents that cannot read local paths.

## Usage

```text
$ npm install -g spacefast
$ sf COMMAND
running command...
$ sf (--version)
spacefast/0.0.13
$ sf --help [COMMAND]
USAGE
  $ sf COMMAND
...
```

## Common flags

These flags are available on most commands:

```text
SPACE SELECTION FLAGS
  -o, --team=<value>   [env: SPACEFAST_TEAM] Team slug, ID, or name.
      --space=<value>  [env: SPACEFAST_SPACE] Space ID, live URL, domain, or slug.

AUTHENTICATION FLAGS
  --claim-token=<value>  [env: SPACEFAST_CLAIM_TOKEN] Anonymous space claim token.
  --token=<value>        [env: SPACEFAST_TOKEN] Access token for non-interactive auth.

GLOBAL FLAGS
  --json  Format output as json.
```

## Commands

- [`sf access`](#sf-access)
- [`sf access logout-all`](#sf-access-logout-all)
- [`sf activity`](#sf-activity)
- [`sf agents init`](#sf-agents-init)
- [`sf analytics`](#sf-analytics)
- [`sf api METHODORPATH [PATH]`](#sf-api-methodorpath-path)
- [`sf api-keys`](#sf-api-keys)
- [`sf api-keys create`](#sf-api-keys-create)
- [`sf api-keys delete ID`](#sf-api-keys-delete-id)
- [`sf api-keys list`](#sf-api-keys-list)
- [`sf api-keys ls`](#sf-api-keys-ls)
- [`sf api-keys revoke ID`](#sf-api-keys-revoke-id)
- [`sf api-keys rm ID`](#sf-api-keys-rm-id)
- [`sf apply`](#sf-apply)
- [`sf auth`](#sf-auth)
- [`sf autocomplete [SHELL]`](#sf-autocomplete-shell)
- [`sf build [DIR]`](#sf-build-dir)
- [`sf builds cancel BUILD`](#sf-builds-cancel-build)
- [`sf builds detect`](#sf-builds-detect)
- [`sf builds get BUILD`](#sf-builds-get-build)
- [`sf builds logs BUILD`](#sf-builds-logs-build)
- [`sf builds ls`](#sf-builds-ls)
- [`sf builds resume-upload BUILD`](#sf-builds-resume-upload-build)
- [`sf builds retry BUILD`](#sf-builds-retry-build)
- [`sf channels`](#sf-channels)
- [`sf channels history [NAME]`](#sf-channels-history-name)
- [`sf channels ls`](#sf-channels-ls)
- [`sf comments`](#sf-comments)
- [`sf comments archive COMMENT`](#sf-comments-archive-comment)
- [`sf comments export`](#sf-comments-export)
- [`sf comments get COMMENT`](#sf-comments-get-comment)
- [`sf comments list`](#sf-comments-list)
- [`sf comments reply COMMENT`](#sf-comments-reply-comment)
- [`sf comments unarchive COMMENT`](#sf-comments-unarchive-comment)
- [`sf continue`](#sf-continue)
- [`sf create NAME`](#sf-create-name)
- [`sf demo`](#sf-demo)
- [`sf demo agent`](#sf-demo-agent)
- [`sf deployments`](#sf-deployments)
- [`sf deployments get DEPLOYMENT`](#sf-deployments-get-deployment)
- [`sf deployments promote DEPLOYMENT`](#sf-deployments-promote-deployment)
- [`sf deployments rollback DEPLOYMENT`](#sf-deployments-rollback-deployment)
- [`sf design`](#sf-design)
- [`sf design generate`](#sf-design-generate)
- [`sf dev`](#sf-dev)
- [`sf docs [QUERY]`](#sf-docs-query)
- [`sf doctor`](#sf-doctor)
- [`sf domains`](#sf-domains)
- [`sf domains add HOSTNAME`](#sf-domains-add-hostname)
- [`sf domains check DOMAIN`](#sf-domains-check-domain)
- [`sf domains diagnostics DOMAIN`](#sf-domains-diagnostics-domain)
- [`sf domains dns`](#sf-domains-dns)
- [`sf domains dns add DOMAIN`](#sf-domains-dns-add-domain)
- [`sf domains dns batch DOMAIN`](#sf-domains-dns-batch-domain)
- [`sf domains dns capabilities DOMAIN`](#sf-domains-dns-capabilities-domain)
- [`sf domains dns export DOMAIN`](#sf-domains-dns-export-domain)
- [`sf domains dns ls DOMAIN`](#sf-domains-dns-ls-domain)
- [`sf domains dns refresh DOMAIN`](#sf-domains-dns-refresh-domain)
- [`sf domains dns rm DOMAIN RECORD`](#sf-domains-dns-rm-domain-record)
- [`sf domains dns update DOMAIN RECORD`](#sf-domains-dns-update-domain-record)
- [`sf domains ls`](#sf-domains-ls)
- [`sf domains nameservers DOMAIN`](#sf-domains-nameservers-domain)
- [`sf domains nameservers set DOMAIN NAMESERVERS`](#sf-domains-nameservers-set-domain-nameservers)
- [`sf domains rm DOMAIN`](#sf-domains-rm-domain)
- [`sf domains search [QUERY]`](#sf-domains-search-query)
- [`sf env`](#sf-env)
- [`sf env export-template [DIR]`](#sf-env-export-template-dir)
- [`sf env import FILE`](#sf-env-import-file)
- [`sf env ls`](#sf-env-ls)
- [`sf env pull [FILE]`](#sf-env-pull-file)
- [`sf env rm NAME`](#sf-env-rm-name)
- [`sf env set NAME VALUE`](#sf-env-set-name-value)
- [`sf feedback`](#sf-feedback)
- [`sf fetch [PATH]`](#sf-fetch-path)
- [`sf git`](#sf-git)
- [`sf git build`](#sf-git-build)
- [`sf git connect`](#sf-git-connect)
- [`sf git disconnect`](#sf-git-disconnect)
- [`sf git ls`](#sf-git-ls)
- [`sf git origin`](#sf-git-origin)
- [`sf git sync`](#sf-git-sync)
- [`sf git update`](#sf-git-update)
- [`sf help [COMMAND]`](#sf-help-command)
- [`sf init`](#sf-init)
- [`sf inspect [TARGET]`](#sf-inspect-target)
- [`sf link`](#sf-link)
- [`sf login`](#sf-login)
- [`sf logout`](#sf-logout)
- [`sf logs [TARGET] [KIND]`](#sf-logs-target-kind)
- [`sf mcp`](#sf-mcp)
- [`sf mcp daemon`](#sf-mcp-daemon)
- [`sf mcp http`](#sf-mcp-http)
- [`sf mcp install`](#sf-mcp-install)
- [`sf mcp proxy`](#sf-mcp-proxy)
- [`sf mcp status`](#sf-mcp-status)
- [`sf open [TARGET]`](#sf-open-target)
- [`sf operations [ID]`](#sf-operations-id)
- [`sf pages`](#sf-pages)
- [`sf pages pull [TARGET]`](#sf-pages-pull-target)
- [`sf pages validate`](#sf-pages-validate)
- [`sf profiles`](#sf-profiles)
- [`sf profiles rm NAME`](#sf-profiles-rm-name)
- [`sf profiles set NAME`](#sf-profiles-set-name)
- [`sf profiles use NAME`](#sf-profiles-use-name)
- [`sf promote [VERSION]`](#sf-promote-version)
- [`sf publish [DIR]`](#sf-publish-dir)
- [`sf redeploy [BUILD]`](#sf-redeploy-build)
- [`sf rollback [VERSION]`](#sf-rollback-version)
- [`sf routing`](#sf-routing)
- [`sf routing compute`](#sf-routing-compute)
- [`sf routing inspect`](#sf-routing-inspect)
- [`sf runtime`](#sf-runtime)
- [`sf runtime status`](#sf-runtime-status)
- [`sf setup`](#sf-setup)
- [`sf setup agent`](#sf-setup-agent)
- [`sf share`](#sf-share)
- [`sf share check`](#sf-share-check)
- [`sf share grant`](#sf-share-grant)
- [`sf share grant edit ID`](#sf-share-grant-edit-id)
- [`sf share identity`](#sf-share-identity)
- [`sf share identity create`](#sf-share-identity-create)
- [`sf share identity grant`](#sf-share-identity-grant)
- [`sf share identity ls`](#sf-share-identity-ls)
- [`sf share identity revoke CONNECTION`](#sf-share-identity-revoke-connection)
- [`sf share identity update CONNECTION`](#sf-share-identity-update-connection)
- [`sf share link`](#sf-share-link)
- [`sf share link copy ID`](#sf-share-link-copy-id)
- [`sf share link create`](#sf-share-link-create)
- [`sf share link edit ID`](#sf-share-link-edit-id)
- [`sf share link ls`](#sf-share-link-ls)
- [`sf share link revoke ID`](#sf-share-link-revoke-id)
- [`sf share list`](#sf-share-list)
- [`sf share password`](#sf-share-password)
- [`sf share password create`](#sf-share-password-create)
- [`sf share password ls`](#sf-share-password-ls)
- [`sf share password revoke ID`](#sf-share-password-revoke-id)
- [`sf share password rotate ID`](#sf-share-password-rotate-id)
- [`sf share people`](#sf-share-people)
- [`sf share people edit PERSON`](#sf-share-people-edit-person)
- [`sf share people invite EMAIL`](#sf-share-people-invite-email)
- [`sf share people ls`](#sf-share-people-ls)
- [`sf share people remove PERSON`](#sf-share-people-remove-person)
- [`sf share people resend PERSON`](#sf-share-people-resend-person)
- [`sf share request`](#sf-share-request)
- [`sf share request approve ID`](#sf-share-request-approve-id)
- [`sf share request deny ID`](#sf-share-request-deny-id)
- [`sf share request ls`](#sf-share-request-ls)
- [`sf share revoke ID`](#sf-share-revoke-id)
- [`sf share token`](#sf-share-token)
- [`sf share token create`](#sf-share-token-create)
- [`sf share token ls`](#sf-share-token-ls)
- [`sf share token revoke ID`](#sf-share-token-revoke-id)
- [`sf share token rotate ID`](#sf-share-token-rotate-id)
- [`sf skills`](#sf-skills)
- [`sf skills remove`](#sf-skills-remove)
- [`sf skills status`](#sf-skills-status)
- [`sf spaces`](#sf-spaces)
- [`sf spaces add`](#sf-spaces-add)
- [`sf spaces claim`](#sf-spaces-claim)
- [`sf spaces download`](#sf-spaces-download)
- [`sf spaces duplicate`](#sf-spaces-duplicate)
- [`sf spaces export`](#sf-spaces-export)
- [`sf spaces get`](#sf-spaces-get)
- [`sf spaces import [ARCHIVE]`](#sf-spaces-import-archive)
- [`sf spaces ls`](#sf-spaces-ls)
- [`sf spaces rm`](#sf-spaces-rm)
- [`sf spaces rotate-claim`](#sf-spaces-rotate-claim)
- [`sf spaces transfer TEAM`](#sf-spaces-transfer-team)
- [`sf spaces update`](#sf-spaces-update)
- [`sf status`](#sf-status)
- [`sf switch [TEAM]`](#sf-switch-team)
- [`sf teams`](#sf-teams)
- [`sf teams accept INVITATION`](#sf-teams-accept-invitation)
- [`sf teams create NAME`](#sf-teams-create-name)
- [`sf teams defaults [ROOTACCESS]`](#sf-teams-defaults-rootaccess)
- [`sf teams invitations`](#sf-teams-invitations)
- [`sf teams invitations add EMAIL`](#sf-teams-invitations-add-email)
- [`sf teams invitations cancel INVITATION`](#sf-teams-invitations-cancel-invitation)
- [`sf teams invitations ls`](#sf-teams-invitations-ls)
- [`sf teams invitations resend INVITATION`](#sf-teams-invitations-resend-invitation)
- [`sf teams ls`](#sf-teams-ls)
- [`sf teams members`](#sf-teams-members)
- [`sf teams members ls`](#sf-teams-members-ls)
- [`sf teams members rm MEMBER`](#sf-teams-members-rm-member)
- [`sf teams switch [TEAM]`](#sf-teams-switch-team)
- [`sf transfers accept ID`](#sf-transfers-accept-id)
- [`sf transfers cancel ID`](#sf-transfers-cancel-id)
- [`sf versions`](#sf-versions)
- [`sf versions download`](#sf-versions-download)
- [`sf versions get [VERSION]`](#sf-versions-get-version)
- [`sf versions ls`](#sf-versions-ls)
- [`sf versions rm [VERSION]`](#sf-versions-rm-version)
- [`sf whoami`](#sf-whoami)

## `sf access`

Manage emergency visitor-session revocation.

```text
USAGE
  $ sf access [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage emergency visitor-session revocation.

  Revoke active visitor sessions. Use `sf share` to manage who can open a space.
```

## `sf access logout-all`

Revoke all visitor sessions.

```text
USAGE
  $ sf access logout-all [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Revoke all visitor sessions.

  Revoke every active private-open, share-link, and signed-in visitor session for the space.

EXAMPLES
  Revoke every visitor session on the space.

    $ sf access logout-all --space docs
```

## `sf activity`

Show activity events.

```text
USAGE
  $ sf activity [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--all] [--code <value>] [--since <value>] [--until <value>] [--limit
    <value>] [--cursor <value>]

FLAGS
  --all             Read account-wide activity instead of a single space.
  --code=<value>    Filter by activity taxonomy code, for example version.promoted.
  --cursor=<value>  Pagination cursor from a previous response.
  --limit=<value>   Maximum number of events to return (default 50, max 100).
  --since=<value>   Only events at or after this ISO timestamp.
  --until=<value>   Only events before this ISO timestamp.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Show activity events.

  Read the activity feed for the selected space, or pass --all for every event visible to your account.

EXAMPLES
  $ sf activity

  $ sf activity --code version.promoted

  $ sf activity --all --since 2026-06-01T00:00:00Z
```

## `sf agents init`

Write Spacefast AGENTS.md guidance.

```text
USAGE
  $ sf agents init [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Write Spacefast AGENTS.md guidance.

  Create or update the Spacefast AGENTS.md snippet.

EXAMPLES
  Insert or refresh the Spacefast block in AGENTS.md.

    $ sf agents init
```

## `sf analytics`

Print runtime analytics.

```text
USAGE
  $ sf analytics [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--window 48h|7d|30d]

FLAGS
  --window=<option>  [default: 7d] Analytics window.
                     <options: 48h|7d|30d>

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Print runtime analytics.

  Print runtime analytics series.

EXAMPLES
  Print the 7-day analytics series for a space.

    $ sf analytics --space docs

  Use a 30-day window.

    $ sf analytics --space docs --window 30d
```

## `sf api METHODORPATH [PATH]`

Call the Spacefast API directly.

```text
USAGE
  $ sf api METHODORPATH [PATH] [--profile <value>] [-y]
    [-i <value>] [--idempotency-key <value>] [--include] [--output <value> | --raw-stdout] [--paginate]

ARGUMENTS
  METHODORPATH  HTTP method (GET, POST, PATCH, PUT, DELETE) or request path.
  [PATH]        Request path, for example /v1/spaces/{spaceId}/versions.

FLAGS
  -i, --input=<value>            JSON request body: a literal string, @file, or - for stdin.
      --idempotency-key=<value>  Replay-safe logical-attempt key for retryable mutations.
      --include                  Write HTTP status and safe response headers to stderr.
      --output=<value>           Write a non-JSON response body to a file.
      --paginate                 Emit every page of a declared cursor-list GET as JSON Lines.
      --raw-stdout               Write a non-JSON response body to stdout.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Call the Spacefast API directly.

  Send a signed request to the core public API contract using the resolved profile credentials. JSON envelopes print
  verbatim; non-JSON responses require an explicit output destination.

EXAMPLES
  $ sf api /v1/me

  $ sf api GET /v1/spaces/spc_123/versions --paginate

  $ sf api POST /v1/publish --input @publish.json --idempotency-key 01J-logical-attempt

  $ sf api GET /v1/spaces/spc_123/versions/ver_123/archive --output site.tar.gz
```

## `sf api-keys`

Manage API keys.

```text
USAGE
  $ sf api-keys [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage API keys.

  Manage platform API keys.
```

## `sf api-keys create`

Create an API key.

```text
USAGE
  $ sf api-keys create [--profile <value>] [-y] [-n <value>] [--preset
    ci_deploy|space_publisher|space_admin|site_admin|domain_manager|team_admin|billing_viewer]

FLAGS
  -n, --name=<value>     Human-readable API key name.
      --preset=<option>  [default: space_publisher] Access preset for the new API key.
                         <options:
                         ci_deploy|space_publisher|space_admin|site_admin|domain_manager|team_admin|billing_viewer>

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Create an API key.

  Create a platform API key and print its one-time secret.

ALIASES
  $ sf api-keys add

EXAMPLES
  Create an API key and print its one-time secret.

    $ sf api-keys create --name ci

  Create a key with a specific access preset.

    $ sf api-keys create --name ci --preset full_access
```

## `sf api-keys delete ID`

Revoke an API key.

```text
USAGE
  $ sf api-keys delete ID [--profile <value>] [-y]

ARGUMENTS
  ID  API key id.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Revoke an API key.

  Revoke a platform API key.

EXAMPLES
  Delete (revoke) an API key by ID.

    $ sf api-keys delete key_123
```

## `sf api-keys list`

List API keys.

```text
USAGE
  $ sf api-keys list [--profile <value>] [-y] [-o <value>] [--limit
    <value>]

FLAGS
  --limit=<value>  Maximum number of API keys to return (default 50, max 100).

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List API keys.

  List platform API keys for the selected team.

EXAMPLES
  List API keys for the selected team.

    $ sf api-keys ls
```

## `sf api-keys ls`

List API keys.

```text
USAGE
  $ sf api-keys ls [--profile <value>] [-y] [-o <value>] [--limit
    <value>]

FLAGS
  --limit=<value>  Maximum number of API keys to return (default 50, max 100).

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List API keys.

  List platform API keys for the selected team.

EXAMPLES
  List API keys for the selected team.

    $ sf api-keys ls
```

## `sf api-keys revoke ID`

Revoke an API key.

```text
USAGE
  $ sf api-keys revoke ID [--profile <value>] [-y]

ARGUMENTS
  ID  API key id.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Revoke an API key.

  Revoke a platform API key.

EXAMPLES
  Revoke an API key by ID.

    $ sf api-keys revoke key_123
```

## `sf api-keys rm ID`

Revoke an API key.

```text
USAGE
  $ sf api-keys rm ID [--profile <value>] [-y]

ARGUMENTS
  ID  API key id.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Revoke an API key.

  Revoke a platform API key.

ALIASES
  $ sf api-keys remove

EXAMPLES
  Remove (revoke) an API key by ID.

    $ sf api-keys rm key_123
```

## `sf apply`

Apply saved changes to the live runtime.

```text
USAGE
  $ sf apply [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--wait] [--wait-timeout <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXECUTION FLAGS
  --[no-]wait             Wait until queued publish work finishes before returning.
  --wait-timeout=<value>  [default: 900] Seconds to wait for the apply to finish.

DESCRIPTION
  Apply saved changes to the live runtime.

  Push saved space settings that are not live yet onto the serving runtime.

EXAMPLES
  Apply the linked space's saved changes and wait for them to go live.

    $ sf apply

  Queue an apply for a specific space without waiting.

    $ sf apply --space docs --no-wait
```

## `sf auth`

Authenticate the CLI.

```text
USAGE
  $ sf auth [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Authenticate the CLI.

  Authenticate the CLI with Spacefast.

EXAMPLES
  $ sf auth login
```

## `sf autocomplete [SHELL]`

Display autocomplete installation instructions.

```text
USAGE
  $ sf autocomplete [SHELL] [-r]

ARGUMENTS
  [SHELL]  (zsh|bash|powershell) Shell type

FLAGS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

DESCRIPTION
  Display autocomplete installation instructions.

EXAMPLES
  $ sf autocomplete

  $ sf autocomplete bash

  $ sf autocomplete zsh

  $ sf autocomplete powershell

  $ sf autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v3.2.53/src/commands/autocomplete/index.ts)_

## `sf build [DIR]`

Build and pack static output.

```text
USAGE
  $ sf build [DIR] [--profile <value>] [-y]
    [--root-directory <value>] [--install-directory <value>] [--install-command <value>] [--build-command <value>]
    [--output-directory <value>] [--env-file <value>...] [--ignored-build-command <value>] [--skip-install]
    [--skip-build] [--prebuilt] [--output <value>] [--dry-run] [--stream]

ARGUMENTS
  [DIR]  Project directory to build. Defaults to the current directory.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

BUILD FLAGS
  --build-command=<value>          Build command. Defaults to framework and package script detection.
  --env-file=<value>...            Local dotenv file to load for install/build commands. Repeat for multiple files.
  --ignored-build-command=<value>  Command that exits 0 when this build should be skipped.
  --install-command=<value>        Install command. Defaults to package-manager detection.
  --install-directory=<value>      Project subdirectory to run dependency installation from.
  --output-directory=<value>       Build output directory relative to the app root.
  --prebuilt                       Pack an already-built output directory; skips install and build.
  --root-directory=<value>         Project subdirectory that contains the app.
  --skip-build                     Skip the build command and pack the selected directory unless --output-directory is
                                   set.
  --skip-install                   Skip the install command.

EXECUTION FLAGS
  --dry-run         Print the detected build plan without installing, building, or packing.
  --output=<value>  [default: .spacefast/build-output.tgz] Archive path to write.
  --[no-]stream     With --json, emit a JSONL build event stream. Use --no-stream for a single result blob.

DESCRIPTION
  Build and pack static output.

  Detect build settings, run the build, and pack the static output. A zero runtime compiles the capsule instead and
  leaves the app shell `sf publish` would upload.

EXAMPLES
  Detect build settings, run the build, and pack the output archive.

    $ sf build

  Build a monorepo app and write the archive to a custom path.

    $ sf build --root-directory apps/web --output ./apps/web.tgz
```

## `sf builds cancel BUILD`

Cancel a build.

```text
USAGE
  $ sf builds cancel BUILD [--profile <value>] [-y]

ARGUMENTS
  BUILD  Build ID (bld_...).

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Cancel a build.

  Cancel a build. Idempotent: terminal builds are returned unchanged in their terminal state.

EXAMPLES
  Cancel a build.

    $ sf builds cancel bld_123
```

## `sf builds detect`

Detect framework and build settings.

```text
USAGE
  $ sf builds detect [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--connection-type connected|hosted] [--ref <value>] [--root-directory
    <value>] [--apply-best]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

BUILD FLAGS
  --apply-best              Save the highest-ranked detected app candidate as repository build settings.
  --root-directory=<value>  App root directory to inspect.

REPOSITORY FLAGS
  --connection-type=<option>  [default: connected] Repository connection type.
                              <options: connected|hosted>
  --ref=<value>               Git ref to inspect.

DESCRIPTION
  Detect framework and build settings.

  Detect the framework and build settings for a space's repository connection. Shows the detected app, ranked candidates
  when the repository has more than one, and unsupported platform config found along the way.

EXAMPLES
  Show detected framework and build settings for the repository connection.

    $ sf builds detect --space docs

  Detect and save the best build settings for a subdirectory.

    $ sf builds detect --space docs --root-directory apps/web --apply-best
```

## `sf builds get BUILD`

Show a build.

```text
USAGE
  $ sf builds get BUILD [--profile <value>] [-y]

ARGUMENTS
  BUILD  Build ID (bld_...).

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Show a build.

  Fetch a build by id.

EXAMPLES
  Show a build by ID.

    $ sf builds get bld_123
```

## `sf builds logs BUILD`

Print build logs.

```text
USAGE
  $ sf builds logs BUILD [--profile <value>] [-y] [--limit
    <value>] [--cursor <value>] [-f]

ARGUMENTS
  BUILD  Build ID (bld_...).

FLAGS
  -f, --follow          Follow live build logs until the build reaches a terminal state.
      --cursor=<value>  Pagination cursor from a previous response.
      --limit=<value>   Maximum number of log lines.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Print build logs.

  Print build runner log lines, newest first.

EXAMPLES
  Print recent log lines for a build.

    $ sf builds logs bld_123

  Stream logs until the build finishes.

    $ sf builds logs bld_123 --follow
```

## `sf builds ls`

List builds.

```text
USAGE
  $ sf builds ls [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--limit <value>] [--cursor <value>]

FLAGS
  --cursor=<value>  Pagination cursor from a previous response.
  --limit=<value>   Maximum number of builds to return (default 20, max 100).

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List builds.

  List a space's builds, newest first.

ALIASES
  $ sf builds list

EXAMPLES
  List recent builds for a space.

    $ sf builds ls --space docs

  Show only the five most recent builds.

    $ sf builds ls --space docs --limit 5
```

## `sf builds resume-upload BUILD`

Refresh source archive upload.

```text
USAGE
  $ sf builds resume-upload BUILD [--profile <value>] [-y]

ARGUMENTS
  BUILD  Build ID (bld_...) waiting for source archive upload.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Refresh source archive upload.

  Refresh the source archive upload instruction for a build that is waiting for source archive upload.

EXAMPLES
  Refresh the source archive upload instruction for a build.

    $ sf builds resume-upload bld_123
```

## `sf builds retry BUILD`

Retry a terminal build.

```text
USAGE
  $ sf builds retry BUILD [--profile <value>] [-y]

ARGUMENTS
  BUILD  Build ID (bld_...) to retry.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Retry a terminal build.

  Retry a terminal build with the same input, settings, and target.

EXAMPLES
  Retry a terminal build.

    $ sf builds retry bld_123
```

## `sf channels`

Manage channels.

```text
USAGE
  $ sf channels [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage channels.

  List channels and inspect their promotion history.
```

## `sf channels history [NAME]`

Show channel history.

```text
USAGE
  $ sf channels history [NAME] [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

ARGUMENTS
  [NAME]  Channel name. Defaults to `live`.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Show channel history.

  Show a channel's promotion history (the deploy log), newest first.

EXAMPLES
  Show promotion history for the live channel.

    $ sf channels history --space docs

  Show promotion history for the preview channel.

    $ sf channels history preview --space docs
```

## `sf channels ls`

List channels.

```text
USAGE
  $ sf channels ls [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List channels.

  List channels for a space and where each one points.

ALIASES
  $ sf channels list

EXAMPLES
  List channels for the docs space.

    $ sf channels ls --space docs
```

## `sf comments`

Manage comments.

```text
USAGE
  $ sf comments

DESCRIPTION
  Manage comments.

  List, export, and update persistent Space comments.
```

## `sf comments archive COMMENT`

Archive a comment.

```text
USAGE
  $ sf comments archive COMMENT [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

ARGUMENTS
  COMMENT  Comment id, for example cmt_123.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Archive a comment.

  Archive a comment thread.

EXAMPLES
  Archive a comment thread.

    $ sf comments archive cmt_123
```

## `sf comments export`

Export comments.

```text
USAGE
  $ sf comments export [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--version <value>] [--format markdown|json] [--status open|archived]

FLAGS
  --format=<option>  [default: markdown] Export format.
                     <options: markdown|json>
  --status=<option>  Filter by status.
                     <options: open|archived>
  --version=<value>  Filter by version ID, ref, or number.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Export comments.

  Export comment threads for agents and scripts.

EXAMPLES
  Export every open thread in the space as markdown.

    $ sf comments export --status open --format markdown

  Export open comments filtered to version v3 as JSON.

    $ sf comments export --version v3 --status open --format json
```

## `sf comments get COMMENT`

Show a comment.

```text
USAGE
  $ sf comments get COMMENT [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

ARGUMENTS
  COMMENT  Comment id, for example cmt_123.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Show a comment.

  Show one comment thread.

EXAMPLES
  Show one comment thread.

    $ sf comments get cmt_123
```

## `sf comments list`

List comments.

```text
USAGE
  $ sf comments list [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--version <value>] [--status open|archived] [--path <value>] [--limit
    <value>]

FLAGS
  --limit=<value>    Maximum comments to return.
  --path=<value>     Filter by page path.
  --status=<option>  Filter by status.
                     <options: open|archived>
  --version=<value>  Filter by version ID, ref, or number.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List comments.

  List persistent comment threads across a space.

ALIASES
  $ sf comments ls

EXAMPLES
  List open comments on the pricing route across publishes.

    $ sf comments list --status open --path /pricing

  Filter comments by their version context.

    $ sf comments list --version v3
```

## `sf comments reply COMMENT`

Reply to a comment.

```text
USAGE
  $ sf comments reply COMMENT --body <value> [--profile <value>] [-y]
    [-o <value>] [--space <value>] [--idempotency-key <value>]

ARGUMENTS
  COMMENT  Comment id, for example cmt_123.

FLAGS
  --body=<value>             (required) Reply body.
  --idempotency-key=<value>  Stable key for safely retrying this reply.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Reply to a comment.

  Reply to a comment thread.

EXAMPLES
  Reply to a comment thread.

    $ sf comments reply cmt_123 --body "Fixed in v4."
```

## `sf comments unarchive COMMENT`

Unarchive a comment.

```text
USAGE
  $ sf comments unarchive COMMENT [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

ARGUMENTS
  COMMENT  Comment id, for example cmt_123.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Unarchive a comment.

  Unarchive a comment thread.

EXAMPLES
  Unarchive a comment thread.

    $ sf comments unarchive cmt_123
```

## `sf continue`

Continue publishing after claim.

```text
USAGE
  $ sf continue [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Continue publishing after claim.

  Exchange a saved anonymous claim token for a durable space access token after the space is claimed.

EXAMPLES
  Continue publishing to the claimed space saved in this directory.

    $ sf continue
```

## `sf create NAME`

Create a Spacefast project directory.

```text
USAGE
  $ sf create NAME [--profile <value>] [-y] [-o <value>]
    [--runtime static|zero|functions] [--template todo|guestbook] [--title <value>] [--no-git]

ARGUMENTS
  NAME  Directory name for the new project.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

ZERO FLAGS
  --no-git             Skip initializing git for a Zero starter app.
  --template=<option>  Zero starter template to scaffold.
                       <options: todo|guestbook>
  --title=<value>      Zero starter app title.

PROJECT FLAGS
  --runtime=<option>  [default: static] Project runtime to create.
                      <options: static|zero|functions>

DESCRIPTION
  Create a Spacefast project directory.

  Create a new Spacefast project directory. Use --runtime to scaffold a Zero capsule or a Functions worker instead of a
  static config.

EXAMPLES
  Create a static Spacefast project directory.

    $ sf create my-site

  Create a Zero capsule directory.

    $ sf create my-app --runtime zero --template guestbook

  Create a Functions worker directory.

    $ sf create my-api --runtime functions
```

## `sf demo`

Run Spacefast demos.

```text
USAGE
  $ sf demo

DESCRIPTION
  Run Spacefast demos.

  Run local Spacefast demonstrations. Use `spacefast demo agent` for the agent/MCP dogfood check.
```

## `sf demo agent`

Run the local agent/MCP dogfood demo.

```text
USAGE
  $ sf demo agent [--profile <value>] [-y] [--port <value>]
    [--publish]

FLAGS
  --port=<value>  Temporary On-Device MCP HTTP port for the demo.
  --publish       Keep the generated workspace and print the publish command. Does not publish without an explicit later
                  `sf publish`.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Run the local agent/MCP dogfood demo.

  Run a local dogfood check for Spacefast agent UX: On-Device MCP HTTP health, code-mode approval, resume, and workspace
  file editing.

EXAMPLES
  Run the local agent/MCP dogfood demo.

    $ sf demo agent

  Keep the generated workspace and print the publish command.

    $ sf demo agent --publish
```

## `sf deployments`

Manage deployments (alias of `sf versions`).

```text
USAGE
  $ sf deployments [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage deployments (alias of `sf versions`).

  List and inspect deployment activity. Alias of `sf versions`. Deploying is publishing: a deployment is a version, and
  the canonical nouns are version, channel, and build.
```

## `sf deployments get DEPLOYMENT`

Show a deployment (alias of `sf versions get`).

```text
USAGE
  $ sf deployments get DEPLOYMENT [--profile <value>] [-y]
    [-o <value>] [--space <value>]

ARGUMENTS
  DEPLOYMENT  Deployment ID, usually dep_build_... or dep_version_....

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Show a deployment (alias of `sf versions get`).

  Fetch a deployment by id. Alias of `sf versions get`; a deployment is a version.
```

## `sf deployments promote DEPLOYMENT`

Promote a deployment (alias of `sf promote`).

```text
USAGE
  $ sf deployments promote DEPLOYMENT [--profile <value>] [-y]
    [-o <value>] [--space <value>] [--channel <value>] [--wait] [--wait-timeout <value>]

ARGUMENTS
  DEPLOYMENT  Deployment ID to make live, usually dep_build_... or dep_version_....

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXECUTION FLAGS
  --channel=<value>       [default: live] Channel to point at this version (default "live").
  --[no-]wait             Wait until queued publish work finishes before returning.
  --wait-timeout=<value>  [default: 900] Seconds to wait for the version to become live.

DESCRIPTION
  Promote a deployment (alias of `sf promote`).

  Promote the version produced by a deployment to a channel (default live). Alias of `sf promote`; a deployment is a
  version.
```

## `sf deployments rollback DEPLOYMENT`

Roll back to a deployment (alias of `sf rollback`).

```text
USAGE
  $ sf deployments rollback DEPLOYMENT [--profile <value>] [-y]
    [-o <value>] [--space <value>] [--channel <value>] [--wait] [--wait-timeout <value>]

ARGUMENTS
  DEPLOYMENT  Deployment ID to roll back to, usually dep_build_... or dep_version_....

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXECUTION FLAGS
  --channel=<value>       [default: live] Channel to point at this version (default "live").
  --[no-]wait             Wait until queued publish work finishes before returning.
  --wait-timeout=<value>  [default: 900] Seconds to wait for the version to become live.

DESCRIPTION
  Roll back to a deployment (alias of `sf rollback`).

  Roll live traffic back to the version produced by a deployment. Alias of `sf rollback`; a deployment is a version.
```

## `sf design`

Generate design files from DESIGN.md.

```text
USAGE
  $ sf design [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Generate design files from DESIGN.md.

  Generate committed presentation files (theme.json and _layout.html) from an authoring-time DESIGN.md.
```

## `sf design generate`

Generate theme and layout files from DESIGN.md.

````text
USAGE
  $ sf design generate [--profile <value>] [-y] [-f]

EXECUTION FLAGS
  -f, --force  Overwrite existing generated files.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Generate theme and layout files from DESIGN.md.

  Read DESIGN.md's ```theme.json``` and ```layout.html``` fenced blocks and write theme.json plus _layout.html.
  theme.json can seed Pages tokens; _layout.html provides site chrome. DESIGN.md itself is never read at finalize or
  serve time.

EXAMPLES
  Generate theme.json/_layout.html from DESIGN.md in the current directory.

    $ sf design generate

  Regenerate, overwriting any existing theme.json/_layout.html.

    $ sf design generate --force
````

## `sf dev`

Start the local dev server.

```text
USAGE
  $ sf dev [--profile <value>] [-y] [-p <value>] [-d
    <value>] [--host <value>] [--state-backend memory|sqlite|mysql] [--watch] [--watch-interval <value>] [--dry-run]

FLAGS
  -d, --dir=<value>   [default: .] Project directory.
  -p, --port=<value>  [default: 4173] Preview port.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

RUNTIME FLAGS
  --dry-run                 Print the dev server plan without starting it.
  --host=<value>            [default: 127.0.0.1] Host interface for the local dev server.
  --state-backend=<option>  [default: memory] Local state adapter for a runtime dev server.
                            <options: memory|sqlite|mysql>
  --[no-]watch              Poll source files and reload the runtime after changes.
  --watch-interval=<value>  [default: 1000] Source polling interval in milliseconds.

DESCRIPTION
  Start the local dev server.

  Run this project locally. A zero runtime starts the capsule dev server; anything else previews Pages with sample data
  and the publish-time expander.
```

## `sf docs [QUERY]`

Search the bundled docs (offline).

```text
USAGE
  $ sf docs [QUERY...] [--profile <value>] [-y] [--full]
    [--all]

ARGUMENTS
  [QUERY...]  Search terms, or an exact topic slug to print (e.g. `publish`).

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DISCLOSURE FLAGS
  --all   Include every doc, reference tier included.
  --full  Include full-tier docs (everything but advanced reference).

DESCRIPTION
  Search the bundled docs (offline).

  Search the bundled Spacefast docs offline — guides, CLI, API reference, and recipes. Essential topics show by default;
  pass --full or --all to widen. An exact topic slug prints that page.

EXAMPLES
  List the essential docs.

    $ sf docs

  Search docs for `rollback`.

    $ sf docs rollback

  Print the `publishing` topic.

    $ sf docs publishing

  Search across the full docs set.

    $ sf docs domains --full

  Every doc as machine-readable JSON.

    $ sf docs --all --json
```

## `sf doctor`

Diagnose Spacefast CLI setup.

```text
USAGE
  $ sf doctor [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Diagnose Spacefast CLI setup.

  Check local CLI state, auth, API reachability, and space selection for the current directory.

EXAMPLES
  Diagnose CLI state, auth, and API reachability.

    $ sf doctor

  Also check the health of a specific space.

    $ sf doctor --space docs
```

## `sf domains`

Manage domains.

```text
USAGE
  $ sf domains [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage domains.

  Manage space domains.
```

## `sf domains add HOSTNAME`

Attach a domain.

```text
USAGE
  $ sf domains add HOSTNAME [--profile <value>] [-y]
    [-o <value>] [--space <value>] [--wait] [--wait-timeout <value>] [--redirect-to <value>
    --role standard|redirect] [--redirect-status 301|302|307|308 ]

ARGUMENTS
  HOSTNAME  Hostname to attach.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DOMAIN BEHAVIOR FLAGS
  --redirect-status=<option>  HTTP status for redirect domains.
                              <options: 301|302|307|308>
  --redirect-to=<value>       Destination for redirect domains.
  --role=<option>             How the domain should behave.
                              <options: standard|redirect>

EXECUTION FLAGS
  --[no-]wait             Wait until queued work finishes before returning.
  --wait-timeout=<value>  Seconds to wait for queued work to finish before giving up.

DESCRIPTION
  Attach a domain.

  Create a domain in the space team, attach it to the space, and queue a DNS check.

ALIASES
  $ sf domains create

EXAMPLES
  Attach a domain to a space.

    $ sf domains add example.com --space docs

  Attach a redirect domain.

    $ sf domains add www.example.com --space docs --role redirect --redirect-to example.com
```

## `sf domains check DOMAIN`

Check a domain.

```text
USAGE
  $ sf domains check DOMAIN [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--wait] [--wait-timeout <value>]

ARGUMENTS
  DOMAIN  Domain ID or hostname.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXECUTION FLAGS
  --[no-]wait             Wait until queued work finishes before returning.
  --wait-timeout=<value>  Seconds to wait for queued work to finish before giving up.

DESCRIPTION
  Check a domain.

  Queue a DNS/provider readiness check for an attached domain.

EXAMPLES
  Queue a DNS readiness check for a domain.

    $ sf domains check example.com --space docs
```

## `sf domains diagnostics DOMAIN`

Inspect domain diagnostics.

```text
USAGE
  $ sf domains diagnostics DOMAIN [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

ARGUMENTS
  DOMAIN  Domain ID or hostname.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Inspect domain diagnostics.

  Read live DNS and SSL diagnostics for an attached domain.

EXAMPLES
  Read live DNS and SSL diagnostics for an attached domain.

    $ sf domains diagnostics app.example.com --space docs
```

## `sf domains dns`

Manage domain DNS records.

```text
USAGE
  $ sf domains dns [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage domain DNS records.

  Manage DNS records for a domain zone. See `domains dns ls`, `capabilities`, `refresh`, `add`, `update`, `rm`, `batch`,
  and `export`.
```

## `sf domains dns add DOMAIN`

Add a DNS record.

```text
USAGE
  $ sf domains dns add DOMAIN [--profile <value>] [-y] [--type
    A|AAAA|ALIAS|CAA|CNAME|MX|NS|SRV|TXT] [--name <value>] [--value <value>] [--ttl <value>] [--priority <value>] [-o
    <value>]

ARGUMENTS
  DOMAIN  Domain ID or hostname.

FLAGS
  --name=<value>      Record name relative to the zone, or @ for the apex.
  --priority=<value>  Priority for MX and SRV records.
  --ttl=<value>       Time to live in seconds (default 3600).
  --type=<option>     Record type.
                      <options: A|AAAA|ALIAS|CAA|CNAME|MX|NS|SRV|TXT>
  --value=<value>     Record value.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Add a DNS record.

  Add a DNS record to the domain's Spacefast-managed zone.

ALIASES
  $ sf domains dns create

EXAMPLES
  $ sf domains dns add example.com --type MX --name @ --value mail.example.com --priority 10
```

## `sf domains dns batch DOMAIN`

Apply a DNS record batch.

```text
USAGE
  $ sf domains dns batch DOMAIN -i <value> [--profile <value>] [-y] [-o
    <value>]

ARGUMENTS
  DOMAIN  Domain ID or hostname.

FLAGS
  -i, --input=<value>  (required) JSON batch body: a literal string, @file, or - for stdin.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Apply a DNS record batch.

  Apply a batch of DNS changes in one call. The JSON body holds delete/patch/put/post arrays of records.

EXAMPLES
  $ sf domains dns batch example.com --input @dns-changes.json

  $ sf domains dns batch example.com --input '{"posts":[{"type":"TXT","name":"@","value":"v=spf1 -all"}]}'
```

## `sf domains dns capabilities DOMAIN`

Show DNS capabilities.

```text
USAGE
  $ sf domains dns capabilities DOMAIN [--profile <value>] [-y] [-o
  <value>]

ARGUMENTS
  DOMAIN  Domain ID or hostname.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Show DNS capabilities.

  Show DNS provider capabilities for a domain.

EXAMPLES
  Show DNS provider capabilities for a domain.

    $ sf domains dns capabilities example.com
```

## `sf domains dns export DOMAIN`

Export the DNS zone.

```text
USAGE
  $ sf domains dns export DOMAIN [--profile <value>] [-y] [-o <value>]

ARGUMENTS
  DOMAIN  Domain ID or hostname.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Export the DNS zone.

  Print the domain's zone as BIND-style records.

EXAMPLES
  Print the domain zone as BIND-style records.

    $ sf domains dns export example.com
```

## `sf domains dns ls DOMAIN`

List DNS records.

```text
USAGE
  $ sf domains dns ls DOMAIN [--profile <value>] [-y] [-o <value>]
    [--limit <value>] [--cursor <value>]

ARGUMENTS
  DOMAIN  Domain ID or hostname.

FLAGS
  --cursor=<value>  Pagination cursor from a previous response.
  --limit=<value>   Maximum number of records to return (default 200, max 500).

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List DNS records.

  List DNS records in the domain's Spacefast-managed zone.

ALIASES
  $ sf domains dns list

EXAMPLES
  List DNS records in the managed zone.

    $ sf domains dns ls example.com
```

## `sf domains dns refresh DOMAIN`

Refresh DNS provider snapshot.

```text
USAGE
  $ sf domains dns refresh DOMAIN [--profile <value>] [-y] [-o <value>]

ARGUMENTS
  DOMAIN  Domain ID or hostname.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Refresh DNS provider snapshot.

  Refresh a connected DNS provider snapshot for a domain.

EXAMPLES
  Refresh the connected DNS provider snapshot.

    $ sf domains dns refresh example.com
```

## `sf domains dns rm DOMAIN RECORD`

Delete a DNS record.

```text
USAGE
  $ sf domains dns rm DOMAIN RECORD [--profile <value>] [-y] [-o
    <value>]

ARGUMENTS
  DOMAIN  Domain ID or hostname.
  RECORD  DNS record ID.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Delete a DNS record.

  Delete a DNS record from the domain's zone.

ALIASES
  $ sf domains dns remove
  $ sf domains dns delete

EXAMPLES
  Delete a DNS record from the zone.

    $ sf domains dns rm example.com rec_123
```

## `sf domains dns update DOMAIN RECORD`

Update a DNS record.

```text
USAGE
  $ sf domains dns update DOMAIN RECORD [--profile <value>] [-y] [--type
    A|AAAA|ALIAS|CAA|CNAME|MX|NS|SRV|TXT] [--name <value>] [--value <value>] [--ttl <value>] [--priority <value>] [-o
    <value>]

ARGUMENTS
  DOMAIN  Domain ID or hostname.
  RECORD  DNS record ID.

FLAGS
  --name=<value>      Record name relative to the zone, or @ for the apex.
  --priority=<value>  Priority for MX and SRV records.
  --ttl=<value>       Time to live in seconds (default 3600).
  --type=<option>     Record type.
                      <options: A|AAAA|ALIAS|CAA|CNAME|MX|NS|SRV|TXT>
  --value=<value>     Record value.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Update a DNS record.

  Update fields on an existing DNS record.

EXAMPLES
  Update a DNS record's value and TTL.

    $ sf domains dns update example.com rec_123 --value 1.2.3.4 --ttl 3600
```

## `sf domains ls`

List space domains.

```text
USAGE
  $ sf domains ls [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List space domains.

  List domains attached to a space.

ALIASES
  $ sf domains list

EXAMPLES
  List domains attached to a space.

    $ sf domains ls --space docs
```

## `sf domains nameservers DOMAIN`

Show domain nameservers.

```text
USAGE
  $ sf domains nameservers DOMAIN [--profile <value>] [-y] [-o <value>]

ARGUMENTS
  DOMAIN  Domain ID or hostname.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Show domain nameservers.

  Show the DNS mode and nameserver set for a domain.

EXAMPLES
  Show the DNS mode and nameservers for a domain.

    $ sf domains nameservers example.com
```

## `sf domains nameservers set DOMAIN NAMESERVERS`

Set domain nameservers.

```text
USAGE
  $ sf domains nameservers set DOMAIN NAMESERVERS [--profile <value>] [-y] [-o
    <value>]

ARGUMENTS
  DOMAIN       Domain ID or hostname.
  NAMESERVERS  Comma-separated nameservers (at least two).

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Set domain nameservers.

  Set custom nameservers for a Spacefast-registered domain. Externally registered domains change nameservers at their
  registrar.

EXAMPLES
  $ sf domains nameservers set example.com ns1.example-dns.com,ns2.example-dns.com
```

## `sf domains rm DOMAIN`

Remove a domain.

```text
USAGE
  $ sf domains rm DOMAIN [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--wait]

ARGUMENTS
  DOMAIN  Domain ID or hostname.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXECUTION FLAGS
  --[no-]wait  Wait until queued publish work finishes before returning.

DESCRIPTION
  Remove a domain.

  Remove a domain assignment from a space.

ALIASES
  $ sf domains remove
  $ sf domains delete

EXAMPLES
  Remove a domain from a space after confirmation.

    $ sf domains rm example.com --space docs
```

## `sf domains search [QUERY]`

Search domain names.

```text
USAGE
  $ sf domains search [QUERY] [--profile <value>] [-y]
    [--interactive] [--limit <value>]

ARGUMENTS
  [QUERY]  Brand, idea, or full domain to search.

FLAGS
  --interactive    Open the interactive terminal domain search UI.
  --limit=<value>  [default: 20] Number of local suggestions to print when not interactive.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Search domain names.

  Search domain ideas locally, with optional live availability checks in interactive mode.

EXAMPLES
  Print local domain name ideas for a brand.

    $ sf domains search acme

  Open the interactive domain search with live availability.

    $ sf domains search acme --interactive
```

## `sf env`

Manage env vars.

```text
USAGE
  $ sf env [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage env vars.

  Manage space environment variables.
```

## `sf env export-template [DIR]`

Create a dotenv import template from platform config.

```text
USAGE
  $ sf env export-template [DIR] [--profile <value>] [-y] [--format
    env|json]

ARGUMENTS
  [DIR]  Project directory to inspect. Defaults to the current directory.

FLAGS
  --format=<option>  [default: env] Output format.
                     <options: env|json>

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Create a dotenv import template from platform config.

  Read platform config files and print a dotenv template for variables to import into Spacefast.

EXAMPLES
  Print a dotenv import template from platform config in the current directory.

    $ sf env export-template

  Emit the import template as JSON.

    $ sf env export-template ./app --format json
```

## `sf env import FILE`

Import variables from a .env file.

```text
USAGE
  $ sf env import FILE [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--[no-]secret] [--production] [--preview] [--branch <value>...] [--from
    dotenv|vercel|netlify|cloudflare]

ARGUMENTS
  FILE  .env file to import.

FLAGS
  --branch=<value>...  Also store each imported value for an exact branch. Repeat for multiple branches.
  --from=<option>      [default: dotenv] Platform export format to import. Vercel, Netlify, and Cloudflare use dotenv
                       exports.
                       <options: dotenv|vercel|netlify|cloudflare>
  --preview            Also store each imported value for preview builds.
  --production         Also store each imported value for production builds.
  --[no-]secret        Keep imported values write-only. New values default write-only; updates preserve existing
                       classifications.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Import variables from a .env file.

  Import variables from a dotenv file. Values are sent to the API and are not printed back.

EXAMPLES
  Import write-only variables from a .env file.

    $ sf env import .env --space docs

  Explicitly import readable ordinary values.

    $ sf env import public.env --space docs --no-secret
```

## `sf env ls`

List space variables.

```text
USAGE
  $ sf env ls [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--show-values]

FLAGS
  --show-values  Print plaintext variable values.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List space variables.

  List space variables.

ALIASES
  $ sf env list

EXAMPLES
  List space variables (values masked).

    $ sf env ls --space docs
```

## `sf env pull [FILE]`

Pull variables.

```text
USAGE
  $ sf env pull [FILE] [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--format env|json] [--force] [--stdout]

ARGUMENTS
  [FILE]  File to write the pulled variables to. Defaults to .env.local.

FLAGS
  --force            Overwrite the target file if it already exists.
  --format=<option>  [default: env] Output format.
                     <options: env|json>
  --stdout           Print variables to stdout instead of writing a file.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Pull variables.

  Pull effective space and shared variables into a local env file (default .env.local). Refuses to overwrite an existing
  file unless --force. Use --stdout to print instead.

EXAMPLES
  Write variables to .env.local.

    $ sf env pull --space docs

  Write variables to .env.development, replacing an existing file.

    $ sf env pull .env.development --space docs --force

  Print variables in .env format to stdout.

    $ sf env pull --space docs --stdout > .env

  Print variables as JSON.

    $ sf env pull --space docs --stdout --format json
```

## `sf env rm NAME`

Delete a space variable.

```text
USAGE
  $ sf env rm NAME [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

ARGUMENTS
  NAME  Variable name.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Delete a space variable.

  Delete a space variable.

ALIASES
  $ sf env remove
  $ sf env delete

EXAMPLES
  Delete a space variable after confirmation.

    $ sf env rm API_URL --space docs
```

## `sf env set NAME VALUE`

Set a space variable.

```text
USAGE
  $ sf env set NAME VALUE [--profile <value>] [-y]
    [-o <value>] [--space <value>] [--[no-]secret] [--production-value <value>] [--preview-value
    <value>] [--branch-value <value>...]

ARGUMENTS
  NAME   Variable name.
  VALUE  Variable value.

FLAGS
  --[no-]secret  Keep the value write-only. New values default write-only; updates preserve the existing classification.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

BUILD FLAGS
  --branch-value=<value>...   Value to inject for a branch build, formatted as branch=value. Repeat for multiple
                              branches.
  --preview-value=<value>     Value to inject for preview builds.
  --production-value=<value>  Value to inject for production builds.

DESCRIPTION
  Set a space variable.

  Create or update a space variable. Values are sent to the API and are not printed back.

EXAMPLES
  Set a write-only space variable.

    $ sf env set API_TOKEN s3cret --space docs

  Explicitly set a readable ordinary value.

    $ sf env set PUBLIC_ORIGIN https://www.example.com --no-secret --space docs
```

## `sf feedback`

Send support feedback.

```text
USAGE
  $ sf feedback -m <value> [--profile <value>] [-y] [--category
    bug|docs|limit|idea|other] [--error-code <value>] [--request-id <value>] [--space-id <value>] [--url <value>]

FLAGS
  -m, --message=<value>     (required) Feedback message.
      --category=<option>   [default: other] Feedback category.
                            <options: bug|docs|limit|idea|other>
      --error-code=<value>  Related API error code.
      --request-id=<value>  Related API request id.
      --space-id=<value>    Related space id.
      --url=<value>         Related URL.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Send support feedback.

  Send feedback to Spacefast support.

EXAMPLES
  Send docs feedback.

    $ sf feedback -m "The continuation docs are unclear" --category docs

  Send machine-readable feedback with error context.

    $ sf feedback -m "Publish failed after claim" --category bug --error-code space_claimed_credential_available \
      --request-id req_123 --json
```

## `sf fetch [PATH]`

Fetch private content.

```text
USAGE
  $ sf fetch [PATH] --output <value> [--profile <value>]
    [-y] [-o <value>] [--space <value>]

ARGUMENTS
  [PATH]  Canonical route to fetch. Defaults to /.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

OUTPUT FLAGS
  --output=<value>  (required) File to write the response body into.

DESCRIPTION
  Fetch private content.

  Fetch private Space content through the same central exchange and host-only cookie flow as a browser.

EXAMPLES
  Fetch /docs from the linked Space.

    $ sf fetch /docs --output ./docs.html
```

## `sf git`

Manage repository connections.

```text
USAGE
  $ sf git [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage repository connections.

  Manage repository connections and Git push deploys.
```

## `sf git build`

Build repository source.

```text
USAGE
  $ sf git build [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--connection-type connected|hosted] [--ref <value>] [--branch <value>]
    [--commit <value>] [--pull-request <value>] [--config <value>] [--target production|preview] [--root-directory
    <value>] [--install-directory <value>] [--install-command <value>] [--build-command <value>] [--output-directory
    <value>] [--ignored-build-command <value>] [--auto-finalize] [--allow-unsupported-platform-features] [--wait]
    [--wait-timeout <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

MIGRATION FLAGS
  --[no-]allow-unsupported-platform-features  Allow unsupported Vercel or Cloudflare migration features for this build.

EXECUTION FLAGS
  --[no-]auto-finalize    Finalize the remote build automatically after staging the build output.
  --[no-]wait             Wait until queued publish work finishes before returning.
  --wait-timeout=<value>  [default: 900] Seconds to wait for the repository build to finish.

BUILD FLAGS
  --branch=<value>                 [env: SPACEFAST_GIT_BRANCH] Branch name for preview alias and production branch
                                   selection.
  --build-command=<value>          Override the saved build command for this build.
  --commit=<value>                 [env: SPACEFAST_GIT_COMMIT] Commit SHA to build.
  --config=<value>                 [env: SPACEFAST_CONFIG] Path to an sf.jsonc file with repository build settings.
  --ignored-build-command=<value>  Override the saved ignored build command for this build.
  --install-command=<value>        Override the saved install command for this build.
  --install-directory=<value>      Override the saved dependency install directory for this build.
  --output-directory=<value>       Override the saved build output directory for this build.
  --pull-request=<value>           [env: SPACEFAST_PULL_REQUEST] Pull request number for preview builds.
  --ref=<value>                    [env: SPACEFAST_BUILD_REF] Repository ref, branch, tag, or commit to build.
  --root-directory=<value>         Override the saved app root directory for this build.
  --target=<option>                Force production or preview build target.
                                   <options: production|preview>

REPOSITORY FLAGS
  --connection-type=<option>  [default: connected] Repository connection type.
                              <options: connected|hosted>

DESCRIPTION
  Build repository source.

  Trigger a generic remote build from a repository connection.

EXAMPLES
  Trigger a remote build from the main ref.

    $ sf git build --space docs --ref main

  Build a preview branch and wait for it to finish.

    $ sf git build --space docs --branch preview --target preview --wait
```

## `sf git connect`

Connect repository.

```text
USAGE
  $ sf git connect [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--provider github|gitlab|bitbucket|generic] [--connection-type
    connected|hosted] [--repository <value>] [--repository-id <value>] [--repository-name <value>] [--clone-url <value>]
    [--upstream-url <value>] [--detect-urls] [--installation-id <value>] [--credential <value>] [--default-branch
    <value>] [--production-branch <value>] [--ref <value>] [--config <value>] [--auto-deploy-production]
    [--auto-deploy-previews] [--root-directory <value>] [--install-directory <value>] [--install-command <value>]
    [--build-command <value>] [--ignored-build-command <value>] [--output-directory <value>] [--framework-preset
    <value>] [--platform-preset <value>] [--allow-unsupported-platform-features] [--apply-best] [--sync] [--build-now]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

MIGRATION FLAGS
  --allow-unsupported-platform-features  Allow unsupported migration features.

AUTOMATION FLAGS
  --apply-best                   Detect and save the highest-ranked build settings after connecting.
  --[no-]auto-deploy-previews    Automatically build preview branches and pull requests.
  --[no-]auto-deploy-production  Automatically build pushes to the production branch.
  --build-now                    Queue a generic Build after connecting.
  --sync                         Request repository sync after connecting.

BUILD FLAGS
  --build-command=<value>          Build command.
  --config=<value>                 [env: SPACEFAST_CONFIG] Path to an sf.jsonc file with repository build settings.
  --framework-preset=<value>       Framework preset.
  --ignored-build-command=<value>  Command that skips a build when it exits 0.
  --install-command=<value>        Install command.
  --install-directory=<value>      Dependency install directory.
  --output-directory=<value>       Build output directory.
  --platform-preset=<value>        Imported platform preset.
  --root-directory=<value>         App root directory.

REPOSITORY FLAGS
  --clone-url=<value>          Clone URL when safe to expose.
  --connection-type=<option>   [default: connected] Repository connection type.
                               <options: connected|hosted>
  --credential=<value>         [env: SPACEFAST_REPOSITORY_CREDENTIAL] Generic Git clone token. Stored encrypted by the
                               API.
  --default-branch=<value>     Repository default branch.
  --[no-]detect-urls           Detect clone and upstream URLs from the origin remote.
  --installation-id=<value>    [env: SPACEFAST_REPOSITORY_INSTALLATION_ID] Repository app installation ID for external
                               statuses.
  --production-branch=<value>  Branch that publishes to production.
  --provider=<option>          Repository host.
                               <options: github|gitlab|bitbucket|generic>
  --ref=<value>                [env: SPACEFAST_BUILD_REF] Ref, branch, tag, or commit to sync or build after connecting.
  --repository=<value>         Repository full name, for example owner/repo. Defaults to the origin remote.
  --repository-id=<value>      Repository ID from the host.
  --repository-name=<value>    Repository name from the host.
  --upstream-url=<value>       Upstream repository URL.

DESCRIPTION
  Connect repository.

  Create or replace a repository connection.

EXAMPLES
  Connect a GitHub repository.

    $ sf git connect --space docs --provider github --repository owner/repo

  Connect a repository, set the production branch, and sync.

    $ sf git connect --space docs --repository owner/repo --production-branch main --sync
```

## `sf git disconnect`

Disconnect repository.

```text
USAGE
  $ sf git disconnect [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--connection-type connected|hosted]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

REPOSITORY FLAGS
  --connection-type=<option>  [default: connected] Repository connection type.
                              <options: connected|hosted>

DESCRIPTION
  Disconnect repository.

  Delete a repository connection.

EXAMPLES
  Delete the repository connection.

    $ sf git disconnect --space docs
```

## `sf git ls`

Show repository connection.

```text
USAGE
  $ sf git ls [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--connection-type connected|hosted]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

REPOSITORY FLAGS
  --connection-type=<option>  [default: connected] Repository connection type.
                              <options: connected|hosted>

DESCRIPTION
  Show repository connection.

  Show a repository connection.

EXAMPLES
  Show the repository connection.

    $ sf git ls --space docs
```

## `sf git origin`

Install Spacefast git remote.

```text
USAGE
  $ sf git origin [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--set-origin]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

GIT FLAGS
  --set-origin  Update origin instead of adding or updating the Spacefast remote.

DESCRIPTION
  Install Spacefast git remote.

  Install a signed Spacefast push remote for direct Git push deploys.

EXAMPLES
  Add a signed `spacefast` remote when `origin` already points to your upstream.

    $ sf git origin

  Set `origin` to the signed Spacefast push remote.

    $ sf git origin --set-origin
```

## `sf git sync`

Sync remote repository source.

```text
USAGE
  $ sf git sync [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--connection-type connected|hosted] [--ref <value>] [--ttl-seconds <value>]
    [--read-only-ref <value>...]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

REPOSITORY FLAGS
  --connection-type=<option>  [default: connected] Repository connection type.
                              <options: connected|hosted>
  --read-only-ref=<value>...  Ref pattern to protect during repository sync. Repeat for multiple patterns.
  --ref=<value>               Ref, branch, or tag to sync.
  --ttl-seconds=<value>       Signed source remote TTL in seconds, up to 86400.

DESCRIPTION
  Sync remote repository source.

  Sync the upstream repository for this space.

EXAMPLES
  Sync the upstream repository for the space.

    $ sf git sync --space docs

  Sync a specific ref.

    $ sf git sync --space docs --ref main
```

## `sf git update`

Update repository connection.

```text
USAGE
  $ sf git update [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--connection-type connected|hosted] [--clone-url <value>] [--upstream-url
    <value>] [--production-branch <value>] [--credential <value>] [--clear-credential] [--auto-deploy-production]
    [--auto-deploy-previews] [--config <value>] [--root-directory <value>] [--install-directory <value>]
    [--install-command <value>] [--build-command <value>] [--ignored-build-command <value>] [--output-directory <value>]
    [--framework-preset <value>] [--platform-preset <value>] [--allow-unsupported-platform-features]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

MIGRATION FLAGS
  --[no-]allow-unsupported-platform-features  Allow unsupported migration features.

AUTOMATION FLAGS
  --[no-]auto-deploy-previews    Automatically build preview branches and pull requests.
  --[no-]auto-deploy-production  Automatically build pushes to the production branch.

BUILD FLAGS
  --build-command=<value>          Build command.
  --config=<value>                 [env: SPACEFAST_CONFIG] Path to an sf.jsonc file with repository build settings.
  --framework-preset=<value>       Framework preset.
  --ignored-build-command=<value>  Command that skips a build when it exits 0.
  --install-command=<value>        Install command.
  --install-directory=<value>      Dependency install directory.
  --output-directory=<value>       Build output directory.
  --platform-preset=<value>        Imported platform preset.
  --root-directory=<value>         App root directory.

REPOSITORY FLAGS
  --clear-credential           Clear the stored generic Git clone token.
  --clone-url=<value>          Clone URL when safe to expose.
  --connection-type=<option>   [default: connected] Repository connection type.
                               <options: connected|hosted>
  --credential=<value>         [env: SPACEFAST_REPOSITORY_CREDENTIAL] Generic Git clone token. Stored encrypted by the
                               API.
  --production-branch=<value>  Branch that publishes to production.
  --upstream-url=<value>       Upstream repository URL.

DESCRIPTION
  Update repository connection.

  Update a repository connection.

EXAMPLES
  Change the production branch on the repository connection.

    $ sf git update --space docs --production-branch main
```

## `sf help [COMMAND]`

Display help for sf.

```text
USAGE
  $ sf help [COMMAND...] [-n]

ARGUMENTS
  [COMMAND...]  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for sf.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/6.2.53/src/commands/help.ts)_

## `sf init`

Create a Spacefast project.

```text
USAGE
  $ sf init [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [-f] [--runtime static|zero|functions] [--template todo|guestbook] [--title
    <value>] [--no-git]

EXECUTION FLAGS
  -f, --force  Overwrite existing generated files.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

ZERO FLAGS
  --no-git             Skip initializing git for a Zero starter app.
  --template=<option>  Zero starter template to scaffold.
                       <options: todo|guestbook>
  --title=<value>      Zero starter app title.

PROJECT FLAGS
  --runtime=<option>  [default: static] Project runtime to initialize.
                      <options: static|zero|functions>

DESCRIPTION
  Create a Spacefast project.

  Create a Spacefast project in the current directory. Use --runtime to scaffold a Zero capsule or a Functions worker
  instead of a static config.

EXAMPLES
  Write a starter sf.jsonc in the current directory.

    $ sf init

  Initialize config and link the current directory to space `docs`.

    $ sf init --space docs

  Scaffold a Zero capsule in the current directory.

    $ sf init --runtime zero --template guestbook

  Scaffold a Functions worker in the current directory.

    $ sf init --runtime functions
```

## `sf inspect [TARGET]`

Inspect a space by ID, slug, URL, or domain.

```text
USAGE
  $ sf inspect [TARGET] [--profile <value>] [-y] [-o <value>]

ARGUMENTS
  [TARGET]  Space ID, slug, live URL, or domain.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Inspect a space by ID, slug, URL, or domain.

  Look up a space by ID, slug, live URL, or attached domain. Prints space details, live version, and runtime state.

EXAMPLES
  Inspect by slug.

    $ sf inspect docs

  Inspect by live URL.

    $ sf inspect https://spacefast.com

  Inspect by ID in a specific team.

    $ sf inspect spc_abc123 --team acme
```

## `sf link`

Link the current directory to a space.

```text
USAGE
  $ sf link [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Link the current directory to a space.

  Resolve an existing space by --space and save it to .spacefast/state.json in the current directory. Use this to bind a
  local directory to a remote space without publishing.

EXAMPLES
  Link the current directory to a space by slug.

    $ sf link --space my-space

  Link the current directory to a space by id in a specific team.

    $ sf link --space prj_abc123 --team acme
```

## `sf login`

Log in to Spacefast.

```text
USAGE
  $ sf login [--profile <value>] [-y] [--handoff] [-o
    <value>]

FLAGS
  --handoff  Redeem a one-use agent handoff link from the dashboard. The link is read from stdin — pipe it or paste it
             at the hidden prompt; never pass it as an argument.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Log in to Spacefast.

  Authenticate this machine with browser device login, or save a provided access token.

ALIASES
  $ sf auth login

EXAMPLES
  Start browser-assisted device login.

    $ sf login

  Store a token for non-interactive use.

    $ sf login --token st_...

  Redeem a one-use dashboard handoff link through stdin.

    printf '%s\n' "$HANDOFF_LINK" | sf login --handoff
```

## `sf logout`

Log out of Spacefast.

```text
USAGE
  $ sf logout [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Log out of Spacefast.

  Delete the local login and revoke the CLI-minted token when possible.

EXAMPLES
  Log out and revoke the local CLI token.

    $ sf logout
```

## `sf logs [TARGET] [KIND]`

Read a space's request and handler logs.

```text
USAGE
  $ sf logs [TARGET] [KIND] [--profile <value>] [-y]
    [-o <value>] [--space <value>] [--limit <value>] [-f] [--cursor <value>] [--request-id
    <value>] [--handler <value>]

ARGUMENTS
  [TARGET]  Space ID, slug, live URL, or domain. Defaults to the linked space.
  [KIND]    Log kind: `access` for requests the edge served, `runtime` for what your code logged. Defaults to access.

FLAGS
  -f, --follow              Poll for new log entries every 2 seconds until interrupted (Ctrl-C).
      --cursor=<value>      Continue from the cursor printed by the previous page.
      --handler=<value>     Runtime logs only: one handler — a Zero mutation or a Functions handler.
      --limit=<value>       [default: 50] Maximum number of log entries.
      --request-id=<value>  Runtime logs only: everything logged while serving one request.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Read a space's request and handler logs.

  Read a space's logs. `access` is every request the edge served; `runtime` is what your own code wrote — a Zero
  mutation or a Functions handler — with the request id and handler that produced each line. Pass a target to read any
  space without --space.

EXAMPLES
  Recent requests for the linked space.

    $ sf logs

  Watch what your handlers log, live.

    $ sf logs runtime --follow

  What space `docs` logged from its own code.

    $ sf logs docs runtime

  Requests served for a space by URL.

    $ sf logs https://spacefast.com access

  Everything one request logged.

    $ sf logs runtime --request-id req_9f21

  Only what the `checkout` handler logged.

    $ sf logs runtime --handler checkout

  Stream one JSON object per line, for piping into jq.

    $ sf logs runtime --follow --json
```

## `sf mcp`

Run the Spacefast MCP server.

```text
USAGE
  $ sf mcp [--transport stdio|http|streamable-http] [--host <value>] [--port <value>] [--path <value>]
    [--profile <value>] [--http-token <value>] [--cors-origin <value>...]
    [--workspace-root <value>]

FLAGS
  --api-url=<value>         [env: SPACEFAST_API_URL] Spacefast API base URL for MCP tool calls.
  --cors-origin=<value>...  [env: SPACEFAST_MCP_CORS_ORIGIN] Allowed browser Origin for local streamable HTTP. Defaults
                            to loopback origins only.
  --host=<value>            [default: 127.0.0.1, env: SPACEFAST_MCP_HOST] Host for streamable HTTP.
  --http-token=<value>      [env: SPACEFAST_MCP_HTTP_TOKEN] Bearer token required by the local streamable HTTP server.
                            Required when binding outside loopback.
  --path=<value>            [default: /mcp, env: SPACEFAST_MCP_PATH] HTTP path for streamable HTTP.
  --port=<value>            [default: 3945, env: SPACEFAST_MCP_PORT] Port for streamable HTTP.
  --token=<value>           [env: SPACEFAST_TOKEN] Spacefast API token for MCP tool calls.
  --transport=<option>      MCP transport to run. `http` is streamable HTTP.
                            <options: stdio|http|streamable-http>
  --workspace-root=<value>  [env: SPACEFAST_MCP_WORKSPACE_ROOT] Workspace root exposed to On-Device MCP workspace tools.

GLOBAL FLAGS
  --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Run the Spacefast MCP server.

  Run the Spacefast MCP server from the CLI package. Defaults to stdio for MCP clients; use the HTTP transport for
  embedded streamable HTTP.

EXAMPLES
  $ sf mcp

  $ sf mcp daemon

  $ sf mcp status

  $ sf mcp --transport http --port 3945

  $ sf mcp http --host 0.0.0.0 --path /mcp --http-token $SPACEFAST_MCP_HTTP_TOKEN
```

## `sf mcp daemon`

Run the local MCP daemon.

```text
USAGE
  $ sf mcp daemon [--host <value>] [--port <value>] [--path <value>] [--profile <value>]
    [--http-token <value>] [--cors-origin <value>...] [--workspace-root <value>]

FLAGS
  --api-url=<value>         [env: SPACEFAST_API_URL] Spacefast API base URL for MCP tool calls.
  --cors-origin=<value>...  [env: SPACEFAST_MCP_CORS_ORIGIN] Allowed browser Origin for local streamable HTTP. Defaults
                            to loopback origins only.
  --host=<value>            [default: 127.0.0.1, env: SPACEFAST_MCP_HOST] Host for streamable HTTP.
  --http-token=<value>      [env: SPACEFAST_MCP_HTTP_TOKEN] Bearer token required by the local streamable HTTP server.
                            Required when binding outside loopback.
  --path=<value>            [default: /mcp, env: SPACEFAST_MCP_PATH] HTTP path for streamable HTTP.
  --port=<value>            [default: 3945, env: SPACEFAST_MCP_PORT] Port for streamable HTTP.
  --token=<value>           [env: SPACEFAST_TOKEN] Spacefast API token for MCP tool calls.
  --workspace-root=<value>  [env: SPACEFAST_MCP_WORKSPACE_ROOT] Workspace root exposed to On-Device MCP workspace tools.

GLOBAL FLAGS
  --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Run the local MCP daemon.

  Run a persistent local streamable HTTP MCP server and write its connection manifest.

EXAMPLES
  $ sf mcp daemon --port 3945
```

## `sf mcp http`

Run MCP over streamable HTTP.

```text
USAGE
  $ sf mcp http [--host <value>] [--port <value>] [--path <value>] [--profile <value>]
    [--http-token <value>] [--cors-origin <value>...] [--workspace-root <value>]

FLAGS
  --api-url=<value>         [env: SPACEFAST_API_URL] Spacefast API base URL for MCP tool calls.
  --cors-origin=<value>...  [env: SPACEFAST_MCP_CORS_ORIGIN] Allowed browser Origin for local streamable HTTP. Defaults
                            to loopback origins only.
  --host=<value>            [default: 127.0.0.1, env: SPACEFAST_MCP_HOST] Host for streamable HTTP.
  --http-token=<value>      [env: SPACEFAST_MCP_HTTP_TOKEN] Bearer token required by the local streamable HTTP server.
                            Required when binding outside loopback.
  --path=<value>            [default: /mcp, env: SPACEFAST_MCP_PATH] HTTP path for streamable HTTP.
  --port=<value>            [default: 3945, env: SPACEFAST_MCP_PORT] Port for streamable HTTP.
  --token=<value>           [env: SPACEFAST_TOKEN] Spacefast API token for MCP tool calls.
  --workspace-root=<value>  [env: SPACEFAST_MCP_WORKSPACE_ROOT] Workspace root exposed to On-Device MCP workspace tools.

GLOBAL FLAGS
  --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Run MCP over streamable HTTP.

  Run the MCP server over streamable HTTP.

EXAMPLES
  $ sf mcp http --host 0.0.0.0 --path /mcp --http-token $SPACEFAST_MCP_HTTP_TOKEN
```

## `sf mcp install`

Install MCP client config.

```text
USAGE
  $ sf mcp install [--profile <value>] [-y] [--agent
    auto|all|generic|universal|claude-code|codex|opencode|github-copilot|factory-droid|cursor|vscode|gemini-cli|windsurf
    |cline|continue|claude|copilot...] [--oauth --remote]

FLAGS
  --agent=<option>...  Agent/client to configure. Repeat to configure more than one.
                       <options: auto|all|generic|universal|claude-code|codex|opencode|github-copilot|factory-droid|curs
                       or|vscode|gemini-cli|windsurf|cline|continue|claude|copilot>
  --oauth              With --remote, connect directly and let the editor handle OAuth.
  --remote             Use hosted MCP through `sf mcp proxy` and the current CLI login.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Install MCP client config.

  Install Spacefast MCP config into detected or selected coding agents.

EXAMPLES
  Install local stdio MCP for Claude Code.

    $ sf mcp install --agent claude-code

  Install direct hosted MCP with editor-managed OAuth for Cursor.

    $ sf mcp install --agent cursor --remote --oauth
```

## `sf mcp proxy`

Run the authenticated remote MCP proxy.

```text
USAGE
  $ sf mcp proxy [--profile <value>] [-y] [--endpoint <value>]

FLAGS
  --endpoint=<value>  [env: SPACEFAST_MCP_URL] Remote MCP endpoint. HTTPS is required except on loopback.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Run the authenticated remote MCP proxy.

  Proxy remote Spacefast MCP over stdio using the current CLI login.
```

## `sf mcp status`

Show local MCP daemon status.

```text
USAGE
  $ sf mcp status [--json] [--repair]

FLAGS
  --json    Print machine-readable daemon status.
  --repair  Remove a stale local daemon manifest and print recovery steps.

DESCRIPTION
  Show local MCP daemon status.

  Show whether the local MCP daemon is running and how to connect or recover.

EXAMPLES
  $ sf mcp status

  $ sf mcp status --json

  $ sf mcp status --repair
```

## `sf open [TARGET]`

Open a private Space.

```text
USAGE
  $ sf open [TARGET] [--profile <value>] [-y]
    [-o <value>] [--path <value>] [--show-secret]

ARGUMENTS
  [TARGET]  Space ID, slug, live URL, Version URL, or domain. Defaults to the linked space.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

OPEN FLAGS
  --path=<value>  [default: /] Clean route to open after the exchange.
  --show-secret   Print the temporary handoff URL instead of opening it.

DESCRIPTION
  Open a private Space.

  Mint a temporary author handoff and open the private Space. This never creates a recipient Link.

EXAMPLES
  Open the linked private Space.

    $ sf open

  Open Space `docs` privately.

    $ sf open docs
```

## `sf operations [ID]`

Inspect async operations.

```text
USAGE
  $ sf operations [ID] [--profile <value>] [-y] [--space <value>]
    [--limit <value>] [--cursor <value>]

ARGUMENTS
  [ID]  Operation ID. Omit to list recent operations.

FLAGS
  --cursor=<value>  Pagination cursor from a previous response.
  --limit=<value>   Maximum number of operations to return (default 50, max 100).

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Inspect async operations.

  List recent async operations or read one by ID. Pass --space to scope the list to a space.

ALIASES
  $ sf ops

EXAMPLES
  $ sf ops

  $ sf ops op_123

  $ sf operations --space spc_123
```

## `sf pages`

Manage Pages templates.

```text
USAGE
  $ sf pages [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage Pages templates.

  Pull, validate, and preview Spacefast-authored pages.
```

## `sf pages pull [TARGET]`

Own a default page template.

```text
USAGE
  $ sf pages pull [TARGET] [--profile <value>] [-y]

ARGUMENTS
  [TARGET]  Page id, layout, or all.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Own a default page template.

  Copy Spacefast's readable default page HTML into your project.
```

## `sf pages validate`

Validate local Pages templates.

```text
USAGE
  $ sf pages validate [--profile <value>] [-y] [-d <value>]

FLAGS
  -d, --dir=<value>  [default: .] Project directory.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Validate local Pages templates.

  Run the same structural Pages checks used by publish.
```

## `sf profiles`

List provider profiles.

```text
USAGE
  $ sf profiles [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List provider profiles.

  List named provider profiles. A profile binds an API base URL and credential so the CLI can publish to any
  Spacefast-compatible control plane.

EXAMPLES
  List configured provider profiles.

    $ sf profiles
```

## `sf profiles rm NAME`

Remove a provider profile.

```text
USAGE
  $ sf profiles rm NAME [--profile <value>] [-y]

ARGUMENTS
  NAME  Profile name.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Remove a provider profile.

  Delete a named provider profile and its stored credential.

ALIASES
  $ sf profiles remove
  $ sf profiles delete

EXAMPLES
  Delete the staging provider profile.

    $ sf profiles rm staging
```

## `sf profiles set NAME`

Create or update a provider profile.

```text
USAGE
  $ sf profiles set NAME [--profile <value>] [-y]

ARGUMENTS
  NAME  Profile name.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  Provider API base URL for this profile.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Create or update a provider profile.

  Create or update a named provider profile. Pass --api-url for the provider endpoint and --token to bind a credential
  to it. Pass --token "" to clear a saved token.

EXAMPLES
  $ sf profiles set acme --api-url https://api.acme-host.example --token st_...

  $ sf profiles set acme --token ""
```

## `sf profiles use NAME`

Select the active provider profile.

```text
USAGE
  $ sf profiles use NAME [--profile <value>] [-y]

ARGUMENTS
  NAME  Profile name.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Select the active provider profile.

  Select the profile used when no --profile flag or env is set.

EXAMPLES
  Select the staging profile as the default.

    $ sf profiles use staging
```

## `sf promote [VERSION]`

Promote a version to a channel.

```text
USAGE
  $ sf promote [VERSION] [--profile <value>] [-y]
    [-o <value>] [--space <value>] [--channel <value>] [--wait] [--wait-timeout <value>]

ARGUMENTS
  [VERSION]  Version ID, ref, or number to make live, for example ver_123, v12, or 12.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXECUTION FLAGS
  --channel=<value>       [default: live] Channel to point at this version (default "live").
  --[no-]wait             Wait until queued publish work finishes before returning.
  --wait-timeout=<value>  [default: 900] Seconds to wait for the version to become live.

DESCRIPTION
  Promote a version to a channel.

  Promote an existing ready version to a channel (default live). Use `rollback` to roll back to an older version
  instead.

EXAMPLES
  Make version v12 live.

    $ sf promote v12

  Promote explicitly to the live channel.

    $ sf promote v12 --channel live

  Queue promotion and print the operation as JSON.

    $ sf promote ver_123 --no-wait --json
```

## `sf publish [DIR]`

Publish files or built projects to Spacefast.

```text
USAGE
  $ sf publish [DIR] [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [-n <value>] [--slug <value>] [--hostname-scope team|global] [--spa
    auto|true|false] [-m <value>] [--git-branch <value>] [--git-commit <value>] [--git-ref <value>] [--git-repository
    <value>] [--source-type direct-upload|git] [--mode website|files] [--target production|preview] [--dry-run]
    [--compress] [--config-only] [--wait] [--wait-timeout <value>] [--stream] [--show-secret] [--build] [--remote]
    [--prebuilt] [--root-directory <value>] [--install-directory <value>] [--install-command <value>] [--build-command
    <value>] [--output-directory <value>] [--env-file <value>...] [--ignored-build-command <value>] [--source-include
    <value>...] [--skip-install] [--skip-build] [--publish-mode additive|snapshot] [--immutable-asset-prefix <value>...]
    [--allow-unsupported-platform-features] [--auto-finalize]

ARGUMENTS
  [DIR]  File, directory, project, or prebuilt .tgz to publish. Defaults to the current directory.

VERSION SOURCE FLAGS
  -m, --message=<value>         [env: SPACEFAST_PUBLISH_MESSAGE] Plain-language changelog entry for this version, shown
                                in version history. Overrides the detected git commit message.
      --git-branch=<value>      [env: SPACEFAST_GIT_BRANCH] Git branch name to record on the version.
      --git-commit=<value>      [env: SPACEFAST_GIT_COMMIT] Git commit SHA to record on the version.
      --git-ref=<value>         [env: SPACEFAST_GIT_REF] Git ref to record on the version.
      --git-repository=<value>  [env: SPACEFAST_GIT_REPOSITORY] Git repository to record on the version, for example
                                owner/repo.
      --source-type=<option>    [env: SPACEFAST_SOURCE_TYPE] Version source type to record.
                                <options: direct-upload|git>

SPACE METADATA FLAGS
  -n, --name=<value>             Set the space title.
      --hostname-scope=<option>  Managed hostname scope for newly created spaces.
                                 <options: team|global>
      --mode=<option>            Serve the space as a website (default) or as a raw file listing. Usually set in
                                 sf.jsonc.
                                 <options: website|files>
      --slug=<value>             Set the space slug when creating a new space.
      --spa=<option>             [default: auto] Control single-page app fallback detection.
                                 <options: auto|true|false>

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

MIGRATION FLAGS
  --allow-unsupported-platform-features  Publish even when imported platform config includes features Spacefast cannot
                                         convert.

EXECUTION FLAGS
  --[no-]auto-finalize    Finalize a remote build automatically after staging its output.
  --[no-]compress         Generate smaller .br/.gz sidecars for compressible files before uploading.
  --config-only           Publish a config-only version that carries the prior artifact forward without building or
                          uploading content.
  --dry-run               Print the resolved publish plan without uploading files or writing state.
  --[no-]stream           With --json, emit a JSONL publish event stream instead of a single result.
  --target=<option>       Publish to production (live) or as a preview without promoting to live.
                          <options: production|preview>
  --[no-]wait             Wait until the target version is ready and, for production, live before returning.
  --wait-timeout=<value>  [default: 900] Seconds to wait for the version to become ready.

BUILD FLAGS
  --build                          Force local build mode; fails if no build command can be resolved.
  --build-command=<value>          Build command. Defaults to framework and package script detection.
  --env-file=<value>...            Local dotenv file to load for install/build commands. Repeat for multiple files.
  --ignored-build-command=<value>  For --remote, command that skips the build when it exits 0.
  --install-command=<value>        Install command. Defaults to package-manager detection.
  --install-directory=<value>      Repository subdirectory to run dependency installation from.
  --output-directory=<value>       Build output directory relative to the app root.
  --prebuilt                       Publish a prebuilt directory or .tgz without installing or building.
  --remote                         Upload source and run the build remotely.
  --root-directory=<value>         Repository subdirectory that contains the app.
  --skip-build                     Skip the build command and publish the selected directory unless --output-directory
                                   is set.
  --skip-install                   Skip dependency installation.
  --source-include=<value>...      Ignored file or directory to include in a remote source archive. Repeat for multiple
                                   paths.

VERSION FLAGS
  --immutable-asset-prefix=<value>...  Path prefix whose files are content-addressed and kept from the previous version,
                                       so a tab loaded before this deploy can still fetch its chunks. Snapshot mode
                                       only. Repeat for multiple prefixes.
  --publish-mode=<option>              Replace the whole site (snapshot, default) or add to what is already deployed
                                       (additive).
                                       <options: additive|snapshot>

OUTPUT FLAGS
  --show-secret  Print private Open and Claim URLs. Secrets are hidden from JSON and non-interactive output by default.

DESCRIPTION
  Publish files or built projects to Spacefast.

  Publish a file, directory, or built project to Spacefast. Direct files publish as-is; project directories with a
  detected build command build automatically. sf deploy is an exact alias. Deploying is publishing: a deployment is a
  version, and the canonical nouns are version, channel, and build.

ALIASES
  $ sf deploy

EXAMPLES
  Publish a file or static directory directly.

    $ sf publish ./dist

  Build a detected project, or publish the directory directly if no build exists.

    $ sf publish

  Upload source and run the build remotely.

    $ sf publish --remote

  Publish a prebuilt archive without installing or building.

    $ sf publish ./site.tgz --prebuilt

  Publish a preview and print one machine-readable receipt.

    $ sf publish --target preview --json

  Stream JSONL build and publish events.

    $ sf publish --json --stream
```

## `sf redeploy [BUILD]`

Retry the latest build (alias of `sf builds retry`).

```text
USAGE
  $ sf redeploy [BUILD] [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

ARGUMENTS
  [BUILD]  Build ID (bld_...) to retry. Defaults to the space's most recent build.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Retry the latest build (alias of `sf builds retry`).

  Retry a terminal build with the same input, settings, and target. Without a build id it retries the space's most
  recent build. Alias of `sf builds retry`. Deploying is publishing: a deployment is a version, and the canonical nouns
  are version, channel, and build.

EXAMPLES
  Retry the most recent build of the linked space.

    $ sf redeploy

  Retry a specific terminal build.

    $ sf redeploy bld_123
```

## `sf rollback [VERSION]`

Roll back to a previous version.

```text
USAGE
  $ sf rollback [VERSION] [--profile <value>] [-y]
    [-o <value>] [--space <value>] [--channel <value>] [--wait] [--wait-timeout <value>]

ARGUMENTS
  [VERSION]  Version ID, ref, or number to make live, for example ver_123, v12, or 12.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXECUTION FLAGS
  --channel=<value>       [default: live] Channel to point at this version (default "live").
  --[no-]wait             Wait until queued publish work finishes before returning.
  --wait-timeout=<value>  [default: 900] Seconds to wait for the version to become live.

DESCRIPTION
  Roll back to a previous version.

  Roll live traffic back to an existing ready version. Use `versions ls` to find a version.

EXAMPLES
  List versions and find the target rollback version.

    $ sf versions ls

  Make version v12 live.

    $ sf rollback v12

  Make version v12 live for a selected space.

    $ sf rollback 12 --space docs
```

## `sf routing`

Routing utilities.

```text
USAGE
  $ sf routing [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Routing utilities.

  Inspect routing configuration and compute redirects/headers.
```

## `sf routing compute`

Compute routing.

```text
USAGE
  $ sf routing compute [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Compute routing.

  Resolve the latest deployment's _redirects and _headers with current variables.

EXAMPLES
  Resolve the latest deployment's redirects and headers.

    $ sf routing compute --space docs
```

## `sf routing inspect`

Inspect local routing files.

```text
USAGE
  $ sf routing inspect [--profile <value>] [-y] [-r <value>] [--url
    <value>...]

FLAGS
  -r, --routing=<value>  [default: .] Directory containing _redirects and _headers to inspect.
      --url=<value>...   URL or path to match against local routing rules. Repeat for multiple URLs.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Inspect local routing files.

  Compile local _redirects and _headers files and optionally match URLs against the compiled rules.

EXAMPLES
  Compile _redirects and _headers in the current directory.

    $ sf routing inspect

  Match a path against the compiled local routing rules.

    $ sf routing inspect --routing ./dist --url /old-path
```

## `sf runtime`

Inspect a space's runtime.

```text
USAGE
  $ sf runtime [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Inspect a space's runtime.

  Inspect what a space is serving and what runs it.
```

## `sf runtime status`

Show what a space is serving.

```text
USAGE
  $ sf runtime status [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Show what a space is serving.

  Show what a space is serving: its live version, the URL it answers on, and — when the live version ships code —
  everything that version deployed. A capsule lists its tables, queries, mutations, actions, migration count and schema
  digest; a worker its entry, bundle digest, routes, endpoints and declared capabilities. All of it is read from version
  metadata, so it answers while the space's runtime is asleep or moving.

EXAMPLES
  What the linked space is serving right now.

    $ sf runtime status

  The same for space `docs`.

    $ sf runtime status --space docs
```

## `sf setup`

Generate setup instructions.

```text
USAGE
  $ sf setup [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Generate setup instructions.

  Generate setup instructions for agents and integrations.
```

## `sf setup agent`

Install Spacefast agent tooling.

```text
USAGE
  $ sf setup agent [--profile <value>] [-y] [--agent
    auto|all|generic|universal|claude-code|codex|opencode|github-copilot|factory-droid|cursor|vscode|gemini-cli|windsurf
    |cline|continue|claude|copilot...] [-p] [--oauth --remote] [--skip-mcp] [--force] [--handoff]

FLAGS
  -p, --project            Install skills into this project instead of global agent directories.
  -y, --yes                Skip prompts, auto-detect agents, and accept local stdio MCP.
      --agent=<option>...  Agent/client to configure. Repeat to configure more than one.
                           <options: auto|all|generic|universal|claude-code|codex|opencode|github-copilot|factory-droid|
                           cursor|vscode|gemini-cli|windsurf|cline|continue|claude|copilot>
      --force              Overwrite locally modified or unverified Spacefast skill files.
      --handoff            Redeem a one-use agent handoff link from the dashboard before generating setup. The link is
                           read from stdin.
      --oauth              With --remote, connect directly and let the editor handle OAuth.
      --remote             Use hosted MCP through `sf mcp proxy` and the current CLI login.
      --skip-mcp           Install skills without configuring MCP.
  --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Install Spacefast agent tooling.

  Detect agent clients and configure Spacefast skills plus MCP in one idempotent flow.

EXAMPLES
  Configure detected agents with local stdio MCP.

    $ sf setup agent -y

  Configure Cursor with direct hosted MCP and editor OAuth.

    $ sf setup agent -y --agent cursor --remote --oauth
```

## `sf share`

Manage Space Grants.

```text
USAGE
  $ sf share [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage Space Grants.

  List every active Grant. Use `sf share grant`, `link`, `password`, `token`, or `oidc` to add access.
```

## `sf share check`

Explain effective Grant access.

```text
USAGE
  $ sf share check [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--path <value>] [--as public|team|person|link|password|machine|external]
    [--person <value>] [--link <value>] [--password <value>] [--machine <value>] [--issuer <value>] [--subject <value>]
    [--verified-email] [--ip <value>] [--target live|version|branch] [--target-id <value>]

FLAGS
  --as=<option>        [default: public] Audience to simulate.
                       <options: public|team|person|link|password|machine|external>
  --ip=<value>         IP address to evaluate against network constraints.
  --issuer=<value>     External identity issuer when --as external.
  --link=<value>       Link id when --as link.
  --machine=<value>    Machine credential id when --as machine.
  --password=<value>   Password credential id when --as password.
  --path=<value>       [default: /] Canonical route to check.
  --person=<value>     Person id when --as person.
  --subject=<value>    External identity subject when --as external.
  --target=<option>    [default: live] Published target kind.
                       <options: live|version|branch>
  --target-id=<value>  Version id or branch name.
  --verified-email     Simulate a principal with a verified email.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Explain effective Grant access.

  Explain the exact additive Grants and capabilities matching one route, audience, and target.
```

## `sf share grant`

Create a Space Grant.

```text
USAGE
  $ sf share grant --to public|team --can view|comment|publish|manage --path <value>... [--api-url
    <value>] [--profile <value>] [-y] [-o <value>] [--space <value>]
    [--exclude <value>...] [--target <value>] [--name <value>] [--expires <value>] [--network <value>...] [--country
    <value>...] [--exclude-country <value>...] [--exclude-user-agent <value>...]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

GRANT FLAGS
  --can=<option>        (required) Capability preset: view, comment, publish, or manage.
                        <options: view|comment|publish|manage>
  --exclude=<value>...  [default: ] Excluded route pattern local to this Grant. Repeatable.
  --expires=<value>     Expire after a duration such as 7d or 30m.
  --name=<value>        Human-readable Grant name.
  --path=<value>...     (required) Included route pattern. Repeat for disjoint paths.
  --target=<value>      [default: live] live, all-versions, version:<id>, or branch:<name>.
  --to=<option>         (required) Audience: public or team.
                        <options: public|team>

CONSTRAINTS FLAGS
  --country=<value>...             [default: ] Allowed ISO country code. Repeatable.
  --exclude-country=<value>...     [default: ] Blocked ISO country code. Repeatable.
  --exclude-user-agent=<value>...  [default: ] Block user agents containing this text. Repeatable.
  --network=<value>...             [default: ] Allowed IP address or CIDR. Repeatable.

DESCRIPTION
  Create a Space Grant.

  Create one additive Grant. Credential-backed audiences use `sf share link`, `password`, `token`, or `oidc` so their
  proof and Grant are created together.

EXAMPLES
  Let the owning team view the docs subtree.

    $ sf share grant --to team --can view --path '/docs/**'

  Publish a review subtree with anonymous Comments.

    $ sf share grant --to public --can comment --path '/proposal/**' --exclude '/proposal/internal/**'

  Make every immutable Version public.

    $ sf share grant --to public --can view --path '/**' --target all-versions
```

## `sf share grant edit ID`

Edit a direct managed Grant.

```text
USAGE
  $ sf share grant edit ID [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--name <value>] [--can view|comment|publish|manage] [--exclude <value>...
    --path <value>...] [--target <value>] [--expires <value> | --no-expiry] [--network <value>... | --no-network]
    [--country <value>... | ] [--exclude-country <value>... | ] [--exclude-user-agent <value>... | ]

ARGUMENTS
  ID  Managed Grant id.

FLAGS
  --can=<option>        Replace the capability preset: view, comment, publish, or manage.
                        <options: view|comment|publish|manage>
  --exclude=<value>...  [default: ] Excluded route pattern for the replacement path set. Repeatable.
  --expires=<value>     New lifetime from now (e.g. 30m, 24h, 7d).
  --name=<value>        New human-readable Grant name.
  --no-expiry           Remove the Grant expiry.
  --path=<value>...     Replace included route patterns. Repeat for disjoint paths.
  --target=<value>      Replace the target: live, all-versions, version:<id>, or branch:<name>.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

CONSTRAINTS FLAGS
  --country=<value>...             Replace allowed ISO country codes. Repeatable.
  --exclude-country=<value>...     Replace blocked ISO country codes. Repeatable.
  --exclude-user-agent=<value>...  Replace blocked user-agent substrings. Repeatable.
  --network=<value>...             Replace allowed IP addresses or CIDRs. Repeatable.
  --no-network                     Remove every network constraint from this Grant.

DESCRIPTION
  Edit a direct managed Grant.

  Replace editable dimensions of a direct managed Grant while preserving its stable id.
```

## `sf share identity`

Manage external identity access.

```text
USAGE
  $ sf share identity [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage external identity access.

  Connect OIDC or a white-label signer, then grant external subjects precise capabilities and paths.
```

## `sf share identity create`

Create an identity connection.

```text
USAGE
  $ sf share identity create --type oidc|signer --name <value> --issuer <value> [--profile
    <value>] [-y] [-o <value>] [--client-id <value>] [--client-secret <value>] [--authorize-url
    <value>] [--key <value>...]

FLAGS
  --authorize-url=<value>
  --client-id=<value>
  --client-secret=<value>
  --issuer=<value>         (required)
  --key=<value>...         [default: ] Signer key in "kid:base64url-public-key" form. Repeat during rotation.
  --name=<value>           (required)
  --type=<option>          (required)
                           <options: oidc|signer>

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Create an identity connection.

  Create an OIDC connection or a white-label Ed25519 signer connection for a Team.
```

## `sf share identity grant`

Create an external identity Grant.

```text
USAGE
  $ sf share identity grant --connection <value> --subject <value> --name <value> [--profile
    <value>] [-y] [-o <value>] [--space <value>] [--can
    view|comment|publish|manage] [--path <value>...] [--except <value>...] [--target <value>] [--not-before <value>]
    [--expires <value>] [--max-uses <value>] [--network <value>...] [--country <value>...] [--exclude-country
    <value>...] [--exclude-user-agent <value>...] [--require-verified-email]

FLAGS
  --can=<option>        [default: view]
                        <options: view|comment|publish|manage>
  --connection=<value>  (required)
  --except=<value>...   [default: ]
  --name=<value>        (required)
  --path=<value>...     [default: /**]
  --subject=<value>     (required)
  --target=<value>      [default: live] live, all-versions, version:<id>, or branch:<name>.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

CONSTRAINTS FLAGS
  --country=<value>...             [default: ] Allowed ISO country code. Repeatable.
  --exclude-country=<value>...     [default: ] Blocked ISO country code. Repeatable.
  --exclude-user-agent=<value>...  [default: ] Block user agents containing this text. Repeatable.
  --expires=<value>                Expire after a duration such as 7d or 30m.
  --max-uses=<value>               Maximum successful admissions before the Grant stops working.
  --network=<value>...             [default: ] Allowed IP address or CIDR. Repeatable.
  --not-before=<value>             Do not admit this Grant before this ISO date-time.
  --require-verified-email         Require email verification for this credential.

DESCRIPTION
  Create an external identity Grant.

  Grant one externally proven subject precise capabilities and paths on a Space.
```

## `sf share identity ls`

List identity connections.

```text
USAGE
  $ sf share identity ls [--profile <value>] [-y] [-o <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List identity connections.

  List Team OIDC and white-label signer connections.

ALIASES
  $ sf share identity list
```

## `sf share identity revoke CONNECTION`

Revoke an identity connection.

```text
USAGE
  $ sf share identity revoke CONNECTION [--profile <value>] [-y] [-o
  <value>]

ARGUMENTS
  CONNECTION  Identity connection id.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Revoke an identity connection.

  Revoke an identity connection, its external Grants, and admitted sessions.
```

## `sf share identity update CONNECTION`

Update or rotate an identity connection.

```text
USAGE
  $ sf share identity update CONNECTION [--profile <value>] [-y] [-o
    <value>] [--name <value>] [--client-id <value>] [--client-secret <value>] [--authorize-url <value>] [--key
    <value>...] [--session-ttl <value>]

ARGUMENTS
  CONNECTION  Identity connection id.

FLAGS
  --authorize-url=<value>
  --client-id=<value>
  --client-secret=<value>
  --key=<value>...         Complete replacement signer key set in "kid:base64url-public-key" form. Repeat to overlap old
                           and new keys.
  --name=<value>
  --session-ttl=<value>    Admitted session lifetime, for example 30m or 8h.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Update or rotate an identity connection.

  Rotate OIDC secrets or signer keys and update connection settings without changing external Grants.
```

## `sf share link`

Manage Links.

```text
USAGE
  $ sf share link [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage Links.

  Create, list, edit, copy, and revoke named Links. Each Link owns one Grant with paths, exclusions, capabilities, and a
  serving target.
```

## `sf share link copy ID`

Copy a Link.

```text
USAGE
  $ sf share link copy ID [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--show-secret]

ARGUMENTS
  ID  Share link id (see `sf share link ls`).

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

LINK FLAGS
  --show-secret  Print the credential URL even when output is JSON or non-interactive.

DESCRIPTION
  Copy a Link.

  Copy a Link's stable short URL.

EXAMPLES
  Print the Link's credential URL.

    $ sf share link copy lnk_123
```

## `sf share link create`

Create a Link.

```text
USAGE
  $ sf share link create --name <value> [--profile <value>] [-y]
    [-o <value>] [--space <value>] [--landing <value>] [--path <value>...] [--exclude
    <value>...] [--can view|comment] [--target <value>] [--not-before <value>] [--expires <value>] [--max-uses <value>]
    [--require-verified-email] [--network <value>...] [--country <value>...] [--exclude-country <value>...]
    [--exclude-user-agent <value>...] [--show-secret]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

LINK FLAGS
  --can=<option>        [default: view] Capability preset: view or comment.
                        <options: view|comment>
  --exclude=<value>...  [default: ] Excluded route pattern local to this Link. Repeatable.
  --landing=<value>     [default: /] Clean route opened after exchange.
  --name=<value>        (required) Human name shown in the Links list.
  --path=<value>...     [default: /**] Included route pattern. Repeat for disjoint paths.
  --show-secret         Print the credential URL even when output is JSON or non-interactive.
  --target=<value>      [default: live] live, all-versions, version:<id>, or branch:<name>.

CONSTRAINTS FLAGS
  --country=<value>...             [default: ] Allowed ISO country code. Repeatable.
  --exclude-country=<value>...     [default: ] Blocked ISO country code. Repeatable.
  --exclude-user-agent=<value>...  [default: ] Block user agents containing this text. Repeatable.
  --expires=<value>                How long the link lasts (e.g. 30m, 24h, 7d). Omit for no expiry.
  --max-uses=<value>               Maximum successful opens before the Link stops working.
  --network=<value>...             [default: ] Allowed IP address or CIDR. Repeatable.
  --not-before=<value>             Do not admit this Link before this ISO date-time.
  --require-verified-email         Admit only visitors whose session has a verified email.

DESCRIPTION
  Create a Link.

  Create a named Link backed by one Grant. Links can View or Comment on multiple path patterns.

EXAMPLES
  Create a client Link that can comment on two path groups except internal docs.

    $ sf share link create --landing /docs --path "/docs/**" --path "/assets/**" --exclude "/docs/internal/**" --can \
      comment --name "Client review" --expires 7d
```

## `sf share link edit ID`

Edit Link metadata.

```text
USAGE
  $ sf share link edit ID [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--name <value>] [--landing <value>] [--exclude <value>... --path
    <value>...] [--can view|comment] [--target <value>] [--not-before <value> | --no-not-before] [--expires <value> |
    --no-expiry] [--max-uses <value> | --no-max-uses] [--require-verified-email | --allow-unverified-email] [--network
    <value>... | --no-network] [--country <value>... | ] [--exclude-country <value>... | ] [--exclude-user-agent
    <value>... | ]

ARGUMENTS
  ID  Link id.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

CONSTRAINTS FLAGS
  --allow-unverified-email         Remove the verified-email requirement.
  --country=<value>...             Replace allowed ISO country codes. Repeatable.
  --exclude-country=<value>...     Replace blocked ISO country codes. Repeatable.
  --exclude-user-agent=<value>...  Replace blocked user-agent substrings. Repeatable.
  --expires=<value>                New lifetime from now (e.g. 30m, 24h, 7d).
  --max-uses=<value>               Replace the maximum successful opens.
  --network=<value>...             Replace allowed IP addresses or CIDRs. Repeatable.
  --no-expiry                      Remove the Link expiry.
  --no-max-uses                    Remove the open limit.
  --no-network                     Remove network restrictions.
  --no-not-before                  Remove the earliest admission time.
  --not-before=<value>             Replace the earliest admission time with this ISO date-time.
  --require-verified-email         Require a verified email.

LINK FLAGS
  --can=<option>        Replace the capability preset: view or comment.
                        <options: view|comment>
  --exclude=<value>...  [default: ] Excluded route pattern for the replacement path set. Repeatable.
  --landing=<value>     New clean landing path.
  --name=<value>        New Link name.
  --path=<value>...     Replace included route patterns. Repeat for disjoint paths.
  --target=<value>      Replace the target: live, all-versions, version:<id>, or branch:<name>.

DESCRIPTION
  Edit Link metadata.

  Replace a Link's metadata or Grant dimensions without rotating its stable URL.
```

## `sf share link ls`

List Links.

```text
USAGE
  $ sf share link ls [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List Links.

  List named Links with Grant paths, capabilities, target, expiry, and lifecycle. List reads never carry credentials.

ALIASES
  $ sf share link list

EXAMPLES
  List share links for the docs space.

    $ sf share link ls --space docs
```

## `sf share link revoke ID`

Revoke a Link.

```text
USAGE
  $ sf share link revoke ID [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

ARGUMENTS
  ID  Share link id (see `sf share link ls`).

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Revoke a Link.

  Revoke a share link. Structural: the link's grant drops from the compiled rule set in the same write, so every
  outstanding URL stops working on the next request.

EXAMPLES
  Revoke a share link.

    $ sf share link revoke lnk_123
```

## `sf share list`

List Space Grants.

```text
USAGE
  $ sf share list [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List Space Grants.

  List every active Grant, including config, team, Person, Link, password, machine, and external identity access.

ALIASES
  $ sf share ls
```

## `sf share password`

Manage password access.

```text
USAGE
  $ sf share password [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage password access.

  Create, list, rotate, and revoke named password Grants. Passwords never live in sf.jsonc.
```

## `sf share password create`

Create password access.

```text
USAGE
  $ sf share password create --name <value> --path <value>... [--profile <value>] [--token
    <value>] [-y] [-o <value>] [--space <value>] [--password <value>] [--password-from-stdin]
    [--can view|comment] [--exclude <value>...] [--target <value>] [--not-before <value>] [--expires <value>]
    [--max-uses <value>] [--network <value>...] [--country <value>...] [--exclude-country <value>...]
    [--exclude-user-agent <value>...] [--require-verified-email]

FLAGS
  --can=<option>         [default: view] Capability preset.
                         <options: view|comment>
  --exclude=<value>...   [default: ] Local exclusion pattern.
  --name=<value>         (required) Human-readable password name.
  --password=<value>     [env: SPACEFAST_SHARE_PASSWORD] Password, or set SPACEFAST_SHARE_PASSWORD.
  --password-from-stdin  Read the password from standard input.
  --path=<value>...      (required) Included route pattern.
  --target=<value>       [default: live] Published target selector.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

CONSTRAINTS FLAGS
  --country=<value>...             [default: ] Allowed ISO country code. Repeatable.
  --exclude-country=<value>...     [default: ] Blocked ISO country code. Repeatable.
  --exclude-user-agent=<value>...  [default: ] Block user agents containing this text. Repeatable.
  --expires=<value>                Expire after a duration such as 7d or 30m.
  --max-uses=<value>               Maximum successful admissions before the Grant stops working.
  --network=<value>...             [default: ] Allowed IP address or CIDR. Repeatable.
  --not-before=<value>             Do not admit this Grant before this ISO date-time.
  --require-verified-email         Require email verification for this credential.

DESCRIPTION
  Create password access.

  Create a named scoped password Grant. The verifier is Argon2id and rotation fences existing sessions.
```

## `sf share password ls`

List password access.

```text
USAGE
  $ sf share password ls [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List password access.

  List password proof metadata and the Grants they admit.

ALIASES
  $ sf share password list
```

## `sf share password revoke ID`

Revoke password access.

```text
USAGE
  $ sf share password revoke ID [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

ARGUMENTS
  ID  Password credential id.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Revoke password access.

  Revoke password access and its canonical Grant.
```

## `sf share password rotate ID`

Rotate a password.

```text
USAGE
  $ sf share password rotate ID [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--password <value>] [--password-from-stdin]

ARGUMENTS
  ID  Password credential id.

FLAGS
  --password=<value>     [env: SPACEFAST_SHARE_PASSWORD] New password, or set SPACEFAST_SHARE_PASSWORD.
  --password-from-stdin  Read the new password from standard input.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Rotate a password.

  Replace a password and immediately fence sessions using the old one.
```

## `sf share people`

Manage People.

```text
USAGE
  $ sf share people [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage People.

  Invite, list, resend, edit, and remove People. A Person can hold roles on multiple route subtrees.
```

## `sf share people edit PERSON`

Edit a Person's scoped roles.

```text
USAGE
  $ sf share people edit PERSON --grant <value>... [--profile <value>]
    [-y] [-o <value>] [--space <value>]

ARGUMENTS
  PERSON  Person id or email address.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

PEOPLE FLAGS
  --grant=<value>...  (required) Scoped role in <path>=<role> form. Repeat to replace the full grant set.

DESCRIPTION
  Edit a Person's scoped roles.

  Replace a Person's scoped roles atomically. Repeat --grant for every route subtree they should retain.

EXAMPLES
  Keep root viewing and grant editing under /docs.

    $ sf share people edit person@example.com --grant /=viewer --grant /docs=editor
```

## `sf share people invite EMAIL`

Invite a Person.

```text
USAGE
  $ sf share people invite EMAIL [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--role viewer|commenter|editor] [--scope <value>...]

ARGUMENTS
  EMAIL  Email address to invite.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

PEOPLE FLAGS
  --role=<option>     [default: viewer] Role granted on every supplied scope.
                      <options: viewer|commenter|editor>
  --scope=<value>...  [default: /] Canonical route subtree. Repeat for multiple scopes.

DESCRIPTION
  Invite a Person.

  Invite one Person without requiring an account. Repeat --scope to grant the same role on multiple route subtrees.

EXAMPLES
  Invite a commenter to two route subtrees.

    $ sf share people invite person@example.com --role commenter --scope /docs --scope /assets
```

## `sf share people ls`

List People.

```text
USAGE
  $ sf share people ls [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List People.

  List People and every scoped role they hold.

ALIASES
  $ sf share people list
```

## `sf share people remove PERSON`

Remove a Person.

```text
USAGE
  $ sf share people remove PERSON [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

ARGUMENTS
  PERSON  Person id or email (see `sf share people ls`).

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Remove a Person.

  Remove a Person and all of their scoped grants.
```

## `sf share people resend PERSON`

Resend a Person invitation.

```text
USAGE
  $ sf share people resend PERSON [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

ARGUMENTS
  PERSON  Person id or email.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Resend a Person invitation.

  Replace a pending Person invitation and send a fresh accountless acceptance email.
```

## `sf share request`

Manage access requests.

```text
USAGE
  $ sf share request [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage access requests.

  List, approve, and deny inbox-verified access requests.
```

## `sf share request approve ID`

Approve an access request.

```text
USAGE
  $ sf share request approve ID [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--role viewer|commenter|editor] [--scope <value>]

ARGUMENTS
  ID  Access request id.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

APPROVE FLAGS
  --role=<option>  Approved role. Defaults to the requested role.
                   <options: viewer|commenter|editor>
  --scope=<value>  Approved route subtree. Defaults to the requested scope.

DESCRIPTION
  Approve an access request.

  Approve an access request into the canonical People list. Override the requested role or route scopes when needed.
```

## `sf share request deny ID`

Deny an access request.

```text
USAGE
  $ sf share request deny ID [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

ARGUMENTS
  ID  Access request id.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Deny an access request.

  Deny a pending access request.
```

## `sf share request ls`

List access requests.

```text
USAGE
  $ sf share request ls [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List access requests.

  List pending access requests with requested role and route scope.

ALIASES
  $ sf share request list
```

## `sf share revoke ID`

Revoke a Space Grant.

```text
USAGE
  $ sf share revoke ID [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

ARGUMENTS
  ID  Grant id (see `sf share list`).

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Revoke a Space Grant.

  Revoke one managed Grant. Config Grants must be changed in sf.jsonc; credential Grants are normally revoked through
  their credential command.
```

## `sf share token`

Manage machine access.

```text
USAGE
  $ sf share token [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage machine access.

  Create, list, rotate, and revoke header-only machine credentials backed by scoped Grants.
```

## `sf share token create`

Create a machine credential.

```text
USAGE
  $ sf share token create --name <value> --path <value>... [--profile <value>] [--token
    <value>] [-y] [-o <value>] [--space <value>] [--can view|comment|publish|manage] [--exclude
    <value>...] [--target <value>] [--not-before <value>] [--expires <value>] [--max-uses <value>] [--network
    <value>...] [--country <value>...] [--exclude-country <value>...] [--exclude-user-agent <value>...] [--show-secret]

FLAGS
  --can=<option>        [default: view] Capability preset.
                        <options: view|comment|publish|manage>
  --exclude=<value>...  [default: ] Local exclusion pattern.
  --name=<value>        (required) Human-readable machine name.
  --path=<value>...     (required) Included route pattern.
  --show-secret         Print the one-time token in JSON or non-interactive output.
  --target=<value>      [default: live] Published target selector.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

CONSTRAINTS FLAGS
  --country=<value>...             [default: ] Allowed ISO country code. Repeatable.
  --exclude-country=<value>...     [default: ] Blocked ISO country code. Repeatable.
  --exclude-user-agent=<value>...  [default: ] Block user agents containing this text. Repeatable.
  --expires=<value>                Expire after a duration such as 7d or 30m.
  --max-uses=<value>               Maximum successful admissions before the Grant stops working.
  --network=<value>...             [default: ] Allowed IP address or CIDR. Repeatable.
  --not-before=<value>             Do not admit this Grant before this ISO date-time.

DESCRIPTION
  Create a machine credential.

  Create a named header-only machine credential and scoped Grant. The token is returned once.
```

## `sf share token ls`

List machine access.

```text
USAGE
  $ sf share token ls [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List machine access.

  List machine credential metadata and the Grants they admit.

ALIASES
  $ sf share token list
```

## `sf share token revoke ID`

Revoke machine access.

```text
USAGE
  $ sf share token revoke ID [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

ARGUMENTS
  ID  Machine credential id.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Revoke machine access.

  Revoke a machine credential and its canonical Grant.
```

## `sf share token rotate ID`

Rotate a machine credential.

```text
USAGE
  $ sf share token rotate ID [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--show-secret]

ARGUMENTS
  ID  Machine credential id.

FLAGS
  --show-secret  Print the one-time token in JSON or non-interactive output.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Rotate a machine credential.

  Rotate a machine credential, fence the old token, and return the replacement once.
```

## `sf skills`

Install or update Spacefast agent skills.

```text
USAGE
  $ sf skills [--profile <value>] [-y] [--agent
    auto|all|generic|universal|claude-code|codex|opencode|github-copilot|factory-droid|cursor|vscode|gemini-cli|windsurf
    |cline|continue|claude|copilot...] [-p] [-l] [--force]

FLAGS
  -l, --list               List bundled skill files without installing.
  -p, --project            Install into this project instead of the agent's global skills directory.
      --agent=<option>...  Agent to install for. `auto` configures detected agents plus .agents/skills.
                           <options: auto|all|generic|universal|claude-code|codex|opencode|github-copilot|factory-droid|
                           cursor|vscode|gemini-cli|windsurf|cline|continue|claude|copilot>
      --force              Overwrite locally modified or unverified Spacefast skill files.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Install or update Spacefast agent skills.

  Install or safely update the Spacefast agent skill bundled with this CLI.

ALIASES
  $ sf skills install

EXAMPLES
  Install or update the Spacefast skill for detected agents.

    $ sf skills

  Install or update the Spacefast skill for Codex.

    $ sf skills --agent codex

  Install the Spacefast skill to every supported agent.

    $ sf skills --agent all
```

## `sf skills remove`

Remove Spacefast agent skills.

```text
USAGE
  $ sf skills remove [--profile <value>] [-y] [--agent
    auto|all|generic|universal|claude-code|codex|opencode|github-copilot|factory-droid|cursor|vscode|gemini-cli|windsurf
    |cline|continue|claude|copilot...] [-p] [--force]

FLAGS
  -p, --project            Remove project-local skills instead of global skills.
      --agent=<option>...  Agent to remove from. Repeat to remove from more than one.
                           <options: auto|all|generic|universal|claude-code|codex|opencode|github-copilot|factory-droid|
                           cursor|vscode|gemini-cli|windsurf|cline|continue|claude|copilot>
      --force              Remove locally modified or unverified Spacefast skill files.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Remove Spacefast agent skills.

  Remove the Spacefast skill while preserving locally modified files unless forced.

ALIASES
  $ sf skills rm
  $ sf skills uninstall

EXAMPLES
  Remove the global Codex installation.

    $ sf skills remove --agent codex

  Remove this project's Claude Code installation.

    $ sf skills remove --project --agent claude-code
```

## `sf skills status`

Check Spacefast skill installation.

```text
USAGE
  $ sf skills status [--profile <value>] [-y] [--agent
    auto|all|generic|universal|claude-code|codex|opencode|github-copilot|factory-droid|cursor|vscode|gemini-cli|windsurf
    |cline|continue|claude|copilot...] [-p]

FLAGS
  -p, --project            Check project-local skills instead of global skill directories.
      --agent=<option>...  Agent to check. `auto` checks detected agents plus .agents/skills.
                           <options: auto|all|generic|universal|claude-code|codex|opencode|github-copilot|factory-droid|
                           cursor|vscode|gemini-cli|windsurf|cline|continue|claude|copilot>

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Check Spacefast skill installation.

  Check installed Spacefast skills against the revision bundled with this CLI.

ALIASES
  $ sf skills doctor

EXAMPLES
  Check all common global skill locations.

    $ sf skills status

  Check the Codex Spacefast skill location.

    $ sf skills doctor --agent codex

  Check this project's Claude Code skill location.

    $ sf skills status --project --agent claude-code
```

## `sf spaces`

Manage spaces.

```text
USAGE
  $ sf spaces [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage spaces.

  Manage Spacefast spaces.
```

## `sf spaces add`

Create an empty space.

```text
USAGE
  $ sf spaces add [--profile <value>] [-y] [-o <value>] [-n
    <value>] [--slug <value>] [--hostname-scope team|global] [--spa auto|true|false] [--mode website|files]
    [--save-state] [--show-secret]

SPACE METADATA FLAGS
  -n, --name=<value>             Set the space title.
      --hostname-scope=<option>  Managed hostname scope for newly created spaces.
                                 <options: team|global>
      --mode=<option>            Space serving mode.
                                 <options: website|files>
      --slug=<value>             Set the space slug when creating a new space.
      --spa=<option>             [default: auto] Control single-page app fallback detection.
                                 <options: auto|true|false>

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXECUTION FLAGS
  --[no-]save-state  Write the created space to .spacefast/state.json.

OUTPUT FLAGS
  --show-secret  Print private Open and Claim URLs. Secrets are hidden from JSON and non-interactive output by default.

DESCRIPTION
  Create an empty space.

  Create an empty space and save it to .spacefast/state.json.

ALIASES
  $ sf spaces create

EXAMPLES
  Create an empty space.

    $ sf spaces add --name docs
```

## `sf spaces claim`

Claim an anonymous space.

```text
USAGE
  $ sf spaces claim [--profile <value>] [-y] [--claim-token
    <value>] [--space <value>] [-o <value>] [--wait]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXECUTION FLAGS
  --[no-]wait  Wait until queued publish work finishes before returning.

DESCRIPTION
  Claim an anonymous space.

  Move a saved anonymous space into your account. If needed, the CLI starts browser login first.

EXAMPLES
  Claim the space saved in the current directory.

    $ sf spaces claim

  Claim a space into a specific team.

    $ sf spaces claim --space spc_xxx --claim-token claim_xxx --team my-team
```

## `sf spaces download`

Download a space version.

```text
USAGE
  $ sf spaces download [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--output <value>] [--overwrite] [-j <value>] [-v <value>]

FLAGS
  -j, --concurrency=<value>  [default: 10] Number of files to download at the same time.
  -v, --version=<value>      [default: latest] Version ID, version ref, number, or "latest".
      --output=<value>       [default: .] Directory to write downloaded files into.
      --overwrite            Overwrite files that already exist in the output directory.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Download a space version.

  Download files from a space version. Defaults to the latest version.

EXAMPLES
  Download the latest version's files into ./out.

    $ sf spaces download --space docs --output ./out

  Download version v3, overwriting existing files.

    $ sf spaces download --space docs --version v3 --overwrite
```

## `sf spaces duplicate`

Duplicate a space with a download-and-publish copy.

```text
USAGE
  $ sf spaces duplicate [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--slug <value>] [--title <value>] [--version <value>] [--wait]
    [--wait-timeout <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DUPLICATE TARGET FLAGS
  --slug=<value>   Slug for the duplicate space.
  --title=<value>  Title for the duplicate space.

DUPLICATE SOURCE FLAGS
  --version=<value>  Version to duplicate. Defaults to the live version.

EXECUTION FLAGS
  --[no-]wait             Wait until queued publish work finishes before returning.
  --wait-timeout=<value>  [default: 900] Seconds to wait for the duplicate to become ready.

DESCRIPTION
  Duplicate a space with a download-and-publish copy.

  Download an existing space version and publish those files as a new space.

EXAMPLES
  Duplicate the docs space into a new docs-copy space.

    $ sf spaces duplicate --space docs --slug docs-copy
```

## `sf spaces export`

Export a space archive.

```text
USAGE
  $ sf spaces export [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--version <value>] [--output <value>] [--overwrite] [--wait]
    [--wait-timeout <value>]

FLAGS
  --output=<value>   Download the ready archive to this path (implies --wait).
  --overwrite        Overwrite an existing archive file when --output is set.
  --version=<value>  Export a single version instead of the default set.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXECUTION FLAGS
  --[no-]wait             Wait until queued work finishes before returning.
  --wait-timeout=<value>  Seconds to wait for queued work to finish before giving up.

DESCRIPTION
  Export a space archive.

  Create a portable export archive of the selected Space. With --wait it returns the download link; add --output to
  download the zip.

EXAMPLES
  $ sf spaces export --wait --output ./site-export.zip

  $ sf spaces export --version ver_123 --wait
```

## `sf spaces get`

Show a space.

```text
USAGE
  $ sf spaces get [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Show a space.

  Resolve a space from --space or .spacefast/state.json and print its live runtime state, current version, and runtime
  details.

EXAMPLES
  Show the space linked to the current directory.

    $ sf spaces get

  Show a specific space by slug, ID, or URL.

    $ sf spaces get --space docs
```

## `sf spaces import [ARCHIVE]`

Import a space archive.

```text
USAGE
  $ sf spaces import [ARCHIVE] [--profile <value>] [-y]
    [-o <value>] [--space <value>] [--from-export <value>] [--publish] [--wait] [--wait-timeout
    <value>]

ARGUMENTS
  [ARCHIVE]  Path to a Spacefast export zip archive.

FLAGS
  --from-export=<value>  Import from an existing export ID instead of uploading an archive.
  --publish              Publish the imported version once it is ready.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXECUTION FLAGS
  --[no-]wait             Wait until queued publish work finishes before returning.
  --wait-timeout=<value>  Seconds to wait for queued work to finish before giving up.

DESCRIPTION
  Import a space archive.

  Import an export archive into the selected space as draft versions. Pass --publish to promote the imported version
  when it is ready.

EXAMPLES
  $ sf spaces import ./site-export.zip

  $ sf spaces import --from-export exp_123 --publish
```

## `sf spaces ls`

List spaces.

```text
USAGE
  $ sf spaces ls [--profile <value>] [-y] [-o <value>] [--limit
    <value>]

FLAGS
  --limit=<value>  Maximum number of spaces to return (default 50, max 100).

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List spaces.

  List spaces accessible to the current login, optionally filtered by team.

ALIASES
  $ sf spaces list

EXAMPLES
  List spaces accessible to the current login.

    $ sf spaces ls

  List spaces for a specific team.

    $ sf spaces ls --team acme
```

## `sf spaces rm`

Delete a space.

```text
USAGE
  $ sf spaces rm [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--wait]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXECUTION FLAGS
  --[no-]wait  Wait until queued publish work finishes before returning.

DESCRIPTION
  Delete a space.

  Queue deletion for the selected space.

ALIASES
  $ sf spaces remove
  $ sf spaces delete

EXAMPLES
  Delete a space after confirmation.

    $ sf spaces rm --space docs

  Delete without the confirmation prompt.

    $ sf spaces rm --space docs --yes
```

## `sf spaces rotate-claim`

Rotate anonymous claim authority.

```text
USAGE
  $ sf spaces rotate-claim [--profile <value>] [-y] [--claim-token
    <value>] [--space <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Rotate anonymous claim authority.

  Replace an anonymous Space's claim token and browser claim link without changing recipient Links.

EXAMPLES
  Rotate the anonymous Space saved in the current directory.

    $ sf spaces rotate-claim
```

## `sf spaces transfer TEAM`

Transfer a space to another team.

```text
USAGE
  $ sf spaces transfer TEAM [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

ARGUMENTS
  TEAM  Target team slug, ID, or name.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Transfer a space to another team.

  Request a transfer of the selected space to another team. The transfer applies after a member of the target team
  accepts it.

EXAMPLES
  $ sf spaces transfer acme --space spc_123
```

## `sf spaces update`

Rename or update a space.

```text
USAGE
  $ sf spaces update [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--wait] [--wait-timeout <value>] [--mode website|files] [--spa
    auto|true|false] [--slug <value>] [-n <value>] [--viewer-description <value>] [--viewer-og-image-path <value>]
    [--viewer-title <value>]

SITE METADATA FLAGS
  -n, --name=<value>   Space title.
      --mode=<option>  Serving mode.
                       <options: website|files>
      --spa=<option>   Enable or disable SPA fallback. `auto` leaves the current setting unchanged.
                       <options: auto|true|false>

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

IDENTITY FLAGS
  --slug=<value>  New space slug. Must be sent without other update flags.

VIEWER METADATA FLAGS
  --viewer-description=<value>    Social preview description. Pass null to clear.
  --viewer-og-image-path=<value>  Social preview image path. Pass null to clear.
  --viewer-title=<value>          Viewer page title. Pass null to clear.

EXECUTION FLAGS
  --[no-]wait             Wait until queued publish work finishes before returning.
  --wait-timeout=<value>  Seconds to wait for queued work to finish before giving up.

DESCRIPTION
  Rename or update a space.

  Patch space identity, serving metadata, and generated viewer metadata.

EXAMPLES
  Rename the space and its managed view.fast hostname.

    $ sf spaces update --space docs --slug developers --wait

  Change the space title.

    $ sf spaces update --space docs --name "Developer docs"

  Switch serving mode to files and disable SPA fallback.

    $ sf spaces update --space docs --mode files --spa false
```

## `sf status`

Show CLI status.

```text
USAGE
  $ sf status [--profile <value>] [-y] [--include-claim-url]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

OUTPUT FLAGS
  --include-claim-url  Include a still-pending one-time claim URL.

DESCRIPTION
  Show CLI status.

  Show authenticated user, default team, and the space the current directory is linked to.

EXAMPLES
  Show login, default team, and the linked space.

    $ sf status

  Include a still-pending one-time claim URL.

    $ sf status --include-claim-url
```

## `sf switch [TEAM]`

Switch teams.

```text
USAGE
  $ sf switch [TEAM] [--profile <value>] [-y] [-o <value>]

ARGUMENTS
  [TEAM]  Team slug, ID, or name.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Switch teams.

  Set the default team for future CLI commands.

EXAMPLES
  Set acme as the default team for future commands.

    $ sf switch acme
```

## `sf teams`

Manage teams.

```text
USAGE
  $ sf teams [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage teams.

  Manage teams and members.
```

## `sf teams accept INVITATION`

Accept a team invitation.

```text
USAGE
  $ sf teams accept INVITATION [--profile <value>] [-y]

ARGUMENTS
  INVITATION  Invitation id from the invite link.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Accept a team invitation.

  Accept a team invitation and join the team as the current login.

EXAMPLES
  Accept a team invitation.

    $ sf teams accept inv_123
```

## `sf teams create NAME`

Create a team.

```text
USAGE
  $ sf teams create NAME [--profile <value>] [-y]

ARGUMENTS
  NAME  Display name for the new team.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Create a team.

  Create a new team owned by the current login.

ALIASES
  $ sf teams add

EXAMPLES
  Create a new team.

    $ sf teams create "Acme Inc"
```

## `sf teams defaults [ROOTACCESS]`

Manage future-space defaults.

```text
USAGE
  $ sf teams defaults [ROOTACCESS] [--profile <value>] [-y] [-o
    <value>]

ARGUMENTS
  [ROOTACCESS]  Future Space Grant preset: private, team, or public.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage future-space defaults.

  Show or set the Grant preset materialized for Spaces this team creates in the future.

EXAMPLES
  Show the team's future-space default.

    $ sf teams defaults

  Make future spaces private by default.

    $ sf teams defaults private
```

## `sf teams invitations`

Manage team invitations.

```text
USAGE
  $ sf teams invitations [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage team invitations.

  Manage team invitations.
```

## `sf teams invitations add EMAIL`

Create a team invitation.

```text
USAGE
  $ sf teams invitations add EMAIL [--profile <value>] [-y] [-o <value>]
    [--role owner|admin|member]

ARGUMENTS
  EMAIL  Email address to invite.

FLAGS
  --role=<option>  [default: member] Role to grant when the invitation is accepted.
                   <options: owner|admin|member>

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Create a team invitation.

  Invite a person to a team.

ALIASES
  $ sf teams invitations create

EXAMPLES
  Invite a member to the team.

    $ sf teams invitations add jane@example.com --role member
```

## `sf teams invitations cancel INVITATION`

Cancel a team invitation.

```text
USAGE
  $ sf teams invitations cancel INVITATION [--profile <value>] [-y] [-o
  <value>]

ARGUMENTS
  INVITATION  Invitation id.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Cancel a team invitation.

  Cancel a team invitation.

EXAMPLES
  Cancel a team invitation.

    $ sf teams invitations cancel inv_123
```

## `sf teams invitations ls`

List team invitations.

```text
USAGE
  $ sf teams invitations ls [--profile <value>] [-y] [-o <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List team invitations.

  List pending and historical team invitations.

ALIASES
  $ sf teams invitations list

EXAMPLES
  List team invitations.

    $ sf teams invitations ls
```

## `sf teams invitations resend INVITATION`

Resend a team invitation.

```text
USAGE
  $ sf teams invitations resend INVITATION [--profile <value>] [-y] [-o
  <value>]

ARGUMENTS
  INVITATION  Invitation id.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Resend a team invitation.

  Resend a pending team invitation.

EXAMPLES
  Resend a pending team invitation.

    $ sf teams invitations resend inv_123
```

## `sf teams ls`

List teams.

```text
USAGE
  $ sf teams ls [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List teams.

  List teams available to the current login.

ALIASES
  $ sf teams list

EXAMPLES
  List teams available to the current login.

    $ sf teams ls
```

## `sf teams members`

Manage team members.

```text
USAGE
  $ sf teams members [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage team members.

  Manage team members.
```

## `sf teams members ls`

List team members.

```text
USAGE
  $ sf teams members ls [--profile <value>] [-y] [-o <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List team members.

  List members in a team.

ALIASES
  $ sf teams members list

EXAMPLES
  List members in a team.

    $ sf teams members ls
```

## `sf teams members rm MEMBER`

Remove a team member.

```text
USAGE
  $ sf teams members rm MEMBER [--profile <value>] [-y] [-o <value>]

ARGUMENTS
  MEMBER  Member id or email.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Remove a team member.

  Remove a member from a team.

ALIASES
  $ sf teams members remove
  $ sf teams members delete

EXAMPLES
  Remove a member from a team.

    $ sf teams members rm jane@example.com
```

## `sf teams switch [TEAM]`

Set default team.

```text
USAGE
  $ sf teams switch [TEAM] [--profile <value>] [-y] [-o <value>]

ARGUMENTS
  [TEAM]  Team slug, ID, or name.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Set default team.

  Set the default team for future CLI publishes.

EXAMPLES
  Set acme as the default team.

    $ sf teams switch acme
```

## `sf transfers accept ID`

Accept a space transfer.

```text
USAGE
  $ sf transfers accept ID [--profile <value>] [-y]

ARGUMENTS
  ID  Transfer ID.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Accept a space transfer.

  Accept a pending space transfer as a member of the target team. The space then moves to the new team.

ALIASES
  $ sf transfers confirm

EXAMPLES
  Accept a pending space transfer.

    $ sf transfers accept trf_123
```

## `sf transfers cancel ID`

Cancel a space transfer.

```text
USAGE
  $ sf transfers cancel ID [--profile <value>] [-y]

ARGUMENTS
  ID  Transfer ID.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Cancel a space transfer.

  Cancel a pending space transfer.

EXAMPLES
  Cancel a pending space transfer.

    $ sf transfers cancel trf_123
```

## `sf versions`

Manage versions.

```text
USAGE
  $ sf versions [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage versions.

  List, promote, and roll back space versions.
```

## `sf versions download`

Download a version archive.

```text
USAGE
  $ sf versions download [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [-v <value>] [--output <value>] [--overwrite] [--wait] [--wait-timeout
    <value>]

FLAGS
  -v, --version=<value>  [default: latest] Version ID, version ref, number, or "latest".
      --output=<value>   Archive file path, or an existing directory to write the archive into.
      --overwrite        Overwrite an existing archive file.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXECUTION FLAGS
  --[no-]wait             Wait until queued publish work finishes before returning.
  --wait-timeout=<value>  Seconds to wait for queued work to finish before giving up.

DESCRIPTION
  Download a version archive.

  Create a scoped export for one version and download the resulting archive.

EXAMPLES
  Download the latest version as an archive.

    $ sf versions download --space docs --output ./archive.tar.gz

  Download version v3, overwriting an existing archive.

    $ sf versions download --space docs --version v3 --overwrite
```

## `sf versions get [VERSION]`

Show a version.

```text
USAGE
  $ sf versions get [VERSION] [--profile <value>] [-y]
    [-o <value>] [--space <value>]

ARGUMENTS
  [VERSION]  Version ID, ref, or number, for example ver_123, v12, or 12.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Show a version.

  Show one version's status, source, Version URL, diagnostics, and failure details.

EXAMPLES
  Inspect version v12 of the linked space.

    $ sf versions get v12

  Print a version of a selected space as JSON.

    $ sf versions get ver_123 --space docs --json
```

## `sf versions ls`

List space versions.

```text
USAGE
  $ sf versions ls [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List space versions.

  List space versions and mark the live and currently deploying entries.

ALIASES
  $ sf versions list
  $ sf deployments ls

EXAMPLES
  List versions for the linked space.

    $ sf versions ls

  List versions for a specific space.

    $ sf versions ls --space docs
```

## `sf versions rm [VERSION]`

Delete a version.

```text
USAGE
  $ sf versions rm [VERSION] [--profile <value>] [-y]
    [-o <value>] [--space <value>]

ARGUMENTS
  [VERSION]  Version ID, ref, or number, for example ver_123, v12, or 12.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Delete a version.

  Delete a version and purge its files. Versions referenced by a channel (live) cannot be deleted; promote another
  version first. The version URL starts serving a tombstone.

ALIASES
  $ sf versions remove
  $ sf versions delete

EXAMPLES
  Delete version v12 of the linked space.

    $ sf versions rm v12

  Delete without a confirmation prompt.

    $ sf versions rm ver_123 --space docs --yes
```

## `sf whoami`

Show the current Spacefast account.

```text
USAGE
  $ sf whoami [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Show the current Spacefast account.

  Verify the active token and print the authenticated account.

EXAMPLES
  Show the authenticated account.

    $ sf whoami

  Print the account as JSON for scripting.

    $ sf whoami --json
```
