# CONVERSION-AUDIT.md

Audit of the rebuilt NewJourney Health site as a **qualified-enquiry** machine for a first-time international patient.

Content, URLs, and IA are frozen. This file records **intent, friction, and recommended UX** only.

Visitor questions:

1. Can I trust this company?
2. Can they actually help me?
3. How much will this cost?
4. Which treatment is right for me?
5. Which hospital will I go to?
6. How do I contact them?
7. Will someone actually respond?

---

## Global chrome

| | |
|---|---|
| **Primary user intent** | Orient, then start an enquiry |
| **Primary CTA** | Header `Enquire Now` → WhatsApp |
| **Secondary CTA** | Search; nav to treatments/doctors/hospitals |
| **Trust signals** | Logo, three offices, footer intro, WhatsApp number |
| **Information gaps** | Footer has no enquiry path besides WhatsApp/nav links. Cost is homepage-only. |
| **Friction** | Search needs 2+ characters, no keyboard shortcut, no result context. WhatsApp tooltip always on (desktop). Mobile: Enquire in header + FAB + drawer can stack. |
| **Recommended UX** | Cmd/Ctrl+K search with ranked results. Footer enquire. Sticky mobile bar using existing `Book your consultation` / `Chat with an expert`. Move FAB so it does not cover the bar. |

---

## `/` Homepage

| | |
|---|---|
| **Intent** | Understand the offer and start a conversation |
| **Primary CTA** | Hero `Book your consultation` → `#enquiry` |
| **Secondary CTA** | Treatment explorer, Enquire Now, form `Book Appointment Now` |
| **Trust** | Journey (“responds within hours”), concierge, India prices, doctors, hospitals, featured-in, testimonials, FAQ (48–72 hours) |
| **Gaps** | Cost exists but is mid-page. Hospital cards are illustrative (source). |
| **Friction** | Long page; enquiry form only at the bottom. |
| **UX** | Keep hierarchy. Sticky mobile enquire. Form success must restate existing response-time copy. |

**Questions answered:** Trust (mid/late), help (journey), cost (yes, if they scroll), treatment (explorer), hospital (listing, illustrative), contact (header + form), response (FAQ + journey — easy to miss).

---

## Treatment hub `/modern-medicine-2/` and specialties

| | |
|---|---|
| **Intent** | Confirm this specialty is right, then enquire |
| **Primary CTA** | `Book a consultation` (source specialty label) |
| **Secondary CTA** | `Chat with an expert` |
| **Trust** | Why NewJourney, specialists, testimonials, FAQs (TMTC leftover — documented, not fixed) |
| **Gaps** | Cost not on specialty pages (do not invent). Why-section currently appears *before* procedures, so scanning is inverted. No in-page jump nav. |
| **Friction** | Long procedure lists. Doctors are the same homepage set (source). |
| **UX** | Reorder to: hero → what it is → procedures → why → doctors → testimonials → FAQ → enquiry. Desktop sticky nav using **existing headings**. |

---

## `/wellness-360-dtail-page/` · `/orthopaedic-surgeries-detail-page/`

| | |
|---|---|
| **Intent** | Understand a package / hip leftover page |
| **Primary CTA** | Brochure `#` / Book Now / Book a Free Consultation (source) |
| **Gaps** | Brochure has no URL in source. Hip “Why TMTC” placeholders. |
| **UX** | Keep CTAs. Ensure enquiry band remains reachable. Do not invent brochure files. |

---

## `/doctors-listing/` · `/doctor-detail-page-template/`

| | |
|---|---|
| **Intent** | Find a specialist, then enquire |
| **Primary CTA** | `View Profile →` then detail `Book an Appointment` |
| **Secondary** | None on listing; WhatsApp header |
| **Trust** | Photos, names; detail uses placeholders (source) |
| **Gaps** | Cards mix role into a single subtitle. Listing has no end-of-page enquire. Profile does not point back to a treatment. Dummy filters. |
| **Friction** | All profiles resolve to one template (source — keep). Empty search has no state. |
| **UX** | Card hierarchy: who / specialty / where / action (source fields only). Listing + detail enquiry bands. Empty filter state. |

---

## `/hospitals/` · `/hospital-detail-page-template/`

| | |
|---|---|
| **Intent** | Choose a destination hospital, then enquire |
| **Primary CTA** | Card → template; detail `Book an Appointment` |
| **Trust** | Source stats `8 Specialities \| 80 Doctors \| 300 Beds`; detail NovaCare copy |
| **Gaps** | Listing has no enquire band. Cards have no explicit action label. No doctor list on hospital page (source has none — do not invent). |
| **UX** | Clearer who/where/stats/action. Enquiry band. Keep stats exactly. |

---

## `/about-us/`

