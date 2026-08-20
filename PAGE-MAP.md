# NewJourney Health — Page & Route Map

Source of truth: live crawl of https://newjourneyhealth.com/ on 18 Aug 2026  
WordPress REST: 31 pages, 7 posts, 14 WooCommerce products.

**SEO rule for the rebuild:** keep these URLs. Do not invent new treatment slugs unless a live page already exists.

---

## 1. Canonical live pages (must exist in the rebuild)

| Live URL | WP title | Role | New URL (preserve) |
|---|---|---|---|
| `/` | Home main | Homepage | `/` |
| `/about-us/` | About Us | About | `/about-us/` |
| `/contact-us/` | Contact Us | Contact + FAQ groups + enquiry | `/contact-us/` |
| `/faq/` | FAQ | Standalone FAQ hub | `/faq/` |
| `/blog/` | Blog | Blog listing | `/blog/` |
| `/doctors-listing/` | Doctors Listing | Doctor directory | `/doctors-listing/` |
| `/doctor-detail-page-template/` | Doctor Detail Page Template | Single doctor template (all products redirect here) | `/doctor-detail-page-template/` |
| `/hospitals/` | Hospitals | Hospital directory | `/hospitals/` |
| `/hospital-detail-page-template/` | Hospital Detail page Template | Single hospital template | `/hospital-detail-page-template/` |
| `/modern-medicine-2/` | Modern Medicine | Category hub | `/modern-medicine-2/` |
| `/orthopedics/` | Orthopedics | Specialty | `/orthopedics/` |
| `/urology/` | Urology | Specialty | `/urology/` |
| `/gynecology/` | Gynecology | Specialty | `/gynecology/` |
| `/ophthalmology/` | Ophthalmology | Specialty | `/ophthalmology/` |
| `/cosmetic/` | Cosmetic | Specialty | `/cosmetic/` |
| `/gastrosurgery/` | Gastrosurgery | Specialty | `/gastrosurgery/` |
| `/cardiac/` | Cardiac | Specialty | `/cardiac/` |
| `/spine/` | Spine | Specialty | `/spine/` |
| `/oncology/` | Oncology | Specialty | `/oncology/` |
| `/fertility/` | Fertility | Category + all IVF child items | `/fertility/` |
| `/ayurveda-2/` | Ayurveda | Category + all Ayurveda child items | `/ayurveda-2/` |
| `/dental-2/` | Dental | Category + all Dental child items | `/dental-2/` |
| `/wellness-360-dtail-page/` | Wellness 360 Dtail Page | Health 360 / 3-day package | `/wellness-360-dtail-page/` |
| `/orthopaedic-surgeries-detail-page/` | Orthopaedic Surgeries Detail page | Hip replacement detail (TMTC leftover) | `/orthopaedic-surgeries-detail-page/` |
| `/privacy/` | Privacy Policy | Legal | `/privacy/` |
| `/terms/` | Terms and Conditions | Legal (currently WooCommerce coming-soon) | `/terms/` |
| `/comming-soon/` | Comming Soon | Published page (blog-like listing) | `/comming-soon/` |
| `/shop/` | Shop | WooCommerce coming-soon | `/shop/` |
| `/cart/` | Cart | WooCommerce | `/cart/` |
| `/checkout/` | Checkout | WooCommerce | `/checkout/` |
| `/my-account/` | My account | WooCommerce | `/my-account/` |

---

## 2. Blog posts (must exist)

| Live URL | Title | Notes |
|---|---|---|
| `/ayurveda/` | Ayurveda | **Blog post**, not the treatment page |
| `/dentistry/` | Dentistry | Blog post |
| `/orthopedics/` | Orthopedics | Blog post slug **collides** with the specialty page. WP serves the page at this URL. See CONTENT-ISSUES.md |
| `/blog-dummy-post/` | Blog Dummy Post | Lorem ipsum |
| `/dummy-detailed-post/` | Dummy Detailed Post | Lorem ipsum |
| `/dummy-post-heading/` | Dummy Post Heading | Lorem ipsum |
| `/dummy-blog-heading/` | Dummy Blog Heading | Lorem ipsum |

---

## 3. WooCommerce “products” (doctors & hospitals)

There are **no unique public URLs**. Every doctor product `_links_to` the same template; every hospital product does the same.

| Product slug | Title | Resolves to |
|---|---|---|
| `illustrative-profile-1` … `7` | Illustrative Profile 1–7 | `/doctor-detail-page-template` |
| `illustrative-hospital-1` … `7` | Illustrative Hospital 1–7 | `/hospital-detail-page-template/` |

