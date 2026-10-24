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

## Evidence and accessibility iteration — 24 October 2026
- Added a three-link homepage evidence strip for research case studies, the independent PSU teaching-award register and academic CV.
- Created a fifth research case study for DroneMap, with journal DOI 10.1016/j.adhoc.2018.09.013, related IEEE conference DOI 10.1109/ICARSC.2017.7964096, and project funding context.
- Grant source: a coauthored paper explicitly acknowledges KACST project 35-157. This substantiates a project award reference, **not** the individual's status as PI or receipt of the award amount. Four other projects remain CV-reported pending award letters and linked outputs.
- Research-specific results: the 2026 SDN-DDoS paper reports 99.36% accuracy in a single-switch simulated testbed; iKern (2024) reports 98.84% detection accuracy in its experimental system and lists Y.J. under Validation in the journal's author-contribution statement. The site describes testing limitations and does not infer real-world production performance.
- Independent career record: an official PSU announcement names Yasir Javed as CCIS College Research Director during September 2022–August 2023. The portfolio links this source without implying it confirms every appointment date.
- Selected publications increased from seven to eight DOI-linked papers; the public CV page, grants and research case studies now use more specific structured data.
- CSS introduces source-linked proof-band and grant-evidence styles, mobile stacking, and a small-label contrast improvement. All 16 HTML pages reference stylesheet `v=7` to avoid stale previews.
- Post-edit static inspection: all 16 pages retain canonical and meta description tags; no malformed JSON-LD, duplicate IDs, missing same-site HTML/anchor targets or unbalanced CSS braces found; six homepage contributions, five research cases, eight publication entries and 160 Java challenges remain present.
- **Not completed:** true browser rendering and full mobile interactive QA of the complete GitHub-hosted pages, Google Search Console/Lighthouse measurement, approval of higher-resolution portrait, independent award letters for four remaining projects, and third-party patent/ranking registry validation. These remain release gates and should not be described as passed.
