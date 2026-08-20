export type NavLink = {
  label: string;
  href: string;
};

export type MegaChild = {
  label: string;
  href: string | null;
};

export type MegaColumn = {
  title: string;
  href: string | null;
  launchingSoon?: boolean;
  children: MegaChild[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqGroup = {
  heading: string;
  items: FaqItem[];
};

export type Procedure = {
  name: string;
  points: string[];
};

export type SpecialtyPage = {
  slug: string;
  path: string;
  documentTitle: string;
  heroTitle: string;
  heroBody: string;
  treatmentsHeading: string;
  treatmentNames: string[];
  comprehensiveHeading: string;
  comprehensiveIntro?: string;
  introHeading?: string;
  introBody?: string;
  procedures: Procedure[];
  showFaqs: boolean;
  image: string;
};
