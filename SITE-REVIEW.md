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

## Expanded publications directory — 25 October 2026
- `publications.html` contains a static, indexable list of **46** deduplicated expertise-related outputs, with five research areas and client-side search, topic, type and year filters.
- The catalog is also maintained as public, machine-readable bibliographic metadata in `assets/data/research-publications-2026.json`. The page includes an `ItemList` schema with 46 entries, publisher DOI links when known, and explicit provenance warnings for CV/profile-only entries.
- Coverage: 17 cybersecurity/secure networks, 9 AI/software engineering, 6 robotics/intelligent systems, 12 education/accessibility/quality, 2 books/chapters. Output types: 33 journal articles, 10 conference papers, 1 book and 2 chapters.
- 38 entries carry DOI links, 2 have alternative public source links without a confirmed DOI, and 6 have no confirmed primary publication URL. Those records need publisher-level bibliographic checks before a stronger verification claim.
- Checked against October 2026 academic CV and external university, journal and research-library records; corrected the original title/coauthors of the ICARSC 2017 DroneMap paper and IEEE Access 2023 6G paper.
- Not an exhaustive import of the 147 historically reported outputs: further source reconciliation, duplicate checking across Google Scholar/Scopus/ORCID, and individual DOI checks are required before claiming complete coverage.
- Do not add unpublished manuscripts, private research details or speculative bibliometric rankings. Keep each publication's actual type (journal, conference, book, chapter) and author order accurate.
- Static content remains readable without JavaScript. Client-side filtering enhances the experience; all records are available to search crawlers.
- Static checks passed: 46 HTML publication rows, 46 schema items, 46 unique titles, 38 DOI hyperlinks, five anchored categories, unique element IDs, balanced CSS braces, and correct links from the homepage.
- Interactive verification in a real browser and live Google Search Console indexation remain future publication checks; not claimed as passed.

## Awards and achievements presentation — 25 October 2026
- Home page retains research-first hierarchy and six selected contributions; four featured distinctions appear below these with source labels and direct evidence links.
- `recognition.html`: 17 entries in five categories (research, teaching, professional, leadership, innovation) with full static content and progressive-enhancement filters for text/category/source.
- `achievements.html`: six structured contribution summaries separating role, action, outcome and verification status; student awards are attributed to student teams, not personally claimed.
- On-page `cv.html` includes a concise honor summary. The existing separately downloadable PDF is not automatically regenerated and needs synchronization before final publication.
- Independent PSU teaching register documents the President's Distinguished Teaching Award and Outstanding Teaching Award for 2020–2021. PSU professional biography also references Top Researcher, UNIMAS outstanding doctoral recognition and UMT Rector's Medal; original certifying records remain stronger for formal applications.
- CV-only and issuer-only awards remain labeled: no invented dates, evidence URLs, rankings or patent validity claims.
- The public archive intentionally includes leadership and intellectual property as **milestones, not awards**.
- Validate actual page rendering, keyboard controls and the archive's client-side filter behavior in a full browser before merging.

