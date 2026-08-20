export function withSlash(path: string) {
  if (path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

export const darkHeroPaths = new Set([
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
  "/hospital-detail-page-template/",
  "/about-us/",
  "/contact-us/",
  "/ayurveda/",
  "/dentistry/",
  "/blog-dummy-post/",
  "/dummy-detailed-post/",
  "/dummy-post-heading/",
  "/dummy-blog-heading/",
]);

export function isDarkHero(pathname: string) {
  return darkHeroPaths.has(withSlash(pathname));
}

export function parsePounds(value: string) {
  return Number(value.replace(/[£,]/g, "")) || 0;
}
