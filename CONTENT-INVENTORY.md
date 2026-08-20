# NewJourney Health — Content Inventory

Crawled: 18 Aug 2026 from https://newjourneyhealth.com/  
Method: WordPress REST (`/wp-json/wp/v2/pages|posts|product`) + HTML fetch of every published URL + probe of mega-menu child slugs.

This file is the content source of truth for the rebuild. **Copy must stay textually identical** unless a CONTENT-ISSUES.md item is approved.

Related files:
- `PAGE-MAP.md` — URLs and routing
- `CONTENT-ISSUES.md` — original-site problems, not corrected

---

## A. Global chrome (every marketing page)

### Brand
- Site title: `New Journey Health – Committed to Care. Designed for Safety.`
- Logo files: `NewJourney-Final-Logo` (color), `NewJourney-Logo-White`, `NewJourney-Health-Logo-White`
- Favicon: `/wp-content/uploads/2026/01/cropped-Fav-*.png`

### Meta (homepage; typical of WP)
- robots: `noindex, nofollow`
- No meta description found on homepage
- Generator: WordPress 7.0.4, WooCommerce 11.0.1, Elementor 4.2.2

### Header nav labels (exact)
Home · Treatments · Doctors · Hospitals · Blog · About Us · Contact · Enquire Now

Secondary header control: `Book a Call` (href `#`)  
Search placeholder: `Search...`

**Enquire Now** destination: `https://wa.me/918861711233`

### Treatments mega menu (exact labels)

**Health 360** — Launching Soon  
- Wellness Therapy  
- Full Body Diagnostics  
- Nutritional Healing  

**Modern Medicine**  
- Orthopedics  
- Urology  
- Gynecology  
- Opthalmology  
- Cosmetic Surgery  
- Gastroenterology  
- Cardiac Surgery  
- Spine Surgery  
- Surgical Oncology  

**Fertility and IVF**  
- IUI  
- IVF  
- ICSI  
- IMSI  
- PGT  
- TESA / PESA / Micro-TESE  

**Ayurveda**  
- Holistic Wellness  
- Abhyanga  
- Panchakarma  
- Udhvartan  
- Shirodhara  

**Dental**  
- Dental Veneers  
- Dental Implants  
- Smile Makeover  
- Maxillofacial Surgery  

**EmpowHER Women's Health** — Launching Soon  
- PostNatal Care  

Mobile/footer compact nav also uses: Orthopedic, Cosmetic, Gastro Surgery, EmpowHER Women’s Health.

### Footer (homepage exact)

Intro:  
`Doctor-led and patient-focused, NewJourney Health is a trusted medical medical tourism company & healthcare travel facilitator in India providing end-to-end support from consultation to recovery`

**Europe - Contact Office**  
- +44 75536 29821  
- 66B Peddie Street, Dundee, Scotland  
- Postcode: DD1 5LY  

**Oceania - Contact Office**  
- + 64 211817679  
- 5 Riddington Rise, Ohauiti, Tauranga, Bay of Plenty, Newzealand  
- Postcode: 3112  

**Asia - Corporate Office**  
- hello@newjourneyhealth.com  
- +91 95670 10169  
- +91 88617 11233  
- Door No 111/A, Perumpanachy P.O, Changanassery, Kottayam, Kerala, India  

**Subscribe To Our Newsletter**

Legal bar:  
- Terms & Conditions → `/terms/`  
- Copyright © 2026 Newjourney Health  
- Privacy Policy → `/privacy/`  

Social:  
- https://www.instagram.com/newjourneyhealth/  
- https://www.linkedin.com/in/newjourney-health-2178913a8/  
- https://www.youtube.com/@NewJourneyHealth  
- https://x.com/hellonewjourney  

WhatsApp widget copy: `How can I help you? :)` / `WhatsApp Message`

### Shared enquiry form fields
- Name (required)  
- E-mail Address (required)  
- Mobile Number (required, country-code select, numeric pattern)  
- Query?  
- Consent: `By checking this box, you consent to the collection and use of your data by NewJourney Health in accordance with our Privacy Policy and Terms of Use.`  
  (On specialty pages: `...by Newjourney in accordance with...`)  
- Submit: `Book Appointment Now`

### Shared block: Why NewJourney Health?
Used on specialty/category treatment pages.

H2: `Why NewJourney Health?`

| H3 | Body |
|---|---|
| End-to-End Support | Complete assistance from consultation, travel, treatment, to full recovery |
| Zero Waiting Lists | Quick consultations and faster access to treatments without delays |
| Cost Savings | High-quality treatment at significantly lower costs than many countries |
| Accredited Hospitals | Partnered with globally accredited JCI and NABH certified hospitals |
| Dedicated Assistance | Personal relationship manager guiding you through every step seamlessly |
| Travel & Aftercare | Visa, accommodation, interpreters, and complete post-treatment follow-up support |

### Shared block: specialty “Our leading specialists”
Same six cards on every specialty page:

| Specialty chip | Name | Sub |
|---|---|---|
| Dentistry | Dr. Hema Rajah | (Illustrative Profile) |
| Orthopedics | Dr. Zacharia Thomas | (Illustrative Profile) |
| Fertility & IVF | Dr. Jacob Paul | (Illustrative Profile) |
| Cardiology | Dr. Mathew Thomas | (Illustrative Profile) |
| Ophthalmology | Dr. Shary Mathew | (Illustrative Profile) |
| Oncology | Dr. Maria Thomas | (Illustrative Profile) |

CTA on card: `View Profile →`

### Shared block: specialty testimonials
H2: `Real voices, real journeys`

Quote (identical three times):  
`“l chose India because everything was easy – High standard of hygiene, access to doctors, and no waiting weeks for an implant.”`

Attributions: `– Dr Sophia` · `– Dr Isabella` · `– Dr Niti Pall`

### Shared block: specialty hip FAQs
H2: `Frequently Asked Questions`

**Are hip operations safe?**  
Hip replacement surgery is generally considered safe, but the level of safety depends greatly on the expertise of the surgical team and the qualitystandards of the hospital where the procedure is performed. Not all centres follow rigorous protocols or work with fully vetted specialists, sopatients need to choose a provider that meets recognised international benchmarks. TMTC partners only with India’s leading hip surgeon practisingin hospitals accredited by JCI and NABH – two trusted bodies for patient safety and clinical quality. Many of our surgeons have UK training andextensive NHS experience, ensuring that every procedure is performed with the highest level of precision, safety and care.

**How does physical therapy fit into the recovery journey after hip replacement, especially during the first week?**  
Physical therapy is a key part of recovery after hip replacement, especially in the first week. Guided exercises begin within the first 24 hours to helpyou move safely, improve flexibility and start rebuilding strength. Along with this, you receive support with wound care, pain management, nutritionand regular medical monitoring to ensure steady progress. TMTC’s structured rehabilitation and continuous clinical supervision make this earlyphase smoother, safer and more confident as you begin walking and regaining mobility.

**How much does hip replacement cost in India?**  
Hip replacement surgery in India costs far less than in the UK, but the actual cost can vary depending on the facility, the type and quality of thesurgery, the surgeon’s experience, and the amount of rehabilitation and aftercare that is involved. Many services advertise low charges, but they don’t include important things like physiotherapy, prescriptions or follow-up care, which might lead to costs that come up later. T MTC offers clear,all-inclusive packages that include high-quality implants, recognised hospitals, and full post-operative care. This means that you know the full costup front and there are no hidden fees.

**What is the recovery time for a hip surgery?**  
Recovery varies from person to person. Most patients can return to light activities within 3-6 weeks and resume normal activities within 3-6 months.Full recovery typically takes 6-12 months with proper rehabilitation.

**What is total hip replacement surgery?**  
Total hip replacement surgery involves removing a damaged hip joint and replacing it with artificial components to restore smooth, pain-freemovement. It’s recommended when severe arthritis, injury or joint degeneration makes daily activities difficult and other treatments no longer help.At T MTC specialists and advanced surgical techniques ensure a safe procedure and a well-supported recovery journey.

### Shared block: specialty enquiry band
H2: `Ready to begin your new journey to better health?`  
Body: `Your care journey matters to us. We’re here to answer your questions, understand your needs, and guide you toward the care that’s right for you.`  
(Contact/home variant below.)

Hero dual CTAs on specialties: `Book a consultation` · `Chat with an expert`

---

## B. Homepage `/`

**Document title:** New Journey Health – Committed to Care. Designed for Safety.  
**H1:** World-class healthcare meets a new journey  
**CTA:** Book your consultation  
Scroll affordance present.

### Treatments carousel
H2: `The treatments we offer,with no wait time`  
(Rendered with a line break / comma join: “The treatments we offer, with no wait time”)

| Card title | Subtitle | Image alt |
|---|---|---|
| Health 360 | Diagnostics and Wellness Programmes | Wellness 360 |
| Modern Medicine | Evidence Based Diagnostics & Treatment | Modern Medicine |
| Fertility Care | Personalized Fertility & IVF Care | Fertility Care |
| Ayurveda | Preventive and Integrative Care | Ayurveda |
| Dental | Corrective & Cosmetic Dentistry | Dental |

Card CTA: `Learn More →`  
Health 360 image file also titled Wellness 360.

### Patient Journey
Eyebrow: `YOUR CARE, SIMPLIFIED`  
H2: `Patient Journey`  
Sub: `Seamless steps from first enquiry to returning home — we're with you every step of the way.`

