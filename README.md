# Citizens' Track on AI Governance

This is the website for Citizens' Track on AI Governance, deployed at [https://www.citizens-track.org](https://www.citizens-track.org).

---

## 🛠️ Helper Scripts & Utilities

The [`helper_scripts/`](file:///Users/admin/Documents/ConnectedByData/CitizensTrack/citizens-track/helper_scripts/) directory contains automation tools for managing content, assets, and promotions.

### 🖼️ Embedded Image Extractor (`helper_scripts/extract_embedded_images.py`)

When drafting posts in Google Docs or Word and exporting to markdown, images are often embedded as raw base64 data URIs. This script extracts those embedded images into standalone files in `assets/posts/` and updates the markdown links in-place.

#### Features
- **Broad Syntax Support**: Works with reference-style links (`[image1]: <data:...>`), inline markdown (`![alt](data:...)`), and HTML `<img>` tags.
- **Smart Naming & Routing**: Automatically extracts PNG, JPEG, GIF, WebP, and SVG files, prefixing them with the post date/slug (e.g. `2026-10-05-image1.png`) and saving them into `assets/posts/`.
- **In-place Markdown Optimization**: Replaces the data URIs with `/assets/posts/...` URLs, dramatically shrinking markdown file sizes.
- **Zero Dependencies**: Runs with standard Python 3.

#### Quick Usage

```bash
# Extract images from a specific post and update markdown in-place
python3 helper_scripts/extract_embedded_images.py _posts/2026-10-05-mobilising-resources-for-democratic-ai.md

# Preview extraction without modifying files (Dry Run)
python3 helper_scripts/extract_embedded_images.py _posts/2026-10-05-post.md --dry-run

# Create a .bak backup before modifying the markdown file
python3 helper_scripts/extract_embedded_images.py _posts/2026-10-05-post.md --backup

# Custom output directory, web URL prefix, and filename prefix
python3 helper_scripts/extract_embedded_images.py _events/sample.md -o img/events -w /img/events -p unga-

# Scan the entire repository for markdown files with embedded images
python3 helper_scripts/extract_embedded_images.py --list
```

---

### Other Helper Scripts
- **🚀 Event Promotion Generator**: [`helper_scripts/promote_events.py`](file:///Users/admin/Documents/ConnectedByData/CitizensTrack/citizens-track/helper_scripts/promote_events.py) generates tailored LinkedIn and Bluesky promotional copy from event files.
- **🤝 Supporter Sync**: [`helper_scripts/sync_supporters.py`](file:///Users/admin/Documents/ConnectedByData/CitizensTrack/citizens-track/helper_scripts/sync_supporters.py) syncs logos and partner information from Google Sheets into `_data/partners.yml`.

See [`helper_scripts/README.md`](file:///Users/admin/Documents/ConnectedByData/CitizensTrack/citizens-track/helper_scripts/README.md) for full details on all helper utilities.