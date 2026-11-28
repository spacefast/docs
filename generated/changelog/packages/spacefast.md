---
title: "CLI (`spacefast`)"
description: "Release history for the Spacefast CLI on npm."
---

Published as [`spacefast`](https://www.npmjs.com/package/spacefast) on npm.

Install with `npm install -g spacefast`. Standalone binaries are also published on the [CLI releases](https://github.com/spacefast/cli/releases) page.

## 0.10.0

#### Minor Changes

- An agent paying with a Stripe shared payment token from its wallet passes `--payment-token spt_... --expect-total` to `sf domains registration purchase` or `sf purchases confirm`. The token pays the purchase's invoice instead of the team's card.
- Honor Retry-After during file uploads and return structured failures for oversized inline requests within the API transport limit. New team-owned Spaces can hide from search engines from their first publication with the initial noindex setting.

  Keep usage current after transfers, accept receiving team addresses without requiring sender membership, and make compact navigation and Plan easier to find. Connection instructions lead with expiry, prerequisites, and the existing publication destination. Error examples show the relevant publishing recovery status.

- `sf connectors roles list|set|remove|reset` adds, changes, or turns off a Space's connector roles without a publish, the same Space settings change the dashboard makes, guarded against concurrent edits. `sf connectors visitors list|revoke` shows and disconnects the accounts a Space's users connected to visitor roles. `sf connectors inspect`, `update`, and `search`, `sf connectors connections inspect`, and `sf connectors serving inspect` cover the remaining connector reads and edits. `connections connect` now prints the provider's setup steps and docs link next to each field it asks for.
- Add feature-flagged domain registration transfers. Use `sf domains registration transfer-in` for paid inbound transfers, `transfer-out` to unlock a domain and request its authorization email, and `relock` to restore the transfer lock. Inbound transfers keep the nameservers the registry lists and are priced at one renewal year using the registrar's `reseller_renewal_fee` for the exact name; a missing or unusable quote refuses the transfer before charging. A transfer in completes once the registrar confirms the name is in Spacefast's reseller account; a rejected transfer is refunded only after its window and two clean not-held/not-pending checks at least an hour apart. A transfer out's completion notice marks the transfer `needs_attention` and releases nothing until Spacefast support confirms the move and releases the registration. Relocking remains available when new transfers are disabled. Unlocking now goes only through `transfer_out`: `updateDomainRegistration` accepts `transferLock: true` and refuses `false`, so a team without `domains.transfers` cannot unlock a domain through the API. Inbound transfers are charged like any team purchase: the saved card with an agreed total, or a confirm link.

  An inbound transfer retry cannot reuse a held authorization code. Settle or cancel the original purchase before starting another transfer.

- Choose who can join a subteam. Its `joinPolicy` is `open` (anyone in the parent team joins by themselves), `request` (people in the parent team see it but can't join by themselves; an admin lets them in), or `invite_only` (only people an admin invites or adds get in, and parent-team members who aren't in it don't see it; the parent team's owners and admins still see and run it). New subteams start as `open`. Set it with `joinPolicy` on `updateSubTeam`, `updateTeamSettings`, `createSubTeam` or `POST /v1/teams`, or `sf teams subteams create --join-policy open|request|invite_only`. `GET /v1/me` lists the `request` subteams you are not in under `requestableTeams`, and `joinTeam` answers 403 `join_request_required` for them. `sf teams subteams list` shows who can join each subteam.
- MCP connections can now hold only the access they need. Hosted MCP takes a preset on its one address, `https://mcp.spacefast.com/?access=read` or `?groups=spaces,domains`. Its sign-in asks only for that access, and it narrows every request, even with a broader token. A preset connection lists only the tools it can use and never asks for more. Without a preset nothing changes: every tool is listed, and a call that needs more access asks first. `sf mcp`, `sf mcp proxy`, and `sf mcp install` take the same preset as `--read-only` or `--groups`. `sf login --read-only` is the same as `sf login --access read`.
- Review a departing team member's connections and affected Space bindings before removal. Add `sf teams members offboarding`, the shared offboarding response contract, and the `getTeamMemberOffboarding` API operation. The operation catalog exposes the review to tools, and guidance explains how to replace bindings before removal.
- Ask to join a subteam that takes requests with `sf teams join`, and review requests with `sf teams join-requests list`, `approve` and `deny`. Agents and CLI logins that act as a person can ask with `createTeamMembershipRequest` and read their own requests, and a key approved on the parent team can review a subteam's requests. An agent approved there answers them only when its person administers the subteam.
- Automatic Next.js builds now support exactly the releases OpenNext 1.20.17 supports: 15.5.29+ and 16.4.5+ (server rendering on 16.4 included). Older releases, which all have published security advisories, are refused with the version to upgrade to.
- Every `sf` list pages the same way. `--json` always emits `{ data, pagination: { nextCursor, hasMore } }`, and a person sees one `Next page:` command on stderr whenever there is more; pass it on with `--cursor`. Lists that were read in full but only fetched the first page now see every row: `sf env list`, version refs in `versions inspect`, `versions delete`, `download` and `comments --version`, the rollback and promote picker, the Space picker, and `connectors create <id>`.

  Breaking for scripts that parse `--json`:

  - `sf source search`, `sf source tags list` and `sf source commits list` move `pagination` out of `data`: read `.pagination.nextCursor` instead of `.data.pagination.nextCursor`. The rows stay at `.data.matches`, `.data.tags` and `.data.commits`.
  - `sf versions list` returns one page (`--limit`, `--cursor`) instead of the whole history.
  - `sf teams invitations list` returns the API's default page of 20 instead of always asking for 100; pass `--limit 100` or follow `--cursor` for more.
  - `sf comments list --limit` prints the next-page command instead of "Raise --limit".
  - `sf domains dns list --limit` now tops out at 100, the most the API ever accepted.

- Run `sf` in a folder whose Git remote came from push.new and it picks up that Space and its credential, with no other setup. `sf git origin` with no Space mints a fresh push remote and installs it.
- Add `sf search "<task>"`, which finds the command for a task described in plain words. It ranks the same commands `sf map` lists, works offline without a login, and prints the best matches with usage and an example (`--limit`, `{ data }` under `--json`). Root `sf --help` now points agents at `sf search` and `sf map --json`.
- `sf open --panel share|comments` opens the Space with that Space bar panel waiting. The Space bar's mark is the Spacefast S, it comes in three sizes, wears the Space's accent, remembers its place and size for each person, and can be hidden for now or on one Space.
- Read and change a Space's database rows from MCP, the CLI and the API, on any runtime: `listSpaceDatabaseTables`, `listSpaceDatabaseRows`, `createSpaceDatabaseRows`, `updateSpaceDatabaseRows` and `deleteSpaceDatabaseRows`, and `sf db tables` and `sf db rows list|add|update|delete`. Rows are found by primary key and each write is one transaction. An MCP delete waits for the person's approval and `sf db rows delete` asks for confirmation; the API applies a delete directly to a caller with write access. Spacefast's own tables are refused, and secrets read as `[redacted]`.
- Let a subteam use no design system. On a subteam whose parent shares one, `changes.parentSystem: "none"` on `updateTeamDesignSystem` turns it off and keeps any system the subteam saved. `getTeamDesignSystem` reports `source.active: "none"`, agents get no design system, and saves return `team_design_system_off` until the subteam adopts the parent's or overrides with its own.
- A team can list the credits Spacefast granted it with `listTeamCredits` and redeem each one once with `redeemTeamCredit`: for two months of Go, a month of Go or Pro, or usage credit. Credits never pay for domains.
- Domain purchases and renewals now charge the team's saved card instead of opening a payment page. `sf domains registration purchase --expect-total` charges right away when you have purchasing power; without it you get the exact `sf purchases confirm` command or a dashboard link to hand to a person. New: `sf purchases inspect|confirm|cancel` and `sf billing card`.

  CLIs before 0.9.0 keep working: the server holds their purchases for a person to confirm and returns the pay link they expect, so nothing is charged from their `--expect-total`.

  The saved-card migration (`team_payment_method`) runs after the row-retention and internal-subscription migrations, preserving historical purchase receipts and soft-deleted rows.

  Saved-card confirmations carry the displayed card's identity. A changed default requires renewed confirmation, and interrupted charges retain the selected card.

  Domain Checkout sessions opened by the preceding release still settle or release their held names during rollout; their paid lines remain refundable. Purchase receipts show saved-card details only to callers with billing access. Changing a card after a failed purchase returns to billing instead of a purchase that cannot be retried.

  SDK callers: the `checkout` object on purchase and renewal responses is now optional and `checkoutUnavailable` is gone; read `purchase.confirmUrl`, which is null when nothing needs confirming. `includeCheckout` is still accepted on registration reads and ignored. The team billing response no longer has the top-level `stripeCustomerId` and `subscription` fields.

  Auto-renew and operator guidance share the notice window and refunded-term eligibility. An expiring domain that cannot be charged automatically names the customer as the next actor.

- Publish TypedPress apps with `sf publish`, for teams in the TypedPress Labs program. The CLI captures a `typedpress.config.ts` project, and a box whose engine supports TypedPress compiles and serves it, with its own runtime generation. A box gets the engine and Two Factor before its first TypedPress publish goes live; the publish waits, retryably. Existing Zero projects keep their runtime.
- Add `GET /v1/resolve` (`resolveResource`) and `sf resolve`: send any id, hostname, Space, dashboard, or API URL, Git repository, or slug, and get back everything it names that you can read, most specific first, with each match's ids and URLs. Shared contract: `@spacefast/common/contracts/resolve`.

#### Patch Changes

- `sf billing card` and purchase receipts name any saved payment method (card, Link, bank account), not only cards.
- `sf api-keys create` accepts `--team` (`-T`) and `SPACEFAST_TEAM`, like `sf api-keys list`. Before, it rejected the flag and ignored the variable, so with several teams you had to run `sf teams switch` first.
- `sf` now knows when Codex or Gemini CLI runs it. Requests name the agent, like they already do for Claude Code and Cursor. Inside Codex, `sf` also defaults to JSON output and skips prompts on every system. Before, only Codex's macOS sandbox switched this on. Set `SPACEFAST_AGENT=0` to get the human output back. `sf setup agent` also picks Codex or Gemini CLI as its target when it runs inside their session.
- Publishing and `listSpaceConnectorBindings` now say who can read through a connector role when that reaches further than it looks. A ready team role on a Space anyone can open without signing in, or a team or personal role with `tools: "*"`, carries a `reach` sentence, such as "Anyone who can open this Space can read through your team's hubspot account, without signing in." The publish result lists these roles in `connectorReach`, `sf publish` and `sf connectors bindings` print the sentence, and the dashboard shows it on the role.
- `sf crons run` reports a redirect from the cron's path as a failed run, as the scheduled run does: nothing follows it, so the job behind it never ran.
- `sf docs` finds pages from questions asked in sentences. Filler words such as "how", "on", and "a" no longer rule out a match, and word forms meet, so "creating an api key" finds `sf api-keys create`.
- `sf domains search` lists the typed domain, then .com, ahead of other extensions and generated names, and shows an estimated renewal price (today's registration fee) next to each first-year price. The Top pick is marked in place instead of moved to the top.
- `sf spaces duplicate` works on macOS again, and `sf spaces download --output` accepts a folder outside the checkout whose parent is a system link such as `/tmp` or `/var`. A refused symlink now names its real target so you can retry with that path.
- `sf tags`, `sf sell` and `sf oauth-apps` show up in help again for teams that have the feature, for the command groups each CLI version ships. The CLI and MCP now read only the feature flags they need from the API, so a flag the API adds or removes no longer hides them. The commands always worked when typed by name; only their listing in help was missing.

  How a released CLI recovers once the server is updated (measured on the published 0.0.26, 0.2.2, 0.4.1, 0.5.0, 0.8.0 and 0.9.0):

  - CLI 0.5.0 and 0.8.0 ask the server during help and list the commands in plain `sf --help` again right away.
  - CLI 0.0.26, 0.2.2 and 0.4.1 also ask during help, but their plain `sf --help` shows a short list without them. `sf --help --all` lists them, and `sf help tags` works either way.
  - CLI 0.9.0 does not ask during help. A gated command run by name (for example `sf tags templates`) asks the server first unless `SPACEFAST_CLI_EARLY_ACCESS` names it or the saved list is fresh (under 24 hours) and includes it. An ordinary command such as `sf whoami` refreshes the saved list in the background when stderr is a terminal, the list is missing or older than 24 hours, and the CLI has a credential it can use. When the server's answer is rejected, the CLI keeps the grants it had and moves the list's timestamp forward. So a 0.9.0 that saved an empty list while the server answered with the full registry lists these commands in help once one of those refreshes succeeds and saves the team's grants. Running a command with `SPACEFAST_CLI_EARLY_ACCESS` set does not refresh the list.
  - A wrapper whose `SPACEFAST_CLIENT` has no version (`acme-ci`) or names the version it really runs works. One that names a version the server does not know, or a release whose feature list differs from the running one, keeps the commands out of help, though they still run by name. Drop the version from `SPACEFAST_CLIENT`, or upgrade the CLI.

  These two entries advance every package in the fixed release group (28 packages, `.changeset/config.json`), not only these two.

- `sf fetch` failures now print the refusal code the responding Space reported (for example `access_denied`) in the message and in `details.reportedRefusal`. It is a diagnostic: the platform's own refusals set it, and a Space's own code can too.
- `sf share grant` and `sf share grant update` warn with `grant_pattern_single_segment` when a `--path` ends in `/*`, which matches one path segment, and name the `/**` pattern that covers the whole tree. The Zero v2 refusal codes (`zero_v2_source_layout` and ten more) get error docs pages, and the Functions docs say that `env.DB` runs MySQL-compatible SQL (MariaDB or MySQL) behind a D1-shaped API.
- Member sign-in keeps its own IdP settings. `PUT /v1/teams/{teamId}/member-sign-in` sets it up with `issuer`, `clientId` and `clientSecret` instead of an identity connection, and later replaces the client ID or secret without changing the return address. `connectionId` is optional and ignored. The member sign-in read adds `issuer` and `clientId`, and `sf teams sign-in inspect` prints the issuer. Updating or revoking an identity connection no longer changes member sign-in, and `sso_connection_not_oidc` is no longer returned. `enabled: false` turns member sign-in off and keeps its setup and return address, and `enabled: true` turns it on again. The read adds `enabled`, `sf teams sign-in inspect` prints its status, and `DELETE` now removes the setup.
- Member sign-in can be set up with a SAML IdP. `PUT /v1/teams/{teamId}/member-sign-in` takes the IdP's entity ID as `issuer`, its `ssoUrl` and one or two signing `certificates` (PEM or base64), and later replaces the sign-on URL or the whole certificate list. The read adds `ssoUrl` and `certificates`, each with its fingerprint and expiry, and its `callbackUrl` is the ACS URL, which is also Spacefast's entity ID. Its `samlMetadataUrl` serves Spacefast's SAML metadata, for an IdP that imports it. `sf teams sign-in inspect` prints the sign-on URL, the certificates, the ACS URL and the metadata URL.
- Netlify sites that declare `@netlify/plugin-nextjs` or `@netlify/plugin-gatsby` build again. Spacefast builds Next.js and Gatsby itself, so it skips those plugins and logs why. Plugins that export Netlify's dev-only `onPreDev` or `onDev` handlers now load; Spacefast never runs those handlers during a build.
- The agent registry is now the one agent catalog. `AGENT_IDS` is the order every surface lists agents in, and `agentsForSurface()` says which agents a surface shows (`featured`, `dashboard-start`, `docs`, `cli`). `CONNECTION_METHODS` names every way to connect, each with a docs page at `connectionDocsUrl()`, and every method carries its `connection`. Entries gain `limits` (plan limits with a source and checked date), `status`, and `deprecation`. `renderAgentManifest()` returns the whole catalog as JSON, and `@spacefast/common/contracts/agent-manifest` describes it for the public `GET /v1/agents`.

  New entries: Any MCP client, Claude Cowork, ChatGPT Work, dots and ChatGPT Space, Instinct, Perplexity, Microsoft Copilot, and T3 Chat. Gemini CLI, Continue, Windsurf, Roo Code, and Jules are deprecated: they keep their ids and pages, which point to a supported agent, and have no setup methods. Claude Code, Hermes, OpenClaw, and Pi lead with the stdio MCP server (`npx -y spacefast mcp`), Codex offers it next to the hosted server, and Grok Bot leads with a prompt link that asks the Bot to add the Spacefast connector.

  `tier` is removed from `AgentEntry` and from `@spacefast/setup-ui`'s `AgentSetupView`; use `isAgentOnSurface(id, "featured")`. `sf setup agent` no longer offers Gemini CLI or Continue.

- Your first team is free; every other team you create needs a subscription. `sf teams create` now says so and prints the link to subscribe, `--json` carries `subscriptionRequired` and `subscribeUrl`, and MCP agents are told to hand that link to you instead of retrying.
- `sf setup` now works when the CLI is started with `bunx` or `pnpm dlx`, including `bunx` on a computer with no Node.js. Started that way, setup offers to install the CLI, names the next command the way it was started (`bunx spacefast …`), and gives agents an MCP launcher that keeps working: npm's `npx` beside Node.js, or `bun x --bun spacefast@<version> mcp` when the CLI runs on Bun.

  `sf plugins` and `sf setup` also install agent plugins without Node.js. When the CLI runs on Bun, that Bun runs the plugin installer too, whether or not Node.js is installed. A standalone `sf` on macOS or Linux runs it itself when there is no `npx`; on Windows it still needs Node.js with npm. When the CLI runs on Node.js nothing changes: `npx` runs it. `--dry-run` prints the command that runs. Where nothing can run it, the install stops and says the installer needs Node.js with npm and how to set up without the plugin, instead of failing with an unexpected error.

- Report who can view a newly published Space and where to change its audience, using saved sharing grants in API, MCP, and CLI receipts.
- `curl git.spacefast.com` prints a fresh push remote, so `git push $(curl -fsSL push.fast) HEAD:main` publishes from any terminal. push.fast redirects to git.spacefast.com, and a browser lands on the push page.
- `sf publish --git --team` checks that the linked checkout's Space belongs to the requested team before it sets up a remote or pushes.
- When an agent runs `sf setup agent` (or `sf mcp install`, `sf skills`) without `--agent`, setup now configures only that agent: its MCP entry and its skill folder, and no other client on the computer. The agent is the one named by `--agent-name` (a product name such as "Claude Code" works) or recognised from its environment. Pass `--agent all`, or one `--agent` per client, to set up more. A person running `sf setup agent -y` still gets every detected client.

  After `--handoff`, the note to restart Claude Code now says to run `sf setup agent --agent claude-code` without `--handoff`, because the link is already used.

- `sf` now exits on SIGTERM, SIGHUP, and `kill -INT` while a prompt is open, and when its terminal goes away. Before, it ignored those signals at a prompt, and a closed terminal could leave it running at full CPU with growing memory. `sf domains search --interactive` keeps its prompt and results intact when the brief is longer than the terminal is wide or you type during a search, and leaves a clean line when you exit. `sf purchases confirm` shows its charge question when stdout is redirected. The CLI moves to oclif 5 with the same help and output.
- List Spaces shared through invitations and sign-in alongside team Spaces, with access source and role. Add a team-only filter and keep management target selection within that scope.
- The standalone `sf` now prints a group's help when you run the group on its own, like the npm build. `sf spaces`, `sf domains`, `sf teams` and the other groups failed with `command help not found` and exit 2. The npm build was not affected.
- The standalone `sf` now answers like the npm build at a terminal. It no longer prints its own lines in red: sign-in, warnings and `sf domains search --interactive` came out red, and with color codes on a terminal that cannot show them, because the runtime the standalone build uses paints that output. A mistyped command now gets the nearest real command and exits 2, the documented code for invalid input. Before, the standalone build said `Command publsh not found` and exited 1, or said `command help not found` for a typo inside a group. The npm build was not affected.
- `sf teams sign-in inspect` shows how long a member's SSO session lasts, and no longer fails on fields a newer server adds.
- Telemetry stays internal: Spacefast turns it on for a team, and that team's editors can then turn tracking on per Space through the dashboard, experimental CLI API, or MCP operations.
- `sf setup agent` now names the agent accounts page as `/~/agents`, a path that opens, instead of the `/{team}/agents` placeholder. The agent setup guide links a Space's Builds page as `https://my.spacefast.com/~/<space>/builds`, so the reader only fills in the Space.
- Domain transfers out now finish on their own. When the registrar reports the move and no longer lists the name for Spacefast, the registration is released and DNS keeps serving; only a notice the registrar can't confirm still waits for support. Inbound transfers now cost the name's registration price, matching WordPress.com.
- `sf fetch --verify <version-id>` asks the hostname's `/__spacefast/health.php?v=` whether it serves that version, because responses no longer name their version in a header. Hostnames on an older runtime are still verified from the `x-spacefast-version` response header.
- Zero 0.8 apps publish as Zero 0.8 again, on new Spaces too. `sf publish`, `sf build` and the MCP `publish` tool no longer convert a Zero 0.8 app, and `sf init --runtime zero` writes a Zero 0.8 starter again. Publishes no longer carry a deprecation notice. New zero.config.ts apps aren't available yet: `sf zero init`, `sf zero import` and `sf zero migrate` are hidden, `sf zero migrate app` is gone, and the API refuses a zero.config.ts app with `zero_config_unavailable` unless its Space already runs one. When Zero 0.8 publishing is turned off, the API refuses new 0.8 versions with `zero_upgrade_required`; deployed 0.8 apps keep serving.
- Agents now act on the `zero_connector_roles_move` publish diagnostic: they add its `details.config` block to `spacefast.config.ts`, then remove the Zero 0.8 capsule's connector roles. The error docs cover the new `zero_connector_role_new` refusal.
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.10.0
  - @spacefast/mcp@0.10.0
  - @spacefast/sdk@0.10.0
  - @spacefast/routing@0.10.0
  - @spacefast/zero@0.10.0
  - @spacefast/zero-compile@0.10.0
  - @spacefast/builders@0.10.0
  - @spacefast/adapter-kit@0.10.0
  - @spacefast/next-adapter@0.10.0
  - @spacefast/build-output@0.10.0

## 0.9.0

#### Minor Changes

- `sf domains check <domain> --retry-ssl` asks for a new HTTPS certificate now, the same as the dashboard's Retry HTTPS. `sf domains diagnostics` reports when the last certificate attempt failed, the next automatic attempt, and the retry command for the attached domain, instead of always asking you to fix a DNS record.
- `sf login --profile <name>` and `sf logout --profile <name>` now act on that profile's own key. Logging a second account in no longer replaces the default login or revokes its key. The same applies to `SPACEFAST_PROFILE`, `--token` and `--handoff`.
- Connect with Spacefast: register OAuth apps so a site can offer "Sign in with Spacefast" (`sf oauth-apps`, `createOAuthApp` and friends, and the `workflow/sign-in-with-spacefast` guide).
- Crons follow the Space's plan: `sf crons list` marks crons past the plan's limit as not scheduled and shows the schedule a cron actually runs at. A Space can declare up to 8 crons until the runtime update reaches every box.
- Taking a domain from another Space now always takes the claim's TXT record. `sf domains check --move` and the `move` body on the verify call are gone: if you manage both Spaces, remove the domain from one and add it to the other. A pending claim reserves nothing and no longer expires, so the `ownership` field on Space domains drops `expiresAt` and `moveAvailable`.
- Registrant contacts now belong to the person who saved them. Each contact reports `viewerOwns`, and only its owner can change its name, company, or email, buy a domain with it, or move a domain to another of their contacts. `sf domains registration purchase` without `--contact` uses your newest own contact, and `sf domains contacts ls` shows which are yours. Team API keys can no longer save contacts or buy domains; sign in with `sf login`. `updateDomainRegistration` no longer accepts `contactId: null` from any caller, partner keys included.
- Team owners and admins can find Spaces nobody is using. `sf spaces ls --inactive-for <days>` lists the team's Spaces with no publish or change in that many days, oldest first, through the new `GET /v1/teams/{teamId}/inactive-spaces` (SDK `listTeamInactiveSpaces`, 90 days by default). Pinned and archived Spaces are left out. `sf spaces archive` accepts `--space` more than once to archive several Spaces in one run. When someone archives a Space they did not create, the creator gets an email that says how to restore it.
- Join offers in `GET /v1/me` carry an optional `invitedBy` on invitations: who sent the newest one, by name, or by email when they have no name. `sf teams join` shows it in its WHY column.
- Every tool sign-in now goes through device login. The MCP `cli_login` tool returns a one-use code for `sf login --device-code` instead of a handoff link for `sf login --handoff`; the CLI key still joins the MCP connection's grant and signs out when you disconnect. On-Device MCP (`sf mcp`, the Claude Desktop extension) gains a `sign_in` tool that shows a link and a code, replaces a revoked or expired login, and saves the approved login for the CLI on the same computer, so the extension no longer asks for a pasted API key. An API key saved in an earlier version of the extension is no longer used: ask Claude to sign you in once.
- Any Space page can read its connector roles with `fetch("/__spacefast/connectors/<role>/<tool>")`. The page's own access rules run first, and the answer is `{ data, state }` or a problem document. Visitor accounts connect at `/__spacefast/connectors/<role>/connect` and disconnect with `POST /__spacefast/connectors/<role>/disconnect`; the `/__spacefast/zero/connectors/...` routes are gone. The route answers only the Space's own pages: on the Space, use the client; elsewhere, use the Spacefast API (`createConnectorRun`).
- Let subteam spaces on Enterprise and Internal plans be shared with everyone in the parent team. Its members can view and comment on the live space without joining the subteam. Support the same access level in publishing, share grants, and new-space defaults, and let a root team start new subteams with it (`sf teams defaults --new-subteams parent_team`).
- List everyone with access across a team and its subteams, one row per person, on Enterprise and Internal plans. `sf teams people` and `listTeamExternalAccessPeople` (`GET /v1/teams/{teamId}/external-access/people`) cover members, pending team invitations, people invited to Spaces and SSO identities, and can filter by subteam, by kind of access and by people outside your company domains, with a count for each filter. Security & Access responses now include each team's `logo`. When the CLI can't find a team you name, the error now says the team may not exist or the credential may not be able to read it.
- Team-account connector roles serve only Spaces that need a sign-in by default. On a Space that is public or shared by link or password, a team role reports `needs_public_serving_ack` until a team owner or admin allows it with `setSpaceConnectorPublicServing` or `sf connectors public-serving set <role> --enable`. Anyone who can open such a Space can then read through that team account. Visitor roles are unchanged. MCP asks before running `setSpaceConnectorPublicServing`. Personal-account roles now also treat `access` set in sf.jsonc as public: on such a Space a personal role reports `forbidden`, as it already did on Spaces made public in settings. Its binding stays until the config file stops making the Space public; only access changed in settings or the API removes personal bindings. Personal roles also turn off on a Space shared by link or password, since whoever holds the link would read through that personal account. Existing bindings stay and serve again once the link or password is gone.
- Add `sf publish --git`: publish the Git repository you're in by pushing it. Without a linked space it signs in through the browser when needed (never anonymously), creates the space in your team, adds a push remote (`origin` when the repository has none, else `spacefast`), pushes `HEAD:main`, and links the repository at its top. A linked repository pushes to its own space. The remote is set so a plain push to it publishes whatever branch is checked out, so in a repository with no other remote `git push` publishes; when `origin` is on GitHub it names the `sf git connect` command that makes every push there publish. Running it again, or `sf git origin`, renews the remote that already pushes to the space instead of adding a second one. When it ran through `npx` and `sf` isn't installed, it offers to install the CLI. It reports its work as short steps and shows git's output only when a push fails.

  `sf login`'s browser sign-in is shorter too: one `Sign in to …` heading, the link and the code, then a spinner until you approve and a `Signed in as …` line.

- Show referral Space unlocks in plan policy, publish guidance and quota recovery. Add the team-wide opt-in referral chip setting.
- `sf setup` is now a guided setup: `npx spacefast setup`. It signs you in through the browser if needed (never anonymously), asks what to set up (the sf CLI when you ran it through `npx` and `sf` isn't installed, plus the agents it finds: a plugin where one exists, otherwise a skill, with MCP where the agent has an MCP config), asks whether that is for every project on the computer or just this project, then asks "Publish it?": it pushes the repository when it has a commit; otherwise, when `sf publish` finds a build, it asks "Build and publish it?" and builds first; otherwise it publishes the first of `dist`, `build` or `out` that exists, or the folder when it has an `index.html`. A folder with none of these is asked about with No as the default. The installs start as soon as you pick them and run while setup keeps asking; one `Installed …` line reports them before the publish. "Just this project" installs skills in the folder and no plugins, and writes MCP config only where it can live in the project (VS Code's `.vscode/mcp.json`, and `.mcp.json` for "Other agents"), never into an agent's global config. `--yes` takes every default; `--agent`, `--project` and `--no-publish` answer their questions. Without a terminal (CI, `--json`, agent mode) it needs an existing login (`auth_required` otherwise), and without `--yes` it does only what `--agent` and `--project` say: no CLI install, no publish. It refuses to publish a checkout saved with an anonymous space's key (`space_unclaimed`) or linked to a space in another team (`space_selection_conflict`), before installing anything when it can tell up front. A space it creates is named after the project folder; an existing space keeps its name. `--json` reports the publish as `sf publish --json` does, and when an installer fails its error carries the end of the installer's output in `details.output` (a person sees all of it). A typed `--token` is saved, as `sf login --token` saves it, so agents set up by the run find the login; `SPACEFAST_TOKEN` from the environment signs the run in but is not saved. `sf setup agent` works as before; its agent question now reads "Which agents do you want to set up?".

  Installing the CLI from `npx` now really installs it: the installer script found the `sf` that npx keeps in its cache, "updated" that copy and installed nothing, so it no longer sees the npx cache on its `PATH`. Plugin installs no longer fail with `plugins@…: not found` (exit 127) when the CLI was started with `npx --package …` or `npx -p …`, whose package list a nested `npx` used to inherit.

- `sf zero build`, `check`, `dev`, `migrate`, and `init` run Zero v2, and `sf init --runtime zero` starts a Zero v2 app. `sf zero import` uses Zero v2's importer and accepts Payload, EmDash, and Sanity schemas. The same `spacefast` release includes the compiler through direct platform optional dependencies; `SPACEFAST_ZERO_BIN` selects a local build. `sf zero abilities`, `call`, `queries`, and `types` keep working for Zero 0.8 Spaces. `@spacefast/zero-compat-emdash` and `@spacefast/zero-compat-payloadcms` are no longer published.

  Publishing skips generated `.zero` directories, including those inside nested projects.

- Let a parent team share its design system with subteams. Parent teams turn it on with `designSystemSharedWithSubteams` in team settings. A subteam with no system of its own uses the parent's, read-only. It can adopt it or override it with `changes.parentSystem` on `updateTeamDesignSystem`, which copies the parent's system when the subteam has none, and go back later. Agents say in one line whose design system they will use, or that there is none. Agents connected through MCP alone now read team context and fetch brand files before they build, because the rule to do so moved to the top of the MCP instructions and into the publish tool.
- App sign-in's Spacefast part is now named Sign in with Spacefast; "Access" now means sharing (Spacefast Share). In the Users settings API and SDK, `access.spacefastAccess` and `accessAvailability.spacefastAccess` are now `signInWithSpacefast`, and `sf users settings --spacefast-access` is now `--sign-in-with-spacefast`. The flat `settings` and `availability` fields that released CLIs read and send are unchanged.
- `team` and `personal` connector roles now share reads across a Space's viewers for the role's `cache` window, up to a day, so the same read reaches the provider once. A shared answer carries `state.cachedAt`, and the call's `result` is at the top level because a shared read makes no run. Each Space role reaches its provider at most 60 times in any rolling minute; past that, the last value answers, or the call is `unavailable`.
- Connector roles are declared under `connectors` in `spacefast.config.ts` or `sf.jsonc`, for any Space, not only Zero apps. `connector()` and `capsule({ connectors })` in `@spacefast/zero` still work but are deprecated; when the config declares no roles, the capsule's roles are used, and `ctx.connectors.<role>` calls whichever set applies. The `owner` role kind is now `personal`. `sf publish` prints one line for each declared role that cannot serve yet, and `sf connectors bindings` shows each role's connector, source, and state.
- `sf spaces create --git <url>` now starts from a public github.com or gitlab.com repository as well as a Source available Spacefast Space. `--path <folder>` copies one folder as a single commit at the new repository's root, and `--ref <branch>` copies another branch. GitHub `/tree/<ref>/<path>` and GitLab `/-/tree/<ref>/<path>` links work too. The copy builds and publishes on its own.
- Add team email-domain management, resettable join links, and self-service joining to the CLI and API contracts. Join links guide teammates through verifying a work email or enabling two-factor authentication while preserving the team's existing join permissions.
- Add `sf teams sign-in inspect`, which prints how the team's members sign in: the identity connection, the return address its identity provider must allow, and each domain with its status and TXT record. With `--json` it returns the same fields. Owners change member sign-in in the dashboard.
- Add one client for Spacefast Share, typed connectors, and collaboration. Spacefast generates `spacefast.generated.ts` before local and remote app builds in projects that install `@spacefast/client`, including projects without connector roles. Pages import `space` from that module and use `space.access`, `space.connectors`, and `space.collaboration`; pages without a build import `/__spacefast/client.js`. Sign-in goes through Spacefast's hosted login and stays separate from application users. Access changes invalidate connector answers and collaboration sessions. `sf client` regenerates the module explicitly, and `@spacefast/client/react` provides `useAccess` and `useConnector`. On the Space, use the client; elsewhere, use the Spacefast API (`createConnectorRun`).
- Add version-bound HTML tags and refresh rewrites by default when rolling back. Use `--no-refresh-rewrites` to restore a saved version exactly. Rollback receipts and waits follow the new version returned by the API.
- `sf publish` imports a Wrangler Worker with its own `assets.directory`: the directory ships as the static files and `main` compiles from the Wrangler root beside it. `assets.run_worker_first`, `assets.binding` (`env.ASSETS`) and `not_found_handling` with a Worker no longer block the publish, and a Wrangler `main` resolves packages with Wrangler's browser-field rules. D1 migrations accept SQLite type names by affinity, such as `BIGINT`, `VARCHAR(255)` and `BOOLEAN`.
- `sf publish` moves a Zero 0.8 app to Zero v2 when the converter can carry over the whole app. Otherwise it publishes the app as 0.8, on an existing 0.8 Space or a new one, and lists each blocker with its file, line and fix in `version.zero.migration`. Local MCP publish does the same. `sf zero migrate app` now takes `--space` or `--fresh`.
- Zero apps now start from `zero.config.ts`, and Spacefast hosts them.

  - `sf init --runtime zero` and `sf zero init` scaffold a `zero.config.ts` app. `sf publish` uploads its source and the host compiles it with a pinned compiler. The CLI checks and captures it on its bundled wasm compiler, so no native download is needed.
  - Hosted MCP can publish raw Zero source without npm imports.
  - Spaces running the older Zero app format keep publishing and serving as before. New Spaces can't start in that format.
  - Write now creates `zero.config.ts` apps. Synced posts are seeded on publish.

#### Patch Changes

- Ask how website user data should persist before building, and route durable data, uploads, and user identity to the matching Spacefast guidance.
- Support `sf builds detect [DIR]` and `--local` using the same local framework and build-plan detection as `sf build` and publish. Without a selected space, detection defaults to the current directory without authentication. Human and JSON output include root, install, build, output settings and detected monorepo candidates; selected spaces retain repository analysis. An automatic Next.js output directory is reported as resolved after build, as `sf publish --dry-run` does; explicitly configured output directories are reported as set.
- Remove command hooks from the Claude plugin so it can pass the directory's organization policy. Keep linked-project and design verification guidance in the skills.
- Bound repository synchronization for `git connect --apply-best` by one wait deadline, including the initial sync request, and abort outstanding HTTP requests when that deadline expires.
- `sf` now sees every team you belong to, not just the first 100. `--team`, `sf teams ls`, the team picker, and `sf login --team` used to report "Could not find team" for any team past the hundredth.
- `sf fetch` now accepts a query string (`sf fetch '/search?q=shoes'` or a full `https://…?q=shoes` URL). Access is still decided on the path; the query is carried to the page after sign-in. `sf share token create` now says how to send the token: `X-SF-Authorization: Bearer <token>`. The plain `Authorization` header belongs to the Space's own app and is not checked.
- Retire inputs the CLI kept for pre-rename installs. `sf publish --access` accepts only `private`, `parent_team`, or `public`; the old `team` value is refused instead of being read as `private`. A saved login that does not record the API it was issued for is refused with a prompt to run `sf login`, instead of being sent to the default API. `--config-only` no longer fetches the server's OpenAPI document before publishing.
- The CLI reads better at a terminal and asks instead of failing where it can. Pipes, CI and agents keep the plain output.

  - At a terminal, errors start with `✗` and a bold headline, with their recovery steps under arrows.
  - A command that fails because you aren't signed in offers to sign you in, then runs again.
  - At a terminal, `sf publish` prints one summary line and a short receipt (`✓ Published <url>`, version, files, time) with who can open the space and the command to share it (`sf share link create`). Lines written while progress draws (the retry and "still waiting" notices too) land above it. After the first publish of a Git repository's top folder it asks whether every `git push` should publish (`sf git origin`) in place of its "run sf publish again" line.
  - `sf promote` with no version lets you pick one, and promote and rollback show a spinner. When the server asks for a person's approval, a terminal shows the approval link and carries on once it is approved, instead of printing the agent instructions and a token.
  - Run through `npx spacefast` without `sf` installed, hints and help name commands `npx spacefast …`.
  - `sf login` stops waiting for a browser that doesn't open within 3 seconds.

- Keep framework artifact metadata and immutable asset prefixes out of configuration-only version requests. Server validation identifies the offending field and retains CLI upgrade guidance for older clients. Current CLI flag conflicts name the incompatible flag locally without advising a CLI update.
- Context documents support live co-editing. Every Space box installs the Gutenberg plugin (24.1.0) with its real-time collaboration on, so everyone with edit access who opens the Space edits one shared draft and sees each other's typing; when one person saves, everyone sees it saved. Agents save through `POST /wp/v2/pages/{id}` as before, but while people have the document open in the editor that save returns 409 `content_context_live_editing`; retry after they finish.
- Copied prompts and the HTTP publishing skill now offer the official Spacefast plugin or MCP server when the agent picks up a task. ChatGPT and Codex can show a native install card or share the official listing. Users can still publish through the no-install flow.
- A crontab that the hosting provider refuses now runs at its closest basic schedule, and the provider's refusal no longer stops the other crons from syncing.
- Domain diagnostics include optional per-resolver A/AAAA TTLs in seconds, including the system resolver and public DNS-over-HTTPS observers. Plain CLI output shows available remaining answer TTLs without treating them as propagation deadlines, followed by one line of advice for the worst answer shown. IPv6 comparisons use canonical addresses so equivalent spellings no longer produce false stale-cache warnings; older servers without TTL fields remain supported.
- Check the names a user asks for against the live registry: the typed name and its instant matches (including two words joined, such as `sorta music` → `sortamusic.com`), plus selected and liked names. A stale zone-file result can no longer mark those taken. Generated suggestions keep the cheaper zone-file check, and checkout still confirms every name live.

  Explain the agent-to-browser checkout handoff before navigation: owner details and payment stay out of chat, selected domains carry over, and selection does not complete a purchase.

- `sf domains diagnostics` suggests `sf domains check <domain> --retry-ssl` only after a certificate attempt failed and every observed resolver already points the hostname at Spacefast with no stray address left. Each resolver is judged on its own answer: one that returns no address (for example NXDOMAIN), lacks an address family Spacefast serves, or still answers another host holds back the retry even while another resolver already answers Spacefast. While DNS still answers elsewhere, it lists the DNS fixes and the next automatic attempt instead. A certificate that is still being issued asks for a plain `sf domains check <domain>`, not a forced retry.
- `sf git connect --apply-best` now syncs the new connection and waits for the sync before detecting build settings, instead of failing with "Repository analysis requires the source repository sync to complete first" after the connection was already created. A failed first sync is reported as `repository_sync_failed`.
- Avoid requesting a second repository sync when `sf git connect --apply-best --sync` already waited for an in-progress sync. Explicit `--sync` still requests a sync for an already-ready connection.
- `sf git github repos` uses the team's GitHub App installation when it has exactly one, and its help now says where the installation ID comes from (`sf git github installations`). With several installations it lists them instead of failing with "requires <installation>".
- Production Git build requests now reuse queued or running work for the same repository connection, commit, branch and effective build settings across automatic webhooks and manual requests. Explicit build retries still create a new build.

  Shared builds atomically record each webhook delivery's admitted connection and build receipt, so recovery works even if processing stops before the delivery is finalized or a later redrive no longer matches that connection, without replaying promotion when an old delivery is redriven. A new webhook delivery after a manual-first shared build has completed may create a new build instead of reusing its output.

  Overlapping handlers recheck the delivery receipt under the connection admission lock, so completion of a shared manual build cannot cause the same delivery to admit a second build.

  Shared manual requests retain their idempotency identity through runner snapshot updates and completion-wait failures.

  Fresh pushes never reuse work superseded by a newer request for the same branch and target. URL and archive publishes also honor manual request aliases, so they cannot shadow a shared build's idempotency key.

  Production admission pins a resolved branch commit before queueing. A force-push after admission therefore does not retarget the queued build; submit a new build request to build the new branch head.

- Git URL and source-sharing errors now say "team" instead of "organization", and the remix field's example URL is `team/space`.
- Preserve middleware routing before static responses and block imports of unsupported access restrictions. Keep private files and unregistered handlers out of local development responses.
- The skill's cloud sandbox guidance now names where claude.ai keeps its domain allowlist: Settings → Capabilities.
- Document the hostname PATCH behavior for legacy apex/www pairs: explicitly selecting the canonical hostname configures both stored rows and returns the selected domain identity, without changing existing routing until requested. CLI domain updates now wait on that returned identity, so choosing the counterpart does not poll the old redirecting row.
- Report MCP request metadata without tool payloads or resource URIs. Gate On-Device reporting on the current CLI disclosure and bound hosted analytics identity lookup latency.
- Muse joins the personal agents, set up with one copied prompt. Indent moves to the coding agents, and Pi shows its own logo.
- Hosted and On-Device MCP now serve the same skills as `spacefast/plugins` through `skills/list`, `skills/get`, and standard resource reads. Clients can verify each file against the digest in its manifest. The CLI proxy now forwards the resource URI when reading skill files.
- Server-rendered Next.js builds now honor `redirects()` and `rewrites()` from `next.config`. Their source paths are routed to the Next.js worker instead of returning 404 from static hosting, and a page covered by a redirect is no longer served as a static file ahead of the redirect.
- Keep unrelated prerenders static when Next.js config rules combine a basePath with i18n. Redirects and beforeFiles rewrites now run before public and framework static assets via worker-first dispatch. Public-file inventory resolves conditional-rule fallthrough and literal or parametric rewrite destinations, including URL-encoded filenames and serving aliases, without allowing asset reads to shadow extracted-page drafts or RSC rendering. Sources whose asset paths cannot be represented safely retain static-first routing and emit a build note. The worker's private asset lookup list is independent of the origin's dispatch-pattern count and length limits. Escaped literal sources are recognized, and oversized origin routing patterns safely widen instead of failing publish. Builds and publishes of Next.js static exports warn when next.config redirects, rewrites, or headers are ignored and point to public/\_redirects and public/\_headers instead.

  Parametric public-asset rewrite prefixes preserve configured percent-escape casing. Capture layouts whose complete URI spelling cannot be reconstructed safely retain static-first routing.

- Next.js publishes no longer print a `header_cache_control_platform_managed` warning for every prerendered page. Those `Cache-Control: no-store` rules are the ones Spacefast generates in `_headers`; warnings about rules you wrote yourself still print.
- Publish Next.js static pages whose path runs under a public file of the same name (for example `public/docs` beside a `/docs/help` page) instead of aborting materialization with `ENOTDIR`. Relocate the page outside the public file's path and preserve its URL with a rewrite, so both files survive archive extraction and runtime finalization. Generated destinations avoid dynamic-route subtrees and retain the serving extension for non-HTML outputs such as sitemaps.
- Keep existing extensionless filenames for non-colliding Next.js static HTML pages. Relocate only pages whose filenames would occupy child-page directories, with forced generated rewrites so their URLs work whether clean URLs are enabled or disabled and cannot be shadowed by a public clean alias. Collided worker-owned pages stay in the framework with budgeted exact worker-first URLs, so middleware, afterFiles rules, and conditional beforeFiles misses reach the framework page instead of a public HTML alias. Pages that exceed the 100-pattern/512-character dispatch budget retain static relocation with a build note. Short fallback targets preserve the routing-file line budget; a shared, budgeted directory exclusion keeps those files static even under universal worker-first dispatch. This fixes Pages Router locale index and root-index build collisions while preserving authored-rule precedence, existing public files, and the normal routing-rule budget.
- Setup guides, the skill, and CLI hints now link to Spacefast's official listings: Claude's connector directory, the ChatGPT plugin, and the Grok Bot plugin. The custom-connector and custom-MCP-server steps for those apps are gone.
- Document `sf promote <version>` for making a ready version live and reserve rollback guidance for returning to an earlier version.
- Expand offline documentation with `_headers` syntax and crawler-challenge troubleshooting, including the limits of user-agent-only tests. Make Functions runtime environment documentation discoverable by name.
- Explain how to inspect compiled header rules before promotion and why private preview responses cannot demonstrate public live edge caching.
- A team space's general access is now Private or Public. Private means everyone on the owning team can view it, and people, share links, passwords and machine credentials are added on top; the separate `team` preset is gone. `access: "team"` and `newSpaceGrantPreset: "team"` are still accepted as legacy spellings of `private`, and `getTeamAccessDefaults` now reports only `private` or `public`. New team spaces no longer get a durable "Open" share link in updated clients. `POST /v1/spaces` omits `access` only when the caller sends `capabilities: ["optional_access"]`; older clients retain a real Open-link receipt during rollout. Publish receipts omit `access` unless the space has a link. An anonymous space's Open link keeps its pre-claim expiry after it is claimed. `sf publish --access` takes `private` or `public`, and `sf teams defaults` takes the same.
- Teams can allow private spaces only and hide every space from search engines. `getTeamAccessDefaults` reports `privateSpacesOnly`, `noindex` and `publicSpaceCount`; `setTeamAccessDefaults` changes only the fields sent, and the two team switches change only from a dashboard session (other credentials get `interactive_session_required`). While a team is private only, public Grants, `access: "public"` creates and public new-space defaults fail with `team_private_spaces_only`, and turning it on makes the team's public spaces private. Spaces report `teamAccessPolicy`, and their `noindex` is true whenever the team hides its spaces; turning it off for such a space fails with `team_requires_noindex`. `sf teams defaults` shows both switches and the public-space count.
- Keep credentials and private CLI submissions bound to the selected API provider. Verify Git exclusion before saving checkout secrets and keep partner queries within their configured scope.
- Show the existing space's owning team in the publish mutation banner, and preserve the original project or archive path and explicit build-selection flags in the run-again hint when publishing stages temporary build output.
- Functions bundles and Zero client bundles can now be up to 24 MiB, up from 8 MiB.
- Open published docs by slug or path and browse the available repository when no connection type is specified. Share links choose a permitted landing page when one is omitted. MCP error summaries now show the API problem code and session events record failed tool calls.
- Preserve owner_binding_requires_private_space for released connector clients and restore its error reference. Personal connector roles still require a private Space and the caller's own connection.
- Keep duplicated artifacts separate from executable project inputs, enforce local build isolation for Netlify plugins, and preserve filesystem containment while reading and writing CLI artifacts.
- Search every documentation tier from `sf docs` and the docs index API. Keep tier filters for listings, apply category filters before the search result limit, and link catalog topics to published documentation pages.
- Publishing now infers the SPA fallback for every app build, from any client: a root `200.html`, `_shell.html`, or `index.html` beside a JS bundle with no root `404.html`. `fallback` accepts `false` to turn that off. `sf publish --spa false` now writes `"fallback": false`, so the opt-out sticks, and `--spa auto` no longer patches the Space. `@spacefast/common` no longer exports `utils/publish-detection`.
- Move Telemetry into Labs with application enrollment. Approved teams can turn tracking on per Space through the dashboard, experimental CLI API, or MCP operations.
- Zero pages can use paths under `/zero`. A folder named `zero` is ordinary content again.
- Uploads now slow down when the upload host resets connections (for example HTTP/2 `NGHTTP2_ENHANCE_YOUR_CALM`), and the reduction applies to the files still in flight instead of only the next page. A failed upload's `upload_transport_error` now names the underlying network error, such as `ERR_HTTP2_STREAM_ERROR`.
- Choose an implicit creation destination only when exactly one team allows the caller to create Spaces, including the team creation setting. Expose complete live destination IDs on demand through `GET /v1/teams/access/spaces/create`, keeping identity and bootstrap reads independent. Keep explicit destinations and saved CLI defaults authoritative.
- `sf build --output <archive>` on a standalone Zero project now writes the archive and its metadata file. Before, it compiled the capsule and ignored `--output`. Without `--output`, `sf build` still only compiles the capsule.
- Zero 0.8 apps that import `@spacefast/zero/react` now build. The compiler ships the React hooks as a platform module, so builds no longer fail with `Could not resolve "@spacefast/zero/react"`.
- Zero builds and publishes now leave out files at paths the Spacefast runtime owns (such as `__spacefast_generated/theme.css`) instead of failing with "Static deploys cannot upload runtime control paths". These are usually left over from an earlier compiled deploy. The build names them in a warning so you can delete them from the source.
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.9.0
  - @spacefast/mcp@0.9.0
  - @spacefast/sdk@0.9.0
  - @spacefast/builders@0.9.0
  - @spacefast/routing@0.9.0
  - @spacefast/zero-compile@0.9.0
  - @spacefast/zero@0.9.0
  - @spacefast/next-adapter@0.9.0
  - @spacefast/adapter-kit@0.9.0
  - @spacefast/build-output@0.9.0

## 0.8.1

#### Patch Changes

- `--claim-token` (and `SPACEFAST_CLAIM_TOKEN`) accept the claim link or site door URL as well as the space key, and `--claim-token -` reads the key from standard input.
- On-Device MCP publishes a local folder on macOS again. Operation tools whose request body has no required fields now accept a call without `body`, and tools with a JSON body no longer offer a `contentType` input for form encodings of the same body.
- Spacefast MCP now serves one tool per API operation, named by its operation ID, on every connection. Code mode is gone: the `?codemode=` server URL parameter, the `spacefast://skills/execute` guide, and the hidden `sf mcp --mode` flag are removed, and the `search` and `execute` tools run nothing. A client that cached them gets a message to refresh its tool list and call operation tools instead of a "tool not found" error. Read `spacefast://skills/api` for the calling guide.
- The Spacefast CLI and `@spacefast/mcp` now declare Node.js 22.19.0 or newer. Their dependencies already required it, so installing on Node 20 printed a wall of `EBADENGINE` warnings while the packages claimed to support it.
- `sf api --output <file>` now writes binary downloads to the file. Before, it exited with an "unsettled top-level await" warning and left a hidden `.spacefast-*.tmp` file next to the target.
- When `sf publish`, `sf continue` or `sf spaces claim` saves an API key to `.spacefast/state.json` after a claim, the output now says so: the key id, its label when known, where it was saved, and how to revoke it. A team key from the claim exchange links to the team's API keys page in the dashboard; the CLI's own sign-in key names `sf api-keys revoke <id> --api-url <api>`. `--json` output carries the same details in a `credential` object. Before, `sf publish` swapped the space key for an API key without saying which key it was or how to revoke it.
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/mcp@0.8.1
  - @spacefast/adapter-kit@0.8.1
  - @spacefast/build-output@0.8.1
  - @spacefast/builders@0.8.1
  - @spacefast/common@0.8.1
  - @spacefast/next-adapter@0.8.1
  - @spacefast/routing@0.8.1
  - @spacefast/sdk@0.8.1
  - @spacefast/zero@0.8.1
  - @spacefast/zero-compat-emdash@0.8.1
  - @spacefast/zero-compat-payloadcms@0.8.1
  - @spacefast/zero-compile@0.8.1

## 0.8.0

#### Minor Changes

- MCP now exposes one Cloudflare-style code-mode surface: `search` finds and describes Spacefast API operations without calling them, and `execute` calls them, alongside `resume_execution`, `publish`, and the MCP Apps. Simple and full modes, `SPACEFAST_MCP_MODE`, and the per-operation tools are removed. `sf mcp` and `sf mcp proxy` accept and ignore `--mode`, so agent configs written by CLI 0.7.0 keep starting. The connector gateway (`search_connector_tools`) is removed from hosted MCP, and hosted OAuth no longer grants connector scopes. On-Device MCP served by the CLI (`sf mcp` and the Claude Desktop extension) keeps the gateway and runs it on the CLI login; `sf mcp proxy` relays hosted MCP, so it does not. The hosted server ignores a `mode` query parameter, so hosted MCP URLs saved with `?mode=full` keep working when clients connect to them directly. Dashboard-only operations stay out of the agent catalog: domain purchases, registration details, owner contacts, plan codes, and the generic WordPress REST and WP-CLI passthroughs. The dashboard, the CLI, and the API keep them, and the Domains App hands registration and payment to the dashboard.

#### Patch Changes

- Updated dependencies
- Updated dependencies
  - @spacefast/mcp@0.8.0
  - @spacefast/common@0.8.0
  - @spacefast/builders@0.8.0
  - @spacefast/routing@0.8.0
  - @spacefast/sdk@0.8.0
  - @spacefast/zero@0.8.0
  - @spacefast/zero-compat-emdash@0.8.0
  - @spacefast/zero-compat-payloadcms@0.8.0
  - @spacefast/zero-compile@0.8.0
  - @spacefast/adapter-kit@0.8.0
  - @spacefast/next-adapter@0.8.0
  - @spacefast/build-output@0.8.0

## 0.7.0

#### Minor Changes

- Give agents the same domain-search conversation as the dashboard through `POST /v1/domains/search`, the SDK's `searchDomains`, and MCP's `spacefast.org.session.domains.searchDomains`.

  `sf domains search` now uses the hosted conversation by default. Pass a saved receipt with `--input` to continue it, refine the brief, or apply likes, dislikes, and selections. Use `--local` for offline suggestions.

  Responses retain the full session, stable suggestion IDs, feedback, availability provenance, ranking, and fee-inclusive display prices. If generation reaches its time budget, resume the returned session to finish the same turn. MCP callers should save the full structured result for continuation.

- Comments are available to every team. `sf comments` gains `create`, `react`, `unreact`, `mark-read`, `resolve` and `reopen`, `list --unread`, `--author` and `--search` filters, and `--mention` on create and reply; `archive` and `unarchive` are replaced by `resolve` and `reopen`. Human CLI errors list every validation problem. The in-page overlay keeps its composer next to what you're commenting on, renders safe Markdown, sends page anchors for page comments, and adds an `@` mention picker. MCP guidance maps every comment verb to its API operation.
- Make simple mode the default for hosted MCP and `sf mcp`. Simple mode exposes individual first-party operations and disables the connected-service gateway. Use `?mode=full` for hosted connections or `sf mcp --mode full` to keep code execution and connected-service tools. Native plugin connections now select full mode explicitly, and skills, prompts, and Apps follow the selected mode.
- Simple mode now advertises only operations an agent can call, each with its own description. Operations that need a browser session, the CLI's device login, or a visitor's Frame or comment session are no longer MCP tools in either mode. Domain purchases, renewals, owner details, and plan codes continue in the Spacefast dashboard from simple mode, and the generic WordPress REST and WP-CLI passthroughs stay in full mode. The Domains App searches and hands selected names to the dashboard in simple mode.

  `getBootstrap` is now `getAccount`, `createSpaceZeroToken` is now `createSpaceRestApiToken`, and the MCP comments link helper `writeSpaceComment` is now `getSpaceCommentsLink`. Request paths are unchanged.

- Add a context starter: one Space is one Gutenberg document, with Save at the top
  right and the Space's existing access settings controlling viewing and editing.
  WordPress stores blocks and native revisions. A lossless `.blocks` source binding
  uses the existing source writeback pipeline so committed content can travel with
  source remixes. Markdown remains available for supported agent handoffs. Revision
  tokens protect human edits from stale saves.

#### Patch Changes

- Build logs no longer mark what a build command prints to stderr as an error. A failed build is still reported by its exit status, with the failed command's output as the detail.
- Keep existing website content and runtime declarations when publishing configuration only. Configuration-only publishes stage the evaluated configuration without scanning local content and use the server's retaining version lifecycle.
- Return a friendly validation error with command guidance for unknown commands, without interactive prompts or framework warnings. Add `sf git list` as an alias for `sf git ls`.
- A rollback or promotion that needs approval now says to run the same command again with `--continuation-token` once it is approved.
- `sf setup agent` and `sf mcp install` now write VS Code's MCP config to its user-level `mcp.json` instead of creating `.vscode/mcp.json` in the current project. Pass `--project` to `sf setup agent` to write `.vscode/mcp.json` in the project as before. From a VS Code remote terminal (Dev Containers, Codespaces, SSH, WSL) setup still writes `.vscode/mcp.json`, because VS Code only runs a server on the remote from workspace or remote config.
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/mcp@0.7.0
  - @spacefast/sdk@0.7.0
  - @spacefast/common@0.7.0
  - @spacefast/zero@0.7.0
  - @spacefast/zero-compile@0.7.0
  - @spacefast/builders@0.7.0
  - @spacefast/routing@0.7.0
  - @spacefast/zero-compat-emdash@0.7.0
  - @spacefast/zero-compat-payloadcms@0.7.0
  - @spacefast/adapter-kit@0.7.0
  - @spacefast/next-adapter@0.7.0
  - @spacefast/build-output@0.7.0

## 0.6.1

#### Patch Changes

- Align `sf domains search` with the dashboard in normal and interactive modes. Search uses live keyword matches, Luna typing previews, Sol submissions and refinements, fee-inclusive quotes, and Jev ranking. Saved sessions preserve feedback and selections, and interrupted searches remain resumable.
- Each submitted descriptive brief runs one AI generation batch of up to 12 new names; typing previews may already have added names. API and MCP first turns now request one batch instead of the previous two batches totaling about 24. Follow-up turns grow the generated pool toward 24 available names; liked and selected names stay protected. Keyword exact matches are unchanged.
- Updated dependencies
  - @spacefast/common@0.6.1
  - @spacefast/builders@0.6.1
  - @spacefast/mcp@0.6.1
  - @spacefast/routing@0.6.1
  - @spacefast/sdk@0.6.1
  - @spacefast/zero@0.6.1
  - @spacefast/zero-compat-emdash@0.6.1
  - @spacefast/zero-compat-payloadcms@0.6.1
  - @spacefast/zero-compile@0.6.1
  - @spacefast/adapter-kit@0.6.1
  - @spacefast/next-adapter@0.6.1
  - @spacefast/build-output@0.6.1

## 0.6.0

#### Minor Changes

- Projects can use `spacefast.config.ts`, with `defineConfig` and types from `spacefast/config`. `sf init` writes this format. Existing `sf.jsonc` projects remain supported; an explicit `--config` selection wins, otherwise `spacefast.config.ts` takes precedence when both files exist. Use only one project configuration file to avoid maintaining two different configurations.
- Add ChatGPT plugin entrypoints, a Space Library, an HTML file editor, local file opening, composer mentions, context attachments, chat actions, rich Space selection with previews, native settings, onboarding, and durable MCP event subscriptions. Add searchable Space lists and account-bound plugin preferences. Package the same plugin for local desktop testing.
- Read back the feedback you sent. `sf feedback list` shows your recent feedback, newest first, and `sf feedback get <ref>` shows one entry by the reference `sf feedback` returned. Both need you signed in as yourself (`sf login` or a dashboard session) and only return feedback you sent; Space keys and team, OAuth-client or partner keys get a 403. The API equivalents are `GET /v1/feedback` and `GET /v1/feedback/{ref}`.
- Add `sf migrate <url>` to capture public HTTPS websites through the existing publish API, with Build waiting, explicit idempotency-key recovery, and Open/Claim receipts. Each ordinary invocation starts a new migration.

#### Patch Changes

- Agents now ask once whether to send feedback to Spacefast when a task ends after an error, retry, workaround, or other friction. A yes covers later friction in the same conversation; a no stops the question. The MCP server instructions carry the same rule as the skills and setup document.
- Keep MCP setup runnable after transient npm installs by pinning its launcher to the current CLI version. Report broken Claude Code integrations as integration errors with recovery instructions.
- `sf setup agent` now works with symlinked user-level MCP configs, such as a `~/.codex/config.toml` kept in a dotfiles repository. Setup edits the file the link points to and leaves the link in place. A symlinked config inside the current repository (or the working directory outside one) is still refused, because a cloned repository can point that link anywhere.
- Clear removed host presentation settings in ChatGPT Apps. Save MCP delivery with build, deployment, and domain lifecycle transitions. Search file-owned Space names and preserve existing webhook URL behavior.
- Point the Claude Desktop extension's API key setting at the dashboard page where keys are created, instead of a page that no longer exists.
- Use publication config validation for routing inspection, explain missing databases, and preserve specific authentication refusal messages.
- Agents that arrive through a handoff link, and any API key a team member created, can now open a Space's content dashboard: the one-use sign-in link signs in the person who created the key. `sf content dashboard` opens the dashboard in your browser, or prints the sign-in link with `--show-secret --json` for an agent to hand you. The handoff document teaches both the CLI and the direct HTTP lane.
- Ask your agent for an admin panel, dashboard, or CMS to manage a Space's content, and it opens the Space's WordPress dashboard for you instead of building one. The agent creates a one-use sign-in link with `createSpaceContentAdminLink`: no password, expires in 10 minutes, signs you in as the Space's administrator or editor. If your page is plain static files, the agent offers to move it to Zero: your posts go into the dashboard, the page lists them live, and dashboard edits land back in the Space's source and deploy. Nothing moves until you say yes.
- Keep transient npm agent setup runnable after a Homebrew Node upgrade by persisting verified installation aliases for Node and npx.
- A permission refusal (`forbidden` and the connector role and policy refusals) no longer tells you to run `sf login`. Its `recovery` now says to ask a team owner or admin, because signing in again returns the same refusal.
- A build whose root directory does not exist now fails with `App root directory "travel" does not exist in the repository` instead of a raw `ENOENT … realpath` error with a sandbox path. When the name only differs by case, the error names the directory that exists (`did you mean "Travel"?`), since hosted builds run on a case-sensitive filesystem.
- Remote builds no longer pin detected build settings. `sf publish` sent the locally detected build command and output directory to the cloud build as explicit settings, which turned off automatic Next.js and TanStack Start output handling there, so a server-rendered Next.js app failed with "Build output directory does not exist: …/out". Settings you choose with flags or `sf.jsonc` are still sent.
- `sf setup agent --handoff` now says when sign-in already worked. If a setup step failed after the handoff link was redeemed, the error read like a failed sign-in, so retrying the spent link only returned "already used". The error now says the CLI is signed in and the link is used up, and its JSON details carry `handoff: { redeemed: true }`.
- List pending Space transfers with `sf transfers ls --team <team>` and inspect one with `sf transfers get <id>`. Transfer guidance now names receiving team owners and admins, explains credential visibility when a target team cannot be resolved, and distinguishes transfer authority from Space read/write access.
- Publish assets-only Wrangler projects that set `assets.not_found_handling`. `single-page-application` becomes the `/index.html` fallback in the generated `sf.jsonc`, with clean URLs kept on unless `assets.html_handling` is `none`; `404-page` and `none` keep Spacefast's default 404 handling. Workers with a `main` entry still report the setting as unsupported.
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/mcp@0.6.0
  - @spacefast/common@0.6.0
  - @spacefast/sdk@0.6.0
  - @spacefast/zero@0.6.0
  - @spacefast/builders@0.6.0
  - @spacefast/domain-search-terminal@0.6.0
  - @spacefast/routing@0.6.0
  - @spacefast/zero-compat-emdash@0.6.0
  - @spacefast/zero-compat-payloadcms@0.6.0
  - @spacefast/zero-compile@0.6.0
  - @spacefast/adapter-kit@0.6.0
  - @spacefast/next-adapter@0.6.0
  - @spacefast/build-output@0.6.0

## 0.5.1

#### Patch Changes

- Agents in hosted sandboxes that block Spacefast (Claude Code on the web and mobile, Codex cloud) now get a way forward instead of "run this from your laptop". The skills and `/setup.md` point them to the Claude connector link, GitHub push to deploy, and the exact domains to allow. In a Claude Code cloud session, `network_error` and `upload_transport_error` from the CLI carry the same guidance.
- The Cursor plugin marketplace manifest lists its owner by name only, as Cursor's marketplace schema requires, so the Spacefast plugins publish again.
- `sf git github installations` and `sf git github repos` now list by team (`--team`, defaulting to your default team) instead of by Space, so you can see a team's GitHub repositories before any Space exists. Repositories past GitHub's 1,000-repository listing limit stay visible instead of disappearing.
- Clarify that hosted MCP publishing requires authentication and that anonymous publishing creates private bearer previews. Remove instructions that restrict the use of other services, and require Space ownership before serving share-preview images without an access credential.
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/zero-compile@0.5.1
  - @spacefast/sdk@0.5.1
  - @spacefast/mcp@0.5.1
  - @spacefast/zero-compat-emdash@0.5.1
  - @spacefast/zero-compat-payloadcms@0.5.1
  - @spacefast/domain-search-terminal@0.5.1
  - @spacefast/adapter-kit@0.5.1
  - @spacefast/build-output@0.5.1
  - @spacefast/builders@0.5.1
  - @spacefast/common@0.5.1
  - @spacefast/next-adapter@0.5.1
  - @spacefast/routing@0.5.1
  - @spacefast/zero@0.5.1

## 0.5.0

#### Minor Changes

- Default new share links and password credentials to the viewer role. Pass `--role commenter` to grant commenting access. Show `status: "stored"` in `sf feedback --json` receipts.
- Every worker has a database and outbound fetch — nothing to declare.

  `sf.jsonc` no longer takes `runtime.database` or `runtime.fetch`; a stale key
  is warned about and ignored, not obeyed. A Functions worker always gets
  `env.DB`, and how far outbound `fetch` reaches is decided by the space: an
  unclaimed space reaches a trusted host list, a claimed one reaches any public
  host.

- `sf dev` runs actions and their fetches.

  A capsule's `actions` run locally over `action.run`, and `fetch()` inside any
  local handler goes through the isolate's host bridge instead of failing as
  undefined.

- Claim a hostname attached to another Space with a unique DNS TXT record, or move it directly when authorized to manage both Spaces. Expose ownership instructions and move status through the API and CLI, including `sf domains check --move`.
- A coding agent can sign the CLI in from its MCP session — no second login.

  The MCP server has a new `cli_login` tool. It returns a one-use link that
  `sf login --handoff` redeems over stdin, and the CLI gets the same access as the
  MCP connection: disconnect Spacefast and the CLI login stops too. The MCP
  guidance now tells agents that can run shell commands to publish local files
  with `sf publish`, which reads them from disk instead of sending every file
  through the conversation.

- Connect custom domains directly to a Space through WP Cloud, without team inventory or registration prerequisites. Domain removal deletes the Space attachment instead of retaining an unassigned serving record. Keep apex/www redirects in the existing routing engine without redirecting version or branch preview URLs.

  Keep domain registration and managed-DNS commands as separate, opt-in features. Their feature flags are disabled by default and do not affect Space custom-domain attachment.

  Custom-domain serving integrations must use `/v1/spaces/{spaceId}/domains` and its attachment endpoints. The optional registration and DNS APIs do not manage Space attachments.

- Add numeric and optional database fields, user references, indexed counts, application sign-in policies, and transactional guest upgrades to Zero. Query hooks now distinguish loading from empty or null results. Uploads are private by default, with explicit public sharing.

  Add local development identities, multiple isolated dev servers, query inspection, storage transfers, and retained Space archive and restore commands. Newly compiled apps require an engine that implements these contracts before publication.

#### Patch Changes

- When a detected `bun install --frozen-lockfile` fails because `bun.lock` no longer matches `package.json`, `sf build` and `sf publish` install from `package.json` with `bun install` and report a `build_install_lockfile_stale` warning instead of failing the build.
- Link the team's billing page when a plan limit that a paid plan raises blocks a command.
- Allow approved rollback and promotion requests to resume with their continuation token.
- Retry CLI update checks after registry failures and whenever the installed CLI version changes.
- `sf setup agent` no longer fails with `validation_error` when you keep the picker's default Universal (.agents) choice.
- Publish TanStack Start apps built with Nitro's `cloudflare-module` preset automatically: `.output/public` ships as files and the Nitro server runs as the site's worker with its Wrangler settings and D1 databases.
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.5.0
  - @spacefast/routing@0.5.0
  - @spacefast/zero@0.5.0
  - @spacefast/mcp@0.5.0
  - @spacefast/sdk@0.5.0
  - @spacefast/builders@0.5.0
  - @spacefast/domain-search-terminal@0.5.0
  - @spacefast/zero-compat-emdash@0.5.0
  - @spacefast/zero-compat-payloadcms@0.5.0
  - @spacefast/zero-compile@0.5.0
  - @spacefast/adapter-kit@0.5.0
  - @spacefast/next-adapter@0.5.0
  - @spacefast/build-output@0.5.0
- Build CLI commands as self-contained entry bundles with declared package dependencies resolved by Node. Keep the canonical WordPress block serializer private to the compiler so CLI installation does not inherit editor peer dependencies, and publish the browser API declarations.
- Fix CLI domain and storage lists and the MCP Space domains view to read the API response shapes returned by the shared transport.
- Framework builds and Zero compose in one project. `sf build` and `sf publish` run the framework build, compile the capsule from the project root, and publish the build output at `/` with the runtime beside it; a Zero project whose build script renders into the project root publishes the root. Sources, lockfiles, `tsconfig*.json`, TypeScript files, and `tools/` stay out of the published files. The `build` settings in `sf.jsonc` apply to local builds too, `sf publish --remote` takes the build lane when the project has a build, and a host project's `tsconfig.json` no longer rebinds the JSX runtime of Zero pages.

  Local Zero previews also accept source-backed Markdown and HTML documents. Their source preview escapes author markup instead of requiring compiled HTML or executing the source.

  Prebuilt publishes reuse compiled Zero and Functions metadata from the build archive's sidecar instead of recompiling sources removed during packaging. Invalid runtime metadata fails before upload.

- Ship native CLI executables with an immutable compiler dependency tree so build and dev work without a workspace or runtime dependency downloads. Verify each platform's release archive with real compilation, a local query and MCP worker execution.

  Use host filesystem paths when naming compiler platform assets so Windows builds emit valid portable asset names.

- Build Next.js 16 `proxy.ts` applications with the current OpenNext runtime adapter.
- Detect Worker entries and compatibility settings from Wrangler JSON, JSONC, and TOML configs. Preserve JSONC strings and trailing commas. Explain that D1 SQLite queries and migrations cannot use Spacefast's MySQL binding unchanged.
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/zero-compile@0.5.0
  - @spacefast/common@0.5.0
  - @spacefast/sdk@0.5.0
  - @spacefast/mcp@0.5.0
  - @spacefast/zero@0.5.0
  - @spacefast/builders@0.5.0
  - @spacefast/zero-compat-emdash@0.5.0
  - @spacefast/zero-compat-payloadcms@0.5.0
  - @spacefast/domain-search-terminal@0.5.0
  - @spacefast/routing@0.5.0
  - @spacefast/next-adapter@0.5.0
  - @spacefast/build-output@0.5.0

## 0.4.1

#### Patch Changes

- Build CLI commands as self-contained entry bundles with declared package dependencies resolved by Node. Keep the canonical WordPress block serializer private to the compiler so CLI installation does not inherit editor peer dependencies, and publish the browser API declarations.
- Updated dependencies
  - @spacefast/zero-compile@0.4.1
  - @spacefast/common@0.4.1
  - @spacefast/mcp@0.4.1
  - @spacefast/zero-compat-emdash@0.4.1
  - @spacefast/zero-compat-payloadcms@0.4.1
  - @spacefast/domain-search-terminal@0.4.1
  - @spacefast/routing@0.4.1
  - @spacefast/sdk@0.4.1
  - @spacefast/zero@0.4.1
  - @spacefast/next-adapter@0.4.1
  - @spacefast/build-output@0.4.1

## 0.4.0

#### Patch Changes

- Show contextual file diffs, source commits, and build details in approval cards. Preserve the reviewed action after a decision, bind each decision to its exact pause, and connect workspace files, staged changes, history, and build logs in MCP Apps.

  Allow the authenticated MCP proxy to use local development hosts under `.localhost` and the IPv6 loopback address.

- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/mcp@0.4.0
  - @spacefast/build-output@0.4.0
  - @spacefast/common@0.4.0
  - @spacefast/domain-search-terminal@0.4.0
  - @spacefast/next-adapter@0.4.0
  - @spacefast/routing@0.4.0
  - @spacefast/sdk@0.4.0
  - @spacefast/zero@0.4.0
  - @spacefast/zero-compat-emdash@0.4.0
  - @spacefast/zero-compat-payloadcms@0.4.0
  - @spacefast/zero-compile@0.4.0

## 0.3.0

#### Patch Changes

- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/zero-compile@0.3.0
  - @spacefast/sdk@0.3.0
  - @spacefast/zero-compat-payloadcms@0.3.0
  - @spacefast/zero-compat-emdash@0.3.0
  - @spacefast/mcp@0.3.0
  - @spacefast/domain-search-terminal@0.3.0
  - @spacefast/build-output@0.3.0
  - @spacefast/common@0.3.0
  - @spacefast/next-adapter@0.3.0
  - @spacefast/routing@0.3.0
  - @spacefast/zero@0.3.0

## 0.2.2

#### Patch Changes

- Republish the workspace through trusted publishing. v0.2.1's npm publication
  was interrupted by the first-publish bootstrap of @spacefast/content and
  @spacefast/setup-ui; both packages now exist with trusted publishing
  configured, so this release publishes every package from CI's reproducible
  build again.
- @spacefast/build-output@0.2.2
  - @spacefast/common@0.2.2
  - @spacefast/domain-search-terminal@0.2.2
  - @spacefast/mcp@0.2.2
  - @spacefast/next-adapter@0.2.2
  - @spacefast/routing@0.2.2
  - @spacefast/sdk@0.2.2
  - @spacefast/zero@0.2.2
  - @spacefast/zero-compile@0.2.2

## 0.2.1

#### Patch Changes

- Updated dependencies
- Updated dependencies
  - @spacefast/sdk@0.2.1
  - @spacefast/domain-search-terminal@0.2.1
  - @spacefast/mcp@0.2.1
  - @spacefast/build-output@0.2.1
  - @spacefast/common@0.2.1
  - @spacefast/next-adapter@0.2.1
  - @spacefast/routing@0.2.1
  - @spacefast/zero@0.2.1
  - @spacefast/zero-compile@0.2.1

## 0.2.0

#### Patch Changes

- Updated dependencies
- Updated dependencies
  - @spacefast/mcp@0.2.0
  - @spacefast/common@0.2.0
  - @spacefast/routing@0.2.0
  - @spacefast/domain-search-terminal@0.2.0
  - @spacefast/sdk@0.2.0
  - @spacefast/zero@0.2.0
  - @spacefast/zero-compile@0.2.0
  - @spacefast/next-adapter@0.2.0
  - @spacefast/build-output@0.2.0

## 0.1.0

#### Patch Changes

- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.1.0
  - @spacefast/sdk@0.1.0
  - @spacefast/domain-search-terminal@0.1.0
  - @spacefast/mcp@0.1.0
  - @spacefast/routing@0.1.0
  - @spacefast/zero@0.1.0
  - @spacefast/zero-compile@0.1.0
  - @spacefast/next-adapter@0.1.0
  - @spacefast/build-output@0.1.0

## 0.0.27

#### Patch Changes

- Updated dependencies
- Updated dependencies
  - @spacefast/mcp@0.0.27
  - @spacefast/common@0.0.27
  - @spacefast/domain-search-terminal@0.0.27
  - @spacefast/routing@0.0.27
  - @spacefast/sdk@0.0.27
  - @spacefast/zero@0.0.27
  - @spacefast/zero-compile@0.0.27
  - @spacefast/next-adapter@0.0.27
  - @spacefast/build-output@0.0.27

## 0.0.26

#### Patch Changes

- Release the complete Spacefast package and plugin set through trusted publishing.
  - @spacefast/common@0.0.26
  - @spacefast/domain-search-terminal@0.0.26
  - @spacefast/mcp@0.0.26
  - @spacefast/routing@0.0.26
  - @spacefast/sdk@0.0.26
  - @spacefast/zero@0.0.26
  - @spacefast/zero-compile@0.0.26
  - @spacefast/build-output@0.0.26
  - @spacefast/next-adapter@0.0.26

## 0.0.25

#### Patch Changes

- Updated dependencies
  - @spacefast/sdk@0.0.25
  - @spacefast/domain-search-terminal@0.0.25
  - @spacefast/mcp@0.0.25
  - @spacefast/common@0.0.25
  - @spacefast/routing@0.0.25
  - @spacefast/zero@0.0.25
  - @spacefast/zero-compile@0.0.25
  - @spacefast/build-output@0.0.25
  - @spacefast/next-adapter@0.0.25

## 0.0.24

#### Patch Changes

- Sharpen the agent skill: trigger phrasings in the description, explicit
  side-effect-free probes vs mutations, the correct pre-success URL check, and
  a positioning line that reflects Zero and Functions instead of denying
  server code.
  - @spacefast/common@0.0.24
  - @spacefast/domain-search-terminal@0.0.24
  - @spacefast/mcp@0.0.24
  - @spacefast/routing@0.0.24
  - @spacefast/sdk@0.0.24
  - @spacefast/zero@0.0.24
  - @spacefast/zero-compile@0.0.24

## 0.0.23

#### Patch Changes

- Updated dependencies
  - @spacefast/mcp@0.0.23
  - @spacefast/common@0.0.23
  - @spacefast/domain-search-terminal@0.0.23
  - @spacefast/routing@0.0.23
  - @spacefast/zero@0.0.23

## 0.0.22

#### Patch Changes

- Make automatic Next.js builds work when the Spacefast CLI is launched through npx.
- Updated dependencies
  - @spacefast/mcp@0.0.22
  - @spacefast/common@0.0.22
  - @spacefast/domain-search-terminal@0.0.22
  - @spacefast/routing@0.0.22
  - @spacefast/zero@0.0.22

## 0.0.21

#### Patch Changes

- Run CommonJS Node built-ins in Functions bundles and dispatch framework root routes when no static index exists.
  - @spacefast/common@0.0.21
  - @spacefast/domain-search-terminal@0.0.21
  - @spacefast/mcp@0.0.21
  - @spacefast/routing@0.0.21
  - @spacefast/zero@0.0.21

## 0.0.20

#### Patch Changes

- Deploy ordinary Next.js applications through the Functions runtime without requiring project-specific configuration.
  - @spacefast/common@0.0.20
  - @spacefast/domain-search-terminal@0.0.20
  - @spacefast/mcp@0.0.20
  - @spacefast/routing@0.0.20
  - @spacefast/zero@0.0.20

## 0.0.19

#### Patch Changes

- Resolve Zero SDK imports through installed package exports in published CLI builds.
  - @spacefast/common@0.0.19
  - @spacefast/domain-search-terminal@0.0.19
  - @spacefast/mcp@0.0.19
  - @spacefast/routing@0.0.19
  - @spacefast/zero@0.0.19

## 0.0.18

#### Patch Changes

- Give the clean release declaration build enough heap to complete before npm publication.
- Updated dependencies
  - @spacefast/common@0.0.18
  - @spacefast/domain-search-terminal@0.0.18
  - @spacefast/mcp@0.0.18
  - @spacefast/routing@0.0.18
  - @spacefast/zero@0.0.18

## 0.0.17

#### Patch Changes

- Give clean npm release type generation enough heap to complete on CI runners.
  - @spacefast/common@0.0.17
  - @spacefast/domain-search-terminal@0.0.17
  - @spacefast/mcp@0.0.17
  - @spacefast/routing@0.0.17
  - @spacefast/zero@0.0.17

## 0.0.16

#### Patch Changes

- Build workspace type declarations before validating packages in clean npm release checkouts.
  - @spacefast/common@0.0.16
  - @spacefast/domain-search-terminal@0.0.16
  - @spacefast/mcp@0.0.16
  - @spacefast/routing@0.0.16
  - @spacefast/zero@0.0.16

## 0.0.15

#### Patch Changes

- Remove the hidden early-access SFTP commands and their install-time SSH dependencies from the CLI.
  - @spacefast/common@0.0.15
  - @spacefast/domain-search-terminal@0.0.15
  - @spacefast/mcp@0.0.15
  - @spacefast/routing@0.0.15
  - @spacefast/zero@0.0.15

## 0.0.14

#### Patch Changes

- Keep MCP discovery, code-mode guidance, and demo receipts consistently branded as Spacefast.
- Add complete Zero database exports plus owner storage listing and deletion across the CLI, API, SDK, and dashboard.
- List MCP daemon, HTTP, and status commands in canonical CLI help.
- Run Lakebed 0.0.29 core capsules without import rewrites through Spacefast Zero, including actions, runtime-backed object storage, declared indexes, and the database v1 query API.
- Make Zero generally available on every plan, including local development, hosted execution, and Cast-backed realtime updates.
- Add Railway-style agent setup with repeated client targeting, optional project-scoped skills, integrated auth health, safe install/update/removal, popular agent consumers, local/remote-proxy/remote-OAuth connection methods, and direct variable, domain, and repository MCP lifecycle tools.
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/mcp@0.0.14
  - @spacefast/zero@0.0.14
  - @spacefast/common@0.0.14
  - @spacefast/routing@0.0.14
  - @spacefast/domain-search-terminal@0.0.14

## 0.0.13

- Jekyll sites now build automatically.

## 0.0.12

- Various bug fixes and improvements.

## 0.0.11

- Fixed CLI release downloads.

## 0.0.10

- The CLI is now available as standalone binaries and an npm package.

## 0.0.9

- Simpler install guides for the agent plugins.

## 0.0.8

- Deploys now finish as soon as your update is live.

## 0.0.7

- Various bug fixes and improvements.

## 0.0.6

- Various bug fixes and improvements.