| # | title | short | fullDesc | image |
|---|---|---|---|---|
| 1 | Make an Enquiry | Share your concerns | Begin your healthcare journey by reaching out to us, sharing your concerns and needs. Our team responds within hours to understand your medical condition, preferences, and urgency. We're here to listen and guide you through the first crucial step. | `/wp-content/uploads/2026/04/1.jpeg` |
| 2 | Counselling from Our Team | Expert guidance | Receive personalized guidance and support from our experienced team to understand your options and make informed decisions. We explain procedures, doctor profiles, and help you choose what's best for your specific medical condition and budget. | `2.jpeg` |
| 3 | Personalised Treatment Plan | Tailored care | Tailored just for you, our comprehensive treatment plan ensures you receive the best care. Our team coordinate with top specialists to design a timeline, cost estimate, and recovery roadmap that aligns with your medical needs and personal preferences. | `3.jpeg` |
| 4 | Medical Visa Application | Visa assistance | We simplify the process, assisting you in securing the necessary medical visa for your treatment journey. We provides invitation letters, documentation support, and embassy guidance to ensure a smooth visa approval process. | `4.jpeg` |
| 5 | Travel Booking Assistance | Flights & stays | Let us handle the logistics - from flights to accommodations, ensuring a smooth and stress-free travel experience. We coordinate airport transfers, comfortable lodging near hospitals, and all transportation needs during your stay. | `5.jpeg` |
| 6 | Arrive for Your Treatment | Seamless arrival | Step into a seamless transition from arrival to the medical facility, where your healing journey begins. Our patient concierge welcomes you at the airport and coordinates with the hospital front desk for a hassle-free admission process. | `6.jpeg` |
| 7 | Post-Surgery Care | Recovery support | Our support doesn't end with the procedure. We provide attentive post-surgery care to aid your recovery and well-being - physio coordination, follow-up consults, medication management, and a 24/7 helpline for any concerns. | `7.jpeg` |
| 8 | Return Home | Safe journey back | Once you're ready, we assist you in a safe and comfortable journey back home, marking the completion of your transformative healthcare experience. Post-recovery follow-ups continue digitally to ensure your complete well-being. | `8.jpeg` |

UI chrome: `Step 1 of 8` · `Learn More →`

### Concierge
H2: `Your personal healthcare concierge`

| H3 | Body |
|---|---|
| Accredited Hospitals | Internationally accredited hospitals for high-quality care |
| Admission, Appointment, Pharma Care | Complete coordination of medical logistics |
| Multi Lingual Translation Support | Convey your needs in the language you're most comfortable in |
| Personalised Treatment Plans | A treatment journey tailored to all your preferences and needs |
| Travel Booking Assistance | Seamless booking assistance for your healthcare journey |
| Easy Medical Visa Approvals | Dedicated assistance for medical visa requirements |
| Accommodation Options | Near the hospital and matching your budget and needs |
| Airport Transfers & Logistics | Reliable airport transfers and hassle-free commuting |

### Cost comparison
H2: `Get world-class treatment,`  
H2: `without draining your lifetime savings.`  
H2: `The India Advantage in Healthcare`

| Treatment | UK Price | US Price | India (TMTC Price) |
|---|---|---|---|
| Hip Replacement (U/L) | £17,000 | £17,000 | £5,000 |
| Knee Replacement (U/L) | £16,000 | £17,000 | £5,000 |
| 3 Dental Implants (with crowns) | £9,000 | £17,000 | £3,000 |
| IVF Self Cycle with Donor Eggs | £9,000 | £17,000 | £4,500 |
| Full-Body MOT | £8,000 | £17,000 | £2,000 |

Column header is **India (TMTC Price)** — preserve.

### Comfort
H2: `Comfort, care and rejuvenation`  
- Nutritionist-Designed Meal Plans  
- 24/7 Doctor-On-Call Services  
- Nursing and Physiotherapy Services  
- Yoga and Meditation Services  

### Doctors
H2: `Meet our doctors`  
Same six illustrative doctors as shared block.

### Hospitals
H2: `Leading hospitals, by your side`  
Listing cards: Illustrative Hospital 1–7 (see Hospitals page).

### Press
H2: `We are featured in`  
Image carousel (press logos; alts mostly empty / filename-like).

### Testimonials (homepage-specific — do not replace with specialty versions)
H2: `Real voices, real journeys`

1. `I chose India because everything was easy—high standards of hygiene, quick access to doctors, and no waiting weeks for an implant. NewJourney Health made everything perfect` — Sophia  
2. `I chose India because the whole process felt straightforward—clean facilities, fast medical access, and no long delays for treatment. NewJourney Health handled everything smoothly and made the experience seamless from start to finish.` — Isabella  
3. `I chose India because the entire process was seamless—excellent hygiene standards, immediate access to experienced doctors, and no long waiting times for my implant. NewJourney Health handled everything perfectly, with every detail taken care of and included.` — Niti Pall  

### Blog teaser
H2: `Latest news & stories`  
Three posts: Ayurveda, Dentistry, Orthopedics (see Blog).

### Homepage FAQs
H2: `Frequently asked questions`  
Sub: `Know more about your healthcare journey with NewJourney Health`

**What is NewJourney Health and how can it assist me?**  
NewJourney Health is your medical value travel facilitator (MVTF) that connects you with top hospitals and leading doctors worldwide. You can book appointments regardless of your location, and we manage all logistics to make your healthcare journey smooth and hassle-free.

**Who will guide me in connecting with doctors?**  
A dedicated Patient Relationship Manager will be assigned to you. They will review your case, provide a treatment plan, share cost estimates, and guide you on all necessary documents so you’re fully prepared.

**Do you provide healthcare plans at an affordable price?**  
Yes, NewJourney Health offers competitive treatment plans at top hospitals, assists with insurance, and ensures cost-effective care. You’ll receive quotes from accredited NABH/JCI hospitals to choose the best option.

**Is the language barrier taken care?**  
Yes. We provide professional translators to ensure clear communication between patients and healthcare providers throughout your treatment journey.

**How do I book an appointment?**  
Appointments can be booked directly through our platform. Your Patient Relationship Manager will coordinate with the hospital and doctor on your behalf.

**How long does it take to receive a treatment plan after making initial contact?**  
After sharing all the medical reports and relevant clinical information, most patients receive a preliminary treatment plan within 48–72 hours, depending on the complexity of the case

### Homepage enquiry
H2: `Do you still have a query?`  
H2: `Ready to begin your new journey to better health?`  
`We’re here to address your questions, understand your needs, and guide you to the care that suits you best.`

---

## C. Modern Medicine `/modern-medicine-2/`

Title: Modern Medicine – New Journey Health  
H2: `Advanced, Evidence-Based Care Across Specialties`  
P: `Modern medicine brings together cutting-edge technology, globally trained specialists, and patient-focused care pathways to deliver safe, effective, and timely treatment. From diagnosis to recovery, our approach ensures precision, comfort, and continuity at every stage of your healthcare journey.`  
CTAs: Book a consultation · Chat with an expert  
Then: Why NewJourney Health?  
H2: `Our Specialties`

| H2 | bullets |
|---|---|
| Orthopedics | Focused on the assessment and management of musculoskeletal conditions affecting bones, joints, and mobility. / Recommended when persistent groin pain and restricted hip movement continue despite treatment. |
| Urology | Dedicated to the clinical assessment of urinary tract health and male reproductive wellbeing, with a strong emphasis on accurate diagnosis and patient comfort. / Supports long-term health management by addressing underlying concerns and ensuring continuity of care through every stage. |
| Gynecology | Provides comprehensive support for women’s health, including reproductive wellbeing, hormonal balance, and preventive care across different life stages. / Focuses on early identification, personalised guidance, and ongoing health management to support long-term wellbeing. |
| Ophthalmology | Specialised in the assessment and monitoring of eye health and vision, ensuring early detection of potential concerns. / Aims to preserve and enhance visual function through continuous care and long-term management of eye conditions. |
| Cosmetic Surgery | Focused on enhancing physical appearance and individual confidence through carefully planned, medically guided care. / Emphasises safety, personalised expectations, and achieving natural, balanced outcomes aligned with patient goals. |
| Gastroenterology | Dedicated to the evaluation of digestive system health, including conditions affecting the stomach, intestines, liver, and pancreas. / Prioritises accurate diagnosis and long-term management to support overall digestive health and patient comfort. |
| Cardiac Surgery | Focused on comprehensive evaluation of heart health and cardiovascular conditions through advanced clinical assessment. / Supports long-term cardiac function and overall wellbeing through structured, patient-centred care pathways. |
| Spine Surgery | Addresses conditions affecting the spine and nervous system with a focus on accurate evaluation and patient-specific care planning. / Aims to improve comfort, restore functional ability, and support long-term mobility and quality of life. |
| Surgical Oncology | Focused on the clinical evaluation and management of cancer through early identification and coordinated care approaches. / Emphasises multidisciplinary support, patient guidance, and long-term wellbeing throughout the care journey. |

Then: specialists, testimonials, enquiry (no FAQ block on this hub).

---

## D. Specialty pages — treatments offered + long-form copy

Each page also includes Why NewJourney, specialists, specialty testimonials, hip FAQs, enquiry band.

