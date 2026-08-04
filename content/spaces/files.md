---
title: Browse and compare files
description: Inspect, preview, download, and compare the files in any published version.
---

Every version is a fixed snapshot. The file browser lets you inspect that
snapshot without downloading the whole site.

## Browse a version

Open a space. Choose a version. Open its files. You can then:

- move through folders with breadcrumbs;
- switch between a grid and a list;
- search and filter paths;
- preview supported files;
- copy a private file or raw-file URL;
- download selected files as a ZIP.

Private URLs use your current access and may expire. Do not treat them as
permanent public links.

## Compare versions

Choose another version to compare with the one you are viewing. Spacefast shows
the added, changed, and removed paths. For text files, open the diff to inspect
the changed lines.

This is useful before [moving the live site](/publishing/channels) or when you
need to understand what a publish changed.

## Download from the CLI

Download a complete version when you need a local copy:

```bash
sf versions download --space my-space
```

See the [CLI reference](/cli#sf-versions-download) for version selection and
output options.
