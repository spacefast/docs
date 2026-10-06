# Authored-docs writing audit

The October 5 audit below measured structure and wording, but missed factual overstatements. Its candidate examples are historical, not verified guidance. The [October 6 semantic review](#semantic-review-october-6-2026) records the corrections and their evidence. Repeatable checks for the current docs are in [DOCS_TEST_SUITE.md](DOCS_TEST_SUITE.md).

## Method

Run `node scripts/compare-writing.mjs origin/main` from the repository root before this branch merges. It selects existing authored MDX pages changed from that baseline, extracts each page's first prose paragraph after frontmatter, and counts words. A templated opening starts with “After this page” or “By the end of this page.” The 30-word threshold is a review signal, not a readability guarantee.

I also read all 65 changed opening paragraphs side by side with their page titles. For each, I checked whether the first paragraph gives a practical fact or action or repeats a generic promise about the page. That review found five leads starting with a narrow implementation detail; they were revised to lead with the page's main job. I checked that each displaced detail remains elsewhere on its page.

## Results

| Signal | Current `main` | This branch | Scope |
|---|---:|---:|---|
| Repeated “After this page…” or “By the end of this page…” openings | 53 | 0 | 78 changed existing MDX pages |
| Opening paragraphs over 30 words | 43 | 13 | 65 changed opening paragraphs |
| Median opening words | 34 | 23 | 65 changed opening paragraphs |

Of the 65 changed leads, 62 are shorter, one has the same word count, and two are longer. The candidate also adds a glossary and a no-install publishing route on the homepage. Those are separate navigation and comprehension aids; this word-count table does not score them.

The edited leads now put several useful answers before the reader has to scan the page:

| Page | Reader's question | Current `main` opening | Candidate opening |
|---|---|---|---|
| Versions | Does rollback rebuild the site? | Promises to explain rollback | Says rollback only repoints `live`; no rebuild |
| Crons | Is there a dashboard editor? | Promises to explain scheduling | Says schedules live in `sf.jsonc` and take effect on publish |
| Environment variables | Which value wins when team and Space both set a name? | Promises to explain scopes | Says the Space value wins |
| Access and sharing | What makes a Space private? | Promises to explain access | Says removing every grant makes it private |
| Caching | How do I force a fresh response? | Promises to explain cache behavior | Says republishing forces one |
| Traffic stats | Are crawlers included? | Promises to explain counts | Says crawler traffic is excluded |

These rows record what the candidate openings claimed at the time, not an independent six-question success rate. Review later found that several claims dropped necessary qualifications, including the caching and traffic examples.

For example, Versions opened with “After this page you know what a version holds, how it reaches `ready`, how the `live` pointer moves, and how to roll back to any earlier version in seconds.” It now opens with “A rollback doesn't rebuild anything — it just repoints `live` at a version that already exists, which is why it takes seconds, not minutes.” The new sentence answers the likely rollback question; the page still explains version states below it.

## Review findings and limits

The manual review caught five candidate leads that were shorter but spent the first sentence on a less useful detail: slug validation on Spaces, polling mechanics on Logs, archive flags on Frameworks and builds, CLI naming on Publish from Git, and remote WP-CLI output on WordPress. Each now leads with the page's main task or mental model. The removed detail was checked elsewhere on the same page and retained or moved into the body.

This audit establishes changes in structure and in which facts appear first. It does not show that real readers complete tasks faster or understand the docs better. Shorter openings could also lose useful context for some readers. That requires reader testing. Vale now passes after two existing technical plurals (`GETs` and `TTYs`) were written as plain explanations; its rules do not detect repeated sentence structures or judge whether a page leads with the right fact.

## Semantic review, October 6, 2026

Reviewed every changed MDX hunk in the PR: 78 existing pages plus the new glossary. Compared each rewrite with its original wording, then checked broader claims against the relevant procedures, exceptions, sibling guides, and producer-owned public reference snapshot. This was a documentation consistency audit, not a live product test or a reread of every unchanged paragraph.

The first review fixed eight findings covering stats, caching, routing, anonymous key recovery, Zero pricing, hosted MCP authentication, team plan limits, and Zero setup. The follow-up applied the same reasoning across the full rewrite and corrected related claims at other entry points.

| Claim family | Correction | Evidence checked |
| --- | --- | --- |
| Retry safety | Name the key, matching request scope, 24-hour replay window, and unstored outcomes that execute again | `content/api/idempotency.mdx`, Send a key / What is not stored |
| Pagination | Limit the common cursor model to endpoints that use it; retain endpoint defaults, ordering, offset paging, and unpaginated lists | `generated/openapi/api.json`: `searchDocs`, `listSpaceStorageObjects`, `listSpaceDomains` |
| Publish and rollback | Preserve no-op publishes, ready/retained targets, manual promotion, and preview behavior | Public reference: `createSpaceVersion`, `promoteSpaceVersion`; `content/(concepts)/versions.mdx`; `content/(publish)/ci.mdx` |
| URL lifetime | Separate a stable version URL from retained files; distinguish domain attachment from slug rename | `content/(concepts)/spaces.mdx`, Renaming; `content/cli/versions.mdx`, sf versions rm |
| Access | Revoking one matching grant does not revoke other grants or the team's permissions | `content/(serve)/access.mdx`, scoped grants; `content/(concepts)/teams.mdx`, role and default-access tables |
| Runtime setup | Scope auto-detection to Functions layouts; preserve the Zero declaration and the Functions database alternative | `content/(dynamic)/functions.mdx`, Where the code lives / Declare it; `content/cli/db.mdx` |
| Variables and logs | A queued re-finalize can apply variables; logs have retention, ingestion delay, and static-runtime limits | `content/(dynamic)/environment-variables.mdx`; `content/(dynamic)/logs.mdx`; `listSpaceRuntimeLogs` |
| Archives and Git | Preserve prebuilt archives, branch auto-deploy controls, and the GitHub App prerequisite | `generated/cli/index.md`, sf publish `--prebuilt`; `content/(publish)/git.mdx`; `content/cli/git.mdx` |
| CLI helpers | Linking selects a Space rather than removing all publish options; apply and continuation helpers mutate state; continuation needs claim approval | `content/cli/project.mdx`; `content/cli/agent-commands.mdx`; `content/(publish)/anonymous-and-claim.mdx` |
| WP-CLI and storage | Remote WP-CLI returns no printed output, even for read commands; object IDs do not replace read keys | `content/(dynamic)/wordpress.mdx`, Local versus remote; `content/(dynamic)/storage.mdx`, returned URL |
| Agent reach | Keep supported-client detection, skill installation, permission ceilings, human-only actions, and team-automation revocation exceptions | `content/cli/agents.mdx`; `content/agents/skills.mdx`; `content/agents/permissions.mdx` |
| Ownership and billing | Distinguish self-serve teams from partner customer ownership; billing reads differ from plan changes; key rotation depends on switching consumers first | `createSpace` public reference; `content/platforms/partner-api/customers.mdx`; `content/(account)/billing.mdx`; `content/(account)/api-keys.mdx` |
| Cache and schedule application | Repeat public-cache exceptions in troubleshooting; crons follow the live version | `content/(serve)/caching.mdx`; `listSpaceCrons` public reference |
| Sentence splitting | Limit missing generated CSS to the dynamic class instead of declaring the whole app unstyled | `content/(dynamic)/zero-runtime.mdx`, Styling |

Coverage by original PR section:

| Section | Pages compared |
| --- | --- |
| Account | 3: api-keys, authentication, billing |
| Concepts | 3: spaces, teams, versions |
| Dynamic | 8: crons, database, environment-variables, functions, logs, storage, wordpress, zero-runtime |
| Publishing | 8: anonymous-and-claim, ci, frameworks, git, publish, recipes/html, recipes/next, wordpress-data-sources |
| Reference | 3: config-file, glossary, limits |
| Serving | 8: access, caching, customization, domains, routing, site-pages, stats, urls |
| Agents | 9: claude-code, claude-desktop, codex, cursor, mcp-server, other-clients, permissions, sf-setup, skills |
| API | 9: authentication, errors, idempotency, index, operations, pagination, rate-limits, sdk, webhooks |
| CLI | 20: agent-commands, agents, api-keys, api, builds, db, domains, env, git, index, login, project, publish, share, source, spaces, storage, teams, versions, zero |
| Entry pages | 3: index, quickstart, troubleshooting |
| Platforms | 5: partner-api/configuration, customers, go-live, index, tokens |

The style guide and contributor instructions now require this meaning check. Existing built-output assertions were updated where they reinforced a misleading claim. No new regex suite is presented as independent proof of product behavior. Generated references remain producer-owned and unchanged. The previously recorded support-contact and API-key preset gaps remain outside these corrections.

Verification with Bun 1.3.11 and Node 24 passed: frozen dependency install, generated-reference and command-example checks, type check, strict link validation, production build, all 26 docs tests, composed-site audit, public-safety check, Vale, route verification, and `git diff --check`.

## Review follow-through, October 6, 2026

The next review caught two places the semantic pass had not reconciled: the `sf teams` lead contradicted its command examples, and the pagination eval still assumed a universal default. The team CLI guide now names the documented credential restriction beside all five affected commands, including invitation acceptance, and replaces success examples with dashboard instructions. The Teams guide now recommends the CLI only for listing invitations and states the credential restriction beside its role table.

These corrections follow the authored authentication and permissions contract in `/authentication`, `/api-keys`, and `/agents/permissions`. The generated CLI snapshot lists command syntax but does not establish that a CLI credential can execute the action. No team membership was changed to test authorization, and the producer-owned snapshot was not edited.

The pagination eval now expects endpoint-specific defaults, offset paging, and unpaginated lists. Checking the adjacent eval expectations also found an overly broad cache-purge answer; that case now names public static HTML, best-effort purge, and immutable version-hostname exceptions. These are corrected evaluation expectations, not a claim that the agent-based eval has run.

Verification passed with Bun 1.3.11 and Node 24: the full repository check sequence, all 26 docs tests, and `git diff --check`. All 23 eval cases parsed and passed a structural check; no agent-based eval result is claimed.