### Orthopedics `/orthopedics/`
H2: `Your Mobility, Restored with Expert Orthopedic Care`  
P: `When movement hurts, life slows down. With advanced treatments, skilled specialists, and personalized care, regain strength, flexibility, and the freedom to move with confidence.`  
H2: `Treatments we offer` — Hip Replacement Surgery · Knee Replacement Surgery · Shoulder Replacement Surgery · Arthroscopy & Minimally Invasive Surgery · ACL (Anterior Cruciate Ligament) Treatment · Meniscal Repair · Hand and Wrist Surgery · Foot and Ankle Surgery · Sports Injury  
H2: `Comprehensive Orthopedic Solutions`

**Hip Replacement Surgery**  
- Advised for individuals experiencing chronic joint pain, stiffness, or reduced mobility due to conditions like arthritis or injury.  
- Commonly associated with conditions such as osteoarthritis, rheumatoid arthritis, or avascular necrosis.  
- Recommended when persistent groin pain and restricted hip movement continue despite treatment.

**Knee Replacement Surgery**  
- Advised for individuals with significant knee joint deterioration affecting movement and stability.  
- Commonly associated with severe degeneration, chronic inflammation, or post-traumatic joint damage.  
- Recommended when pain, stiffness, and instability limit daily activities.

**Shoulder Replacement Surgery**  
- Advised for individuals with severe shoulder joint damage impacting arm mobility.  
- Commonly associated with conditions such as rotator cuff tear arthropathy or complex fractures.  
- Recommended when pain restricts overhead movement and routine activities.

**Arthroscopy & Minimally Invasive Surgery**  
- Advised for individuals requiring diagnosis and treatment of joint issues with minimal tissue disruption.  
- Commonly associated with conditions such as loose bodies, impingement, or synovial inflammation.  
- Recommended for precise diagnosis and targeted treatment with faster recovery.

**ACL (Anterior Cruciate Ligament) Treatment**  
- Advised for individuals with ligament injuries affecting joint stability.  
- Commonly associated with acute injuries leading to instability or joint buckling.  
- Recommended for active individuals aiming to restore strength, stability, and function.

**Meniscal Repair**  
- Advised for individuals requiring preservation of knee cartilage and joint cushioning.  
- Commonly associated with meniscal tears such as longitudinal or bucket-handle types.  
- Recommended when symptoms like knee locking, catching, or restricted movement are present.

**Hand and Wrist Surgery**  
- Advised for individuals experiencing pain, numbness, or reduced function in the hand and wrist.  
- Commonly associated with conditions such as carpal tunnel syndrome, trigger finger, or fractures.  
- Recommended when fine motor skills and daily activities are significantly affected.

**Foot and Ankle Surgery**  
- Advised for individuals with structural issues affecting foot and ankle function.  
- Commonly associated with conditions such as bunions, tendon injuries, or fractures.  
- Recommended when pain or deformity interferes with walking and weight-bearing activities.

**Sports Injury**  
- Advised for individuals with musculoskeletal injuries related to physical activity.  
- Commonly associated with conditions such as stress fractures, dislocations, or tendon injuries.  
- Recommended for individuals seeking a structured recovery to safely return to active lifestyles.

### Urology `/urology/`
H2: `Expert Urology Care, Seamlessly Connected`  
P: `Regain comfort and confidence with advanced urology care guided by international specialists. From diagnosis to recovery, every step is designed for precision, privacy, and the best outcomes.`  
Treatments: PCNL (Percutaneous Nephrolithotomy) · ESWL (Shock Wave Lithotripsy) · URS (Ureteroscopy) · Cystoscopy · TURP (Transurethral Resection of Prostate) · Prostatectomy · Nephrectomy · Vasectomy · Pyeloplasty  
H2: `Comprehensive Urological Solutions` / `Complete care for urinary and reproductive health, ensuring accurate diagnosis, effective treatment, and recovery.`

**PCNL** — Advised for individuals with large or complex kidney stones affecting normal kidney function. / Commonly associated with stones larger than 2 cm, staghorn calculi, or cases unresponsive to other treatments. / Recommended when there is significant obstruction or a high stone burden.

**ESWL** — Advised for individuals seeking non-invasive management of kidney or upper ureteral stones. / Commonly associated with small to medium-sized stones. / Recommended for individuals preferring treatment without surgical incisions.

**URS** — Advised for individuals requiring precise diagnosis and treatment of ureter-related conditions. / Commonly associated with stones in the mid or lower ureter and certain abnormalities. / Recommended when there is blockage, pain, or blood in the urine.

**Cystoscopy** — Advised for individuals requiring detailed examination of the bladder and urethra. / Commonly associated with recurrent infections, bleeding, or suspected abnormalities. / Recommended when accurate visualization of the lower urinary tract is needed.

**TURP** — Advised for individuals experiencing urinary issues due to prostate enlargement. / Commonly associated with benign prostatic hyperplasia causing obstruction. / Recommended when symptoms such as weak flow, frequent urination, or urinary retention occur.

**Prostatectomy** — Advised for individuals requiring partial or complete removal of the prostate gland. / Commonly associated with prostate cancer or severe enlargement. / Recommended when definitive treatment or long-term symptom relief is necessary.

**Nephrectomy** — Advised for individuals requiring removal of a diseased or non-functioning kidney. / Commonly associated with tumors, severe infections, or trauma. / Recommended when preserving the kidney is not possible or safe.

**Vasectomy** — Advised for individuals seeking a permanent method of male contraception. / Commonly associated with long-term family planning decisions. / Recommended for individuals looking for a one-time, highly effective solution.

**Pyeloplasty** — Advised for individuals with structural blockages affecting urine flow from the kidney. / Commonly associated with ureteropelvic junction obstruction leading to kidney swelling. / Recommended when there is a risk of kidney damage due to poor drainage.

### Gynecology `/gynecology/`
H2: `Compassionate Gynecology Care You Can Trust`  
P: `Your health deserves expert attention at every stage. With experienced specialists and personalized care, receive treatment focused on comfort, safety, and long-term wellbeing.`  
Treatments: Open and Laparoscopic Myomectomy · Open and Laparoscopic Hysterectomy · Vaginal Hysterectomy · Vaginal Vault Repair · Cystocele Repair · Ovarian Tumor Surgery · Polypectomy · Hysteroscopy · Colposcopy  
H2: `Comprehensive Gynecological Solutions` / `Complete care for women’s reproductive health, ensuring accurate diagnosis, effective treatment, and overall well-being.`

**Open and Laparoscopic Myomectomy** — Advised for individuals with uterine fibroids affecting menstrual cycles, fertility, or causing pelvic discomfort. / Commonly associated with symptomatic leiomyomas leading to heavy bleeding or pressure symptoms. / Recommended for individuals wishing to preserve the uterus for future fertility.

**Open and Laparoscopic Hysterectomy** — Advised for individuals requiring long-term management of severe uterine conditions impacting quality of life. / Commonly associated with conditions such as adenomyosis, endometriosis, abnormal bleeding, or malignancies. / Recommended when definitive treatment is required and other therapies have failed.

**Vaginal Hysterectomy** — Advised for individuals suitable for managing uterine conditions without abdominal incisions. / Commonly associated with uterine prolapse or benign uterine disorders. / Recommended for individuals eligible for a less invasive surgical approach.

**Vaginal Vault Repair** — Advised for individuals experiencing pelvic organ prolapse following hysterectomy. / Commonly associated with weakening of pelvic support structures leading to vaginal vault prolapse. / Recommended when there is discomfort, pressure, or functional impairment affecting daily activities.

**Cystocele Repair** — Advised for individuals with bladder displacement into the vaginal wall. / Commonly associated with anterior vaginal wall prolapse due to weakened pelvic floor muscles. / Recommended when urinary symptoms or visible bulging are present.

**Ovarian Tumor Surgery** — Advised for individuals with abnormal growths affecting the ovaries. / Commonly associated with cysts, tumors, or suspected malignancies. / Recommended when masses are large, persistent, or potentially cancerous.

**Polypectomy** — Advised for individuals with abnormal tissue growths within the uterus or cervix. / Commonly associated with polyps causing irregular bleeding or fertility concerns. / Recommended when localized growths are detected through imaging or evaluation.

**Hysteroscopy** — Advised for individuals requiring direct evaluation and treatment of intrauterine conditions. / Commonly associated with fibroids, adhesions, or unexplained infertility. / Recommended when detailed assessment of the uterine cavity is necessary.

**Colposcopy** — Advised for individuals requiring detailed examination of cervical abnormalities. / Commonly associated with abnormal screening results or HPV-related changes. / Recommended for further evaluation of suspicious cervical findings.

### Ophthalmology `/ophthalmology/`
H2: `Clear Vision with World-Class Eye Care`  
P: `See life more clearly with advanced ophthalmology treatments led by expert teams. Modern technology and precise care ensure the best results for your vision.`  
Treatments: Cataract Surgery · Eye Muscle Repair · Vitreoretinal Surgery · LASIK and Refractive Surgery · Glaucoma Surgery · Pterygium Surgery · Oculoplastic Surgery · Diabetic Retinopathy · Corneal Transplant and Keratoplasty  
H2: `Comprehensive Ophthalmology Solutions` / `Complete care for eye health and vision, ensuring precise diagnosis, effective treatment, and long-term visual well-being.`

**Cataract Surgery** — Advised for individuals with reduced vision due to lens opacity affecting daily activities. / Commonly associated with age-related changes, congenital conditions, or secondary lens clouding. / Recommended when symptoms such as blurred vision, glare, or difficulty seeing at night interfere with quality of life.

