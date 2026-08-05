---
title: Jekyll
description: Build and publish a Jekyll site from Git or the Spacefast CLI.
---

Connect the repository and let Spacefast build the site, or build locally and
publish `_site`. Detection recognizes Jekyll from `_config.yml`,
`_config.yaml`, or `_config.toml` and publishes `_site` by default.

## Publish from Git

[Connect the repository](/publishing/git), then check these settings:

| Setting          | Default                    |
| ---------------- | -------------------------- |
| Install          | `bundle install`           |
| Build            | `bundle exec jekyll build` |
| Output directory | `_site`                    |
| Environment      | `JEKYLL_ENV=production`    |

If `_config.yml` changes Jekyll's `destination`, set the Spacefast output
directory to the same path.

## Check the detected build

Once the space has a repository connection:

```bash
sf builds detect --space docs
```

Check the detected install command, build command, and output directory before
you save them. If the Jekyll project lives below the repository root, pass its
directory explicitly:

```bash
sf builds detect --space docs --root-directory docs
```

## Publish from your computer

You can send the source to the remote builder without connecting a repository:

```bash
sf publish --remote
```

Or build locally and publish only the generated site:

```bash
bundle exec jekyll build
```

```bash
sf publish _site
```

## GitHub Pages sites

Spacefast runs Jekyll itself, so you can keep the source repository instead of
committing `_site`. Follow the [GitHub Pages migration guide](/publishing/migrate/github-pages)
for domain and repository-cutover details.
