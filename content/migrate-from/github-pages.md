---
title: GitHub Pages
description: How to move a static site from GitHub Pages to Spacefast.
---

Migrate the files GitHub Pages served, not the whole repository. Find the published output, confirm it contains the final `index.html` and assets, then publish that directory to Spacefast. Every Spacefast plan includes unlimited spaces and unlimited bandwidth, so a space that outgrew Pages traffic or size guidelines does not need traffic planning here.

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
- If Pages builds Jekyll for you, run Jekyll yourself in CI or locally and publish `./_site`.

## Before switching DNS

- Open the generated directory and confirm it has `index.html` at the publish root. Pages can start from Markdown or `README.md`; Spacefast should receive generated HTML.
- Test asset paths. GitHub Pages project sites usually live under `/<repository-name>/`; a Spacefast custom domain usually serves from `/`. Update router base paths, canonical URLs, and absolute asset URLs to match the new URL.
- Preserve `404.html` in the publish root if the site uses a custom not-found page.
- Add a root `_redirects` file if a single-page app needs a fallback such as `/app/* /app/index.html 200`. Free includes 10 rewrites + redirects rules; Personal includes 1,000 and Work is unlimited.
- Recreate the custom domain in Spacefast, verify the version, then move DNS away from the GitHub Pages records. SSL is automatic, and every publish is an immutable version with one-click rollback, so the cutover is reversible.

## What carries over

- Generated static artifacts within the target space's file-size limit.
- Jekyll sites after they have been built into `_site`.
- Static output from other generators when the build artifact can run without Pages.
- Browser-rendered apps that do not need a request-time server.
- Custom `404.html` pages.

## What changes

- The GitHub Pages publishing source setting does not matter after migration. Spacefast serves the published directory.
- The `CNAME` file is only GitHub Pages configuration. Configure domains in Spacefast and remove or ignore the file for the new host.
- GitHub's automatic apex and `www` redirects do not transfer. Add explicit redirects in Spacefast if you want the same canonical domain behavior.
- GitHub Pages has no native `_redirects` or `_headers` files. If you used JavaScript, meta refresh tags, or an external CDN to fill that gap, replace the behavior with Spacefast routing and header files where possible. `_headers` Basic Auth is not available on Free; it is available on Personal and Work.
- Retire the Pages deploy workflow. The simplest replacement is to [connect the repo](/builds): Spacefast builds on every push, other branches get preview URLs, and pull requests get a preview comment and a status check. If you want to keep your GitHub Actions build, replace `actions/deploy-pages` with `sf publish`.

## Limitations

These parts of a GitHub Pages setup do not become part of the Spacefast space:

- Jekyll does not run on Spacefast. Markdown conversion, Liquid templates, Sass processing, themes, and plugins must run before publishing.
- GitHub Actions workflow state does not transfer. Build logs, Pages environments, Pages artifacts, and branch publishing settings stay in GitHub.
- Repository features do not transfer. Issues, pull requests, releases, wiki pages, README rendering, and repository permissions remain GitHub features.
- GitHub Pages custom-domain settings do not transfer. That includes `CNAME` configuration, GitHub-managed certificates, and GitHub's automatic apex-to-`www` redirect behavior.
- GitHub Pages MIME behavior is platform-managed. Test uncommon file extensions before cutover instead of assuming they will be served with the same content type.
- Check large downloadable files against the target space's file-size limit before moving production DNS.
- If the repository also contains backend code, that code was not running on GitHub Pages. Keep it hosted separately and publish only the static output.