**Eye Muscle Repair** — Advised for individuals with misalignment of the eyes affecting coordination and vision. / Commonly associated with conditions such as strabismus or persistent double vision. / Recommended when eye alignment impacts visual clarity or depth perception.

**Vitreoretinal Surgery** — Advised for individuals with serious conditions affecting the retina and vitreous. / Commonly associated with retinal detachment, bleeding, or structural retinal disorders. / Recommended when there is sudden vision loss or significant visual disturbances.

**LASIK and Refractive Surgery** — Advised for individuals seeking correction of vision and reduced dependence on glasses or contact lenses. / Commonly associated with refractive errors such as nearsightedness, farsightedness, or astigmatism. / Recommended for individuals looking for long-term vision correction.

**Glaucoma Surgery** — Advised for individuals with elevated eye pressure not adequately controlled by medication. / Commonly associated with progressive glaucoma and risk to the optic nerve. / Recommended when there is an ongoing risk of vision loss or optic nerve damage.

**Pterygium Surgery** — Advised for individuals with abnormal tissue growth on the eye surface. / Commonly associated with irritation, redness, or obstruction of vision. / Recommended when the growth affects vision or causes persistent discomfort.

**Oculoplastic Surgery** — Advised for individuals requiring restoration of function or appearance of the eyelids and surrounding structures. / Commonly associated with drooping eyelids, inward turning lids, or tear duct blockages. / Recommended when vision is obstructed or structural correction is necessary.

**Diabetic Retinopathy** — Advised for individuals with vision complications caused by diabetes. / Commonly associated with abnormal blood vessel growth or leakage in the retina. / Recommended when there is progressive retinal damage affecting vision.

**Corneal Transplant and Keratoplasty** — *same three bullets as Diabetic Retinopathy on the live site.*

### Cosmetic `/cosmetic/`
H2: `Confidence, Redefined with Cosmetic Expertise`  
P: `Enhance your natural beauty with tailored cosmetic treatments. Skilled surgeons and advanced techniques help you achieve results that feel as good as they look.`  
Treatments: Rhinoplasty (Nose Surgery) · Chin Augmentation (Genioplasty) · Breast Augmentation / Reduction · Liposuction & Body Contouring · Gynecomastia Surgery · Facelift & Anti-Aging Procedures · Tummy Tuck (Abdominoplasty) · Brazilian Butt Lift (BBL) · Scar Revision Surgery  
H2: `Comprehensive Cosmetic Solutions` / `Complete care for aesthetic enhancement and skin health, ensuring personalized treatments, safe procedures, and lasting results.`

**Rhinoplasty** — Advised for individuals seeking improvement in nasal shape or correction of breathing-related concerns. *(bullet duplicated)* / Recommended for individuals aiming for enhanced facial balance or improved airflow.

**Chin Augmentation** — Advised for individuals seeking enhancement of chin projection and overall facial harmony. / Commonly associated with a recessed chin or imbalance in facial proportions. / Recommended for individuals looking for a more defined jawline and profile.

**Breast Augmentation / Reduction** — Advised for individuals seeking modification of breast size, shape, or symmetry. / Commonly associated with volume loss, overly large breasts, or disproportion. / Recommended for individuals seeking aesthetic improvement or physical relief.

**Liposuction & Body Contouring** — Advised for individuals looking to remove stubborn fat deposits and refine body contours. / Commonly associated with localized fat resistant to diet and exercise. / Recommended for individuals at a stable weight seeking targeted body shaping.

**Gynecomastia Surgery** — Advised for individuals seeking reduction of excess male breast tissue and improved chest contour. / Commonly associated with glandular enlargement or fat accumulation. / Recommended for individuals experiencing discomfort or cosmetic concerns.

**Facelift & Anti-Aging Procedures** — Advised for individuals seeking restoration of youthful facial contours. / Commonly associated with sagging skin, wrinkles, and loss of firmness. / Recommended for individuals looking for long-term facial rejuvenation.

**Tummy Tuck** — Advised for individuals seeking improvement in abdominal contour and firmness. / Commonly associated with loose skin or weakened abdominal muscles. / Recommended after significant weight loss or pregnancy when natural tightening is insufficient.

**BBL** — Advised for individuals seeking enhancement of buttock shape and volume using natural fat transfer. / Commonly associated with flat or asymmetrical contours. / Recommended for individuals looking for a fuller and more contoured appearance.

**Scar Revision Surgery** — Advised for individuals seeking improvement in the appearance or function of scars. / Commonly associated with thick, raised, or restrictive scar tissue. / Recommended for individuals with noticeable or uncomfortable scars.

### Gastrosurgery `/gastrosurgery/`
H2: `Advanced Gastro Surgery Care, Focused on You`  
P: `Digestive health issues can impact every part of life. With expert-led gastro surgery, modern techniques, and personalized care, receive the right treatment at the right time for a smoother recovery and lasting relief.`  
Treatments: Hernia Surgery · Gastric Bypass Surgery · Gallbladder Surgery · Pancreatic Surgery · Colectomy · ERCP · Colonoscopy and Endoscopy · Hemorrhoidectomy · Fistula Surgery  
H2: `Comprehensive Gastrointestinal Care` / `Complete care for digestive health, offering thorough diagnosis, personalized treatment, and continuous support for better comfort, recovery, and long-term wellness.`

**Hernia Surgery** — Advised for individuals requiring repair of organ protrusions through the abdominal wall. / Commonly associated with inguinal, umbilical, or incisional hernias. / Recommended for individuals experiencing painful bulges or at risk of bowel complications.

**Gastric Bypass Surgery** — Advised for individuals seeking surgical support for significant weight loss. / Commonly associated with morbid obesity and metabolic conditions such as Type 2 diabetes. / Recommended for individuals with high BMI who have not responded to lifestyle interventions.

**Gallbladder Surgery** — Advised for individuals requiring removal of the gallbladder due to stones or inflammation. / Commonly associated with gallstones (cholelithiasis) or cholecystitis. / Recommended for individuals experiencing biliary colic or digestive complications.

**Pancreatic Surgery** — Advised for individuals with conditions affecting the pancreas. / Commonly associated with pancreatic cancer, chronic pancreatitis, or cystic lesions. / Recommended for individuals with localized tumors or severe inflammation.

**Colectomy** — Advised for individuals requiring removal of part or all of the colon. / Commonly associated with colon cancer, diverticulitis, or inflammatory bowel disease. / Recommended for individuals with malignant or severely diseased segments.

**ERCP** — Live heading: `ERCPERCP (Endoscopic Retrograde Cholangiopancreatography)` — Advised for individuals requiring combined endoscopic and imaging-based treatment of biliary or pancreatic duct conditions. / Commonly associated with bile duct stones, strictures, or tumors. / Recommended for individuals with jaundice or gallstone-related pancreatitis.

**Colonoscopy and Endoscopy** — Advised for individuals requiring internal evaluation of the gastrointestinal tract. / Commonly associated with ulcers, polyps, bleeding, or early-stage cancers. / Recommended for individuals undergoing colorectal cancer screening or evaluation of abdominal symptoms.

**Hemorrhoidectomy** — Advised for individuals requiring surgical removal of severe or prolapsed hemorrhoids. / Commonly associated with advanced internal hemorrhoids or thrombosed external hemorrhoids. / Recommended for individuals with persistent bleeding, pain, or failure of conservative treatments.

**Fistula Surgery** — Advised for individuals requiring correction of abnormal tunnels between the anal canal and skin. / Commonly associated with anal fistulas following perianal abscesses. / Recommended for individuals with recurrent drainage, pain, or infection.

### Cardiac `/cardiac/`
H2: `Heart Care You Can Rely On`  
P: `When it comes to your heart, timing matters. Access world-class cardiac care with experienced surgeons, advanced procedures, and a focus on safe, successful outcomes.`  
Treatments: CABG (Bypass Surgery) · TAVR / TAVI · Transcatheter Mitral Repair/Replacement · ASD / VSD Closure · Balloon Valvotomy · Aortic Aneurysm Repair (EVAR/TEVAR) · Coronary Angiography and Angioplasty · Pacemaker and ICD Implantation · Paediatric Heart Surgery  
H2: `Comprehensive Cardiology Solutions` / `Complete care for heart health, providing precise diagnosis, personalized treatment, and ongoing support for optimal cardiovascular wellness.`

**CABG** — Advised for individuals requiring restoration of blood flow around blocked coronary arteries. / Commonly associated with severe coronary artery disease. / Recommended for individuals with multiple arterial blockages or unsuccessful angioplasty.

**TAVR / TAVI** — Advised for individuals requiring minimally invasive aortic valve replacement. / Commonly associated with severe aortic stenosis. / Recommended for individuals at high surgical risk unsuitable for open-heart surgery.

**Transcatheter Mitral Repair/Replacement** — Advised for individuals requiring correction of mitral valve dysfunction. / Commonly associated with mitral regurgitation or stenosis causing heart failure symptoms. / Recommended for individuals with symptomatic mitral valve disease at high surgical risk.

**ASD / VSD Closure** — Advised for individuals requiring closure of congenital heart defects between chambers. / Commonly associated with atrial or ventricular septal defects affecting blood flow. / Recommended for individuals with significant defects requiring correction.

**Balloon Valvotomy** — Advised for individuals requiring widening of narrowed heart valves. / Commonly associated with mitral, aortic, or pulmonary valve stenosis. / Recommended for individuals with restricted blood flow due to stiff valve leaflets.

