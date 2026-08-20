import { media } from "@/lib/media";
import { home } from "@/content/home";

export const hospitalsListingHeading = "Leading hospitals by your side";

export const hospitalFilters = {
  conditions: [
    "Uncategorized",
    "Bladder Cancer",
    "Bladder Stone",
    "BPH",
    "Kidney Cancer",
    "Kidney Stone",
    "LUTS",
    "Prostate Cancer",
    "Hospitals",
    "Prostatitis",
    "All Filters",
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
    "All Departsment",
  ],
  locations: ["Dummy empty non test1", "All Locations"],
};

export const listingHospitals = Array.from({ length: 7 }, (_, i) => ({
  id: i + 1,
  title: `Illustrative Hospital ${i + 1}`,
  city: "Chennai",
  stats: "8 Specialities | 80 Doctors | 300 Beds",
  href: "/hospital-detail-page-template/",
  photo: media.hospitalPhotos[i % media.hospitalPhotos.length],
}));

export const hospitalDetail = {
  documentTitle: "Hospital Detail page Template – New Journey Health",
  name: "NovaCare Oncology Institute",
  location: "New Delhi, India",
  stats: "3 Specialities | 10+ Doctors | 88+ Beds",
  book: "Book an Appointment",
  inclusionsHeading: "Inclusions",
  inclusions: [
    "First hospital in Eastern India to introduce Radixact",
    "Comprehensive cancer care centre in Kolkata",
    "Large team of cancer specialists offering major cancer treatment modalities",
  ],
  stayHeading: "Your Stay With Us",
  stay: [
    "Childcare services for patients with young childrent food and dining options",
    "Private rooms with comfortable beds and en-suite bathrooms",
    "Concierge services to help with non-medical needs",
    "Gourmet food and dining options",
  ],
  moneyHeading: "Money & Travel",
  money: [
    "Flexible payment options, such as payment plans and insurance coverage",
    "Support with coordinating any necessary accommodations, such as hotels or flights",
    "On-site ATMs available",
    "Help with obtaining estimates for the cost of treatments and procedures",
    "Transportation services to and from the hospital",
  ],
  servicesHeading: "Our Healthcare Services",
  services: [
    "Wide range of services and treatments, such as specialised surgeries, holistic medicine, and rehabilitation services",
    "Comfortable waiting areas for family and friends",
    "On-site support groups and counselling services",
    "Access to top-rated medical specialists in various fields",
    "Wi-Fi access throughout the hospital",
    "On-site pharmacies",
  ],
  about:
    "NovaCare Oncology Institute is a specialised cancer care facility dedicated to providing comprehensive and advanced treatment solutions. Established through a strategic partnership between a leading healthcare provider and a reputed diagnostic organization, the institute focuses on delivering innovative and patient-centric care. It brings together a multidisciplinary team of experienced specialists offering a wide range of services, including surgical oncology, medical oncology, radiation therapy, nuclear medicine, and bone marrow transplantation—all under one roof. Equipped with cutting-edge technology and modern treatment systems, the institute ensures precision and effectiveness in cancer care. With a strong emphasis on clinical excellence, research, and compassionate support, NovaCare Oncology Institute strives to become a trusted destination for advanced cancer treatment.",
  facilitiesHeading: "Premium Facilities For All Your Needs",
  facilities: [
    "All facilities are designed and executed as per the NABH Guidelines-2016.",
    "88-bedded cancer hospital with screening, diagnostic, treatment and rehabilitation facilities under one roof",
    "6 bone marrow transplant wards",
    "4 iodine therapy wards",
    "2 full-fledged, modular operation theatres",
    "Daycare chemotherapy wards",
    "Well-equipped ICU with 12 beds",
    "Rehabilitation support department that comprises dieticians, physiotherapists, yoga therapists, speech therapists, nurses, etc",
    "Offer comprehensive home health services such as sample collection, medicine delivery, in-home rehabilitation services, palliative care",
  ],
  concierge: home.concierge.filter((item) =>
    [
      "Admission, Appointment, Pharma Care",
      "Personalised Treatment Plans",
      "Travel Booking Assistance",
      "Easy Medical Visa Approvals",
      "Accommodation Options",
      "Airport Transfers & Logistics",
    ].includes(item.title),
  ),
  departmentsHeading: "Receive exceptional care across 20+ medical departments",
  departmentsSub: "Advanced treatments provided by NovaCare Oncology Institute",
  treatmentPlaceholders: Array.from({ length: 4 }, () => ({
    name: "[Treatment Name]",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  })),
  travelHeading: "Plan your travel to NovaCare Oncology Institute",
  address:
    "No. XX, [Building Name Placeholder], [Street Name Placeholder], [Locality Placeholder], [City], [State/Region] – [Postal Code]",
  airportFrom: "[Hospital Name]",
  airport: { km: "34 km", time: "1 hr and 35 mins" },
  railFrom: "HCG Cancer Centre",
  rail: { km: "34 km", time: "1 hr and 35 mins" },
};
