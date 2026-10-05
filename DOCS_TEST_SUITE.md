# Docs regression tests

Run the executable suite after building the site:

```bash
bun run build
bun run test:docs
```

CI runs `test:docs` after the production build. It uses Bun's test runner and exits nonzero on a failed assertion. The experience checks read the built Markdown in `dist/`, so a passing source edit alone cannot satisfy them. Existing unit tests for the docs corpus, LLM index, and composed-site audit run in the same command.

## Reader-facing contracts

`scripts/docs-experience.test.mjs` checks that:

- Authored pages open with a subject or action instead of the repeated “After this page…” promise.
- The homepage and Quickstart offer dashboard Drop before CLI installation, and the linked Publishing page describes the Drop flow.
- The homepage links to a glossary that defines its recurring product terms.
- Database explains how to enable Zero before it teaches queries.
- Troubleshooting gives readers a first diagnostic step before listing error codes.
- The opening paragraphs on Versions, Crons, Environment variables, Access, Caching, and Traffic stats answer specific reader questions. Each test names the question and the evidence expected near the top of the built page.

These are regression contracts for the changed entry paths and first-screen explanations. They make a future edit fail if it hides those answers again. They do not grade tone, prove that shorter text is clearer, or measure whether a person can complete a real task. Those claims need editorial review and reader testing.

## Other gates

The CI build also runs `verify:generated`, command-example verification, type checking, strict link validation, the composed-site audit, public-safety verification, Vale, and route verification. The existing `evals.yaml` asks an agent factual-retrieval questions from the built docs; it is a separate evaluation and is not part of `test:docs`.

Known content gaps remain documented in the [point-in-time QA comparison](DOCS_QA_COMPARISON.md): no confirmed support channel and conflicting API-key preset guidance. That comparison records manual observations, not test-suite results. The [writing audit](DOCS_WRITING_QA.md) records before/after editorial signals and its limits.