**Aortic Aneurysm Repair (EVAR/TEVAR)** — Advised for individuals requiring treatment of weakened or bulging sections of the aorta. / Commonly associated with abdominal or thoracic aortic aneurysms at risk of rupture. / Recommended for individuals with life-threatening arterial weakening.

**Coronary Angiography and Angioplasty** — Advised for individuals requiring visualization and treatment of narrowed coronary arteries. / Commonly associated with heart attacks or angina. / Recommended for individuals with suspected coronary blockages causing chest pain.

**Pacemaker and ICD Implantation** — Advised for individuals requiring management of abnormal heart rhythms. / Commonly associated with bradycardia or life-threatening arrhythmias. / Recommended for individuals with electrical conduction disorders or high cardiac risk.

**Paediatric Heart Surgery** — Advised for individuals (infants and children) requiring correction of congenital heart defects. / Commonly associated with structural abnormalities such as Tetralogy of Fallot or valve malformations. / Recommended for individuals with congenital heart conditions affecting normal function.

### Spine `/spine/`
H2: `Spine Care That Gets You Moving Again`  
P: `Back and spine issues can disrupt everyday life. With expert care and precise treatments, regain strength, flexibility, and freedom of movement.`  
Treatments: Laminectomy and Foraminotomy · Discectomy and Microdiscectomy · Spinal Osteotomy · Spinal Fusion · Artificial Disc Replacement · Kyphoplasty / Vertebroplasty · Endoscopic Spine Surgery · Scoliosis Correction Surgery  
H2: `Comprehensive Spine Solutions` / `Complete care for spinal health, offering thorough assessment, personalized treatment, and continuous support for improved mobility and pain relief.`

**Laminectomy and Foraminotomy** — Advised for individuals requiring decompression of spinal nerves. / Commonly associated with spinal stenosis and nerve root compression. / Recommended for individuals experiencing leg pain, numbness, or neurogenic claudication.

**Discectomy and Microdiscectomy** — Advised for individuals requiring removal of herniated disc material. / Commonly associated with herniated discs causing sciatica. / Recommended for individuals with persistent sharp leg pain unresponsive to conservative care.

**Spinal Osteotomy** — Advised for individuals requiring correction of severe spinal alignment issues. / Commonly associated with kyphosis or flat-back syndrome. / Recommended for individuals with deformities affecting posture, mobility, or breathing.

**Spinal Fusion** — Advised for individuals requiring stabilization of the spine by joining vertebrae. / Commonly associated with degenerative disc disease, spondylolisthesis, or instability. / Recommended for individuals with chronic pain caused by abnormal spinal motion.

**Artificial Disc Replacement** — Advised for individuals requiring replacement of a damaged spinal disc while preserving motion. / Commonly associated with degenerative disc disease. / Recommended for individuals seeking to maintain spinal flexibility and avoid fusion.

**Kyphoplasty / Vertebroplasty** — Advised for individuals requiring stabilization of fractured vertebrae. / Commonly associated with osteoporotic compression fractures. / Recommended for individuals with severe localized back pain due to vertebral collapse.

**Endoscopic Spine Surgery** — Advised for individuals seeking minimally invasive treatment for spinal conditions. / Commonly associated with disc herniations or localized spinal stenosis. / Recommended for individuals preferring faster recovery with minimal tissue disruption.

**Scoliosis Correction Surgery** — Advised for individuals requiring correction of abnormal spinal curvature. / Commonly associated with adolescent idiopathic scoliosis or degenerative spinal curves. / Recommended for individuals with progressive deformities affecting function or appearance.

### Oncology `/oncology/`
H2: `Advanced Cancer Care, Centered Around You`  
P: `Facing cancer is never easy, but the right care makes a difference. Benefit from advanced oncology treatments, expert teams, and compassionate support throughout your journey.`  
Treatments: Gastrointestinal/Colorectal Cancer · Gynaecological Cancers · Breast Cancer · Pancreatic Cancer · Lung Cancer · Kidney Cancer · Brain Tumors · Liver Cancer · Prostate Cancer  
H2: `Comprehensive Oncology Solutions` / `Advanced care for cancer, offering thorough diagnosis, individualized treatment plans, and compassionate support at every stage.`

**Gastrointestinal/Colorectal Cancer** — Advised for individuals requiring treatment of cancers affecting the digestive tract. / Commonly associated with tumors in the stomach, colon, or rectum. / Recommended for individuals diagnosed with malignant growths in the bowel.

**Gynaecological Cancers** — Advised for individuals requiring treatment of cancers affecting female reproductive organs. / Commonly associated with uterine, cervical, or ovarian malignancies. / Recommended for individuals diagnosed with early or advanced gynecological cancers.

**Breast Cancer** — Advised for individuals requiring management of cancerous growth in breast tissue. / Commonly associated with abnormal lumps or biopsy-confirmed malignancy. / Recommended for individuals requiring surgical removal or targeted treatment of tumors.

**Pancreatic Cancer** — Advised for individuals requiring treatment of cancers affecting the pancreas. / Commonly associated with localized pancreatic tumors or certain advanced/metastatic conditions. / Recommended when surgical removal (such as resection) is feasible for effective disease control.

**Lung Cancer** — Advised for individuals requiring surgical treatment of lung cancer. / Commonly associated with localized lung tumors. / Recommended when the cancer is confined and operable. *(block duplicated on live page)*

**Kidney Cancer** — Advised for individuals requiring treatment of cancers affecting the Kidney or surrounding urinary structures. / Commonly associated with renal masses, tumors, or abnormal growths detected in the kidneys. / Recommended for individuals diagnosed through imaging (CT, MRI, ultrasound) or confirmed via biopsy.

**Brain Tumors** — Advised for individuals with abnormal growths within the brain requiring intervention. / Commonly associated with neurological symptoms or imaging findings. / Recommended when tumors affect brain function or increase intracranial pressure.

**Liver Cancer** — Advised for individuals requiring treatment of malignant tumors within the liver. / Commonly associated with primary liver cancer or metastatic disease. / Recommended when the disease is localized and surgically manageable.

**Prostate Cancer** — Advised for individuals requiring treatment of cancer in the prostate gland. / Commonly associated with elevated PSA levels or confirmed malignancy. / Recommended for individuals requiring definitive surgical or oncological management.

---

## E. Fertility `/fertility/`

H2: `World-Class Fertility Care, Without Borders`  
P: `Take the next step in your parenthood journey with expert-led fertility and IVF care. With seamless coordination and advanced treatments, you’re supported every step of the way.`  
Treatments we offer: Intrauterine Insemination (IUI) · IVF (In Vitro Fertilization) · ICSI (Intracytoplasmic Sperm Injection) · IMSI (Intracytoplasmic Sperm Injection) · Preimplantation Genetic Testing (PGT) · Endometriosis-related Infertility Treatment · Hysterosalpingography (HSG) · Laparoscopic Ovarian Drilling (LOD) · Frozen Embryo Transfer (FET) · Sperm Retrieval (TESA / PESA / Micro-TESE)

H2: `Comprehensive Fertility Solutions`  
P: `Complete care for reproductive health and conception, ensuring accurate diagnosis, personalized treatment, and ongoing support throughout the journey.`

**IUI** — Advised for individuals seeking an initial fertility treatment to improve chances of conception. / Commonly associated with unexplained infertility, mild male factor issues, or cervical concerns. / Recommended for individuals preferring a less invasive reproductive option.

**IVF** — Advised for individuals requiring advanced fertility support when natural conception is difficult. / Commonly associated with tubal issues, endometriosis, or age-related fertility decline. / Recommended for individuals who have not achieved success with simpler treatments.

**ICSI** — Advised for individuals requiring assisted fertilization in complex cases. / Commonly associated with severe male infertility or poor sperm quality. / Recommended when previous fertilization attempts have failed or significant sperm issues exist.

**IMSI** (long heading: Intracytoplasmic Morphologically Selected Sperm Injection (IMSI)) — Advised for individuals requiring advanced sperm selection techniques to enhance fertilization outcomes. / Commonly associated with severe male infertility, recurrent IVF/ICSI failure, or high sperm DNA fragmentation. / Recommended for individuals with repeated implantation failure or when improved sperm quality selection is needed.

**PGT** — Advised for individuals seeking selection of genetically healthy embryos prior to pregnancy. / Commonly associated with genetic disorders or chromosomal abnormalities. / Recommended for individuals with known genetic risks or recurrent pregnancy loss.

**Endometriosis-related Infertility Treatment** — Advised for individuals experiencing fertility challenges due to endometrial tissue growth outside the uterus. / Commonly associated with pelvic adhesions, cysts, or structural distortion. / Recommended for individuals facing pain and difficulty conceiving.

**HSG** — Advised for individuals undergoing diagnostic evaluation of fertility. / Commonly associated with blocked fallopian tubes or uterine abnormalities. / Recommended as part of initial infertility assessment.

**LOD** — Advised for individuals requiring restoration of ovulation in specific hormonal conditions. / Commonly associated with polycystic ovary syndrome unresponsive to medication. / Recommended when ovulation does not occur with standard treatments.

**FET** — Advised for individuals using previously preserved embryos for pregnancy. / Commonly associated with IVF cycles or delayed implantation strategies. / Recommended for individuals with stored embryos or specific clinical indications.

