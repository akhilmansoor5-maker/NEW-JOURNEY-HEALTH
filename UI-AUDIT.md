# UI-AUDIT.md

Art-directed pass after personal review. Content, URLs, and IA are unchanged. Homepage now shows less, on purpose.

---

## What changed

The work was a **density and hierarchy** pass, not another effect pass.

- One typeface for headings (Inter). Lime SVG underline only on key phrases (`new journey`, `treatments we offer`).
- Playfair remains only on Patient Journey step numbers (signature section).
- Section padding tightened (`py-14` / `lg:py-20`).
- Radius standardized toward `rounded-2xl`.
- Hover: 150–300ms, lift ~2px, image scale 1.03–1.05.
- No auto-scroll carousels. No new routes. No invented stats, ratings, or doctors.

---

## Homepage sections simplified

Kept this order:

Hero → Treatments → Journey → Concierge → India Advantage → Comfort → Doctors → Hospitals → Featured in → Testimonials → Stories → FAQ → Enquiry

Reduced:

- Treatments: explorer (large image + category list), not a card grid or swipe strip. Default active: Modern Medicine.
- Concierge: 2 photo blocks + 6 compact items (was 8 equal cards). Hover lift / overlay / icon / arrow.
- Comfort: editorial heading + asymmetric photo tiles.
- Doctors: 5 only (1 featured + 4). `Learn More →` to `/doctors-listing/`.
- Hospitals: 1 featured + 2 supporting. `Learn More →` to `/hospitals/`. Dummy titles remain because they are source.
- Featured in: heading left, static grayscale logos right. Hover restores opacity. No marquee.
- Testimonials: one quote + small nav. No giant serif.
- Stories: 1 featured + 2 (reachable posts only). `Learn More →` to `/blog/`.
- FAQ art image removed from homepage.

Journey was not redesigned.

---

## Navigation

Desktop Treatments menu is an editorial panel:

- Left: changing treatment image + “Treatments”
- Middle: primary categories (Modern Medicine, Fertility and IVF, Ayurveda, Dental), then Launching Soon (Health 360, EmpowHER Women's Health)
- Right: children of the hovered category

Hover changes image, lime accent, and child list. Source labels only.

Hover gap closed with a 160ms close delay plus an invisible bridge under the Treatments control, so the panel can be reached without collapsing.

Mobile: full-screen drawer. Treatments is an accordion of categories. Enquire Now stays pinned.

Header CTA remains `Enquire Now`.

---

## Hero

The source hero file (`Modern-Medicine.jpg`) is a **1792×2400 portrait** of a centered clinician. Previous `object-position` values biased to the upper-right (`58–72% / 12–20%`), which cropped through the subject on tall phones.

Now:

- `object-position: center 26%` so the face stays in frame
- Shorter mobile height (`68svh` → `88svh` on large screens) so the 3:4 photo is not side-cropped on 375–430
- Directional forest overlay from the left; it falls off before the subject
- Light bottom wash on small screens only, for type contrast
- Original headline, CTAs, and thin scroll indicator

---

## Doctor filtering

`/doctors-listing/` now filters from **listing data only**:

- `q`
- `department` (unique specialty from `role`, e.g. Orthodontist)
- `location` (Gurgaon, India)

URL example: `/doctors-listing/?department=Orthodontist&location=Gurgaon%2C%20India`

Includes instant filter, active chips, clear (`All Doctors` source string), result count, empty state (`0`), mobile drawer.

Dummy source options (`Dummy empty non test1`, unrelated urology conditions) are **not** shown as filters because they are not on the doctor cards.

---

## Hospital filtering

`/hospitals/` filters from **listing data only**:

- `q`
- `location` (Chennai)

No department or accreditation fields exist on listing hospitals, so those filters were not invented.

Same URL persistence, chips, clear (`All Filters` source string), count, empty state, mobile drawer.

On the hospital **detail** template, the existing NABH facilities line is surfaced in the hero hierarchy (not as a fabricated accreditation badge).

---

## Contact

Split composition:

- Left: heading, original enquiry body, `Office Address` / `Email Address` / `Office Phone Number` from `site.contactBlocks`, social
- Right: white enquiry form
- Below: three office cards from `site.offices`, then FAQ heading + `Learn More →` to `/faq/`

No map embed: the source has no map URL.

---

## Other pages

- **Doctor detail:** portrait / name / specialty / facts / CTAs, then about, education, expertise, journey, hospitals, source treatment link, enquiry.
- **Hospital detail:** image, name, location, NABH line from facilities, split stats, overview, facilities, stay/inclusions, departments, travel, `Learn More →` to doctors listing, enquiry. No invented related doctors.
- **About:** hero story → positioning → mission/vision → values → team → enquiry.
- **FAQ:** category chips + search across original questions.
- **Blog listing:** featured + secondary, category chips filter existing posts.
- **Blog article:** calmer type, related posts in the same category, existing CTA/enquiry. No injected sales copy in the body.
- **Treatment / Wellness / Hip / Coming Soon:** Inter headings, `rounded-2xl`, directional overlays instead of a flat dark wash.
- **Footer:** brand + offices, compact nav, legal/social, enquiry/WhatsApp CTAs. Newsletter block omitted to keep the footer from becoming a second sitemap (copy remains in `site.ts`).

---

## Responsive / a11y

- Hero object-position corrected for 375 / 390 / 430 / 768 / 1024 / 1280 / 1440 using the actual portrait asset.
- Mega menu is desktop-only; mobile uses drawer + accordion.
- Treatment explorer stacks image then list on small screens (no swipe carousel).
- Filter drawer on mobile directories.
- Focus rings, 44px targets, accordion/search ARIA unchanged in spirit.
- `prefers-reduced-motion` still disables zoom/marquee.

---

## Still source-limited (not fabricated)

- Homepage hospitals still titled Illustrative Hospital *n*.
- Listing doctors share one role and one city.
- No accreditation or department fields on hospital **listing** cards.
- CTA strings stay source (`Learn More →`, not invented “Meet all doctors”).
- TMTC / “l chose India” / US £17,000 leftovers stay as in CONTENT-ISSUES.md.
- Wellness brochure still has no file URL.
- Featured-in marks are the source Elementor thumb images, shown static.
