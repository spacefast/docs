# Old and new docs evaluation

This report compares the built `main` docs with this branch using the same
questions and checks on both versions. It includes two 20-question reviewer
comparisons, the 23-question docs-only agent eval, and the 12 targeted
regression checks. The runnable checks are documented in
[DOCS_TEST_SUITE.md](DOCS_TEST_SUITE.md).

**Conclusion:** The evidence establishes a small improvement in findability and
one repaired task prerequisite. It does not establish a broad improvement in
reader comprehension or task completion. The 20 questions were reviewed by an
evaluator, not tested with real users. The 12 new regression checks were written
for this change, so their pass-rate difference cannot stand in for an
independent outcome measure. Do not use this report to claim that the rewrite
as a whole is better for readers. The before/after writing audit is in
[DOCS_WRITING_QA.md](DOCS_WRITING_QA.md).

- **Part 1 — can a reviewer find the answer, stated clearly, in 3 clicks or
  less?** Tests navigation and answer presence, not reader comprehension or
  content accuracy.
- **Part 2 — is the exact command/code shown actually correct?** Tests
  content accuracy against the frozen, producer-owned reference
  (`generated/cli/`, `generated/openapi/`), not navigation.

The manual results are point-in-time observations, not a CI gate. The agent
results are single runs and can vary between runs. The 20 user questions do not
cover most of the 78 edited authored pages, so they cannot validate the rewrite
as a whole. See "Running this again" below for the method.

To support a broader claim, ask readers unfamiliar with both versions to do
the same representative tasks on each site, with site order balanced between
readers. Record task completion without assistance, wrong turns, and time to
the correct answer. Include tasks from pages whose openings changed, not only
the Database and publishing paths. Keep the task list and scoring rules fixed
before testing; report per-task results and failures alongside any aggregate.

The later team-benefit edits on the homepage, Quickstart, and Teams page were
not part of the 20-question comparison. Q15 checks whether an evaluator can
find invitation instructions; it does not test whether readers understand why
to use a team. Those edits have build and route verification but no measured
reader outcome yet.

## Current main versus this branch (October 5, 2026)

Both sites were built from the same current `main` base and tested in a browser
from their homepages. The candidate adds one authored route (Glossary); the
generated CLI and API reference trees are identical on both branches.

| Test | Current `main` | This branch | Change |
|---|---:|---:|---|
| Part 1: reviewer finds clear answer in at most 3 clicks | 18/20 | 19/20 | +1 question |
| Part 2: command/API accuracy against generated reference | 19/20 | 19/20 | No change |
| Targeted regression checks | 0/12 | 12/12 | Checks written for this change |
| Corrected docs-only agent retrieval | 23/23 | 23/23 | No factual retrieval regression |

Part 1 improvement comes from Q11: the Database page now tells readers how
to enable Zero before using its database (one click on both sites; the old
answer was incomplete). Q1 already passed on `main`, but the no-install Drop
path moved from Publishing → Dashboard (two actions) to the homepage (zero).
Q19 still fails on both sites because “contact support” has no linked or named
support channel. Q14 can be answered on Customization in one click; Site pages
adds detail about error-page layout in a second click.

Part 2 Q8 is one failed question with two issues on both branches: the
generated CLI example uses a preset outside its own enum, and the authored
API-key page omits `partner_admin` while giving conflicting default-preset
guidance. The checks compare documentation with the generated reference; they
do not execute a live publish or API request.

The same 26-test executable suite was run on both built sites. The 14 existing
corpus, index, and audit unit tests pass on each. The 12 new experience checks
fail on `main` and pass on this branch. They were written for the changed
reader journeys, so their before/after result shows that the intended edits
landed and are protected against regression. It is not independent evidence
that the edits improve the reader experience.

## Part 1: Reviewer click-path comparison (20 user questions)

Methodology: an evaluator starts every test fresh from the homepage
(`/docs/`), using navigation a reader could use
(nav bar, sidebar, tabs, in-page links/cards). A "click" is one navigation action.
"Stated clearly" means the answer is plain and near the top of where you
land — not something inferred from paragraphs of surrounding technical
detail.