**Sperm Retrieval** — Advised for individuals requiring retrieval of sperm when absent in the ejaculate. / Commonly associated with obstructive or non-obstructive azoospermia. / Recommended for individuals with sperm production or delivery challenges.

Mega-menu children IUI/IVF/ICSI/IMSI/PGT/TESA all **link here**; they are sections, not pages.

---

## F. Ayurveda `/ayurveda-2/`

H2: `Your Balance, Restored with Expert Ayurvedic Care`  
P: `When body and mind feel out of harmony, daily life feels heavy. With personalized therapies, herbal treatments, and holistic guidance, restore wellness, vitality, and inner balance naturally.`

H2: `Ayurveda: 5,000 years of holistic healing`  
P: `Traditional Indian system of medicine that promotes holistic well-being by balancing body, mind, and spirit. It focuses on the three doshas – Vata, Pitta, and Kapha – and uses herbal remedies, massage, diet, yoga, and meditation to restore health and harmony.`

Treatments we offer: Holistic Wellness Therapy · Abhyanga Massage · Panchakarma Therapy · Udhvartan Treatment · Shirodhara Treatment · Potli Massage · Kati Vasti · Nasya Treatment · Kashayadhara · Pizhichil Treatment · Ubtan

H2: `Comprehensive Ayurvedic Therapies and Holistic Treatments`  
P: `Holistic care for body and mind, combining personalized therapies, herbal treatments, and lifestyle guidance to restore balance, health, and overall well-being.`

**Holistic Wellness Therapy** — Recommended for individuals seeking overall balance, vitality, and improved well-being. / Commonly associated with weight management, anti-aging, geriatric care, women’s health, and nutritional healing. / Combines personalized Ayurvedic therapies, herbal remedies, diet guidance, and lifestyle practices. / Enhances physical strength, mental clarity, and long-term health naturally.

**Abhyanga Massage** — Recommended for individuals seeking relaxation, stress relief, and rejuvenation. / Commonly associated with muscle tension, circulation issues, and dosha imbalance. / Enhances circulation, eases muscle tension, and nourishes the skin using warm herbal oils applied with rhythmic full-body massage.

**Panchakarma Therapy** — Recommended for individuals seeking deep detoxification and restoration of internal balance. / Commonly associated with chronic conditions, metabolic disorders, and general rejuvenation. / Involves a series of five therapies (Vamana, Virechana, Basti, Nasya, Raktamokshana) to remove toxins and restore health.

**Udhvartan Treatment** — Recommended for individuals aiming for natural body cleansing and weight management. / Commonly associated with excess fat, cellulite, and poor skin texture. / Involves massaging herbal powders over the body in upward strokes to stimulate circulation and exfoliate the skin.

**Shirodhara Treatment** — Recommended for individuals experiencing stress, anxiety, or sleep disturbances. / Commonly associated with mental fatigue, insomnia, or nervous system imbalance. / Warm medicated oil flows continuously over the forehead to calm the mind and promote relaxation.

**Potli Massage** — Recommended for individuals seeking relief from muscle pain, stiffness, or joint discomfort. / Commonly associated with arthritis and musculoskeletal issues. / Warm herbal poultices are massaged to reduce pain and inflammation and improve mobility.

**Kati Vasti** — Recommended for individuals with lower back pain or spinal stiffness. / Commonly associated with disc problems, muscle strain, or chronic back discomfort. / Warm medicated oil is retained over the lower back using a dough ring to ease pain.

**Nasya Treatment** — Recommended for individuals seeking relief from sinus or respiratory issues. / Commonly associated with headaches, allergies, or nasal congestion. / Medicated oils are administered through the nostrils to promote clearer breathing and mental clarity.

**Kashayadhara** — Recommended for individuals aiming for skin health and internal detoxification. / Commonly associated with inflammation or skin-related issues. / Warm herbal decoctions are poured continuously over the body to purify and rejuvenate.

**Pizhichil Treatment** — Recommended for individuals seeking joint strengthening and nervous system relaxation. / Commonly associated with arthritis-related pain or fatigue. / Warm medicated oil is poured while performing synchronized massage to improve vitality and relieve pain.

**Ubtan** — Recommended for individuals seeking natural skin care and beautification. / Commonly associated with dull skin, uneven tone, or chemical sensitivity. / Herbal pastes are applied and gently scrubbed on the skin to enhance texture and radiance.

Mega-menu Ayurveda children all **link here**.

---

## G. Dental `/dental-2/`

H2: `Your Smile, Perfected by Expert Dentists`  
P: `Experience premium dental care led by top dentists, offering personalized treatments designed for your comfort, confidence, and the best results.`  
Treatments we offer (cards): Dental Implants · Dental Veneers · Smile Makeover  
H2: `Comprehensive Dental Solutions`  
P: `Enhance your smile with expert dental care – advanced treatments, skilled professionals, and world-class results at a fraction of global costs.`

**Dental Veneers** — Advised for individuals with chipped, stained, misaligned, or unevenly spaced teeth. / Commonly associated with those seeking cosmetic dental improvements for smile enhancement. / Recommended when a significant aesthetic upgrade in tooth color, shape, and overall appearance is desired.

**Dental Implants** — Advised for individuals with multiple cosmetic flaws including crowding, discoloration, and missing teeth. / Commonly associated with a comprehensive, multi-disciplinary approach to improving the appearance of the smile. / Commonly associated with a comprehensive, multi-disciplinary approach to improving the appearance of the smile.

**Maxillofacial Surgery** — Advised for individuals with facial trauma, jaw deformities, or congenital anomalies affecting function and appearance. / Commonly involves a multidisciplinary approach integrating oral surgery, orthodontics, and reconstructive techniques. / Recommended for individuals requiring correction of facial structure, bite alignment, or complex conditions impacting speech, chewing, or aesthetics.

**Smile Makeover** — Advised for individuals with multiple cosmetic flaws including crowding, discoloration, and missing teeth. / Commonly associated with a comprehensive, multi-disciplinary approach to improving the appearance of the smile. / Recommended for individuals requiring a customized combination of procedures for a total dental transformation.

Mega-menu dental children all **link here**.

---

## H. Wellness 360 `/wellness-360-dtail-page/`

Title: Wellness 360 Dtail Page – New Journey Health  
H2: `A 3-Day Health Transformation, Designed for You`  
P: `Experience the perfect balance of advanced health screenings, personalised therapies and rejuvenating care. Together, they give you clarity, energy and peace of mind.`  
CTA: `Download our Brochure`

H2: `What to Expect`

**Pre-Arrival** — H2 `Prepare for Your Journey`  
- Introductory call with the Wellness Programme Manager to align your goals and address any questions.  
- Video consultation with a nutritionist to design your personalised daily meal plan.  
- Coordinate and customise your schedule and therapy sessions to match your preferences.

**Day 1** — H2 `Arrival & Recovery`  
- Warm welcome at the airport.  
- Chauffeur-driven transfer to your hotel.  
- Check in at a 5-star hotel.  
- Energising breakfast and time to unwind.  
- Wholesome lunch.  
- Choice of advanced therapies led by a doctor consultation – Whole Body Cryotherapy, Red Light Therapy, Far Infrared Sauna Therapy, Hyperbaric Oxygen Therapy (HBOT), PEMF & Negative Ion Therapy, Normatec Compression Therapy or SpineSync or DeepMed Bot Therapy.

**Day 2** — H2 `AI-Assisted Diagnostics & Oral Care`  
- Morning detox ritual.  
- Energising breakfast.  
- AI-powered assessments and expert evaluations – AI health screening, genetic screening, nutritional screening.  
- Wholesome lunch.  
- Dental check-up, scaling and polishing.  
- Spa at the hotel.  
- Nutritious dinner.  
- Night detox ritual.

**Day 3** — same heading and bullets as Day 2 on the live site.

H2: `A Full-Circle Approach to Wellness`  
`Your Health 360 package goes beyond the typical retreat. It’s powered by advanced diagnostics and tailored to your body’s needs. Choose a 3-day package for a transformative experience.`  
`Your 3-day package, starting at` **£2,999** `for an individual` *(price block duplicated)*

- Begin with full-body diagnostics and AI-powered scans to map your health  
- Experience a serene premium stay, a spa treatment and a wellness therapy  
- Leave with a 3-month plan and take-home wellness kit  

CTA: `Book Now`

---

## I. Orthopaedic surgeries detail `/orthopaedic-surgeries-detail-page/`

H2: `Hip Replacement Surgery`  
P: `Restore mobility and eliminate pain with advanced hip replacement surgery performed by world-class orthopaedic specialists.`  
CTAs: `Book a Free Consultation` · `Chat with an Expert`  
H2: `Why TMTC ?` — six cards titled `This is the heading` with body `A UK doctor oversees care from initial consultation to follow-up`  
`Download our Brochure`

H2: `Who Needs Hip Replacement Surgery?`  
`Hip replacement is recommended for individuals experiencing chronic pain and mobility issues that disrupt daily activities when non-surgical treatments are no longer effective.`

- Osteoarthritis — The leading cause, where cartilage wears away, causing stiffness, swelling, and discomfort  
- Rheumatoid Arthritis — A chronic autoimmune condition leading to joint inflammation and deterioration  
- Hip Injuries & Trauma — Damage from fractures, sports injuries or accidents affecting hip function  
- Post Traumatic Arthritis — Joint degeneration following a past hip injury, leading to persistent pain  

CTA: `Enquire More`  
(Who Needs block is duplicated.)

