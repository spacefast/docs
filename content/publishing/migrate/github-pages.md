---
title: GitHub Pages
description: How to move a static site from GitHub Pages to Spacefast.
---

Move the static site GitHub Pages served. Spacefast can build Jekyll from the
repository or publish an artifact you already build elsewhere.

```bash
# If GitHub Pages built the site with Jekyll
bundle exec jekyll build
```

```bash
sf publish ./_site
```

## Find the publish directory

- If Pages publishes from a branch root, publish that root after any required build step.
- If Pages publishes from branch `/docs`, publish `./docs`.
- If Pages publishes from GitHub Actions, publish the same directory that workflow uploads with `actions/upload-pages-artifact`.
- If Pages builds Jekyll for you, connect the repository and let Spacefast
  detect Jekyll, or build locally and publish `./_site`.

## Before switching DNS

- Open the generated directory and confirm it has `index.html` at the publish root. Pages can start from Markdown or `README.md`; Spacefast should receive generated HTML.
- Test asset paths. GitHub Pages project sites usually live under `/<repository-name>/`; a Spacefast custom domain usually serves from `/`. Update router base paths, canonical URLs, and absolute asset URLs to match the new URL.
- Preserve `404.html` in the publish root if the site uses a custom not-found page.
- Add a root `_redirects` file if a single-page app needs a fallback such as
  `/app/* /app/index.html 200`. Check the team's [routing
  entitlement](/account/limits) before moving a large ruleset.
- Recreate the custom domain in Spacefast, verify the version, then move DNS away from the GitHub Pages records. SSL is automatic, and every publish is an immutable version with one-click rollback, so the cutover is reversible.

## What carries over

- Generated static artifacts within the target space's file-size limit.
- Jekyll source projects that Spacefast can detect and build, or an `_site`
  directory built elsewhere.
- Static output from other generators when the build artifact can run without Pages.
- Browser-rendered apps that do not need a request-time server.
- Custom `404.html` pages.

## What changes

- The GitHub Pages publishing source setting does not matter after migration. Spacefast serves the published directory.
- The `CNAME` file is only GitHub Pages configuration. Configure domains in Spacefast and remove or ignore the file for the new host.
- GitHub's automatic apex and `www` redirects do not transfer. Add explicit redirects in Spacefast if you want the same canonical domain behavior.
- GitHub Pages has no native `_redirects` or `_headers` files. If you used
  JavaScript, meta refresh tags, or an external CDN to fill that gap, replace
  the behavior with Spacefast routing and header files where possible. Check
  the team's entitlements before relying on Basic Auth.
- Retire the Pages deploy workflow. The simplest replacement is to [connect the repo](/publishing/git): Spacefast builds on every push, other branches get preview URLs, and pull requests get a preview comment and a status check. If you want to keep your GitHub Actions build, replace `actions/deploy-pages` with `sf publish`.

## Limitations

These parts of a GitHub Pages setup do not become part of the Spacefast space:

- Jekyll plugins that need services or operating-system tools unavailable in
  the remote builder must run in your own CI. Publish the resulting `_site`
  directory in that case.
- GitHub Actions workflow state does not transfer. Build logs, Pages environments, Pages artifacts, and branch publishing settings stay in GitHub.
- Repository features do not transfer. Issues, pull requests, releases, wiki pages, README rendering, and repository permissions remain GitHub features.
- GitHub Pages custom-domain settings do not transfer. That includes `CNAME` configuration, GitHub-managed certificates, and GitHub's automatic apex-to-`www` redirect behavior.
- GitHub Pages MIME behavior is platform-managed. Test uncommon file extensions before cutover instead of assuming they will be served with the same content type.
- Check large downloadable files against the target space's file-size limit before moving production DNS.
- If the repository also contains backend code, that code was not running on GitHub Pages. Keep it hosted separately and publish only the static output.
