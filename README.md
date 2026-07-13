# KPMG Technology Innovation Candidate Campaign

Independent candidate campaign for **Russell Dudek** targeting **Associate Director, Technology Innovation** in KPMG Digital Nexus.

## Campaign metadata

- **Suggested chat name:** KPMG – Technology Innovation
- **Canonical role:** Associate Director, Technology Innovation
- **Company:** KPMG
- **Repository:** `russelldudek/KPMG`
- **Publication branch:** `main`
- **Job posting:** https://www.kpmguscareers.com/jobdetail/?jobId=134718-B&srcCat=Job+Boards&specSrc=LinkedIn
- **Print standard:** US Letter

## Campaign thesis

**Make experiments leave assets behind.**

Innovation compounds when every experiment leaves behind one of three assets: reusable capability, reusable evidence, or a fast no.

Operating model: `FRAME → BOUND → BUILD → STRESS → COMPOUND`.

## Brand fidelity

The campaign uses the locally committed KPMG four-panel wordmark, KPMG blue-led color tokens, an evidence-based typography substitute, and rectilinear editorial geometry across the website and every web document. The official company identity establishes the employer; the GenAI Proving Ground remains the candidate-original operating argument.

Brand package:

- `brand-intelligence.md`
- `brand-tokens.css`
- `brand-fidelity.css`
- `site-qa.css`
- `document-brand.css`
- `document-fix.css`
- `assets/brand/kpmg-logo.svg`
- `assets/brand/README.md`

This is independent candidate work by Russell Dudek and is not produced, sponsored, or endorsed by KPMG.

## Routes

- `index.html` — candidate vision
- `decision-lab.html` — interactive experiment decision card
- `resume.html` — two-page role-aligned resume
- `cover-letter.html` — one-page cover letter
- `interview-brief.html` — interview thesis brief
- `90-day-plan.html` — entry plan

Every route now uses one shared candidate navigation system and exactly one static KPMG employer lockup. The obsolete runtime branding injector was removed after it was found to create duplicate banners.

## Downloadable documents

- `docs/Russell-Dudek-KPMG-Resume.pdf` — 2 pages
- `docs/Russell-Dudek-KPMG-Cover-Letter.pdf` — 1 page
- `docs/Russell-Dudek-KPMG-Interview-Brief.pdf` — 2 pages
- `docs/Russell-Dudek-KPMG-90-Day-Plan.pdf` — 2 pages

The four PDFs were regenerated and verified on a GitHub-hosted Ubuntu runner using WeasyPrint and Poppler. The résumé and cover letter retain Russell's verified location, phone, email, LinkedIn profile, and campaign URL.

## QA evidence

- `qa/full-site-audit.json` — retained Chromium render evidence: 28 runs across all six routes, desktop/laptop/tablet/mobile, interactions, mobile navigation, and reduced motion.
- `qa/repository-finalizer-audit.json` — main-branch route structure, identity count, duplicate-ID, and internal-link audit.
- `qa/pdf-finalizer-audit.json` — exact PDF page counts, file sizes, and contact/campaign-link extraction.
- `audit-evidence.json` — consolidated campaign audit record and remaining deployment gate.

Source, rendered, responsive, interaction, reduced-motion, navigation, identity, and PDF audits pass. GitHub Pages live-route verification remains separate because the Pages endpoint is not reachable from the current audit environment; the campaign remains `building-pending-live-pages-verification` until the deployed routes and PDF responses are checked against the current `main` head.