P: `Hip replacement surgery replaces damaged parts with high-quality metal, ceramic, or plastic implants, restoring smooth movement and significantly reducing pain. Most patients experience improved mobility, better quality of life, and long-lasting relief after surgery.`

H2: `What to Expect: Before, During & After Surgery`  
P: `Experience seamless care from your initial consultation to personalised treatment, all tailored to your needs. After your procedure, receive ongoing aftercare and dedicated support to ensure a smooth, long-lasting recovery.`

**Before Surgery** (list repeated three times on live page)  
- Comprehensive pre-surgery consultation with UK-based GP and India medical specialists  
- Travel coordination, visa assistance, and accommodation support Preoperative medical evaluation including blood tests, urine tests, ECG, X-rays, and discussion with your surgeon  
- Medication review, including guidance on stopping certain arthritis or blood-thinning medications before surgery  
- All pre-op tests and medical evaluations handled by a dedicated patient coordinator  

Then the shared hip FAQ set.

---

## J. Doctors

### Listing `/doctors-listing/`
H2: `Meet our doctors`  
Search · Filters: Bladder Stone · Doctors · Kidney Cancer · Kidney Stone · LUTS · Prostate Cancer · Prostatitis · All Doctors  
Departments: Bariatric Surgery · Cardiology · Dermatology · Gastroenterology · General Surgery · Nephrology · Oncology · Pulmonology · Urology · All Departments  
Locations: Dummy empty non test1 · All Locations  

Cards: Illustrative Profile 7 … Illustrative Profile 2 (and 1 via API)

### Product excerpt (all 7 profiles)
`Orthodontist, Partner – Rarity Dental & The Dental Experience`  
`Gurgaon, India`

Product body (profile 7): `Dr Manreet Sidhu is a recognised orthodontist known for her clinical precision and smile alignment. She holds a Master’s degree in Orthodontics and Dentofacial Orthopaedics, along with a Membership in Orthodontics (MOrth) from the Royal College of Surgeons, Edinburgh (UK).`

### Detail template `/doctor-detail-page-template/`
H2: `Dr. [Full Name]`  
`Orthodontist,`  
`[Doctors Name} is a skilled dental professional with a strong focus on orthodontic care and patient-centered treatment outcomes. With advanced training in orthodontics and dentofacial development, she combines clinical expertise with a detail-oriented approach to smile design and correction.`  
`She has significant experience in aligner-based therapies, successfully managing diverse cases across different age groups. Known for delivering personalized and discreet treatment solutions, she emphasizes comfort, precision, and long-term oral health in every patient journey.`

Experience: `10+ years` · Department: `orthopaedics` · Languages: `English, Hindi`

Educational Background:  
- Bachelor of Dental Surgery (BDS)  
- [Name of Institution Placeholder]  
- Master of Dental Surgery (MDS) – Orthodontics & Dentofacial  

Associated Hospitals & Clinics:  
- [Advanced Dental Care Centre], [City, Country]  
- [Specialized Orthodontic Clinic], [City, Country]  

Areas of Expertise: Invisalign · Jaw Alignment & Growth Guidance · Complex Bite Corrections · Aesthetic Facial Profile Optimisation  

Professional Journey: Partner [Multispecialty Dental Centre] (2025 – Present) · Partner [Orthodontic & Smile Design Clinic] · Consultant Orthodontist  

Professional Memberships: MOrth (Membership in Orthodontics) [Recognized International Surgical College], [Country]  

Book an Appointment + consent + Instagram feed shortcode `[instagram-feed feed=1]`

Specialist Overview paragraph (MOrth, aligner provider, adolescents and adults) — keep verbatim from live page.

---

## K. Hospitals

### Listing `/hospitals/`
H2: `Leading hospitals by your side`  
Filters include Uncategorized, Bladder Cancer, Bladder Stone, BPH, Kidney Cancer, Kidney Stone, LUTS, Prostate Cancer, Hospitals, Prostatitis  
Departments: Bariatric Surgery · Cardiology · Dermatology · Gastroenterology · General Surgery · Nephrology · Oncology · Pulmonology · Urology · All Departsment  
Locations: Dummy empty non test1 · All Locations  

Card excerpt (all 7): `Chennai` · `8 Specialities | 80 Doctors | 300 Beds`

### Detail template `/hospital-detail-page-template/`
H2: `NovaCare Oncology Institute`  
H3: `New Delhi, India`  
`3 Specialities | 10+ Doctors | 88+ Beds`  
`Book an Appointment`

**Inclusions**  
- First hospital in Eastern India to introduce Radixact  
- Comprehensive cancer care centre in Kolkata  
- Large team of cancer specialists offering major cancer treatment modalities  

**Your Stay With Us**  
- Childcare services for patients with young childrent food and dining options  
- Private rooms with comfortable beds and en-suite bathrooms  
- Concierge services to help with non-medical needs  
- Gourmet food and dining options  

**Money & Travel**  
- Flexible payment options, such as payment plans and insurance coverage  
- Support with coordinating any necessary accommodations, such as hotels or flights  
- On-site ATMs available  
- Help with obtaining estimates for the cost of treatments and procedures  
- Transportation services to and from the hospital  

**Our Healthcare Services**  
- Wide range of services and treatments, such as specialised surgeries, holistic medicine, and rehabilitation services  
- Comfortable waiting areas for family and friends  
- On-site support groups and counselling services  
- Access to top-rated medical specialists in various fields  
- Wi-Fi access throughout the hospital  
- On-site pharmacies  

Long about paragraph for NovaCare Oncology Institute (Kolkata/partnership/cancer modalities) — keep verbatim.

**Premium Facilities For All Your Needs**  
- All facilities are designed and executed as per the NABH Guidelines-2016.  
- 88-bedded cancer hospital with screening, diagnostic, treatment and rehabilitation facilities under one roof  
- 6 bone marrow transplant wards  
- 4 iodine therapy wards  
- 2 full-fledged, modular operation theatres  
- Daycare chemotherapy wards  
- Well-equipped ICU with 12 beds  
- Rehabilitation support department that comprises dieticians, physiotherapists, yoga therapists, speech therapists, nurses, etc  
- Offer comprehensive home health services such as sample collection, medicine delivery, in-home rehabilitation services, palliative care  

Concierge subset (6 of 8 home items).  
H2: `Receive exceptional care across 20+ medical departments` / `Advanced treatments provided by NovaCare Oncology Institute`  
Four `[Treatment Name]` cards with lorem.

Blog teaser.  
H2: `Plan your travel to NovaCare Oncology Institute`  
`No. XX, [Building Name Placeholder], [Street Name Placeholder], [Locality Placeholder], [City], [State/Region] – [Postal Code]`  
Airport from [Hospital Name] — 34 km / 1 hr and 35 mins  
Railway from HCG Cancer Centre — 34 km / 1 hr and 35 mins  

---

## L. About `/about-us/`

H2: `Redefining Global Healthcare access with NewJourney™`  
P: `Millions of people today are held back by long waiting times and rising treatment costs – often at the very moment they need care the most. Yet the systems and pathways designed to access healthcare across borders have not evolved to meet these growing challenges.`  
P: `At NewJourney Health, we are committed to changing that reality. Our purpose is to transform medical travel from something uncertain and overwhelming into a structured, reliable, and empowering experience, so individuals can take control of their health with confidence, clarity, and peace of mind.`

H2: `We go beyond traditional medical tourism. We are building a new standard for safe, seamless, and patient-focused global care`  
P: `Our approach is built on a carefully designed ecosystem: trusted specialists , partnerships with leading accredited hospitals, dedicated concierge support, and high-quality post-operative care.`  
P: `From the very first consultation through recovery and follow-up, we remain by our patients’ side – providing continuous guidance, personalized support, and the reassurance needed to navigate every step of their healthcare journey with confidence.`

H2: `The team transforming healthcare beyond borders`  
- Rakul Syam — Co-founder & Chief Executive Officer  
- Dr. Gokul Syam — Co-founder & Chief Operations Officer  
- Dr. Aiswarya S Kottoor — Medical Director  
- Nidhi S Krishna — Chief Marketing Officer  

`Our mission is to` / `Deliver effortless access to trusted healthcare for everyone`  
`We make global high-quality care accessible without delays or high costs.`

`Our vision is to` / `Create a world where quality healthcare knows no boundaries`  
`Ensuring equal access to safe and reliable healthcare worldwide.`

**Values**  
- Personalised Patient Journey — Care tailored to your needs with language and treatment support  
- Clarity Over Confusion — Transparent processes, no hidden surprises.  
- Accessible Global Care — World class healthcare made accessible across borders  
- Healing Beyond Borders — Connecting you to the right treatment, anywhere in the world, anytime you need it – all in one place.

---

## M. Contact `/contact-us/` and FAQ `/faq/`

Contact H2: `Contact Us`  
Then the grouped FAQ (FAQ page H2: `Common Questions About Your Treatment Journey`).

Groups:  
1. Getting Started & Planning  
2. Visas, Travel & Logistics  
3. Clinical Process & Privacy  
4. Payments, Insurance & Costs  
5. End-to-End Care & Aftercare  

Subheads: About Medical Tourism & NewJourney Health · Consultations & Second Opinions · Visa Requirements & Documentation · Arrival & On-Ground Support · Treatment Plans & Estimates · Data Privacy · Financials & Billing · Patient Care Management