`/illustrative-profile-1/` and `/product/illustrative-profile-1/` are **not** public pages.

---

## 4. Mega-menu items that do **not** have their own pages

These appear in navigation but **all link to the parent category** (or have no href).

| Nav label | Current destination | Own page? |
|---|---|---|
| Health 360 | `#` (Launching Soon) | No. Closest: `/wellness-360-dtail-page/` |
| Wellness Therapy / Full Body Diagnostics / Nutritional Healing | none | No |
| EmpowHER Women's Health / PostNatal Care | `#` (Launching Soon) | No |
| IUI, IVF, ICSI, IMSI, PGT, TESA / PESA / Micro-TESE | `/fertility/` | No |
| Holistic Wellness, Abhyanga, Panchakarma, Udhvartan, Shirodhara | `/ayurveda-2/` | No |
| Potli Massage, Kati Vasti, Nasya, Kashayadhara, Pizhichil, Ubtan | listed on `/ayurveda-2/` only | No |
| Dental Veneers, Dental Implants, Smile Makeover, Maxillofacial Surgery | `/dental-2/` | No |
| Hip Replacement, Knee Replacement, etc. | listed on `/orthopedics/` only | No (except hip leftover at `/orthopaedic-surgeries-detail-page/`) |

**Do not create new URLs for these** unless approved. Preserve them as in-page sections / explorer filters on the parent page.

Probed and confirmed **404 / not a page:**  
`/treatments/`, `/health-360/`, `/iui/`, `/ivf/`, `/icsi/`, `/imsi/`, `/pgt/`, `/abhyanga/`, `/panchakarma/`, `/enquire/`, `/enquire-now/`, `/contact/`, `/about/`, `/doctors/`, `/privacy-policy/`, `/coming-soon/` (correct spelling).

Note: `/modern-medicine/` and `/dental/` and `/wellness-360/` resolve to **image files**, not pages.

---

## 5. Enquiry / CTA destinations (not pages)

| Label | Destination |
|---|---|
| Enquire Now (header) | `https://wa.me/918861711233` |
| Book a Call | `#` |
| Book your consultation | in-page / form |
| Book a consultation / Chat with an expert | specialty heroes |
| Book Appointment Now | Elementor form submit |
| WhatsApp widget | Chaty plugin |

There is **no** `/enquire` page on the live site.

---

## 6. Redirects to implement only if needed

| Old | New | Why |
|---|---|---|
| None required for launch | — | Rebuild should serve the live slugs above |

**Optional later (do not apply without approval):**

| Suggestion | Reason |
|---|---|
| `/ayurveda-2/` → `/ayurveda-treatment/` | Distinguish from blog `/ayurveda/` |
| `/dental-2/` → `/dental/` | Current `/dental/` is an image |
| `/modern-medicine-2/` → `/modern-medicine/` | Current `/modern-medicine/` is an image |
| `/doctors-listing/` → `/doctors/` | Cleaner |
| `/contact-us/` → `/contact/` | Cleaner |
| `/about-us/` → `/about/` | Cleaner |
| `/comming-soon/` → `/coming-soon/` | Spelling |

If any of these are ever changed, 301 the old slug.

---

## 7. Navigation map (as live)

```
Home                         /
Treatments (mega)
  Health 360                 #  (Launching Soon)
  Modern Medicine            /modern-medicine-2/
    Orthopedics              /orthopedics/
    Urology                  /urology/
    Gynecology               /gynecology/
    Opthalmology             /ophthalmology/   ← nav spelling “Opthalmology”
    Cosmetic Surgery         /cosmetic/
    Gastroenterology         /gastrosurgery/
    Cardiac Surgery          /cardiac/
    Spine Surgery            /spine/
    Surgical Oncology        /oncology/
  Fertility and IVF          /fertility/
    IUI / IVF / ICSI / IMSI / PGT / TESA…  → all /fertility/
  Ayurveda                   /ayurveda-2/
    child treatments         → all /ayurveda-2/
  Dental                     /dental-2/
    child treatments         → all /dental-2/
  EmpowHER Women's Health    #  (Launching Soon)
Doctors                      /doctors-listing/
Hospitals                    /hospitals
Blog                         /blog/
About Us                     /about-us/
Contact                      /contact-us/
Enquire Now                  wa.me/918861711233
```

Footer extra: Terms `/terms/`, Privacy `/privacy/`, Newsletter, three offices.
