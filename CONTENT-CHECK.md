# CONTENT-CHECK.md

Comparison of **source of truth** (`CONTENT-INVENTORY.md`, `PAGE-MAP.md`) vs **this Next.js rebuild**.

Legend:

- `[x]` present and verbatim
- `[ ]` missing, altered, or only visually restyled (called out below)

Content issues from `CONTENT-ISSUES.md` were **not silently fixed**.

**18 Aug 2026 visual pass:** layout, type, motion, and chrome were refined. Copy, URLs, prices, FAQs, testimonials, and datasets were not modified. Checklists below remain valid.

---

## Global chrome (all pages)

| Check | SOURCE | NEW BUILD | Status |
|---|---|---|---|
| Header labels | Home, Treatments, Doctors, Hospitals, Blog, About Us, Contact, Enquire Now | Same | [x] |
| Treatments mega menu labels | Health 360 (Launching Soon), Modern Medicine children incl. **Opthalmology**, Fertility/IVF children → `/fertility/`, Ayurveda children → `/ayurveda-2/`, Dental children → `/dental-2/`, EmpowHER Launching Soon | Same destinations; no invented routes | [x] |
| Enquire Now | `https://wa.me/918861711233` | Same | [x] |
| Footer intro | “medical medical tourism company…” | Verbatim | [x] |
| Offices / phones / emails | Europe, Oceania (**Newzealand**), Asia | Verbatim | [x] |
| Footer nav labels | Home, Modern Medicine, Orthopedic, Urology… | Verbatim including “Orthopedic” vs “Orthopedics” | [x] |
| Newsletter heading | Subscribe To Our Newsletter | Same | [x] |
| Copyright | Copyright © 2026 Newjourney Health | Same | [x] |
| WhatsApp destination | wa.me/918861711233 | Same; custom branded FAB (not Chaty) | [x] |
| Invented routes | None allowed | `/treatments`, `/enquire`, IUI/IVF/Ayurveda/Dental child URLs, EmpowHER pages, `/doctors/dr-name`, `/hospitals/hospital-name` **not created** | [x] |

### Global notes

- Visual design is intentionally upgraded (typography, spacing, photography treatment). Copy is not rewritten.
- Original concierge / cost **icon SVG files** are not shown as standalone icons; the **text** is present in editorial cards.
- Homepage YouTube id `VhBl3dHT5SY` is stored in `src/lib/media.ts` but is **not embedded** as its own homepage section (the rebuild brief’s homepage section list did not include a video block).
- Enquiry forms validate on the client only. They do not post to the original Elementor backend.
- Brochure buttons have **no source URL** in the audit, so they remain `#`.
- Original WP `noindex` is **not** copied. Rebuild implements canonicals, sitemap, robots.txt, and Open Graph as specified in the rebuild brief.

---

## `/`

| Check | SOURCE | NEW BUILD | Status |
|---|---|---|---|
| URL | `/` | `/` | [x] |
| Page title | New Journey Health – Committed to Care. Designed for Safety. | Same | [x] |
| H1 | World-class healthcare meets a new journey | Same | [x] |
| Hero CTA | Book your consultation | Same | [x] |
| Treatments heading + 5 cards | Health 360, Modern Medicine, Fertility Care, Ayurveda, Dental + subtitles | Same; Health 360 → `/wellness-360-dtail-page/` | [x] |
| Patient Journey | 8 steps, exact titles/bodies | Same interactive timeline | [x] |
| Concierge | 8 items, exact titles/bodies | Same | [x] |
| Pricing | UK / US / India (TMTC Price); US values **£17,000** | Data from `src/content/home.ts`, not hardcoded in the table UI | [x] |
| Comfort | 4 items | Same | [x] |
| Doctors | 6 illustrative featured doctors + View Profile → template | Same | [x] |
| Hospitals | Illustrative Hospital 1–7 → template | Same | [x] |
| Featured in | Press strip | Present (source Elementor thumb images) | [x] |
| Testimonials | Sophia, Isabella, Niti Pall quotes | Verbatim carousel | [x] |
| Latest stories | Ayurveda, Dentistry, Orthopedics posts | Same; Orthopedics card still links to `/orthopedics/` (specialty page, as live) | [x] |
| FAQ | 6 home FAQs | Verbatim accordion | [x] |
| Enquiry CTA | Do you still have a query? / Ready to begin… / home consent text | Same | [x] |
| Form fields | Name, E-mail Address, Mobile Number, Query?, Book Appointment Now | Same | [x] |

---

## `/modern-medicine-2/`

| Check | Status |
|---|---|
| URL / title / hero title / hero body | [x] |
| Our Specialties (9) with source bullets and parent links | [x] |
| No invented specialty URLs | [x] |

---

## Specialty pages

`/orthopedics/`, `/urology/`, `/gynecology/`, `/ophthalmology/`, `/cosmetic/`, `/gastrosurgery/`, `/cardiac/`, `/spine/`, `/oncology/`, `/fertility/`, `/ayurveda-2/`, `/dental-2/`