**What is medical tourism, and how can it make my treatment journey easier?**  
Medical tourism refers to travelling abroad to receive medical treatment, accessing world-class healthcare at more affordable costs. NewJourney simplifies this by handling everything from medical visa invitation letters to post-treatment care, so you can focus entirely on your recovery.

**What is NewJourney and how can it assist me?**  
NewJourney is your Medical Value Travel Facilitator (MVTF) that connects you with top hospitals and leading doctors worldwide. You can book appointments regardless of your location, and we manage all logistics to make your healthcare journey smooth and hassle-free.

**Why should I choose NewJourney for medical travel?**  
We assist with doctor selection, hospital coordination, visa support, travel planning, treatment cost estimates, accommodation, language interpreters, follow-up support, and assign a dedicated Patient Relationship Manager to each patient.

**How can I verify the credentials and reputation of a foreign hospital or doctor?**  
We encourage you to independently review doctor profiles. For your convenience, NewJourney provides detailed doctor experience and hospital information pages to help you make informed decisions.

**Can I get a second opinion through NewJourney?**  
Absolutely. You can consult multiple experts to ensure confidence in your diagnosis and treatment plan.

**Is telemedicine available if I cannot travel immediately?**  
Yes, NewJourney offers telemedicine consultations with top doctors so you can begin your treatment plan remotely.

**What is the process to book a consultation with a specialist through NewJourney?**  
Once you submit an enquiry, a dedicated Patient Relationship Manager is assigned to organise everything for you, including consultations, travel, and logistics.

**How do I book an appointment through NewJourney?**  
Appointments can be booked directly through our platform. Your Patient Relationship Manager will coordinate with the hospital and doctor on your behalf.

**Who will guide me in connecting with doctors?**  
A dedicated Patient Relationship Manager will be assigned to you. They will review your case, provide a treatment plan, share cost estimates, and guide you on all necessary documents so you’re fully prepared.

**Do I need a medical visa for treatment?**  
Yes, many countries require a medical visa. We assist with all required paperwork, including invitation letters and hospital confirmations.

**How long does it take to get a medical visa for India?**  
Usually 3–7 working days after submitting all required documents.

**What are the visa and travel requirements for medical tourism in different countries?**  
Requirements vary depending on your country of origin. Your case manager will guide you through all necessary steps.

**What if my treatment takes longer than expected?**  
We assist in extending your visa through the appropriate authorities.

**Can a family member travel with me?**  
Yes, up to two attendants can apply under a Medical Attendant Visa.

**Do you provide accommodation a**  
Yes, we arrange airport transfers, accommodation near hospitals, interpreters, SIM cards, and more.

**What if I don’t speak the local language?**  
NewJourney provides professional translators to ensure clear communication between you and healthcare providers throughout your journey.

**Is the language barrier taken care of by NewJourney?**  
Yes. We ensure seamless communication by providing professional interpreters so you can focus entirely on your treatment and recovery

**How many attendants are allowed with the patient during hospital treatment?**  
A maximum of 2–3 attendants are typically allowed.

**Is India safe for foreign patients?**  
Yes, partner hospitals maintain global standards (NABH and JCI accredited) in safety and hygiene.

**How does NewJourney assist in selecting the right hospital and doctor?**  
Our platform provides detailed doctor profiles and hospital comparisons to help you choose confidently.

**What happens after I share my medical reports?**  
Your reports are reviewed by 2–3 expert doctors who create a personalized treatment plan with estimated costs.

**How long does it take to receive a treatment plan after contacting NewJourney?**  
Most patients receive a preliminary treatment plan within 48–72 hours, depending on the complexity of the case.

**Do you provide healthcare plans at an affordable rate?**  
Yes. NewJourney offers competitive treatment plans at top hospitals, assists with insurance, and ensures cost-effective care. You’ll receive quotes from accredited NABH/JCI hospitals to choose the best option.

**What documents are required for a treatment plan and cost estimate?**  
You’ll need medical records, test reports, ID documents, and medical history. Your Patient Relationship Manager will guide you through the exact requirements.

**Do I need to visit the hospital before applying?**  
No, we coordinate everything remotely and provide necessary documentation for your visa.

**How does NewJourney ensure my data is private?**  
We follow strict professional and ethical standards to ensure complete confidentiality of your medical records and personal information.

**Are there any hidden charges?**  
No. All costs are clearly explained upfront.

**What payment options are available?**  
Payments can be made via wire transfer, card, or cash directly to the hospital.

**Does NewJourney handle insurance approvals and claims?**  
Yes, we assist with insurance approvals, documentation, and claims.

**How does NewJourney support patients throughout and after treatment?**  
We provide complete end-to-end support—from hospital selection and travel arrangements to post-treatment follow-ups. Your dedicated Patient Relationship Manager supports you throughout the journey and even after you return home.

Contact page also repeats enquiry band (home wording) plus:

**Office Address** Door No 111/A, Perumpanachy P.O, Changanassery, Kottayam, Kerala, India  
**Email Address** hello@newjourneyhealth.com  
**Office Phone Number** +91 9567010169  

---

## N. Blog `/blog/`

H2: `Read Our Latest Blog & Articles`  
Category chips: AYURVEDA · DENTISTRY · ORTHOPEDICS

### `/ayurveda/` (post, 3 Apr 2026, Admin)
H2: `Ayurveda`  
H2: `Healing in Kerala: Why Ayurveda Is the First Choice for Wellness Tourism`  
Three paragraphs on Kerala Ayurveda, Panchakarma/Abhyanga/Shirodhara, wellness tourism, integration with medical tourism. Tags / Share This.

### `/dentistry/` (post, 3 Apr 2026, Admin)
H2: `Dentistry`  
H2: `Affordable Smile Makeovers in Kerala: Dental Tourism for Global Patients`  
Three paragraphs on implants/veneers/CAD-CAM, waiting times, combining treatment with Kerala travel.

### `/orthopedics/` (post — slug collision with specialty page)
H2: `Orthopedics`  
H2: `Why Kerala Is Becoming a Global Hub for Advanced Orthopedic Treatments`  
(Listing excerpt exists; full body served only if the post URL is reachable — live `/orthopedics/` is the **page**.)

### Dummy posts
`/blog-dummy-post/`, `/dummy-detailed-post/`, `/dummy-post-heading/`, `/dummy-blog-heading/` — three lorem paragraphs each. Listing date for dummy: 29 Jan 2026.

---

## O. Legal & WooCommerce

### `/privacy/`
H2: `Privacy Policy`  
P: `This privacy policy describes how we collect, use, and protect your personal information when you use our website and services.`  
Sections 1–8: Information We Collect · How We Use Your Information · Information Sharing · Data Security · Your Rights · Cookies · Changes to This Policy · Contact Us  
(Full bullets as crawled — ecommerce-oriented: orders, marketing, accounts.)

### `/terms/`, `/shop/`, `/cart/`, `/checkout/`, `/my-account/`
H1: `Great things are on the horizon`  
P: `Something big is brewing! Our store is in the works and will be launching soon!`

### `/comming-soon/`
Title: Comming Soon – New Journey Health  
Body: blog listing of Ayurveda, Dentistry, Orthopedics, and dummy posts.

---

## P. Images to preserve (homepage set)

- Hero: clinician photography (dark overlay)  
- Treatment cards: Wellness-360.jpg, Modern-Medicine.jpg, Fertility-Care.jpg, Ayurveda.jpg, Dental.jpg  
- Journey: 1.jpeg … 8.jpeg  
- Concierge icons: icons-07.svg, Admission-Appointment-Pharma-Care, icons-08, icons-10.svg, icons-09.svg, icons-12.svg, Accomodaton-Options, Transit-Assistance  
- Cost icons: icons-03 … icons-06  
- Doctors: 1.jpg, 2-1.png, 3-1.png, 4-1.png, 5.png, 6.png with alts Dr Hema Rajah … Dr Maria Thomas  
- FAQ illustration: FAQ__1_-removebg-preview  
- YouTube embed: `VhBl3dHT5SY`  

---

## Q. Pages requested that **do not exist** as URLs

IUI, IVF, ICSI, IMSI, PGT, TESA/PESA/Micro-TESE, Holistic Wellness, Abhyanga, Panchakarma, Udhvartan, Shirodhara, Dental Veneers, Dental Implants, Smile Makeover, Maxillofacial Surgery, Health 360 (as `/health-360`), EmpowHER, Enquire, `/treatments` hub, `/doctors`, `/about`, `/contact`, `/privacy-policy`.

These live as **nav labels and/or in-page sections**. Rebuild must not invent standalone pages for them without approval.

---

## R. Proposed TypeScript content files (Phase 3 — not created yet)

```
src/content/
  site.ts              # brand, phones, emails, offices, social, consent strings
  navigation.ts        # mega menu exact labels + live hrefs
  home.ts              # homepage-only copy, journey, prices, home FAQs, home testimonials
  whyNewJourney.ts     # shared 6-point block
  specialties.ts       # modern medicine hub + 9 specialty pages
  fertility.ts
  ayurveda.ts
  dental.ts
  wellness360.ts
  hipDetail.ts         # orthopaedic-surgeries-detail-page
  doctors.ts           # listing filters + illustrative profiles + template
  hospitals.ts
  testimonials.ts      # home vs specialty variants kept separate
  faqs.ts              # home / contact / specialty hip set kept separate
  blog.ts
  about.ts
  contact.ts
  legal.ts             # privacy + coming-soon store copy
```

UI must read from these files. No rewritten marketing copy.