| # | Question | `main` | This branch | Destination / change |
|---|---|---|---|---|
| 1 | Publish without installing anything? | Pass, 2 actions | Pass, 0 actions | Homepage now states the dashboard Drop path before CLI install. |
| 2 | How much does it cost? | Pass, 1 | Pass, 1 | `/billing` |
| 3 | Add a custom domain? | Pass, 1 | Pass, 1 | `/domains`; the new lead states the capability directly. |
| 4 | Undo a bad publish? | Pass, 1 | Pass, 1 | `/versions`; the new lead says rollback does not rebuild. |
| 5 | Publish without an account — what happens? | Pass, 1 | Pass, 1 | `/anonymous-and-claim` |
| 6 | Let one specific person see my site? | Pass, 1 | Pass, 1 | `/access` |
| 7 | Put a password on my site? | Pass, 1 | Pass, 1 | `/access` |
| 8 | What exactly is a "Space"? | Pass, 1 | Pass, 1 | `/spaces`; the new lead defines it. |
| 9 | Connect Claude to publish for me? | Pass, 1 | Pass, 1 | `/agents` |
| 10 | Does it work with Next.js? | Pass, 1 | Pass, 1 | `/recipes/next` |
| 11 | Add a database to my site? | Fail, 1 | Pass, 1 | `/database` now gives the Zero setup prerequisite before query instructions. |
| 12 | My build failed — what do I do? | Pass, 1 | Pass, 1 | `/troubleshooting` now starts with the Space Overview diagnostic step. |
| 13 | See my site's traffic? | Pass, 1 | Pass, 1 | `/stats`; the new lead also states that crawler traffic is excluded. |
| 14 | Use my own logo on error pages? | Pass, 1 | Pass, 1 | `/customization`; `/site-pages` adds layout detail in a second action. |
| 15 | Invite a teammate? | Pass, 1 | Pass, 1 | `/teams` |
| 16 | Free plan limits? | Pass, 1 | Pass, 1 | `/limits` |
| 17 | Connect GitHub for auto-deploy? | Pass, 1 | Pass, 1 | `/git`; the new lead names the GitHub route. |
| 18 | Schedule something hourly? | Pass, 1 | Pass, 1 | `/crons`; the new lead names `sf.jsonc` and publish timing. |
| 19 | Something broke — where do I get help? | Fail, 1 | Fail, 1 | `/troubleshooting` still gives no support channel. |
| 20 | Can I resell this under my own brand? | Pass, 1 | Pass, 1 | `/platforms` |

**Candidate score: 19/20 pass at ≤3 clicks, 1 unresolved failure.** Q11
failed on the first pass and was fixed before this result was recorded.

### Failure 1 (Q11) — fixed

The single most predictable click for "add a database" — the page literally
titled **Database** — silently assumed Zero was already running and never
explained how to turn it on. The real instructions live on a differently
named page (**Dynamic sites with Zero**) that the question wouldn't point
you to. Fixed: added a note at the top of `content/(dynamic)/database.mdx`
("Don't have a database yet?") naming the exact `sf.jsonc` key and `sf init`
flag, cross-linking to Zero.

### Failure 2 (Q19) — flagged, not fixed

There is no discoverable support/contact/community surface anywhere in the
site — no footer, no "Help" nav item, no status page. "Contact support"
appears exactly 3 times in the whole corpus
(`troubleshooting.mdx`, `domains.mdx` ×2) and **never once says how** — no
email, form, or link. This is not a documentation bug I can fix with facts
I have: inventing a plausible-looking support email or link would violate
the same "document only shipped, verifiable behavior" rule this whole
project has followed, and would be actively worse than the current honest
gap. **This needs real input — an actual support channel — before anyone
can write the fix.**

## Part 2: Manual command-accuracy comparison (20 questions)

Methodology: every answer cross-checked against `generated/cli/index.md` and
`generated/openapi/api.json` — the frozen, producer-owned ground truth — not
executed against a live backend (none available in this environment).
"Works" means the command, flag, or endpoint shown is real, current, and
internally consistent with the generated reference.

| # | Question | `main` | This branch |
|---|---|---|---|
| 1 | Install command (npm)? | Pass | Pass |
| 2 | Publish the current directory? | Pass | Pass |
| 3 | Force upload vs. force build? | Pass | Pass |
| 4 | List all versions? | Pass | Pass |
| 5 | Roll back to a version? | Pass | Pass |
| 6 | Add a domain as primary? | Pass | Pass |
| 7 | Check domain/DNS verification? | Pass | Pass |
| 8 | Create an API key with a preset? | Fail | Fail |
| 9 | curl to publish via HTTP API? | Pass | Pass |
| 10 | Bearer-token header? | Pass | Pass |
| 11 | Set an environment variable? | Pass | Pass |
| 12 | View build logs? | Pass | Pass |
| 13 | Connect a GitHub repository? | Pass | Pass |
| 14 | Create a team? | Pass | Pass |
| 15 | CLI exit code for auth failure? | Pass | Pass |
| 16 | MCP server URL + transport? | Pass | Pass |
| 17 | Run a cron on demand? | Pass | Pass |
| 18 | Open a SQL console? | Pass | Pass |
| 19 | Password-protect a path? | Pass | Pass |
| 20 | Webhook signature header + algorithm? | Pass | Pass |