## Publication-source reconciliation and individual research roles — 25 October 2026
- The previous count of **38 DOI-linked records** is superseded by **45 of 46 records with confirmed DOI references**. The one exception is the 2018 JATIT paper on software complexity and vulnerabilities, which retains a direct official publisher issue URL and no invented DOI.
- Seven newly verified DOI records:
  - Accessibility compliance / IEEE CDMA: `10.1109/CDMA61895.2025.00016`.
  - Cyber-Threat-Intelligence DOSFAN / ACM ICISDM: `10.1145/3686397.3686406` (previous CV's conference descriptor was not the publisher venue).
  - XEmoAccent / IEEE Access: `10.1109/ACCESS.2024.3376379`.
  - Education in the 21st Century / ACM: `10.1145/3613944.3613947`.
  - Financial-sector big-data sentiment / JAFEB: `10.13106/jafeb.2020.vol7.no6.457`.
  - Security assessment of four open-source systems / IAES: `10.11591/ijeecs.v16.i2.pp860-881`.
  - Open-source web application security / IEEE ICEMIS: `10.1109/ICEMIS.2016.7745369`.
- Rebuilt the five publication category lists and 46 `ItemList` schema entries from the corrected bibliographic JSON. A separate publisher attribution summary appears for the five papers in the research case-study portfolio.
- **Publisher-confirmed individual roles:** the iKern author-contribution statement assigns `Validation` to `Y.J.`; the PSU QA case study assigns conceptualization, investigation and both drafting/editing stages jointly to M.A. and Y.J., with project administration to M.A.
- **Potential publisher correction:** the Scientific Reports 2026 DDoS study names Yasir Javed as a coauthor, but its author-contribution statement assigns `Investigation, Resources` to the initials `Y.A.` instead of an unambiguous `Y.J.`. Do not infer his individual technical responsibilities until the author/contributing team resolves the initials.
- Trust-protocol and DroneMap case studies present coauthorship; DroneMap's Senior Researcher appointment is CV-reported, and its KACST project funding acknowledgment does not establish individual grant ownership.
- The full 46-record bibliography requires further per-record publisher/Crossref verification and a real-browser search/filter/accessibility check before public release. No change to live publishing branch.

## Training & professional development portfolio — 26 October 2026
- Created `training.html` and five individual programme pages:
  - `training-webforge.html` — WebForge 2026 (workshops 25, 26, 28 October; campus competition scheduled for 31 October); original event website and FAQ linked.
  - `training-ieeextreme.html` — IEEEXtreme preparation; contest owned by IEEE, current 2026 official rules linked, no claims of IEEE competition ownership.
  - `training-cv-writing.html` — CV writing and career readiness workshop offering; no undocumented delivery or participant-impact claims.
  - `training-teaching-certificate.html` — teacher/faculty development; explicit statement that certificates require a defined institutional awarding body, not this portfolio.
  - `training-ai-ethics.html` — applied AI ethics and governance; includes risk-register activities and links to UNESCO/NIST public guidance.
- All six pages use self-contained text and CSS process diagrams, rather than photographs, stock images or AI-generated pictures of people. The diagram stages correspond to substantive learning tasks.
- Updated homepage with three compact featured programmes, main Teaching & Training navigation with direct links to all five, Teaching page, Professional Services page and Achievements page.
- Added all six pages to the sitemap (22 HTML entries total). Menu overflow on mobile is constrained and scrollable; source URLs are separate from personal endorsement claims.
- Static audit: all six new HTML documents contain one H1, five linked programme entries in navigation, no `<img>` or social-preview human imagery, no duplicate IDs, and stylesheet v12. The latest CSS has balanced braces and responsive 980/720/350-pixel breakpoints. Full-site browser render/keyboard interaction testing remains outstanding.
- Delivery status is conservative: WebForge 2026 is scheduled/underway on the stated dates; IEEEXtreme training is preparation; CV writing, educator development and AI ethics are workshop offerings unless delivery evidence is supplied.
- Independent attendance, feedback scores, certificates, outcomes, licensed logos and participant photographs must not be invented or published without approval.
- Public branch is an unmerged design draft; live GitHub Pages source branch must not be changed without user approval.


## Categorized training navigation — 26 October 2026
- Replaced the flat Teaching & Training menu with four visually separated subject groups: Software & Programming, AI & Cybersecurity, Teaching & Faculty Development, and Career & Professional Skills.
- Each menu category links to a matching anchored section on `training.html`; individual programme links remain available directly within the dropdown.
- Grouped the five documented programme pages on the training hub and linked the existing Java resources, teaching portfolio and student mentoring where relevant. No undocumented training events, attendance figures or certificates were introduced.
- Added a two-column desktop menu and single-column mobile presentation. Category headings are keyboard-accessible links rather than hover-only nested controls.
- Adjusted `site-2026.js` to mark only non-fragment page links as the current page, preventing all four training category anchors from being simultaneously announced as current.
- Updated stylesheet query version to `v=13` on all 22 HTML pages.
- Static checks: all 22 pages contain one categorized training menu with four groups, reference the updated stylesheet, and have no duplicate IDs; the training hub contains four anchored category sections and five programme cards; all 160 Java exercise anchors remain.
- **Still to verify in a full browser:** mobile dropdown scrolling, desktop panel positioning, keyboard focus and interaction, and visual alignment at representative viewports. No change to the published branch.
