# Dr. Yasir Javed · Academic website

Personal academic, research and professional portfolio.

## Editorial principles
- Research-first, evidence-led presentation.
- Preserve factual role labels and separate Co-Investigator from Principal Investigator status.
- Link publications through their verified DOIs; do not claim a JCR quartile without checking the appropriate year.
- Label historical citation counts with source date.
- Cite PSU teaching award and university profile from official domains.
- Distinguish registered designs from functional invention patents.
- Do not publish student-level data, client details, private research prototypes or non-public funding amounts.
- Keep all non-public research plans, experiments and intellectual property out of the public repository unless explicitly approved.
- No Google Analytics or external trackers are installed.
- Accessibility: semantic headings, keyboard navigation, reduced-motion support, and responsive layouts.

## Release checklist
1. Confirm appointments, CV titles/dates, awards and permissions.
2. Replace the source portrait (currently low resolution) with an approved higher-resolution image.
3. Check PDF rendering and CV details.
4. Validate Java exercise behaviour including save/reveal state.
5. Test laptop, tablet, and phone resolutions in a real browser.
6. Submit sitemap to Google Search Console after publication; check indexation, structured data and Core Web Vitals.
7. Review external links, particularly grant and design registry verification, before publishing.
8. Require explicit approval before merging the redesign or changing GitHub Pages publishing settings.

## Development
- Plain HTML, CSS and JavaScript; no JavaScript build step required.
- Site stylesheet: `assets/css/site-2026.css`.
- Navigation and publication search: `assets/js/site-2026.js`.
- The existing 160-question Java learning page retains its own course-specific code and styles.

## Public source policy
Use `evidence-notes.html` to track data quality and evidence provenance.

## Layout quality review — 24 October 2026
- User screenshot identified a too-wide 1,500 px homepage grid, oversized hero, and visually disconnected shaded portrait column.
- Revised to a centered 1,190 px layout, single charcoal hero surface, desktop portrait up to 286 px, shorter vertical spacing and responsive side-by-side portrait details on phones.
- Headline size and general section headings reduced. Copper small-text contrast strengthened against light surfaces.
- The new CSS URL version `v=6` is referenced by all 16 HTML pages to reduce stale-preview styling.
- Representative local Chromium layout was rendered with the user-provided screenshot portrait crop at 1920, 1440, 768, 390 and 320 px. Prototype layout assertions found no horizontal overflow. Measured prototype hero heights: 566 px at desktop, 500 px at 768 px, and 696–734 px at narrow phone widths.
- **Verification boundary:** these were representative local mock layouts, NOT an exact deployed-browser render of the repository. The final branch itself still requires desktop and mobile screenshots and direct interactive testing before merge.
- Repository structural scan: 16 pages have canonical/description and a single H1; all navigation elements present, no duplicate IDs or broken internal anchors; the original 160 Java exercises remain intact.
- Remaining quality blocker: supplied portrait source resolution is low; use an approved higher-resolution image without digital face reconstruction.
