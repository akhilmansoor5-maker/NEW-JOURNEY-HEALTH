import { media } from "@/lib/media";

export const featuredDoctors = [
  { specialty: "Dentistry", name: "Dr. Hema Rajah", sub: "(Illustrative Profile)", photo: media.doctors[0] },
  { specialty: "Orthopedics", name: "Dr. Zacharia Thomas", sub: "(Illustrative Profile)", photo: media.doctors[1] },
  { specialty: "Fertility & IVF", name: "Dr. Jacob Paul", sub: "(Illustrative Profile)", photo: media.doctors[2] },
  { specialty: "Cardiology", name: "Dr. Mathew Thomas", sub: "(Illustrative Profile)", photo: media.doctors[3] },
  { specialty: "Ophthalmology", name: "Dr. Shary Mathew", sub: "(Illustrative Profile)", photo: media.doctors[4] },
  { specialty: "Oncology", name: "Dr. Maria Thomas", sub: "(Illustrative Profile)", photo: media.doctors[5] },
];

export const doctorFilters = {
  conditions: [
    "Bladder Stone",
    "Doctors",
    "Kidney Cancer",
    "Kidney Stone",
    "LUTS",
    "Prostate Cancer",
    "Prostatitis",
    "All Doctors",
  ],
  departments: [
    "Bariatric Surgery",
    "Cardiology",
    "Dermatology",
    "Gastroenterology",
    "General Surgery",
    "Nephrology",
    "Oncology",
    "Pulmonology",
    "Urology",
    "All Departments",
  ],
  locations: ["Dummy empty non test1", "All Locations"],
};

export const listingDoctors = Array.from({ length: 7 }, (_, i) => ({
  id: i + 1,
  title: `Illustrative Profile ${i + 1}`,
  role: "Orthodontist, Partner – Rarity Dental & The Dental Experience",
  location: "Gurgaon, India",
  href: "/doctor-detail-page-template/",
  photo: media.doctors[i % media.doctors.length],
}));

export const doctorDetail = {
  documentTitle: "Doctor Detail Page Template – New Journey Health",
  name: "Dr. [Full Name]",
  specialtyLine: "Orthodontist,",
  bio1:
    "[Doctors Name} is a skilled dental professional with a strong focus on orthodontic care and patient-centered treatment outcomes. With advanced training in orthodontics and dentofacial development, she combines clinical expertise with a detail-oriented approach to smile design and correction.",
  bio2:
    "She has significant experience in aligner-based therapies, successfully managing diverse cases across different age groups. Known for delivering personalized and discreet treatment solutions, she emphasizes comfort, precision, and long-term oral health in every patient journey.",
  experience: "10+ years",
  department: "orthopaedics",
  languages: "English, Hindi",
  educationHeading: "Educational Background",
  education: [
    "Bachelor of Dental Surgery (BDS)",
    "[Name of Institution Placeholder]",
    "Master of Dental Surgery (MDS) – Orthodontics & Dentofacial",
  ],
  hospitalsHeading: "Associated Hospitals & Clinics",
  hospitals: [
    "[Advanced Dental Care Centre], [City, Country]",
    "[Specialized Orthodontic Clinic], [City, Country]",
  ],
  expertiseHeading: "Areas of Expertise",
  expertise: [
    "Invisalign",
    "Jaw Alignment & Growth Guidance",
    "Complex Bite Corrections",
    "Aesthetic Facial Profile Optimisation",
  ],
  journeyHeading: "Professional Journey",
  journey: [
    { role: "Partner", org: "[Multispecialty Dental Centre], [City, Country]", years: "(2025 – Present)" },
    { role: "Partner", org: "[Orthodontic & Smile Design Clinic], [City, Country]", years: "" },
    { role: "Consultant Orthodontist", org: "", years: "" },
  ],
  membershipsHeading: "Professional Memberships",
  memberships:
    "MOrth (Membership in Orthodontics) [Recognized International Surgical College], [Country]",
  bookHeading: "Book an Appointment",
  instagramShortcode: "[instagram-feed feed=1]",
  overviewHeading: "Specialist Overview",
  overview:
    "Dr. [Full Name Placeholder] is a highly regarded orthodontist known for precision-driven treatment and expertise in smile alignment. She holds a Master’s degree in Orthodontics and Dentofacial Orthopaedics, along with a Membership in Orthodontics (MOrth) from a recognized international surgical institution. A certified aligner provider, she has successfully managed numerous aligner-based cases for adolescents and adults, offering discreet, customized solutions tailored to individual lifestyles.",
  productExcerpt:
    "Dr Manreet Sidhu is a recognised orthodontist known for her clinical precision and smile alignment. She holds a Master’s degree in Orthodontics and Dentofacial Orthopaedics, along with a Membership in Orthodontics (MOrth) from the Royal College of Surgeons, Edinburgh (UK).",
};

export const doctorsListingHeading = "Meet our doctors";