| Check | Status |
|---|---|
| Exact URLs | [x] |
| Document titles | [x] |
| Hero titles and bodies | [x] |
| Treatments we offer chips | [x] |
| Procedure names + bullets (including duplicates: lung cancer twice, ophthalmology corneal = diabetic copy, dental implants smile-makeover copy, `ERCPERCP…`, rhinoplasty bullet twice) | [x] |
| Ayurveda intro “5,000 years…” | [x] |
| Why NewJourney Health? six cards | [x] |
| Specialists + View Profile → `/doctor-detail-page-template/` | [x] |
| Specialty testimonials **“l chose India”** (not corrected) | [x] |
| Hip/TMTC FAQs reused on specialty pages (not corrected) | [x] |
| Enquiry body + Newjourney consent spelling | [x] |
| Individual IUI/IVF/Ayurveda/Dental procedure routes | **Not created** (in-page sections only) |

---

## `/wellness-360-dtail-page/`

| Check | Status |
|---|---|
| URL (including `dtail` spelling) | [x] |
| Title / H1 / body | [x] |
| Pre-Arrival + Days 1–3 (Day 2 and Day 3 share the same title/copy, as source) | [x] |
| £2,999 package copy and bullets | [x] |
| Download our Brochure / Book Now | [x] (brochure href `#`) |

---

## `/orthopaedic-surgeries-detail-page/`

| Check | Status |
|---|---|
| URL / Hip Replacement Surgery hero | [x] |
| Why TMTC ? + six “This is the heading” cards | [x] |
| Who Needs… items | [x] |
| Before Surgery list (including concatenated travel/pre-op sentence) | [x] |
| No invented After Surgery copy | [x] (source file ends at Before Surgery) |

---

## `/doctors-listing/` and `/doctor-detail-page-template/`

| Check | Status |
|---|---|
| Listing URL / “Meet our doctors” | [x] |
| Filters: dummy conditions, departments, **Dummy empty non test1** | [x] |
| 7× Illustrative Profile cards, all → `/doctor-detail-page-template/` | [x] |
| No `/doctors/dr-name` routes | [x] |
| Detail placeholders: `Dr. [Full Name]`, `[Doctors Name}`, orthopaedics, MOrth, `[instagram-feed feed=1]`, product excerpt Dr Manreet Sidhu | [x] |

---

## `/hospitals/` and `/hospital-detail-page-template/`

| Check | Status |
|---|---|
| Listing heading “Leading hospitals by your side” | [x] |
| Filters including **All Departsment** | [x] |
| 7× Illustrative Hospital → `/hospital-detail-page-template/` | [x] |
| No `/hospitals/hospital-name` routes | [x] |
| NovaCare copy, “young childrent”, placeholders `[Treatment Name]`, HCG vs NovaCare airport/rail mismatch | [x] |

---

## `/about-us/`

| Check | Status |
|---|---|
| URL / title | [x] |
| Both H2s and four paragraphs | [x] |
| Team names/roles | [x] |
| Mission / vision / values | [x] |
| “trusted specialists ,” extra space preserved in content file | [x] |

---

## `/contact-us/` and `/faq/`

| Check | Status |
|---|---|
| Contact heading `Contact Us` | [x] |
| Office Address / Email / Phone (`+91 9567010169`) | [x] |
| FAQ hub H2 `Common Questions About Your Treatment Journey` | [x] |
| Five FAQ groups and questions, including truncated **Do you provide accommodation a** | [x] |
| Home enquiry band on contact | [x] |

---

## `/blog/` and posts

| Check | Status |
|---|---|
| H2 `Read Our Latest Blog & Articles` | [x] |
| Chips AYURVEDA · DENTISTRY · ORTHOPEDICS | [x] |
| `/ayurveda/` title, heading, date 3 Apr 2026, Admin, 3 paragraphs | [x] |
| `/dentistry/` same | [x] |
| Orthopedics **post** listed; live URL `/orthopedics/` remains the **specialty page** | [x] |
| `/blog-dummy-post/`, `/dummy-detailed-post/`, `/dummy-post-heading/`, `/dummy-blog-heading/` lorem + 29 Jan 2026 | [x] |
| Dummy posts not rewritten | [x] |

---

## Legal & WooCommerce

| URL | SOURCE | NEW BUILD | Status |
|---|---|---|---|
| `/privacy/` | Privacy Policy + 8 ecommerce-oriented sections | Same | [x] |
| `/terms/` | H1 Great things are on the horizon | Same coming-soon store copy | [x] |
| `/shop/` `/cart/` `/checkout/` `/my-account/` | Same coming-soon copy; no fake products/payments | Same | [x] |
| `/comming-soon/` | Title Comming Soon; blog listing of posts | Same | [x] |

---

## Gaps / follow-ups (not content rewrites)

1. Original Elementor icon artwork for concierge, cost, and some treatment glyphs is not pixel-identical; labels/copy are.
2. YouTube embed is not on the homepage.
3. Brochure / “Book a Call” (`#`) have no destination in the audit.
4. Directory condition/department filters are shown; illustrative profiles do not uniquely map to those dummy taxonomies, so search is the working filter.
5. Newsletter form is visual-only (`action="#"`).
6. Doctor Instagram shortcode is displayed as source text, not a live feed.
7. Heading hierarchy is more semantic than Elementor (some source pages used H2 as the visual title). Wording is unchanged.

---

## Route audit vs PAGE-MAP

All canonical live pages and reachable blog posts from PAGE-MAP are implemented. No extra marketing/treatment URLs were added.