**Score: 19/20 questions pass.** Q8 fails because of 2 real bugs in that
one question.

### Bug 1 — in the frozen generated reference (not fixed here)

`generated/cli/index.md` documents `sf api-keys create --preset` with a
7-value enum (`ci_deploy`, `space_publisher`, `space_admin`,
`domain_manager`, `team_admin`, `billing_viewer`, `partner_admin`) — then its
own usage example runs `--preset full_access`, a value that isn't in that
list. Anyone who copies the example gets a validation error. This exact text
is also baked into `content/cli/reference.md` (the materialized build
overlay). Per `AGENTS.md`, generated content is fixed at its source in the
product monorepo and re-exported, never hand-edited here — **this needs a
fix in the monorepo's CLI source**, flagged, not touched, in this repo.

### Bug 2 — in hand-authored content (not fixed here, flagging for a decision)

`content/(account)/api-keys.mdx`'s preset table lists only 6 of the 7 real
presets (missing `partner_admin` entirely), and contradicts itself on the
default: line 34 says `sf api-keys create` defaults to `space_publisher`
(matching the generated reference); line 60 says `space_admin` is "the
default when a request names no preset." Unlike Bug 1, this one *is*
editable here — it's authored content, not generated — but fixing it needs
a judgment call on what the second "default" claim actually means (CLI vs.
a different code path), which this comparison can't resolve on its own.
Left for a deliberate follow-up rather than guessing.

## Part 3: Built-docs reading-experience checks (12 tests)

The same `scripts/docs-experience.test.mjs` file ran against each separately
built site. All 12 fail on `main` and pass on this branch. The old build's
existing 14 corpus, index, and audit unit tests pass, as do all 14 on this
branch, making the complete suite **14/26 versus 26/26**. This suite was
designed to guard the paths changed in this PR; its baseline failure rate
should not be generalized to the quality of every old docs page.

| Check against the authored or built page | `main` | This branch |
|---|---|---|
| Authored pages open with their subject, not a templated page promise | Fail | Pass |
| Homepage offers no-install Drop before the CLI install | Fail | Pass |
| Quickstart offers no-install Drop before CLI steps | Fail | Pass |
| Homepage links unfamiliar terms to glossary definitions | Fail | Pass |
| Database gives the Zero prerequisite before query instructions | Fail | Pass |
| Troubleshooting gives a first diagnostic step before the error catalog | Fail | Pass |
| Versions lead says whether rollback rebuilds | Fail | Pass |
| Crons lead says where and when a schedule takes effect | Fail | Pass |
| Environment variables lead says which scope wins | Fail | Pass |
| Access lead says what makes a Space private | Fail | Pass |
| Caching lead says how to force a fresh response | Fail | Pass |
| Traffic stats lead says whether crawlers count | Fail | Pass |

The writing comparison in [DOCS_WRITING_QA.md](DOCS_WRITING_QA.md) covers the
larger edit: 65 changed opening paragraphs across 78 edited existing pages,
with 53 templated openings reduced to zero and median lead length moving from
34 to 23 words. Those are structural and editorial signals, not a reader
comprehension score.

## Part 4: Docs-only agent evaluation (23 questions)

Blume gives Codex only the built docs through its search, page, and navigation
tools. For each question, a separate judge checks the answer against the
expected facts. Both builds use the same corrected `evals.yaml`, the same
Blume version, and the same agent CLI. Each result is one run, so a difference
needs a repeat before we attribute it to the writing.

The first pass exposed four defects in the eval questions or grading key. We
corrected them before the final side-by-side run:

- **Rate limits:** The question asked only for the credential limit while the
  key also required the unauthenticated IP limit. It now asks for both.
- **Plus price:** The key said `$4.99`, but both built Billing pages say the
  upcoming Plus base price is `$15` per team per month. The question now
  names those upcoming terms.
