---
title: Versioning and deprecation
sidebar:
  label: Versioning
description: How Spacefast versions the REST API, which changes ship inside /v1, and the headers that warn you before an operation goes away.
---

The API is versioned in the URL path. Every operation lives under `/v1`:

```http
GET https://api.spacefast.com/v1/spaces
```

That is the whole mechanism. There is no version header, no date-based
pinning, and no `Accept` negotiation. The path you call is the contract you
get.

## What ships inside `/v1`

Additive changes land in `/v1` without a version bump:

- new endpoints
- new optional request fields
- new response fields

So write clients that ignore response fields they do not recognize. A new
field showing up in a payload is not a breaking change, and a client that
rejects unknown keys will break on a release that broke nothing.

Breaking changes never land quietly in `/v1`. They get a new path version.

## Deprecation headers

An operation on its way out says so on **every** response it makes,
including `204`s and non-JSON bodies:

```http
Deprecation: @1799971200
Sunset: Thu, 15 Jul 2027 00:00:00 GMT
Link: <https://spacefast.com/docs/api/versioning>; rel="deprecation"; type="text/html"
```

`Deprecation` is [RFC 9745](https://www.rfc-editor.org/rfc/rfc9745.html): a
structured-field Date, written as an `@` followed by a Unix timestamp in
seconds. The example above is 15 January 2027, the moment that operation was
marked deprecated.

`Sunset` is [RFC 8594](https://www.rfc-editor.org/rfc/rfc8594.html), an
HTTP-date, and it appears only once a removal date is committed to. A
deprecated operation without a removal date yet sends `Deprecation` alone.

`Link` points back at this page.

A `Sunset` is never sent without a `Deprecation`. Nothing gets removed that
callers were not warned about first.

The same operation is marked `deprecated: true` in the
[REST API reference](/api/reference). The headers and the OpenAPI document
are generated from one declaration, so the spec and the wire cannot
disagree.

## The timeline

This is a promise, not a guideline:

- Once an operation is marked deprecated, it keeps working for at least
  **six months** before any sunset date.
- The sunset date is announced in the [changelog](/changelog) and appears in
  the headers at the same time.
- Deprecations are listed in the changelog.

Nothing is deprecated today. The list is empty, which is a fact about the
API rather than a gap in this page.

## How to notice

Log or alert on the `Deprecation` response header in your client. It is one
line, and it turns a removal you would otherwise read about into something
your own logs tell you months ahead.

The [SDK](/reference/sdk) hands you the response headers on every result, so
the warning is already in reach of code you have written.

If an agent makes the calls, have it surface the header instead of
swallowing it. An agent that drops response headers is the one caller that
cannot warn you that an endpoint it depends on is going away.
