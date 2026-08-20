import { withSlash } from "./ui";

export const hideConvertBar = new Set([
  "/shop/",
  "/cart/",
  "/checkout/",
  "/my-account/",
  "/terms/",
  "/privacy/",
  "/comming-soon/",
]);

const localEnquiry = new Set([
  "/",
  "/about-us/",
  "/faq/",
  "/contact-us/",
  "/doctors-listing/",
  "/doctor-detail-page-template/",
  "/hospitals/",
  "/hospital-detail-page-template/",
  "/blog/",
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
  "/ayurveda/",
  "/dentistry/",
  "/blog-dummy-post/",
  "/dummy-detailed-post/",
  "/dummy-post-heading/",
  "/dummy-blog-heading/",
]);

export function enquiryHref(pathname: string) {
  return localEnquiry.has(withSlash(pathname)) ? "#enquiry" : "/contact-us/#enquiry";
}