| | |
|---|---|
| **Intent** | Trust the company |
| **Primary CTA** | **None on page** |
| **Trust** | Story, named team, mission/vision/values, offices in footer |
| **Gaps** | No enquire / chat on the page. |
| **UX** | End with existing enquiry heading + form + `Chat with an expert`. |

---

## `/contact-us/` · `/faq/`

| | |
|---|---|
| **Intent** | Contact / get answers, then enquire |
| **Primary CTA** | Contact has form; FAQ has **no CTA** |
| **Trust** | Address, email, phone, grouped FAQs including 48–72 hours |
| **Gaps** | FAQ is a dead end. |
| **UX** | Add enquiry band to FAQ. Keep contact form. Clarify after-submit using FAQ wording. |

---

## `/blog/` · articles

| | |
|---|---|
| **Intent** | Learn, then find a treatment |
| **Primary CTA** | **None** (Share This only) |
| **Gaps** | Dead end. Category exists (Ayurveda / Dentistry / Orthopedics) and already maps to live treatment URLs. |
| **UX** | After the article: existing enquiry band + `Learn More →` to the matching parent treatment page. No new sales copy in the body. |

---

## Legal / shop / cart / checkout / my-account / comming-soon

| | |
|---|---|
| **Intent** | Store is not live |
| **CTA** | Coming-soon copy only |
| **UX** | Do not add fake checkout. Header Enquire + WhatsApp remain. Hide sticky conversion bar so it does not imply a store. |

---

## Trust inventory (source only — do not fabricate)

Present: offices, named leadership (About), concierge list, journey response-time, FAQ 48–72 hours, testimonials, featured-in images, JCI/NABH **mentioned in existing why/FAQ copy**, illustrative doctors/hospitals.

Absent from source: awards, ratings, patient counts, success rates, unique hospital URLs, unique doctor URLs.

---

## Implementation queue (this pass)

Completed in the conversion pass (see below).

---

## Post-implementation notes

Content, URLs, and IA were not changed. No awards, ratings, patient counts, or partnerships were invented.

### Conversion hierarchy

| Slot | Label (source) | Destination |
|---|---|---|
| Primary | `Book your consultation` | `#enquiry` on conversion pages, otherwise `/contact-us/#enquiry` |
| Secondary | `Chat with an expert` | `https://wa.me/918861711233` |
| Header | `Enquire Now` (unchanged) | WhatsApp |
| Forms | `Book Appointment Now` (unchanged) | form submit |
| Specialty heroes | `Book a consultation` (unchanged) | `#enquiry` |
| Doctor / hospital | `Book an Appointment` (unchanged) | WhatsApp |

Enquire is now reachable from header, hero, treatments, doctors, hospitals, blog, about, contact, FAQ, and footer.

### Mobile

- Sticky bottom bar on conversion pages: primary + secondary. Hidden on shop / cart / checkout / my-account / terms / privacy / comming-soon so it does not compete with a store that is not live.
- Bar reserves thumb space (`pr-14`) so it does not collide with WhatsApp.
- WhatsApp FAB sits above the bar on mobile; tooltip is hover/focus only on `sm+`.

### Page-by-page (after)

- **Homepage:** Hero now has both CTAs. `#enquiry` is wired via `EnquiryBand`. Form idle copy restates journey “responds within hours” and FAQ 48–72 hours.
- **Specialty:** Order is hero → what it is → procedures → why → doctors → testimonials → FAQ → enquiry. Desktop sticky nav uses existing headings only (no invented “Overview” label).
- **Doctors listing:** Card = who / specialty / where / `View Profile →`. Empty search uses the existing `Search...` placeholder. Enquiry band after the listing.
- **Doctor detail:** Source `Book an Appointment` + `Chat with an expert`. `Learn More →` to `/orthopedics/` only because the source department is orthopaedics. Enquiry band at the end.
- **Hospitals listing / detail:** Who / where / source stats / `Learn More →`. Detail keeps source stats exactly. Enquiry band after travel. No invented doctor roster on the hospital page.
- **About / FAQ:** Enquiry band with existing still-query + heading.
- **Blog listing / articles:** Enquiry band. Articles with Ayurveda / Dentistry / Orthopedics categories get `Learn More →` to the existing treatment URL. Dummy posts (empty category) get enquiry only. Article body unchanged.
- **Search:** Cmd/Ctrl+K, Escape, arrows, Enter. Rank Treatments → Doctors → Hospitals → Blog. Results show type, title, context.

### Still unanswered (source limits — not fabricated)

- Specialty pages still have no prices (cost lives on the homepage comparison only).
- Doctor and hospital directories remain illustrative templates with a single detail URL each.
- Dummy filters on directories are display-only (source leftovers).
- Wellness brochure CTA still points at `#` because the source has no file.
- TMTC / “l chose India” / US-price leftovers remain as documented in CONTENT-ISSUES.md.

`npm run lint` and `npm run build` both passed after this pass (42 static routes).
