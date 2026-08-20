import type { Metadata } from "next";
import { site } from "@/content/site";

export function pageMeta(title: string, path: string, description?: string): Metadata {
  return {
    title,
    description: description ?? site.tagline,
    alternates: { canonical: path },
    openGraph: {
      title,
      description: description ?? site.tagline,
      url: path,
      siteName: site.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: description ?? site.tagline,
    },
  };
}

export const siteRoutes = [
  "/",
  "/modern-medicine-2/",
  "/orthopedics/",
  "/urology/",
  "/gynecology/",
  "/ophthalmology/",
  "/cosmetic/",
  "/gastrosurgery/",
  "/cardiac/",
  "/spine/",
  "/oncology/",
  "/fertility/",
  "/ayurveda-2/",
  "/dental-2/",
  "/wellness-360-dtail-page/",
  "/orthopaedic-surgeries-detail-page/",
  "/doctors-listing/",
  "/doctor-detail-page-template/",
  "/hospitals/",
  "/hospital-detail-page-template/",
  "/about-us/",
  "/contact-us/",
  "/faq/",
  "/blog/",
  "/privacy/",
  "/terms/",
  "/comming-soon/",
  "/shop/",
  "/cart/",
  "/checkout/",
  "/my-account/",
  "/ayurveda/",
  "/dentistry/",
  "/blog-dummy-post/",
  "/dummy-detailed-post/",
  "/dummy-post-heading/",
  "/dummy-blog-heading/",
] as const;
