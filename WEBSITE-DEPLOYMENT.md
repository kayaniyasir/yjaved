# Website deployment and release guide

Repository: `kayaniyasir/yjaved`

- Current original site: `source` branch
- Standalone redesign: `redesign/editorial-navigation-seo-2026` branch
- Review: [draft pull request #1](https://github.com/kayaniyasir/yjaved/pull/1)

The redesign branch is **for review**; changes there do not mean the live site has been updated. GitHub Pages branch settings must not be changed without the site owner's explicit approval.

## Preview locally

Check out the redesign branch and run `python -m http.server 8000` from the repository root, then open `http://localhost:8000/`. Use a real browser at desktop and mobile widths.

## Pre-release review

1. Confirm appointment titles, published awards, and any biography or CV changes.
2. Confirm image permissions and inspect portrait display quality.
3. Verify internal and external links, page metadata, and JSON-LD.
4. Test publication/recognition filters, navigation menus, keyboard access, and all Java exercises.
5. Check accessibility, contrast and screen-reader labels in a real browser.
6. Review GitHub Pages configuration, domain settings and any required `CNAME` before deployment.
7. Keep student, client, and unpublished research information out of public commits unless specifically approved.

After approval, choose a deliberate publication route and verify its actual deployed URL; do not change the Pages source merely to create a temporary preview. Recheck sitemap, canonical URLs and Search Console after launch.
