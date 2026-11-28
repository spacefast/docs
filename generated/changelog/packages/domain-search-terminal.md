---
title: "@spacefast/domain-search-terminal"
description: "Release history for @spacefast/domain-search-terminal on npm."
---

Published as [`@spacefast/domain-search-terminal`](https://www.npmjs.com/package/@spacefast/domain-search-terminal) on npm.

## 0.10.0

#### Minor Changes

- The SSH domain search terminal runs on OpenTUI 0.8.4 and can draw with OpenTUI's own renderer: pass `renderer: "remote"` to `createDomainSearchSshSession`. A paste then arrives as text, and OpenTUI restores the visitor's terminal itself. `destroy()` now returns a promise that settles once the terminal is restored and `end` was called, so wait for it before you close the channel. Sessions add no listeners to the process, on either renderer.

  In the terminal itself: the command palette stays where the wheel left it, help and WHOIS keep their key hints in the border, WHOIS shows two more rows on a short terminal, a new query starts from its first result, and a terminal that grew fills with results at once.

#### Patch Changes

- Domain purchases and renewals now charge the team's saved card instead of opening a payment page. `sf domains registration purchase --expect-total` charges right away when you have purchasing power; without it you get the exact `sf purchases confirm` command or a dashboard link to hand to a person. New: `sf purchases inspect|confirm|cancel` and `sf billing card`.

  CLIs before 0.9.0 keep working: the server holds their purchases for a person to confirm and returns the pay link they expect, so nothing is charged from their `--expect-total`.

  The saved-card migration (`team_payment_method`) runs after the row-retention and internal-subscription migrations, preserving historical purchase receipts and soft-deleted rows.

  Saved-card confirmations carry the displayed card's identity. A changed default requires renewed confirmation, and interrupted charges retain the selected card.

  Domain Checkout sessions opened by the preceding release still settle or release their held names during rollout; their paid lines remain refundable. Purchase receipts show saved-card details only to callers with billing access. Changing a card after a failed purchase returns to billing instead of a purchase that cannot be retried.

  SDK callers: the `checkout` object on purchase and renewal responses is now optional and `checkoutUnavailable` is gone; read `purchase.confirmUrl`, which is null when nothing needs confirming. `includeCheckout` is still accepted on registration reads and ignored. The team billing response no longer has the top-level `stripeCustomerId` and `subscription` fields.

  Auto-renew and operator guidance share the notice window and refunded-term eligibility. An expiring domain that cannot be charged automatically names the customer as the next actor.

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

## Unreleased

#### Patch Changes

- Buy domains over SSH with a saved or typed card, shared registrant validation, bank authentication, and browser fallbacks that retain uncertain payments.
- Render SSH sessions with OpenTUI by default and restore the visitor's terminal before closing the connection.
- Keep SSH sign-in notices aligned with the current key lifetime: seven days unused, thirty days at most.
- Keep SSH checkout and bank confirmation compatible with the current billing and domain-lock services.
- Bind saved-card confirmation to the displayed card and retain it through interrupted checkout recovery. If the card changes while creating a purchase, return its confirmation link instead of hiding the held purchase.

## 0.9.0

#### Patch Changes

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

## 0.8.1

#### Patch Changes

- @spacefast/common@0.8.1

## 0.8.0

#### Patch Changes

- Updated dependencies
  - @spacefast/common@0.8.0

## 0.7.0

#### Patch Changes

- `DomainResearchClient.availability(domain)` now runs a live single-name registry check through `GET /availability`, and `DomainSearchSession.check()` uses it for carts and checkout. Search results hide premium names and names on TLDs Spacefast doesn't sell.
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.7.0

## 0.6.1

#### Patch Changes

- Updated dependencies
  - @spacefast/common@0.6.1

## 0.6.0

#### Patch Changes

- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.6.0
  - @spacefast/sdk@0.6.0

## 0.5.1

#### Patch Changes

- Updated dependencies
  - @spacefast/sdk@0.5.1
  - @spacefast/common@0.5.1

## 0.5.0

#### Patch Changes

- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.5.0
  - @spacefast/sdk@0.5.0
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.5.0
  - @spacefast/sdk@0.5.0

## 0.4.1

#### Patch Changes

- Updated dependencies
  - @spacefast/common@0.4.1
  - @spacefast/sdk@0.4.1

## 0.4.0

#### Patch Changes

- @spacefast/common@0.4.0
  - @spacefast/sdk@0.4.0

## 0.3.0

#### Patch Changes

- Updated dependencies
  - @spacefast/sdk@0.3.0
  - @spacefast/common@0.3.0

## 0.2.2

#### Patch Changes

- @spacefast/common@0.2.2
  - @spacefast/sdk@0.2.2

## 0.2.1

#### Patch Changes

- Updated dependencies
- Updated dependencies
  - @spacefast/sdk@0.2.1
  - @spacefast/common@0.2.1

## 0.2.0

#### Patch Changes

- Updated dependencies
  - @spacefast/common@0.2.0
  - @spacefast/sdk@0.2.0

## 0.1.0

#### Patch Changes

- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.1.0
  - @spacefast/sdk@0.1.0

## 0.0.27

#### Patch Changes

- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.0.27
  - @spacefast/sdk@0.0.27

## 0.0.26

#### Patch Changes

- @spacefast/common@0.0.26
- @spacefast/sdk@0.0.26

## 0.0.25

#### Patch Changes

- Updated dependencies
  - @spacefast/sdk@0.0.25
  - @spacefast/common@0.0.25

## 0.0.24

#### Patch Changes

- @spacefast/common@0.0.24
- @spacefast/sdk@0.0.24

## 0.0.23

#### Patch Changes

- @spacefast/common@0.0.23
- @spacefast/sdk@0.0.23

## 0.0.22

#### Patch Changes

- @spacefast/common@0.0.22
- @spacefast/sdk@0.0.22

## 0.0.21

#### Patch Changes

- @spacefast/common@0.0.21
- @spacefast/sdk@0.0.21

## 0.0.20

#### Patch Changes

- @spacefast/common@0.0.20
- @spacefast/sdk@0.0.20

## 0.0.19

#### Patch Changes

- @spacefast/common@0.0.19
- @spacefast/sdk@0.0.19

## 0.0.18

#### Patch Changes

- Give the clean release declaration build enough heap to complete before npm publication.
- Updated dependencies
  - @spacefast/common@0.0.18
  - @spacefast/sdk@0.0.18

## 0.0.17

#### Patch Changes

- @spacefast/common@0.0.17
- @spacefast/sdk@0.0.17

## 0.0.16

#### Patch Changes

- @spacefast/common@0.0.16
- @spacefast/sdk@0.0.16

## 0.0.15

#### Patch Changes

- @spacefast/common@0.0.15
- @spacefast/sdk@0.0.15

## 0.0.14

#### Patch Changes

- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.0.14
  - @spacefast/sdk@0.0.14

## 0.0.13

- Various bug fixes and improvements.

## 0.0.12

- Various bug fixes and improvements.

## 0.0.11

- Various bug fixes and improvements.

## 0.0.10

- Various bug fixes and improvements.

## 0.0.9

- Various bug fixes and improvements.

## 0.0.8

- Various bug fixes and improvements.

## 0.0.7

- Various bug fixes and improvements.

## 0.0.6

- Various bug fixes and improvements.
