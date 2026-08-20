import type { MegaColumn, NavLink } from "@/types";

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Treatments", href: "#" },
  { label: "Doctors", href: "/doctors-listing/" },
  { label: "Hospitals", href: "/hospitals/" },
  { label: "Blog", href: "/blog/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Contact", href: "/contact-us/" },
];

export const megaMenu: MegaColumn[] = [
  {
    title: "Health 360",
    href: null,
    launchingSoon: true,
    children: [
      { label: "Wellness Therapy", href: null },
      { label: "Full Body Diagnostics", href: null },
      { label: "Nutritional Healing", href: null },
    ],
  },
  {
    title: "Modern Medicine",
    href: "/modern-medicine-2/",
    children: [
      { label: "Orthopedics", href: "/orthopedics/" },
      { label: "Urology", href: "/urology/" },
      { label: "Gynecology", href: "/gynecology/" },
      { label: "Opthalmology", href: "/ophthalmology/" },
      { label: "Cosmetic Surgery", href: "/cosmetic/" },
      { label: "Gastroenterology", href: "/gastrosurgery/" },
      { label: "Cardiac Surgery", href: "/cardiac/" },
      { label: "Spine Surgery", href: "/spine/" },
      { label: "Surgical Oncology", href: "/oncology/" },
    ],
  },
  {
    title: "Fertility and IVF",
    href: "/fertility/",
    children: [
      { label: "IUI", href: "/fertility/" },
      { label: "IVF", href: "/fertility/" },
      { label: "ICSI", href: "/fertility/" },
      { label: "IMSI", href: "/fertility/" },
      { label: "PGT", href: "/fertility/" },
      { label: "TESA / PESA / Micro-TESE", href: "/fertility/" },
    ],
  },
  {
    title: "Ayurveda",
    href: "/ayurveda-2/",
    children: [
      { label: "Holistic Wellness", href: "/ayurveda-2/" },
      { label: "Abhyanga", href: "/ayurveda-2/" },
      { label: "Panchakarma", href: "/ayurveda-2/" },
      { label: "Udhvartan", href: "/ayurveda-2/" },
      { label: "Shirodhara", href: "/ayurveda-2/" },
    ],
  },
  {
    title: "Dental",
    href: "/dental-2/",
    children: [
      { label: "Dental Veneers", href: "/dental-2/" },
      { label: "Dental Implants", href: "/dental-2/" },
      { label: "Smile Makeover", href: "/dental-2/" },
      { label: "Maxillofacial Surgery", href: "/dental-2/" },
    ],
  },
  {
    title: "EmpowHER Women's Health",
    href: null,
    launchingSoon: true,
    children: [{ label: "PostNatal Care", href: null }],
  },
];

export const footerCompactNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Modern Medicine", href: "/modern-medicine-2/" },
  { label: "Orthopedic", href: "/orthopedics/" },
  { label: "Urology", href: "/urology/" },
  { label: "Gynecology", href: "/gynecology/" },
  { label: "Ophthalmology", href: "/ophthalmology/" },
  { label: "Cosmetic", href: "/cosmetic/" },
  { label: "Gastro Surgery", href: "/gastrosurgery/" },
  { label: "Cardiac Surgery", href: "/cardiac/" },
  { label: "Spine Surgery", href: "/spine/" },
  { label: "Surgical Oncology", href: "/oncology/" },
  { label: "Fertility and IVF", href: "/fertility/" },
  { label: "Ayurveda", href: "/ayurveda-2/" },
  { label: "Dental", href: "/dental-2/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Doctors Listing", href: "/doctors-listing/" },
  { label: "Hospitals", href: "/hospitals/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact Us", href: "/contact-us/" },
];
