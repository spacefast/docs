---
title: "@spacefast/domain-services"
description: "Release history for @spacefast/domain-services on npm."
---

Published as [`@spacefast/domain-services`](https://www.npmjs.com/package/@spacefast/domain-services) on npm.

## 0.8.0

#### Patch Changes

- Updated dependencies
  - @spacefast/common@0.8.0

## 0.7.0

#### Minor Changes

- The registrar client can quote DSAPI's raw registration fees for a batch of names (`quoteDomainFees`, `quoteDomainFee`), renew a domain (`renewDomain`), and read and acknowledge reseller events (`enumerateEvents`, `acknowledgeEvent`, `dsapiEventKey`). A registration the pre-register check refuses (name taken, premium, fee changed) now throws a `refused` `DsapiError` before anything is sent, and DSAPI's 554 and 599 Register refusals classify as `refused`, 541 as `invalid`.
- The registrar client can now set a registered domain's nameservers (`setNameservers`), validating the list before anything is sent. Every registrar failure is now a typed `DsapiError` with the registrar's own reason and a `kind` such as `invalid`, `refused`, `unauthorized` or `transport`.
- New `@spacefast/domain-services/powerdns` export: a typed client for the PowerDNS Authoritative 4.9 HTTP API that reads, creates and deletes zones and applies rrset changes in one atomic PATCH. Every failure is a `PowerDnsError` with a `kind` such as `invalid`, `too_large`, `conflict`, `unauthorized` or `transport`, and never carries the API key or the PowerDNS address.
- `registerDomain` now delegates the name at registration. `DomainRegistrationInput` takes optional `nameservers` (2 to 12 distinct hostnames, normalized like `setNameservers` input). When it is omitted, `Domain\Register` sends `defaultRegistrationNameservers` (`ns1.spacefast.com`, `ns2.spacefast.com`). Invalid nameservers throw `DsapiError` kind `invalid` before any request is sent.
- The registrar client now reaches DSAPI through WP Cloud domain services. Breaking: `DomainServicesCredentials` takes a WP Cloud `clientName` and API token instead of a reseller `user` and key, and the default endpoint is `https://atomic-api.wordpress.com/api/v1.0/domain-services/<clientName>`. Requests are form bodies with JSON-string `params` and an `auth` header, and responses are read from WP Cloud's `{ message, data }` wrapper. Commands reach the OTE registry unless the client is created with `live: true`. WP Cloud's own HTTP errors classify as `unauthorized` (401/403), `invalid` (400) or `server_failed` (5xx).

#### Patch Changes

- The DSAPI client adds `bulkCheck(names)`, which checks up to 50 names per call with DSAPI's zone-file `Domain\Bulk_Check`. It never falls back to RDAP or the live `Domain\Check`. Premium names keep their real availability but are never purchasable, and registration refuses them. `checkDomains` is unchanged.
- The PowerDNS client confirms a missing zone by listing zones filtered to that name instead of reading the server, so it works with an API key scoped to zone endpoints. Such a key is refused the server itself with a 403, which made every first publish of a zone fail.
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
  - @spacefast/common@0.6.0

## 0.5.1

#### Patch Changes

- @spacefast/common@0.5.1

## 0.5.0

#### Patch Changes

- Updated dependencies
  - @spacefast/common@0.5.0
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.5.0

## 0.4.1

#### Patch Changes

- Updated dependencies
  - @spacefast/common@0.4.1

## 0.4.0

#### Patch Changes

- @spacefast/common@0.4.0

## 0.3.0

#### Patch Changes

- @spacefast/common@0.3.0

## 0.2.2

#### Patch Changes

- @spacefast/common@0.2.2

## 0.2.1

#### Patch Changes

- @spacefast/common@0.2.1

## 0.2.0

#### Patch Changes

- Updated dependencies
  - @spacefast/common@0.2.0

## 0.1.0

#### Patch Changes

- Updated dependencies
  - @spacefast/common@0.1.0

## 0.0.27

#### Patch Changes

- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.0.27

## 0.0.26

#### Patch Changes

- @spacefast/common@0.0.26

## 0.0.25

#### Patch Changes

- @spacefast/common@0.0.25

## 0.0.24

#### Patch Changes

- @spacefast/common@0.0.24

## 0.0.23

#### Patch Changes

- @spacefast/common@0.0.23

## 0.0.22

#### Patch Changes

- @spacefast/common@0.0.22

## 0.0.21

#### Patch Changes

- @spacefast/common@0.0.21

## 0.0.20

#### Patch Changes

- @spacefast/common@0.0.20

## 0.0.19

#### Patch Changes

- @spacefast/common@0.0.19

## 0.0.18

#### Patch Changes

- Give the clean release declaration build enough heap to complete before npm publication.
- Updated dependencies
  - @spacefast/common@0.0.18

## 0.0.17

#### Patch Changes

- @spacefast/common@0.0.17

## 0.0.16

#### Patch Changes

- @spacefast/common@0.0.16

## 0.0.15

#### Patch Changes

- @spacefast/common@0.0.15

## 0.0.14

#### Patch Changes

- Updated dependencies
- Updated dependencies
  - @spacefast/common@0.0.14

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
