import { media } from "@/lib/media";

export const home = {
  h1: "World-class healthcare meets a new journey",
  heroCta: "Book your consultation",
  treatmentsHeading: "The treatments we offer, with no wait time",
  treatmentCards: [
    {
      title: "Health 360",
      subtitle: "Diagnostics and Wellness Programmes",
      href: "/wellness-360-dtail-page/",
      image: media.wellness,
      alt: "Wellness 360",
    },
    {
      title: "Modern Medicine",
      subtitle: "Evidence Based Diagnostics & Treatment",
      href: "/modern-medicine-2/",
      image: media.modernMedicine,
      alt: "Modern Medicine",
    },
    {
      title: "Fertility Care",
      subtitle: "Personalized Fertility & IVF Care",
      href: "/fertility/",
      image: media.fertility,
      alt: "Fertility Care",
    },
    {
      title: "Ayurveda",
      subtitle: "Preventive and Integrative Care",
      href: "/ayurveda-2/",
      image: media.ayurveda,
      alt: "Ayurveda",
    },
    {
      title: "Dental",
      subtitle: "Corrective & Cosmetic Dentistry",
      href: "/dental-2/",
      image: media.dental,
      alt: "Dental",
    },
  ],
  learnMore: "Learn More →",
  journeyEyebrow: "YOUR CARE, SIMPLIFIED",
  journeyHeading: "Patient Journey",
  journeySub:
    "Seamless steps from first enquiry to returning home — we're with you every step of the way.",
  journeySteps: [
    {
      id: 1,
      title: "Make an Enquiry",
      short: "Share your concerns",
      fullDesc:
        "Begin your healthcare journey by reaching out to us, sharing your concerns and needs. Our team responds within hours to understand your medical condition, preferences, and urgency. We're here to listen and guide you through the first crucial step.",
      image: media.journey[0],
    },
    {
      id: 2,
      title: "Counselling from Our Team",
      short: "Expert guidance",
      fullDesc:
        "Receive personalized guidance and support from our experienced team to understand your options and make informed decisions. We explain procedures, doctor profiles, and help you choose what's best for your specific medical condition and budget.",
      image: media.journey[1],
    },
    {
      id: 3,
      title: "Personalised Treatment Plan",
      short: "Tailored care",
      fullDesc:
        "Tailored just for you, our comprehensive treatment plan ensures you receive the best care. Our team coordinate with top specialists to design a timeline, cost estimate, and recovery roadmap that aligns with your medical needs and personal preferences.",
      image: media.journey[2],
    },
    {
      id: 4,
      title: "Medical Visa Application",
      short: "Visa assistance",
      fullDesc:
        "We simplify the process, assisting you in securing the necessary medical visa for your treatment journey. We provides invitation letters, documentation support, and embassy guidance to ensure a smooth visa approval process.",
      image: media.journey[3],
    },
    {
      id: 5,
      title: "Travel Booking Assistance",
      short: "Flights & stays",
      fullDesc:
        "Let us handle the logistics - from flights to accommodations, ensuring a smooth and stress-free travel experience. We coordinate airport transfers, comfortable lodging near hospitals, and all transportation needs during your stay.",
      image: media.journey[4],
    },
    {
      id: 6,
      title: "Arrive for Your Treatment",
      short: "Seamless arrival",
      fullDesc:
        "Step into a seamless transition from arrival to the medical facility, where your healing journey begins. Our patient concierge welcomes you at the airport and coordinates with the hospital front desk for a hassle-free admission process.",
      image: media.journey[5],
    },
    {
      id: 7,
      title: "Post-Surgery Care",
      short: "Recovery support",
      fullDesc:
        "Our support doesn't end with the procedure. We provide attentive post-surgery care to aid your recovery and well-being - physio coordination, follow-up consults, medication management, and a 24/7 helpline for any concerns.",
      image: media.journey[6],
    },
    {
      id: 8,
      title: "Return Home",
      short: "Safe journey back",
      fullDesc:
        "Once you're ready, we assist you in a safe and comfortable journey back home, marking the completion of your transformative healthcare experience. Post-recovery follow-ups continue digitally to ensure your complete well-being.",
      image: media.journey[7],
    },
  ],
  conciergeHeading: "Your personal healthcare concierge",
  concierge: [
    {
      title: "Accredited Hospitals",
      body: "Internationally accredited hospitals for high-quality care",
    },
    {
      title: "Admission, Appointment, Pharma Care",
      body: "Complete coordination of medical logistics",
    },
    {
      title: "Multi Lingual Translation Support",
      body: "Convey your needs in the language you're most comfortable in",
    },
    {
      title: "Personalised Treatment Plans",
      body: "A treatment journey tailored to all your preferences and needs",
    },
    {
      title: "Travel Booking Assistance",
      body: "Seamless booking assistance for your healthcare journey",
    },
    {
      title: "Easy Medical Visa Approvals",
      body: "Dedicated assistance for medical visa requirements",
    },
    {
      title: "Accommodation Options",
      body: "Near the hospital and matching your budget and needs",
    },
    {
      title: "Airport Transfers & Logistics",
      body: "Reliable airport transfers and hassle-free commuting",
    },
  ],
  costLine1: "Get world-class treatment,",
  costLine2: "without draining your lifetime savings.",
  costHeading: "The India Advantage in Healthcare",
  costColumns: ["Treatment", "UK Price", "US Price", "India (TMTC Price)"] as const,
  prices: [
    {
      treatment: "Hip Replacement (U/L)",
      uk: "£17,000",
      us: "£17,000",
      india: "£5,000",
    },
    {
      treatment: "Knee Replacement (U/L)",
      uk: "£16,000",
      us: "£17,000",
      india: "£5,000",
    },
    {
      treatment: "3 Dental Implants (with crowns)",
      uk: "£9,000",
      us: "£17,000",
      india: "£3,000",
    },
    {
      treatment: "IVF Self Cycle with Donor Eggs",
      uk: "£9,000",
      us: "£17,000",
      india: "£4,500",
    },
    {
      treatment: "Full-Body MOT",
      uk: "£8,000",
      us: "£17,000",
      india: "£2,000",
    },
  ],
  comfortHeading: "Comfort, care and rejuvenation",
  comfort: [
    "Nutritionist-Designed Meal Plans",
    "24/7 Doctor-On-Call Services",
    "Nursing and Physiotherapy Services",
    "Yoga and Meditation Services",
  ],
  doctorsHeading: "Meet our doctors",
  hospitalsHeading: "Leading hospitals, by your side",
  featuredHeading: "We are featured in",
  testimonialsHeading: "Real voices, real journeys",
  homeTestimonials: [
    {
      quote:
        "I chose India because everything was easy—high standards of hygiene, quick access to doctors, and no waiting weeks for an implant. NewJourney Health made everything perfect",
      name: "Sophia",
    },
    {
      quote:
        "I chose India because the whole process felt straightforward—clean facilities, fast medical access, and no long delays for treatment. NewJourney Health handled everything smoothly and made the experience seamless from start to finish.",
      name: "Isabella",
    },
    {
      quote:
        "I chose India because the entire process was seamless—excellent hygiene standards, immediate access to experienced doctors, and no long waiting times for my implant. NewJourney Health handled everything perfectly, with every detail taken care of and included.",
      name: "Niti Pall",
    },
  ],
  newsHeading: "Latest news & stories",
  faqHeading: "Frequently asked questions",
  faqSub: "Know more about your healthcare journey with NewJourney Health",
  stillQuery: "Do you still have a query?",
  enquiryHeading: "Ready to begin your new journey to better health?",
  enquiryHomeBody:
    "We’re here to address your questions, understand your needs, and guide you to the care that suits you best.",
  enquirySpecialtyBody:
    "Your care journey matters to us. We’re here to answer your questions, understand your needs, and guide you toward the care that’s right for you.",
  whyHeading: "Why NewJourney Health?",
  why: [
    {
      title: "End-to-End Support",
      body: "Complete assistance from consultation, travel, treatment, to full recovery",
    },
    {
      title: "Zero Waiting Lists",
      body: "Quick consultations and faster access to treatments without delays",
    },
    {
      title: "Cost Savings",
      body: "High-quality treatment at significantly lower costs than many countries",
    },
    {
      title: "Accredited Hospitals",
      body: "Partnered with globally accredited JCI and NABH certified hospitals",
    },
    {
      title: "Dedicated Assistance",
      body: "Personal relationship manager guiding you through every step seamlessly",
    },
    {
      title: "Travel & Aftercare",
      body: "Visa, accommodation, interpreters, and complete post-treatment follow-up support",
    },
  ],
  specialistsHeading: "Our leading specialists",
  viewProfile: "View Profile →",
  bookConsultation: "Book a consultation",
  chatExpert: "Chat with an expert",
  specialtyTestimonialsHeading: "Real voices, real journeys",
  specialtyTestimonials: [
    {
      quote:
        "l chose India because everything was easy – High standard of hygiene, access to doctors, and no waiting weeks for an implant.",
      name: "Dr Sophia",
    },
    {
      quote:
        "l chose India because everything was easy – High standard of hygiene, access to doctors, and no waiting weeks for an implant.",
      name: "Dr Isabella",
    },
    {
      quote:
        "l chose India because everything was easy – High standard of hygiene, access to doctors, and no waiting weeks for an implant.",
      name: "Dr Niti Pall",
    },
  ],
  specialtyFaqHeading: "Frequently Asked Questions",
};
