# Point-in-time docs QA comparison

This report records two manual 20-question comparisons made before the PR.
The results are evidence for this edit, not an executable regression suite.
The runnable checks are documented in [DOCS_TEST_SUITE.md](DOCS_TEST_SUITE.md).
`evals.yaml` separately covers an AI assistant's factual retrieval from the
docs.

These comparisons do not grade prose quality. The before/after writing audit is in
[DOCS_WRITING_QA.md](DOCS_WRITING_QA.md).

- **Part 1 — can a real user find the answer, stated clearly, in 3 clicks or
  less?** Tests navigation and clarity, not content accuracy.
- **Part 2 — is the exact command/code shown actually correct?** Tests
  content accuracy against the frozen, producer-owned reference
  (`generated/cli/`, `generated/openapi/`), not navigation.

Both are point-in-time observations, not a standing guarantee or a CI gate.
See "Running this again" below for the manual method.

## Current main versus this branch (October 5, 2026)

Both sites were built from the same current `main` base and tested in a browser
from their homepages. The candidate adds one authored route (Glossary); the
generated CLI and API reference trees are identical on both branches.

| Test | Current `main` | This branch | Change |
|---|---:|---:|---|
| Part 1: clear answer in at most 3 clicks | 18/20 | 19/20 | +1 question |
| Part 2: command/API accuracy against generated reference | 19/20 | 19/20 | No change |

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

## Part 1: Manual user click-path comparison (20 questions)

Methodology: every test starts fresh from the homepage
(`/docs/`), using only real navigation a user would use
(nav bar, sidebar, tabs, in-page links/cards). A "click" is one navigation action.
"Stated clearly" means the answer is plain and near the top of where you
land — not something inferred from paragraphs of surrounding technical
detail.

| # | Question | Clicks | Landed on | Verdict |
|---|---|---|---|---|
| 1 | Publish without installing anything? | 0 | Homepage | PASS |
| 2 | How much does it cost? | 1 | `/billing` | PASS |
| 3 | Add a custom domain? | 1 | `/domains` | PASS |
| 4 | Undo a bad publish? | 1 | `/versions` | PASS |
| 5 | Publish without an account — what happens? | 1 | `/anonymous-and-claim` | PASS |
| 6 | Let one specific person see my site? | 1 | `/access` | PASS |
| 7 | Put a password on my site? | 1 | `/access` | PASS |
| 8 | What exactly is a "Space"? | 1 | `/spaces` | PASS |
| 9 | Connect Claude to publish for me? | 1 | `/agents` | PASS |
| 10 | Does it work with Next.js? | 1 | `/recipes/next` | PASS |
| 11 | Add a database to my site? | 1 | `/database` | PASS (initial failure fixed) |
| 12 | My build failed — what do I do? | 1 | `/troubleshooting` | PASS |
| 13 | See my site's traffic? | 1 | `/stats` | PASS |
| 14 | Use my own logo on error pages? | 1 | `/customization` | PASS (`/site-pages` adds error-page detail in a second click) |
| 15 | Invite a teammate? | 1 | `/teams` | PASS |
| 16 | Free plan limits? | 1 | `/limits` | PASS |
| 17 | Connect GitHub for auto-deploy? | 1 | `/git` | PASS |
| 18 | Schedule something hourly? | 1 | `/crons` | PASS |
| 19 | Something broke — where do I get help? | 1 | `/troubleshooting` | **FAIL — real gap, not fixed** |
| 20 | Can I resell this under my own brand? | 1 | `/platforms` | PASS |

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

| # | Question | Result |
|---|---|---|
| 1 | Install command (npm)? | PASS |
| 2 | Publish the current directory? | PASS |
| 3 | Force upload vs. force build? | PASS |
| 4 | List all versions? | PASS |
| 5 | Roll back to a version? | PASS |
| 6 | Add a domain as primary? | PASS |
| 7 | Check domain/DNS verification? | PASS |
| 8 | Create an API key with a preset? | **FAIL — 2 bugs found** |
| 9 | curl to publish via HTTP API? | PASS |
| 10 | Bearer-token header? | PASS |
| 11 | Set an environment variable? | PASS |
| 12 | View build logs? | PASS |
| 13 | Connect a GitHub repository? | PASS |
| 14 | Create a team? | PASS |
| 15 | CLI exit code for auth failure? | PASS |
| 16 | MCP server URL + transport? | PASS |
| 17 | Run a cron on demand? | PASS |
| 18 | Open a SQL console? | PASS |
| 19 | Password-protect a path? | PASS |
| 20 | Webhook signature header + algorithm? | PASS |

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

## Running this again

- **Part 1** needs a human or an agent with browser access, the dev server
  running (`bun run dev`), and ~15–20 minutes. No automation exists for
  this yet — it's a manual QA script, not a CI check.
- **Part 2** needs `grep`/`Read` access to `generated/cli/index.md` and
  `generated/openapi/api.json`, cross-checked against whatever commands the
  content pages show. Also manual today. A future version of this could
  become a script (extract every fenced `sf ...` command from `content/**`,
  parse `generated/cli/index.md`'s own usage/example blocks, diff them) —
  out of scope for this pass, but the two real bugs found by hand suggest
  it would pay for itself.
