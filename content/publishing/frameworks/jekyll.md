---
title: Jekyll
description: Build and publish a Jekyll site from Git or the Spacefast CLI.
---

Spacefast detects Jekyll projects from `_config.yml`, `_config.yaml`, or
`_config.toml`. The default published directory is `_site`.

## Check the detected build

From the repository root:

```bash
sf builds detect
```

Check the detected install command, build command, and output directory before
you save them. If the Jekyll project lives below the repository root, pass its
directory explicitly:

```bash
sf builds detect --root-directory docs
```

## Publish from Git

[Connect the repository](/publishing/git), then check these settings:

| Setting          | Default                    |
| ---------------- | -------------------------- |
| Install          | `bundle install`           |
| Build            | `bundle exec jekyll build` |
| Output directory | `_site`                    |
| Environment      | `JEKYLL_ENV=production`    |

Spacefast keeps bundled gems in its build cache. If the project has no bundle,
the builder installs Jekyll in an isolated gem directory before building.

If `_config.yml` changes Jekyll's `destination`, set the Spacefast output
directory to the same path.

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
