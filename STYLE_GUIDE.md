# Spacefast docs style guide

This is the human-readable version of the rules `bun run verify:prose`
enforces by machine, via [Vale](https://vale.sh) and the 20 rule files in
`styles/Spacefast/`. If you're writing or editing a page and want to know
*why* something got flagged, or just want to write it right the first time,
start here. The Vale files are the source of truth for exact patterns; this
document explains the reasoning and gives the full picture in one place.

## Where this comes from

Spacefast didn't have a documentation style guide — it had Vale rules and a
few bullets in `AGENTS.md`, but nothing a person could read start to finish.
This guide fills that gap. The concision principle below is adapted from
WooCommerce's (Automattic-owned) developer documentation guides:

- [Technical Documentation Style Guide](https://developer.woocommerce.com/docs/contribution/contributing-docs/style-guide/)
- [Grammar, Punctuation, and Capitalization guide](https://developer.woocommerce.com/docs/best-practices/coding-standards/grammar-punctuation-capitalization/)

One deliberate deviation: WooCommerce's guide writes in 3rd-person/imperative
voice ("Add an embed block to your page"). Spacefast's docs are 2nd-person
("you") throughout, and that doesn't change here — only the concision and
mechanical rules are adopted, not the voice.

## Voice

Direct, no-BS, and a little playful. Second person — "you," not "the user"
or "one." Prefer the best path over an encyclopedia of alternatives: one
good way to do a thing beats three options with trade-off tables, unless the
trade-off is the point.

## Be concise, lead with importance

This is the rule behind the biggest cleanup pass this corpus has had: state
the key fact first, in the sentence, the paragraph, and the page. Don't
make a reader walk through three subordinate clauses to find the one thing
that matters.

In practice:

- **One idea per sentence, where reasonable.** A sentence chaining three or
  more unrelated clauses ("...which X, when Y, how Z, and where W...") is a
  sign to split it or cut the least important clause, not a sign you've
  covered the topic thoroughly. The page's own headings carry the rest —
  an opening sentence or a summary line doesn't need to be a table of
  contents.
- **`styles/Spacefast/SentenceLength.yml` flags sentences over 30 words**,
  at suggestion level — it doesn't block CI. Treat it as a floor, not the
  definition of "wordy." A 22-word sentence that chains four clauses is
  still a problem this rule won't catch; use judgment, not just the word
  count.
- **Cut filler and hedging.** If a sentence works with a phrase removed,
  remove it.

Worked example, from the page-opener cleanup:

> Before: "After this page you know which directory your framework
> produces, when to publish that directory yourself versus letting
> Spacefast build, how detection picks commands, and where to read a
> failing build." (33 words, 4 clauses)
>
> After: "After this page you know whether to publish your own build
> output or let Spacefast build it — and where to look when a build
> fails." (25 words, 2 ideas joined by an em dash)

Another:

> Before: "After this page you can mint an API key with the right
> permissions, use it against the API, rotate it without downtime, and
> recognize every other credential Spacefast hands you by its prefix." (29
> words, 4 clauses)
>
> After: "After this page you can mint a scoped API key and rotate it
> without downtime." (14 words — the credential-prefix table further down
> the page already covers the dropped clause.)

## Don't template the opening sentence

The example above still has a problem, caught in a later pass: "After this
page you can/know X" and "By the end of this page you have Y" are
templates — the same framing device, repeated verbatim as the literal first
move on every page. That's a recognizable AI-writing tell, not a style
choice: it's the generic "learning objectives" scaffold a model defaults to
when it has to open a doc page without judging what's actually most
interesting about *that* page. A human varies the opening move page to
page. No Vale rule catches this — `AISpeak.yml` bans specific filler words,
not repeated sentence-level structures, so a templated opener can pass
every mechanical check and still read as generic.

Open with the fact itself, not a sentence announcing that a fact is coming:

> Templated: "After this page you can mint a scoped API key and rotate it
> without downtime."
>
> Direct: "You can mint a scoped API key with exactly the permissions it
> needs, then rotate it without downtime."

> Templated: "After this page you know whether to publish your own build
> output or let Spacefast build it."
>
> Direct: "Publish your own build output directly, or hand Spacefast the
> source and let it build — the logs tell you which one went wrong if it
> fails."

Vary the construction — "you can," the mechanism stated as fact, a gerund
opener ("Attaching a custom domain is..."), whatever fits that page — and
don't let the opener become a word-for-word echo of the page's frontmatter
`description` either; say the same thing in different words, or pick a
different angle entirely.

## Banned words and phrases

Vale errors on these. They're not style preferences — they're specific,
named failure modes.

**Hype** (`Hype.yml`) — say what the thing does instead: seamless(ly),
delve, robust, cutting-edge, state-of-the-art, best-in-class, world-class,
game-changing/changer, revolutionize, supercharged, effortless(ly),
hassle-free, empowers, streamlines, blazing(ly) fast, tapestry, symphony, "a
beacon of," "a testament to," transformative, groundbreaking, pivotal,
multifaceted, holistic, "shed light on," "paves the way for," "at its
core," "in essence," "that being said," "in today's."

**Condescension** (`Condescension.yml`) — assumes it's easy for the reader;
the instruction works without it: simply, easily, "just click," "just run,"
obviously, "of course."

**Weasel words** (`WeaselWords.yml`) — hedges instead of committing: "helps
ensure," "may be able to," "can potentially," "could potentially." Commit
to what the thing does, or state the real condition.

**Intensifiers** (`Intensifiers.yml`) — intensity without information. Show
the number or cut it: extremely, dramatically, exceptionally, incredibly,
remarkably, truly, undoubtedly, significantly.

**AI-speak** (`AISpeak.yml`) — corporate filler: "leverage" → use,
"utilize" → use, "facilitate" → help, "in order to" → to,
"furthermore"/"moreover" → also. Strip "it is important to note that" and
"please note that" entirely — they add nothing.

## Tighten these phrases

`Wordiness.yml` swaps wordy constructions for plain ones:

| Instead of | Use |
|---|---|
| due to the fact that | because |
| in the event that | if |
| at this point in time | now |
| has/have the ability to | can |
| is/are able to | can |
| in a timely manner | promptly |
| a number of | several |
| the majority of | most |
| on a regular basis | regularly |
| make use of | use |
| in the process of | *(cut it)* |
| a wide range of | many |
| a variety of | many |

`PhrasalVerbs.yml` — the verb is two words, the noun is one: "login to" →
log in to, "logout of" → log out of, "setup a/the/your" → set up a/the/your,
"backup your" → back up your, "sign into" → sign in to.

`LatinAbbreviations.yml` — spell it out: "e.g." → for example, "i.e." →
that is.

## Brand and vocabulary

- **GitHub, JavaScript, TypeScript, npm, Node.js, macOS, OpenAPI, email,
  website** — exact casing, every time (`Branding.yml`).
- **Spacefast** is capitalized in prose. Identifiers stay lowercase and get
  backticked: `@spacefast/sdk`, `/spacefast`, `spacefast.com`
  (`ProductName.yml`).
- **WP Cloud** — exact casing, never "wp cloud," "wp.cloud," or hyphenated
  (`WpCloudBrand.yml`). Prefer "infra" generally; name WP Cloud only when
  the external reference is genuinely necessary. Never say "the hosting
  provider" for Spacefast's own infra (`HostingProvider.yml`) — generic
  references to *other* hosting providers are fine.
- **"API key," never "access token"** (`ApiKey.yml`) — "OAuth access
  token" is the one exempted phrase, since that's the protocol's own term.

## What never appears in public copy

This repo is public, including its history. Two rule files exist
specifically to keep internal infrastructure and vendor names out of it
(`Internals.yml`, `Providers.yml`):

- Internal infra names: batcache, PlanetScale, pgbouncer, nginx, Caddy,
  "web server," "runtime engine," "monorepo," local filesystem paths
  (`/Users/...`, `/home/...`). Say "CDN," "edge," or name the user-facing
  behavior instead.
- Internal vendor names: E2B, Pierre, `code.storage`. Say "Spacefast
  Builds," "Spacefast CI," or "infra" instead.

If you're not sure whether a name is safe to publish, assume it isn't and
ask — `bun run verify:public-safety` catches a lot of this mechanically,
but not everything.

## Mechanics

- **Oxford comma** — use it. Advisory only (`OxfordComma.yml`); the
  checker can't tell a serial list from a compound verb phrase, so it never
  blocks, but the house style is it belongs there.
- **Link text names the destination.** Never "[click here]" or "[this]" —
  Vale errors on both (`LinkText.yml`).
- **Unknown technical words** go in `styles/Spacefast/spelling-exceptions.txt`
  (sorted, case matters for proper nouns) rather than getting flagged as
  typos.
- **Identifiers in prose** — commands, enum values, claim names, package
  names — get backticks, not prose styling. Vale skips code spans, so this
  also sidesteps most false-positive spelling/casing alerts.

## What this guide doesn't cover

The changelog (`content/changelog/**`) is a historical record — only
public-safety and brand-casing rules apply there; shipped release notes
keep their original wording. Generated reference content
(`generated/openapi/**`, `generated/errors/**`, `generated/cli/**`, etc.) is
producer-owned and fixed at its source in the product monorepo, not edited
here — but its prose (OpenAPI `summary`/`description` fields) is still
linted by the same Vale rules.

## Before you open a PR

```bash
bun run verify:prose
```

Zero alerts is the bar. See `AGENTS.md` for the full verification chain.
