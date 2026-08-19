---
title: GitHub Pages
description: Move a static site from GitHub Pages to Spacefast.
---

Move the static site that GitHub Pages served. Spacefast can build Jekyll from
the repository, or publish an artifact that you already build elsewhere.

```bash
# If GitHub Pages built the site with Jekyll
bundle exec jekyll build
```

```bash
sf publish ./_site
```

## Find the publish directory

- If Pages publishes from a branch root, publish that root after any required
  build step.
- If Pages publishes from branch `/docs`, publish `./docs`.
- If Pages publishes from GitHub Actions, publish the same directory that
  workflow uploads with `actions/upload-pages-artifact`.
- If Pages builds Jekyll for you, connect the repository and let Spacefast
  detect Jekyll. Or build locally and publish `./_site`.

## Before switching DNS

- Open the generated directory and check that it has `index.html` at the
  publish root. Pages can start from Markdown or `README.md`; publish
  generated HTML to Spacefast.
- Test asset paths. GitHub Pages project sites serve under the repository path,
  such as `/your_repository_name/`; user and organization sites serve from the
  root. A Spacefast custom domain serves from `/`. Update router base paths,
  canonical URLs, and absolute asset URLs to match the new URL.
- If the site uses a custom not-found page, keep `404.html` in the publish
  root.
- Check large downloadable files against the target space's file-size limit
  before you move production DNS.
- If a single-page app needs a fallback such as `/app/* /app/index.html 200`,
  add a root `_redirects` file. Before you move a large ruleset, check the
  team's routing entitlement in the dashboard.
- Recreate the custom domain in Spacefast, open the test space URL, and confirm
  the new version serves. Then move DNS away from the GitHub Pages records. SSL
  is automatic, and the cutover is reversible.

## What carries over

- Generated static artifacts within the target space's file-size limit.
- Jekyll source projects that Spacefast can detect and build, or an `_site`
  directory built elsewhere.
- Static output from other generators when the build artifact can run without
  Pages.
- Browser-rendered apps that do not need a request-time server.
- Custom `404.html` pages.

## What to change

- The `CNAME` file is only GitHub Pages configuration. Configure domains in
  Spacefast. Remove or ignore the file for the new host.
- GitHub's automatic apex and `www` redirects do not transfer. If you want
  the same canonical domain behavior, add explicit redirects in Spacefast.
- GitHub Pages has no native `_redirects` or `_headers` files. If you used
  JavaScript, meta refresh tags, or an external CDN to fill that gap, replace
  that behavior. Use Spacefast routing and header files where possible.
  `_headers` Basic Auth is not supported; use
  [Spacefast sharing](/share) for protected content.
- Retire the Pages deploy workflow. The best replacement is to
  [connect the repository](/publish/git). Spacefast then builds on every
  push, with branch and PR previews. If you want to keep your GitHub Actions
  build, swap the deploy step:

```yaml
# Replace the actions/deploy-pages step with:
- run: sf publish ./_site
```

## What stays behind on GitHub

These parts of a GitHub Pages setup do not become part of the Spacefast space:

- Jekyll plugins that shell out to system tools or external services do not run
  on the remote builder. Run those plugins in your own CI, then publish the
  resulting `_site` directory.
- GitHub Actions workflow state (build logs, Pages environments and artifacts,
  and branch publishing settings) stays in GitHub.
- GitHub Pages picks content types for you. Spacefast may pick differently for
  uncommon extensions, so test them before cutover.
- If the repository also contains backend code, that code was not running on
  GitHub Pages. Keep it hosted separately. Publish only the static output.
