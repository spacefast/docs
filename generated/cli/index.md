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
$ sf (--version|-v)
spacefast/0.8.1
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
- [`sf access sessions revoke`](#sf-access-sessions-revoke)
- [`sf activity`](#sf-activity)
- [`sf agents init [DIRECTORY]`](#sf-agents-init-directory)
- [`sf analytics`](#sf-analytics)
- [`sf api METHOD [PATH]`](#sf-api-method-path)
- [`sf api-keys`](#sf-api-keys)
- [`sf api-keys create`](#sf-api-keys-create)
- [`sf api-keys list`](#sf-api-keys-list)
- [`sf api-keys revoke KEY`](#sf-api-keys-revoke-key)
- [`sf apply`](#sf-apply)
- [`sf auth`](#sf-auth)
- [`sf auth as NAME`](#sf-auth-as-name)
- [`sf auth reset`](#sf-auth-reset)
- [`sf autocomplete [SHELL]`](#sf-autocomplete-shell)
- [`sf build [DIR]`](#sf-build-dir)
- [`sf builds cancel BUILD`](#sf-builds-cancel-build)
- [`sf builds detect [DIR]`](#sf-builds-detect-dir)
- [`sf builds inspect BUILD`](#sf-builds-inspect-build)
- [`sf builds list`](#sf-builds-list)
- [`sf builds logs BUILD`](#sf-builds-logs-build)
- [`sf builds retry BUILD`](#sf-builds-retry-build)
- [`sf builds upload refresh BUILD`](#sf-builds-upload-refresh-build)
- [`sf channels`](#sf-channels)
- [`sf channels history [NAME]`](#sf-channels-history-name)
- [`sf channels list`](#sf-channels-list)
- [`sf channels set NAME`](#sf-channels-set-name)
- [`sf comments`](#sf-comments)
- [`sf comments create`](#sf-comments-create)
- [`sf comments export`](#sf-comments-export)
- [`sf comments inspect COMMENT`](#sf-comments-inspect-comment)
- [`sf comments list`](#sf-comments-list)
- [`sf comments react COMMENT EMOJI`](#sf-comments-react-comment-emoji)
- [`sf comments read COMMENT`](#sf-comments-read-comment)
- [`sf comments reopen COMMENT`](#sf-comments-reopen-comment)
- [`sf comments reply COMMENT`](#sf-comments-reply-comment)
- [`sf comments resolve COMMENT`](#sf-comments-resolve-comment)
- [`sf comments settings`](#sf-comments-settings)
- [`sf comments settings set`](#sf-comments-settings-set)
- [`sf comments unreact COMMENT EMOJI`](#sf-comments-unreact-comment-emoji)
- [`sf connectors`](#sf-connectors)
- [`sf connectors bind ROLE CONNECTION`](#sf-connectors-bind-role-connection)
- [`sf connectors bindings`](#sf-connectors-bindings)
- [`sf connectors connections`](#sf-connectors-connections)
- [`sf connectors connections connect CONNECTOR`](#sf-connectors-connections-connect-connector)
- [`sf connectors connections disconnect CONNECTION`](#sf-connectors-connections-disconnect-connection)
- [`sf connectors connections health CONNECTION`](#sf-connectors-connections-health-connection)
- [`sf connectors connections list`](#sf-connectors-connections-list)
- [`sf connectors connections reconnect CONNECTION`](#sf-connectors-connections-reconnect-connection)
- [`sf connectors connections refresh CONNECTION`](#sf-connectors-connections-refresh-connection)
- [`sf connectors connections update CONNECTION`](#sf-connectors-connections-update-connection)
- [`sf connectors create TARGET`](#sf-connectors-create-target)
- [`sf connectors delete CONNECTOR`](#sf-connectors-delete-connector)
- [`sf connectors detect URL`](#sf-connectors-detect-url)
- [`sf connectors list`](#sf-connectors-list)
- [`sf connectors policies`](#sf-connectors-policies)
- [`sf connectors policies add PATTERN`](#sf-connectors-policies-add-pattern)
- [`sf connectors policies explain ADDRESS`](#sf-connectors-policies-explain-address)
- [`sf connectors policies list`](#sf-connectors-policies-list)
- [`sf connectors policies remove RULE`](#sf-connectors-policies-remove-rule)
- [`sf connectors policies set RULE`](#sf-connectors-policies-set-rule)
- [`sf connectors run [CODE]`](#sf-connectors-run-code)
- [`sf connectors run inspect RUN`](#sf-connectors-run-inspect-run)
- [`sf connectors run list`](#sf-connectors-run-list)
- [`sf connectors run resume RUN`](#sf-connectors-run-resume-run)
- [`sf connectors unbind ROLE`](#sf-connectors-unbind-role)
- [`sf content dashboard [TARGET]`](#sf-content-dashboard-target)
- [`sf continue`](#sf-continue)
- [`sf crons`](#sf-crons)
- [`sf crons list`](#sf-crons-list)
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
- [`sf dev instances`](#sf-dev-instances)
- [`sf docs [QUERY]`](#sf-docs-query)
- [`sf doctor`](#sf-doctor)
- [`sf domains`](#sf-domains)
- [`sf domains add HOSTNAME`](#sf-domains-add-hostname)
- [`sf domains check DOMAIN`](#sf-domains-check-domain)
- [`sf domains contacts`](#sf-domains-contacts)
- [`sf domains contacts add`](#sf-domains-contacts-add)
- [`sf domains contacts list`](#sf-domains-contacts-list)
- [`sf domains diagnostics DOMAIN`](#sf-domains-diagnostics-domain)
- [`sf domains dns`](#sf-domains-dns)
- [`sf domains dns add DOMAIN`](#sf-domains-dns-add-domain)
- [`sf domains dns batch DOMAIN`](#sf-domains-dns-batch-domain)
- [`sf domains dns capabilities DOMAIN`](#sf-domains-dns-capabilities-domain)
- [`sf domains dns export DOMAIN`](#sf-domains-dns-export-domain)
- [`sf domains dns list DOMAIN`](#sf-domains-dns-list-domain)
- [`sf domains dns refresh DOMAIN`](#sf-domains-dns-refresh-domain)
- [`sf domains dns remove DOMAIN RECORD`](#sf-domains-dns-remove-domain-record)
- [`sf domains dns replace DOMAIN`](#sf-domains-dns-replace-domain)
- [`sf domains dns update DOMAIN RECORD`](#sf-domains-dns-update-domain-record)
- [`sf domains list`](#sf-domains-list)
- [`sf domains nameservers DOMAIN`](#sf-domains-nameservers-domain)
- [`sf domains nameservers set DOMAIN NAMESERVERS`](#sf-domains-nameservers-set-domain-nameservers)
- [`sf domains registration DOMAIN`](#sf-domains-registration-domain)
- [`sf domains registration purchase DOMAIN... [flags]`](#sf-domains-registration-purchase-domain-flags)
- [`sf domains registration renew DOMAIN`](#sf-domains-registration-renew-domain)
- [`sf domains remove DOMAIN`](#sf-domains-remove-domain)
- [`sf domains search [QUERY]`](#sf-domains-search-query)
- [`sf domains update DOMAIN`](#sf-domains-update-domain)
- [`sf env`](#sf-env)
- [`sf env import FILE`](#sf-env-import-file)
- [`sf env list`](#sf-env-list)
- [`sf env pull [FILE]`](#sf-env-pull-file)
- [`sf env remove NAME`](#sf-env-remove-name)
- [`sf env set NAME [VALUE]`](#sf-env-set-name-value)
- [`sf env template [DIR]`](#sf-env-template-dir)
- [`sf feedback`](#sf-feedback)
- [`sf feedback inspect REF`](#sf-feedback-inspect-ref)
- [`sf feedback list`](#sf-feedback-list)
- [`sf fetch [PATH]`](#sf-fetch-path)
- [`sf functions`](#sf-functions)
- [`sf git`](#sf-git)
- [`sf git build`](#sf-git-build)
- [`sf git connect`](#sf-git-connect)
- [`sf git disconnect`](#sf-git-disconnect)
- [`sf git github`](#sf-git-github)
- [`sf git github installations`](#sf-git-github-installations)
- [`sf git github repos [INSTALLATION]`](#sf-git-github-repos-installation)
- [`sf git inspect`](#sf-git-inspect)
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
- [`sf migrate URL`](#sf-migrate-url)
- [`sf oauth-apps`](#sf-oauth-apps)
- [`sf oauth-apps create`](#sf-oauth-apps-create)
- [`sf oauth-apps delete APP`](#sf-oauth-apps-delete-app)
- [`sf oauth-apps inspect APP`](#sf-oauth-apps-inspect-app)
- [`sf oauth-apps list`](#sf-oauth-apps-list)
- [`sf oauth-apps secret rotate APP`](#sf-oauth-apps-secret-rotate-app)
- [`sf oauth-apps update APP`](#sf-oauth-apps-update-app)
- [`sf open [TARGET]`](#sf-open-target)
- [`sf operations [OPERATION]`](#sf-operations-operation)
- [`sf pages`](#sf-pages)
- [`sf pages pull [TARGET]`](#sf-pages-pull-target)
- [`sf pages validate`](#sf-pages-validate)
- [`sf plugins`](#sf-plugins)
- [`sf profiles`](#sf-profiles)
- [`sf profiles remove NAME`](#sf-profiles-remove-name)
- [`sf profiles set NAME`](#sf-profiles-set-name)
- [`sf profiles use NAME`](#sf-profiles-use-name)
- [`sf promote [VERSION]`](#sf-promote-version)
- [`sf publish [DIR]`](#sf-publish-dir)
- [`sf redeploy [BUILD]`](#sf-redeploy-build)
- [`sf rollback VERSION`](#sf-rollback-version)
- [`sf routing`](#sf-routing)
- [`sf routing compute`](#sf-routing-compute)
- [`sf routing inspect`](#sf-routing-inspect)
- [`sf rules`](#sf-rules)
- [`sf rules add`](#sf-rules-add)
- [`sf rules list`](#sf-rules-list)
- [`sf rules pause`](#sf-rules-pause)
- [`sf rules remove NAME`](#sf-rules-remove-name)
- [`sf rules resume`](#sf-rules-resume)
- [`sf rules test URL`](#sf-rules-test-url)
- [`sf rules validate`](#sf-rules-validate)
- [`sf runtime`](#sf-runtime)
- [`sf runtime status`](#sf-runtime-status)
- [`sf sell activate`](#sf-sell-activate)
- [`sf sell demo`](#sf-sell-demo)
- [`sf sell onboard`](#sf-sell-onboard)
- [`sf sell orders inspect ORDER`](#sf-sell-orders-inspect-order)
- [`sf sell orders list`](#sf-sell-orders-list)
- [`sf sell orders resend ORDER`](#sf-sell-orders-resend-order)
- [`sf sell orders ship ORDER`](#sf-sell-orders-ship-order)
- [`sf sell products archive KEY`](#sf-sell-products-archive-key)
- [`sf sell products create`](#sf-sell-products-create)
- [`sf sell products list`](#sf-sell-products-list)
- [`sf sell products update KEY`](#sf-sell-products-update-key)
- [`sf sell refresh`](#sf-sell-refresh)
- [`sf sell status`](#sf-sell-status)
- [`sf setup`](#sf-setup)
- [`sf setup agent`](#sf-setup-agent)
- [`sf share`](#sf-share)
- [`sf share check`](#sf-share-check)
- [`sf share grant`](#sf-share-grant)
- [`sf share grant update GRANT`](#sf-share-grant-update-grant)
- [`sf share identity`](#sf-share-identity)
- [`sf share identity create`](#sf-share-identity-create)
- [`sf share identity grant`](#sf-share-identity-grant)
- [`sf share identity list`](#sf-share-identity-list)
- [`sf share identity revoke CONNECTION`](#sf-share-identity-revoke-connection)
- [`sf share identity update CONNECTION`](#sf-share-identity-update-connection)
- [`sf share link`](#sf-share-link)
- [`sf share link copy LINK`](#sf-share-link-copy-link)
- [`sf share link create`](#sf-share-link-create)
- [`sf share link list`](#sf-share-link-list)
- [`sf share link revoke LINK`](#sf-share-link-revoke-link)
- [`sf share link update LINK`](#sf-share-link-update-link)
- [`sf share list`](#sf-share-list)
- [`sf share password`](#sf-share-password)
- [`sf share password create`](#sf-share-password-create)
- [`sf share password list`](#sf-share-password-list)
- [`sf share password revoke CREDENTIAL`](#sf-share-password-revoke-credential)
- [`sf share password rotate CREDENTIAL`](#sf-share-password-rotate-credential)
- [`sf share people`](#sf-share-people)
- [`sf share people invite EMAIL`](#sf-share-people-invite-email)
- [`sf share people list`](#sf-share-people-list)
- [`sf share people remove PERSON`](#sf-share-people-remove-person)
- [`sf share people resend PERSON`](#sf-share-people-resend-person)
- [`sf share people update PERSON`](#sf-share-people-update-person)
- [`sf share request`](#sf-share-request)
- [`sf share request approve REQUEST`](#sf-share-request-approve-request)
- [`sf share request deny REQUEST`](#sf-share-request-deny-request)
- [`sf share request list`](#sf-share-request-list)
- [`sf share revoke GRANT`](#sf-share-revoke-grant)
- [`sf share token`](#sf-share-token)
- [`sf share token create`](#sf-share-token-create)
- [`sf share token list`](#sf-share-token-list)
- [`sf share token revoke CREDENTIAL`](#sf-share-token-revoke-credential)
- [`sf share token rotate CREDENTIAL`](#sf-share-token-rotate-credential)
- [`sf skills`](#sf-skills)
- [`sf skills install`](#sf-skills-install)
- [`sf skills remove`](#sf-skills-remove)
- [`sf skills status`](#sf-skills-status)
- [`sf source archive`](#sf-source-archive)
- [`sf source availability`](#sf-source-availability)
- [`sf source branch`](#sf-source-branch)
- [`sf source cat PATH`](#sf-source-cat-path)
- [`sf source commits apply`](#sf-source-commits-apply)
- [`sf source commits create`](#sf-source-commits-create)
- [`sf source commits inspect SHA`](#sf-source-commits-inspect-sha)
- [`sf source commits list`](#sf-source-commits-list)
- [`sf source diff`](#sf-source-diff)
- [`sf source import`](#sf-source-import)
- [`sf source list`](#sf-source-list)
- [`sf source merge SOURCE TARGET`](#sf-source-merge-source-target)
- [`sf source search PATTERN`](#sf-source-search-pattern)
- [`sf source tags create NAME`](#sf-source-tags-create-name)
- [`sf source tags list`](#sf-source-tags-list)
- [`sf spaces`](#sf-spaces)
- [`sf spaces archive`](#sf-spaces-archive)
- [`sf spaces check NAME`](#sf-spaces-check-name)
- [`sf spaces claim`](#sf-spaces-claim)
- [`sf spaces create`](#sf-spaces-create)
- [`sf spaces delete`](#sf-spaces-delete)
- [`sf spaces download`](#sf-spaces-download)
- [`sf spaces duplicate`](#sf-spaces-duplicate)
- [`sf spaces inspect`](#sf-spaces-inspect)
- [`sf spaces key rotate`](#sf-spaces-key-rotate)
- [`sf spaces list`](#sf-spaces-list)
- [`sf spaces restore`](#sf-spaces-restore)
- [`sf spaces transfer TEAM`](#sf-spaces-transfer-team)
- [`sf spaces update`](#sf-spaces-update)
- [`sf status`](#sf-status)
- [`sf storage [TARGET]`](#sf-storage-target)
- [`sf storage delete [OBJECT]`](#sf-storage-delete-object)
- [`sf storage download OBJECT`](#sf-storage-download-object)
- [`sf storage list [TARGET]`](#sf-storage-list-target)
- [`sf storage put FILE`](#sf-storage-put-file)
- [`sf switch [TEAM]`](#sf-switch-team)
- [`sf tags`](#sf-tags)
- [`sf tags apply FILE`](#sf-tags-apply-file)
- [`sf tags debug`](#sf-tags-debug)
- [`sf tags releases`](#sf-tags-releases)
- [`sf tags releases inspect ENVIRONMENT`](#sf-tags-releases-inspect-environment)
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
- [`sf teams defaults [ACCESS]`](#sf-teams-defaults-access)
- [`sf teams domains`](#sf-teams-domains)
- [`sf teams domains add DOMAIN`](#sf-teams-domains-add-domain)
- [`sf teams domains list`](#sf-teams-domains-list)
- [`sf teams domains remove DOMAIN`](#sf-teams-domains-remove-domain)
- [`sf teams invitations`](#sf-teams-invitations)
- [`sf teams invitations cancel INVITATION`](#sf-teams-invitations-cancel-invitation)
- [`sf teams invitations list`](#sf-teams-invitations-list)
- [`sf teams invitations resend INVITATION`](#sf-teams-invitations-resend-invitation)
- [`sf teams join [TEAM]`](#sf-teams-join-team)
- [`sf teams join-link`](#sf-teams-join-link)
- [`sf teams list`](#sf-teams-list)
- [`sf teams members`](#sf-teams-members)
- [`sf teams members invite EMAILS`](#sf-teams-members-invite-emails)
- [`sf teams members list`](#sf-teams-members-list)
- [`sf teams members remove MEMBER`](#sf-teams-members-remove-member)
- [`sf teams subteams`](#sf-teams-subteams)
- [`sf teams subteams create NAME`](#sf-teams-subteams-create-name)
- [`sf teams subteams delete SUBTEAM`](#sf-teams-subteams-delete-subteam)
- [`sf teams subteams list`](#sf-teams-subteams-list)
- [`sf teams subteams members`](#sf-teams-subteams-members)
- [`sf teams subteams members add SUBTEAM USER`](#sf-teams-subteams-members-add-subteam-user)
- [`sf teams subteams members list SUBTEAM`](#sf-teams-subteams-members-list-subteam)
- [`sf teams subteams members remove SUBTEAM USER`](#sf-teams-subteams-members-remove-subteam-user)
- [`sf teams subteams rename SUBTEAM NAME`](#sf-teams-subteams-rename-subteam-name)
- [`sf teams switch [TEAM]`](#sf-teams-switch-team)
- [`sf transfers accept TRANSFER`](#sf-transfers-accept-transfer)
- [`sf transfers cancel TRANSFER`](#sf-transfers-cancel-transfer)
- [`sf transfers inspect TRANSFER`](#sf-transfers-inspect-transfer)
- [`sf transfers list`](#sf-transfers-list)
- [`sf unlink`](#sf-unlink)
- [`sf users`](#sf-users)
- [`sf users delete USER`](#sf-users-delete-user)
- [`sf users inspect USER`](#sf-users-inspect-user)
- [`sf users list`](#sf-users-list)
- [`sf users reactivate USER`](#sf-users-reactivate-user)
- [`sf users revoke USER`](#sf-users-revoke-user)
- [`sf users sessions USER`](#sf-users-sessions-user)
- [`sf users settings`](#sf-users-settings)
- [`sf users suspend USER`](#sf-users-suspend-user)
- [`sf versions`](#sf-versions)
- [`sf versions delete [VERSION]`](#sf-versions-delete-version)
- [`sf versions inspect [VERSION]`](#sf-versions-inspect-version)
- [`sf versions list`](#sf-versions-list)
- [`sf whoami`](#sf-whoami)
- [`sf wp`](#sf-wp)
- [`sf zero`](#sf-zero)
- [`sf zero abilities`](#sf-zero-abilities)
- [`sf zero build`](#sf-zero-build)
- [`sf zero call ABILITY`](#sf-zero-call-ability)
- [`sf zero check`](#sf-zero-check)
- [`sf zero dev`](#sf-zero-dev)
- [`sf zero import SOURCE INPUT`](#sf-zero-import-source-input)
- [`sf zero init [NAME]`](#sf-zero-init-name)
- [`sf zero migrate`](#sf-zero-migrate)
- [`sf zero queries`](#sf-zero-queries)
- [`sf zero types`](#sf-zero-types)

## `sf access`

Revoke visitor sessions.

```text
USAGE
  $ sf access [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Revoke visitor sessions.

  Revoke active visitor sessions. Use `sf share` to manage who can open a space.
```

## `sf access sessions revoke`

Revoke all visitor sessions.

```text
USAGE
  $ sf access sessions revoke [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Revoke all visitor sessions.

  Revoke every active private-open, share-link, and signed-in visitor session for the space.

EXAMPLES
  Revoke every visitor session on the space.

    $ sf access sessions revoke --space docs
```

## `sf activity`

Show activity events.

```text
USAGE
  $ sf activity [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--all] [--code <value>]
    [--since <value>] [--until <value>] [--limit <NUMBER>] [--cursor <CURSOR>]

FLAGS
  --all              Read account-wide activity instead of a single space.
  --code=<value>     Filter by activity taxonomy code, for example version.promoted.
  --cursor=<CURSOR>  Pagination cursor from a previous response.
  --limit=<NUMBER>   Maximum number of events to return (default 50, max 100).
  --since=<value>    Only events at or after this ISO timestamp.
  --until=<value>    Only events before this ISO timestamp.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf agents init [DIRECTORY] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [--agent generic|claude-code]

ARGUMENTS
  [DIRECTORY]  Directory that will contain AGENTS.md and CLAUDE.md. Defaults to the current directory.

FLAGS
  --agent=<option>  [default: generic] Instruction-file target.
                    <options: generic|claude-code>

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf analytics [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--window 48h|7d|30d]

FLAGS
  --window=<option>  [default: 7d] Analytics window.
                     <options: 48h|7d|30d>

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Print runtime analytics.

  Print runtime analytics series.

EXAMPLES
  Print the 7-day analytics series for a space.

    $ sf analytics --space docs

  Use a 30-day window.

    $ sf analytics --space docs --window 30d
```

## `sf api METHOD [PATH]`

Call the Spacefast API directly.

```text
USAGE
  $ sf api METHOD [PATH] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [--experimental] [-i <value>] [--idempotency-key <value>] [--include]
    [--output <value> | --raw-stdout] [--paginate]

ARGUMENTS
  METHOD  HTTP method (GET, POST, PATCH, PUT, DELETE) or request path.
  [PATH]  Request path, for example /v1/spaces/{spaceId}/versions.

FLAGS
  -i, --input=<value>            JSON request body: a literal string, @file, or - for stdin.
      --experimental             Allow experimental API operations enabled for your account or team.
      --idempotency-key=<value>  Replay-safe logical-attempt key for retryable mutations.
      --include                  Write HTTP status and safe response headers to stderr.
      --output=<value>           Write a non-JSON response body to a file.
      --paginate                 Emit every page of a declared cursor-list GET as JSON Lines.
      --raw-stdout               Write a non-JSON response body to stdout.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Call the Spacefast API directly.

  Send a signed request to the public API using the resolved profile credentials. Successful JSON responses print
  verbatim. Failures print the CLI error envelope to stderr. Non-JSON responses need --output or --raw-stdout. This is a
  raw request tool: it does not open browser approval, save continuations, or replay approved mutations. For API key
  creation, use `sf api-keys create --name ci --preset ci_deploy` instead of POST /v1/api-keys. When a device login
  requires approval, that command saves the continuation, waits for a person to approve in the browser, and resumes the
  same request. If interrupted, re-run it with the same flags, profile, team, and credential. --yes does not grant
  browser approval. Use the intended name, preset, and team; --json masks the one-time secret.

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
  $ sf api-keys [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage API keys.

  Manage API keys.
```

## `sf api-keys create`

Create an API key.

```text
USAGE
  $ sf api-keys create [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [--open] [--name <value>] [--preset
    ci_deploy|space_publisher|space_admin|domain_manager|team_admin|billing_viewer|partner_admin]

FLAGS
  --name=<value>     Human-readable API key name.
  --preset=<option>  [default: space_publisher] Access preset for the new API key.
                     <options:
                     ci_deploy|space_publisher|space_admin|domain_manager|team_admin|billing_viewer|partner_admin>

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

BROWSER FLAGS
  --[no-]open  Open the browser. --no-open prints the link instead.

DESCRIPTION
  Create an API key.

  Create an API key. A device login opens browser approval before the CLI prints the one-time secret.

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
  $ sf api-keys list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--limit <NUMBER>]

FLAGS
  --limit=<NUMBER>  Maximum number of API keys to return (default 50, max 100).

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List API keys.

  List API keys for the selected team.

ALIASES
  $ sf api-keys ls

EXAMPLES
  List API keys for the selected team.

    $ sf api-keys list
```

## `sf api-keys revoke KEY`

Revoke an API key.

```text
USAGE
  $ sf api-keys revoke KEY [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

ARGUMENTS
  KEY  API key id.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Revoke an API key.

  Revoke an API key.

EXAMPLES
  Revoke an API key by ID.

    $ sf api-keys revoke key_123
```

## `sf apply`

Apply saved changes to the live runtime.

```text
USAGE
  $ sf apply [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--wait] [--wait-timeout
    <value>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf auth [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Authenticate the CLI.

  Authenticate the CLI with Spacefast.

EXAMPLES
  $ sf login
```

## `sf auth as NAME`

Set the local dev guest identity.

```text
USAGE
  $ sf auth as NAME [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [--dir <value>]

ARGUMENTS
  NAME  Local guest name.

FLAGS
  --dir=<value>  [default: .] Local Zero project directory.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

```

## `sf auth reset`

Clear the local dev guest identity.

```text
USAGE
  $ sf auth reset [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [--dir <value>]

FLAGS
  --dir=<value>  [default: .] Local Zero project directory.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf build [DIR] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [--root-directory <value>] [--install-directory <value>]
    [--install-command <value>] [--build-command <value>] [--output-directory <value>] [--env-file <value>...]
    [--ignored-build-command <value>] [--skip-install] [--skip-build] [--prebuilt] [--output <value>] [--dry-run]
    [--stream]

ARGUMENTS
  [DIR]  Project directory to build. Defaults to the current directory.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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

  Detect build settings, run the build, and pack its output. A Zero app with no framework build compiles into the
  publish directory instead.

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
  $ sf builds cancel BUILD [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y]

ARGUMENTS
  BUILD  Build ID (bld_...).

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Cancel a build.

  Cancel a build. Idempotent: a build already in a terminal state is returned unchanged.

EXAMPLES
  $ sf builds cancel bld_123
```

## `sf builds detect [DIR]`

Detect framework and build settings.

```text
USAGE
  $ sf builds detect [DIR] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--local]
    [--connection-type connected|hosted] [--ref <value>] [--root-directory <value>] [--apply-best]

ARGUMENTS
  [DIR]  Local project directory to detect. Defaults to the current directory when no space is selected.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

BUILD FLAGS
  --apply-best              Save the highest-ranked detected app candidate as repository build settings.
  --local                   Inspect local files even when the current project is linked to a space.
  --root-directory=<value>  App root directory to inspect.

REPOSITORY FLAGS
  --connection-type=<option>  [default: connected] Repository connection type.
                              <options: connected|hosted>
  --ref=<value>               Git ref to inspect.

DESCRIPTION
  Detect framework and build settings.

  Detect the framework and build settings for a local project or a space's repository connection. Pass a directory or
  --local to inspect local files without authentication. With a selected space, inspects its repository and optionally
  saves the best candidate.

EXAMPLES
  Detect local build settings without installing or building.

    $ sf builds detect ./apps/web

  Show detected framework and build settings for the repository connection.

    $ sf builds detect --space docs

  Detect and save the best build settings for a subdirectory.

    $ sf builds detect --space docs --root-directory apps/web --apply-best
```

## `sf builds inspect BUILD`

Show a build.

```text
USAGE
  $ sf builds inspect BUILD [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y]

ARGUMENTS
  BUILD  Build ID (bld_...).

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Show a build.

  Fetch a build by id.

EXAMPLES
  Show a build by ID.

    $ sf builds inspect bld_123
```

## `sf builds list`

List builds.

```text
USAGE
  $ sf builds list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--limit <NUMBER>] [--cursor
    <CURSOR>]

FLAGS
  --cursor=<CURSOR>  Pagination cursor from a previous response.
  --limit=<NUMBER>   Maximum number of builds to return (default 20, max 100).

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List builds.

  List a space's builds, newest first.

ALIASES
  $ sf builds ls

EXAMPLES
  List recent builds for a space.

    $ sf builds list --space docs

  Show only the five most recent builds.

    $ sf builds list --space docs --limit 5
```

## `sf builds logs BUILD`

Print build logs.

```text
USAGE
  $ sf builds logs BUILD [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [--limit <NUMBER>] [--cursor <CURSOR>] [--wait-timeout <value> -f]

ARGUMENTS
  BUILD  Build ID (bld_...).

FLAGS
  -f, --follow                Follow live build logs until the build reaches a terminal state.
      --cursor=<CURSOR>       Pagination cursor from a previous response.
      --limit=<NUMBER>        Maximum number of log lines.
      --wait-timeout=<value>  With --follow: stop following after this many seconds and exit 0.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Print build logs.

  Print build runner log lines, newest first.

EXAMPLES
  Print recent log lines for a build.

    $ sf builds logs bld_123

  Stream logs until the build finishes.

    $ sf builds logs bld_123 --follow
```

## `sf builds retry BUILD`

Retry a terminal build.

```text
USAGE
  $ sf builds retry BUILD [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y]

ARGUMENTS
  BUILD  Build ID (bld_...) to retry.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Retry a terminal build.

  Retry a terminal build with the same input, settings, and target.

EXAMPLES
  $ sf builds retry bld_123
```

## `sf builds upload refresh BUILD`

Refresh source archive upload.

```text
USAGE
  $ sf builds upload refresh BUILD [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y]

ARGUMENTS
  BUILD  Build ID (bld_...) waiting for source archive upload.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Refresh source archive upload.

  Refresh the upload instruction for a build waiting on its source archive.

EXAMPLES
  Refresh the source archive upload instruction for a build.

    $ sf builds upload refresh bld_123
```

## `sf channels`

Manage channels.

```text
USAGE
  $ sf channels [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage channels.

  List channels, set how each promotes, and inspect promotion history.
```

## `sf channels history [NAME]`

Show channel history.

```text
USAGE
  $ sf channels history [NAME] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

ARGUMENTS
  [NAME]  Channel name. Defaults to `live`.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Show channel history.

  Show what this channel has gone live with, newest first.

EXAMPLES
  Show promotion history for the live channel.

    $ sf channels history --space docs

  Name the channel explicitly; `live` is the only one today.

    $ sf channels history live --space docs
```

## `sf channels list`

List channels.

```text
USAGE
  $ sf channels list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List channels.

  List channels for a space and where each one points.

ALIASES
  $ sf channels ls

EXAMPLES
  List channels for the docs space.

    $ sf channels list --space docs
```

## `sf channels set NAME`

Set a channel's promotion policy.

```text
USAGE
  $ sf channels set NAME --promotion auto|manual [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color]
    [--non-interactive] [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

ARGUMENTS
  NAME  Channel name (live).

FLAGS
  --promotion=<option>  (required) Promotion policy for the channel.
                        <options: auto|manual>

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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

  Read, start, reply to, react to, and resolve Space comment threads, and set where Comments run.
```

## `sf comments create`

Start a comment thread.

```text
USAGE
  $ sf comments create --body <value> [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--mention
    <value>...] [--page <value> | --file <value>] [--selector <value> | ] [--lines <value> ] [--version <value>]
    [--idempotency-key <value>]

FLAGS
  --body=<value>             (required) What the comment says.
  --idempotency-key=<value>  Stable key for safely retrying this comment.
  --mention=<value>...       Teammate to notify, by email, name, or user ID. Repeat for more.
  --version=<value>          Version ID, ref, or number to comment on. Defaults to the live version.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

ANCHOR FLAGS
  --file=<value>      File path to comment on, for example src/app.js.
  --lines=<value>     Line or range in --file, for example 7 or 7-14.
  --page=<value>      Page path to comment on, for example /pricing. Defaults to /.
  --selector=<value>  CSS selector of the element to pin the comment to.

DESCRIPTION
  Start a comment thread.

  Start a comment thread on a page, an element on a page, or a file. Threads land on the live version unless --version
  picks another.

EXAMPLES
  Comment on a whole page.

    $ sf comments create --page /pricing --body "The annual price is wrong."

  Pin a comment to an element.

    $ sf comments create --page / --selector "#hero-title" --body "Too long for mobile."

  Comment on lines of a file.

    $ sf comments create --file src/app.js --lines 7-14 --body "This loop never ends."

  Start a thread and notify a teammate.

    $ sf comments create --page /about.html --body "Can you check the photos?" --mention milo@example.com
```

## `sf comments export`

Export comments.

```text
USAGE
  $ sf comments export [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--version <value>] [--format
    markdown|json] [--status open|resolved]

FLAGS
  --format=<option>  [default: markdown] Export format.
                     <options: markdown|json>
  --status=<option>  Only open or only resolved threads.
                     <options: open|resolved>
  --version=<value>  Only threads left on this version ID, ref, or number.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Export comments.

  Export comment threads for agents and scripts.

EXAMPLES
  Export every open thread in the space as markdown.

    $ sf comments export --status open --format markdown

  Export open threads left on version v3 as JSON.

    $ sf comments export --version v3 --status open --format json
```

## `sf comments inspect COMMENT`

Show a comment.

```text
USAGE
  $ sf comments inspect COMMENT [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

ARGUMENTS
  COMMENT  Thread id, for example cmt_123.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Show a comment.

  Show one comment thread with its replies and reactions. Reading it does not mark it read.

EXAMPLES
  $ sf comments inspect cmt_123
```

## `sf comments list`

List comments.

```text
USAGE
  $ sf comments list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--status open|resolved]
    [--unread] [--path <value>] [--version <value>] [--author <value>] [--query <value>] [--limit <NUMBER>]

FLAGS
  --author=<value>   Only threads started by this author name.
  --limit=<NUMBER>   Maximum threads to return.
  --path=<value>     Only threads on this page or file path, for example /pricing.
  --query=<value>    Only threads whose text contains this.
  --status=<option>  Only open or only resolved threads.
                     <options: open|resolved>
  --unread           Only threads with comments you haven't read.
  --version=<value>  Only threads left on this version ID, ref, or number.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List comments.

  List comment threads across a Space. Listing never marks anything read. Unread threads carry a ● in the first column.

ALIASES
  $ sf comments ls

EXAMPLES
  Show threads with comments you haven't read.

    $ sf comments list --unread

  List open threads on the pricing page across versions.

    $ sf comments list --status open --path /pricing

  List threads left on version v3.

    $ sf comments list --version v3
```

## `sf comments react COMMENT EMOJI`

React to a comment.

```text
USAGE
  $ sf comments react COMMENT EMOJI [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

ARGUMENTS
  COMMENT  Thread id, for example cmt_123.
  EMOJI    Reaction: thumbsup, heart, tada, eyes, rocket, pray, 👍, ❤️, 🎉, 👀, 🚀, 🙏.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  React to a comment.

  React to a comment thread with an emoji.

EXAMPLES
  Add 👍 by name.

    $ sf comments react cmt_123 thumbsup

  Add 🎉 directly.

    $ sf comments react cmt_123 🎉
```

## `sf comments read COMMENT`

Mark a comment read.

```text
USAGE
  $ sf comments read COMMENT [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

ARGUMENTS
  COMMENT  Thread id, for example cmt_123.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Mark a comment read.

  Mark a comment thread read for you. Reading a thread with `comments get` leaves it unread.

EXAMPLES
  Clear a thread from `comments list --unread`.

    $ sf comments read cmt_123
```

## `sf comments reopen COMMENT`

Reopen a comment thread.

```text
USAGE
  $ sf comments reopen COMMENT [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

ARGUMENTS
  COMMENT  Thread id, for example cmt_123.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Reopen a comment thread.

  Reopen a resolved comment thread.

EXAMPLES
  Put a resolved thread back on the open list.

    $ sf comments reopen cmt_123
```

## `sf comments reply COMMENT`

Reply to a comment.

```text
USAGE
  $ sf comments reply COMMENT --body <value> [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color]
    [--non-interactive] [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]
    [--mention <value>...] [--idempotency-key <value>]

ARGUMENTS
  COMMENT  Thread id, for example cmt_123.

FLAGS
  --body=<value>             (required) What the reply says.
  --idempotency-key=<value>  Stable key for safely retrying this reply.
  --mention=<value>...       Teammate to notify, by email, name, or user ID. Repeat for more.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Reply to a comment.

  Reply to a comment thread.

EXAMPLES
  Reply to a thread.

    $ sf comments reply cmt_123 --body "Fixed in v4."

  Reply and notify a teammate.

    $ sf comments reply cmt_123 --body "Over to you." --mention milo@example.com
```

## `sf comments resolve COMMENT`

Resolve a comment thread.

```text
USAGE
  $ sf comments resolve COMMENT [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

ARGUMENTS
  COMMENT  Thread id, for example cmt_123.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Resolve a comment thread.

  Mark a comment thread resolved. It leaves the open list but keeps every reply; `comments reopen` brings it back.

EXAMPLES
  Resolve a thread once the fix is live.

    $ sf comments resolve cmt_123
```

## `sf comments settings`

Show Comments settings.

```text
USAGE
  $ sf comments settings [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf comments settings set [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--surface
    off|previews|everywhere] [--embed-allow <value>...] [--embed-remove <value>...]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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

## `sf comments unreact COMMENT EMOJI`

Remove your reaction.

```text
USAGE
  $ sf comments unreact COMMENT EMOJI [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

ARGUMENTS
  COMMENT  Thread id, for example cmt_123.
  EMOJI    Reaction to take back: thumbsup, heart, tada, eyes, rocket, pray, 👍, ❤️, 🎉, 👀, 🚀, 🙏.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Remove your reaction.

  Take back your emoji reaction on a comment thread.

EXAMPLES
  Remove your 👍.

    $ sf comments unreact cmt_123 thumbsup
```

## `sf connectors`

Manage connectors.

```text
USAGE
  $ sf connectors [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage connectors.

  Everything about a team's connectors: register tool sources (OpenAPI specs, GraphQL endpoints, remote MCP servers),
  connect accounts, decide policies, and run tools.
```

## `sf connectors bind ROLE CONNECTION`

Bind an app's connector role to a connection.

```text
USAGE
  $ sf connectors bind ROLE CONNECTION [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [--space <SPACE>] [-T <TEAM>]

ARGUMENTS
  ROLE        Connector role.
  CONNECTION  Connection id.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

```

## `sf connectors bindings`

List a Space's connector roles and bindings.

```text
USAGE
  $ sf connectors bindings [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [--space <SPACE>] [-T <TEAM>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

```

## `sf connectors connections`

Manage connections.

```text
USAGE
  $ sf connectors connections [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage connections.

  Connect accounts to a team's connectors and inspect the ones you can already use. Credentials are write-only: they go
  in here and no endpoint hands them back.
```

## `sf connectors connections connect CONNECTOR`

Connect an account.

```text
USAGE
  $ sf connectors connections connect CONNECTOR [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--api-key <value>] [--field <value>...] [--owner
    team|personal] [--name <value>] [--description <value>] [--auth-method <value>]

ARGUMENTS
  CONNECTOR  Connector slug to connect.

FLAGS
  --auth-method=<value>  Which of the connector's auth methods to use, when more than one applies.
  --description=<value>  Agent-visible note on what this connection is for.
  --name=<value>         What to call it. Defaults to the connector's title.
  --owner=<option>       Share it with the team (default), or keep it yours within this team.
                         <options: team|personal>

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

CREDENTIAL FLAGS
  --api-key=<value>   API key for connectors that take one. Never echoed back, in any output mode.
  --field=<value>...  name=value for a connector that asks for several values. Repeat per field.

DESCRIPTION
  Connect an account.

  Connect an account in one call. The answer is one of three: connected, an authorization URL to open in a browser, or
  the fields to collect and pass back. Credentials are sealed on arrival and never returned.

EXAMPLES
  Connect with an API key the team shares.

    $ sf connectors connections connect stripe --api-key $STRIPE_KEY

  Start an OAuth connection that only you can use.

    $ sf connectors connections connect linear --owner personal
```

## `sf connectors connections disconnect CONNECTION`

Disconnect a connection.

```text
USAGE
  $ sf connectors connections disconnect CONNECTION [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  CONNECTION  Connection id, for example cxn_abc123.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Disconnect a connection.

  Disconnect a connection: the stored credential is purged, the row tombstones, and anything addressing it stops
  working.

EXAMPLES
  Disconnect without prompting.

    $ sf connectors connections disconnect cxn_abc123 --yes
```

## `sf connectors connections health CONNECTION`

Probe a connection.

```text
USAGE
  $ sf connectors connections health CONNECTION [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  CONNECTION  Connection id, for example cxn_abc123.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Probe a connection.

  Probe a connection against the provider and report what came back. It only reports: an expired token refreshes on its
  own.

EXAMPLES
  Check one connection right now.

    $ sf connectors connections health cxn_abc123
```

## `sf connectors connections list`

List connections.

```text
USAGE
  $ sf connectors connections list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--owner team|personal|any] [--connector <value>] [--status
    pending_authorization|active|degraded|needs_reauth|revoked] [--include-revoked] [--limit <NUMBER>]

FLAGS
  --connector=<value>  Show only connections of this connector.
  --include-revoked    Include disconnected connections.
  --limit=<NUMBER>     Maximum connections to return (default 50).
  --owner=<option>     Whose connections to list. `any` is everything you may use (default).
                       <options: team|personal|any>
  --status=<option>    Show only connections in this state.
                       <options: pending_authorization|active|degraded|needs_reauth|revoked>

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List connections.

  List the connections this credential may use: the team's shared ones plus your own personal ones.

ALIASES
  $ sf connectors connections ls

EXAMPLES
  List usable connections.

    $ sf connectors connections list

  List only your own connections in this team.

    $ sf connectors connections list --owner personal
```

## `sf connectors connections reconnect CONNECTION`

Reconnect an account.

```text
USAGE
  $ sf connectors connections reconnect CONNECTION [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--api-key <value>] [--field <value>...]

ARGUMENTS
  CONNECTION  Connection id, for example cxn_abc123.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf connectors connections refresh CONNECTION [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  CONNECTION  Connection id, for example cxn_abc123.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Re-sync a connection's tools.

  Re-resolve the tool catalog behind a connection, so tools the provider added or dropped show up. Token refresh happens
  on its own; this is about the tools.

EXAMPLES
  Pick up the provider's newest tools.

    $ sf connectors connections refresh cxn_abc123
```

## `sf connectors connections update CONNECTION`

Edit a connection.

```text
USAGE
  $ sf connectors connections update CONNECTION [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--serving] [--name <value>] [--description <value>]

ARGUMENTS
  CONNECTION  Connection id, for example cxn_abc123.

FLAGS
  --description=<value>  Replacement agent-visible note. Pass an empty string to clear it.
  --name=<value>         Replacement label.
  --[no-]serving         Allow bound sites to act as this team account for every visitor.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Edit a connection.

  Rename a connection, change its agent-visible note, or grant sites access. Credentials are immutable: to rotate one,
  reconnect.

EXAMPLES
  Rename a connection.

    $ sf connectors connections update cxn_abc123 --name "Stripe (prod)"

  Tell agents what it is for.

    $ sf connectors connections update cxn_abc123 --description "Billing, production"
```

## `sf connectors create TARGET`

Register a connector.

```text
USAGE
  $ sf connectors create TARGET [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--slug <value>] [--title <value>] [--description <value>]

ARGUMENTS
  TARGET  Spec, endpoint, or MCP URL to detect, or a catalog slug to add straight from the catalog.

FLAGS
  --description=<value>  Agent-visible note on what this connector reaches.
  --slug=<value>         Connector slug. Defaults to the detected or catalog slug.
  --title=<value>        Display name. Defaults to what the source calls itself.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Register a connector.

  Register a connector. A URL is probed first and registered as whatever the detectors recognize; a catalog slug skips
  the probe and adds the curated row.

EXAMPLES
  Detect what is behind a URL and register it.

    $ sf connectors create https://api.example.com/openapi.json

  Add a catalog row by slug.

    $ sf connectors create linear --slug linear
```

## `sf connectors delete CONNECTOR`

Delete a connector.

```text
USAGE
  $ sf connectors delete CONNECTOR [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  CONNECTOR  Connector slug.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Delete a connector.

  Delete a connector and its tools. The API refuses while any live connection still uses it — disconnect those first.

ALIASES
  $ sf connectors rm
  $ sf connectors del

EXAMPLES
  Remove a connector without prompting.

    $ sf connectors delete linear --yes
```

## `sf connectors detect URL`

Detect what is behind a URL.

```text
USAGE
  $ sf connectors detect URL [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  URL  Any URL a service published.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Detect what is behind a URL.

  Probe a URL and report the connectors behind it, most confident first. The URL worth registering is often not the one
  you pasted.

EXAMPLES
  See what could be registered from a URL.

    $ sf connectors detect https://api.example.com
```

## `sf connectors list`

List connectors.

```text
USAGE
  $ sf connectors list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--query <value>] [--source openapi|graphql|mcp] [--limit <NUMBER>]

FLAGS
  --limit=<NUMBER>   Maximum connectors to return (default 50).
  --query=<value>    Filter over slug, title, and description.
  --source=<option>  Show only connectors built from this kind of source.
                     <options: openapi|graphql|mcp>

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List connectors.

  List the connectors this team registered, with how many connections you can use on each.

ALIASES
  $ sf connectors ls

EXAMPLES
  List the team's connectors.

    $ sf connectors list

  List only connectors backed by an MCP server.

    $ sf connectors list --source mcp
```

## `sf connectors policies`

Manage connector policy rules.

```text
USAGE
  $ sf connectors policies [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage connector policy rules.

  Decide what an agent may call. A rule is an address pattern — `*`, `<connector>/*`, `<connectionId>/*`, or
  `<connectionId>/<tool>` — and what happens when it matches. The most specific pattern wins, and team rules are a floor
  personal rules cannot loosen.
```

## `sf connectors policies add PATTERN`

Add a policy rule.

```text
USAGE
  $ sf connectors policies add PATTERN [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--action approve|require_approval|block] [--owner
    team|personal]

ARGUMENTS
  PATTERN  `*`, `<connector>/*`, `<connectionId>/*`, or `<connectionId>/<tool>`. Quote it — the shell eats a bare `*`.

FLAGS
  --action=<option>  Run the call, park it for a person, or refuse it.
                     <options: approve|require_approval|block>
  --owner=<option>   Apply it to the whole team (default), or only to your own calls in this team.
                     <options: team|personal>

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf connectors policies explain ADDRESS [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  ADDRESS  Tool address: `<connectionId>/<tool>`.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Explain what happens for one address.

  Answer what happens if you call one address, and why, without calling it. Reports the effect, the rule that decided
  it, and the reason in a sentence.

EXAMPLES
  Check one tool before an agent hits it.

    $ sf connectors policies explain cxn_abc123/charges.create
```

## `sf connectors policies list`

List policy rules.

```text
USAGE
  $ sf connectors policies list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List policy rules.

  List the rules that decide what an agent may call: the team's, plus your own personal ones. An address nothing matches
  falls through to the connector's own default.

ALIASES
  $ sf connectors policies ls

EXAMPLES
  List the rules in force.

    $ sf connectors policies list
```

## `sf connectors policies remove RULE`

Remove a policy rule.

```text
USAGE
  $ sf connectors policies remove RULE [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  RULE  Rule id, from `sf connectors policies list`.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Remove a policy rule.

  Remove a rule. Whatever it decided falls through to the next rule that matches, or to the connector's own default — so
  removing a block can open a tool back up.

ALIASES
  $ sf connectors policies rm

EXAMPLES
  Remove a rule without prompting.

    $ sf connectors policies remove pol_abc123 --yes
```

## `sf connectors policies set RULE`

Change a policy rule's action.

```text
USAGE
  $ sf connectors policies set RULE [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--action approve|require_approval|block]

ARGUMENTS
  RULE  Rule id, from `sf connectors policies list`.

FLAGS
  --action=<option>  Run the call, park it for a person, or refuse it.
                     <options: approve|require_approval|block>

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Change a policy rule's action.

  Change what a rule does. Its pattern and owner are fixed — remove it and add the one you meant.

EXAMPLES
  Turn a parked rule into a refusal.

    $ sf connectors policies set pol_abc123 --action block
```

## `sf connectors run [CODE]`

Run a connector tool or a program.

```text
USAGE
  $ sf connectors run [CODE] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--tool <value>] [--args <value>] [--wait <value>]
    [--idempotency-key <value>] [--deny-unattended]

ARGUMENTS
  [CODE]  A program to run in the sandbox. It may call any tool this credential is granted. Omit it when using --tool.

FLAGS
  --args=<value>  JSON object of tool arguments. Accepts @file or - for stdin.
  --tool=<value>  Tool address: `<connectionId>/<tool>`, or `<connector>/<tool>` when unambiguous.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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

## `sf connectors run inspect RUN`

Read one run.

```text
USAGE
  $ sf connectors run inspect RUN [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  RUN  Run id, for example cxr_abc123.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Read one run.

  Read one run: its result, the problem document that explains a failure, or the approval it is parked on. This is how a
  `running` answer is polled.

EXAMPLES
  Check where a run got to.

    $ sf connectors run inspect cxr_abc123
```

## `sf connectors run list`

List runs.

```text
USAGE
  $ sf connectors run list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--status running|awaiting_approval|succeeded|failed|expired]
    [--connection <value>] [--limit <NUMBER>]

FLAGS
  --connection=<value>  Show only runs that touched this connection.
  --limit=<NUMBER>      Maximum runs to return (default 50).
  --status=<option>     Show only runs in this state.
                        <options: running|awaiting_approval|succeeded|failed|expired>

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf connectors run resume RUN [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--accept] [--deny] [--cancel] [--content <value>]

ARGUMENTS
  RUN  Run id, for example cxr_abc123.

FLAGS
  --accept           Approve the parked call.
  --cancel           Abandon the run entirely.
  --content=<value>  JSON object of values the paused call asked for. Accepts @file or - for stdin.
  --deny             Refuse the parked call; the run reports the refusal.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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

Remove a connector role binding.

```text
USAGE
  $ sf connectors unbind ROLE [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [--space <SPACE>] [-T <TEAM>]

ARGUMENTS
  ROLE  Connector role.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

```

## `sf content dashboard [TARGET]`

Open a space's content dashboard.

```text
USAGE
  $ sf content dashboard [TARGET] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--screen collections|users | --path
    <value>] [--open | --show-secret]

ARGUMENTS
  [TARGET]  Space ID, slug, live URL, or domain. Defaults to the linked space.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

BROWSER FLAGS
  --[no-]open  Open the browser. --no-open prints the link instead.

DASHBOARD FLAGS
  --path=<value>     Classic WordPress page to land on, within /wp-admin/.
  --screen=<option>  Dashboard screen to land on. Default: collections.
                     <options: collections|users>
  --show-secret      Print the one-use sign-in link instead of opening it.

DESCRIPTION
  Open a space's content dashboard.

  Sign in to the space's WordPress content dashboard with a one-use link. The link needs no password, signs you in with
  the WordPress role your access earns, and expires 10 minutes after it is created. In a terminal it opens in your
  browser. An agent passes --open to open it in this machine's browser without printing it; --show-secret prints it
  instead. Exits 2 with `feature_unavailable` when managed content is not available for the team.

EXAMPLES
  Open the linked space's content dashboard.

    $ sf content dashboard

  Open the Users screen of space `docs`.

    $ sf content dashboard docs --screen users

  From an agent: open the dashboard in the user's browser. The receipt withholds the link.

    $ sf content dashboard --open --json

  Print the one-use sign-in link when this machine has no browser.

    $ sf content dashboard --show-secret --json
```

## `sf continue`

Continue publishing after claim.

```text
USAGE
  $ sf continue [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf crons [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage scheduled jobs.

  Inspect and exercise a space's scheduled jobs.
```

## `sf crons list`

List scheduled jobs.

```text
USAGE
  $ sf crons list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List scheduled jobs.

  List the scheduled jobs the live version declares, with the last failure reported for each. Crons are declared in
  spacefast.config.ts, so publishing is how you change them.

ALIASES
  $ sf crons ls

EXAMPLES
  List scheduled jobs for the docs space.

    $ sf crons list --space docs
```

## `sf crons run TARGET`

Run a scheduled job now.

```text
USAGE
  $ sf crons run TARGET [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--header
    <value>...]

ARGUMENTS
  TARGET  Cron key or path, as shown by `sf crons list`.

FLAGS
  --header=<value>...  Request header as 'name: value'. Repeat for multiple headers.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf db [TARGET] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--local-url
    <value>] [--port <value>]

ARGUMENTS
  [TARGET]  Space ID, slug, live URL, or domain. Defaults to the linked space.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf db console [TARGET] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [--open] [-T <TEAM>] [--space <SPACE>]
    [--show-secret]

ARGUMENTS
  [TARGET]  Space ID, slug, live URL, or domain. Defaults to the linked space.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

BROWSER FLAGS
  --[no-]open  Open the browser. --no-open prints the link instead.

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
  $ sf db dump [TARGET] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--local-url
    <value>] [--port <value>] [--table <value>] [--limit <value>]

ARGUMENTS
  [TARGET]  Space ID, slug, live URL, or domain. Defaults to the linked space.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

RUNTIME FLAGS
  --limit=<value>      Maximum rows per table (default 25, max 100). 0 prints row counts only.
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

  Count every table's rows.

    $ sf db dump --limit 0
```

## `sf db export [TARGET]`

Export a complete database backup.

```text
USAGE
  $ sf db export [TARGET] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--local-url
    <value>] [--port <value>] [--output <value>]

ARGUMENTS
  [TARGET]  Space ID, slug, live URL, or domain. Defaults to the linked space.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

RUNTIME FLAGS
  --local-url=<value>  Use a local `sf dev` server instead of the live version.
  --port=<value>       Local `sf dev` server port; shorthand for --local-url http://127.0.0.1:<port>.

OUTPUT FLAGS
  --output=<value>  Backup file path (default spacefast-backup-<space>-<timestamp>.json).

DESCRIPTION
  Export a complete database backup.

  Export every declared table to one versioned JSON backup. Rows are read in stable keyset pages and the destination is
  replaced only after the complete export succeeds.

EXAMPLES
  Export the linked space.

    $ sf db export

  Export a selected space to a named file.

    $ sf db export docs --output ./docs-backup.json

  Export a running local Zero app.

    $ sf db export --port 4173
```

## `sf db list [TARGET]`

List database tables and columns.

```text
USAGE
  $ sf db list [TARGET] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--local-url
    <value>] [--port <value>]

ARGUMENTS
  [TARGET]  Space ID, slug, live URL, or domain. Defaults to the linked space.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

RUNTIME FLAGS
  --local-url=<value>  Use a local `sf dev` server instead of the live version.
  --port=<value>       Local `sf dev` server port; shorthand for --local-url http://127.0.0.1:<port>.

ALIASES
  $ sf db ls
```

## `sf db migrate [SOURCE]`

Apply database schema migrations.

```text
USAGE
  $ sf db migrate [SOURCE] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--previous-artifact
    <value>] [--drop | --rename]

ARGUMENTS
  [SOURCE]  [default: .] App source directory.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

RUNTIME FLAGS
  --drop                       Preview drop operations in the source plan; does not apply that plan.
  --previous-artifact=<value>  Diff against this artifact or finalize payload instead of the live schema.
  --rename                     Preview rename operations in the source plan; does not apply that plan.

DESCRIPTION
  Apply database schema migrations.

  Apply the live version's schema migrations, and report what this source tree would change on top of them. Source plans
  are previews only. Build and publish support additive source changes; destructive and rename source migrations are
  unsupported. Zero apps only: a worker declares no schema.

EXAMPLES
  Re-apply the live app's migration plan.

    $ sf db migrate

  Preview destructive source operations without applying them.

    $ sf db migrate --drop
```

## `sf design`

Generate design files from DESIGN.md.

```text
USAGE
  $ sf design [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Generate design files from DESIGN.md.

  Generate committed presentation files (theme.json and _layout.html) from an authoring-time DESIGN.md.
```

## `sf design generate`

Generate theme and layout files from DESIGN.md.

````text
USAGE
  $ sf design generate [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [--force]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXECUTION FLAGS
  --force  Overwrite existing generated files.

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
  $ sf dev [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [--port <value>] [--dir <value>] [--host <value>] [--allow-network] [--state-backend
    memory|sqlite] [--watch] [--watch-interval <value>] [--dry-run]

FLAGS
  --dir=<value>   [default: .] Project directory.
  --port=<value>  [default: 4173] Preview port.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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

  Run this project locally. A zero runtime starts the Zero dev server; anything else previews Pages with sample data and
  the publish-time expander.
```

## `sf dev instances`

Run multiple isolated copies of a Zero app.

```text
USAGE
  $ sf dev instances [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [--dir <value>] [--count <value>] [--base-port <value>] [--dry-run]

FLAGS
  --base-port=<value>  [default: 4173] First instance port.
  --count=<value>      [default: 20] Number of instances.
  --dir=<value>        [default: .] Zero project directory.
  --dry-run            Print the ports without starting servers.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Run multiple isolated copies of a Zero app.

  Start local servers on consecutive ports. Each has its own in-memory database. Source is compiled at startup; restart
  the command to rebuild.
```

## `sf docs [QUERY]`

Search the bundled docs (offline).

```text
USAGE
  $ sf docs [QUERY...] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [--full] [--all]

ARGUMENTS
  [QUERY...]  Search terms, or an exact topic slug to print (e.g. `publish`).

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf doctor [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf domains [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage domains.

  Manage space domains.
```

## `sf domains add HOSTNAME`

Attach a domain.

```text
USAGE
  $ sf domains add HOSTNAME [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--wait]
    [--wait-timeout <value>] [--role standard|primary|redirect] [--redirect-to <value>] [--redirect-status
    301|302|307|308] [--primary]

ARGUMENTS
  HOSTNAME  Hostname to attach.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf domains check DOMAIN [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--move |
    --retry-ssl] [--wait] [--wait-timeout <value>]

ARGUMENTS
  DOMAIN  Domain ID or hostname.

FLAGS
  --move       Move a domain you control from another Space without TXT verification.
  --retry-ssl  Ask for a new HTTPS certificate now instead of waiting for the next scheduled attempt.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXECUTION FLAGS
  --[no-]wait             Wait until queued work finishes before returning.
  --wait-timeout=<value>  Seconds to wait for queued work to finish before giving up.

DESCRIPTION
  Check a domain.

  Verify domain ownership or check DNS readiness. Ownership verification moves a contested domain to this space.

EXAMPLES
  Queue a DNS readiness check for a domain.

    $ sf domains check example.com --space docs

  Ask for a new HTTPS certificate after fixing DNS.

    $ sf domains check example.com --space docs --retry-ssl
```

## `sf domains contacts`

Manage registrant contacts.

```text
USAGE
  $ sf domains contacts [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage registrant contacts.

  Manage the registrant contacts domains are bought under. See `domains contacts ls` and `add`.
```

## `sf domains contacts add`

Save a registrant contact.

```text
USAGE
  $ sf domains contacts add --file <value> [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

FLAGS
  --file=<value>  (required) JSON file with the registrant's details.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Save a registrant contact.

  Save the person or organization domains are registered to. Fields: firstName, lastName, organization?, address1,
  address2?, city, state, postalCode, countryCode, email, phone.

EXAMPLES
  $ sf domains contacts add --file contact.json
```

## `sf domains contacts list`

List registrant contacts.

```text
USAGE
  $ sf domains contacts list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List registrant contacts.

  List saved registrant contacts, newest first.

ALIASES
  $ sf domains contacts ls

EXAMPLES
  $ sf domains contacts list
```

## `sf domains diagnostics DOMAIN`

Inspect domain diagnostics.

```text
USAGE
  $ sf domains diagnostics DOMAIN [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

ARGUMENTS
  DOMAIN  Domain ID or hostname.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf domains dns [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage domain DNS records.

  Manage DNS records for a domain zone. See `domains dns ls`, `capabilities`, `refresh`, `add`, `update`, `rm`, `batch`,
  `export`, and `replace`.
```

## `sf domains dns add DOMAIN`

Add a DNS record.

```text
USAGE
  $ sf domains dns add DOMAIN [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [--type A|AAAA|ALIAS|CAA|CNAME|MX|NS|SRV|TXT] [--name <value>] [--value
    <value>] [--ttl <value>] [--priority <value>] [-T <TEAM>]

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
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Add a DNS record.

  Add a DNS record to the domain's Spacefast-managed zone.

EXAMPLES
  $ sf domains dns add example.com --type MX --name @ --value mail.example.com --priority 10
```

## `sf domains dns batch DOMAIN`

Apply a DNS record batch.

```text
USAGE
  $ sf domains dns batch DOMAIN --input <value> [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color]
    [--non-interactive] [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  DOMAIN  Domain ID or hostname.

FLAGS
  --input=<value>  (required) JSON batch body: a literal string, @file, or - for stdin.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf domains dns capabilities DOMAIN [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  DOMAIN  Domain ID or hostname.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf domains dns export DOMAIN [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  DOMAIN  Domain ID or hostname.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Export the DNS zone.

  Print the domain's zone as BIND-style records.

EXAMPLES
  Print the domain zone as BIND-style records.

    $ sf domains dns export example.com
```

## `sf domains dns list DOMAIN`

List DNS records.

```text
USAGE
  $ sf domains dns list DOMAIN [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--limit <NUMBER>] [--cursor <CURSOR>]

ARGUMENTS
  DOMAIN  Domain ID or hostname.

FLAGS
  --cursor=<CURSOR>  Pagination cursor from a previous response.
  --limit=<NUMBER>   Maximum number of records to return (default 200, max 500).

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List DNS records.

  List DNS records in the domain's Spacefast-managed zone.

ALIASES
  $ sf domains dns ls

EXAMPLES
  List DNS records in the managed zone.

    $ sf domains dns list example.com
```

## `sf domains dns refresh DOMAIN`

Refresh DNS provider snapshot.

```text
USAGE
  $ sf domains dns refresh DOMAIN [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  DOMAIN  Domain ID or hostname.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Refresh DNS provider snapshot.

  Refresh a connected DNS provider snapshot for a domain.

EXAMPLES
  Refresh the connected DNS provider snapshot.

    $ sf domains dns refresh example.com
```

## `sf domains dns remove DOMAIN RECORD`

Remove a DNS record.

```text
USAGE
  $ sf domains dns remove DOMAIN RECORD [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  DOMAIN  Domain ID or hostname.
  RECORD  DNS record ID.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Remove a DNS record.

  Remove a DNS record from the domain's zone.

ALIASES
  $ sf domains dns rm

EXAMPLES
  Remove a DNS record from the zone.

    $ sf domains dns remove example.com rec_123
```

## `sf domains dns replace DOMAIN`

Replace DNS records that block a domain.

```text
USAGE
  $ sf domains dns replace DOMAIN [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--name <value>...]
    [--wait] [--wait-timeout <value>]

ARGUMENTS
  DOMAIN  Domain ID or hostname.

FLAGS
  --name=<value>...  Hostname to replace. Repeat for both names. Defaults to every blocked name.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXECUTION FLAGS
  --[no-]wait             Wait until queued work finishes before returning.
  --wait-timeout=<value>  Seconds to wait for queued work to finish before giving up.

DESCRIPTION
  Replace DNS records that block a domain.

  Delete your A, AAAA, CNAME and ALIAS records that block a domain in its Spacefast DNS zone, so Spacefast DNS serves it
  for the Space. The deleted records are gone for good: removing the domain later does not bring them back. An NS
  delegation is never replaced.

EXAMPLES
  Replace every blocked name after confirmation.

    $ sf domains dns replace example.com --space docs

  Replace one name without a prompt.

    $ sf domains dns replace example.com --space docs --name www.example.com --yes
```

## `sf domains dns update DOMAIN RECORD`

Update a DNS record.

```text
USAGE
  $ sf domains dns update DOMAIN RECORD [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [--type A|AAAA|ALIAS|CAA|CNAME|MX|NS|SRV|TXT] [--name <value>] [--value
    <value>] [--ttl <value>] [--priority <value>] [-T <TEAM>]

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
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Update a DNS record.

  Update fields on an existing DNS record.

EXAMPLES
  Update a DNS record's value and TTL.

    $ sf domains dns update example.com rec_123 --value 1.2.3.4 --ttl 3600
```

## `sf domains list`

List space domains.

```text
USAGE
  $ sf domains list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List space domains.

  List domains attached to a space.

ALIASES
  $ sf domains ls

EXAMPLES
  $ sf domains list --space docs
```

## `sf domains nameservers DOMAIN`

Show domain nameservers.

```text
USAGE
  $ sf domains nameservers DOMAIN [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  DOMAIN  Domain ID or hostname.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf domains nameservers set DOMAIN NAMESERVERS [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color]
    [--non-interactive] [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  DOMAIN       Domain ID or hostname.
  NAMESERVERS  Comma-separated nameservers (at least two).

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Set domain nameservers.

  Set the nameservers of a domain registered through Spacefast. ns1.spacefast.com,ns2.spacefast.com moves it onto
  Spacefast DNS; other nameservers move it to external DNS and keep its records. Externally registered domains change
  nameservers at their registrar.

EXAMPLES
  $ sf domains nameservers set example.com ns1.example-dns.com,ns2.example-dns.com
```

## `sf domains registration DOMAIN`

Show a domain's registration.

```text
USAGE
  $ sf domains registration DOMAIN [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  DOMAIN  Domain ID or hostname.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Show a domain's registration.

  Show a domain's registration: status, expiry, and any failure or refund. Buy with `domains registration purchase`,
  renew with `domains registration renew`.

EXAMPLES
  Check whether a purchase has registered.

    $ sf domains registration example.com
```

## `sf domains registration purchase DOMAIN... [flags]`

Buy domains.

```text
USAGE
  $ sf domains registration purchase DOMAIN... [flags]

FLAGS
  --contact=<value>       Saved registrant contact id (dcon_...).
  --contact-file=<value>  JSON file with a new registrant; saved before buying.
  --expect-total=<value>  Refuse if the total before tax is not this amount in USD (e.g. 45.68).

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Buy domains.

  Hold up to 10 domains for one payment and print the checkout link. Nothing is charged until you pay there. Without
  --contact or --contact-file, your newest saved registrant is used.

EXAMPLES
  Buy two domains with your newest saved registrant.

    $ sf domains registration purchase acme.com acme.dev

  Save a registrant and buy, refusing if the price moved.

    $ sf domains registration purchase acme.com --contact-file contact.json --expect-total 10.34
```

## `sf domains registration renew DOMAIN`

Renew a domain.

```text
USAGE
  $ sf domains registration renew DOMAIN [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  DOMAIN  Domain ID or hostname.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Renew a domain.

  Renew a domain for one year and print the checkout link. Nothing is charged until you pay there.

EXAMPLES
  $ sf domains registration renew example.com
```

## `sf domains remove DOMAIN`

Remove a domain.

```text
USAGE
  $ sf domains remove DOMAIN [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--wait]

ARGUMENTS
  DOMAIN  Domain ID or hostname.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXECUTION FLAGS
  --[no-]wait  Wait until queued work finishes before returning.

DESCRIPTION
  Remove a domain.

  Remove a custom domain and its automatic apex or www counterpart from a space.

ALIASES
  $ sf domains rm

EXAMPLES
  Remove a domain from a space after confirmation.

    $ sf domains remove example.com --space docs
```

## `sf domains search [QUERY]`

Find domain names in a conversation.

```text
USAGE
  $ sf domains search [QUERY] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [--input <value>] [--interactive | --json | --local] [--limit <NUMBER>] [--like
    <value>...] [--dislike <value>...] [--neutral <value>...] [--select <value>...] [--unselect <value>...] [-T <TEAM>]

ARGUMENTS
  [QUERY]  Keyword, naming brief, or follow-up message.

FLAGS
  --dislike=<value>...   Dismiss a saved suggestion. Repeat for more than one.
  --input=<value>        Previous search receipt, session, or request: JSON, @file, or - for stdin.
  --interactive          Keep a search conversation open, with previews, refinements and feedback.
  --like=<value>...      Like a saved suggestion. Repeat for more than one.
  --limit=<NUMBER>       Number of offline suggestions to print with --local. Ignored otherwise.
  --local                Print offline name ideas without an account or live checks.
  --neutral=<value>...   Clear a saved suggestion's like or dismissal.
  --select=<value>...    Select a saved suggestion. Repeat for more than one.
  --unselect=<value>...  Remove a saved suggestion from the selection.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Find domain names in a conversation.

  Search like the dashboard: a keyword checks exact matches and domain hacks; a descriptive brief generates AI ideas.
  Both receive live availability, prices and Jev scores. Generated ideas grow toward 24 available names. Above that
  target, the lowest-ranked eligible names retire after checks and Jev scoring. Likes and selections protect names.
  Exact matches stay separate.

  Save --json output and pass it back with --input to continue. Feedback accepts a domain, suggestion ID, or the result
  number from that saved receipt.

EXAMPLES
  Start a naming conversation and save its state.

    $ sf domains search "a cozy bakery in Brooklyn" --json > names.json

  Continue with feedback on the saved results.

    $ sf domains search "shorter, playful names" --input @names.json --like 2 --select 3 --json

  Update feedback without adding a message.

    $ sf domains search --input @names.json --dislike 4 --json

  Print offline domain name ideas for a brand.

    $ sf domains search acme --local --limit 20

  Keep searching, refine the brief and give feedback in the terminal.

    $ sf domains search acme --interactive
```

## `sf domains update DOMAIN`

Change which hostname serves.

```text
USAGE
  $ sf domains update DOMAIN --serve-from <value> [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color]
    [--non-interactive] [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]
    [--wait] [--wait-timeout <value>]

ARGUMENTS
  DOMAIN  Domain ID or hostname.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf env [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage env vars.

  Manage space environment variables.
```

## `sf env import FILE`

Import variables from a .env file.

```text
USAGE
  $ sf env import FILE [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--[no-]secret] [--production]
    [--preview] [--branch <value>...] [--from dotenv|vercel|netlify|cloudflare]

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
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Import variables from a .env file.

  Import variables from a dotenv file. Values are sent to the API and are not printed back.

EXAMPLES
  Import write-only variables from a .env file.

    $ sf env import .env --space docs

  Explicitly import readable ordinary values.

    $ sf env import public.env --space docs --no-secret
```

## `sf env list`

List space variables.

```text
USAGE
  $ sf env list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--show-values]

FLAGS
  --show-values  Print plaintext variable values.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List space variables.

  List space variables.

ALIASES
  $ sf env ls

EXAMPLES
  List space variables (values masked).

    $ sf env list --space docs
```

## `sf env pull [FILE]`

Pull variables.

```text
USAGE
  $ sf env pull [FILE] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--format env|json]
    [--force] [--stdout]

ARGUMENTS
  [FILE]  File to write the pulled variables to. Defaults to .env.local.

FLAGS
  --force            Overwrite the target file if it already exists.
  --format=<option>  [default: env] Output format.
                     <options: env|json>
  --stdout           Print variables to stdout instead of writing a file.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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

## `sf env remove NAME`

Remove a space variable.

```text
USAGE
  $ sf env remove NAME [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

ARGUMENTS
  NAME  Variable name.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Remove a space variable.

  Remove a variable from a space.

ALIASES
  $ sf env rm

EXAMPLES
  Remove a space variable after confirmation.

    $ sf env remove API_URL --space docs
```

## `sf env set NAME [VALUE]`

Set a space variable.

```text
USAGE
  $ sf env set NAME [VALUE] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--value-from-stdin]
    [--[no-]secret] [--production-value <value>] [--preview-value <value>] [--branch-value <value>...]

ARGUMENTS
  NAME     Variable name.
  [VALUE]  Variable value. Omit it and pass --value-from-stdin for secrets.

FLAGS
  --[no-]secret       Keep the value write-only. New values default write-only; updates preserve the existing
                      classification.
  --value-from-stdin  Read the value from standard input, keeping it out of your shell history and process list.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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

## `sf env template [DIR]`

Create a dotenv import template from platform config.

```text
USAGE
  $ sf env template [DIR] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y]

ARGUMENTS
  [DIR]  Project directory to inspect. Defaults to the current directory.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Create a dotenv import template from platform config.

  Read platform config files and print a dotenv template for variables to import into Spacefast.

EXAMPLES
  Print a dotenv import template from platform config in the current directory.

    $ sf env template

  Return the import template as JSON.

    $ sf env template ./app --json
```

## `sf feedback`

Send feedback to Spacefast.

```text
USAGE
  $ sf feedback --message <value> [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color]
    [--non-interactive] [--profile <NAME>] [--token <TOKEN>] [-y] [--category bug|docs|limit|idea|other] [--error-code
    <value>] [--request-id <value>] [--space <SPACE>] [--url <value>]

FLAGS
  --category=<option>   [default: other] Feedback category.
                        <options: bug|docs|limit|idea|other>
  --error-code=<value>  Related API error code.
  --message=<value>     (required) Feedback message.
  --request-id=<value>  Related API request id.
  --space=<SPACE>       Related space.
  --url=<value>         Related URL.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Send feedback to Spacefast.

  Send feedback to Spacefast with optional error, request, space, or URL context.

EXAMPLES
  Send docs feedback.

    $ sf feedback --message "The continuation docs are unclear" --category docs

  Send machine-readable feedback with error context.

    $ sf feedback --message "Publish failed after claim" --category bug --error-code \
      space_claimed_credential_available --request-id req_123 --json
```

## `sf feedback inspect REF`

Show feedback you sent.

```text
USAGE
  $ sf feedback inspect REF [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

ARGUMENTS
  REF  Feedback reference that `sf feedback` returned, for example fdb_123.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Show feedback you sent.

  Show one feedback entry you sent, by the reference `sf feedback` returned. Requires the signed-in login that sent it.

EXAMPLES
  $ sf feedback inspect fdb_123
```

## `sf feedback list`

List the feedback you sent.

```text
USAGE
  $ sf feedback list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [--limit <NUMBER>]

FLAGS
  --limit=<NUMBER>  Maximum number of feedback entries to return (default 20, max 100).

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List the feedback you sent.

  List the feedback you sent with `sf feedback`, newest first. Requires a signed-in login.

ALIASES
  $ sf feedback ls

EXAMPLES
  List your recent feedback.

    $ sf feedback list

  List your five newest feedback entries as JSON.

    $ sf feedback list --limit 5 --json
```

## `sf fetch [PATH]`

Fetch private content.

```text
USAGE
  $ sf fetch [PATH] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--headers]
    [--output <value>] [--status] [--verify <value>]

ARGUMENTS
  [PATH]  Canonical route to fetch, or a full https URL of a page shared with you. Defaults to /.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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

    $ sf fetch https://plan.space.fast/q3 --output ./q3.html

  Inspect an authenticated response without writing its body.

    $ sf fetch / --status --headers --json

  Verify that a private route serves an exact published version.

    $ sf fetch / --verify ver_123 --json
```

## `sf functions`

Use Workers with Spacefast bindings.

```text
USAGE
  $ sf functions [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Use Workers with Spacefast bindings.

  Publish a Worker with sf publish. env.CONNECTORS.call(role, tool, args) calls a connector role;
  env.CONNECTORS.tracker.issues.create(args) is the role proxy. The Space must have bindings or its Zero app must
  declare roles. When the version includes a Zero app, env.ZERO.query(name, ...args) and env.ZERO.mutate(name, ...args)
  call it. Both bindings forward the request's signed Zero identity cookie. ZERO uses the Space's service principal when
  no visitor is signed in.
```

## `sf git`

Manage repository connections.

```text
USAGE
  $ sf git [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage repository connections.

  Manage repository connections and Git push deploys.
```

## `sf git build`

Build repository source.

```text
USAGE
  $ sf git build [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--connection-type
    connected|hosted] [--ref <value>] [--branch <value>] [--commit <value>] [--pull-request <value>] [--config <value>]
    [--target production|preview] [--root-directory <value>] [--install-directory <value>] [--install-command <value>]
    [--build-command <value>] [--output-directory <value>] [--ignored-build-command <value>] [--auto-finalize]
    [--allow-unsupported-platform-features] [--wait] [--wait-timeout <value>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  --config=<value>                 [env: SPACEFAST_CONFIG] Path to a spacefast.config.ts or sf.jsonc file with
                                   repository build settings.
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
  $ sf git connect [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--provider
    github|gitlab|bitbucket|generic] [--connection-type connected|hosted] [--repository <value>] [--repository-number
    <value>] [--repository-name <value>] [--installation <value>] [--credential <value>] [--default-branch <value>]
    [--production-branch <value>] [--ref <value>] [--config <value>] [--auto-deploy-production] [--auto-deploy-previews]
    [--root-directory <value>] [--install-directory <value>] [--install-command <value>] [--build-command <value>]
    [--ignored-build-command <value>] [--output-directory <value>] [--framework-preset <value>] [--platform-preset
    <value>] [--allow-unsupported-platform-features] [--apply-best] [--sync] [--wait-timeout <value>] [--build-now]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

MIGRATION FLAGS
  --allow-unsupported-platform-features  Allow unsupported migration features.

AUTOMATION FLAGS
  --apply-best                   After connecting, sync the repository, wait for it, then save the highest-ranked
                                 detected build settings.
  --[no-]auto-deploy-previews    Automatically build preview branches and pull requests.
  --[no-]auto-deploy-production  Automatically build pushes to the production branch.
  --build-now                    Queue a generic Build after connecting.
  --sync                         Request repository sync after connecting.

BUILD FLAGS
  --build-command=<value>          Build command.
  --config=<value>                 [env: SPACEFAST_CONFIG] Path to a spacefast.config.ts or sf.jsonc file with
                                   repository build settings.
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
  --installation=<value>       [env: SPACEFAST_REPOSITORY_INSTALLATION_ID] GitHub App installation ID. Resolved from
                               your installations when omitted; pass it to pick one when several grant the repository.
  --production-branch=<value>  Branch that publishes to production.
  --provider=<option>          Repository host.
                               <options: github|gitlab|bitbucket|generic>
  --ref=<value>                [env: SPACEFAST_BUILD_REF] Ref, branch, tag, or commit to sync or build after connecting.
  --repository=<value>         Repository full name, for example owner/repo. Defaults to the current branch's upstream
                               remote, then origin.
  --repository-name=<value>    Repository name from the host.
  --repository-number=<value>  Repository's numeric ID on the host. Resolved from GitHub when omitted.

EXECUTION FLAGS
  --wait-timeout=<value>  Seconds to wait for queued work to finish before giving up.

DESCRIPTION
  Connect repository.

  Create or replace a repository connection. GitHub connections resolve their installation and repository IDs from your
  GitHub App installations, so --repository owner/repo is enough.

EXAMPLES
  Connect a GitHub repository.

    $ sf git connect --space docs --provider github --repository owner/repo

  Pick the installation when more than one grants the repository.

    $ sf git connect --space docs --provider github --repository owner/repo --installation 12345678

  Connect a repository, set the production branch, and sync.

    $ sf git connect --space docs --repository owner/repo --production-branch main --sync
```

## `sf git disconnect`

Disconnect repository.

```text
USAGE
  $ sf git disconnect [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--connection-type
    connected|hosted]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf git github [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage GitHub App setup.

  Inspect GitHub App installations and repositories.
```

## `sf git github installations`

List GitHub installations.

```text
USAGE
  $ sf git github installations [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List GitHub installations.

  List the GitHub App installations connected to a team.

EXAMPLES
  List GitHub App installations for your default team.

    $ sf git github installations
```

## `sf git github repos [INSTALLATION]`

List GitHub repositories.

```text
USAGE
  $ sf git github repos [INSTALLATION] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  [INSTALLATION]  GitHub App installation ID from `sf git github installations`. Optional when the team has one
                  installation.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List GitHub repositories.

  List the repositories a team can connect through a GitHub App installation, most recently pushed first. Pass the
  installation ID that `sf git github installations` prints; when the team has exactly one installation it is used
  automatically.

EXAMPLES
  List repositories for the team's only GitHub App installation.

    $ sf git github repos

  List repositories for a specific GitHub App installation.

    $ sf git github repos 12345678
```

## `sf git inspect`

Show repository connection.

```text
USAGE
  $ sf git inspect [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--connection-type
    connected|hosted]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

REPOSITORY FLAGS
  --connection-type=<option>  [default: connected] Repository connection type.
                              <options: connected|hosted>

DESCRIPTION
  Show repository connection.

  Show a repository connection.

EXAMPLES
  Show the repository connection.

    $ sf git inspect --space docs
```

## `sf git origin`

Install Spacefast git remote.

```text
USAGE
  $ sf git origin [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--set-origin]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf git sync [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--connection-type
    connected|hosted] [--ref <value>] [--ttl-seconds <value>] [--read-only-ref <value>...]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf git update [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--connection-type
    connected|hosted] [--production-branch <value>] [--credential <value>] [--clear-credential]
    [--auto-deploy-production] [--auto-deploy-previews] [--config <value>] [--root-directory <value>]
    [--install-directory <value>] [--install-command <value>] [--build-command <value>] [--ignored-build-command
    <value>] [--output-directory <value>] [--framework-preset <value>] [--platform-preset <value>]
    [--allow-unsupported-platform-features]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

MIGRATION FLAGS
  --[no-]allow-unsupported-platform-features  Allow unsupported migration features.

AUTOMATION FLAGS
  --[no-]auto-deploy-previews    Automatically build preview branches and pull requests.
  --[no-]auto-deploy-production  Automatically build pushes to the production branch.

BUILD FLAGS
  --build-command=<value>          Build command.
  --config=<value>                 [env: SPACEFAST_CONFIG] Path to a spacefast.config.ts or sf.jsonc file with
                                   repository build settings.
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
```

## `sf init [NAME]`

Create a Spacefast project.

```text
USAGE
  $ sf init [NAME] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--force] [--runtime
    static|zero|functions]

ARGUMENTS
  [NAME]  Directory name for a new project. Omit to initialize the current directory.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXECUTION FLAGS
  --force  Overwrite existing generated files.

PROJECT FLAGS
  --runtime=<option>  [default: static] Project runtime to scaffold.
                      <options: static|zero|functions>

DESCRIPTION
  Create a Spacefast project.

  Create a Spacefast project, in a new directory when given a name and in the current one otherwise. Use --runtime to
  start a Zero app or a Functions worker instead of a static config.

EXAMPLES
  Write a starter spacefast.config.ts in the current directory.

    $ sf init

  Create a new project directory named my-site.

    $ sf init my-site

  Initialize config and link the current directory to space `docs`.

    $ sf init --space docs

  Start a Zero app (zero.config.ts) in a new directory.

    $ sf init my-app --runtime zero

  Scaffold a Functions worker in the current directory.

    $ sf init --runtime functions
```

## `sf inspect [TARGET]`

Inspect a space by ID, slug, URL, or domain.

```text
USAGE
  $ sf inspect [TARGET] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  [TARGET]  Space ID, slug, live URL, or domain. Defaults to the linked space.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf link [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf login [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [--open] [--device-code | --handoff | --access
    read|domains|agent|agent-personal-pages] [-T <TEAM>]

FLAGS
  --access=<option>  Access to request for this machine: read or domains or agent or agent-personal-pages. Defaults to
                     agent. You confirm or narrow it in the browser.
                     <options: read|domains|agent|agent-personal-pages>
  --device-code      Redeem a sign-in code from the MCP cli_login tool. Read from stdin: pipe it or paste it at the
                     hidden prompt, never as an argument.
  --handoff          Redeem a one-use link from a dashboard agent setup prompt. Read from stdin: pipe it or paste it at
                     the hidden prompt, never as an argument.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

BROWSER FLAGS
  --[no-]open  Open the browser. --no-open prints the link instead.

DESCRIPTION
  Log in to Spacefast.

  Log this machine in through the browser, or save an API key you already have.

  Use --profile or SPACEFAST_PROFILE to save a profile login. After `sf profiles use client`, plain `sf login` still
  saves the default login; commands keep using client's own key when present.

  If browser login is interrupted, run the same login command again. Keep the same CLI home, API URL, and --access
  profile. The CLI resumes the saved request or prints a new link if it expired. Approve the link printed by that run if
  asked. If the command stops while you approve, run it again after approval.

EXAMPLES
  Start browser-assisted device login.

    $ sf login

  Store a token for non-interactive use.

    $ sf login --token sfa_...

  Log a second account in under a profile. The default login and other profiles stay signed in.

    $ sf login --profile client

  Ask for a read-only credential instead of full agent access.

    $ sf login --access read

  Agent access that can also fetch private pages other people shared with you.

    $ sf login --access agent-personal-pages

  Redeem a link from a dashboard agent setup prompt.

    printf '%s\n' "$HANDOFF_LINK" | sf login --handoff

  Redeem a sign-in code from the MCP cli_login tool.

    printf '%s\n' "$SIGN_IN_CODE" | sf login --device-code
```

## `sf logout`

Log out of Spacefast.

```text
USAGE
  $ sf logout [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf logs [TARGET] [KIND] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--limit <NUMBER>]
    [--wait-timeout <value> -f] [--hostname <value>] [--remote-addr <value>...] [--ja3-hash <value>...] [--method
    <value>...] [--status <value>...] [--user-agent <value>...] [--asn <value>...] [--since <value>] [--until <value>]
    [--cursor <CURSOR>] [--request-id <value>] [--handler <value>]

ARGUMENTS
  [TARGET]  Space ID, slug, live URL, or domain. Defaults to the linked space.
  [KIND]    Log kind: `access` for origin requests, `edge` for edge requests, or `runtime` for application output.
            Defaults to access.

FLAGS
  -f, --follow                  Poll for new log entries every 2 seconds until interrupted (Ctrl-C).
      --asn=<value>...          Edge logs only: autonomous system number. Repeat to include more numbers.
      --cursor=<CURSOR>         Continue from the cursor printed by the previous page.
      --handler=<value>         Runtime logs only: lines from one Zero mutation or Functions handler.
      --hostname=<value>        Edge logs only: hostname assigned to the space.
      --ja3-hash=<value>...     Edge logs only: JA3 fingerprint. Repeat to include more fingerprints.
      --limit=<NUMBER>          [default: 50] Maximum number of log entries.
      --method=<value>...       Edge logs only: HTTP method. Repeat to include more methods.
      --remote-addr=<value>...  Edge logs only: client IP address. Repeat to include more addresses.
      --request-id=<value>      Runtime logs only: everything logged while serving one request.
      --since=<value>           Start of the log window as an ISO 8601 timestamp.
      --status=<value>...       Edge logs only: HTTP status code. Repeat to include more codes.
      --until=<value>           End of the log window as an ISO 8601 timestamp.
      --user-agent=<value>...   Edge logs only: exact User-Agent value. Repeat to include more values.
      --wait-timeout=<value>    With --follow: stop following after this many seconds and exit 0.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf map [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [--paths]

FLAGS
  --paths  Print only canonical command invocations.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Print the machine-readable command map.

  List the flat CLI command surface for agents and other programmatic callers.

EXAMPLES
  Return every command with its arguments, options, and aliases as JSON.

    $ sf map --json

  Print one canonical command invocation per line.

    $ sf map --paths
```

## `sf mcp`

Run the Spacefast MCP server.

```text
USAGE
  $ sf mcp [--profile <NAME>] [--workspace-root <value>]

FLAGS
  --api-url=<value>         [env: SPACEFAST_API_URL] Spacefast API base URL for MCP tool calls.
  --token=<value>           [env: SPACEFAST_TOKEN] Spacefast API token for MCP tool calls.
  --workspace-root=<value>  [env: SPACEFAST_MCP_WORKSPACE_ROOT] Root allowed for On-Device MCP path publishing.

GLOBAL FLAGS
  --profile=<NAME>  [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf mcp install [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [--agent auto|all|generic|claude-code|claude-app|claude-desktop|cursor|codex|chatgpt|
    vscode|github-copilot|github-copilot-app|devin-desktop|devin-cloud|zed|gemini-cli|opencode|amp|warp|factory-droid|cl
    ine|continue|raycast|poke|pi|indent|hermes|openclaw|grok|grok-build|grok-bot|app.devin.ai|chatgpt-work|claude|claude
    -code-cli|claude.ai|clawhub|copilot|devin|droid|earendil|factory|gemini|grok.com|grokbot|pi.dev|windsurf...]
    [--local | --remote | --oauth]

FLAGS
  --agent=<option>...
      Agent/client to configure. Repeat to configure more than one.
      <options: auto|all|generic|claude-code|claude-app|claude-desktop|cursor|codex|chatgpt|vscode|github-copilot|github-c
      opilot-app|devin-desktop|devin-cloud|zed|gemini-cli|opencode|amp|warp|factory-droid|cline|continue|raycast|poke|pi|i
      ndent|hermes|openclaw|grok|grok-build|grok-bot|app.devin.ai|chatgpt-work|claude|claude-code-cli|claude.ai|clawhub|co
      pilot|devin|droid|earendil|factory|gemini|grok.com|grokbot|pi.dev|windsurf>

  --local
      Use checkout-aware local stdio MCP instead of the hosted proxy.

  --oauth
      With --remote, connect directly and let the editor handle OAuth.

  --remote
      Use hosted MCP through `sf mcp proxy` and the current CLI login.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf mcp proxy [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile <NAME>]
    [--token <TOKEN>] [-y] [--endpoint <value>] [--allow-credential-origin <value>...]

FLAGS
  --allow-credential-origin=<value>...  [env: SPACEFAST_MCP_ALLOW_CREDENTIAL_ORIGIN] Send your Spacefast login to this
                                        MCP origin even though it was not issued for it. Repeatable.
  --endpoint=<value>                    [env: SPACEFAST_MCP_URL] Remote MCP endpoint. HTTPS is required except on
                                        loopback.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Run the authenticated remote MCP proxy.

  Proxy remote Spacefast MCP over stdio using the current CLI login.
```

## `sf migrate URL`

Capture a public website and publish a static copy to Spacefast.

```text
USAGE
  $ sf migrate URL [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [--team <value>] [--name <value>] [--idempotency-key <value>] [--wait]
    [--wait-timeout <value>] [--show-secret]

ARGUMENTS
  URL  Public HTTPS website URL to capture.

FLAGS
  --idempotency-key=<value>  Stable key for safely retrying a migration. Defaults to a new key; returned with the
                             receipt.
  --name=<value>             Title for the new Space. Defaults to the source hostname.
  --show-secret              Print Open and Claim links in JSON or non-interactive output.
  --team=<value>             Team that receives the new Space.
  --wait-timeout=<value>     [default: 900] Seconds to wait for capture and publication.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXECUTION FLAGS
  --[no-]wait  Wait until the target version is ready and, for production, live before returning.

DESCRIPTION
  Capture a public website and publish a static copy to Spacefast.

  Creates a new Space through the publish API and follows its capture Build. Each invocation starts a new migration;
  pass a previous --idempotency-key with the same inputs and credential to recover that attempt. The current directory
  is not published or relinked. Domains, accounts and server-side data are separate migration concerns.

EXAMPLES
  $ sf migrate https://example.com

  $ sf migrate https://example.com --team my-team

  $ sf migrate https://example.com --no-wait --json
```

## `sf oauth-apps`

Manage Sign in with Spacefast apps.

```text
USAGE
  $ sf oauth-apps [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage Sign in with Spacefast apps.

  Manage the OAuth apps that let a site's visitors sign in with their Spacefast account.
```

## `sf oauth-apps create`

Create an OAuth app.

```text
USAGE
  $ sf oauth-apps create --name <value> --redirect-uri <value>... [--api-url <URL>] [--cwd <DIR>] [-d]
    [--no-color] [--non-interactive] [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--homepage <value>] [--logo
    <value>] [--confidential]

FLAGS
  --confidential             Issue a client secret for a server-side app.
  --homepage=<value>         The app's https homepage.
  --logo=<value>             An https URL of the app's logo.
  --name=<value>             (required) App name, shown on the consent screen.
  --redirect-uri=<value>...  (required) URL sign-in returns to. Repeat for each URL.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Create an OAuth app.

  Register an OAuth app so a site's visitors can sign in with Spacefast. Apps are public and use PKCE from the browser;
  pass --confidential only for a server-side app, whose secret is shown once.

EXAMPLES
  Register a browser app for a Space.

    $ sf oauth-apps create --name 'Guestbook' --redirect-uri https://guestbook.space.fast/auth/callback

  Also allow sign-in while developing locally.

    $ sf oauth-apps create --name 'Guestbook' --redirect-uri https://guestbook.space.fast/auth/callback \
      --redirect-uri http://localhost:5173/auth/callback
```

## `sf oauth-apps delete APP`

Delete an OAuth app.

```text
USAGE
  $ sf oauth-apps delete APP [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  APP  The app's client ID.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Delete an OAuth app.

  Delete an OAuth app. Sign-in on every site using it stops working immediately.

ALIASES
  $ sf oauth-apps rm
  $ sf oauth-apps del

EXAMPLES
  Delete an OAuth app.

    $ sf oauth-apps delete <client-id>
```

## `sf oauth-apps inspect APP`

Show an OAuth app.

```text
USAGE
  $ sf oauth-apps inspect APP [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  APP  The app's client ID.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Show an OAuth app.

  Show an OAuth app, its redirect URLs, and its OIDC endpoints.

EXAMPLES
  Show one OAuth app.

    $ sf oauth-apps inspect <client-id>
```

## `sf oauth-apps list`

List OAuth apps.

```text
USAGE
  $ sf oauth-apps list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List OAuth apps.

  List the team's OAuth apps and the OIDC endpoints they use.

ALIASES
  $ sf oauth-apps ls

EXAMPLES
  List OAuth apps for the selected team.

    $ sf oauth-apps list
```

## `sf oauth-apps secret rotate APP`

Rotate an OAuth app's client secret.

```text
USAGE
  $ sf oauth-apps secret rotate APP [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  APP  The app's client ID.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Rotate an OAuth app's client secret.

  Issue a new client secret for a confidential app and print it once. The old secret stops working immediately.

EXAMPLES
  Rotate a confidential app's secret.

    $ sf oauth-apps secret rotate <client-id>
```

## `sf oauth-apps update APP`

Update an OAuth app.

```text
USAGE
  $ sf oauth-apps update APP [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--name <value>] [--redirect-uri <value>...] [--homepage <value>] [--logo
    <value>]

ARGUMENTS
  APP  The app's client ID.

FLAGS
  --homepage=<value>         The app's https homepage. Empty clears it.
  --logo=<value>             An https URL of the app's logo. Empty clears it.
  --name=<value>             New app name.
  --redirect-uri=<value>...  Redirect URL. Repeat for each; replaces the current list.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Update an OAuth app.

  Change an OAuth app. --redirect-uri replaces the whole list; pass an empty --homepage or --logo to clear it. People
  who already signed in keep their access.

EXAMPLES
  Allow sign-in from a custom domain too.

    $ sf oauth-apps update <client-id> --redirect-uri https://guestbook.space.fast/auth/callback --redirect-uri \
      https://guestbook.example.com/auth/callback
```

## `sf open [TARGET]`

Open a private Space.

```text
USAGE
  $ sf open [TARGET] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [--open] [-T <TEAM>] [--path <value>]
    [--show-secret]

ARGUMENTS
  [TARGET]  Space ID, slug, live URL, Version URL, or domain. Defaults to the linked space.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

BROWSER FLAGS
  --[no-]open  Open the browser. --no-open prints the link instead.

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

## `sf operations [OPERATION]`

Inspect async operations.

```text
USAGE
  $ sf operations [OPERATION] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [--space <SPACE>] [--limit <NUMBER>] [--cursor <CURSOR>]

ARGUMENTS
  [OPERATION]  Operation ID. Omit to list recent operations.

FLAGS
  --cursor=<CURSOR>  Pagination cursor from a previous response.
  --limit=<NUMBER>   Maximum number of operations to return (default 50, max 100).

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Inspect async operations.

  List recent async operations or read one by ID. Pass --space to scope the list to a space.

EXAMPLES
  $ sf operations

  $ sf operations op_123

  $ sf operations --space spc_123
```

## `sf pages`

Manage Pages templates.

```text
USAGE
  $ sf pages [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage Pages templates.

  Pull, validate, and preview Spacefast-authored pages.
```

## `sf pages pull [TARGET]`

Own a default page template.

```text
USAGE
  $ sf pages pull [TARGET] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y]

ARGUMENTS
  [TARGET]  Page id, layout, or all.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Own a default page template.

  Copy Spacefast's readable default page HTML into your project.
```

## `sf pages validate`

Validate local Pages templates.

```text
USAGE
  $ sf pages validate [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [--dir <value>]

FLAGS
  --dir=<value>  [default: .] Project directory.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Validate local Pages templates.

  Run the same structural Pages checks used by publish.
```

## `sf plugins`

Install the Spacefast agent plugin.

```text
USAGE
  $ sf plugins [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [--agent auto|all|generic|claude-code|claude-app|claude-desktop|cursor|codex|chatgpt|
    vscode|github-copilot|github-copilot-app|devin-desktop|devin-cloud|zed|gemini-cli|opencode|amp|warp|factory-droid|cl
    ine|continue|raycast|poke|pi|indent|hermes|openclaw|grok|grok-build|grok-bot|app.devin.ai|chatgpt-work|claude|claude
    -code-cli|claude.ai|clawhub|copilot|devin|droid|earendil|factory|gemini|grok.com|grokbot|pi.dev|windsurf]
    [--dry-run]

FLAGS
  --agent=<option>
      [default: claude-code] Plugin-capable agent to configure.
      <options: auto|all|generic|claude-code|claude-app|claude-desktop|cursor|codex|chatgpt|vscode|github-copilot|github-c
      opilot-app|devin-desktop|devin-cloud|zed|gemini-cli|opencode|amp|warp|factory-droid|cline|continue|raycast|poke|pi|i
      ndent|hermes|openclaw|grok|grok-build|grok-bot|app.devin.ai|chatgpt-work|claude|claude-code-cli|claude.ai|clawhub|co
      pilot|devin|droid|earendil|factory|gemini|grok.com|grokbot|pi.dev|windsurf>

  --dry-run
      Print the pinned installer command without changing agent configuration.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf profiles [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List provider profiles.

  List named provider profiles. A profile binds an API base URL and credential so the CLI can publish to any
  Spacefast-compatible control plane.

EXAMPLES
  List configured provider profiles.

    $ sf profiles
```

## `sf profiles remove NAME`

Remove a provider profile.

```text
USAGE
  $ sf profiles remove NAME [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

ARGUMENTS
  NAME  Profile name.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Remove a provider profile.

  Delete a named provider profile and its stored credential.

ALIASES
  $ sf profiles rm

EXAMPLES
  Delete the staging provider profile.

    $ sf profiles remove staging
```

## `sf profiles set NAME`

Create or update a provider profile.

```text
USAGE
  $ sf profiles set NAME [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [-y]

ARGUMENTS
  NAME  Profile name.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<value>  Provider API base URL for this profile.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf profiles use NAME [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

ARGUMENTS
  NAME  Profile name.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf promote [VERSION] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--channel <value>]
    [--continuation-token <value>] [--wait] [--wait-timeout <value>]

ARGUMENTS
  [VERSION]  Version ID, ref, or number to make live, for example ver_123, v12, or 12.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf publish [DIR] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [--open] [-T <TEAM>] [--space <SPACE>] [--name
    <value>] [--slug <value>] [--hostname-scope team|global] [--spa auto|true|false] [--message <value>] [--git-branch
    <value>] [--git-commit <value>] [--git-ref <value>] [--git-repository <value>] [--source-type direct-upload|git]
    [--access private|parent_team|public] [--mode website|files] [--target production|preview] [--dry-run]
    [--config-only] [--wait] [--wait-timeout <value>] [--stream] [--show-secret] [--build] [--remote] [--prebuilt]
    [--git] [--root-directory <value>] [--install-directory <value>] [--install-command <value>] [--build-command
    <value>] [--output-directory <value>] [--env-file <value>...] [--ignored-build-command <value>] [--source-include
    <value>...] [--skip-install] [--skip-build] [--publish-mode additive|snapshot] [--immutable-asset-prefix <value>...]
    [--allow-unsupported-platform-features] [--auto-finalize]

ARGUMENTS
  [DIR]  File, directory, project, or .zip/.tar.gz archive to publish. Defaults to the current directory.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

SPACE METADATA FLAGS
  --access=private|parent_team|public  Set initial access when this publish creates a team-owned space: private (your
                                       team), parent_team (your team and its parent team, who can view and comment), or
                                       public (anyone).
  --hostname-scope=<option>            Managed hostname scope for newly created spaces.
                                       <options: team|global>
  --mode=<option>                      Serve the space as a website (default) or as a raw file listing. Usually set in
                                       spacefast.config.ts.
                                       <options: website|files>
  --name=<value>                       Set the space title.
  --slug=<value>                       Set the space slug when creating a new space. Reserved names are rejected, as are
                                       slugs containing spacefast, stattic, automattic, wordpress, or paypal anywhere.
  --spa=<option>                       [default: auto] Control single-page app fallback detection.
                                       <options: auto|true|false>

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

GIT FLAGS
  --git  Publish this Git repository by pushing it: sign in if needed, create its space (or use the linked one), add a
         push remote, and push. Every later push publishes too.

VERSION SOURCE FLAGS
  --git-branch=<value>      [env: SPACEFAST_GIT_BRANCH] Git branch name to record on the version.
  --git-commit=<value>      [env: SPACEFAST_GIT_COMMIT] Git commit SHA to record on the version.
  --git-ref=<value>         [env: SPACEFAST_GIT_REF] Git ref to record on the version.
  --git-repository=<value>  [env: SPACEFAST_GIT_REPOSITORY] Git repository to record on the version, for example
                            owner/repo.
  --message=<value>         [env: SPACEFAST_PUBLISH_MESSAGE] Changelog entry shown in version history. Overrides the
                            detected git commit message.
  --source-type=<option>    [env: SPACEFAST_SOURCE_TYPE] Version source type to record.
                            <options: direct-upload|git>

VERSION FLAGS
  --immutable-asset-prefix=<value>...  Path prefix whose files are content-addressed and kept from the previous version,
                                       so a tab loaded before this publish can still fetch its chunks. Snapshot mode
                                       only. Repeat for multiple prefixes.
  --publish-mode=<option>              Replace everything in the space (snapshot, default) or add to what is already
                                       published (additive).
                                       <options: additive|snapshot>

BROWSER FLAGS
  --[no-]open  Open the browser. --no-open prints the link instead.

OUTPUT FLAGS
  --show-secret  Print the access URL and claim link in JSON or non-interactive output.

DESCRIPTION
  Publish files or built projects to Spacefast.

  Publish a file, directory, project, or archive to Spacefast. Files and static directories deploy directly; archives
  always use remote detection, which packs static content unchanged and builds detected applications. Deploying is
  publishing: a deployment is a version, and the canonical nouns are version, channel, and build.

EXAMPLES
  Publish a file or directory directly.

    $ sf publish ./dist

  Build a detected project, or publish the directory directly if no build exists.

    $ sf publish

  Upload source and run the build remotely.

    $ sf publish --remote

  Publish a file archive, or build a detected project archive remotely.

    $ sf publish ./site.zip

  Publish this Git repository and keep publishing on every push. Signs in through the browser if needed.

    $ sf publish --git

  Publish an unpromoted preview without moving the live channel.

    $ sf publish --target preview --json

  Stream JSONL build and publish events.

    $ sf publish --json --stream
```

## `sf redeploy [BUILD]`

Retry the latest build (alias of `sf builds retry`).

```text
USAGE
  $ sf redeploy [BUILD] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

ARGUMENTS
  [BUILD]  Build ID (bld_...) to retry. Defaults to the space's most recent build.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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

## `sf rollback VERSION`

Roll back to a previous version.

```text
USAGE
  $ sf rollback VERSION [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--channel <value>]
    [--continuation-token <value>] [--wait] [--wait-timeout <value>]

ARGUMENTS
  VERSION  Version ID, ref, or number to make live, for example ver_123, v12, or 12.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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

    $ sf versions list

  Make version v12 live.

    $ sf rollback v12

  Make version v12 live for a selected space.

    $ sf rollback 12 --space docs
```

## `sf routing`

Routing utilities.

```text
USAGE
  $ sf routing [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Routing utilities.

  Inspect routing configuration and compute redirects/headers.
```

## `sf routing compute`

Compute routing.

```text
USAGE
  $ sf routing compute [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf routing inspect [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [--routing <value>] [--url <value>...]

FLAGS
  --routing=<value>  [default: .] Directory containing _redirects, _headers, and spacefast.config.ts to inspect.
  --url=<value>...   URL or path to match against local routing rules. Repeat for multiple URLs.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Inspect local routing files.

  Compile local _redirects, _headers, and spacefast.config.ts routing rules and optionally match URLs against the merged
  rules.

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
  $ sf rules [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage traffic rules.

  Inspect, declare, and try out a space's traffic rules: what it blocks, challenges, or serves past the cache.
```

## `sf rules add`

Add a traffic rule.

```text
USAGE
  $ sf rules add --kind firewall|cache-bypass [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color]
    [--non-interactive] [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]
    [--action block|challenge] [--status <value>] [--name <value>] [--description <value>] [--any] [--path <value>...]
    [--host <value>...] [--method <value>...] [--ip <value>...] [--country <value>...] [--asn <value>...] [--user-agent
    <value>...] [--referer <value>...] [--header <value>...] [--cookie <value>...] [--query <value>...] [--extension
    <value>...] [--ja3 <value>...] [--ja4 <value>...] [--not <value>...] [--wait]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

RULE FLAGS
  --action=<option>      What a firewall rule does: block answers without reaching the space, challenge asks for proof
                         of a human.
                         <options: block|challenge>
  --any                  Fire when any match field holds. By default all of them have to.
  --description=<value>  What this rule is for.
  --kind=<option>        (required) Which list the rule belongs to.
                         <options: firewall|cache-bypass>
  --name=<value>         Name for this rule, so `sf rules remove` can address it.
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
  version's own spacefast.config.ts declares are changed by publishing, not here.

EXAMPLES
  Ask logins for proof of a human.

    $ sf rules add --kind firewall --action challenge --path '/wp-login.php*'

  Block everything from outside the US and Canada.

    $ sf rules add --kind firewall --action block --country US,CA --not country

  Serve the API fresh instead of from the cache.

    $ sf rules add --kind cache-bypass --path '/api/*'
```

## `sf rules list`

List traffic rules.

```text
USAGE
  $ sf rules list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List traffic rules.

  List the space's traffic rules in the order the edge reads them, with where each one was declared and what the edge
  last said about it.

ALIASES
  $ sf rules ls

EXAMPLES
  List traffic rules for the docs space.

    $ sf rules list --space docs
```

## `sf rules pause`

Pause traffic rules.

```text
USAGE
  $ sf rules pause [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Pause traffic rules.

  Park every traffic rule at the edge. The space then serves as if it declared none. The rules are kept, so `sf rules
  resume` puts them back.

EXAMPLES
  Park the docs space's rules.

    $ sf rules pause --space docs
```

## `sf rules remove NAME`

Remove a traffic rule.

```text
USAGE
  $ sf rules remove NAME [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--kind firewall|cache-bypass]
    [--wait]

ARGUMENTS
  NAME  Name of the rule to remove.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

RULE FLAGS
  --kind=<option>  Which list the rule belongs to.
                   <options: firewall|cache-bypass>

EXECUTION FLAGS
  --[no-]wait  Wait until queued work finishes before returning.

DESCRIPTION
  Remove a traffic rule.

  Remove a traffic rule the space's settings declare. A rule a version's own spacefast.config.ts declares is removed
  there and published.

ALIASES
  $ sf rules rm

EXAMPLES
  Remove a firewall rule after confirmation.

    $ sf rules remove block-logins --kind firewall
```

## `sf rules resume`

Resume traffic rules.

```text
USAGE
  $ sf rules resume [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Resume traffic rules.

  Put every parked traffic rule back into the state it was paused from. Safe to run on a space that is not paused.

EXAMPLES
  Put the docs space's rules back.

    $ sf rules resume --space docs
```

## `sf rules test URL`

Try a request against the traffic rules.

```text
USAGE
  $ sf rules test URL [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--method <value>] [--ip
    <value>] [--country <value>] [--asn <value>] [--user-agent <value>] [--referer <value>] [--ja3 <value>] [--ja4
    <value>] [--header <value>...] [--cookie <value>...] [--file <value>]

ARGUMENTS
  URL  URL or path to answer, for example /wp-login.php.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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

    $ sf rules test /api/orders --file spacefast.config.ts
```

## `sf rules validate`

Check traffic rules before publishing them.

```text
USAGE
  $ sf rules validate [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--file <value>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

RULE FLAGS
  --file=<value>  Config file to read. Defaults to the spacefast.config.ts in this directory.

DESCRIPTION
  Check traffic rules before publishing them.

  Check the traffic rules a local config file declares against the rule grammar and the edge, and report every problem
  with the field it is in. Writes nothing.

EXAMPLES
  Check the rules in this directory's spacefast.config.ts.

    $ sf rules validate

  Check the rules in another config file.

    $ sf rules validate --file build/spacefast.config.ts
```

## `sf runtime`

Inspect a space's runtime.

```text
USAGE
  $ sf runtime [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Inspect a space's runtime.

  Inspect what a space is serving and what runs it.
```

## `sf runtime status`

Show what a space is serving.

```text
USAGE
  $ sf runtime status [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Show what a space is serving.

  Show what a space is serving: its live version, the URL it answers on, and what the live version deployed when it
  ships code. A Zero app lists tables, queries, mutations, endpoints, migration count and schema digest; a worker lists
  entry, bundle digest, routes, endpoints and capabilities. All of it comes from version metadata, so it answers while
  the runtime is asleep or moving.

EXAMPLES
  What the linked space is serving right now.

    $ sf runtime status

  The same for space `docs`.

    $ sf runtime status --space docs
```

## `sf sell activate`

Enable live Sell sales after Stripe readiness checks.

```text
USAGE
  $ sf sell activate [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--mode test|live]

FLAGS
  --mode=<option>  [default: test] Payment mode. Never falls back between test and live.
                   <options: test|live>

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Enable live Sell sales after Stripe readiness checks.

  Requires --mode live and explicit confirmation. Published deployments still need sell.mode: live.

EXAMPLES
  Enable live sales for a ready seller.

    $ sf sell activate --mode live --yes
```

## `sf sell demo`

Prepare a test seller without live onboarding.

```text
USAGE
  $ sf sell demo [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--mode test|live]

FLAGS
  --mode=<option>  [default: test] Payment mode. Never falls back between test and live.
                   <options: test|live>

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

```

## `sf sell onboard`

Start or resume hosted Stripe seller onboarding.

```text
USAGE
  $ sf sell onboard --country <value> [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color]
    [--non-interactive] [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--mode test|live]

FLAGS
  --country=<value>  (required) Seller ISO country code, such as US or PL.
  --mode=<option>    [default: test] Payment mode. Never falls back between test and live.
                     <options: test|live>

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Start or resume hosted Stripe seller onboarding.

  Returns a short-lived, single-use Stripe link for the authenticated seller. Onboarding does not enable live sales.

EXAMPLES
  Start onboarding for a US seller.

    $ sf sell onboard --mode live --country US
```

## `sf sell orders inspect ORDER`

Read payment, delivery and private shipping details.

```text
USAGE
  $ sf sell orders inspect ORDER [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--mode test|live]

ARGUMENTS
  ORDER  Checkout Session ID.

FLAGS
  --mode=<option>  [default: test] Payment mode. Never falls back between test and live.
                   <options: test|live>

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

```

## `sf sell orders list`

List seller orders without buyer addresses.

```text
USAGE
  $ sf sell orders list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--mode test|live] [--limit <NUMBER>] [--cursor <CURSOR>]

FLAGS
  --cursor=<CURSOR>  Continue from the previous page's nextCursor.
  --limit=<NUMBER>   [default: 20] Native orders per page.
  --mode=<option>    [default: test] Payment mode. Never falls back between test and live.
                     <options: test|live>

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

ALIASES
  $ sf sell orders ls
```

## `sf sell orders resend ORDER`

Resend digital delivery and replace the previous download link.

```text
USAGE
  $ sf sell orders resend ORDER [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--mode test|live] [--attempt-key <value>]

ARGUMENTS
  ORDER  Checkout Session ID.

FLAGS
  --attempt-key=<value>  UUID for retrying this exact request without creating another operation.
  --mode=<option>        [default: test] Payment mode. Never falls back between test and live.
                         <options: test|live>

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

```

## `sf sell orders ship ORDER`

Record a physical order's manual shipment.

```text
USAGE
  $ sf sell orders ship ORDER [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--mode test|live] [--attempt-key <value>] [--tracking
    <value>] [--test-shipment]

ARGUMENTS
  ORDER  Checkout Session ID.

FLAGS
  --attempt-key=<value>  UUID for retrying this exact request without creating another operation.
  --mode=<option>        [default: test] Payment mode. Never falls back between test and live.
                         <options: test|live>
  --test-shipment        Acknowledge a simulated shipment; do not ship test orders.
  --tracking=<value>     Optional tracking reference.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

```

## `sf sell products archive KEY`

Archive a source product; new sales stop after publishing.

```text
USAGE
  $ sf sell products archive KEY [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [--directory <value>]

ARGUMENTS
  KEY  Stable product key.

FLAGS
  --directory=<value>  [default: .] Project root containing your Spacefast config.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

```

## `sf sell products create`

Add a product to the configured source catalog.

```text
USAGE
  $ sf sell products create --file <value> [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [--directory <value>]

FLAGS
  --directory=<value>  [default: .] Project root containing your Spacefast config.
  --file=<value>       (required) JSON file containing the complete product declaration.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

```

## `sf sell products list`

List products in the configured source catalog.

```text
USAGE
  $ sf sell products list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [--directory <value>]

FLAGS
  --directory=<value>  [default: .] Project root containing your Spacefast config.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

ALIASES
  $ sf sell products ls
```

## `sf sell products update KEY`

Replace a product declaration while preserving its stable key.

```text
USAGE
  $ sf sell products update KEY --file <value> [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color]
    [--non-interactive] [--profile <NAME>] [--token <TOKEN>] [-y] [--directory <value>]

ARGUMENTS
  KEY  Stable product key.

FLAGS
  --directory=<value>  [default: .] Project root containing your Spacefast config.
  --file=<value>       (required) JSON file containing the complete product declaration.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

```

## `sf sell refresh`

Refresh Stripe payment and payout readiness.

```text
USAGE
  $ sf sell refresh [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--mode test|live]

FLAGS
  --mode=<option>  [default: test] Payment mode. Never falls back between test and live.
                   <options: test|live>

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Refresh Stripe payment and payout readiness.

  Read actual Stripe requirements after onboarding. Payment readiness and payout readiness remain separate.

EXAMPLES
  Refresh the live seller after returning from Stripe.

    $ sf sell refresh --mode live
```

## `sf sell status`

Show Sell payment and payout readiness.

```text
USAGE
  $ sf sell status [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--mode test|live]

FLAGS
  --mode=<option>  [default: test] Payment mode. Never falls back between test and live.
                   <options: test|live>

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

```

## `sf setup`

Sign in, install Spacefast, and publish this project.

```text
USAGE
  $ sf setup [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [--open] [-T <TEAM>] [--agent
    auto|all|generic|claude-code|claude-app|claude-desktop|cursor|codex|chatgpt|vscode|github-copilot|github-copilot-app
    |devin-desktop|devin-cloud|zed|gemini-cli|opencode|amp|warp|factory-droid|cline|continue|raycast|poke|pi|indent|herm
    es|openclaw|grok|grok-build|grok-bot|app.devin.ai|chatgpt-work|claude|claude-code-cli|claude.ai|clawhub|copilot|devi
    n|droid|earendil|factory|gemini|grok.com|grokbot|pi.dev|windsurf...] [--project] [--publish]

FLAGS
  --agent=<option>...
      Agent to set up. Repeat to set up more than one.
      <options: auto|all|generic|claude-code|claude-app|claude-desktop|cursor|codex|chatgpt|vscode|github-copilot|github-c
      opilot-app|devin-desktop|devin-cloud|zed|gemini-cli|opencode|amp|warp|factory-droid|cline|continue|raycast|poke|pi|i
      ndent|hermes|openclaw|grok|grok-build|grok-bot|app.devin.ai|chatgpt-work|claude|claude-code-cli|claude.ai|clawhub|co
      pilot|devin|droid|earendil|factory|gemini|grok.com|grokbot|pi.dev|windsurf>

  --project
      Install into this project only: skills in this folder, no plugins.

  --[no-]publish
      Publish this project after setting up. In a terminal it asks; without one it publishes only with --yes.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

BROWSER FLAGS
  --[no-]open  Open the browser. --no-open prints the link instead.

DESCRIPTION
  Sign in, install Spacefast, and publish this project.

  Sign in, install the Spacefast CLI and agent plugins or skills, then publish this project. In a terminal it asks
  first. `--yes` takes every default: the CLI when it runs through npx and `sf` isn't installed, the detected agents for
  every project, and a publish. That publish pushes this repository when it has a commit, else builds and publishes the
  project when `sf publish` finds a build, else publishes the first of dist, build, out that exists, or this folder when
  it has an index.html, else nothing. Without a terminal and without `--yes`, it does only what `--agent` and
  `--project` say: no CLI install, no publish. It won't publish a checkout saved with an anonymous space's key, or one
  linked to a space in another team. Use `sf setup agent` to install agent tooling alone.

EXAMPLES
  In a terminal: choose what to set up, then whether to publish.

    $ sf setup

  Take every default for the team, without questions.

    $ sf setup -y --team my-team

  Install Cursor skills into this project and publish nothing.

    $ sf setup --agent cursor --project --no-publish

  Without a terminal: set up Cursor for every project, and nothing else.

    $ sf setup --agent cursor --json
```

## `sf setup agent`

Install Spacefast agent tooling.

```text
USAGE
  $ sf setup agent [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [--open] [--agent
    auto|all|generic|claude-code|claude-app|claude-desktop|cursor|codex|chatgpt|vscode|github-copilot|github-copilot-app
    |devin-desktop|devin-cloud|zed|gemini-cli|opencode|amp|warp|factory-droid|cline|continue|raycast|poke|pi|indent|herm
    es|openclaw|grok|grok-build|grok-bot|app.devin.ai|chatgpt-work|claude|claude-code-cli|claude.ai|clawhub|copilot|devi
    n|droid|earendil|factory|gemini|grok.com|grokbot|pi.dev|windsurf...] [--project] [--local | --remote | --oauth]
    [--skip-mcp] [--force] [--agent-name <value> --handoff]

FLAGS
  -y, --yes
      Skip prompts, auto-detect agents, and accept hosted MCP through `sf mcp proxy`.

  --agent=<option>...
      Agent/client to configure. Repeat to configure more than one.
      <options: auto|all|generic|claude-code|claude-app|claude-desktop|cursor|codex|chatgpt|vscode|github-copilot|github-c
      opilot-app|devin-desktop|devin-cloud|zed|gemini-cli|opencode|amp|warp|factory-droid|cline|continue|raycast|poke|pi|i
      ndent|hermes|openclaw|grok|grok-build|grok-bot|app.devin.ai|chatgpt-work|claude|claude-code-cli|claude.ai|clawhub|co
      pilot|devin|droid|earendil|factory|gemini|grok.com|grokbot|pi.dev|windsurf>

  --agent-name=<value>
      With --handoff, the name your user calls you, or your product name, such as Claude Code. The user sees it as the
      connection's name. Defaults to the detected agent.

  --force
      Overwrite locally modified or unverified Spacefast skill files.

  --handoff
      Redeem a one-use handoff link from the dashboard before generating setup. The link is read from stdin.

  --local
      Use checkout-aware local stdio MCP instead of the hosted proxy.

  --oauth
      With --remote, connect directly and let the editor handle OAuth.

  --project
      Install skills and VS Code MCP config into this project, not global directories.

  --remote
      Use hosted MCP through `sf mcp proxy` and the current CLI login.

  --skip-mcp
      Install skills without configuring MCP.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

BROWSER FLAGS
  --[no-]open  Open the browser. --no-open prints the link instead.

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
  $ sf share [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage Space Grants.

  List every active Grant. Use `sf share grant`, `link`, `password`, `token`, or `identity` to add access.
```

## `sf share check`

Explain effective Grant access.

```text
USAGE
  $ sf share check [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--path <value>] [--as
    public|team|person|link|password|machine|external] [--person <value>] [--link <value>] [--password <value>]
    [--machine <value>] [--issuer <value>] [--subject <value>] [--verified-email] [--ip <value>] [--target
    live|version|branch] [--version <value>] [--branch <value>]

FLAGS
  --as=<option>       [default: public] Audience to simulate.
                      <options: public|team|person|link|password|machine|external>
  --branch=<value>    Branch to check, with --target branch.
  --ip=<value>        Hypothetical IP. IP-constrained Grants remain unsupported and denied.
  --issuer=<value>    External identity issuer when --as external.
  --link=<value>      Link id when --as link.
  --machine=<value>   Machine credential id when --as machine.
  --password=<value>  Password credential id when --as password.
  --path=<value>      [default: /] Canonical route to check.
  --person=<value>    Person id when --as person.
  --subject=<value>   External identity subject when --as external.
  --target=<option>   [default: live] Published target kind.
                      <options: live|version|branch>
  --verified-email    Simulate a principal with a verified email.
  --version=<value>   Version to check, with --target version.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Explain effective Grant access.

  Explain the exact additive Grants and capabilities matching one route, audience, and target.
```

## `sf share grant`

Create a Space Grant.

```text
USAGE
  $ sf share grant --to public|team|parent_team [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color]
    [--non-interactive] [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]
    [--wait] [--role viewer|commenter|editor|manager] [--path <value>...] [--exclude <value>...] [--target <value>]
    [--name <value>] [--expires <value>] [--network <value>...] [--country <value>...] [--exclude-country <value>...]
    [--exclude-user-agent <value>...]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

CONSTRAINTS FLAGS
  --country=<value>...             [default: ] Allowed ISO country code. Repeatable.
  --exclude-country=<value>...     [default: ] Blocked ISO country code. Repeatable.
  --exclude-user-agent=<value>...  [default: ] Block user agents containing this text. Repeatable.
  --network=<value>...             [default: ] Unsupported: the runtime has no trusted visitor IP.

GRANT FLAGS
  --exclude=<value>...  [default: ] Excluded route pattern local to this Grant. Repeatable.
  --expires=<value>     Expire after a duration such as 7d or 30m.
  --name=<value>        Human-readable Grant name.
  --path=<value>...     Included route pattern. Repeat for disjoint paths. Required for public and team.
  --role=<option>       Role: viewer, commenter, editor, or manager. Required for public and team.
                        <options: viewer|commenter|editor|manager>
  --target=<value>      [default: live] live, all-versions, version:<id>, or branch:<name>.
  --to=<option>         (required) Audience: public, team, or parent_team.
                        <options: public|team|parent_team>

EXECUTION FLAGS
  --[no-]wait  Wait until queued work finishes before returning.

DESCRIPTION
  Create a Space Grant.

  Create one additive Grant. Credential-backed audiences use `sf share link`, `password`, `token`, or `identity` so
  their proof and Grant are created together. `--to parent_team` lets everyone in the owning subteam's parent team view
  the whole live space (Enterprise and Internal families); it takes no role, path, target, or constraint flags.

EXAMPLES
  Let the owning team view the docs subtree.

    $ sf share grant --to team --role viewer --path '/docs/**'

  Let everyone in the parent team view this subteam's live space.

    $ sf share grant --to parent_team

  Publish a review subtree with anonymous Comments.

    $ sf share grant --to public --role commenter --path '/proposal/**' --exclude '/proposal/internal/**'

  Make every immutable Version public.

    $ sf share grant --to public --role viewer --path '/**' --target all-versions
```

## `sf share grant update GRANT`

Edit a direct managed Grant.

```text
USAGE
  $ sf share grant update GRANT [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--wait] [--name
    <value>] [--role viewer|commenter|editor|manager] [--exclude <value>... --path <value>...] [--target <value>]
    [--expires <value> | --no-expiry] [--network <value>... | --no-network] [--country <value>... | ] [--exclude-country
    <value>... | ] [--exclude-user-agent <value>... | ]

ARGUMENTS
  GRANT  Managed Grant id.

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
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

CONSTRAINTS FLAGS
  --country=<value>...             Replace allowed ISO country codes. Repeatable.
  --exclude-country=<value>...     Replace blocked ISO country codes. Repeatable.
  --exclude-user-agent=<value>...  Replace blocked user-agent substrings. Repeatable.
  --network=<value>...             Unsupported: the runtime has no trusted visitor IP.
  --no-network                     Remove every network constraint from this Grant.

EXECUTION FLAGS
  --[no-]wait  Wait until queued work finishes before returning.

DESCRIPTION
  Edit a direct managed Grant.

  Replace editable dimensions of a direct managed Grant while preserving its stable id.
```

## `sf share identity`

Manage external identity access.

```text
USAGE
  $ sf share identity [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage external identity access.

  Connect OIDC or a white-label signer, then grant external subjects precise capabilities and paths.
```

## `sf share identity create`

Create an identity connection.

```text
USAGE
  $ sf share identity create --type oidc|signer --name <value> --issuer <value> [--api-url <URL>] [--cwd <DIR>]
    [-d] [--no-color] [--non-interactive] [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--client-id <value>]
    [--client-secret <value>] [--authorize-url <value>] [--key <value>...]

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
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf share identity grant --connection <value> --subject <value> --name <value> [--api-url <URL>] [--cwd <DIR>]
    [-d] [--no-color] [--non-interactive] [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]
    [--space <SPACE>] [--role viewer|commenter|editor|manager] [--path <value>...] [--except <value>...] [--target
    <value>] [--not-before <value>] [--expires <value>] [--max-uses <value>] [--network <value>...] [--country
    <value>...] [--exclude-country <value>...] [--exclude-user-agent <value>...] [--require-verified-email]

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
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

CONSTRAINTS FLAGS
  --country=<value>...             [default: ] Allowed ISO country code. Repeatable.
  --exclude-country=<value>...     [default: ] Blocked ISO country code. Repeatable.
  --exclude-user-agent=<value>...  [default: ] Block user agents containing this text. Repeatable.
  --expires=<value>                Expire after a duration such as 7d or 30m.
  --max-uses=<value>               Maximum successful admissions before the Grant stops working.
  --network=<value>...             [default: ] Unsupported: the runtime has no trusted visitor IP.
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

## `sf share identity list`

List identity connections.

```text
USAGE
  $ sf share identity list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List identity connections.

  List Team OIDC and white-label signer connections.

ALIASES
  $ sf share identity ls

EXAMPLES
  List the connections a Team can grant against.

    $ sf share identity list --team acme
```

## `sf share identity revoke CONNECTION`

Revoke an identity connection.

```text
USAGE
  $ sf share identity revoke CONNECTION [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  CONNECTION  Identity connection id.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf share identity update CONNECTION [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--name <value>] [--client-id <value>] [--client-secret
    <value>] [--authorize-url <value>] [--key <value>...] [--session-ttl <value>]

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
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf share link [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage Links.

  Create, list, edit, copy, and revoke named Links. Each Link owns one Grant with paths, exclusions, capabilities, and a
  serving target.
```

## `sf share link copy LINK`

Copy a Link.

```text
USAGE
  $ sf share link copy LINK [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--show-secret]

ARGUMENTS
  LINK  Share link id (see `sf share link list`).

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf share link create --name <value> [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--landing <value>]
    [--path <value>...] [--exclude <value>...] [--role viewer|commenter] [--target <value>] [--not-before <value>]
    [--expires <value>] [--max-uses <value>] [--require-verified-email] [--network <value>...] [--country <value>...]
    [--exclude-country <value>...] [--exclude-user-agent <value>...] [--show-secret]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

CONSTRAINTS FLAGS
  --country=<value>...             [default: ] Allowed ISO country code. Repeatable.
  --exclude-country=<value>...     [default: ] Blocked ISO country code. Repeatable.
  --exclude-user-agent=<value>...  [default: ] Block user agents containing this text. Repeatable.
  --expires=<value>                How long the link lasts (e.g. 30m, 24h, 7d). Omit for no expiry.
  --max-uses=<value>               Maximum successful opens before the Link stops working.
  --network=<value>...             [default: ] Unsupported: the runtime has no trusted visitor IP.
  --not-before=<value>             Do not admit this Link before this ISO date-time.
  --require-verified-email         Admit only visitors whose session has a verified email.

LINK FLAGS
  --exclude=<value>...  [default: ] Excluded route pattern local to this Link. Repeatable.
  --landing=<value>     [default: /] Clean route opened after exchange.
  --name=<value>        (required) Human name shown in the Links list.
  --path=<value>...     [default: /**] Included route pattern. Repeat for disjoint paths.
  --role=<option>       [default: viewer] Role: viewer or commenter. Defaults to viewer. A commenter on the live target
                        needs comments set to Everywhere; otherwise target a Version.
                        <options: viewer|commenter>
  --show-secret         Print the share URL even when output is JSON or non-interactive.
  --target=<value>      [default: live] live, all-versions, version:<id>, or branch:<name>.

DESCRIPTION
  Create a Link.

  Create a named Link backed by one Grant. Links can View or Comment on multiple path patterns.

EXAMPLES
  Create a client Link that can comment on one Version's two path groups except internal docs.

    $ sf share link create --landing /docs --path "/docs/**" --path "/assets/**" --exclude "/docs/internal/**" \
      --role commenter --target version:ver_123 --name "Client review" --expires 7d
```

## `sf share link list`

List Links.

```text
USAGE
  $ sf share link list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List Links.

  List named Links with Grant paths, capabilities, target, expiry, and lifecycle. List reads never carry credentials.

ALIASES
  $ sf share link ls

EXAMPLES
  List share links for the docs space.

    $ sf share link list --space docs
```

## `sf share link revoke LINK`

Revoke a Link.

```text
USAGE
  $ sf share link revoke LINK [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

ARGUMENTS
  LINK  Share link id (see `sf share link list`).

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Revoke a Link.

  Revoke a share link. The grant drops from the compiled rule set in the same write, so every outstanding URL stops
  working on the next request.

EXAMPLES
  Revoke a share link.

    $ sf share link revoke lnk_123
```

## `sf share link update LINK`

Edit Link metadata.

```text
USAGE
  $ sf share link update LINK [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--name <value>] [--landing
    <value>] [--exclude <value>... --path <value>...] [--role viewer|commenter] [--target <value>] [--not-before <value>
    | --no-not-before] [--expires <value> | --no-expiry] [--max-uses <value> | --no-max-uses] [--require-verified-email
    | --allow-unverified-email] [--network <value>... | --no-network] [--country <value>... | ] [--exclude-country
    <value>... | ] [--exclude-user-agent <value>... | ]

ARGUMENTS
  LINK  Link id.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

CONSTRAINTS FLAGS
  --allow-unverified-email         Remove the verified-email requirement.
  --country=<value>...             Replace allowed ISO country codes. Repeatable.
  --exclude-country=<value>...     Replace blocked ISO country codes. Repeatable.
  --exclude-user-agent=<value>...  Replace blocked user-agent substrings. Repeatable.
  --expires=<value>                New lifetime from now (e.g. 30m, 24h, 7d).
  --max-uses=<value>               Replace the maximum successful opens.
  --network=<value>...             Unsupported: the runtime has no trusted visitor IP.
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
  --role=<option>       Replace the role: viewer or commenter. A commenter on the live target needs comments set to
                        Everywhere.
                        <options: viewer|commenter>
  --target=<value>      Replace the target: live, all-versions, version:<id>, or branch:<name>.

DESCRIPTION
  Edit Link metadata.

  Replace a Link's metadata or Grant dimensions without rotating its stable URL.
```

## `sf share list`

List Space Grants.

```text
USAGE
  $ sf share list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf share password [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage password access.

  Create, list, rotate, and revoke named password Grants. Passwords never live in sf.jsonc.
```

## `sf share password create`

Create password access.

```text
USAGE
  $ sf share password create --name <value> --path <value>... [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color]
    [--non-interactive] [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]
    [--password <value>] [--password-from-stdin] [--role viewer|commenter] [--exclude <value>...] [--target <value>]
    [--not-before <value>] [--expires <value>] [--max-uses <value>] [--network <value>...] [--country <value>...]
    [--exclude-country <value>...] [--exclude-user-agent <value>...] [--require-verified-email]

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
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

CONSTRAINTS FLAGS
  --country=<value>...             [default: ] Allowed ISO country code. Repeatable.
  --exclude-country=<value>...     [default: ] Blocked ISO country code. Repeatable.
  --exclude-user-agent=<value>...  [default: ] Block user agents containing this text. Repeatable.
  --expires=<value>                Expire after a duration such as 7d or 30m.
  --max-uses=<value>               Maximum successful admissions before the Grant stops working.
  --network=<value>...             [default: ] Unsupported: the runtime has no trusted visitor IP.
  --not-before=<value>             Do not admit this Grant before this ISO date-time.
  --require-verified-email         Require email verification for this credential.

DESCRIPTION
  Create password access.

  Create a named scoped password Grant. The verifier is Argon2id and rotation fences existing sessions.
```

## `sf share password list`

List password access.

```text
USAGE
  $ sf share password list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List password access.

  List password proof metadata and the Grants they admit.

ALIASES
  $ sf share password ls
```

## `sf share password revoke CREDENTIAL`

Revoke password access.

```text
USAGE
  $ sf share password revoke CREDENTIAL [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

ARGUMENTS
  CREDENTIAL  Password credential id.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Revoke password access.

  Revoke password access and its canonical Grant.
```

## `sf share password rotate CREDENTIAL`

Rotate a password.

```text
USAGE
  $ sf share password rotate CREDENTIAL [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--password <value>]
    [--password-from-stdin]

ARGUMENTS
  CREDENTIAL  Password credential id.

FLAGS
  --password=<value>     [env: SPACEFAST_SHARE_PASSWORD] New password, or set SPACEFAST_SHARE_PASSWORD.
  --password-from-stdin  Read the new password from standard input.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Rotate a password.

  Replace a password and immediately fence sessions using the old one.
```

## `sf share people`

Manage People.

```text
USAGE
  $ sf share people [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage People.

  Invite, list, resend, edit, and remove People. A Person can hold roles on multiple route subtrees.
```

## `sf share people invite EMAIL`

Invite a Person.

```text
USAGE
  $ sf share people invite EMAIL [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--role
    viewer|commenter|editor|manager] [--scope <value>...] [--target <value>]

ARGUMENTS
  EMAIL  Email address to invite.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

PEOPLE FLAGS
  --role=<option>     [default: viewer] Role granted on every supplied scope.
                      <options: viewer|commenter|editor|manager>
  --scope=<value>...  [default: /] Canonical route subtree. Repeat for multiple scopes.
  --target=<value>    [default: live] live, all-versions, version:<id>, or branch:<name>.

DESCRIPTION
  Invite a Person.

  Invite one Person without requiring an account. Repeat --scope to grant the same role on multiple route subtrees.

EXAMPLES
  Invite a commenter to two route subtrees on every Version. Commenters on the live space need comments set to
  Everywhere.

    $ sf share people invite person@example.com --role commenter --scope /docs --scope /assets --target all-versions

  Invite someone to one immutable version instead of the live space.

    $ sf share people invite client@example.com --role viewer --target version:ver_123
```

## `sf share people list`

List People.

```text
USAGE
  $ sf share people list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List People.

  List People and every scoped role they hold.

ALIASES
  $ sf share people ls
```

## `sf share people remove PERSON`

Remove a Person.

```text
USAGE
  $ sf share people remove PERSON [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

ARGUMENTS
  PERSON  Person id or email (see `sf share people list`).

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Remove a Person.

  Remove a Person and all of their scoped grants.

ALIASES
  $ sf share people rm
```

## `sf share people resend PERSON`

Resend a Person invitation.

```text
USAGE
  $ sf share people resend PERSON [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

ARGUMENTS
  PERSON  Person id or email.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Resend a Person invitation.

  Replace a pending Person invitation and send a fresh accountless acceptance email.
```

## `sf share people update PERSON`

Edit a Person's scoped roles.

```text
USAGE
  $ sf share people update PERSON --grant <value>... [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color]
    [--non-interactive] [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]
    [--target <value>]

ARGUMENTS
  PERSON  Person id or email address.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

PEOPLE FLAGS
  --grant=<value>...  (required) Scoped role in <path>=<role> form. Repeat to replace the full grant set.
  --target=<value>    [default: live] live, all-versions, version:<id>, or branch:<name>.

DESCRIPTION
  Edit a Person's scoped roles.

  Replace a Person's scoped roles atomically. Repeat --grant for every route subtree they should retain.

EXAMPLES
  Keep root viewing and grant editing under /docs.

    $ sf share people update person@example.com --grant /=viewer --grant /docs=editor
```

## `sf share request`

Manage access requests.

```text
USAGE
  $ sf share request [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage access requests.

  List, approve, and deny inbox-verified access requests.
```

## `sf share request approve REQUEST`

Approve an access request.

```text
USAGE
  $ sf share request approve REQUEST [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--role
    viewer|commenter|editor|manager] [--scope <value>]

ARGUMENTS
  REQUEST  Access request id.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

APPROVE FLAGS
  --role=<option>  Approved role. Defaults to the requested role.
                   <options: viewer|commenter|editor|manager>
  --scope=<value>  Approved route subtree. Defaults to the requested scope.

DESCRIPTION
  Approve an access request.

  Approve an access request into the canonical People list. Override the requested role or route scopes when needed.
```

## `sf share request deny REQUEST`

Deny an access request.

```text
USAGE
  $ sf share request deny REQUEST [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

ARGUMENTS
  REQUEST  Access request id.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Deny an access request.

  Deny a pending access request.
```

## `sf share request list`

List access requests.

```text
USAGE
  $ sf share request list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List access requests.

  List pending access requests with requested role and route scope.

ALIASES
  $ sf share request ls
```

## `sf share revoke GRANT`

Revoke a Space Grant.

```text
USAGE
  $ sf share revoke GRANT [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--wait]

ARGUMENTS
  GRANT  Grant id (see `sf share list`).

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXECUTION FLAGS
  --[no-]wait  Wait until queued work finishes before returning.

DESCRIPTION
  Revoke a Space Grant.

  Revoke one managed Grant. Change config Grants in sf.jsonc. Credential Grants normally revoke through their credential
  command.
```

## `sf share token`

Manage machine access.

```text
USAGE
  $ sf share token [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage machine access.

  Manage machine credentials backed by scoped Grants. Tokens are sent as `X-SF-Authorization: Bearer <token>`.
```

## `sf share token create`

Create a machine credential.

```text
USAGE
  $ sf share token create --name <value> --path <value>... [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color]
    [--non-interactive] [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]
    [--role viewer|commenter|editor|manager] [--exclude <value>...] [--target <value>] [--not-before <value>] [--expires
    <value>] [--max-uses <value>] [--network <value>...] [--country <value>...] [--exclude-country <value>...]
    [--exclude-user-agent <value>...] [--show-secret]

FLAGS
  --exclude=<value>...  [default: ] Local exclusion pattern.
  --name=<value>        (required) Human-readable machine name.
  --path=<value>...     (required) Included route pattern.
  --role=<option>       [default: viewer] Role granted to this machine.
                        <options: viewer|commenter|editor|manager>
  --show-secret         Print the one-time token in JSON or non-interactive output.
  --target=<value>      [default: live] Published target selector.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

CONSTRAINTS FLAGS
  --country=<value>...             [default: ] Allowed ISO country code. Repeatable.
  --exclude-country=<value>...     [default: ] Blocked ISO country code. Repeatable.
  --exclude-user-agent=<value>...  [default: ] Block user agents containing this text. Repeatable.
  --expires=<value>                Expire after a duration such as 7d or 30m.
  --max-uses=<value>               Maximum successful admissions before the Grant stops working.
  --network=<value>...             [default: ] Unsupported: the runtime has no trusted visitor IP.
  --not-before=<value>             Do not admit this Grant before this ISO date-time.

DESCRIPTION
  Create a machine credential.

  Create a named machine credential and scoped Grant. The token is returned once. Send it on every request as
  `X-SF-Authorization: Bearer <token>`; the plain Authorization header belongs to the Space's own app and is not
  checked.

EXAMPLES
  Mint a viewer token for CI.

    $ sf share token create --name ci --path '/**' --show-secret --json | jq -r .data.token

  Read the private Space with it.

    curl -H "X-SF-Authorization: Bearer $TOKEN" https://my-space.space.fast/
```

## `sf share token list`

List machine access.

```text
USAGE
  $ sf share token list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List machine access.

  List machine credential metadata and the Grants they admit.

ALIASES
  $ sf share token ls
```

## `sf share token revoke CREDENTIAL`

Revoke machine access.

```text
USAGE
  $ sf share token revoke CREDENTIAL [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

ARGUMENTS
  CREDENTIAL  Machine credential id.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Revoke machine access.

  Revoke a machine credential and its canonical Grant.
```

## `sf share token rotate CREDENTIAL`

Rotate a machine credential.

```text
USAGE
  $ sf share token rotate CREDENTIAL [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--show-secret]

ARGUMENTS
  CREDENTIAL  Machine credential id.

FLAGS
  --show-secret  Print the one-time token in JSON or non-interactive output.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Rotate a machine credential.

  Rotate a machine credential, fence the old token, and return the replacement once.
```

## `sf skills`

Manage Spacefast agent skills.

```text
USAGE
  $ sf skills [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage Spacefast agent skills.

  Install, check, and remove the Spacefast agent skill bundled with this CLI.
```

## `sf skills install`

Install or update Spacefast agent skills.

```text
USAGE
  $ sf skills install [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [--agent auto|all|generic|claude-code|claude-app|claude-desktop|cursor|codex|chatgpt|
    vscode|github-copilot|github-copilot-app|devin-desktop|devin-cloud|zed|gemini-cli|opencode|amp|warp|factory-droid|cl
    ine|continue|raycast|poke|pi|indent|hermes|openclaw|grok|grok-build|grok-bot|app.devin.ai|chatgpt-work|claude|claude
    -code-cli|claude.ai|clawhub|copilot|devin|droid|earendil|factory|gemini|grok.com|grokbot|pi.dev|windsurf...]
    [--project] [--list] [--force]

FLAGS
  --agent=<option>...
      Agent to install for. `auto` configures detected agents plus .agents/skills.
      <options: auto|all|generic|claude-code|claude-app|claude-desktop|cursor|codex|chatgpt|vscode|github-copilot|github-c
      opilot-app|devin-desktop|devin-cloud|zed|gemini-cli|opencode|amp|warp|factory-droid|cline|continue|raycast|poke|pi|i
      ndent|hermes|openclaw|grok|grok-build|grok-bot|app.devin.ai|chatgpt-work|claude|claude-code-cli|claude.ai|clawhub|co
      pilot|devin|droid|earendil|factory|gemini|grok.com|grokbot|pi.dev|windsurf>

  --force
      Overwrite locally modified or unverified Spacefast skill files.

  --list
      List bundled skill files without installing.

  --project
      Install into this project instead of the agent's global skills directory.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Install or update Spacefast agent skills.

  Install or update the Spacefast agent skill bundled with this CLI.

EXAMPLES
  Install or update the Spacefast skill for detected agents.

    $ sf skills install

  Install or update the Spacefast skill for Codex.

    $ sf skills install --agent codex

  Install the Spacefast skill to every supported agent.

    $ sf skills install --agent all
```

## `sf skills remove`

Remove Spacefast agent skills.

```text
USAGE
  $ sf skills remove [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [--agent auto|all|generic|claude-code|claude-app|claude-desktop|cursor|codex|chatgpt|
    vscode|github-copilot|github-copilot-app|devin-desktop|devin-cloud|zed|gemini-cli|opencode|amp|warp|factory-droid|cl
    ine|continue|raycast|poke|pi|indent|hermes|openclaw|grok|grok-build|grok-bot|app.devin.ai|chatgpt-work|claude|claude
    -code-cli|claude.ai|clawhub|copilot|devin|droid|earendil|factory|gemini|grok.com|grokbot|pi.dev|windsurf...]
    [--project] [--force]

FLAGS
  --agent=<option>...
      Agent to remove from. Repeat to remove from more than one.
      <options: auto|all|generic|claude-code|claude-app|claude-desktop|cursor|codex|chatgpt|vscode|github-copilot|github-c
      opilot-app|devin-desktop|devin-cloud|zed|gemini-cli|opencode|amp|warp|factory-droid|cline|continue|raycast|poke|pi|i
      ndent|hermes|openclaw|grok|grok-build|grok-bot|app.devin.ai|chatgpt-work|claude|claude-code-cli|claude.ai|clawhub|co
      pilot|devin|droid|earendil|factory|gemini|grok.com|grokbot|pi.dev|windsurf>

  --force
      Remove locally modified or unverified Spacefast skill files.

  --project
      Remove project-local skills instead of global skills.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Remove Spacefast agent skills.

  Remove the Spacefast skill while preserving locally modified files unless forced.

ALIASES
  $ sf skills rm

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
  $ sf skills status [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [--agent auto|all|generic|claude-code|claude-app|claude-desktop|cursor|codex|chatgpt|
    vscode|github-copilot|github-copilot-app|devin-desktop|devin-cloud|zed|gemini-cli|opencode|amp|warp|factory-droid|cl
    ine|continue|raycast|poke|pi|indent|hermes|openclaw|grok|grok-build|grok-bot|app.devin.ai|chatgpt-work|claude|claude
    -code-cli|claude.ai|clawhub|copilot|devin|droid|earendil|factory|gemini|grok.com|grokbot|pi.dev|windsurf...]
    [--project]

FLAGS
  --agent=<option>...
      Agent to check. `auto` checks detected agents plus .agents/skills.
      <options: auto|all|generic|claude-code|claude-app|claude-desktop|cursor|codex|chatgpt|vscode|github-copilot|github-c
      opilot-app|devin-desktop|devin-cloud|zed|gemini-cli|opencode|amp|warp|factory-droid|cline|continue|raycast|poke|pi|i
      ndent|hermes|openclaw|grok|grok-build|grok-bot|app.devin.ai|chatgpt-work|claude|claude-code-cli|claude.ai|clawhub|co
      pilot|devin|droid|earendil|factory|gemini|grok.com|grokbot|pi.dev|windsurf>

  --project
      Check project-local skills instead of global skill directories.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Check Spacefast skill installation.

  Check installed Spacefast skills against the revision bundled with this CLI.

EXAMPLES
  Check all common global skill locations.

    $ sf skills status

  Check the Codex Spacefast skill location.

    $ sf skills status --agent codex

  Check this project's Claude Code skill location.

    $ sf skills status --project --agent claude-code
```

## `sf source archive`

Download a repository archive.

```text
USAGE
  $ sf source archive [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--connection-type
    connected|hosted] [--ref <value>] [--output <value>] [--force] [--include-glob <value>] [--exclude-glob <value>]
    [--max-blob-size <value>] [--archive-prefix <value>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

REPOSITORY FLAGS
  --archive-prefix=<value>    Directory prefix inside the archive.
  --connection-type=<option>  [default: connected] Repository connection type.
                              <options: connected|hosted>
  --exclude-glob=<value>      Glob to exclude from the archive.
  --force                     Overwrite an existing archive file.
  --include-glob=<value>      Glob to include in the archive.
  --max-blob-size=<value>     Maximum blob size to include.
  --output=<value>            Archive file path, or an existing directory to write the archive into.
  --ref=<value>               Branch, tag, commit, or ref to archive.

DESCRIPTION
  Download a repository archive.

  Download a tar.gz archive of a space's source repository.

EXAMPLES
  Download a repository archive for the main ref.

    $ sf source archive --space docs --ref main --output ./repo.tar.gz
```

## `sf source availability`

Read or set Source available.

```text
USAGE
  $ sf source availability [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--enable | --disable]
    [--remix-button]

FLAGS
  --disable            Disable future remixes.
  --enable             Enable main-branch remixes.
  --[no-]remix-button  Show a Remix button on the live site while source is available.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Read or set Source available.

  Allow main-branch remixes of the existing source repository. Known draft commits may also be accessible in remixes.
  Website access is separate. A Remix button on the live site is a separate choice: --remix-button shows it while source
  is available, --no-remix-button hides it.

EXAMPLES
  Allow remixes and show a Remix button on the live site.

    $ sf source availability --space docs --enable --remix-button

  Hide the Remix button and keep remixes allowed.

    $ sf source availability --space docs --no-remix-button
```

## `sf source branch`

Manage ephemeral repository branches.

```text
USAGE
  $ sf source branch --branch <value> [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color]
    [--non-interactive] [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]
    [--base-ref <value>] [--base-branch <value>] [--connection-type connected|hosted] [--remote] [--delete]
    [--ttl-seconds <value>] [--read-only-ref <value>...]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

REPOSITORY FLAGS
  --base-branch=<value>       Branch to create the branch from. Defaults to the production branch when --base-ref is
                              omitted.
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
  $ sf source cat PATH [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--connection-type
    connected|hosted] [--ref <value>] [--max-bytes <value>]

ARGUMENTS
  PATH  Repository file path to print.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
    [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile <NAME>] [--token <TOKEN>]
    [-y] [-T <TEAM>] [--space <SPACE>] [--expected-head-sha <value>] [--base-branch <value>]
    [--ephemeral] [--ephemeral-base] [--author-name <value>] [--author-email <value>] [--committer-name <value>]
    [--committer-email <value>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
    [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile <NAME>] [--token <TOKEN>] [-y]
    [-T <TEAM>] [--space <SPACE>] [--expected-head-sha <value>] [--base-branch <value>]
    [--ephemeral] [--ephemeral-base] [--author-name <value>] [--author-email <value>] [--committer-name <value>]
    [--committer-email <value>] [--file <value>...] [--delete <value>...] [--mode 100644|100755|120000|160000]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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

## `sf source commits inspect SHA`

Show a repository commit.

```text
USAGE
  $ sf source commits inspect SHA [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--connection-type
    connected|hosted]

ARGUMENTS
  SHA  Commit SHA to inspect.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

REPOSITORY FLAGS
  --connection-type=<option>  [default: connected] Repository connection type.
                              <options: connected|hosted>

DESCRIPTION
  Show a repository commit.

  Read commit metadata from a space's source repository.

EXAMPLES
  Read commit metadata for a SHA.

    $ sf source commits inspect <commit-sha> --space docs
```

## `sf source commits list`

List repository commits.

```text
USAGE
  $ sf source commits list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--connection-type
    connected|hosted] [--branch <value>] [--path <value>] [--cursor <CURSOR>] [--limit <NUMBER>] [--ephemeral]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

REPOSITORY FLAGS
  --branch=<value>            Branch to list commits from.
  --connection-type=<option>  [default: connected] Repository connection type.
                              <options: connected|hosted>
  --cursor=<CURSOR>           Pagination cursor.
  --ephemeral                 Treat the branch as ephemeral.
  --limit=<NUMBER>            Maximum commits to return.
  --path=<value>              Repository path to filter commit history.

DESCRIPTION
  List repository commits.

  List commit history from a space's source repository.

ALIASES
  $ sf source commits ls

EXAMPLES
  List commit history for the main branch.

    $ sf source commits list --space docs --branch main
```

## `sf source diff`

Show a repository branch diff.

```text
USAGE
  $ sf source diff --branch <value> [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color]
    [--non-interactive] [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]
    [--connection-type connected|hosted] [--base <value>] [--path <value>] [--ephemeral] [--ephemeral-base]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf source import [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--ttl-seconds <value>]
    [--read-only-ref <value>...]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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

## `sf source list`

List repository files.

```text
USAGE
  $ sf source list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--connection-type
    connected|hosted] [--ref <value>] [--path <value>] [--recursive] [--metadata] [--limit <NUMBER>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

REPOSITORY FLAGS
  --connection-type=<option>  [default: connected] Repository connection type.
                              <options: connected|hosted>
  --limit=<NUMBER>            Maximum number of entries to return.
  --metadata                  Include size and last-commit metadata.
  --path=<value>              Repository directory to list.
  --recursive                 List files recursively.
  --ref=<value>               Branch, tag, commit, or ref to inspect.

DESCRIPTION
  List repository files.

  List files in a space's source repository.

ALIASES
  $ sf source ls

EXAMPLES
  List files under src recursively.

    $ sf source list --space docs --path src --recursive
```

## `sf source merge SOURCE TARGET`

Merge repository branches.

```text
USAGE
  $ sf source merge SOURCE TARGET --connection-type connected|hosted [--api-url <URL>] [--cwd <DIR>] [-d]
    [--no-color] [--non-interactive] [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]
    [--space <SPACE>] [--strategy merge|ff_only|ff_prefer] [--source-ephemeral] [--target-ephemeral]
    [--expected-target-sha <value>] [--message <value>] [--allow-unrelated-histories] [--squash]

ARGUMENTS
  SOURCE  Source branch to merge from.
  TARGET  Target branch to merge into.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf source search PATTERN [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--connection-type
    connected|hosted] [--ref <value>] [--path <value>] [--include-glob <value>] [--exclude-glob <value>] [--extension
    <value>] [--case-sensitive] [--context-before <value>] [--context-after <value>] [--max-lines <value>]
    [--max-matches-per-file <value>] [--cursor <CURSOR>] [--limit <NUMBER>]

ARGUMENTS
  PATTERN  Text or pattern to search for.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

REPOSITORY FLAGS
  --case-sensitive                Use case-sensitive matching.
  --connection-type=<option>      [default: connected] Repository connection type.
                                  <options: connected|hosted>
  --context-after=<value>         Context lines after each match.
  --context-before=<value>        Context lines before each match.
  --cursor=<CURSOR>               Pagination cursor.
  --exclude-glob=<value>          Glob to exclude from search.
  --extension=<value>             File extension filter.
  --include-glob=<value>          Glob to include in search.
  --limit=<NUMBER>                Maximum files to return.
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
  $ sf source tags create NAME --connection-type connected|hosted --target <value> [--api-url <URL>] [--cwd
    <DIR>] [-d] [--no-color] [--non-interactive] [--profile <NAME>] [--token <TOKEN>] [-y] [-T
    <TEAM>] [--space <SPACE>]

ARGUMENTS
  NAME  Tag name to create.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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

## `sf source tags list`

List repository tags.

```text
USAGE
  $ sf source tags list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--connection-type
    connected|hosted] [--cursor <CURSOR>] [--limit <NUMBER>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

REPOSITORY FLAGS
  --connection-type=<option>  [default: connected] Repository connection type.
                              <options: connected|hosted>
  --cursor=<CURSOR>           Pagination cursor.
  --limit=<NUMBER>            Maximum tags to return.

DESCRIPTION
  List repository tags.

  List tags in a space's source repository.

ALIASES
  $ sf source tags ls

EXAMPLES
  $ sf source tags list --space docs
```

## `sf spaces`

Manage spaces.

```text
USAGE
  $ sf spaces [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage spaces.

  Manage Spacefast spaces.
```

## `sf spaces archive`

Archive a space.

```text
USAGE
  $ sf spaces archive [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <value>...]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Archive a space.

  Stop serving a space and retain its versions, source, database, storage, and domains. Repeat --space to archive
  several spaces in one run.

EXAMPLES
  $ sf spaces archive --space docs

  $ sf spaces archive --team acme --space old-report --space q3-dashboard
```

## `sf spaces check NAME`

Check whether a space name is available.

```text
USAGE
  $ sf spaces check NAME [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  NAME  Space name or slug to check.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Check whether a space name is available.

  Check whether a space slug and its managed hostname are available. Reserved names are rejected, as are slugs
  containing spacefast, stattic, automattic, wordpress, or paypal anywhere.

EXAMPLES
  Check a space name in the acme team.

    $ sf spaces check my-site --team acme
```

## `sf spaces claim`

Claim an anonymous space.

```text
USAGE
  $ sf spaces claim [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [--open] [--keep-publishing] [--space <SPACE>] [-T <TEAM>]
    [--wait]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

BROWSER FLAGS
  --[no-]open  Open the browser. --no-open prints the link instead.

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

  Claim with the claim link from standard input, keeping the key out of argv.

    printf '%s' "$CLAIM_LINK" | sf spaces claim --space spc_xxx --claim-token - --team my-team
```

## `sf spaces create`

Create a Space or remix a shared Space.

```text
USAGE
  $ sf spaces create [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--git <value>] [--name <value>] [--slug <value>] [--hostname-scope
    team|global] [--spa auto|true|false] [--mode website|files] [--save-state] [--show-secret]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

REPOSITORY FLAGS
  --git=<value>  Remix a Source available Spacefast repository's main branch.

SPACE METADATA FLAGS
  --hostname-scope=<option>  Managed hostname scope for newly created spaces.
                             <options: team|global>
  --mode=<option>            Space serving mode.
                             <options: website|files>
  --name=<value>             Set the space title.
  --slug=<value>             Set the space slug when creating a new space. Reserved names are rejected, as are slugs
                             containing spacefast, stattic, automattic, wordpress, or paypal anywhere.
  --spa=<option>             [default: auto] Control single-page app fallback detection.
                             <options: auto|true|false>

EXECUTION FLAGS
  --[no-]save-state  Write the created space to .spacefast/state.json.

OUTPUT FLAGS
  --show-secret  Print the access URL and claim link in JSON or non-interactive output.

DESCRIPTION
  Create a Space or remix a shared Space.

  Create a space and save it to .spacefast/state.json.

EXAMPLES
  $ sf spaces create --name docs
```

## `sf spaces delete`

Delete a space.

```text
USAGE
  $ sf spaces delete [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--wait]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

EXECUTION FLAGS
  --[no-]wait  Wait until queued work finishes before returning.

DESCRIPTION
  Delete a space.

  Delete the selected space: it goes offline and you can't restore it. Its slug stays reserved to prevent link takeover;
  only an operator can release it. Versions and data are kept for operator cleanup. To stop serving a space and bring it
  back later, use `sf spaces archive`.

ALIASES
  $ sf spaces rm
  $ sf spaces del

EXAMPLES
  Delete a space after confirmation.

    $ sf spaces delete --space docs

  Delete a space without the confirmation prompt.

    $ sf spaces delete --space docs --yes
```

## `sf spaces download`

Download a space version.

```text
USAGE
  $ sf spaces download [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--output <value>] [--force]
    [--concurrency <value>] [--version <value>]

FLAGS
  --concurrency=<value>  [default: 10] Number of files to download at the same time.
  --force                Overwrite files that already exist in the output directory.
  --output=<value>       [default: .] Directory to write downloaded files into.
  --version=<value>      [default: latest] Version ID, version ref, number, or "latest".

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Download a space version.

  Download files from a space version. Defaults to the latest version.

EXAMPLES
  Download the latest version's files into ./out.

    $ sf spaces download --space docs --output ./out

  Download version v3, overwriting existing files.

    $ sf spaces download --space docs --version v3 --force
```

## `sf spaces duplicate`

Duplicate a space.

```text
USAGE
  $ sf spaces duplicate [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--slug <value>] [--title
    <value>] [--version <value>] [--wait] [--wait-timeout <value>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DUPLICATE TARGET FLAGS
  --slug=<value>   Slug for the duplicate space. Reserved names are rejected, as are slugs containing spacefast,
                   stattic, automattic, wordpress, or paypal anywhere.
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

## `sf spaces inspect`

Show a space.

```text
USAGE
  $ sf spaces inspect [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Show a space.

  Print a space's live runtime state and current version.

EXAMPLES
  Show the space linked to the current directory.

    $ sf spaces inspect

  Show a specific space by slug, ID, or URL.

    $ sf spaces inspect --space docs
```

## `sf spaces key rotate`

Rotate an anonymous Space's key.

```text
USAGE
  $ sf spaces key rotate [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [--space <SPACE>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Rotate an anonymous Space's key.

  Replace an anonymous space's key, live URL, and claim link without changing recipient Links.

EXAMPLES
  Rotate the anonymous Space saved in the current directory.

    $ sf spaces key rotate
```

## `sf spaces list`

List spaces.

```text
USAGE
  $ sf spaces list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--limit <NUMBER>] [--inactive-for <value>] [--cursor <CURSOR>]

FLAGS
  --cursor=<CURSOR>       Continue from the cursor a previous page printed.
  --inactive-for=<value>  Only list the team's spaces with no publish or change in this many days.
  --limit=<NUMBER>        Maximum number of spaces to return (default 50, max 100).

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List spaces.

  List spaces accessible to the current login, optionally filtered by team. With --inactive-for, list the team's spaces
  that nobody published or changed in that many days, oldest first. Pinned and archived spaces are left out. Only team
  owners and admins can use --inactive-for.

ALIASES
  $ sf spaces ls

EXAMPLES
  List spaces accessible to the current login.

    $ sf spaces list

  List spaces for a specific team.

    $ sf spaces list --team acme

  List the team's spaces with no publish or change in 90 days.

    $ sf spaces list --team acme --inactive-for 90
```

## `sf spaces restore`

Restore a space.

```text
USAGE
  $ sf spaces restore [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Restore a space.

  Resume serving an archived space with its retained versions, data, and domains.

EXAMPLES
  $ sf spaces restore --space docs
```

## `sf spaces transfer TEAM`

Move a space to another team.

```text
USAGE
  $ sf spaces transfer TEAM [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

ARGUMENTS
  TEAM  Target team slug, ID, or name.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Move a space to another team.

  Move the selected space to another team. It moves at once if you can accept for the target team, or are a member
  there, the team lets members create spaces, and the space has no custom domain, database, or paid resource. Otherwise
  an owner or admin of the target team must accept. Only one move can be pending at a time.

EXAMPLES
  $ sf spaces transfer acme --space spc_123
```

## `sf spaces update`

Rename or update a space.

```text
USAGE
  $ sf spaces update [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--wait] [--wait-timeout
    <value>] [--mode website|files] [--spa auto|true|false] [--noindex] [--slug <value>] [--name <value>]
    [--viewer-description <value>] [--viewer-og-image-path <value>] [--viewer-title <value>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

SPACE METADATA FLAGS
  --mode=<option>  Serving mode.
                   <options: website|files>
  --name=<value>   Space title.
  --[no-]noindex   Ask search engines not to index the live space; --no-noindex allows indexing.
  --spa=<option>   Enable or disable SPA fallback. `auto` leaves the current setting unchanged.
                   <options: auto|true|false>

IDENTITY FLAGS
  --slug=<value>  New space slug. Must be sent without other update flags. Reserved names are rejected, as are slugs
                  containing spacefast, stattic, automattic, wordpress, or paypal anywhere.

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
  Rename the space and its managed hostname.

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
  $ sf status [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [--include-claim-url]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf storage [TARGET] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--local-url
    <value>] [--port <value>] [--limit <NUMBER>] [--cursor <CURSOR>]

ARGUMENTS
  [TARGET]  Space ID, slug, live URL, or domain. Defaults to the linked space.

FLAGS
  --cursor=<CURSOR>  Continue from an opaque cursor returned by the last page.
  --limit=<NUMBER>   Maximum objects to return (default 50, max 100).

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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

## `sf storage delete [OBJECT]`

Delete a stored object.

```text
USAGE
  $ sf storage delete [OBJECT] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--local-url
    <value>] [--port <value>]

ARGUMENTS
  [OBJECT]  Object id, for example 0123456789abcdef0123456789abcdef.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

RUNTIME FLAGS
  --local-url=<value>  Use a local `sf dev` server instead of the live version.
  --port=<value>       Local `sf dev` server port; shorthand for --local-url http://127.0.0.1:<port>.

DESCRIPTION
  Delete a stored object.

  Force-delete an app storage object as the space owner, regardless of who uploaded it.

ALIASES
  $ sf storage rm
  $ sf storage del

EXAMPLES
  Delete a stored object without prompting.

    $ sf storage delete 0123456789abcdef0123456789abcdef --yes
```

## `sf storage download OBJECT`

Download an app storage object.

```text
USAGE
  $ sf storage download OBJECT [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--local-url
    <value>] [--port <value>] [--output <value>]

ARGUMENTS
  OBJECT  Storage object id.

FLAGS
  --output=<value>  Save to this path; defaults to the object id. Existing files are never overwritten.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

RUNTIME FLAGS
  --local-url=<value>  Use a local `sf dev` server instead of the live version.
  --port=<value>       Local `sf dev` server port; shorthand for --local-url http://127.0.0.1:<port>.
```

## `sf storage list [TARGET]`

List a space's stored objects.

```text
USAGE
  $ sf storage list [TARGET] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--local-url
    <value>] [--port <value>] [--limit <NUMBER>] [--cursor <CURSOR>]

ARGUMENTS
  [TARGET]  Space ID, slug, live URL, or domain. Defaults to the linked space.

FLAGS
  --cursor=<CURSOR>  Continue from an opaque cursor returned by the last page.
  --limit=<NUMBER>   Maximum objects to return (default 50, max 100).

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

RUNTIME FLAGS
  --local-url=<value>  Use a local `sf dev` server instead of the live version.
  --port=<value>       Local `sf dev` server port; shorthand for --local-url http://127.0.0.1:<port>.

ALIASES
  $ sf storage ls
```

## `sf storage put FILE`

Upload a file to app storage.

```text
USAGE
  $ sf storage put FILE [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--local-url <value>] [--port
    <value>] [--public] [--content-type <value>]

ARGUMENTS
  FILE  File to upload.

FLAGS
  --content-type=<value>  [default: application/octet-stream] Object MIME type.
  --public                Make the uploaded object publicly readable.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

RUNTIME FLAGS
  --local-url=<value>  Use a local `sf dev` server instead of the live version.
  --port=<value>       Local `sf dev` server port; shorthand for --local-url http://127.0.0.1:<port>.
```

## `sf switch [TEAM]`

Switch teams.

```text
USAGE
  $ sf switch [TEAM] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  [TEAM]  Team slug, ID, or name.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf tags [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--environment <value>]

FLAGS
  --environment=<value>  Release environment to inspect.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf tags apply FILE [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--title <value>] [--message
    <value>] [--submit] [--release <value>] [--expected-current-revision <value>] [--idempotency-key <value>]

ARGUMENTS
  FILE  spacefast.tags.json file.

FLAGS
  --expected-current-revision=<value>  Optimistic release current revision check.
  --idempotency-key=<value>            Idempotency key for replay-safe apply.
  --message=<value>                    Draft or submission message.
  --release=<value>                    Release environment after approval policy allows.
  --submit                             Submit after validation when policy allows.
  --title=<value>                      Draft title.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf tags debug [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--revision <value>]
    [--revoke-session <value>] [--url <value>] [--environment <value>] [--idempotency-key <value>]

FLAGS
  --environment=<value>      Release environment to debug.
  --idempotency-key=<value>  Idempotency key for replay-safe debug sessions.
  --revision=<value>         Tag revision ID to debug.
  --revoke-session=<value>   Preview/debug session ID to revoke.
  --url=<value>              Page URL to open in debug mode.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Create a tag debug session.

  Create a signed no-store tag preview/debug session.

EXAMPLES
  Create a signed tag debug session for a page.

    $ sf tags debug --space docs --url https://docs.space.fast
```

## `sf tags releases`

List tag releases.

```text
USAGE
  $ sf tags releases [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List tag releases.

  List tag release pointers for this space.

EXAMPLES
  List tag release pointers for the space.

    $ sf tags releases --space docs
```

## `sf tags releases inspect ENVIRONMENT`

Read a tag release.

```text
USAGE
  $ sf tags releases inspect ENVIRONMENT [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

ARGUMENTS
  ENVIRONMENT  Release environment, for example production.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Read a tag release.

  Read one tag release pointer.

EXAMPLES
  Read the production tag release pointer.

    $ sf tags releases inspect production --space docs
```

## `sf tags releases rollback ENVIRONMENT REVISION`

Roll back a tag release.

```text
USAGE
  $ sf tags releases rollback ENVIRONMENT REVISION [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color]
    [--non-interactive] [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]
    [--expected-current-revision <value>] [--notes <value>] [--idempotency-key <value>]

ARGUMENTS
  ENVIRONMENT  Release environment, for example production.
  REVISION     Prior published tag revision ID to restore.

FLAGS
  --expected-current-revision=<value>  Optimistic current revision check.
  --idempotency-key=<value>            Idempotency key for replay-safe rollback.
  --notes=<value>                      Rollback notes.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf tags releases set ENVIRONMENT REVISION [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color]
    [--non-interactive] [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]
    [--expected-current-revision <value>] [--notes <value>] [--idempotency-key <value>]

ARGUMENTS
  ENVIRONMENT  Release environment, for example production.
  REVISION     Approved tag revision ID to release.

FLAGS
  --expected-current-revision=<value>  Optimistic current revision check.
  --idempotency-key=<value>            Idempotency key for replay-safe release.
  --notes=<value>                      Release notes.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf tags revisions [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--status <value>] [--cursor
    <CURSOR>] [--limit <NUMBER>]

FLAGS
  --cursor=<CURSOR>  Pagination cursor.
  --limit=<NUMBER>   Maximum number of revisions to return.
  --status=<value>   Filter by revision status.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf tags revisions abandon REVISION [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--idempotency-key
    <value>]

ARGUMENTS
  REVISION  Tag revision ID.

FLAGS
  --idempotency-key=<value>  Idempotency key for replay-safe abandon.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf tags revisions approve REVISION [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--idempotency-key
    <value>]

ARGUMENTS
  REVISION  Tag revision ID.

FLAGS
  --idempotency-key=<value>  Idempotency key for replay-safe approval.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf tags revisions create [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--title <value>] [--message
    <value>] [--base-revision <value>] [--input <value>] [--template <value>] [--field <value>...] [--trigger
    <value>...] [--tag <value>] [--name <value>] [--idempotency-key <value>]

FLAGS
  --base-revision=<value>    Base tag revision ID.
  --field=<value>...         Template field as key=value. Repeat for multiple fields.
  --idempotency-key=<value>  Idempotency key for replay-safe creation.
  --input=<value>            JSON body: literal JSON, @file, or - for stdin.
  --message=<value>          Draft changelog or description.
  --name=<value>             Display name for the generated template tag.
  --tag=<value>              Stable tag ID for the generated template tag.
  --template=<value>         Built-in template ID to add, for example google-analytics or segment.
  --title=<value>            Draft title.
  --trigger=<value>...       Template trigger preset. Repeat for multiple triggers.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Create a tag revision.

  Create a mutable draft tag revision from a release, base revision, or graph body.

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
  $ sf tags revisions diff REVISION [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

ARGUMENTS
  REVISION  Tag revision ID.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf tags revisions submit REVISION [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--idempotency-key
    <value>]

ARGUMENTS
  REVISION  Tag revision ID.

FLAGS
  --idempotency-key=<value>  Idempotency key for replay-safe submit.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf tags revisions validate REVISION [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--idempotency-key
    <value>]

ARGUMENTS
  REVISION  Tag revision ID.

FLAGS
  --idempotency-key=<value>  Idempotency key for replay-safe validation.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf tags templates [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf teams [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage teams.

  Manage teams and members.
```

## `sf teams accept INVITATION`

Accept a team invitation.

```text
USAGE
  $ sf teams accept INVITATION [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y]

ARGUMENTS
  INVITATION  Invitation id from the invite link.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf teams create NAME [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

ARGUMENTS
  NAME  Display name for the new team.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Create a team.

  Create a new team owned by the current login.

EXAMPLES
  Create a new team.

    $ sf teams create "Acme Inc"
```

## `sf teams defaults [ACCESS]`

Manage team space access.

```text
USAGE
  $ sf teams defaults [ACCESS] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [--new-subteams private|parent_team] [-T <TEAM>]

ARGUMENTS
  [ACCESS]  Access new spaces start with: private (your team), parent_team (your team and everyone in its parent team,
            who can view and comment), or public (anyone on the web).

FLAGS
  --new-subteams=<option>  Root teams on Enterprise or Internal: the access new spaces start with in each subteam
                           created from now on. Existing subteams keep theirs.
                           <options: private|parent_team>

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage team space access.

  Show who can view this team's spaces, or set the access new spaces start with. `parent_team` is for a subteam on an
  Enterprise or Internal family. On a root team there, `--new-subteams` sets the default each subteam created from now
  on starts with. Private spaces only and Hide from search engines are shown here but change only in the dashboard (Team
  settings → Access): they guard against agents, so no CLI login can turn them off.

EXAMPLES
  Show the team's space access settings.

    $ sf teams defaults

  Make new spaces private by default.

    $ sf teams defaults private

  Let the parent team view every new space of the design subteam.

    $ sf teams defaults parent_team --team design

  Let everyone in this team view new spaces in every subteam created from now on.

    $ sf teams defaults --new-subteams parent_team
```

## `sf teams domains`

Manage team email domains.

```text
USAGE
  $ sf teams domains [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage team email domains.

  Manage the company email domains whose verified owners can join the team.
```

## `sf teams domains add DOMAIN`

Add a team email domain.

```text
USAGE
  $ sf teams domains add DOMAIN [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  DOMAIN  Company email domain, such as example.com.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Add a team email domain.

  Let anyone with a verified email at this domain join the team. A current member must already have a verified email
  there.

EXAMPLES
  $ sf teams domains add example.com
```

## `sf teams domains list`

List team email domains.

```text
USAGE
  $ sf teams domains list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List team email domains.

  List the company email domains whose verified owners can join the team.

ALIASES
  $ sf teams domains ls

EXAMPLES
  $ sf teams domains list
```

## `sf teams domains remove DOMAIN`

Remove a team email domain.

```text
USAGE
  $ sf teams domains remove DOMAIN [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  DOMAIN  Email domain to remove, such as example.com.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Remove a team email domain.

  Stop letting people at this email domain join on their own. Current members stay.

ALIASES
  $ sf teams domains rm

EXAMPLES
  $ sf teams domains remove example.com
```

## `sf teams invitations`

Manage team invitations.

```text
USAGE
  $ sf teams invitations [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage team invitations.

  Manage team invitations.
```

## `sf teams invitations cancel INVITATION`

Cancel a team invitation.

```text
USAGE
  $ sf teams invitations cancel INVITATION [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y]

ARGUMENTS
  INVITATION  Invitation id.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Cancel a team invitation.

  Cancel a team invitation.

EXAMPLES
  $ sf teams invitations cancel inv_123
```

## `sf teams invitations list`

List team invitations.

```text
USAGE
  $ sf teams invitations list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List team invitations.

  List pending and historical team invitations.

ALIASES
  $ sf teams invitations ls

EXAMPLES
  $ sf teams invitations list
```

## `sf teams invitations resend INVITATION`

Resend a team invitation.

```text
USAGE
  $ sf teams invitations resend INVITATION [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y]

ARGUMENTS
  INVITATION  Invitation id.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Resend a team invitation.

  Resend a pending team invitation.

EXAMPLES
  $ sf teams invitations resend inv_123
```

## `sf teams join [TEAM]`

Join a team.

```text
USAGE
  $ sf teams join [TEAM] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y]

ARGUMENTS
  [TEAM]  Team slug, ID, or name. Omit it to list the teams you can join.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Join a team.

  Join a team your verified email or a pending invitation lets you into. With no team, list the teams you can join.

EXAMPLES
  $ sf teams join

  $ sf teams join acme
```

## `sf teams join-link`

Get the team join link.

```text
USAGE
  $ sf teams join-link [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--reset]

FLAGS
  --reset  Replace the link with a new one. The old link stops working.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Get the team join link.

  Print the team's join link. Only people with a verified email at one of the team's email domains can join through it.

EXAMPLES
  $ sf teams join-link

  Replace the link. The old one stops working at once.

    $ sf teams join-link --reset
```

## `sf teams list`

List teams.

```text
USAGE
  $ sf teams list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List teams.

  List teams available to the current login.

ALIASES
  $ sf teams ls

EXAMPLES
  $ sf teams list
```

## `sf teams members`

Manage team members.

```text
USAGE
  $ sf teams members [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage team members.

  Manage team members.
```

## `sf teams members invite EMAILS`

Create team invitations.

```text
USAGE
  $ sf teams members invite EMAILS... [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--role owner|admin|member]

ARGUMENTS
  EMAILS...  Email addresses to invite.

FLAGS
  --role=<option>  [default: member] Role to grant when the invitation is accepted.
                   <options: owner|admin|member>

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Create team invitations.

  Invite one or more people to a team.

EXAMPLES
  Invite multiple members to the team.

    $ sf teams members invite jane@example.com alex@example.com --role member
```

## `sf teams members list`

List team members.

```text
USAGE
  $ sf teams members list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List team members.

  List members in a team.

ALIASES
  $ sf teams members ls

EXAMPLES
  $ sf teams members list
```

## `sf teams members remove MEMBER`

Remove a team member.

```text
USAGE
  $ sf teams members remove MEMBER [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  MEMBER  Member id or email.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Remove a team member.

  Remove a member from a team.

ALIASES
  $ sf teams members rm

EXAMPLES
  $ sf teams members remove jane@example.com
```

## `sf teams subteams`

Manage Enterprise subteams.

```text
USAGE
  $ sf teams subteams [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage Enterprise subteams.

  Manage Enterprise subteams and members.
```

## `sf teams subteams create NAME`

Create an Enterprise subteam.

```text
USAGE
  $ sf teams subteams create NAME [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  NAME  Name of the subteam.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Create an Enterprise subteam.

  Create an Enterprise subteam.

EXAMPLES
  $ sf teams subteams create Design
```

## `sf teams subteams delete SUBTEAM`

Delete a subteam.

```text
USAGE
  $ sf teams subteams delete SUBTEAM [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  SUBTEAM  Subteam ID.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Delete a subteam.

  Delete a subteam.

ALIASES
  $ sf teams subteams rm
  $ sf teams subteams del

EXAMPLES
  $ sf teams subteams delete subteam_example
```

## `sf teams subteams list`

List Enterprise subteams.

```text
USAGE
  $ sf teams subteams list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List Enterprise subteams.

  List Enterprise subteams.

ALIASES
  $ sf teams subteams ls

EXAMPLES
  $ sf teams subteams list
```

## `sf teams subteams members`

Manage subteam members.

```text
USAGE
  $ sf teams subteams members [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage subteam members.

  List, add, and remove the members of an Enterprise subteam.
```

## `sf teams subteams members add SUBTEAM USER`

Add a member to a subteam.

```text
USAGE
  $ sf teams subteams members add SUBTEAM USER [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  SUBTEAM  Subteam ID.
  USER     User ID of an existing team member.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Add a member to a subteam.

  Add a member to a subteam.

EXAMPLES
  $ sf teams subteams members add subteam_example usr_example
```

## `sf teams subteams members list SUBTEAM`

List members of a subteam.

```text
USAGE
  $ sf teams subteams members list SUBTEAM [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  SUBTEAM  Subteam ID.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List members of a subteam.

  List members of a subteam.

ALIASES
  $ sf teams subteams members ls

EXAMPLES
  $ sf teams subteams members list subteam_example
```

## `sf teams subteams members remove SUBTEAM USER`

Remove a member from a subteam.

```text
USAGE
  $ sf teams subteams members remove SUBTEAM USER [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  SUBTEAM  Subteam ID.
  USER     User ID.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Remove a member from a subteam.

  Remove a member from a subteam.

ALIASES
  $ sf teams subteams members rm

EXAMPLES
  $ sf teams subteams members remove subteam_example usr_example
```

## `sf teams subteams rename SUBTEAM NAME`

Rename a subteam.

```text
USAGE
  $ sf teams subteams rename SUBTEAM NAME [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  SUBTEAM  Subteam ID.
  NAME     New subteam name.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Rename a subteam.

  Rename a subteam.

EXAMPLES
  $ sf teams subteams rename subteam_example Design
```

## `sf teams switch [TEAM]`

Set default team.

```text
USAGE
  $ sf teams switch [TEAM] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>]

ARGUMENTS
  [TEAM]  Team slug, ID, or name.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Set default team.

  Set the default team for future CLI publishes.

EXAMPLES
  Set acme as the default team.

    $ sf teams switch acme
```

## `sf transfers accept TRANSFER`

Accept a space transfer.

```text
USAGE
  $ sf transfers accept TRANSFER [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y]

ARGUMENTS
  TRANSFER  Transfer ID.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Accept a space transfer.

  Accept a pending space transfer as an owner or admin of the target team. Asks for confirmation; --yes skips it.

EXAMPLES
  Accept a pending space transfer without prompting.

    $ sf transfers accept trf_123 --yes
```

## `sf transfers cancel TRANSFER`

Cancel a space transfer.

```text
USAGE
  $ sf transfers cancel TRANSFER [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y]

ARGUMENTS
  TRANSFER  Transfer ID.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Cancel a space transfer.

  Cancel a pending space transfer.

EXAMPLES
  $ sf transfers cancel trf_123
```

## `sf transfers inspect TRANSFER`

Show a space transfer.

```text
USAGE
  $ sf transfers inspect TRANSFER [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y]

ARGUMENTS
  TRANSFER  Transfer ID.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Show a space transfer.

  Show a space transfer's parties, status, and expiry.

EXAMPLES
  $ sf transfers inspect trf_123
```

## `sf transfers list`

List space transfers.

```text
USAGE
  $ sf transfers list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--status pending_confirmation|completed|canceled|expired] [--space
    <value>]

FLAGS
  --space=<value>    Filter by Space ID (spc_...).
  --status=<option>  Filter by transfer status.
                     <options: pending_confirmation|completed|canceled|expired>

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List space transfers.

  List a team's incoming and outgoing space transfers. Requires transfer authority, held by team owners and admins.
  Shows pending transfers by default, up to the newest 100.

ALIASES
  $ sf transfers ls

EXAMPLES
  $ sf transfers list --team acme
```

## `sf unlink`

Unlink this checkout from its space.

```text
USAGE
  $ sf unlink [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf users [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

```

## `sf users delete USER`

Complete a requested app account deletion.

```text
USAGE
  $ sf users delete USER [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

ARGUMENTS
  USER  App user ID.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

ALIASES
  $ sf users rm
  $ sf users del
```

## `sf users inspect USER`

Inspect an app user.

```text
USAGE
  $ sf users inspect USER [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

ARGUMENTS
  USER  App user ID.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

```

## `sf users list`

List app users.

```text
USAGE
  $ sf users list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--query <value>] [--page
    <value>] [--limit <NUMBER>]

FLAGS
  --limit=<NUMBER>  Maximum number of results to return.
  --page=<value>
  --query=<value>   Search names and email addresses.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

ALIASES
  $ sf users ls
```

## `sf users reactivate USER`

Reactivate an app account.

```text
USAGE
  $ sf users reactivate USER [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

ARGUMENTS
  USER  App user ID.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

```

## `sf users revoke USER`

Revoke app user sessions.

```text
USAGE
  $ sf users revoke USER [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--session <value>]

ARGUMENTS
  USER  App user ID.

FLAGS
  --session=<value>  Revoke this session only; omit to revoke all sessions.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

```

## `sf users sessions USER`

List app user sessions.

```text
USAGE
  $ sf users sessions USER [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

ARGUMENTS
  USER  App user ID.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

```

## `sf users settings`

Read or update app sign-in settings.

```text
USAGE
  $ sf users settings [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--enabled] [--google
    managed|direct|disabled] [--gravatar] [--spacefast] [--google-client-id <value>] [--clear-google-secret]
    [--google-secret-file <value>]

FLAGS
  --clear-google-secret         Remove the saved direct Google secret.
  --[no-]enabled                Turn app sign-in on or off.
  --google=<option>             <options: managed|direct|disabled>
  --google-client-id=<value>
  --google-secret-file=<value>  Read the direct Google secret from this file.
  --[no-]gravatar               Use Gravatar for profile pictures.
  --[no-]spacefast              Offer Sign in with Spacefast.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

```

## `sf users suspend USER`

Suspend an app account.

```text
USAGE
  $ sf users suspend USER [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

ARGUMENTS
  USER  App user ID.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

```

## `sf versions`

Manage versions.

```text
USAGE
  $ sf versions [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Manage versions.

  List, promote, and roll back space versions.
```

## `sf versions delete [VERSION]`

Delete a version.

```text
USAGE
  $ sf versions delete [VERSION] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

ARGUMENTS
  [VERSION]  Version ID, ref, or number, for example ver_123, v12, or 12.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Delete a version.

  Delete a version and purge its files. Versions referenced by a channel (live) cannot be deleted; promote another
  version first. The version URL starts serving a tombstone.

ALIASES
  $ sf versions rm
  $ sf versions del

EXAMPLES
  Delete version v12 of the linked space.

    $ sf versions delete v12

  Delete without a confirmation prompt.

    $ sf versions delete ver_123 --space docs --yes
```

## `sf versions inspect [VERSION]`

Show a version.

```text
USAGE
  $ sf versions inspect [VERSION] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

ARGUMENTS
  [VERSION]  Version ID, ref, or number, for example ver_123, v12, or 12.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Show a version.

  Show one version's status, source, Version URL, diagnostics, and failure details.

EXAMPLES
  Inspect version v12 of the linked space.

    $ sf versions inspect v12

  Print a version of a selected space as JSON.

    $ sf versions inspect ver_123 --space docs --json
```

## `sf versions list`

List space versions.

```text
USAGE
  $ sf versions list [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--commit <value>]

FLAGS
  --commit=<value>  Only versions published from this commit.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List space versions.

  List space versions, marking the live one and any still publishing.

ALIASES
  $ sf versions ls

EXAMPLES
  List versions for the linked space.

    $ sf versions list

  List versions for a specific space.

    $ sf versions list --space docs

  Find the version published from a commit.

    $ sf versions list --commit $(git rev-parse HEAD)

FLAG DESCRIPTIONS
  --commit=<value>  Only versions published from this commit.

    Full 40-character git commit SHA. Short SHAs are rejected — the match is exact.
```

## `sf whoami`

Show the current Spacefast account.

```text
USAGE
  $ sf whoami [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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
  $ sf wp [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--local] [--path <value>]
    [--mode full|limited]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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

Build and run Zero apps.

```text
USAGE
  $ sf zero [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Build and run Zero apps.

  Build, check, and run Zero apps (zero.config.ts) and import a CMS schema into one. `abilities`, `call`, `queries`, and
  `types` read a live Space.
```

## `sf zero abilities`

List a space's Zero Abilities.

```text
USAGE
  $ sf zero abilities [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  List a space's Zero Abilities.

  List the Abilities the space's live version publishes: what an agent can call, what category it belongs to, and
  whether it reads or writes.

EXAMPLES
  List the Abilities the live version publishes.

    $ sf zero abilities
```

## `sf zero build`

Compile zero.config.ts into WordPress plugins.

```text
USAGE
  $ sf zero build

DESCRIPTION
  Compile zero.config.ts into WordPress plugins.

  Writes the plugins to .zero/wp-content, new migrations to zero/migrations, the typed client to zero/client and
  zero.gen.ts. Arguments pass to `zero build` unchanged. Publish, check and source migration use the included wasm
  compiler. Dev and build require optional native packages; reinstall with optional dependencies enabled if missing. For
  a local native compiler, set SPACEFAST_ZERO_BIN to target/release/zero from a github.com/spacefast/zero checkout.

EXAMPLES
  Build the project in the current directory.

    $ sf zero build

  Build another directory into ./dist.

    $ sf zero build ./app --out ./dist
```

## `sf zero call ABILITY`

Call one of a space's Zero Abilities.

```text
USAGE
  $ sf zero call ABILITY [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--credential
    <value>] [--input <value>]

ARGUMENTS
  ABILITY  Ability name, as shown by `sf zero abilities`.

FLAGS
  --input=<value>  Ability input as inline JSON, or @path to read it from a file.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

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

## `sf zero check`

Compile zero.config.ts and report diagnostics without writing anything.

```text
USAGE
  $ sf zero check

DESCRIPTION
  Compile zero.config.ts and report diagnostics without writing anything.

  Uses the included wasm compiler; `--json` prints the diagnostics envelope. Publish, check and source migration use the
  included wasm compiler. Dev and build require optional native packages; reinstall with optional dependencies enabled
  if missing. For a local native compiler, set SPACEFAST_ZERO_BIN to target/release/zero from a
  github.com/spacefast/zero checkout.

EXAMPLES
  Check the project in the current directory.

    $ sf zero check

  Print machine-readable diagnostics.

    $ sf zero check ./app --json
```

## `sf zero dev`

Run the app on a local WordPress, rebuilding on change.

```text
USAGE
  $ sf zero dev

DESCRIPTION
  Run the app on a local WordPress, rebuilding on change.

  Boots WordPress through Studio (Node 22+, no Docker) and watches the config. Arguments pass to `zero dev` unchanged,
  including `stop`, `status` and `wp -- <WP-CLI args>`. Publish, check and source migration use the included wasm
  compiler. Dev and build require optional native packages; reinstall with optional dependencies enabled if missing. For
  a local native compiler, set SPACEFAST_ZERO_BIN to target/release/zero from a github.com/spacefast/zero checkout.

EXAMPLES
  Start the app in the current directory.

    $ sf zero dev

  Stop it.

    $ sf zero dev stop
```

## `sf zero import SOURCE INPUT`

Import a Payload, EmDash, or Sanity schema as a Zero config.

```text
USAGE
  $ sf zero import SOURCE INPUT [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [--output <value>]

ARGUMENTS
  SOURCE  CMS to import from: payload, payloadcms, emdash, sanity.
  INPUT   The schema file, or the project directory to find it in (payload.config.ts, .emdash/seed.json,
          sanity.config.ts, ...).

FLAGS
  --output=<value>  [default: zero.config.ts] The config file to write. Must not exist yet.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Import a Payload, EmDash, or Sanity schema as a Zero config.

  Runs `zero migrate config`: translates the CMS schema into a new zero.config.ts, checks that it compiles, and prints
  what mapped and what did not. It never runs the CMS's code and never overwrites a file; anything Zero cannot hold
  refuses the import and nothing is written. Content moves separately, with `sf zero migrate site`. Publish, check and
  source migration use the included wasm compiler. Dev and build require optional native packages; reinstall with
  optional dependencies enabled if missing. For a local native compiler, set SPACEFAST_ZERO_BIN to target/release/zero
  from a github.com/spacefast/zero checkout.

EXAMPLES
  Import a Payload config into ./zero.config.ts.

    $ sf zero import payload ../my-payload-app

  Import an EmDash seed into a new app directory.

    $ sf zero import emdash ../site --output app/zero.config.ts
```

## `sf zero init [NAME]`

Start a Zero app: a zero.config.ts to build on.

```text
USAGE
  $ sf zero init [NAME] [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive]
    [--profile <NAME>] [--token <TOKEN>] [-y] [--force]

ARGUMENTS
  [NAME]  Directory to create. Omit to initialize the current directory.

FLAGS
  --force  Overwrite an existing zero.config.ts.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

DESCRIPTION
  Start a Zero app: a zero.config.ts to build on.

  Writes a starter zero.config.ts with one collection, one table and one action, named after the directory. Then `sf
  zero dev` runs it on a local WordPress. Publish, check and source migration use the included wasm compiler. Dev and
  build require optional native packages; reinstall with optional dependencies enabled if missing. For a local native
  compiler, set SPACEFAST_ZERO_BIN to target/release/zero from a github.com/spacefast/zero checkout.

EXAMPLES
  Create my-app with a starter config.

    $ sf zero init my-app

  Add a starter config to this directory.

    $ sf zero init
```

## `sf zero migrate`

Import a CMS schema or move a site's content into a Zero app.

```text
USAGE
  $ sf zero migrate

DESCRIPTION
  Import a CMS schema or move a site's content into a Zero app.

  `migrate config` imports an EmDash, Payload or Sanity schema into a new zero.config.ts; `migrate site` moves content.
  Arguments pass to `zero migrate` unchanged. Publish, check and source migration use the included wasm compiler. Dev
  and build require optional native packages; reinstall with optional dependencies enabled if missing. For a local
  native compiler, set SPACEFAST_ZERO_BIN to target/release/zero from a github.com/spacefast/zero checkout.

EXAMPLES
  Import a Payload config.

    $ sf zero migrate config --from payload payload.config.ts --out app/zero.config.ts

  Preview a content migration.

    $ sf zero migrate site content-model.php --dry-run
```

## `sf zero queries`

List the queries a space's live version declares.

```text
USAGE
  $ sf zero queries [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--local-url <value>] [--port
    <value>] [--name <value>]

FLAGS
  --name=<value>  Inspect one declared query by name.

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

RUNTIME FLAGS
  --local-url=<value>  Use a local `sf dev` server instead of the live version.
  --port=<value>       Local `sf dev` server port; shorthand for --local-url http://127.0.0.1:<port>.

DESCRIPTION
  List the queries a space's live version declares.

  Lists the queries the live version declares.
```

## `sf zero types`

Generate types from a space's content model, Abilities, and database.

```text
USAGE
  $ sf zero types [--api-url <URL>] [--cwd <DIR>] [-d] [--no-color] [--non-interactive] [--profile
    <NAME>] [--token <TOKEN>] [-y] [-T <TEAM>] [--space <SPACE>] [--output <value>] [--check]

GLOBAL FLAGS
  -d, --debug            Print redacted diagnostic detail on stderr (SPACEFAST_DEBUG).
  -y, --yes              [env: SPACEFAST_YES] Skip confirmation prompts.
      --api-url=<URL>    [env: SPACEFAST_API_URL] Spacefast API base URL.
      --cwd=<DIR>        Working directory for this invocation.
      --[no-]json        Print the result as JSON.
      --no-color         Disable color (NO_COLOR).
      --non-interactive  Never prompt; fail with the required inputs instead (SPACEFAST_NON_INTERACTIVE).
      --profile=<NAME>   [env: SPACEFAST_PROFILE] Named provider profile from `sf profiles`.

OUTPUT FLAGS
  --check           Compare instead of writing, and exit non-zero when the file is stale or missing.
  --output=<value>  File to write, relative to the current directory. Defaults to zero-types.ts.

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
