---
title: Limits
description: Operational limits for Spacefast plans, publishes, storage, domains, and version history.
---

Limits combine plan entitlements and runtime safety limits. Current public plans are Free ($0), Personal ($5/month), and Work ($15/month). Every plan includes unlimited spaces and unlimited bandwidth.

| Limit                            | Free                         | Personal      | Work          |
| -------------------------------- | ---------------------------- | ------------- | ------------- |
| Price                            | $0                           | $5/month      | $15/month     |
| Spaces                           | Unlimited                    | Unlimited     | Unlimited     |
| Bandwidth                        | Unlimited                    | Unlimited     | Unlimited     |
| Storage included                 | 5 GB                         | 20 GB         | 50 GB         |
| Team members                     | 3 included                   | 5 included    | 15 included   |
| External domains                 | 3                            | 10            | Unlimited     |
| Domains bought through Spacefast | Never count                  | Never count   | Never count   |
| Public immutable versions        | Last 7 days                  | Always public | Always public |
| Publishes & builds (pooled)      | 100/month                    | 1,000/month   | Unlimited     |
| Max file size                    | 50 MB                        | 1 GB          | Unlimited     |
| Routing rules (combined)         | 10                           | 1,000         | Unlimited     |
| `_headers` Basic Auth            | No                           | Yes           | Yes           |
| External proxy routes            | Not executed (platform page) | Yes           | Yes           |
| Audit & build/access logs        | 48 hours                     | 1 month       | Unlimited     |

Add-ons:

The combined routing-rule quota counts redirects, rewrites, response-header
blocks, Basic Auth blocks, and proxy routes.

| Add-on          | Availability                          | Price                         |
| --------------- | ------------------------------------- | ----------------------------- |
| Extra team seat | Personal and Work (5 / 15 included)   | $1 per extra seat/month       |
| Extra storage   | Personal and Work, up to 200 GB total | $3 per additional 10 GB/month |

## How the numbers work

- A registered domain counts once, including all of its subdomains: `example.com`, `www.example.com`, and `docs.example.com` are one external domain. Domains bought through Spacefast never count against the limit.
- Storage counts committed file bytes across versions. Hitting the quota blocks new publishes but never takes the live site down; free up room by deleting old versions or adding storage.
- Publishes and builds are one pooled monthly allowance: CLI pushes, the GitHub Action, and CI builds all draw from the same pool.
- File-size limits fail uploads as early as possible. Server-executable files are never executed.

## Anonymous spaces

Anonymous spaces are capped at most at Free on every axis: 50 MB max file size, 100 MB total per version, 1,000 files per version, 20 publishes per hour per IP. Uploads are accepted and scanned like any publish, but until the space is claimed only web content is served — HTML, CSS, JavaScript, JSON, XML, images, fonts, text. Other files stay dark until you claim. Around 100 visits pauses an unclaimed space behind a claim page; claiming brings it back instantly. External proxy routes, `_headers` Basic Auth, and custom domains are not available. Claim within 6 hours or the space expires. See [Anonymous publish](/anonymous-publish).

## Runtime safety limits

- `_redirects` and `_headers` compile into one runtime routing policy.
- Plan routing limits count redirects, rewrites, headers, auth blocks, and proxy routes together.
- Free allows internal redirects, rewrites, and response headers within its total rule limit, but not `_headers` Basic Auth or external proxy execution.
- External proxy routes are declared as external `200` rules in `_redirects`. On Free they do not execute; visitors see a platform page instead.
- Files mode cannot enable SPA fallback.
- SPA mode requires a root `index.html`.
