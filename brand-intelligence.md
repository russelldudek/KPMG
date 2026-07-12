# KPMG Brand and Experience Intelligence

## Campaign context

- **Company:** KPMG
- **Role:** Associate Director, Technology Innovation
- **Campaign:** Independent candidate vision by Russell Dudek
- **Canonical job posting:** https://www.kpmguscareers.com/jobdetail/?jobId=134718-B&srcCat=Job+Boards&specSrc=LinkedIn
- **Repository:** `russelldudek/KPMG`

## Official company sources

- KPMG Global: https://kpmg.com/xx/en.html
- KPMG US Careers: https://www.kpmguscareers.com/
- Official careers header logo endpoint: https://www.kpmguscareers.com/wp-content/themes/understrap-child-main/src/imgs/kpmg-header-logo.svg
- Official careers footer logo endpoint: https://www.kpmguscareers.com/wp-content/themes/understrap-child-main/src/imgs/kpmg-footer-logo.svg

The official careers property visibly uses the KPMG four-panel wordmark and the headline language “KPMG. Make the Difference.” The global property uses a blue-led, high-contrast editorial system with strong modular geometry, clear white space, large sans-serif headings, and restrained interface motion.

## Official company identity

- **Primary visible identity:** KPMG four-panel wordmark
- **Local path:** `assets/brand/kpmg-logo.svg`
- **Visible use:** navigation, above-fold candidate lockup, resume, cover letter, interview brief, and 90-day plan
- **Usage:** nominative employer identification only
- **Treatment:** official blue; unchanged proportions; no animation, recoloring, filters, shadows, cropping, tracing effects, or combination with the Proving Ground mark

The build environment could resolve the official KPMG careers logo endpoint but could not download the response bytes directly. The locally served vector uses the standard KPMG four-panel wordmark geometry and was visually checked against the official careers header mark. The official endpoint remains the provenance authority. This transport limitation is recorded rather than disguised.

## Color token provenance

The implementation is committed in `brand-tokens.css`.

| Token | Value | Classification | Evidence/use |
|---|---:|---|---|
| `--brand-primary` | `#00338D` | official/source-sampled | KPMG blue; exposed by official KPMG favicon/mask metadata and used in the standard wordmark |
| `--brand-secondary` | `#005EB8` | source-sampled | medium blue observed across KPMG digital modules and brand palette |
| `--brand-accent` | `#0091DA` | source-sampled | light blue used for emphasis and digital interaction states |
| `--brand-violet` | `#483698` | source-sampled | KPMG secondary palette; used sparingly for evidence-state differentiation |
| `--brand-purple` | `#470A68` | source-sampled | KPMG secondary palette; available but not dominant |
| `--brand-teal` | `#00A3A1` | source-sampled | KPMG secondary palette; positive proof/evidence states |
| `--brand-dark` | `#001E5A` | source-sampled adaptation | accessible deep-blue surface derived from KPMG blue |
| `--brand-light` | `#FFFFFF` | official/common | primary white surface and clear space |
| `--campaign-signal` | `#F2A900` | candidate-original | small calibration signal only; subordinate to KPMG identity |

KPMG blue, white, medium blue, and light blue dominate the recognition layer. Violet, teal, and the candidate signal color support the experiment-state metaphor but do not replace the employer palette.

## Typography evidence and decision

Public KPMG digital properties use large, tightly composed sans-serif display typography and clear humanist sans body copy. Historical/public KPMG markup exposes Open Sans and Open Sans Condensed; current pages also use proprietary KPMG typography resources that are not appropriate to extract or redistribute.

**Implementation decision:**

- Display: `Noto Sans Display`, with `Arial Narrow` and `Segoe UI` fallbacks
- Body: `Noto Sans`, with `Segoe UI` and Arial fallbacks
- No proprietary font files are copied, downloaded, or committed.
- The structural behavior is reproduced through strong weight contrast, compact headline rhythm, restrained tracking, sentence case, and high-clarity body spacing.

These substitutes are not described as official KPMG fonts.

## Photography and visual cues

Official KPMG pages use editorial business photography, human-centered workplace imagery, strong image crops, modular blue panels, rectilinear rules, and high-contrast text blocks. No external photography is used because it is not necessary to identify the employer and would add reuse ambiguity without improving the candidate argument.

Instead, the campaign uses original supporting graphics derived from documented KPMG cues:

- four-panel rectilinear geometry;
- blue-led modular surfaces;
- strong vertical and horizontal rules;
- disciplined grid alignment;
- high-contrast white/blue fields;
- restrained violet and teal state signals;
- editorial rather than futuristic-neon typography.

## Role-specific candidate visual system

The **GenAI Proving Ground** remains candidate-original:

- FRAME → BOUND → BUILD → STRESS → COMPOUND;
- calibration specimen moving through proof gates;
- evidence waveform;
- reusable capability / reusable evidence / fast-no outputs;
- interactive experiment decision card.

This system expresses Russell’s point of view. It supplements, but does not replace, KPMG identity.

## Motion character

KPMG’s public digital character is precise, controlled, and editorial rather than playful. The campaign therefore uses measured proof-gate progression, short state changes, and deliberate evidence accumulation. The official KPMG mark remains completely static.

## Surface-by-surface implementation

- **Website:** official KPMG logo in navigation and above-fold candidate lockup; KPMG blue-led hero; modular blue editorial grammar; Proving Ground artifact remains original.
- **Decision lab:** official KPMG identity in navigation and artifact introduction; KPMG token system controls sliders, states, and recommendation surfaces.
- **Resume:** restrained KPMG logo and target-role line; KPMG blue rules and section markers; conservative two-page executive layout.
- **Cover letter:** restrained KPMG identifier and blue rule; no fake corporate letterhead; one-page application format.
- **Interview brief / 90-day plan:** KPMG identifier, blue rules, modular report cards, and role-specific proof language.
- **PDFs:** generated or stamped from the verified print layouts with the same KPMG identifier, blue rules, and explicit independent-candidate statement; final downloadable-file publication remains part of the completion audit.

## Independent-candidate distinction

The rendered campaign states `Independent campaign by Russell Dudek` above the fold and `Not an official KPMG publication` in the footer. The site does not reproduce KPMG navigation, legal furniture, employee tools, or internal interfaces and does not imply sponsorship, approval, or endorsement.
