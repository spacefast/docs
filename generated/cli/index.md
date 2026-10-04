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
spacefast/0.5.0
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
  --token=<value>        [env: SPACEFAST_TOKEN] API key for non-interactive auth.

GLOBAL FLAGS
  --json  Format output as json.
```

## Commands

- [`sf access`](#sf-access)
- [`sf access logout-all`](#sf-access-logout-all)
- [`sf activity`](#sf-activity)
- [`sf agents init [DIRECTORY]`](#sf-agents-init-directory)
- [`sf analytics`](#sf-analytics)
- [`sf api METHODORPATH [PATH]`](#sf-api-methodorpath-path)
- [`sf api-keys`](#sf-api-keys)
- [`sf api-keys create`](#sf-api-keys-create)
- [`sf api-keys list`](#sf-api-keys-list)
- [`sf api-keys revoke ID`](#sf-api-keys-revoke-id)
- [`sf apply`](#sf-apply)
- [`sf auth`](#sf-auth)
- [`sf auth as NAME`](#sf-auth-as-name)
- [`sf auth reset`](#sf-auth-reset)
- [`sf autocomplete [SHELL]`](#sf-autocomplete-shell)
- [`sf build [DIR]`](#sf-build-dir)
- [`sf builds cancel BUILD`](#sf-builds-cancel-build)
- [`sf builds detect`](#sf-builds-detect)
- [`sf builds get BUILD`](#sf-builds-get-build)
- [`sf builds logs BUILD`](#sf-builds-logs-build)
- [`sf builds ls`](#sf-builds-ls)
- [`sf builds refresh-upload BUILD`](#sf-builds-refresh-upload-build)
- [`sf builds retry BUILD`](#sf-builds-retry-build)
- [`sf channels`](#sf-channels)
- [`sf channels history [NAME]`](#sf-channels-history-name)
- [`sf channels ls`](#sf-channels-ls)
- [`sf channels set NAME`](#sf-channels-set-name)
- [`sf comments`](#sf-comments)
- [`sf comments archive COMMENT`](#sf-comments-archive-comment)
- [`sf comments export`](#sf-comments-export)
- [`sf comments get COMMENT`](#sf-comments-get-comment)
- [`sf comments list`](#sf-comments-list)
- [`sf comments reply COMMENT`](#sf-comments-reply-comment)
- [`sf comments settings`](#sf-comments-settings)
- [`sf comments settings set`](#sf-comments-settings-set)
- [`sf comments unarchive COMMENT`](#sf-comments-unarchive-comment)
- [`sf connectors`](#sf-connectors)
- [`sf connectors add TARGET`](#sf-connectors-add-target)
- [`sf connectors bind ROLE CONNECTION`](#sf-connectors-bind-role-connection)
- [`sf connectors bindings`](#sf-connectors-bindings)
- [`sf connectors connections`](#sf-connectors-connections)
- [`sf connectors connections add CONNECTOR`](#sf-connectors-connections-add-connector)
- [`sf connectors connections edit CONNECTION`](#sf-connectors-connections-edit-connection)
- [`sf connectors connections health CONNECTION`](#sf-connectors-connections-health-connection)
- [`sf connectors connections ls`](#sf-connectors-connections-ls)
- [`sf connectors connections reconnect CONNECTION`](#sf-connectors-connections-reconnect-connection)
- [`sf connectors connections refresh CONNECTION`](#sf-connectors-connections-refresh-connection)
- [`sf connectors connections rm CONNECTION`](#sf-connectors-connections-rm-connection)
- [`sf connectors detect URL`](#sf-connectors-detect-url)
- [`sf connectors ls`](#sf-connectors-ls)
- [`sf connectors policies`](#sf-connectors-policies)
- [`sf connectors policies add PATTERN`](#sf-connectors-policies-add-pattern)
- [`sf connectors policies explain ADDRESS`](#sf-connectors-policies-explain-address)
- [`sf connectors policies ls`](#sf-connectors-policies-ls)
- [`sf connectors policies rm RULE`](#sf-connectors-policies-rm-rule)
- [`sf connectors policies set RULE`](#sf-connectors-policies-set-rule)
- [`sf connectors rm CONNECTOR`](#sf-connectors-rm-connector)
- [`sf connectors run [CODE]`](#sf-connectors-run-code)
- [`sf connectors run get RUN`](#sf-connectors-run-get-run)
- [`sf connectors run list`](#sf-connectors-run-list)
- [`sf connectors run resume RUN`](#sf-connectors-run-resume-run)
- [`sf connectors unbind ROLE`](#sf-connectors-unbind-role)
- [`sf continue`](#sf-continue)
- [`sf crons`](#sf-crons)
- [`sf crons ls`](#sf-crons-ls)
- [`sf crons run TARGET`](#sf-crons-run-target)
- [`sf db [TARGET]`](#sf-db-target)
- [`sf db console [TARGET]`](#sf-db-console-target)
- [`sf db dump [TARGET]`](#sf-db-dump-target)
- [`sf db export [TARGET]`](#sf-db-export-target)
- [`sf db list [TARGET]`](#sf-db-list-target)
- [`sf db migrate [SOURCE]`](#sf-db-migrate-source)
- [`sf design`](#sf-design)
- [`sf design generate`](#sf-design-generate)
- [`sf dev`](#sf-dev)
- [`sf dev run-many`](#sf-dev-run-many)
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
- [`sf domains update DOMAIN`](#sf-domains-update-domain)
- [`sf env`](#sf-env)
- [`sf env export-template [DIR]`](#sf-env-export-template-dir)
- [`sf env import FILE`](#sf-env-import-file)
- [`sf env ls`](#sf-env-ls)
- [`sf env pull [FILE]`](#sf-env-pull-file)
- [`sf env rm NAME`](#sf-env-rm-name)
- [`sf env set NAME [VALUE]`](#sf-env-set-name-value)
- [`sf feedback`](#sf-feedback)
- [`sf fetch [PATH]`](#sf-fetch-path)
- [`sf functions`](#sf-functions)
- [`sf git`](#sf-git)
- [`sf git build`](#sf-git-build)
- [`sf git connect`](#sf-git-connect)
- [`sf git disconnect`](#sf-git-disconnect)
- [`sf git github`](#sf-git-github)
- [`sf git github installations`](#sf-git-github-installations)
- [`sf git github repos [INSTALLATION]`](#sf-git-github-repos-installation)
- [`sf git ls`](#sf-git-ls)
- [`sf git origin`](#sf-git-origin)
- [`sf git sync`](#sf-git-sync)
- [`sf git update`](#sf-git-update)
- [`sf help [COMMAND]`](#sf-help-command)
- [`sf init [NAME]`](#sf-init-name)
- [`sf inspect [TARGET]`](#sf-inspect-target)
- [`sf link`](#sf-link)
- [`sf login`](#sf-login)
- [`sf logout`](#sf-logout)
- [`sf logs [TARGET] [KIND]`](#sf-logs-target-kind)
- [`sf map`](#sf-map)
- [`sf mcp`](#sf-mcp)
- [`sf mcp install`](#sf-mcp-install)
- [`sf mcp proxy`](#sf-mcp-proxy)
- [`sf open [TARGET]`](#sf-open-target)
- [`sf operations [ID]`](#sf-operations-id)
- [`sf pages`](#sf-pages)
- [`sf pages pull [TARGET]`](#sf-pages-pull-target)
- [`sf pages validate`](#sf-pages-validate)
- [`sf plugins`](#sf-plugins)
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
- [`sf rules`](#sf-rules)
- [`sf rules add`](#sf-rules-add)
- [`sf rules ls`](#sf-rules-ls)
- [`sf rules pause`](#sf-rules-pause)
- [`sf rules resume`](#sf-rules-resume)
- [`sf rules rm NAME`](#sf-rules-rm-name)
- [`sf rules test URL`](#sf-rules-test-url)
- [`sf rules validate`](#sf-rules-validate)
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
- [`sf source archive`](#sf-source-archive)
- [`sf source branch`](#sf-source-branch)
- [`sf source cat PATH`](#sf-source-cat-path)
- [`sf source commits apply`](#sf-source-commits-apply)
- [`sf source commits create`](#sf-source-commits-create)
- [`sf source commits get SHA`](#sf-source-commits-get-sha)
- [`sf source commits ls`](#sf-source-commits-ls)
- [`sf source diff`](#sf-source-diff)
- [`sf source import`](#sf-source-import)
- [`sf source ls`](#sf-source-ls)
- [`sf source merge SOURCE TARGET`](#sf-source-merge-source-target)
- [`sf source search PATTERN`](#sf-source-search-pattern)
- [`sf source tags create NAME`](#sf-source-tags-create-name)
- [`sf source tags ls`](#sf-source-tags-ls)
- [`sf spaces`](#sf-spaces)
- [`sf spaces add`](#sf-spaces-add)
- [`sf spaces archive`](#sf-spaces-archive)
- [`sf spaces check NAME`](#sf-spaces-check-name)
- [`sf spaces claim`](#sf-spaces-claim)
- [`sf spaces download`](#sf-spaces-download)
- [`sf spaces duplicate`](#sf-spaces-duplicate)
- [`sf spaces get`](#sf-spaces-get)
- [`sf spaces ls`](#sf-spaces-ls)
- [`sf spaces restore`](#sf-spaces-restore)
- [`sf spaces rm`](#sf-spaces-rm)
- [`sf spaces rotate-claim`](#sf-spaces-rotate-claim)
- [`sf spaces transfer TEAM`](#sf-spaces-transfer-team)
- [`sf spaces update`](#sf-spaces-update)
- [`sf status`](#sf-status)
- [`sf storage [TARGET]`](#sf-storage-target)
- [`sf storage get ID`](#sf-storage-get-id)
- [`sf storage ls [TARGET]`](#sf-storage-ls-target)
- [`sf storage put FILE`](#sf-storage-put-file)
- [`sf storage rm [ID]`](#sf-storage-rm-id)
- [`sf switch [TEAM]`](#sf-switch-team)
- [`sf tags`](#sf-tags)
- [`sf tags apply FILE`](#sf-tags-apply-file)
- [`sf tags debug`](#sf-tags-debug)
- [`sf tags releases`](#sf-tags-releases)
- [`sf tags releases get ENVIRONMENT`](#sf-tags-releases-get-environment)
- [`sf tags releases rollback ENVIRONMENT REVISION`](#sf-tags-releases-rollback-environment-revision)
- [`sf tags releases set ENVIRONMENT REVISION`](#sf-tags-releases-set-environment-revision)
- [`sf tags revisions`](#sf-tags-revisions)
- [`sf tags revisions abandon REVISION`](#sf-tags-revisions-abandon-revision)
- [`sf tags revisions approve REVISION`](#sf-tags-revisions-approve-revision)
- [`sf tags revisions create`](#sf-tags-revisions-create)
- [`sf tags revisions diff REVISION`](#sf-tags-revisions-diff-revision)
- [`sf tags revisions submit REVISION`](#sf-tags-revisions-submit-revision)
- [`sf tags revisions validate REVISION`](#sf-tags-revisions-validate-revision)
- [`sf tags templates`](#sf-tags-templates)
- [`sf teams`](#sf-teams)
- [`sf teams accept INVITATION`](#sf-teams-accept-invitation)
- [`sf teams create NAME`](#sf-teams-create-name)
- [`sf teams defaults [ROOTACCESS]`](#sf-teams-defaults-rootaccess)
- [`sf teams invitations`](#sf-teams-invitations)
- [`sf teams invitations add EMAILS`](#sf-teams-invitations-add-emails)
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
- [`sf unlink`](#sf-unlink)
- [`sf users`](#sf-users)
- [`sf users delete USER`](#sf-users-delete-user)
- [`sf users get USER`](#sf-users-get-user)
- [`sf users ls`](#sf-users-ls)
- [`sf users reactivate USER`](#sf-users-reactivate-user)
- [`sf users revoke USER`](#sf-users-revoke-user)
- [`sf users sessions USER`](#sf-users-sessions-user)
- [`sf users settings`](#sf-users-settings)
- [`sf users suspend USER`](#sf-users-suspend-user)
- [`sf versions`](#sf-versions)
- [`sf versions get [VERSION]`](#sf-versions-get-version)
- [`sf versions ls`](#sf-versions-ls)
- [`sf versions rm [VERSION]`](#sf-versions-rm-version)
- [`sf whoami`](#sf-whoami)
- [`sf wp`](#sf-wp)
- [`sf zero`](#sf-zero)
- [`sf zero abilities`](#sf-zero-abilities)
- [`sf zero call ABILITY`](#sf-zero-call-ability)
- [`sf zero import SOURCE DIRECTORY`](#sf-zero-import-source-directory)
- [`sf zero queries`](#sf-zero-queries)
- [`sf zero types`](#sf-zero-types)

## `sf access`

Revoke visitor sessions.

```text
USAGE
  $ sf access [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Revoke visitor sessions.

  Revoke active visitor sessions. Use `sf share` to manage who can open a space.

EXAMPLES
  Revoke visitor sessions.

    $ sf access
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
      --json             Format output as json.
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Show activity events.

  Read the activity feed for the selected space, or pass --all for every event visible to your account.

EXAMPLES
  $ sf activity

  $ sf activity --code version.promoted

  $ sf activity --all --since 2026-06-01T00:00:00Z
```

## `sf agents init [DIRECTORY]`

Write Spacefast agent instructions.

```text
USAGE
  $ sf agents init [DIRECTORY] [--profile <value>] [-y] [--agent
    generic|claude-code]

ARGUMENTS
  [DIRECTORY]  Directory that will contain AGENTS.md and CLAUDE.md. Defaults to the current directory.

FLAGS
  --agent=<option>  [default: generic] Instruction-file target.
                    <options: generic|claude-code>

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Write Spacefast agent instructions.

  Create or update Spacefast agent instructions in a directory. Pass the project root that the coding agent uses.

EXAMPLES
  Insert or refresh the Spacefast block in the current directory.

    $ sf agents init

  Add the instructions at the Claude Code project root for its next session.

    $ sf agents init /path/to/project --agent claude-code
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
      --json             Format output as json.
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Call the Spacefast API directly.

  Send a signed request to the public API using the resolved profile credentials. JSON envelopes print verbatim;
  non-JSON responses need --output or --raw-stdout.

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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage API keys.

  Manage API keys.

EXAMPLES
  Manage API keys.

    $ sf api-keys
```

## `sf api-keys create`

Create an API key.

```text
USAGE
  $ sf api-keys create [--profile <value>] [-y] [-n <value>] [--preset
    ci_deploy|space_publisher|space_admin|domain_manager|team_admin|billing_viewer|partner_admin]

FLAGS
  -n, --name=<value>     Human-readable API key name.
      --preset=<option>  [default: space_publisher] Access preset for the new API key.
                         <options:
                         ci_deploy|space_publisher|space_admin|domain_manager|team_admin|billing_viewer|partner_admin>

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Create an API key.

  Create an API key. A device login opens browser approval before the CLI prints the one-time secret.

ALIASES
  $ sf api-keys add

EXAMPLES
  Create an API key and print its one-time secret.

    $ sf api-keys create --name ci

  Create a key with a specific access preset.

    $ sf api-keys create --name ci --preset ci_deploy
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List API keys.

  List API keys for the selected team.

ALIASES
  $ sf api-keys ls

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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Revoke an API key.

  Revoke an API key.

ALIASES
  $ sf api-keys delete
  $ sf api-keys remove
  $ sf api-keys rm

EXAMPLES
  Revoke an API key by ID.

    $ sf api-keys revoke key_123
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXECUTION FLAGS
  --[no-]wait             Wait until queued work finishes before returning.
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Authenticate the CLI.

  Authenticate the CLI with Spacefast.

EXAMPLES
  $ sf auth login
```

## `sf auth as NAME`

Set the local dev guest identity.

```text
USAGE
  $ sf auth as NAME [--profile <value>] [-y] [--dir <value>]

ARGUMENTS
  NAME  Local guest name.

FLAGS
  --dir=<value>  [default: .] Local Zero project directory.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXAMPLES
  Set the local dev guest identity.

    $ sf auth as <name>
```

## `sf auth reset`

Clear the local dev guest identity.

```text
USAGE
  $ sf auth reset [--profile <value>] [-y] [--dir <value>]

FLAGS
  --dir=<value>  [default: .] Local Zero project directory.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXAMPLES
  Clear the local dev guest identity.

    $ sf auth reset
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

## `sf build [DIR]`

Build and pack project output.

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
      --json             Format output as json.
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
  Build and pack project output.

  Detect build settings, run the build, and pack its output. A Zero project with no framework build compiles its capsule
  into the publish directory instead.

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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Cancel a build.

  Cancel a build. Idempotent: a build already in a terminal state is returned unchanged.

EXAMPLES
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
      --json             Format output as json.
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
      --json             Format output as json.
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
      --json             Format output as json.
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
      --json             Format output as json.
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

## `sf builds refresh-upload BUILD`

Refresh source archive upload.

```text
USAGE
  $ sf builds refresh-upload BUILD [--profile <value>] [-y]

ARGUMENTS
  BUILD  Build ID (bld_...) waiting for source archive upload.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Refresh source archive upload.

  Refresh the upload instruction for a build waiting on its source archive.

EXAMPLES
  Refresh the source archive upload instruction for a build.

    $ sf builds refresh-upload bld_123
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Retry a terminal build.

  Retry a terminal build with the same input, settings, and target.

EXAMPLES
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage channels.

  List channels, set how each promotes, and inspect promotion history.

EXAMPLES
  Manage channels.

    $ sf channels
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Show channel history.

  Show what this channel has gone live with, newest first.

EXAMPLES
  Show promotion history for the live channel.

    $ sf channels history --space docs

  Name the channel explicitly; `live` is the only one today.

    $ sf channels history live --space docs
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
      --json             Format output as json.
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

## `sf channels set NAME`

Set a channel's promotion policy.

```text
USAGE
  $ sf channels set NAME --promotion auto|manual [--profile <value>] [--token
    <value>] [-y] [-o <value>] [--space <value>]

ARGUMENTS
  NAME  Channel name (live).

FLAGS
  --promotion=<option>  (required) Promotion policy for the channel.
                        <options: auto|manual>

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Set a channel's promotion policy.

  Set a channel's promotion policy. Only `live` exists today, and promoting a version by hand always works — the policy
  only decides what goes live without you asking.

EXAMPLES
  Hold the dashboard's live channel for promote-driven deploys.

    $ sf channels set live --promotion manual --space dashboard

  Go back to publishing straight to live.

    $ sf channels set live --promotion auto

FLAG DESCRIPTIONS
  --promotion=auto|manual  Promotion policy for the channel.

    auto: publishes and green builds go live. manual: hold everything until an explicit promote.
```

## `sf comments`

Manage comments.

```text
USAGE
  $ sf comments

DESCRIPTION
  Manage comments.

  List, export, and update persistent Space comments, and set where Comments run.

EXAMPLES
  Manage comments.

    $ sf comments
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Archive a comment.

  Archive a comment thread.

EXAMPLES
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
      --json             Format output as json.
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Show a comment.

  Show one comment thread.

EXAMPLES
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
      --json             Format output as json.
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Reply to a comment.

  Reply to a comment thread.

EXAMPLES
  $ sf comments reply cmt_123 --body "Fixed in v4."
```

## `sf comments settings`

Show Comments settings.

```text
USAGE
  $ sf comments settings [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Show Comments settings.

  Show where Comments run for a Space and which third-party sites may embed them. Change them with `comments settings
  set`.

EXAMPLES
  Show Comments settings for the linked Space.

    $ sf comments settings
```

## `sf comments settings set`

Change Comments settings.

```text
USAGE
  $ sf comments settings set [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--surface off|previews|everywhere] [--embed-allow <value>...]
    [--embed-remove <value>...]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EMBEDDING FLAGS
  --embed-allow=<value>...   Site allowed to embed this Space's Comments, e.g. https://docs.example.com.
  --embed-remove=<value>...  Site to cut off from embedding this Space's Comments.

COMMENTS FLAGS
  --surface=<option>  Where Comments run: off, previews, or everywhere.
                      <options: off|previews|everywhere>

DESCRIPTION
  Change Comments settings.

  Change where Comments run and which third-party sites may embed them. Allowing a site lets it create anonymous
  commenters in this Space's rooms, so allowlist changes confirm first.

EXAMPLES
  Run Comments on version previews and the live Space.

    $ sf comments settings set --surface everywhere

  Let docs.example.com embed this Space's Comments.

    $ sf comments settings set --embed-allow https://docs.example.com

  Cut docs.example.com off from this Space's Comments.

    $ sf comments settings set --embed-remove https://docs.example.com
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Unarchive a comment.

  Unarchive a comment thread.

EXAMPLES
  $ sf comments unarchive cmt_123
```

## `sf connectors`

Manage connectors.

```text
USAGE
  $ sf connectors [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage connectors.

  Everything about a team's connectors: register tool sources (OpenAPI specs, GraphQL endpoints, remote MCP servers),
  connect accounts, decide policies, and run tools.

EXAMPLES
  Manage connectors.

    $ sf connectors
```

## `sf connectors add TARGET`

Register a connector.

```text
USAGE
  $ sf connectors add TARGET [--profile <value>] [-y] [-o <value>]
    [--slug <value>] [--title <value>] [--description <value>]

ARGUMENTS
  TARGET  Spec, endpoint, or MCP URL to detect, or a catalog slug to add straight from the catalog.

FLAGS
  --description=<value>  Agent-visible note on what this connector reaches.
  --slug=<value>         Connector slug. Defaults to the detected or catalog slug.
  --title=<value>        Display name. Defaults to what the source calls itself.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Register a connector.

  Register a connector. A URL is probed first and registered as whatever the detectors recognize; a catalog slug skips
  the probe and adds the curated row.

EXAMPLES
  Detect what is behind a URL and register it.

    $ sf connectors add https://api.example.com/openapi.json

  Add a catalog row by slug.

    $ sf connectors add linear --slug linear
```

## `sf connectors bind ROLE CONNECTION`

Bind a capsule role to a connection.

```text
USAGE
  $ sf connectors bind ROLE CONNECTION [--profile <value>] [-y]
    [--space <value>] [-o <value>]

ARGUMENTS
  ROLE        Capsule connector role.
  CONNECTION  Connection id.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXAMPLES
  Bind a capsule role to a connection.

    $ sf connectors bind <role> <connection>
```

## `sf connectors bindings`

List a Space's connector roles and bindings.

```text
USAGE
  $ sf connectors bindings [--profile <value>] [-y] [--space <value>] [-o
    <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXAMPLES
  List a Space's connector roles and bindings.

    $ sf connectors bindings
```

## `sf connectors connections`

Manage connections.

```text
USAGE
  $ sf connectors connections [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage connections.

  Connect accounts to a team's connectors and inspect the ones you can already use. Credentials are write-only: they go
  in here and no endpoint hands them back.

EXAMPLES
  Manage connections.

    $ sf connectors connections
```

## `sf connectors connections add CONNECTOR`

Connect an account.

```text
USAGE
  $ sf connectors connections add CONNECTOR [--profile <value>] [-y] [-o <value>]
    [--api-key <value>] [--field <value>...] [--owner team|personal] [--name <value>] [--description <value>]
    [--auth-method <value>]

ARGUMENTS
  CONNECTOR  Connector slug to connect.

FLAGS
  --auth-method=<value>  Which of the connector's auth methods to use, when more than one applies.
  --description=<value>  Agent-visible note on what this connection is for.
  --name=<value>         What to call it. Defaults to the connector's title.
  --owner=<option>       Share it with the team (default), or keep it yours within this team.
                         <options: team|personal>

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

CREDENTIAL FLAGS
  --api-key=<value>   API key for connectors that take one. Never echoed back, in any output mode.
  --field=<value>...  name=value for a connector that asks for several values. Repeat per field.

DESCRIPTION
  Connect an account.

  Connect an account in one call. The answer is one of three: connected, an authorization URL to open in a browser, or
  the fields to collect and pass back. Credentials are sealed on arrival and never returned.

ALIASES
  $ sf connectors connections connect

EXAMPLES
  Connect with an API key the team shares.

    $ sf connectors connections add stripe --api-key $STRIPE_KEY

  Start an OAuth connection that only you can use.

    $ sf connectors connections add linear --owner personal
```

## `sf connectors connections edit CONNECTION`

Edit a connection.

```text
USAGE
  $ sf connectors connections edit CONNECTION [--profile <value>] [-y] [-o
    <value>] [--serving] [--name <value>] [--description <value>]

ARGUMENTS
  CONNECTION  Connection id, for example cxn_abc123.

FLAGS
  --description=<value>  Replacement agent-visible note. Pass an empty string to clear it.
  --name=<value>         Replacement label.
  --[no-]serving         Allow bound sites to act as this team account for every visitor.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Edit a connection.

  Rename a connection, change its agent-visible note, or grant sites access. Credentials are immutable: to rotate one,
  reconnect.

ALIASES
  $ sf connectors connections update

EXAMPLES
  Rename a connection.

    $ sf connectors connections edit cxn_abc123 --name "Stripe (prod)"

  Tell agents what it is for.

    $ sf connectors connections edit cxn_abc123 --description "Billing, production"
```

## `sf connectors connections health CONNECTION`

Probe a connection.

```text
USAGE
  $ sf connectors connections health CONNECTION [--profile <value>] [-y]
  [-o <value>]

ARGUMENTS
  CONNECTION  Connection id, for example cxn_abc123.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Probe a connection.

  Probe a connection against the provider and report what came back. It only reports: an expired token refreshes on its
  own.

EXAMPLES
  Check one connection right now.

    $ sf connectors connections health cxn_abc123
```

## `sf connectors connections ls`

List connections.

```text
USAGE
  $ sf connectors connections ls [--profile <value>] [-y] [-o <value>] [--owner
    team|personal|any] [--connector <value>] [--status pending_authorization|active|degraded|needs_reauth|revoked]
    [--include-revoked] [--limit <value>]

FLAGS
  --connector=<value>  Show only connections of this connector.
  --include-revoked    Include disconnected connections.
  --limit=<value>      Maximum connections to return (default 50).
  --owner=<option>     Whose connections to list. `any` is everything you may use (default).
                       <options: team|personal|any>
  --status=<option>    Show only connections in this state.
                       <options: pending_authorization|active|degraded|needs_reauth|revoked>

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List connections.

  List the connections this credential may use: the team's shared ones plus your own personal ones.

ALIASES
  $ sf connectors connections list

EXAMPLES
  List usable connections.

    $ sf connectors connections ls

  List only your own connections in this team.

    $ sf connectors connections ls --owner personal
```

## `sf connectors connections reconnect CONNECTION`

Reconnect an account.

```text
USAGE
  $ sf connectors connections reconnect CONNECTION [--profile <value>] [-y] [-o
    <value>] [--api-key <value>] [--field <value>...]

ARGUMENTS
  CONNECTION  Connection id, for example cxn_abc123.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

CREDENTIAL FLAGS
  --api-key=<value>   API key for connectors that take one. Never echoed back, in any output mode.
  --field=<value>...  name=value for a connector that asks for several values. Repeat per field.

DESCRIPTION
  Reconnect an account.

  Sign in again, or rotate the credential, on the same connection: its id, label, policies, and Space bindings all
  survive, so nothing pointing at it has to change. The answer is one of the same three as connecting: `connected` (the
  same connection, re-authorized), an authorization URL to open in a browser, or the fields to collect and pass back.

EXAMPLES
  Sign in again after a token expired.

    $ sf connectors connections reconnect cxn_abc123

  Rotate the API key without disturbing anything bound to it.

    $ sf connectors connections reconnect cxn_abc123 --api-key $STRIPE_KEY
```

## `sf connectors connections refresh CONNECTION`

Re-sync a connection's tools.

```text
USAGE
  $ sf connectors connections refresh CONNECTION [--profile <value>] [-y]
  [-o <value>]

ARGUMENTS
  CONNECTION  Connection id, for example cxn_abc123.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Re-sync a connection's tools.

  Re-resolve the tool catalog behind a connection, so tools the provider added or dropped show up. Token refresh happens
  on its own; this is about the tools.

ALIASES
  $ sf connectors connections sync

EXAMPLES
  Pick up the provider's newest tools.

    $ sf connectors connections refresh cxn_abc123
```

## `sf connectors connections rm CONNECTION`

Disconnect a connection.

```text
USAGE
  $ sf connectors connections rm CONNECTION [--profile <value>] [-y] [-o
  <value>]

ARGUMENTS
  CONNECTION  Connection id, for example cxn_abc123.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Disconnect a connection.

  Disconnect a connection: the stored credential is purged, the row tombstones, and anything addressing it stops
  working.

ALIASES
  $ sf connectors connections remove
  $ sf connectors connections disconnect

EXAMPLES
  Disconnect without prompting.

    $ sf connectors connections rm cxn_abc123 --yes
```

## `sf connectors detect URL`

Detect what is behind a URL.

```text
USAGE
  $ sf connectors detect URL [--profile <value>] [-y] [-o <value>]

ARGUMENTS
  URL  Any URL a service published.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Detect what is behind a URL.

  Probe a URL and report the connectors behind it, most confident first. The URL worth registering is often not the one
  you pasted.

EXAMPLES
  See what could be registered from a URL.

    $ sf connectors detect https://api.example.com
```

## `sf connectors ls`

List connectors.

```text
USAGE
  $ sf connectors ls [--profile <value>] [-y] [-o <value>] [--query
    <value>] [--source openapi|graphql|mcp] [--limit <value>]

FLAGS
  --limit=<value>    Maximum connectors to return (default 50).
  --query=<value>    Filter over slug, title, and description.
  --source=<option>  Show only connectors built from this kind of source.
                     <options: openapi|graphql|mcp>

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List connectors.

  List the connectors this team registered, with how many connections you can use on each.

ALIASES
  $ sf connectors list

EXAMPLES
  List the team's connectors.

    $ sf connectors ls

  List only connectors backed by an MCP server.

    $ sf connectors ls --source mcp
```

## `sf connectors policies`

Manage connector policy rules.

```text
USAGE
  $ sf connectors policies [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage connector policy rules.

  Decide what an agent may call. A rule is an address pattern — `*`, `<connector>/*`, `<connectionId>/*`, or
  `<connectionId>/<tool>` — and what happens when it matches. The most specific pattern wins, and team rules are a floor
  personal rules cannot loosen.

EXAMPLES
  Manage connector policy rules.

    $ sf connectors policies
```

## `sf connectors policies add PATTERN`

Add a policy rule.

```text
USAGE
  $ sf connectors policies add PATTERN [--profile <value>] [-y] [-o <value>]
    [--action approve|require_approval|block] [--owner team|personal]

ARGUMENTS
  PATTERN  `*`, `<connector>/*`, `<connectionId>/*`, or `<connectionId>/<tool>`. Quote it — the shell eats a bare `*`.

FLAGS
  --action=<option>  Run the call, park it for a person, or refuse it.
                     <options: approve|require_approval|block>
  --owner=<option>   Apply it to the whole team (default), or only to your own calls in this team.
                     <options: team|personal>

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Add a policy rule.

  Add a rule over an address pattern. Its position comes from the pattern's specificity, so the narrower rule always
  wins. A team rule is a floor: a personal rule may tighten it, never loosen it.

EXAMPLES
  Park everything for a person by default.

    $ sf connectors policies add '*' --action require_approval

  Refuse one tool outright.

    $ sf connectors policies add 'cxn_abc123/charges.create' --action block
```

## `sf connectors policies explain ADDRESS`

Explain what happens for one address.

```text
USAGE
  $ sf connectors policies explain ADDRESS [--profile <value>] [-y] [-o
  <value>]

ARGUMENTS
  ADDRESS  Tool address: `<connectionId>/<tool>`.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Explain what happens for one address.

  Answer what happens if you call one address, and why, without calling it. Reports the effect, the rule that decided
  it, and the reason in a sentence.

EXAMPLES
  Check one tool before an agent hits it.

    $ sf connectors policies explain cxn_abc123/charges.create
```

## `sf connectors policies ls`

List policy rules.

```text
USAGE
  $ sf connectors policies ls [--profile <value>] [-y] [-o <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List policy rules.

  List the rules that decide what an agent may call: the team's, plus your own personal ones. An address nothing matches
  falls through to the connector's own default.

ALIASES
  $ sf connectors policies list

EXAMPLES
  List the rules in force.

    $ sf connectors policies ls
```

## `sf connectors policies rm RULE`

Remove a policy rule.

```text
USAGE
  $ sf connectors policies rm RULE [--profile <value>] [-y] [-o <value>]

ARGUMENTS
  RULE  Rule id, from `sf connectors policies ls`.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Remove a policy rule.

  Remove a rule. Whatever it decided falls through to the next rule that matches, or to the connector's own default — so
  removing a block can open a tool back up.

ALIASES
  $ sf connectors policies remove
  $ sf connectors policies delete

EXAMPLES
  Remove a rule without prompting.

    $ sf connectors policies rm pol_abc123 --yes
```

## `sf connectors policies set RULE`

Change a policy rule's action.

```text
USAGE
  $ sf connectors policies set RULE [--profile <value>] [-y] [-o <value>]
    [--action approve|require_approval|block]

ARGUMENTS
  RULE  Rule id, from `sf connectors policies ls`.

FLAGS
  --action=<option>  Run the call, park it for a person, or refuse it.
                     <options: approve|require_approval|block>

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Change a policy rule's action.

  Change what a rule does. Its pattern and owner are fixed — remove it and add the one you meant.

EXAMPLES
  Turn a parked rule into a refusal.

    $ sf connectors policies set pol_abc123 --action block
```

## `sf connectors rm CONNECTOR`

Remove a connector.

```text
USAGE
  $ sf connectors rm CONNECTOR [--profile <value>] [-y] [-o <value>]

ARGUMENTS
  CONNECTOR  Connector slug.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Remove a connector.

  Remove a connector and its tools. The API refuses while any live connection still uses it — disconnect those first.

ALIASES
  $ sf connectors remove
  $ sf connectors delete

EXAMPLES
  Remove a connector without prompting.

    $ sf connectors rm linear --yes
```

## `sf connectors run [CODE]`

Run a connector tool or a program.

```text
USAGE
  $ sf connectors run [CODE] [--profile <value>] [-y] [-o <value>]
    [--tool <value>] [--args <value>] [--wait <value>] [--idempotency-key <value>] [--deny-unattended]

ARGUMENTS
  [CODE]  A program to run in the sandbox. It may call any tool this credential is granted. Omit it when using --tool.

FLAGS
  --args=<value>  JSON object of tool arguments. Accepts @file or - for stdin.
  --tool=<value>  Tool address: `<connectionId>/<tool>`, or `<connector>/<tool>` when unambiguous.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXECUTION FLAGS
  --deny-unattended          Fail fast instead of parking when a call needs approval and nobody is watching.
  --idempotency-key=<value>  Retry with the same key to get the original run back instead of running it twice.
  --wait=<value>             Seconds to hold the request waiting for a terminal status (default: the server's).

DESCRIPTION
  Run a connector tool or a program.

  Run one connector tool, or a program that calls several. Both are the same run: one id, one status machine, one
  resume. A run that needs approval parks and tells you where to decide it.

EXAMPLES
  Call one tool by address.

    $ sf connectors run --tool cxn_abc123/issues.list --args '{"limit":5}'

  Run a program that calls tools itself.

    $ sf connectors run 'return await tools.linear.issues.list({limit: 5})'
```

## `sf connectors run get RUN`

Read one run.

```text
USAGE
  $ sf connectors run get RUN [--profile <value>] [-y] [-o <value>]

ARGUMENTS
  RUN  Run id, for example cxr_abc123.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Read one run.

  Read one run: its result, the problem document that explains a failure, or the approval it is parked on. This is how a
  `running` answer is polled.

EXAMPLES
  Check where a run got to.

    $ sf connectors run get cxr_abc123
```

## `sf connectors run list`

List runs.

```text
USAGE
  $ sf connectors run list [--profile <value>] [-y] [-o <value>] [--status
    running|awaiting_approval|succeeded|failed|expired] [--connection <value>] [--limit <value>]

FLAGS
  --connection=<value>  Show only runs that touched this connection.
  --limit=<value>       Maximum runs to return (default 50).
  --status=<option>     Show only runs in this state.
                        <options: running|awaiting_approval|succeeded|failed|expired>

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List runs.

  List the team's runs, newest first. `--status awaiting_approval` is the approvals inbox.

ALIASES
  $ sf connectors run ls

EXAMPLES
  List recent runs.

    $ sf connectors run list

  List the runs waiting on a decision.

    $ sf connectors run list --status awaiting_approval
```

## `sf connectors run resume RUN`

Resume a parked run.

```text
USAGE
  $ sf connectors run resume RUN [--profile <value>] [-y] [-o <value>]
    [--accept] [--deny] [--cancel] [--content <value>]

ARGUMENTS
  RUN  Run id, for example cxr_abc123.

FLAGS
  --accept           Approve the parked call.
  --cancel           Abandon the run entirely.
  --content=<value>  JSON object of values the paused call asked for. Accepts @file or - for stdin.
  --deny             Refuse the parked call; the run reports the refusal.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Resume a parked run.

  Decide a run parked on an approval. A run parked for a person refuses a machine decision — omit the action there to
  read back what they decided.

EXAMPLES
  Approve a parked call and let the run finish.

    $ sf connectors run resume cxr_abc123 --accept

  Read back the decision a person already recorded.

    $ sf connectors run resume cxr_abc123
```

## `sf connectors unbind ROLE`

Remove a capsule connector binding.

```text
USAGE
  $ sf connectors unbind ROLE [--profile <value>] [-y] [--space <value>]
    [-o <value>]

ARGUMENTS
  ROLE  Capsule connector role.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXAMPLES
  Remove a capsule connector binding.

    $ sf connectors unbind <role>
```

## `sf continue`

Continue publishing after claim.

```text
USAGE
  $ sf continue [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Continue publishing after claim.

  Exchange a saved space key for a durable space API key once the space is claimed.

EXAMPLES
  Continue publishing to the claimed space saved in this directory.

    $ sf continue
```

## `sf crons`

Manage scheduled jobs.

```text
USAGE
  $ sf crons [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage scheduled jobs.

  Inspect and exercise a space's scheduled jobs.

EXAMPLES
  Manage scheduled jobs.

    $ sf crons
```

## `sf crons ls`

List scheduled jobs.

```text
USAGE
  $ sf crons ls [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List scheduled jobs.

  List the scheduled jobs the live version declares, with the last failure reported for each. Crons are declared in
  sf.jsonc, so publishing is how you change them.

ALIASES
  $ sf crons list

EXAMPLES
  List scheduled jobs for the docs space.

    $ sf crons ls --space docs
```

## `sf crons run TARGET`

Run a scheduled job now.

```text
USAGE
  $ sf crons run TARGET [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--header <value>...]

ARGUMENTS
  TARGET  Cron key or path, as shown by `sf crons ls`.

FLAGS
  --header=<value>...  Request header as 'name: value'. Repeat for multiple headers.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Run a scheduled job now.

  Request the declared path over HTTPS now, without waiting for the schedule. The platform's own cron header cannot be
  sent, so a handler that checks CRON_SECRET needs --header 'authorization: Bearer <secret>'. Exits non-zero when the
  path answers 400 or worse.

EXAMPLES
  Request the path declared for the digest job.

    $ sf crons run /api/digest

  Run a job whose handler checks the shared secret.

    $ sf crons run api-digest --header "authorization: Bearer $CRON_SECRET"
```

## `sf db [TARGET]`

Inspect a space's database.

```text
USAGE
  $ sf db [TARGET] [--profile <value>] [-y]
    [-o <value>] [--space <value>] [--local-url <value>] [--port <value>]

ARGUMENTS
  [TARGET]  Space ID, slug, live URL, or domain. Defaults to the linked space.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

RUNTIME FLAGS
  --local-url=<value>  Use a local `sf dev` server instead of the live version.
  --port=<value>       Local `sf dev` server port; shorthand for --local-url http://127.0.0.1:<port>.

DESCRIPTION
  Inspect a space's database.

  Show the tables, columns, and pending migration plan of a space's database.

EXAMPLES
  Inspect the linked space's database.

    $ sf db

  Inspect space `docs`.

    $ sf db docs

  Inspect the database of a running `sf dev` server.

    $ sf db --port 4173
```

## `sf db console [TARGET]`

Open a database console.

```text
USAGE
  $ sf db console [TARGET] [--profile <value>] [-y]
    [-o <value>] [--space <value>] [--show-secret]

ARGUMENTS
  [TARGET]  Space ID, slug, live URL, or domain. Defaults to the linked space.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

OPEN FLAGS
  --show-secret  Print the single-use console URL instead of opening it.

DESCRIPTION
  Open a database console.

  Open a phpMyAdmin console on the space's database, for anything `sf db` and `sf db dump` cannot answer. The URL grants
  full SQL authority, so it opens in a browser instead of printing.

EXAMPLES
  Open the console in a browser.

    $ sf db console

  Print the single-use console URL instead of opening it.

    $ sf db console --show-secret
```

## `sf db dump [TARGET]`

Dump database rows.

```text
USAGE
  $ sf db dump [TARGET] [--profile <value>] [-y]
    [-o <value>] [--space <value>] [--local-url <value>] [--port <value>] [--table <value>]
    [--limit <value>]

ARGUMENTS
  [TARGET]  Space ID, slug, live URL, or domain. Defaults to the linked space.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

RUNTIME FLAGS
  --limit=<value>      Maximum rows per table (default 25, max 100).
  --local-url=<value>  Use a local `sf dev` server instead of the live version.
  --port=<value>       Local `sf dev` server port; shorthand for --local-url http://127.0.0.1:<port>.
  --table=<value>      Restrict the dump to one table.

DESCRIPTION
  Dump database rows.

  Print rows from a space's database, for debugging and export.

EXAMPLES
  Dump every declared table.

    $ sf db dump

  Dump one table, up to 100 rows.

    $ sf db dump --table todos --limit 100
```

## `sf db export [TARGET]`

Export a complete database backup.

```text
USAGE
  $ sf db export [TARGET] [--profile <value>] [-y]
    [-o <value>] [--space <value>] [--local-url <value>] [--port <value>] [--out <value>]

ARGUMENTS
  [TARGET]  Space ID, slug, live URL, or domain. Defaults to the linked space.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

RUNTIME FLAGS
  --local-url=<value>  Use a local `sf dev` server instead of the live version.
  --port=<value>       Local `sf dev` server port; shorthand for --local-url http://127.0.0.1:<port>.

OUTPUT FLAGS
  --out=<value>  Backup file path (default spacefast-backup-<space>-<timestamp>.json).

DESCRIPTION
  Export a complete database backup.

  Export every declared table to one versioned JSON backup. Rows are read in stable keyset pages and the destination is
  replaced only after the complete export succeeds.

EXAMPLES
  Export the linked space.

    $ sf db export

  Export a selected space to a named file.

    $ sf db export docs --out ./docs-backup.json

  Export a running local Zero capsule.

    $ sf db export --port 4173
```

## `sf db list [TARGET]`

List database tables and columns.

```text
USAGE
  $ sf db list [TARGET] [--profile <value>] [-y]
    [-o <value>] [--space <value>] [--local-url <value>] [--port <value>]

ARGUMENTS
  [TARGET]  Space ID, slug, live URL, or domain. Defaults to the linked space.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

RUNTIME FLAGS
  --local-url=<value>  Use a local `sf dev` server instead of the live version.
  --port=<value>       Local `sf dev` server port; shorthand for --local-url http://127.0.0.1:<port>.

EXAMPLES
  List database tables and columns.

    $ sf db list [target]
```

## `sf db migrate [SOURCE]`

Apply database schema migrations.

```text
USAGE
  $ sf db migrate [SOURCE] [--profile <value>] [-y]
    [-o <value>] [--space <value>] [--previous-artifact <value>] [--drop | --rename]

ARGUMENTS
  [SOURCE]  [default: .] Capsule source directory.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

RUNTIME FLAGS
  --drop                       Allow the planned migration to include explicit drop operations.
  --previous-artifact=<value>  Diff against this artifact or finalize payload instead of the live schema.
  --rename                     Allow the planned migration to include explicit rename operations.

DESCRIPTION
  Apply database schema migrations.

  Apply the live version's schema migrations, and report what this source tree would change on top of them. Zero
  capsules only: a worker declares no schema.

EXAMPLES
  Re-apply the live capsule's migration plan.

    $ sf db migrate

  Allow destructive operations in the plan computed from this source tree.

    $ sf db migrate --drop
```

## `sf design`

Generate design files from DESIGN.md.

```text
USAGE
  $ sf design [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Generate design files from DESIGN.md.

  Generate committed presentation files (theme.json and _layout.html) from an authoring-time DESIGN.md.

EXAMPLES
  Generate design files from DESIGN.md.

    $ sf design
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
      --json             Format output as json.
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
    <value>] [--host <value>] [--allow-network] [--state-backend memory|sqlite] [--watch] [--watch-interval <value>]
    [--dry-run]

FLAGS
  -d, --dir=<value>   [default: .] Project directory.
  -p, --port=<value>  [default: 4173] Preview port.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

RUNTIME FLAGS
  --allow-network           Allow an explicit non-loopback runtime dev-server binding.
  --dry-run                 Print the dev server plan without starting it.
  --host=<value>            [default: 127.0.0.1] Host interface for the local dev server.
  --state-backend=<option>  [default: memory] Local state adapter for a runtime dev server.
                            <options: memory|sqlite>
  --[no-]watch              Poll source files and reload the runtime after changes.
  --watch-interval=<value>  [default: 1000] Source polling interval in milliseconds.

DESCRIPTION
  Start the local dev server.

  Run this project locally. A zero runtime starts the capsule dev server; anything else previews Pages with sample data
  and the publish-time expander.

EXAMPLES
  Start the local dev server.

    $ sf dev
```

## `sf dev run-many`

Run multiple isolated copies of a Zero app.

```text
USAGE
  $ sf dev run-many [--profile <value>] [-y] [--dir <value>]
    [--count <value>] [--base-port <value>] [--dry-run]

FLAGS
  --base-port=<value>  [default: 4173] First instance port.
  --count=<value>      [default: 20] Number of instances.
  --dir=<value>        [default: .] Zero project directory.
  --dry-run            Print the ports without starting servers.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Run multiple isolated copies of a Zero app.

  Start local servers on consecutive ports. Each has its own in-memory database. Source is compiled at startup; restart
  the command to rebuild.

ALIASES
  $ sf run-many

EXAMPLES
  Run multiple isolated copies of a Zero app.

    $ sf dev run-many
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DISCLOSURE FLAGS
  --all   Include every doc, reference tier included.
  --full  Include full-tier docs (everything but advanced reference).

DESCRIPTION
  Search the bundled docs (offline).

  Search the bundled docs offline: guides, CLI, API reference, and recipes. An exact topic slug prints that page.

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
      --json             Format output as json.
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage domains.

  Manage space domains.

EXAMPLES
  Manage domains.

    $ sf domains
```

## `sf domains add HOSTNAME`

Attach a domain.

```text
USAGE
  $ sf domains add HOSTNAME [--profile <value>] [-y]
    [-o <value>] [--space <value>] [--wait] [--wait-timeout <value>] [--role
    standard|primary|redirect] [--redirect-to <value>] [--redirect-status 301|302|307|308] [--primary]

ARGUMENTS
  HOSTNAME  Hostname to attach.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DOMAIN BEHAVIOR FLAGS
  --primary                   Make this domain the space's primary address. Same as `--role primary`.
  --redirect-status=<option>  HTTP status for redirect domains. Requires `--role redirect`. Defaults to 308.
                              <options: 301|302|307|308>
  --redirect-to=<value>       Absolute URL to redirect every visitor to. Requires `--role redirect`. Paths are not
                              accepted.
  --role=<option>             How the domain behaves. `primary` makes it the space's main address.
                              <options: standard|primary|redirect>

EXECUTION FLAGS
  --[no-]wait             Wait until queued work finishes before returning.
  --wait-timeout=<value>  Seconds to wait for queued work to finish before giving up.

DESCRIPTION
  Attach a domain.

  Attach a custom domain directly to a space. An apex or www hostname includes its counterpart.

ALIASES
  $ sf domains create

EXAMPLES
  Attach a domain to a space.

    $ sf domains add example.com --space docs

  Attach a domain and make it the space's primary address.

    $ sf domains add example.com --space docs --role primary

  Attach a domain that redirects the whole host somewhere else.

    $ sf domains add www.example.com --space docs --role redirect --redirect-to example.com
```

## `sf domains check DOMAIN`

Check a domain.

```text
USAGE
  $ sf domains check DOMAIN [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--move] [--wait] [--wait-timeout <value>]

ARGUMENTS
  DOMAIN  Domain ID or hostname.

FLAGS
  --move  Move a domain you control from another Space without TXT verification.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXECUTION FLAGS
  --[no-]wait             Wait until queued work finishes before returning.
  --wait-timeout=<value>  Seconds to wait for queued work to finish before giving up.

DESCRIPTION
  Check a domain.

  Verify domain ownership or check DNS readiness. Ownership verification moves a contested domain to this space.

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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Inspect domain diagnostics.

  Read live DNS and SSL diagnostics for an attached domain.

EXAMPLES
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage domain DNS records.

  Manage DNS records for a domain zone. See `domains dns ls`, `capabilities`, `refresh`, `add`, `update`, `rm`, `batch`,
  and `export`.

EXAMPLES
  Manage domain DNS records.

    $ sf domains dns
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
      --json             Format output as json.
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
      --json             Format output as json.
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Show DNS capabilities.

  Show DNS provider capabilities for a domain.

EXAMPLES
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
      --json             Format output as json.
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
      --json             Format output as json.
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
      --json             Format output as json.
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
      --json             Format output as json.
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
      --json             Format output as json.
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List space domains.

  List domains attached to a space.

ALIASES
  $ sf domains list

EXAMPLES
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
      --json             Format output as json.
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
      --json             Format output as json.
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXECUTION FLAGS
  --[no-]wait  Wait until queued work finishes before returning.

DESCRIPTION
  Remove a domain.

  Remove a custom domain and its automatic apex or www counterpart from a space.

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
    [--interactive] [--limit <value>] [-o <value>]

ARGUMENTS
  [QUERY]  Brand, idea, or full domain to search.

FLAGS
  --interactive    Open the interactive terminal domain search UI.
  --limit=<value>  [default: 20] Number of local suggestions to print when not interactive.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
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

## `sf domains update DOMAIN`

Change which hostname serves.

```text
USAGE
  $ sf domains update DOMAIN --serve-from <value> [--profile <value>]
    [-y] [-o <value>] [--space <value>] [--wait] [--wait-timeout <value>]

ARGUMENTS
  DOMAIN  Domain ID or hostname.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DOMAIN BEHAVIOR FLAGS
  --serve-from=<value>  (required) Which of the domain's two hostnames serves the space. Pass the apex or its `www`
                        twin; the other one answers a 308 to it.

EXECUTION FLAGS
  --[no-]wait             Wait until queued work finishes before returning.
  --wait-timeout=<value>  Seconds to wait for queued work to finish before giving up.

DESCRIPTION
  Change which hostname serves.

  Change which half of an apex/www pair serves the space. The other half redirects to it.

EXAMPLES
  Serve the apex and redirect www to it.

    $ sf domains update www.example.com --space docs --serve-from example.com

  Serve www instead, and wait for the change to settle.

    $ sf domains update example.com --space docs --serve-from www.example.com --wait
```

## `sf env`

Manage env vars.

```text
USAGE
  $ sf env [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage env vars.

  Manage space environment variables.

EXAMPLES
  Manage env vars.

    $ sf env
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
      --json             Format output as json.
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
      --json             Format output as json.
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
      --json             Format output as json.
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Pull variables.

  Pull effective space and shared variables into a local env file (default .env.local). Refuses to overwrite an existing
  file unless --force.

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
      --json             Format output as json.
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

## `sf env set NAME [VALUE]`

Set a space variable.

```text
USAGE
  $ sf env set NAME [VALUE] [--profile <value>] [-y]
    [-o <value>] [--space <value>] [--value-from-stdin] [--[no-]secret] [--production-value <value>]
    [--preview-value <value>] [--branch-value <value>...]

ARGUMENTS
  NAME     Variable name.
  [VALUE]  Variable value. Omit it and pass --value-from-stdin for secrets.

FLAGS
  --[no-]secret       Keep the value write-only. New values default write-only; updates preserve the existing
                      classification.
  --value-from-stdin  Read the value from standard input, keeping it out of your shell history and process list.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

BUILD FLAGS
  --branch-value=<value>...   Value to inject for a branch build, formatted as branch=value. Repeat for multiple
                              branches.
  --preview-value=<value>     Value to inject for preview builds.
  --production-value=<value>  Value to inject for production builds.

DESCRIPTION
  Set a space variable.

  Create or update a space variable. Values are sent to the API and are not printed back. Pipe secrets in with
  --value-from-stdin to keep them out of your shell history.

EXAMPLES
  Set a write-only space variable without putting it in the command line.

    printf %s "$API_TOKEN" | sf env set API_TOKEN --value-from-stdin --space docs

  Explicitly set a readable ordinary value.

    $ sf env set PUBLIC_ORIGIN https://www.example.com --no-secret --space docs
```

## `sf feedback`

Send feedback to Spacefast.

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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Send feedback to Spacefast.

  Send feedback to Spacefast with optional error, request, space, or URL context.

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
  $ sf fetch [PATH] [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--headers] [--output <value>] [--status] [--verify <value>]

ARGUMENTS
  [PATH]  Canonical route to fetch, or a full https URL of a page shared with you. Defaults to /.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

VERIFICATION FLAGS
  --headers         Include response headers, excluding credential-bearing headers.
  --status          Report the HTTP status without requiring a body output file.
  --verify=<value>  Require a successful response serving this exact version ID.

OUTPUT FLAGS
  --output=<value>  File to write the response body into.

DESCRIPTION
  Fetch private content.

  Fetch private Space content through the same central exchange and host-only cookie flow as a browser. A full https URL
  fetches a page someone shared with you personally; log in with `--access agent-personal-pages` first.

EXAMPLES
  Fetch /docs from the linked Space.

    $ sf fetch /docs --output ./docs.html

  Fetch a private page someone shared with you.

    $ sf fetch https://plan.view.fast/q3 --output ./q3.html

  Inspect an authenticated response without writing its body.

    $ sf fetch / --status --headers --json

  Verify that a private route serves an exact published version.

    $ sf fetch / --verify ver_123 --json
```

## `sf functions`

Use Workers with Spacefast bindings.

```text
USAGE
  $ sf functions [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Use Workers with Spacefast bindings.

  Publish a Worker with sf publish. env.CONNECTORS.call(role, tool, args) calls a connector role;
  env.CONNECTORS.tracker.issues.create(args) is the role proxy. The Space must have bindings or its capsule must declare
  roles. When the version includes a capsule, env.ZERO.query(name, ...args) and env.ZERO.mutate(name, ...args) call it.
  Both bindings forward the request's signed Zero identity cookie. ZERO uses the Space's service principal when no
  visitor is signed in.

EXAMPLES
  Use Workers with Spacefast bindings.

    $ sf functions
```

## `sf git`

Manage repository connections.

```text
USAGE
  $ sf git [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage repository connections.

  Manage repository connections and Git push deploys.

EXAMPLES
  Manage repository connections.

    $ sf git
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

MIGRATION FLAGS
  --[no-]allow-unsupported-platform-features  Allow unsupported Vercel or Cloudflare migration features for this build.

EXECUTION FLAGS
  --[no-]auto-finalize    Finalize the remote build automatically after staging the build output.
  --[no-]wait             Wait until queued work finishes before returning.
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
    connected|hosted] [--repository <value>] [--repository-id <value>] [--repository-name <value>] [--installation-id
    <value>] [--credential <value>] [--default-branch <value>] [--production-branch <value>] [--ref <value>] [--config
    <value>] [--auto-deploy-production] [--auto-deploy-previews] [--root-directory <value>] [--install-directory
    <value>] [--install-command <value>] [--build-command <value>] [--ignored-build-command <value>] [--output-directory
    <value>] [--framework-preset <value>] [--platform-preset <value>] [--allow-unsupported-platform-features]
    [--apply-best] [--sync] [--build-now]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
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
  --connection-type=<option>   [default: connected] Repository connection type.
                               <options: connected|hosted>
  --credential=<value>         [env: SPACEFAST_REPOSITORY_CREDENTIAL] Generic Git clone token. Stored encrypted by the
                               API.
  --default-branch=<value>     Repository default branch.
  --installation-id=<value>    [env: SPACEFAST_REPOSITORY_INSTALLATION_ID] GitHub App installation ID. Resolved from
                               your installations when omitted; pass it to pick one when several grant the repository.
  --production-branch=<value>  Branch that publishes to production.
  --provider=<option>          Repository host.
                               <options: github|gitlab|bitbucket|generic>
  --ref=<value>                [env: SPACEFAST_BUILD_REF] Ref, branch, tag, or commit to sync or build after connecting.
  --repository=<value>         Repository full name, for example owner/repo. Defaults to the origin remote.
  --repository-id=<value>      Repository ID from the host. Resolved from GitHub when omitted.
  --repository-name=<value>    Repository name from the host.

DESCRIPTION
  Connect repository.

  Create or replace a repository connection. GitHub connections resolve their installation and repository IDs from your
  GitHub App installations, so --repository owner/repo is enough.

EXAMPLES
  Connect a GitHub repository.

    $ sf git connect --space docs --provider github --repository owner/repo

  Pick the installation when more than one grants the repository.

    $ sf git connect --space docs --provider github --repository owner/repo --installation-id 12345678

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
      --json             Format output as json.
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

## `sf git github`

Manage GitHub App setup.

```text
USAGE
  $ sf git github [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage GitHub App setup.

  Inspect GitHub App installations and repositories.

EXAMPLES
  Manage GitHub App setup.

    $ sf git github
```

## `sf git github installations`

List GitHub installations.

```text
USAGE
  $ sf git github installations [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List GitHub installations.

  List GitHub App installations available to the current user.

EXAMPLES
  List GitHub App installations for the current user.

    $ sf git github installations
```

## `sf git github repos [INSTALLATION]`

List GitHub repositories.

```text
USAGE
  $ sf git github repos [INSTALLATION] [--profile <value>] [-y]
    [-o <value>] [--space <value>]

ARGUMENTS
  [INSTALLATION]  GitHub App installation ID.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List GitHub repositories.

  List repositories available to a GitHub App installation.

EXAMPLES
  List repositories for a GitHub App installation.

    $ sf git github repos 12345678
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
      --json             Format output as json.
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
      --json             Format output as json.
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
      --json             Format output as json.
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
    <value>] [-o <value>] [--space <value>] [--connection-type connected|hosted] [--production-branch <value>]
    [--credential <value>] [--clear-credential] [--auto-deploy-production] [--auto-deploy-previews] [--config <value>]
    [--root-directory <value>] [--install-directory <value>] [--install-command <value>] [--build-command <value>]
    [--ignored-build-command <value>] [--output-directory <value>] [--framework-preset <value>] [--platform-preset
    <value>] [--allow-unsupported-platform-features]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
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
  --connection-type=<option>   [default: connected] Repository connection type.
                               <options: connected|hosted>
  --credential=<value>         [env: SPACEFAST_REPOSITORY_CREDENTIAL] Generic Git clone token. Stored encrypted by the
                               API.
  --production-branch=<value>  Branch that publishes to production.

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

EXAMPLES
  Display help for sf.

    $ sf help [command]
```

## `sf init [NAME]`

Create a Spacefast project.

```text
USAGE
  $ sf init [NAME] [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [-f] [--runtime static|zero|functions] [--template todo|guestbook|contact]
    [--title <value>] [--no-git]

ARGUMENTS
  [NAME]  Directory name for a new project. Omit to initialize the current directory.

EXECUTION FLAGS
  -f, --force  Overwrite existing generated files.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

ZERO FLAGS
  --no-git             Skip initializing git for a Zero starter app.
  --template=<option>  Zero starter template to scaffold.
                       <options: todo|guestbook|contact>
  --title=<value>      Zero starter app title.

PROJECT FLAGS
  --runtime=<option>  [default: static] Project runtime to scaffold.
                      <options: static|zero|functions>

DESCRIPTION
  Create a Spacefast project.

  Create a Spacefast project, in a new directory when given a name and in the current one otherwise. Use --runtime to
  scaffold a Zero capsule or a Functions worker instead of a static config.

EXAMPLES
  Write a starter sf.jsonc in the current directory.

    $ sf init

  Create a new project directory named my-site.

    $ sf init my-site

  Initialize config and link the current directory to space `docs`.

    $ sf init --space docs

  Scaffold a Zero capsule in a new directory.

    $ sf init my-app --runtime zero --template guestbook

  Scaffold a Functions worker in the current directory.

    $ sf init --runtime functions
```

## `sf inspect [TARGET]`

Inspect a space by ID, slug, URL, or domain.

```text
USAGE
  $ sf inspect [TARGET] [--profile <value>] [-y] [-o <value>]

ARGUMENTS
  [TARGET]  Space ID, slug, live URL, or domain. Defaults to the linked space.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Inspect a space by ID, slug, URL, or domain.

  Look up a space by ID, slug, live URL, or attached domain. Prints space details, live version, and runtime state.

EXAMPLES
  Inspect the space linked to the current directory.

    $ sf inspect

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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Link the current directory to a space.

  Resolve an existing space by --space and save it to .spacefast/space.json in the current directory. Use this to bind a
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
  $ sf login [--profile <value>] [-y] [--access
    read|agent|agent-personal-pages] [--handoff] [-o <value>]

FLAGS
  --access=<option>  Access to request for this machine: read or agent or agent-personal-pages. Defaults to agent. You
                     confirm or narrow it in the browser.
                     <options: read|agent|agent-personal-pages>
  --handoff          Redeem a one-use handoff link from the dashboard or the MCP cli_login tool. Read from stdin: pipe
                     it or paste it at the hidden prompt, never as an argument.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Log in to Spacefast.

  Log this machine in through the browser, or save an API key you already have.

ALIASES
  $ sf auth login

EXAMPLES
  Start browser-assisted device login.

    $ sf login

  Store a token for non-interactive use.

    $ sf login --token sfa_...

  Ask for a read-only credential instead of full agent access.

    $ sf login --access read

  Agent access that can also fetch private pages other people shared with you.

    $ sf login --access agent-personal-pages

  Redeem a one-use handoff link from the dashboard or an agent session.

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
      --json             Format output as json.
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
    [-o <value>] [--space <value>] [--limit <value>] [-f] [--hostname <value>] [--remote-addr
    <value>...] [--ja3-hash <value>...] [--method <value>...] [--status <value>...] [--user-agent <value>...] [--asn
    <value>...] [--since <value>] [--until <value>] [--cursor <value>] [--request-id <value>] [--handler <value>]

ARGUMENTS
  [TARGET]  Space ID, slug, live URL, or domain. Defaults to the linked space.
  [KIND]    Log kind: `access` for origin requests, `edge` for edge requests, or `runtime` for application output.
            Defaults to access.

FLAGS
  -f, --follow                  Poll for new log entries every 2 seconds until interrupted (Ctrl-C).
      --asn=<value>...          Edge logs only: autonomous system number. Repeat to include more numbers.
      --cursor=<value>          Continue from the cursor printed by the previous page.
      --handler=<value>         Runtime logs only: lines from one Zero mutation or Functions handler.
      --hostname=<value>        Edge logs only: hostname assigned to the space.
      --ja3-hash=<value>...     Edge logs only: JA3 fingerprint. Repeat to include more fingerprints.
      --limit=<value>           [default: 50] Maximum number of log entries.
      --method=<value>...       Edge logs only: HTTP method. Repeat to include more methods.
      --remote-addr=<value>...  Edge logs only: client IP address. Repeat to include more addresses.
      --request-id=<value>      Runtime logs only: everything logged while serving one request.
      --since=<value>           Start of the log window as an ISO 8601 timestamp.
      --status=<value>...       Edge logs only: HTTP status code. Repeat to include more codes.
      --until=<value>           End of the log window as an ISO 8601 timestamp.
      --user-agent=<value>...   Edge logs only: exact User-Agent value. Repeat to include more values.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Read a space's request and handler logs.

  Read a space's logs. Use `access` for origin requests, `edge` for edge requests, or `runtime` for application output.
  Logs need time to reach the index. Pass a target to read any space without --space.

EXAMPLES
  Recent requests for the linked space.

    $ sf logs

  Read recent edge requests for the linked space.

    $ sf logs edge

  Keep pulling what your handlers log as it lands.

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

## `sf map`

Print the machine-readable command map.

```text
USAGE
  $ sf map [--profile <value>] [-y] [--paths]

FLAGS
  --paths  Print only canonical command invocations.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Print the machine-readable command map.

  List the flat CLI command surface for agents and other programmatic callers.

EXAMPLES
  Return canonical commands, aliases, and invocations as JSON.

    $ sf map --json

  Print one canonical command invocation per line.

    $ sf map --paths
```

## `sf mcp`

Run the Spacefast MCP server.

```text
USAGE
  $ sf mcp [--profile <value>] [--workspace-root <value>]

FLAGS
  --api-url=<value>         [env: SPACEFAST_API_URL] Spacefast API base URL for MCP tool calls.
  --token=<value>           [env: SPACEFAST_TOKEN] Spacefast API token for MCP tool calls.
  --workspace-root=<value>  [env: SPACEFAST_MCP_WORKSPACE_ROOT] Root allowed for On-Device MCP path publishing.

GLOBAL FLAGS
  --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Run the Spacefast MCP server.

  Run the Spacefast On-Device MCP server over stdio for MCP clients.

EXAMPLES
  $ sf mcp
```

## `sf mcp install`

Install MCP client config.

```text
USAGE
  $ sf mcp install [--profile <value>] [-y] [--agent
    auto|all|generic|claude-code|claude-app|claude-desktop|cursor|codex|chatgpt|vscode|github-copilot|devin-desktop|devi
    n-cloud|zed|gemini-cli|opencode|amp|warp|factory-droid|cline|continue|raycast|poke|pi|indent|hermes|openclaw|app.dev
    in.ai|chatgpt-work|claude|claude-code-cli|claude.ai|clawhub|copilot|devin|droid|earendil|factory|gemini|pi.dev|winds
    urf...] [--local | --remote | --oauth]

FLAGS
  --agent=<option>...  Agent/client to configure. Repeat to configure more than one.
                       <options: auto|all|generic|claude-code|claude-app|claude-desktop|cursor|codex|chatgpt|vscode|gith
                       ub-copilot|devin-desktop|devin-cloud|zed|gemini-cli|opencode|amp|warp|factory-droid|cline|continu
                       e|raycast|poke|pi|indent|hermes|openclaw|app.devin.ai|chatgpt-work|claude|claude-code-cli|claude.
                       ai|clawhub|copilot|devin|droid|earendil|factory|gemini|pi.dev|windsurf>
  --local              Use checkout-aware local stdio MCP instead of the hosted proxy.
  --oauth              With --remote, connect directly and let the editor handle OAuth.
  --remote             Use hosted MCP through `sf mcp proxy` and the current CLI login.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Install MCP client config.

  Install Spacefast MCP config into detected or selected coding agents.

EXAMPLES
  Install hosted MCP through the signed-in Spacefast proxy.

    $ sf mcp install --agent claude-code

  Install direct hosted MCP with editor-managed OAuth for Cursor.

    $ sf mcp install --agent cursor --remote --oauth
```

## `sf mcp proxy`

Run the authenticated remote MCP proxy.

```text
USAGE
  $ sf mcp proxy [--profile <value>] [-y] [--endpoint <value>]
    [--allow-credential-origin <value>...]

FLAGS
  --allow-credential-origin=<value>...  [env: SPACEFAST_MCP_ALLOW_CREDENTIAL_ORIGIN] Send your Spacefast login to this
                                        MCP origin even though it was not issued for it. Repeatable.
  --endpoint=<value>                    [env: SPACEFAST_MCP_URL] Remote MCP endpoint. HTTPS is required except on
                                        loopback.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Run the authenticated remote MCP proxy.

  Proxy remote Spacefast MCP over stdio using the current CLI login.

EXAMPLES
  Run the authenticated remote MCP proxy.

    $ sf mcp proxy
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
      --json             Format output as json.
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
      --json             Format output as json.
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage Pages templates.

  Pull, validate, and preview Spacefast-authored pages.

EXAMPLES
  Manage Pages templates.

    $ sf pages
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Own a default page template.

  Copy Spacefast's readable default page HTML into your project.

EXAMPLES
  Own a default page template.

    $ sf pages pull [target]
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Validate local Pages templates.

  Run the same structural Pages checks used by publish.

EXAMPLES
  Validate local Pages templates.

    $ sf pages validate
```

## `sf plugins`

Install the Spacefast agent plugin.

```text
USAGE
  $ sf plugins [--profile <value>] [-y] [--agent
    auto|all|generic|claude-code|claude-app|claude-desktop|cursor|codex|chatgpt|vscode|github-copilot|devin-desktop|devi
    n-cloud|zed|gemini-cli|opencode|amp|warp|factory-droid|cline|continue|raycast|poke|pi|indent|hermes|openclaw|app.dev
    in.ai|chatgpt-work|claude|claude-code-cli|claude.ai|clawhub|copilot|devin|droid|earendil|factory|gemini|pi.dev|winds
    urf] [--dry-run]

FLAGS
  --agent=<option>  [default: claude-code] Plugin-capable agent to configure.
                    <options: auto|all|generic|claude-code|claude-app|claude-desktop|cursor|codex|chatgpt|vscode|github-
                    copilot|devin-desktop|devin-cloud|zed|gemini-cli|opencode|amp|warp|factory-droid|cline|continue|rayc
                    ast|poke|pi|indent|hermes|openclaw|app.devin.ai|chatgpt-work|claude|claude-code-cli|claude.ai|clawhu
                    b|copilot|devin|droid|earendil|factory|gemini|pi.dev|windsurf>
  --dry-run         Print the pinned installer command without changing agent configuration.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Install the Spacefast agent plugin.

  Install the Spacefast plugin lane for agents that support plugins.

EXAMPLES
  Install the first-party Spacefast plugin for Cursor.

    $ sf plugins --agent cursor

  Install the Spacefast plugin for Claude Code.

    $ sf plugins --agent claude-code

  Print the pinned installer command without running it.

    $ sf plugins --agent codex --dry-run
```

## `sf profiles`

List provider profiles.

```text
USAGE
  $ sf profiles [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
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
      --json             Format output as json.
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Create or update a provider profile.

  Create or update a named provider profile. Pass --api-url for the provider endpoint and --token to bind a credential
  to it. Pass --token "" to clear a saved key.

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
      --json             Format output as json.
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
    [-o <value>] [--space <value>] [--channel <value>] [--continuation-token <value>] [--wait]
    [--wait-timeout <value>]

ARGUMENTS
  [VERSION]  Version ID, ref, or number to make live, for example ver_123, v12, or 12.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXECUTION FLAGS
  --channel=<value>             [default: live] Channel to point at this version (default "live").
  --continuation-token=<value>  [env: SPACEFAST_CONTINUATION_TOKEN] Resume an approved rollback with its original
                                continuation token.
  --[no-]wait                   Wait until queued work finishes before returning.
  --wait-timeout=<value>        [default: 900] Seconds to wait for the version to become live.

DESCRIPTION
  Promote a version to a channel.

  Promote an existing ready version to a channel (default live). Use `rollback` to roll back to an older version
  instead. If that action required approval, retry with --continuation-token or SPACEFAST_CONTINUATION_TOKEN after
  approval completes.

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
    <value>] [--source-type direct-upload|git] [--access private|team|public] [--mode website|files] [--target
    production|preview] [--dry-run] [--config-only] [--wait] [--wait-timeout <value>] [--stream] [--show-secret]
    [--build] [--remote] [--prebuilt] [--root-directory <value>] [--install-directory <value>] [--install-command
    <value>] [--build-command <value>] [--output-directory <value>] [--env-file <value>...] [--ignored-build-command
    <value>] [--source-include <value>...] [--skip-install] [--skip-build] [--publish-mode additive|snapshot]
    [--immutable-asset-prefix <value>...] [--allow-unsupported-platform-features] [--auto-finalize]

ARGUMENTS
  [DIR]  File, directory, project, or .zip/.tar.gz archive to publish. Defaults to the current directory.

VERSION SOURCE FLAGS
  -m, --message=<value>         [env: SPACEFAST_PUBLISH_MESSAGE] Changelog entry shown in version history. Overrides the
                                detected git commit message.
      --git-branch=<value>      [env: SPACEFAST_GIT_BRANCH] Git branch name to record on the version.
      --git-commit=<value>      [env: SPACEFAST_GIT_COMMIT] Git commit SHA to record on the version.
      --git-ref=<value>         [env: SPACEFAST_GIT_REF] Git ref to record on the version.
      --git-repository=<value>  [env: SPACEFAST_GIT_REPOSITORY] Git repository to record on the version, for example
                                owner/repo.
      --source-type=<option>    [env: SPACEFAST_SOURCE_TYPE] Version source type to record.
                                <options: direct-upload|git>

SPACE METADATA FLAGS
  -n, --name=<value>             Set the space title.
      --access=<option>          Set initial root access when this publish creates a team-owned space.
                                 <options: private|team|public>
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

MIGRATION FLAGS
  --allow-unsupported-platform-features  Publish even when imported platform config includes features Spacefast cannot
                                         convert.

EXECUTION FLAGS
  --[no-]auto-finalize    Finalize a remote build automatically after staging its output.
  --config-only           Publish a config-only version that carries the prior artifact forward without building or
                          uploading content.
  --dry-run               Print the resolved publish plan without uploading files or writing state.
  --[no-]stream           With --json, emit a JSONL publish event stream instead of a single result.
  --target=<option>       Publish to production (live) or create a preview version without changing live traffic or
                          existing Space settings.
                          <options: production|preview>
  --[no-]wait             Wait until the target version is ready and, for production, live before returning.
  --wait-timeout=<value>  [default: 900] Seconds to wait for the version to become ready.

BUILD FLAGS
  --build                          Force build mode for directories. Archives always use remote project detection.
  --build-command=<value>          Build command. Defaults to framework and package script detection.
  --env-file=<value>...            Local dotenv file to load for install/build commands. Repeat for multiple files.
  --ignored-build-command=<value>  For --remote, command that skips the build when it exits 0.
  --install-command=<value>        Install command. Defaults to package-manager detection.
  --install-directory=<value>      Repository subdirectory to run dependency installation from.
  --output-directory=<value>       Build output directory relative to the app root.
  --prebuilt                       Publish a prebuilt directory or archive without installing or building.
  --remote                         Upload source and run the build remotely.
  --root-directory=<value>         Repository subdirectory that contains the app.
  --skip-build                     Skip the build command and publish the selected directory unless --output-directory
                                   is set.
  --skip-install                   Skip dependency installation.
  --source-include=<value>...      Ignored file or directory to include in a remote source archive. Repeat for multiple
                                   paths.

VERSION FLAGS
  --immutable-asset-prefix=<value>...  Path prefix whose files are content-addressed and kept from the previous version,
                                       so a tab loaded before this publish can still fetch its chunks. Snapshot mode
                                       only. Repeat for multiple prefixes.
  --publish-mode=<option>              Replace everything in the space (snapshot, default) or add to what is already
                                       published (additive).
                                       <options: additive|snapshot>

OUTPUT FLAGS
  --show-secret  Print the access URL and claim link in JSON or non-interactive output.

DESCRIPTION
  Publish files or built projects to Spacefast.

  Publish a file, directory, project, or archive to Spacefast. Files and static directories deploy directly; archives
  always use remote detection, which packs static content unchanged and builds detected applications. sf deploy is an
  exact alias. Deploying is publishing: a deployment is a version, and the canonical nouns are version, channel, and
  build.

ALIASES
  $ sf deploy

EXAMPLES
  Publish a file or directory directly.

    $ sf publish ./dist

  Build a detected project, or publish the directory directly if no build exists.

    $ sf publish

  Upload source and run the build remotely.

    $ sf publish --remote

  Publish a file archive, or build a detected project archive remotely.

    $ sf publish ./site.zip

  Publish an unpromoted preview without moving the live channel.

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
      --json             Format output as json.
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
    [-o <value>] [--space <value>] [--channel <value>] [--continuation-token <value>] [--wait]
    [--wait-timeout <value>]

ARGUMENTS
  [VERSION]  Version ID, ref, or number to make live, for example ver_123, v12, or 12.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXECUTION FLAGS
  --channel=<value>             [default: live] Channel to point at this version (default "live").
  --continuation-token=<value>  [env: SPACEFAST_CONTINUATION_TOKEN] Resume an approved rollback with its original
                                continuation token.
  --[no-]wait                   Wait until queued work finishes before returning.
  --wait-timeout=<value>        [default: 900] Seconds to wait for the version to become live.

DESCRIPTION
  Roll back to a previous version.

  Roll live traffic back to an existing ready version. Use `versions ls` to find a version. After approval completes,
  retry the same rollback with --continuation-token or SPACEFAST_CONTINUATION_TOKEN.

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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Routing utilities.

  Inspect routing configuration and compute redirects/headers.

EXAMPLES
  Routing utilities.

    $ sf routing
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Compute routing.

  Resolve the latest version's _redirects and _headers with current variables.

EXAMPLES
  Resolve the latest version's redirects and headers.

    $ sf routing compute --space docs
```

## `sf routing inspect`

Inspect local routing files.

```text
USAGE
  $ sf routing inspect [--profile <value>] [-y] [-r <value>] [--url
    <value>...]

FLAGS
  -r, --routing=<value>  [default: .] Directory containing _redirects, _headers, and sf.jsonc to inspect.
      --url=<value>...   URL or path to match against local routing rules. Repeat for multiple URLs.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Inspect local routing files.

  Compile local _redirects, _headers, and sf.jsonc routing rules and optionally match URLs against the merged rules.

EXAMPLES
  Compile the routing files in the current directory.

    $ sf routing inspect

  Match a path against the compiled local routing rules.

    $ sf routing inspect --routing ./dist --url /old-path
```

## `sf rules`

Manage traffic rules.

```text
USAGE
  $ sf rules [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage traffic rules.

  Inspect, declare, and try out a space's traffic rules: what it blocks, challenges, or serves past the cache.

EXAMPLES
  Manage traffic rules.

    $ sf rules
```

## `sf rules add`

Add a traffic rule.

```text
USAGE
  $ sf rules add --kind firewall|cache-bypass [--profile <value>] [--token
    <value>] [-y] [-o <value>] [--space <value>] [--action block|challenge] [--status <value>]
    [--name <value>] [--description <value>] [--any] [--path <value>...] [--host <value>...] [--method <value>...] [--ip
    <value>...] [--country <value>...] [--asn <value>...] [--user-agent <value>...] [--referer <value>...] [--header
    <value>...] [--cookie <value>...] [--query <value>...] [--extension <value>...] [--ja3 <value>...] [--ja4
    <value>...] [--not <value>...] [--wait]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

RULE FLAGS
  --action=<option>      What a firewall rule does: block answers without reaching the space, challenge asks for proof
                         of a human.
                         <options: block|challenge>
  --any                  Fire when any match field holds. By default all of them have to.
  --description=<value>  What this rule is for.
  --kind=<option>        (required) Which list the rule belongs to.
                         <options: firewall|cache-bypass>
  --name=<value>         Name for this rule, so `sf rules rm` can address it.
  --status=<value>       Status a blocked request gets. Defaults to 403. Blocks only.

MATCH FLAGS
  --asn=<value>...         Client network's ASN. Repeatable, and comma-separated.
  --cookie=<value>...      Cookie condition as name=value. Repeatable; value taken verbatim.
  --country=<value>...     Two-letter country codes, for example US,CA. Repeatable, and comma-separated.
  --extension=<value>...   Path extension without the dot, for example php. Repeatable, and comma-separated.
  --header=<value>...      Header condition as name=value. Repeatable; value taken verbatim.
  --host=<value>...        Request hostname. Repeatable; value taken verbatim.
  --ip=<value>...          Client address, or a CIDR range like 203.0.113.0/24. Repeatable, and comma-separated.
  --ja3=<value>...         TLS JA3 fingerprint. Repeatable, and comma-separated.
  --ja4=<value>...         TLS JA4 fingerprint. Repeatable, and comma-separated.
  --method=<value>...      HTTP method. Repeatable, and comma-separated.
  --not=<value>...         Match the opposite of one field, for example --not country or --not header:x-api-client.
                           Repeatable.
  --path=<value>...        Request path, for example '/wp-login.php*'. Repeatable; value taken verbatim.
  --query=<value>...       Query parameter condition as name=value. Repeatable; value taken verbatim.
  --referer=<value>...     Referer. Repeatable; value taken verbatim.
  --user-agent=<value>...  User agent, for example '*bot*'. Repeatable; value taken verbatim.

EXECUTION FLAGS
  --[no-]wait  Wait until queued work finishes before returning.

DESCRIPTION
  Add a traffic rule.

  Declare a traffic rule in the space's settings. It goes first, so it answers before the rules already there. Rules a
  version's own sf.jsonc declares are changed by publishing, not here.

EXAMPLES
  Ask logins for proof of a human.

    $ sf rules add --kind firewall --action challenge --path '/wp-login.php*'

  Block everything from outside the US and Canada.

    $ sf rules add --kind firewall --action block --country US,CA --not country

  Serve the API fresh instead of from the cache.

    $ sf rules add --kind cache-bypass --path '/api/*'
```

## `sf rules ls`

List traffic rules.

```text
USAGE
  $ sf rules ls [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List traffic rules.

  List the space's traffic rules in the order the edge reads them, with where each one was declared and what the edge
  last said about it.

ALIASES
  $ sf rules list

EXAMPLES
  List traffic rules for the docs space.

    $ sf rules ls --space docs
```

## `sf rules pause`

Pause traffic rules.

```text
USAGE
  $ sf rules pause [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Pause traffic rules.

  Park every traffic rule at the edge. The space then serves as if it declared none. The rules are kept, so `sf rules
  resume` puts them back.

EXAMPLES
  Park the docs space's rules.

    $ sf rules pause --space docs
```

## `sf rules resume`

Resume traffic rules.

```text
USAGE
  $ sf rules resume [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Resume traffic rules.

  Put every parked traffic rule back into the state it was paused from. Safe to run on a space that is not paused.

EXAMPLES
  Put the docs space's rules back.

    $ sf rules resume --space docs
```

## `sf rules rm NAME`

Remove a traffic rule.

```text
USAGE
  $ sf rules rm NAME [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--kind firewall|cache-bypass] [--wait]

ARGUMENTS
  NAME  Name of the rule to remove.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

RULE FLAGS
  --kind=<option>  Which list the rule belongs to.
                   <options: firewall|cache-bypass>

EXECUTION FLAGS
  --[no-]wait  Wait until queued work finishes before returning.

DESCRIPTION
  Remove a traffic rule.

  Remove a traffic rule the space's settings declare. A rule a version's own sf.jsonc declares is removed there and
  published.

ALIASES
  $ sf rules remove
  $ sf rules delete

EXAMPLES
  Remove a firewall rule after confirmation.

    $ sf rules rm block-logins --kind firewall
```

## `sf rules test URL`

Try a request against the traffic rules.

```text
USAGE
  $ sf rules test URL [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--method <value>] [--ip <value>] [--country <value>] [--asn <value>]
    [--user-agent <value>] [--referer <value>] [--ja3 <value>] [--ja4 <value>] [--header <value>...] [--cookie
    <value>...] [--file <value>]

ARGUMENTS
  URL  URL or path to answer, for example /wp-login.php.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

REQUEST FLAGS
  --asn=<value>         Client network's ASN.
  --cookie=<value>...   Cookie as name=value. Repeatable.
  --country=<value>     Two-letter country code.
  --header=<value>...   Header as name=value. Repeatable.
  --ip=<value>          Client address.
  --ja3=<value>         TLS JA3 fingerprint.
  --ja4=<value>         TLS JA4 fingerprint.
  --method=<value>      HTTP method. Defaults to none, which no method condition matches.
  --referer=<value>     Referer.
  --user-agent=<value>  User agent.

RULE FLAGS
  --file=<value>  Answer from this config file instead of the space's live rules.

DESCRIPTION
  Try a request against the traffic rules.

  Answer one request against the space's traffic rules and print the first rule each list matches it with. Evaluated
  here, the way the edge evaluates it, so it costs no request and changes nothing.

EXAMPLES
  See which rule answers a login attempt from Russia.

    $ sf rules test /wp-login.php --country RU

  Answer from a config file that has not been published yet.

    $ sf rules test /api/orders --file sf.jsonc
```

## `sf rules validate`

Check traffic rules before publishing them.

```text
USAGE
  $ sf rules validate [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--file <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

RULE FLAGS
  --file=<value>  Config file to read. Defaults to the sf.jsonc in this directory.

DESCRIPTION
  Check traffic rules before publishing them.

  Check the traffic rules a local config file declares against the rule grammar and the edge, and report every problem
  with the field it is in. Writes nothing.

EXAMPLES
  Check the rules in this directory's sf.jsonc.

    $ sf rules validate

  Check the rules in another config file.

    $ sf rules validate --file build/sf.jsonc
```

## `sf runtime`

Inspect a space's runtime.

```text
USAGE
  $ sf runtime [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Inspect a space's runtime.

  Inspect what a space is serving and what runs it.

EXAMPLES
  Inspect a space's runtime.

    $ sf runtime
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Show what a space is serving.

  Show what a space is serving: its live version, the URL it answers on, and what the live version deployed when it
  ships code. A capsule lists tables, queries, mutations, endpoints, migration count and schema digest; a worker lists
  entry, bundle digest, routes, endpoints and capabilities. All of it comes from version metadata, so it answers while
  the runtime is asleep or moving.

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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Generate setup instructions.

  Generate setup instructions for agents and integrations.

EXAMPLES
  Generate setup instructions.

    $ sf setup
```

## `sf setup agent`

Install Spacefast agent tooling.

```text
USAGE
  $ sf setup agent [--profile <value>] [-y] [--agent
    auto|all|generic|claude-code|claude-app|claude-desktop|cursor|codex|chatgpt|vscode|github-copilot|devin-desktop|devi
    n-cloud|zed|gemini-cli|opencode|amp|warp|factory-droid|cline|continue|raycast|poke|pi|indent|hermes|openclaw|app.dev
    in.ai|chatgpt-work|claude|claude-code-cli|claude.ai|clawhub|copilot|devin|droid|earendil|factory|gemini|pi.dev|winds
    urf...] [-p] [--local | --remote | --oauth] [--skip-mcp] [--force] [--handoff]

FLAGS
  -p, --project            Install skills into this project instead of global agent directories.
  -y, --yes                Skip prompts, auto-detect agents, and accept hosted MCP through `sf mcp proxy`.
      --agent=<option>...  Agent/client to configure. Repeat to configure more than one.
                           <options: auto|all|generic|claude-code|claude-app|claude-desktop|cursor|codex|chatgpt|vscode|
                           github-copilot|devin-desktop|devin-cloud|zed|gemini-cli|opencode|amp|warp|factory-droid|cline
                           |continue|raycast|poke|pi|indent|hermes|openclaw|app.devin.ai|chatgpt-work|claude|claude-code
                           -cli|claude.ai|clawhub|copilot|devin|droid|earendil|factory|gemini|pi.dev|windsurf>
      --force              Overwrite locally modified or unverified Spacefast skill files.
      --handoff            Redeem a one-use handoff link from the dashboard or the MCP cli_login tool before generating
                           setup. The link is read from stdin.
      --local              Use checkout-aware local stdio MCP instead of the hosted proxy.
      --oauth              With --remote, connect directly and let the editor handle OAuth.
      --remote             Use hosted MCP through `sf mcp proxy` and the current CLI login.
      --skip-mcp           Install skills without configuring MCP.
  --json             Format output as json.
  --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Install Spacefast agent tooling.

  Detect agent clients and configure Spacefast skills plus MCP in one idempotent flow.

EXAMPLES
  Configure detected agents with hosted MCP through the CLI login.

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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage Space Grants.

  List every active Grant. Use `sf share grant`, `link`, `password`, `token`, or `identity` to add access.

EXAMPLES
  Manage Space Grants.

    $ sf share
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Explain effective Grant access.

  Explain the exact additive Grants and capabilities matching one route, audience, and target.

EXAMPLES
  Explain effective Grant access.

    $ sf share check
```

## `sf share grant`

Create a Space Grant.

```text
USAGE
  $ sf share grant --to public|team --role viewer|commenter|editor|manager --path <value>... [--api-url
    <value>] [--profile <value>] [-y] [-o <value>] [--space <value>] [--wait]
    [--exclude <value>...] [--target <value>] [--name <value>] [--expires <value>] [--network <value>...] [--country
    <value>...] [--exclude-country <value>...] [--exclude-user-agent <value>...]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

CONSTRAINTS FLAGS
  --country=<value>...             [default: ] Allowed ISO country code. Repeatable.
  --exclude-country=<value>...     [default: ] Blocked ISO country code. Repeatable.
  --exclude-user-agent=<value>...  [default: ] Block user agents containing this text. Repeatable.
  --network=<value>...             [default: ] Allowed IP address or CIDR. Repeatable.

GRANT FLAGS
  --exclude=<value>...  [default: ] Excluded route pattern local to this Grant. Repeatable.
  --expires=<value>     Expire after a duration such as 7d or 30m.
  --name=<value>        Human-readable Grant name.
  --path=<value>...     (required) Included route pattern. Repeat for disjoint paths.
  --role=<option>       (required) Role: viewer, commenter, editor, or manager.
                        <options: viewer|commenter|editor|manager>
  --target=<value>      [default: live] live, all-versions, version:<id>, or branch:<name>.
  --to=<option>         (required) Audience: public or team.
                        <options: public|team>

EXECUTION FLAGS
  --[no-]wait  Wait until queued work finishes before returning.

DESCRIPTION
  Create a Space Grant.

  Create one additive Grant. Credential-backed audiences use `sf share link`, `password`, `token`, or `identity` so
  their proof and Grant are created together.

EXAMPLES
  Let the owning team view the docs subtree.

    $ sf share grant --to team --role viewer --path '/docs/**'

  Publish a review subtree with anonymous Comments.

    $ sf share grant --to public --role commenter --path '/proposal/**' --exclude '/proposal/internal/**'

  Make every immutable Version public.

    $ sf share grant --to public --role viewer --path '/**' --target all-versions
```

## `sf share grant edit ID`

Edit a direct managed Grant.

```text
USAGE
  $ sf share grant edit ID [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--wait] [--name <value>] [--role viewer|commenter|editor|manager]
    [--exclude <value>... --path <value>...] [--target <value>] [--expires <value> | --no-expiry] [--network <value>...
    | --no-network] [--country <value>... | ] [--exclude-country <value>... | ] [--exclude-user-agent <value>... | ]

ARGUMENTS
  ID  Managed Grant id.

FLAGS
  --exclude=<value>...  Excluded route pattern for the replacement path set. Repeatable.
  --expires=<value>     New lifetime from now (e.g. 30m, 24h, 7d).
  --name=<value>        New human-readable Grant name.
  --no-expiry           Remove the Grant expiry.
  --path=<value>...     Replace included route patterns. Repeat for disjoint paths.
  --role=<option>       Replace the role: viewer, commenter, editor, or manager.
                        <options: viewer|commenter|editor|manager>
  --target=<value>      Replace the target: live, all-versions, version:<id>, or branch:<name>.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

CONSTRAINTS FLAGS
  --country=<value>...             Replace allowed ISO country codes. Repeatable.
  --exclude-country=<value>...     Replace blocked ISO country codes. Repeatable.
  --exclude-user-agent=<value>...  Replace blocked user-agent substrings. Repeatable.
  --network=<value>...             Replace allowed IP addresses or CIDRs. Repeatable.
  --no-network                     Remove every network constraint from this Grant.

EXECUTION FLAGS
  --[no-]wait  Wait until queued work finishes before returning.

DESCRIPTION
  Edit a direct managed Grant.

  Replace editable dimensions of a direct managed Grant while preserving its stable id.

EXAMPLES
  Edit a direct managed Grant.

    $ sf share grant edit <id>
```

## `sf share identity`

Manage external identity access.

```text
USAGE
  $ sf share identity [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage external identity access.

  Connect OIDC or a white-label signer, then grant external subjects precise capabilities and paths.

EXAMPLES
  Manage external identity access.

    $ sf share identity
```

## `sf share identity create`

Create an identity connection.

```text
USAGE
  $ sf share identity create --type oidc|signer --name <value> --issuer <value> [--profile
    <value>] [-y] [-o <value>] [--client-id <value>] [--client-secret <value>] [--authorize-url
    <value>] [--key <value>...]

FLAGS
  --authorize-url=<value>  HTTPS URL visitors are sent to for proof. Required with --type signer.
  --client-id=<value>      OIDC client id sent to the provider. Required with --type oidc.
  --client-secret=<value>  OIDC client secret, stored encrypted. Required with --type oidc.
  --issuer=<value>         (required) HTTPS issuer URL. OIDC connections run discovery against it; it namespaces
                           subjects.
  --key=<value>...         [default: ] Signer key in "kid:base64url-public-key" form. Repeat during rotation.
  --name=<value>           (required) Human name shown in the connections list.
  --type=<option>          (required) Kind: `oidc` for an identity provider, `signer` for a portal you run.
                           <options: oidc|signer>

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Create an identity connection.

  Create an OIDC connection or a white-label Ed25519 signer connection for a Team.

EXAMPLES
  Connect a Team to its OIDC provider.

    $ sf share identity create --type oidc --name "Acme SSO" --issuer https://acme.okta.com --client-id 0oa1b2c3 \
      --client-secret "$ACME_CLIENT_SECRET"

  Connect a white-label portal that signs its own visitors in.

    $ sf share identity create --type signer --name "Acme portal" --issuer https://portal.acme.com --authorize-url \
      https://portal.acme.com/spacefast/authorize --key "2026-01:REPLACE_WITH_BASE64URL_PUBLIC_KEY"
```

## `sf share identity grant`

Create an external identity Grant.

```text
USAGE
  $ sf share identity grant --connection <value> --subject <value> --name <value> [--profile
    <value>] [-y] [-o <value>] [--space <value>] [--role
    viewer|commenter|editor|manager] [--path <value>...] [--except <value>...] [--target <value>] [--not-before <value>]
    [--expires <value>] [--max-uses <value>] [--network <value>...] [--country <value>...] [--exclude-country
    <value>...] [--exclude-user-agent <value>...] [--require-verified-email]

FLAGS
  --connection=<value>  (required) Identity connection id (acn_...) that proves this subject.
  --except=<value>...   [default: ] Excluded route pattern local to this Grant. Repeatable.
  --name=<value>        (required) Human name shown in the Grants list. Required: the subject is opaque.
  --path=<value>...     [default: /**] Included route pattern. Repeat for disjoint paths.
  --role=<option>       [default: viewer] Role: viewer, commenter, editor, or manager. Defaults to viewer.
                        <options: viewer|commenter|editor|manager>
  --subject=<value>     (required) Subject to admit, matched against the `sub` the connection proves.
  --target=<value>      [default: live] live, all-versions, version:<id>, or branch:<name>.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
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

EXAMPLES
  Let one proven external subject view the docs subtree.

    $ sf share identity grant --connection acn_123 --subject alex@acme.com --name "Alex (Acme SSO)" --role viewer \
      --path "/docs/**"

  Let a subject comment everywhere except the internal tree.

    $ sf share identity grant --connection acn_123 --subject ops@acme.com --name "Acme ops" --role commenter --path \
      "/**" --except "/internal/**"
```

## `sf share identity ls`

List identity connections.

```text
USAGE
  $ sf share identity ls [--profile <value>] [-y] [-o <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List identity connections.

  List Team OIDC and white-label signer connections.

ALIASES
  $ sf share identity list

EXAMPLES
  List the connections a Team can grant against.

    $ sf share identity ls --team acme
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Revoke an identity connection.

  Revoke an identity connection, its external Grants, and admitted sessions.

EXAMPLES
  Revoke a connection along with everything it admitted.

    $ sf share identity revoke acn_123
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
  --authorize-url=<value>  Replacement HTTPS proof URL. Rejected on an OIDC connection.
  --client-id=<value>      Replacement OIDC client id. Rejected on a signer connection.
  --client-secret=<value>  Replacement OIDC client secret. Rejected on a signer connection.
  --key=<value>...         Complete replacement signer key set in "kid:base64url-public-key" form. Repeat to overlap old
                           and new keys.
  --name=<value>           New human name for the connection.
  --session-ttl=<value>    Admitted session lifetime, for example 30m or 8h.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Update or rotate an identity connection.

  Rotate OIDC secrets or signer keys and update connection settings without changing external Grants.

EXAMPLES
  Rotate an OIDC client secret.

    $ sf share identity update acn_123 --client-secret "$NEW_SECRET"

  Overlap the old and new signer keys for the length of a rotation.

    $ sf share identity update acn_123 --key "2026-01:OLD_PUBLIC_KEY" --key "2026-07:NEW_PUBLIC_KEY"
```

## `sf share link`

Manage Links.

```text
USAGE
  $ sf share link [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage Links.

  Create, list, edit, copy, and revoke named Links. Each Link owns one Grant with paths, exclusions, capabilities, and a
  serving target.

EXAMPLES
  Manage Links.

    $ sf share link
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

LINK FLAGS
  --show-secret  Print the share URL even when output is JSON or non-interactive.

DESCRIPTION
  Copy a Link.

  Print a Link's durable share URL.

EXAMPLES
  Print the Link's share URL.

    $ sf share link copy lnk_123
```

## `sf share link create`

Create a Link.

```text
USAGE
  $ sf share link create --name <value> [--profile <value>] [-y]
    [-o <value>] [--space <value>] [--landing <value>] [--path <value>...] [--exclude
    <value>...] [--role viewer|commenter] [--target <value>] [--not-before <value>] [--expires <value>] [--max-uses
    <value>] [--require-verified-email] [--network <value>...] [--country <value>...] [--exclude-country <value>...]
    [--exclude-user-agent <value>...] [--show-secret]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

CONSTRAINTS FLAGS
  --country=<value>...             [default: ] Allowed ISO country code. Repeatable.
  --exclude-country=<value>...     [default: ] Blocked ISO country code. Repeatable.
  --exclude-user-agent=<value>...  [default: ] Block user agents containing this text. Repeatable.
  --expires=<value>                How long the link lasts (e.g. 30m, 24h, 7d). Omit for no expiry.
  --max-uses=<value>               Maximum successful opens before the Link stops working.
  --network=<value>...             [default: ] Allowed IP address or CIDR. Repeatable.
  --not-before=<value>             Do not admit this Link before this ISO date-time.
  --require-verified-email         Admit only visitors whose session has a verified email.

LINK FLAGS
  --exclude=<value>...  [default: ] Excluded route pattern local to this Link. Repeatable.
  --landing=<value>     [default: /] Clean route opened after exchange.
  --name=<value>        (required) Human name shown in the Links list.
  --path=<value>...     [default: /**] Included route pattern. Repeat for disjoint paths.
  --role=<option>       [default: viewer] Role: viewer or commenter. Defaults to viewer.
                        <options: viewer|commenter>
  --show-secret         Print the share URL even when output is JSON or non-interactive.
  --target=<value>      [default: live] live, all-versions, version:<id>, or branch:<name>.

DESCRIPTION
  Create a Link.

  Create a named Link backed by one Grant. Links can View or Comment on multiple path patterns.

EXAMPLES
  Create a client Link that can comment on two path groups except internal docs.

    $ sf share link create --landing /docs --path "/docs/**" --path "/assets/**" --exclude "/docs/internal/**" \
      --role commenter --name "Client review" --expires 7d
```

## `sf share link edit ID`

Edit Link metadata.

```text
USAGE
  $ sf share link edit ID [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--name <value>] [--landing <value>] [--exclude <value>... --path
    <value>...] [--role viewer|commenter] [--target <value>] [--not-before <value> | --no-not-before] [--expires <value>
    | --no-expiry] [--max-uses <value> | --no-max-uses] [--require-verified-email | --allow-unverified-email] [--network
    <value>... | --no-network] [--country <value>... | ] [--exclude-country <value>... | ] [--exclude-user-agent
    <value>... | ]

ARGUMENTS
  ID  Link id.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
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
  --exclude=<value>...  Excluded route pattern for the replacement path set. Repeatable.
  --landing=<value>     New clean landing path.
  --name=<value>        New Link name.
  --path=<value>...     Replace included route patterns. Repeat for disjoint paths.
  --role=<option>       Replace the role: viewer or commenter.
                        <options: viewer|commenter>
  --target=<value>      Replace the target: live, all-versions, version:<id>, or branch:<name>.

DESCRIPTION
  Edit Link metadata.

  Replace a Link's metadata or Grant dimensions without rotating its stable URL.

EXAMPLES
  Edit Link metadata.

    $ sf share link edit <id>
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
      --json             Format output as json.
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Revoke a Link.

  Revoke a share link. The grant drops from the compiled rule set in the same write, so every outstanding URL stops
  working on the next request.

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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List Space Grants.

  List every active Grant, including config, team, Person, Link, password, machine, and external identity access.

ALIASES
  $ sf share ls

EXAMPLES
  List Space Grants.

    $ sf share list
```

## `sf share password`

Manage password access.

```text
USAGE
  $ sf share password [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage password access.

  Create, list, rotate, and revoke named password Grants. Passwords never live in sf.jsonc.

EXAMPLES
  Manage password access.

    $ sf share password
```

## `sf share password create`

Create password access.

```text
USAGE
  $ sf share password create --name <value> --path <value>... [--profile <value>] [--token
    <value>] [-y] [-o <value>] [--space <value>] [--password <value>] [--password-from-stdin]
    [--role viewer|commenter] [--exclude <value>...] [--target <value>] [--not-before <value>] [--expires <value>]
    [--max-uses <value>] [--network <value>...] [--country <value>...] [--exclude-country <value>...]
    [--exclude-user-agent <value>...] [--require-verified-email]

FLAGS
  --exclude=<value>...   [default: ] Local exclusion pattern.
  --name=<value>         (required) Human-readable password name.
  --password=<value>     [env: SPACEFAST_SHARE_PASSWORD] Password, or set SPACEFAST_SHARE_PASSWORD.
  --password-from-stdin  Read the password from standard input.
  --path=<value>...      (required) Included route pattern.
  --role=<option>        [default: viewer] Role granted to password holders.
                         <options: viewer|commenter>
  --target=<value>       [default: live] Published target selector.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
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

EXAMPLES
  Create password access.

    $ sf share password create --name <name> --path <path>
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List password access.

  List password proof metadata and the Grants they admit.

ALIASES
  $ sf share password list

EXAMPLES
  List password access.

    $ sf share password ls
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Revoke password access.

  Revoke password access and its canonical Grant.

EXAMPLES
  Revoke password access.

    $ sf share password revoke <id>
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Rotate a password.

  Replace a password and immediately fence sessions using the old one.

EXAMPLES
  Rotate a password.

    $ sf share password rotate <id>
```

## `sf share people`

Manage People.

```text
USAGE
  $ sf share people [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage People.

  Invite, list, resend, edit, and remove People. A Person can hold roles on multiple route subtrees.

EXAMPLES
  Manage People.

    $ sf share people
```

## `sf share people edit PERSON`

Edit a Person's scoped roles.

```text
USAGE
  $ sf share people edit PERSON --grant <value>... [--profile <value>]
    [-y] [-o <value>] [--space <value>] [--target <value>]

ARGUMENTS
  PERSON  Person id or email address.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

PEOPLE FLAGS
  --grant=<value>...  (required) Scoped role in <path>=<role> form. Repeat to replace the full grant set.
  --target=<value>    [default: live] live, all-versions, version:<id>, or branch:<name>.

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
    <value>] [-o <value>] [--space <value>] [--role viewer|commenter|editor|manager] [--scope <value>...] [--target
    <value>]

ARGUMENTS
  EMAIL  Email address to invite.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

PEOPLE FLAGS
  --role=<option>     [default: viewer] Role granted on every supplied scope.
                      <options: viewer|commenter|editor|manager>
  --scope=<value>...  [default: /] Canonical route subtree. Repeat for multiple scopes.
  --target=<value>    [default: live] live, all-versions, version:<id>, or branch:<name>.

DESCRIPTION
  Invite a Person.

  Invite one Person without requiring an account. Repeat --scope to grant the same role on multiple route subtrees.

EXAMPLES
  Invite a commenter to two route subtrees.

    $ sf share people invite person@example.com --role commenter --scope /docs --scope /assets

  Invite someone to one immutable version instead of the live space.

    $ sf share people invite client@example.com --role viewer --target version:ver_123
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List People.

  List People and every scoped role they hold.

ALIASES
  $ sf share people list

EXAMPLES
  List People.

    $ sf share people ls
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Remove a Person.

  Remove a Person and all of their scoped grants.

EXAMPLES
  Remove a Person.

    $ sf share people remove <person>
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Resend a Person invitation.

  Replace a pending Person invitation and send a fresh accountless acceptance email.

EXAMPLES
  Resend a Person invitation.

    $ sf share people resend <person>
```

## `sf share request`

Manage access requests.

```text
USAGE
  $ sf share request [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage access requests.

  List, approve, and deny inbox-verified access requests.

EXAMPLES
  Manage access requests.

    $ sf share request
```

## `sf share request approve ID`

Approve an access request.

```text
USAGE
  $ sf share request approve ID [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--role viewer|commenter|editor|manager] [--scope <value>]

ARGUMENTS
  ID  Access request id.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

APPROVE FLAGS
  --role=<option>  Approved role. Defaults to the requested role.
                   <options: viewer|commenter|editor|manager>
  --scope=<value>  Approved route subtree. Defaults to the requested scope.

DESCRIPTION
  Approve an access request.

  Approve an access request into the canonical People list. Override the requested role or route scopes when needed.

EXAMPLES
  Approve an access request.

    $ sf share request approve <id>
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Deny an access request.

  Deny a pending access request.

EXAMPLES
  Deny an access request.

    $ sf share request deny <id>
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List access requests.

  List pending access requests with requested role and route scope.

ALIASES
  $ sf share request list

EXAMPLES
  List access requests.

    $ sf share request ls
```

## `sf share revoke ID`

Revoke a Space Grant.

```text
USAGE
  $ sf share revoke ID [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--wait]

ARGUMENTS
  ID  Grant id (see `sf share list`).

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXECUTION FLAGS
  --[no-]wait  Wait until queued work finishes before returning.

DESCRIPTION
  Revoke a Space Grant.

  Revoke one managed Grant. Change config Grants in sf.jsonc. Credential Grants normally revoke through their credential
  command.

EXAMPLES
  Revoke a Space Grant.

    $ sf share revoke <id>
```

## `sf share token`

Manage machine access.

```text
USAGE
  $ sf share token [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage machine access.

  Manage header-only machine credentials backed by scoped Grants.

EXAMPLES
  Manage machine access.

    $ sf share token
```

## `sf share token create`

Create a machine credential.

```text
USAGE
  $ sf share token create --name <value> --path <value>... [--profile <value>] [--token
    <value>] [-y] [-o <value>] [--space <value>] [--role viewer|commenter|editor|manager]
    [--exclude <value>...] [--target <value>] [--not-before <value>] [--expires <value>] [--max-uses <value>] [--network
    <value>...] [--country <value>...] [--exclude-country <value>...] [--exclude-user-agent <value>...] [--show-secret]

FLAGS
  --exclude=<value>...  [default: ] Local exclusion pattern.
  --name=<value>        (required) Human-readable machine name.
  --path=<value>...     (required) Included route pattern.
  --role=<option>       [default: viewer] Role granted to this machine.
                        <options: viewer|commenter|editor|manager>
  --show-secret         Print the one-time token in JSON or non-interactive output.
  --target=<value>      [default: live] Published target selector.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
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

EXAMPLES
  Create a machine credential.

    $ sf share token create --name <name> --path <path>
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List machine access.

  List machine credential metadata and the Grants they admit.

ALIASES
  $ sf share token list

EXAMPLES
  List machine access.

    $ sf share token ls
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Revoke machine access.

  Revoke a machine credential and its canonical Grant.

EXAMPLES
  Revoke machine access.

    $ sf share token revoke <id>
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Rotate a machine credential.

  Rotate a machine credential, fence the old token, and return the replacement once.

EXAMPLES
  Rotate a machine credential.

    $ sf share token rotate <id>
```

## `sf skills`

Install or update Spacefast agent skills.

```text
USAGE
  $ sf skills [--profile <value>] [-y] [--agent
    auto|all|generic|claude-code|claude-app|claude-desktop|cursor|codex|chatgpt|vscode|github-copilot|devin-desktop|devi
    n-cloud|zed|gemini-cli|opencode|amp|warp|factory-droid|cline|continue|raycast|poke|pi|indent|hermes|openclaw|app.dev
    in.ai|chatgpt-work|claude|claude-code-cli|claude.ai|clawhub|copilot|devin|droid|earendil|factory|gemini|pi.dev|winds
    urf...] [-p] [-l] [--force]

FLAGS
  -l, --list               List bundled skill files without installing.
  -p, --project            Install into this project instead of the agent's global skills directory.
      --agent=<option>...  Agent to install for. `auto` configures detected agents plus .agents/skills.
                           <options: auto|all|generic|claude-code|claude-app|claude-desktop|cursor|codex|chatgpt|vscode|
                           github-copilot|devin-desktop|devin-cloud|zed|gemini-cli|opencode|amp|warp|factory-droid|cline
                           |continue|raycast|poke|pi|indent|hermes|openclaw|app.devin.ai|chatgpt-work|claude|claude-code
                           -cli|claude.ai|clawhub|copilot|devin|droid|earendil|factory|gemini|pi.dev|windsurf>
      --force              Overwrite locally modified or unverified Spacefast skill files.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Install or update Spacefast agent skills.

  Install or update the Spacefast agent skill bundled with this CLI.

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
    auto|all|generic|claude-code|claude-app|claude-desktop|cursor|codex|chatgpt|vscode|github-copilot|devin-desktop|devi
    n-cloud|zed|gemini-cli|opencode|amp|warp|factory-droid|cline|continue|raycast|poke|pi|indent|hermes|openclaw|app.dev
    in.ai|chatgpt-work|claude|claude-code-cli|claude.ai|clawhub|copilot|devin|droid|earendil|factory|gemini|pi.dev|winds
    urf...] [-p] [--force]

FLAGS
  -p, --project            Remove project-local skills instead of global skills.
      --agent=<option>...  Agent to remove from. Repeat to remove from more than one.
                           <options: auto|all|generic|claude-code|claude-app|claude-desktop|cursor|codex|chatgpt|vscode|
                           github-copilot|devin-desktop|devin-cloud|zed|gemini-cli|opencode|amp|warp|factory-droid|cline
                           |continue|raycast|poke|pi|indent|hermes|openclaw|app.devin.ai|chatgpt-work|claude|claude-code
                           -cli|claude.ai|clawhub|copilot|devin|droid|earendil|factory|gemini|pi.dev|windsurf>
      --force              Remove locally modified or unverified Spacefast skill files.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
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
    auto|all|generic|claude-code|claude-app|claude-desktop|cursor|codex|chatgpt|vscode|github-copilot|devin-desktop|devi
    n-cloud|zed|gemini-cli|opencode|amp|warp|factory-droid|cline|continue|raycast|poke|pi|indent|hermes|openclaw|app.dev
    in.ai|chatgpt-work|claude|claude-code-cli|claude.ai|clawhub|copilot|devin|droid|earendil|factory|gemini|pi.dev|winds
    urf...] [-p]

FLAGS
  -p, --project            Check project-local skills instead of global skill directories.
      --agent=<option>...  Agent to check. `auto` checks detected agents plus .agents/skills.
                           <options: auto|all|generic|claude-code|claude-app|claude-desktop|cursor|codex|chatgpt|vscode|
                           github-copilot|devin-desktop|devin-cloud|zed|gemini-cli|opencode|amp|warp|factory-droid|cline
                           |continue|raycast|poke|pi|indent|hermes|openclaw|app.devin.ai|chatgpt-work|claude|claude-code
                           -cli|claude.ai|clawhub|copilot|devin|droid|earendil|factory|gemini|pi.dev|windsurf>

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
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

## `sf source archive`

Download a repository archive.

```text
USAGE
  $ sf source archive [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--connection-type connected|hosted] [--ref <value>] [--output <value>]
    [--overwrite] [--include-glob <value>] [--exclude-glob <value>] [--max-blob-size <value>] [--archive-prefix <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

REPOSITORY FLAGS
  --archive-prefix=<value>    Directory prefix inside the archive.
  --connection-type=<option>  [default: connected] Repository connection type.
                              <options: connected|hosted>
  --exclude-glob=<value>      Glob to exclude from the archive.
  --include-glob=<value>      Glob to include in the archive.
  --max-blob-size=<value>     Maximum blob size to include.
  --output=<value>            Archive file path, or an existing directory to write the archive into.
  --overwrite                 Overwrite an existing archive file.
  --ref=<value>               Branch, tag, commit, or ref to archive.

DESCRIPTION
  Download a repository archive.

  Download a tar.gz archive of a space's source repository.

EXAMPLES
  Download a repository archive for the main ref.

    $ sf source archive --space docs --ref main --output ./repo.tar.gz
```

## `sf source branch`

Manage ephemeral repository branches.

```text
USAGE
  $ sf source branch --branch <value> [--profile <value>] [-y]
    [-o <value>] [--space <value>] [--base-ref <value>] [--base-branch <value>]
    [--connection-type connected|hosted] [--remote] [--delete] [--ttl-seconds <value>] [--read-only-ref <value>...]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

REPOSITORY FLAGS
  --base-branch=<value>       Branch to create the branch from.
  --base-ref=<value>          Commit, tag, or ref to create the branch from.
  --branch=<value>            (required) Ephemeral branch name.
  --connection-type=<option>  Repository connection to use.
                              <options: connected|hosted>
  --delete                    Delete the branch instead of creating it.
  --read-only-ref=<value>...  Ref pattern to protect. Repeat for multiple patterns.
  --remote                    Also return a signed Git remote for the branch.
  --ttl-seconds=<value>       Signed remote TTL in seconds, up to 86400.

DESCRIPTION
  Manage ephemeral repository branches.

  Create or delete an ephemeral repository branch.

EXAMPLES
  Create an ephemeral branch and print a signed Git remote.

    $ sf source branch --branch preview/my-change --remote

  Delete an ephemeral branch.

    $ sf source branch --branch preview/my-change --delete
```

## `sf source cat PATH`

Print a repository file.

```text
USAGE
  $ sf source cat PATH [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--connection-type connected|hosted] [--ref <value>] [--max-bytes <value>]

ARGUMENTS
  PATH  Repository file path to print.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

REPOSITORY FLAGS
  --connection-type=<option>  [default: connected] Repository connection type.
                              <options: connected|hosted>
  --max-bytes=<value>         Maximum bytes to read.
  --ref=<value>               Branch, tag, commit, or ref to inspect.

DESCRIPTION
  Print a repository file.

  Print a bounded text file from a space's source repository.

EXAMPLES
  $ sf source cat README.md --space docs
```

## `sf source commits apply`

Create a repository commit from a diff.

```text
USAGE
  $ sf source commits apply --connection-type connected|hosted --target-branch <value> --message <value> --diff <value>
    [--profile <value>] [-y] [-o <value>]
    [--space <value>] [--expected-head-sha <value>] [--base-branch <value>] [--ephemeral] [--ephemeral-base]
    [--author-name <value>] [--author-email <value>] [--committer-name <value>] [--committer-email <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

REPOSITORY FLAGS
  --author-email=<value>       Commit author email.
  --author-name=<value>        Commit author name.
  --base-branch=<value>        Base branch for the commit.
  --committer-email=<value>    Committer email.
  --committer-name=<value>     Committer name.
  --connection-type=<option>   (required) Repository connection type.
                               <options: connected|hosted>
  --diff=<value>               (required) Path to a unified diff file.
  --ephemeral                  Treat the target branch as ephemeral.
  --ephemeral-base             Treat the base branch as ephemeral.
  --expected-head-sha=<value>  Fail if the target branch no longer points at this SHA.
  --message=<value>            (required) Commit message.
  --target-branch=<value>      (required) Branch to update.

DESCRIPTION
  Create a repository commit from a diff.

  Create a repository commit from a unified diff.

EXAMPLES
  $ sf source commits apply --space docs --connection-type hosted --target-branch main --message "Patch" --diff ./change.patch
```

## `sf source commits create`

Create a repository commit.

```text
USAGE
  $ sf source commits create --connection-type connected|hosted --target-branch <value> --message <value>
    [--profile <value>] [-y] [-o <value>] [--space
    <value>] [--expected-head-sha <value>] [--base-branch <value>] [--ephemeral] [--ephemeral-base] [--author-name
    <value>] [--author-email <value>] [--committer-name <value>] [--committer-email <value>] [--file <value>...]
    [--delete <value>...] [--mode 100644|100755|120000|160000]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

REPOSITORY FLAGS
  --author-email=<value>       Commit author email.
  --author-name=<value>        Commit author name.
  --base-branch=<value>        Base branch for the commit.
  --committer-email=<value>    Committer email.
  --committer-name=<value>     Committer name.
  --connection-type=<option>   (required) Repository connection type.
                               <options: connected|hosted>
  --delete=<value>...          Repository path to delete. Repeat for multiple paths.
  --ephemeral                  Treat the target branch as ephemeral.
  --ephemeral-base             Treat the base branch as ephemeral.
  --expected-head-sha=<value>  Fail if the target branch no longer points at this SHA.
  --file=<value>...            File operation as repository-path=local-path. Repeat for multiple files.
  --message=<value>            (required) Commit message.
  --mode=<option>              Mode for upserted files.
                               <options: 100644|100755|120000|160000>
  --target-branch=<value>      (required) Branch to update.

DESCRIPTION
  Create a repository commit.

  Create a repository commit from explicit file operations.

EXAMPLES
  $ sf source commits create --space docs --connection-type hosted --target-branch main --message "Update" --file index.html=./index.html
```

## `sf source commits get SHA`

Show a repository commit.

```text
USAGE
  $ sf source commits get SHA [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--connection-type connected|hosted]

ARGUMENTS
  SHA  Commit SHA to inspect.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

REPOSITORY FLAGS
  --connection-type=<option>  [default: connected] Repository connection type.
                              <options: connected|hosted>

DESCRIPTION
  Show a repository commit.

  Read commit metadata from a space's source repository.

EXAMPLES
  Read commit metadata for a SHA.

    $ sf source commits get <commit-sha> --space docs
```

## `sf source commits ls`

List repository commits.

```text
USAGE
  $ sf source commits ls [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--connection-type connected|hosted] [--branch <value>] [--path <value>]
    [--cursor <value>] [--limit <value>] [--ephemeral]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

REPOSITORY FLAGS
  --branch=<value>            Branch to list commits from.
  --connection-type=<option>  [default: connected] Repository connection type.
                              <options: connected|hosted>
  --cursor=<value>            Pagination cursor.
  --ephemeral                 Treat the branch as ephemeral.
  --limit=<value>             Maximum commits to return.
  --path=<value>              Repository path to filter commit history.

DESCRIPTION
  List repository commits.

  List commit history from a space's source repository.

EXAMPLES
  List commit history for the main branch.

    $ sf source commits ls --space docs --branch main
```

## `sf source diff`

Show a repository branch diff.

```text
USAGE
  $ sf source diff --branch <value> [--profile <value>] [-y]
    [-o <value>] [--space <value>] [--connection-type connected|hosted] [--base <value>] [--path
    <value>] [--ephemeral] [--ephemeral-base]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

REPOSITORY FLAGS
  --base=<value>              Base branch, tag, commit, or ref.
  --branch=<value>            (required) Branch to diff.
  --connection-type=<option>  [default: connected] Repository connection type.
                              <options: connected|hosted>
  --ephemeral                 Treat the branch as ephemeral.
  --ephemeral-base            Treat the base branch as ephemeral.
  --path=<value>              Repository path to diff.

DESCRIPTION
  Show a repository branch diff.

  Read changed files and stats for a repository branch.

EXAMPLES
  Show changed files between feature and main.

    $ sf source diff --space docs --branch feature --base main
```

## `sf source import`

Create repository import remote.

```text
USAGE
  $ sf source import [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--ttl-seconds <value>] [--read-only-ref <value>...]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

REPOSITORY FLAGS
  --read-only-ref=<value>...  Ref glob to keep read-only on the signed remote. Repeat for multiple refs.
  --ttl-seconds=<value>       Signed import remote TTL.

DESCRIPTION
  Create repository import remote.

  Create a signed repository import remote for one-time source ingestion.

EXAMPLES
  Print a signed import remote URL.

    $ sf source import
```

## `sf source ls`

List repository files.

```text
USAGE
  $ sf source ls [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--connection-type connected|hosted] [--ref <value>] [--path <value>]
    [--recursive] [--metadata] [--limit <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

REPOSITORY FLAGS
  --connection-type=<option>  [default: connected] Repository connection type.
                              <options: connected|hosted>
  --limit=<value>             Maximum number of entries to return.
  --metadata                  Include size and last-commit metadata.
  --path=<value>              Repository directory to list.
  --recursive                 List files recursively.
  --ref=<value>               Branch, tag, commit, or ref to inspect.

DESCRIPTION
  List repository files.

  List files in a space's source repository.

EXAMPLES
  List files under src recursively.

    $ sf source ls --space docs --path src --recursive
```

## `sf source merge SOURCE TARGET`

Merge repository branches.

```text
USAGE
  $ sf source merge SOURCE TARGET --connection-type connected|hosted [--profile
    <value>] [-y] [-o <value>] [--space <value>] [--strategy
    merge|ff_only|ff_prefer] [--source-ephemeral] [--target-ephemeral] [--expected-target-sha <value>] [--message
    <value>] [--allow-unrelated-histories] [--squash]

ARGUMENTS
  SOURCE  Source branch to merge from.
  TARGET  Target branch to merge into.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

REPOSITORY FLAGS
  --allow-unrelated-histories    Allow merging unrelated histories.
  --connection-type=<option>     (required) Repository connection type.
                                 <options: connected|hosted>
  --expected-target-sha=<value>  Fail if the target branch no longer points at this SHA.
  --message=<value>              Merge commit message.
  --source-ephemeral             Treat the source branch as ephemeral.
  --squash                       Create a squash merge.
  --strategy=<option>            [default: ff_prefer] Merge strategy.
                                 <options: merge|ff_only|ff_prefer>
  --target-ephemeral             Treat the target branch as ephemeral.

DESCRIPTION
  Merge repository branches.

  Merge repository branches.

EXAMPLES
  Merge the feature branch into main.

    $ sf source merge feature main --space docs --connection-type hosted
```

## `sf source search PATTERN`

Search repository files.

```text
USAGE
  $ sf source search PATTERN [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--connection-type connected|hosted] [--ref <value>] [--path <value>]
    [--include-glob <value>] [--exclude-glob <value>] [--extension <value>] [--case-sensitive] [--context-before
    <value>] [--context-after <value>] [--max-lines <value>] [--max-matches-per-file <value>] [--cursor <value>]
    [--limit <value>]

ARGUMENTS
  PATTERN  Text or pattern to search for.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

REPOSITORY FLAGS
  --case-sensitive                Use case-sensitive matching.
  --connection-type=<option>      [default: connected] Repository connection type.
                                  <options: connected|hosted>
  --context-after=<value>         Context lines after each match.
  --context-before=<value>        Context lines before each match.
  --cursor=<value>                Pagination cursor.
  --exclude-glob=<value>          Glob to exclude from search.
  --extension=<value>             File extension filter.
  --include-glob=<value>          Glob to include in search.
  --limit=<value>                 Maximum files to return.
  --max-lines=<value>             Maximum matched lines to return.
  --max-matches-per-file=<value>  Maximum matches to return per file.
  --path=<value>                  Repository path to search.
  --ref=<value>                   Branch, tag, commit, or ref to inspect.

DESCRIPTION
  Search repository files.

  Search text across a space's source repository.

EXAMPLES
  Search for TODO under src.

    $ sf source search "TODO" --space docs --path src
```

## `sf source tags create NAME`

Create a repository tag.

```text
USAGE
  $ sf source tags create NAME --connection-type connected|hosted --target <value>
    [--profile <value>] [-y] [-o <value>] [--space <value>]

ARGUMENTS
  NAME  Tag name to create.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

REPOSITORY FLAGS
  --connection-type=<option>  (required) Repository connection type.
                              <options: connected|hosted>
  --target=<value>            (required) Commit SHA, branch, tag, or ref the tag should point at.

DESCRIPTION
  Create a repository tag.

  Create a release tag in a space's source repository.

EXAMPLES
  Create a release tag pointing at main.

    $ sf source tags create v1.0.0 --space docs --connection-type hosted --target main
```

## `sf source tags ls`

List repository tags.

```text
USAGE
  $ sf source tags ls [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--connection-type connected|hosted] [--cursor <value>] [--limit <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

REPOSITORY FLAGS
  --connection-type=<option>  [default: connected] Repository connection type.
                              <options: connected|hosted>
  --cursor=<value>            Pagination cursor.
  --limit=<value>             Maximum tags to return.

DESCRIPTION
  List repository tags.

  List tags in a space's source repository.

EXAMPLES
  $ sf source tags ls --space docs
```

## `sf spaces`

Manage spaces.

```text
USAGE
  $ sf spaces [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage spaces.

  Manage Spacefast spaces.

EXAMPLES
  Manage spaces.

    $ sf spaces
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXECUTION FLAGS
  --[no-]save-state  Write the created space to .spacefast/state.json.

OUTPUT FLAGS
  --show-secret  Print the access URL and claim link in JSON or non-interactive output.

DESCRIPTION
  Create an empty space.

  Create an empty space and save it to .spacefast/state.json.

ALIASES
  $ sf spaces create

EXAMPLES
  $ sf spaces add --name docs
```

## `sf spaces archive`

Archive a space.

```text
USAGE
  $ sf spaces archive [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Archive a space.

  Stop serving a space and retain its versions, source, database, storage, and domains.

EXAMPLES
  $ sf spaces archive --space docs
```

## `sf spaces check NAME`

Check whether a space name is available.

```text
USAGE
  $ sf spaces check NAME [--profile <value>] [-y] [-o <value>]

ARGUMENTS
  NAME  Space name or slug to check.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Check whether a space name is available.

  Check whether a space slug and its managed view.fast hostname are available.

EXAMPLES
  Check a space name in the acme team.

    $ sf spaces check my-site --team acme
```

## `sf spaces claim`

Claim an anonymous space.

```text
USAGE
  $ sf spaces claim [--profile <value>] [-y] [--claim-token
    <value>] [--keep-publishing] [--space <value>] [-o <value>] [--wait]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXECUTION FLAGS
  --[no-]wait  Wait until queued work finishes before returning.

DESCRIPTION
  Claim an anonymous space.

  Move a saved anonymous space into your account. Starts browser login if needed.

EXAMPLES
  Claim the space saved in the current directory.

    $ sf spaces claim

  Claim a space into a specific team.

    $ sf spaces claim --space spc_xxx --claim-token sfc_xxx --team my-team
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
      --json             Format output as json.
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

Duplicate a space.

```text
USAGE
  $ sf spaces duplicate [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--slug <value>] [--title <value>] [--version <value>] [--wait]
    [--wait-timeout <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DUPLICATE TARGET FLAGS
  --slug=<value>   Slug for the duplicate space.
  --title=<value>  Title for the duplicate space.

DUPLICATE SOURCE FLAGS
  --version=<value>  Version to duplicate. Defaults to the live version.

EXECUTION FLAGS
  --[no-]wait             Wait until queued work finishes before returning.
  --wait-timeout=<value>  [default: 900] Seconds to wait for the duplicate to become ready.

DESCRIPTION
  Duplicate a space.

  Download an existing space version and publish those files as a new space.

EXAMPLES
  Duplicate the docs space into a new docs-copy space.

    $ sf spaces duplicate --space docs --slug docs-copy
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Show a space.

  Print a space's live runtime state and current version.

ALIASES
  $ sf spaces show

EXAMPLES
  Show the space linked to the current directory.

    $ sf spaces get

  Show a specific space by slug, ID, or URL.

    $ sf spaces get --space docs
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
      --json             Format output as json.
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

## `sf spaces restore`

Restore a space.

```text
USAGE
  $ sf spaces restore [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Restore a space.

  Resume serving an archived space with its retained versions, data, and domains.

EXAMPLES
  $ sf spaces restore --space docs
```

## `sf spaces rm`

Take a space offline.

```text
USAGE
  $ sf spaces rm [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--wait]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXECUTION FLAGS
  --[no-]wait  Wait until queued work finishes before returning.

DESCRIPTION
  Take a space offline.

  Take the selected space offline. Its slug, versions, and data stay retained for operator cleanup.

ALIASES
  $ sf spaces remove
  $ sf spaces delete

EXAMPLES
  Take a space offline after confirmation.

    $ sf spaces rm --space docs

  Take a space offline without the confirmation prompt.

    $ sf spaces rm --space docs --yes
```

## `sf spaces rotate-claim`

Rotate an anonymous Space's key.

```text
USAGE
  $ sf spaces rotate-claim [--profile <value>] [-y] [--claim-token
    <value>] [--space <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Rotate an anonymous Space's key.

  Replace an anonymous space's key, live URL, and claim link without changing recipient Links.

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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Transfer a space to another team.

  Request a transfer of the selected space to another team. It applies once the target team accepts.

EXAMPLES
  $ sf spaces transfer acme --space spc_123
```

## `sf spaces update`

Rename or update a space.

```text
USAGE
  $ sf spaces update [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--wait] [--wait-timeout <value>] [--mode website|files] [--spa
    auto|true|false] [--noindex true|false] [--slug <value>] [-n <value>] [--viewer-description <value>]
    [--viewer-og-image-path <value>] [--viewer-title <value>]

SPACE METADATA FLAGS
  -n, --name=<value>      Space title.
      --mode=<option>     Serving mode.
                          <options: website|files>
      --noindex=<option>  Ask search engines not to index the live space. Pass false to allow indexing.
                          <options: true|false>
      --spa=<option>      Enable or disable SPA fallback. `auto` leaves the current setting unchanged.
                          <options: auto|true|false>

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

IDENTITY FLAGS
  --slug=<value>  New space slug. Must be sent without other update flags.

VIEWER METADATA FLAGS
  --viewer-description=<value>    Social preview description. Pass null to clear.
  --viewer-og-image-path=<value>  Social preview image path. Pass null to clear.
  --viewer-title=<value>          Viewer page title. Pass null to clear.

EXECUTION FLAGS
  --[no-]wait             Wait until queued work finishes before returning.
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

OUTPUT FLAGS
  --include-claim-url  Include the still-pending claim link.

DESCRIPTION
  Show CLI status.

  Show authenticated user, default team, and the space the current directory is linked to.

EXAMPLES
  Show login, default team, and the linked space.

    $ sf status

  Include the still-pending claim link.

    $ sf status --include-claim-url
```

## `sf storage [TARGET]`

List a space's stored objects.

```text
USAGE
  $ sf storage [TARGET] [--profile <value>] [-y]
    [-o <value>] [--space <value>] [--local-url <value>] [--port <value>] [--limit <value>]
    [--cursor <value>]

ARGUMENTS
  [TARGET]  Space ID, slug, live URL, or domain. Defaults to the linked space.

FLAGS
  --cursor=<value>  Continue from an opaque cursor returned by the last page.
  --limit=<value>   Maximum objects to return (default 50, max 100).

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

RUNTIME FLAGS
  --local-url=<value>  Use a local `sf dev` server instead of the live version.
  --port=<value>       Local `sf dev` server port; shorthand for --local-url http://127.0.0.1:<port>.

DESCRIPTION
  List a space's stored objects.

  List object metadata and quota usage for files uploaded by a space's app.

EXAMPLES
  List the linked space's objects.

    $ sf storage

  List the first ten objects in space `docs`.

    $ sf storage docs --limit 10
```

## `sf storage get ID`

Download an app storage object.

```text
USAGE
  $ sf storage get ID [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--local-url <value>] [--port <value>] [--out <value>]

ARGUMENTS
  ID  Storage object id.

FLAGS
  --out=<value>  Save to this path; defaults to the object id. Existing files are never overwritten.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

RUNTIME FLAGS
  --local-url=<value>  Use a local `sf dev` server instead of the live version.
  --port=<value>       Local `sf dev` server port; shorthand for --local-url http://127.0.0.1:<port>.

EXAMPLES
  Download an app storage object.

    $ sf storage get <id>
```

## `sf storage ls [TARGET]`

List a space's stored objects.

```text
USAGE
  $ sf storage ls [TARGET] [--profile <value>] [-y]
    [-o <value>] [--space <value>] [--local-url <value>] [--port <value>] [--limit <value>]
    [--cursor <value>]

ARGUMENTS
  [TARGET]  Space ID, slug, live URL, or domain. Defaults to the linked space.

FLAGS
  --cursor=<value>  Continue from an opaque cursor returned by the last page.
  --limit=<value>   Maximum objects to return (default 50, max 100).

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

RUNTIME FLAGS
  --local-url=<value>  Use a local `sf dev` server instead of the live version.
  --port=<value>       Local `sf dev` server port; shorthand for --local-url http://127.0.0.1:<port>.

ALIASES
  $ sf storage list

EXAMPLES
  List a space's stored objects.

    $ sf storage ls [target]
```

## `sf storage put FILE`

Upload a file to app storage.

```text
USAGE
  $ sf storage put FILE [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--local-url <value>] [--port <value>] [--public] [--content-type <value>]

ARGUMENTS
  FILE  File to upload.

FLAGS
  --content-type=<value>  [default: application/octet-stream] Object MIME type.
  --public                Make the uploaded object publicly readable.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

RUNTIME FLAGS
  --local-url=<value>  Use a local `sf dev` server instead of the live version.
  --port=<value>       Local `sf dev` server port; shorthand for --local-url http://127.0.0.1:<port>.

EXAMPLES
  Upload a file to app storage.

    $ sf storage put <file>
```

## `sf storage rm [ID]`

Delete a stored object.

```text
USAGE
  $ sf storage rm [ID] [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--local-url <value>] [--port <value>]

ARGUMENTS
  [ID]  Object id, for example 0123456789abcdef0123456789abcdef.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

RUNTIME FLAGS
  --local-url=<value>  Use a local `sf dev` server instead of the live version.
  --port=<value>       Local `sf dev` server port; shorthand for --local-url http://127.0.0.1:<port>.

DESCRIPTION
  Delete a stored object.

  Force-delete an app storage object as the space owner, regardless of who uploaded it.

ALIASES
  $ sf storage remove
  $ sf storage delete

EXAMPLES
  Delete a stored object without prompting.

    $ sf storage rm 0123456789abcdef0123456789abcdef --yes
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Switch teams.

  Set the default team for future CLI commands.

EXAMPLES
  Set acme as the default team for future commands.

    $ sf switch acme
```

## `sf tags`

List effective tags.

```text
USAGE
  $ sf tags [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--environment <value>]

FLAGS
  --environment=<value>  Release environment to inspect.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List effective tags.

  Read the current released effective tags for a space.

EXAMPLES
  Show the current released effective tags.

    $ sf tags --space docs

  Show effective tags for the production environment.

    $ sf tags --space docs --environment production
```

## `sf tags apply FILE`

Apply declarative tags.

```text
USAGE
  $ sf tags apply FILE [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--title <value>] [-m <value>] [--submit] [--release <value>]
    [--expected-current-revision <value>] [--idempotency-key <value>]

ARGUMENTS
  FILE  spacefast.tags.json file.

FLAGS
  -m, --message=<value>                    Draft or submission message.
      --expected-current-revision=<value>  Optimistic release current revision check.
      --idempotency-key=<value>            Idempotency key for replay-safe apply.
      --release=<value>                    Release environment after approval policy allows.
      --submit                             Submit after validation when policy allows.
      --title=<value>                      Draft title.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Apply declarative tags.

  Apply a declarative tag config by creating/updating a draft, validating, and optionally submitting or releasing.

EXAMPLES
  Apply a declarative tag config as a draft.

    $ sf tags apply spacefast.tags.json --space docs

  Apply, submit, and release to production when policy allows.

    $ sf tags apply spacefast.tags.json --space docs --submit --release production
```

## `sf tags debug`

Create a tag debug session.

```text
USAGE
  $ sf tags debug [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--revision <value>] [--revoke-session <value>] [--url <value>]
    [--environment <value>] [--idempotency-key <value>]

FLAGS
  --environment=<value>      Release environment to debug.
  --idempotency-key=<value>  Idempotency key for replay-safe debug sessions.
  --revision=<value>         Tag revision ID to debug.
  --revoke-session=<value>   Preview/debug session ID to revoke.
  --url=<value>              Page URL to open in debug mode.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Create a tag debug session.

  Create a signed no-store tag preview/debug session.

EXAMPLES
  Create a signed tag debug session for a page.

    $ sf tags debug --space docs --url https://docs.view.fast
```

## `sf tags releases`

List tag releases.

```text
USAGE
  $ sf tags releases [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List tag releases.

  List tag release pointers for this space.

EXAMPLES
  List tag release pointers for the space.

    $ sf tags releases --space docs
```

## `sf tags releases get ENVIRONMENT`

Read a tag release.

```text
USAGE
  $ sf tags releases get ENVIRONMENT [--profile <value>] [-y]
    [-o <value>] [--space <value>]

ARGUMENTS
  ENVIRONMENT  Release environment, for example production.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Read a tag release.

  Read one tag release pointer.

EXAMPLES
  Read the production tag release pointer.

    $ sf tags releases get production --space docs
```

## `sf tags releases rollback ENVIRONMENT REVISION`

Roll back a tag release.

```text
USAGE
  $ sf tags releases rollback ENVIRONMENT REVISION [--profile <value>] [-y]
    [-o <value>] [--space <value>] [--expected-current-revision <value>] [--notes <value>]
    [--idempotency-key <value>]

ARGUMENTS
  ENVIRONMENT  Release environment, for example production.
  REVISION     Prior published tag revision ID to restore.

FLAGS
  --expected-current-revision=<value>  Optimistic current revision check.
  --idempotency-key=<value>            Idempotency key for replay-safe rollback.
  --notes=<value>                      Rollback notes.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Roll back a tag release.

  Move a tag release pointer back to a prior published revision.

EXAMPLES
  Roll the production tag release back to a prior revision.

    $ sf tags releases rollback production tver_123 --space docs
```

## `sf tags releases set ENVIRONMENT REVISION`

Set a tag release.

```text
USAGE
  $ sf tags releases set ENVIRONMENT REVISION [--profile <value>] [-y]
    [-o <value>] [--space <value>] [--expected-current-revision <value>] [--notes <value>]
    [--idempotency-key <value>]

ARGUMENTS
  ENVIRONMENT  Release environment, for example production.
  REVISION     Approved tag revision ID to release.

FLAGS
  --expected-current-revision=<value>  Optimistic current revision check.
  --idempotency-key=<value>            Idempotency key for replay-safe release.
  --notes=<value>                      Release notes.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Set a tag release.

  Point a tag release environment at an approved immutable revision.

EXAMPLES
  Point the production tag release at an approved revision.

    $ sf tags releases set production tver_123 --space docs
```

## `sf tags revisions`

List tag revisions.

```text
USAGE
  $ sf tags revisions [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--status <value>] [--cursor <value>] [--limit <value>]

FLAGS
  --cursor=<value>  Pagination cursor.
  --limit=<value>   Maximum number of revisions to return.
  --status=<value>  Filter by revision status.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List tag revisions.

  List draft, in-review, approved, published, and abandoned tag revisions.

EXAMPLES
  List tag revisions for the space.

    $ sf tags revisions --space docs

  List draft tag revisions.

    $ sf tags revisions --space docs --status draft
```

## `sf tags revisions abandon REVISION`

Abandon a tag revision.

```text
USAGE
  $ sf tags revisions abandon REVISION [--profile <value>] [-y]
    [-o <value>] [--space <value>] [--idempotency-key <value>]

ARGUMENTS
  REVISION  Tag revision ID.

FLAGS
  --idempotency-key=<value>  Idempotency key for replay-safe abandon.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Abandon a tag revision.

  Abandon a mutable tag revision.

EXAMPLES
  $ sf tags revisions abandon tver_123 --space docs
```

## `sf tags revisions approve REVISION`

Approve a tag revision.

```text
USAGE
  $ sf tags revisions approve REVISION [--profile <value>] [-y]
    [-o <value>] [--space <value>] [--idempotency-key <value>]

ARGUMENTS
  REVISION  Tag revision ID.

FLAGS
  --idempotency-key=<value>  Idempotency key for replay-safe approval.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Approve a tag revision.

  Approve a tag revision after validation and policy gates pass.

EXAMPLES
  $ sf tags revisions approve tver_123 --space docs
```

## `sf tags revisions create`

Create a tag revision.

```text
USAGE
  $ sf tags revisions create [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--title <value>] [-m <value>] [--base-revision <value>] [-i <value>]
    [--template <value>] [--field <value>...] [--trigger <value>...] [--tag-id <value>] [--name <value>]
    [--idempotency-key <value>]

FLAGS
  -i, --input=<value>            JSON body: literal JSON, @file, or - for stdin.
  -m, --message=<value>          Draft changelog or description.
      --base-revision=<value>    Base tag revision ID.
      --field=<value>...         Template field as key=value. Repeat for multiple fields.
      --idempotency-key=<value>  Idempotency key for replay-safe creation.
      --name=<value>             Display name for the generated template tag.
      --tag-id=<value>           Stable tag ID for the generated template tag.
      --template=<value>         Built-in template ID to add, for example google-analytics or segment.
      --title=<value>            Draft title.
      --trigger=<value>...       Template trigger preset. Repeat for multiple triggers.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Create a tag revision.

  Create a mutable draft tag revision from a release, base revision, or graph body.

ALIASES
  $ sf tags revisions add

EXAMPLES
  Create a draft tag revision.

    $ sf tags revisions create --space docs --title "Add GA"

  Create a draft from a built-in template.

    $ sf tags revisions create --space docs --template google-analytics --field measurementId=G-123
```

## `sf tags revisions diff REVISION`

Diff a tag revision.

```text
USAGE
  $ sf tags revisions diff REVISION [--profile <value>] [-y]
    [-o <value>] [--space <value>]

ARGUMENTS
  REVISION  Tag revision ID.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Diff a tag revision.

  Show the generated change set from this tag revision's base revision.

EXAMPLES
  Show a tag revision's change set from its base.

    $ sf tags revisions diff tver_123 --space docs
```

## `sf tags revisions submit REVISION`

Submit a tag revision.

```text
USAGE
  $ sf tags revisions submit REVISION [--profile <value>] [-y]
    [-o <value>] [--space <value>] [--idempotency-key <value>]

ARGUMENTS
  REVISION  Tag revision ID.

FLAGS
  --idempotency-key=<value>  Idempotency key for replay-safe submit.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Submit a tag revision.

  Submit a mutable tag revision for review.

EXAMPLES
  Submit a tag revision for review.

    $ sf tags revisions submit tver_123 --space docs
```

## `sf tags revisions validate REVISION`

Validate a tag revision.

```text
USAGE
  $ sf tags revisions validate REVISION [--profile <value>] [-y]
    [-o <value>] [--space <value>] [--idempotency-key <value>]

ARGUMENTS
  REVISION  Tag revision ID.

FLAGS
  --idempotency-key=<value>  Idempotency key for replay-safe validation.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Validate a tag revision.

  Validate a tag revision's graph, consent policy, CSP impact, limits, and review gates.

EXAMPLES
  Validate a tag revision before approval.

    $ sf tags revisions validate tver_123 --space docs
```

## `sf tags templates`

List tag templates.

```text
USAGE
  $ sf tags templates [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List tag templates.

  List built-in tag templates and event trigger presets.

EXAMPLES
  List built-in tag templates and trigger presets.

    $ sf tags templates
```

## `sf teams`

Manage teams.

```text
USAGE
  $ sf teams [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage teams.

  Manage teams and members.

EXAMPLES
  Manage teams.

    $ sf teams
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Accept a team invitation.

  Accept a team invitation and join the team as the current login.

EXAMPLES
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
      --json             Format output as json.
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
      --json             Format output as json.
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage team invitations.

  Manage team invitations.

EXAMPLES
  Manage team invitations.

    $ sf teams invitations
```

## `sf teams invitations add EMAILS`

Create team invitations.

```text
USAGE
  $ sf teams invitations add EMAILS... [--profile <value>] [-y] [-o <value>]
    [--role owner|admin|member]

ARGUMENTS
  EMAILS...  Email addresses to invite.

FLAGS
  --role=<option>  [default: member] Role to grant when the invitation is accepted.
                   <options: owner|admin|member>

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Create team invitations.

  Invite one or more people to a team.

ALIASES
  $ sf teams invitations create

EXAMPLES
  Invite multiple members to the team.

    $ sf teams invitations add jane@example.com alex@example.com --role member
```

## `sf teams invitations cancel INVITATION`

Cancel a team invitation.

```text
USAGE
  $ sf teams invitations cancel INVITATION [--profile <value>] [-y]

ARGUMENTS
  INVITATION  Invitation id.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Cancel a team invitation.

  Cancel a team invitation.

EXAMPLES
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List team invitations.

  List pending and historical team invitations.

ALIASES
  $ sf teams invitations list

EXAMPLES
  $ sf teams invitations ls
```

## `sf teams invitations resend INVITATION`

Resend a team invitation.

```text
USAGE
  $ sf teams invitations resend INVITATION [--profile <value>] [-y]

ARGUMENTS
  INVITATION  Invitation id.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Resend a team invitation.

  Resend a pending team invitation.

EXAMPLES
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List teams.

  List teams available to the current login.

ALIASES
  $ sf teams list

EXAMPLES
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage team members.

  Manage team members.

EXAMPLES
  Manage team members.

    $ sf teams members
```

## `sf teams members ls`

List team members.

```text
USAGE
  $ sf teams members ls [--profile <value>] [-y] [-o <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List team members.

  List members in a team.

ALIASES
  $ sf teams members list

EXAMPLES
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Remove a team member.

  Remove a member from a team.

ALIASES
  $ sf teams members remove
  $ sf teams members delete

EXAMPLES
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
      --json             Format output as json.
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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Accept a space transfer.

  Accept a pending space transfer as a member of the target team.

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
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Cancel a space transfer.

  Cancel a pending space transfer.

EXAMPLES
  $ sf transfers cancel trf_123
```

## `sf unlink`

Unlink this checkout from its space.

```text
USAGE
  $ sf unlink [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Unlink this checkout from its space.

  Remove this checkout's Spacefast link and private local publish state.

EXAMPLES
  Review and remove the nearest checkout link.

    $ sf unlink

  Remove the link non-interactively and print the removed files.

    $ sf unlink --yes --json
```

## `sf users`

Manage app users and sign-in methods.

```text
USAGE
  $ sf users [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXAMPLES
  Manage app users and sign-in methods.

    $ sf users
```

## `sf users delete USER`

Complete a requested app account deletion.

```text
USAGE
  $ sf users delete USER [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

ARGUMENTS
  USER  App user ID.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXAMPLES
  Complete a requested app account deletion.

    $ sf users delete <user>
```

## `sf users get USER`

Inspect an app user.

```text
USAGE
  $ sf users get USER [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

ARGUMENTS
  USER  App user ID.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXAMPLES
  Inspect an app user.

    $ sf users get <user>
```

## `sf users ls`

List app users.

```text
USAGE
  $ sf users ls [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--search <value>] [--page <value>] [--limit <value>]

FLAGS
  --limit=<value>
  --page=<value>
  --search=<value>  Search names and email addresses.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXAMPLES
  List app users.

    $ sf users ls
```

## `sf users reactivate USER`

Reactivate an app account.

```text
USAGE
  $ sf users reactivate USER [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

ARGUMENTS
  USER  App user ID.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXAMPLES
  Reactivate an app account.

    $ sf users reactivate <user>
```

## `sf users revoke USER`

Revoke app user sessions.

```text
USAGE
  $ sf users revoke USER [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--session <value>]

ARGUMENTS
  USER  App user ID.

FLAGS
  --session=<value>  Revoke this session only; omit to revoke all sessions.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXAMPLES
  Revoke app user sessions.

    $ sf users revoke <user>
```

## `sf users sessions USER`

List app user sessions.

```text
USAGE
  $ sf users sessions USER [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

ARGUMENTS
  USER  App user ID.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXAMPLES
  List app user sessions.

    $ sf users sessions <user>
```

## `sf users settings`

Read or update app sign-in settings.

```text
USAGE
  $ sf users settings [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--enabled true|false] [--google managed|direct|disabled] [--gravatar
    true|false] [--spacefast true|false] [--google-client-id <value>] [--clear-google-secret] [--google-secret-file
    <value>]

FLAGS
  --clear-google-secret         Remove the saved direct Google secret.
  --enabled=<option>            <options: true|false>
  --google=<option>             <options: managed|direct|disabled>
  --google-client-id=<value>
  --google-secret-file=<value>  Read the direct Google secret from this file.
  --gravatar=<option>           <options: true|false>
  --spacefast=<option>          <options: true|false>

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXAMPLES
  Read or update app sign-in settings.

    $ sf users settings
```

## `sf users suspend USER`

Suspend an app account.

```text
USAGE
  $ sf users suspend USER [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

ARGUMENTS
  USER  App user ID.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXAMPLES
  Suspend an app account.

    $ sf users suspend <user>
```

## `sf versions`

Manage versions.

```text
USAGE
  $ sf versions [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage versions.

  List, promote, and roll back space versions.

EXAMPLES
  Manage versions.

    $ sf versions
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
      --json             Format output as json.
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
    <value>] [-o <value>] [--space <value>] [--commit <value>]

FLAGS
  --commit=<value>  Only versions published from this commit.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List space versions.

  List space versions, marking the live one and any still publishing.

ALIASES
  $ sf versions list

EXAMPLES
  List versions for the linked space.

    $ sf versions ls

  List versions for a specific space.

    $ sf versions ls --space docs

  Find the version published from a commit.

    $ sf versions ls --commit $(git rev-parse HEAD)

FLAG DESCRIPTIONS
  --commit=<value>  Only versions published from this commit.

    Full 40-character git commit SHA. Short SHAs are rejected — the match is exact.
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
      --json             Format output as json.
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
      --json             Format output as json.
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

## `sf wp`

Run a WP-CLI command.

```text
USAGE
  $ sf wp [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--local] [--path <value>] [--mode full|limited]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

RUNTIME FLAGS
  --local          Run against a local WordPress instead of the space's.
  --mode=<option>  [default: full] Remote only. `limited` skips the site's own themes and plugins, so a core command
                   still answers on a broken site.
                   <options: full|limited>
  --path=<value>   Path to the local WordPress install; implies --local.

DESCRIPTION
  Run a WP-CLI command.

  Runs WP-CLI against a space's WordPress, or against a local one with --local. Everything after the flags is passed to
  `wp` unchanged, so `sf wp plugin list --format=csv` runs exactly that. With `--local`, WP-CLI's own output and exit
  code pass through untouched; a remote run is a host job that reports only success or failure and how long it took,
  never `wp`'s output. `--json` wraps only Spacefast's own errors. Use `--` to pass a flag `sf` would otherwise read as
  its own, as in `sf wp -- --version`.

EXAMPLES
  Read an option.

    $ sf wp option get blogname

  Run against a named space; `--format` reaches `wp`.

    $ sf wp --space docs plugin list --format=csv

  Run against a local WordPress instead.

    $ sf wp --local --path ./wordpress core version

  Pass a flag `sf` would otherwise claim.

    $ sf wp -- --version
```

## `sf zero`

Work with a space's Zero capsule.

```text
USAGE
  $ sf zero [--profile <value>] [-y]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Work with a space's Zero capsule.

  Inspect and call the Abilities a space's Zero capsule publishes, and move a Payload CMS or EmDash project onto Zero.

EXAMPLES
  Work with a space's Zero capsule.

    $ sf zero
```

## `sf zero abilities`

List a space's Zero Abilities.

```text
USAGE
  $ sf zero abilities [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List a space's Zero Abilities.

  List the Abilities the space's live capsule publishes: what an agent can call, what category it belongs to, and
  whether it reads or writes.

ALIASES
  $ sf zero ls

EXAMPLES
  List the Abilities the live version publishes.

    $ sf zero abilities
```

## `sf zero call ABILITY`

Call one of a space's Zero Abilities.

```text
USAGE
  $ sf zero call ABILITY [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--credential <value>] [--input <value>]

ARGUMENTS
  ABILITY  Ability name, as shown by `sf zero abilities`.

FLAGS
  --input=<value>  Ability input as inline JSON, or @path to read it from a file.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Call one of a space's Zero Abilities.

  Mint a short-lived Ability token for the space and run the Ability against the space's own WordPress REST API. The
  token is never printed and never appears in the --json receipt.

EXAMPLES
  Run a read Ability with no input.

    $ sf zero call content.posts.list

  Pass the Ability's input as inline JSON.

    $ sf zero call content.posts.get --input '{"slug":"hello"}'

  Read the input from a JSON file.

    $ sf zero call content.posts.save --input @post.json
```

## `sf zero import SOURCE DIRECTORY`

Import a Payload CMS or EmDash project as a Zero capsule.

```text
USAGE
  $ sf zero import SOURCE DIRECTORY [--profile <value>] [-y]
    [--out <value>] [--capsule <value>] [--force]

ARGUMENTS
  SOURCE     Project format to translate: payloadcms or emdash.
  DIRECTORY  Directory holding the project to translate.

FLAGS
  --capsule=<value>  Capsule module to write, relative to --out. Defaults to server/index.ts.
  --force            Overwrite files the import would otherwise refuse to replace.
  --out=<value>      Directory to write the capsule and content into. Defaults to the current directory.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Import a Payload CMS or EmDash project as a Zero capsule.

  Translate a foreign CMS project into an authored Zero capsule and its content files. Prints the translation report: a
  Payload config with anything Zero cannot hold is refused outright and nothing is written.

EXAMPLES
  Translate a Payload CMS config into a capsule in this directory.

    $ sf zero import payloadcms ../my-payload-app

  Translate an EmDash seed, writing its Markdown content alongside the capsule.

    $ sf zero import emdash ../my-emdash-site --out .
```

## `sf zero queries`

List a capsule's declared queries.

```text
USAGE
  $ sf zero queries [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--local-url <value>] [--port <value>] [--name <value>]

FLAGS
  --name=<value>  Inspect one declared query by name.

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

RUNTIME FLAGS
  --local-url=<value>  Use a local `sf dev` server instead of the live version.
  --port=<value>       Local `sf dev` server port; shorthand for --local-url http://127.0.0.1:<port>.

EXAMPLES
  List a capsule's declared queries.

    $ sf zero queries
```

## `sf zero types`

Generate types from a space's content model, Abilities, and database.

```text
USAGE
  $ sf zero types [--profile <value>] [-y] [--claim-token
    <value>] [-o <value>] [--space <value>] [--out <value>] [--check]

GLOBAL FLAGS
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  [env: SPACEFAST_API_URL] Spacefast API base URL.
      --json             Format output as json.
      --profile=<value>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

OUTPUT FLAGS
  --check        Compare instead of writing, and exit non-zero when the file is stale or missing.
  --out=<value>  File to write, relative to the current directory. Defaults to zero-types.ts.

DESCRIPTION
  Generate types from a space's content model, Abilities, and database.

  Generate TypeScript for everything the platform owns rather than your source: the live content model's types, the
  Ability catalog with the capability each one needs, and a row type per database table. Commit the result and use
  --check in CI to catch types that no longer describe the space.

EXAMPLES
  Write zero-types.ts from what the space publishes right now.

    $ sf zero types

  Fail if the committed types no longer match the space.

    $ sf zero types --check
```
