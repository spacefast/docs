# Authored-docs writing audit

The manual click-path and command comparisons in [DOCS_QA_COMPARISON.md](DOCS_QA_COMPARISON.md) measure answer findability and factual accuracy. Neither measures whether the authored prose is better. This point-in-time audit checks the writing changes against `main` as of October 5, 2026. Repeatable checks for the current docs are in [DOCS_TEST_SUITE.md](DOCS_TEST_SUITE.md).

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

These rows are illustrative checks of what the opening now tells a reader, not an independent six-question success rate. The underlying facts and the full procedures remain on the pages.

For example, Versions opened with “After this page you know what a version holds, how it reaches `ready`, how the `live` pointer moves, and how to roll back to any earlier version in seconds.” It now opens with “A rollback doesn't rebuild anything — it just repoints `live` at a version that already exists, which is why it takes seconds, not minutes.” The new sentence answers the likely rollback question; the page still explains version states below it.

## Review findings and limits

The manual review caught five candidate leads that were shorter but spent the first sentence on a less useful detail: slug validation on Spaces, polling mechanics on Logs, archive flags on Frameworks and builds, CLI naming on Publish from Git, and remote WP-CLI output on WordPress. Each now leads with the page's main task or mental model. The removed detail was checked elsewhere on the same page and retained or moved into the body.

This audit establishes changes in structure and in which facts appear first. It does not show that real readers complete tasks faster or understand the docs better. That requires reader testing. Vale still reports the two existing spelling alerts (`GETs` and `TTYs`); its rules do not detect repeated sentence structures or judge whether a page leads with the right fact.