- **Free file limit:** The key assigned the anonymous `50 MiB` cap to the
  claimed Free plan. The docs say `1 GiB` for a claimed Free plan and
  `50 MiB` for anonymous publishing. The question now asks for both.
- **Anonymous claim:** The original question conflated the serving deadline
  with the later recovery period. It now asks separately when an anonymous
  Space stops serving and how long the key remains valid for claiming.

The original, uncorrected pass is excluded from the headline comparison. It
gave a false failure on both builds for the first three items. It also gave
one old-only failure for anonymous claiming that passed when rerun unchanged
on both builds. That result did not establish a docs improvement.

The corrected full run passed **23/23 on `main` and 23/23 on this branch**,
with no errors or skips. This establishes factual retrieval on these 23
questions in this run. It does not grade prose quality or real agent task
completion. The full agent run used the earlier builds made with Bun 1.4.2.
Both sites were then rebuilt with the repository's pinned Bun 1.3.11. Two
Vale-only wording edits changed the Zero and CLI pages; their affected agent
questions (18 and 22) were rerun against the final build and both passed.

| # | Agent question | `main` | This branch |
|---|---|---|---|
| 1 | Minimum Node.js version for the `sf` CLI? | Pass | Pass |
| 2 | New Space hostname and single-version URL? | Pass | Pass |
| 3 | `sf login` code validity and credential lifetime? | Pass | Pass |
| 4 | Anonymous serving deadline and later claim period? | Pass | Pass |
| 5 | DNS records to connect `example.com`? | Pass | Pass |
| 6 | Does `sf domains rm` delete the domain? | Pass | Pass |
| 7 | Authentication-failure CLI exit code? | Pass | Pass |
| 8 | HTML cache header and cache busting? | Pass | Pass |
| 9 | List-page sizes and pagination? | Pass | Pass |
| 10 | Authenticated and unauthenticated API request limits? | Pass | Pass |
| 11 | `Idempotency-Key` retention? | Pass | Pass |
| 12 | Hosted Spacefast MCP server URL? | Pass | Pass |
| 13 | MCP execute sandbox limits? | Pass | Pass |
| 14 | Team roles? | Pass | Pass |
| 15 | Upcoming Plus base price? | Pass | Pass |
| 16 | Claimed Free and anonymous single-file limits? | Pass | Pass |
| 17 | Project config filename? | Pass | Pass |
| 18 | Turn on the Zero runtime? | Pass | Pass |
| 19 | `_redirects` versus `sf.jsonc` rule precedence? | Pass | Pass |
| 20 | Does `sf publish` upload `node_modules` and `.git`? | Pass | Pass |
| 21 | Spacefast API-key prefix? | Pass | Pass |
| 22 | CLI behavior with `CI=1`? | Pass | Pass |
| 23 | Does rollback rebuild? | Pass | Pass |

## Running this again

- Build current `main` and this branch in separate clean checkouts with
  Bun 1.3.11, Node 24 or newer, and `bun run build` in each. The comparison
  here used Blume 2.0.3 and Codex CLI 0.160.0 on October 5, 2026.
- **Part 1:** Start each browser check at `/docs/`. Follow only rendered
  navigation, tabs, and page links; count each navigation action. Read the
  destination answer, not just its title. The 20-question click-path pass is
  manual. We also checked the rebuilt homepage and Database page in a browser
  and inspected all 20 built destination pages side by side.
- **Part 2:** Cross-check the 20 command/API answers against the same
  `generated/cli/index.md` and `generated/openapi/api.json` in each build.
  `bun run verify:commands` checks examples more broadly, but this 20-question
  comparison is still a manual cross-check rather than a live API test.
- **Part 3:** Run the candidate's `scripts/docs-experience.test.mjs` against
  each built checkout. For the old checkout, copy that test and the Node-based
  `scripts/audit-composed-site.test.mjs` into a temporary copy, then run
  `node --test scripts/*.test.mjs`. On this branch, `bun run test:docs` runs
  the same Node test command. The old checkout should fail the 12 new
  experience checks while passing the 14 existing unit checks.
- **Part 4:** Run `./node_modules/.bin/blume eval --agent=codex
  --file=evals.yaml --json` in this branch, and point the old checkout's
  `--file` argument at the **same** corrected `evals.yaml`. Blume runs one
  reader and one judge per question. Keep failures, errors, and skips separate;
  repeat a differing result before claiming an improvement. The agent's model
  was not pinned, so these single-run scores are not deterministic.
