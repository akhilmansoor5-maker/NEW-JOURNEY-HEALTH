import { home } from "@/content/home";
import { featuredDoctors } from "@/content/doctors";
import { listingHospitals } from "@/content/hospitals";
import { featuredPosts } from "@/content/blog";
import { homeFaqs } from "@/content/faqs";
import { media } from "@/lib/media";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  CalendarCheck,
  Car,
  ClipboardList,
  FileCheck,
  Hospital,
  Languages,
  Plane,
  ArrowUpRight,
} from "lucide-react";
import { Accordion } from "../ui/Accordion";
import { Container } from "../ui/Container";
import { EnquiryBand } from "../forms/EnquiryBand";
import { SectionHeading } from "../ui/SectionHeading";
import { Hero } from "./Hero";
import { TreatmentExplorer } from "./TreatmentExplorer";
import { PatientJourney } from "./PatientJourney";
import { CostComparison } from "./CostComparison";
import { TestimonialsCarousel } from "./TestimonialsCarousel";
import { DoctorCard } from "../cards/DoctorCard";
import { BlogCard } from "../cards/BlogCard";

const conciergeIcons = [Hospital, CalendarCheck, Languages, ClipboardList, Plane, FileCheck, Building2, Car];
const comfortPhotos = [media.wellness, media.journey[4], media.journey[6], media.ayurveda];

export function HomePage() {
  const [featuredDoctor, ...otherDoctors] = featuredDoctors.slice(0, 5);
  const [featuredHospital, ...otherHospitals] = listingHospitals.slice(0, 3);
  const stories = featuredPosts.filter((p) => !("unreachableAsPost" in p && p.unreachableAsPost)).slice(0, 3);
  const [featuredStory, ...otherStories] = stories;
  const featuredConcierge = home.concierge.slice(0, 2);
  const compactConcierge = home.concierge.slice(2);
  const conciergePhotos = [media.heroPortrait, media.wellness];

  return (
    <>
      <Hero />
      <TreatmentExplorer />
      <PatientJourney />
      <section className="bg-forest py-14 text-white lg:py-20">
        <Container>
          <SectionHeading title={home.conciergeHeading} light className="max-w-xl" />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {featuredConcierge.map((item, i) => {
              const Icon = conciergeIcons[i];
              return (
                <article key={item.title} className="group relative min-h-[280px] overflow-hidden rounded-2xl transition duration-200 hover:-translate-y-0.5">
                  <Image
                    src={conciergePhotos[i]}
                    alt=""
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-forest-deep/65 transition duration-200 group-hover:bg-forest-deep/55" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <Icon className="h-6 w-6 text-lime transition duration-200 group-hover:-translate-y-0.5" aria-hidden />
                    <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75">{item.body}</p>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {compactConcierge.map((item, i) => {
              const Icon = conciergeIcons[i + 2];
              return (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-lime/40 hover:bg-white/10"
                >
                  <div className="flex items-start justify-between gap-3">
                    <Icon className="h-5 w-5 text-lime transition duration-200 group-hover:-translate-y-0.5" aria-hidden />
                    <ArrowUpRight className="h-4 w-4 text-white/30 transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-lime" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">{item.body}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
      <CostComparison />
      <section className="bg-sage py-14 lg:py-20">
        <Container className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading title={home.comfortHeading} className="max-w-sm" />
          <div className="grid gap-3 sm:grid-cols-2">
            {home.comfort.map((item, i) => (
              <article
                key={item}
                className={`group relative overflow-hidden rounded-2xl ${i === 0 ? "min-h-[240px] sm:row-span-2 sm:min-h-full" : "min-h-[160px]"}`}
              >
                <Image
                  src={comfortPhotos[i]}
                  alt=""
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.04]"
                  sizes="(min-width: 1024px) 28vw, 50vw"
                />
                <div className="absolute inset-0 bg-forest-deep/55 transition duration-200 group-hover:bg-forest-deep/45" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-lime">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{item}</h3>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-white py-14 lg:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading title={home.doctorsHeading} />
            <Link href="/doctors-listing/" className="min-h-11 inline-flex items-center text-sm font-semibold text-teal">
              {home.learnMore}
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <DoctorCard {...featuredDoctor} large />
            <div className="grid gap-5 sm:grid-cols-2">
              {otherDoctors.map((d) => (
                <DoctorCard key={d.name} {...d} />
              ))}
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-mist py-14 lg:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading title={home.hospitalsHeading} />
            <Link href="/hospitals/" className="min-h-11 inline-flex items-center text-sm font-semibold text-teal">
              {home.learnMore}
            </Link>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <Link href={featuredHospital.href} className="group relative min-h-[360px] overflow-hidden rounded-2xl transition duration-200 hover:-translate-y-0.5">
              <Image
                src={featuredHospital.photo}
                alt={featuredHospital.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-[1.04]"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-sm text-white/70">{featuredHospital.city}</p>
                <h3 className="mt-1 text-3xl font-semibold">{featuredHospital.title}</h3>
                <p className="mt-2 text-[11px] uppercase tracking-[0.12em] text-lime">{featuredHospital.stats}</p>
              </div>
            </Link>
            <div className="grid gap-4">
              {otherHospitals.map((h) => (
                <Link key={h.id} href={h.href} className="group grid grid-cols-[120px_1fr] overflow-hidden rounded-2xl bg-white transition duration-200 hover:-translate-y-0.5 sm:grid-cols-[150px_1fr]">
                  <div className="relative min-h-[120px] overflow-hidden">
                    <Image src={h.photo} alt={h.title} fill className="object-cover transition duration-300 group-hover:scale-[1.04]" sizes="150px" />
                  </div>
                  <div className="flex flex-col justify-center p-4">
                    <p className="text-sm text-muted">{h.city}</p>
                    <h3 className="mt-1 font-semibold text-forest">{h.title}</h3>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.12em] text-teal">{h.stats}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <section className="border-y border-line bg-white py-10">
        <Container className="grid items-center gap-8 lg:grid-cols-[200px_1fr]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal">{home.featuredHeading}</p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-5">
            {media.press.map((src) => (
              <Image
                key={src}
                src={src}
                alt=""
                width={140}
                height={56}
                className="h-8 w-auto object-cover opacity-40 grayscale transition duration-200 hover:opacity-80 hover:grayscale-0"
              />
            ))}
          </div>
        </Container>
      </section>
      <TestimonialsCarousel heading={home.testimonialsHeading} items={home.homeTestimonials} sage />
      {featuredStory ? (
        <section className="bg-white py-14 lg:py-20">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading title={home.newsHeading} />
              <Link href="/blog/" className="min-h-11 inline-flex items-center text-sm font-semibold text-teal">
                {home.learnMore}
              </Link>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <BlogCard
                href={featuredStory.path}
                image={featuredStory.image}
                title={featuredStory.title}
                heading={featuredStory.heading}
                category={featuredStory.category}
                date={featuredStory.date}
                author={featuredStory.author}
                featured
              />
              <div className="flex flex-col gap-4">
                {otherStories.map((p) => (
                  <BlogCard
                    key={p.slug}
                    href={p.path}
                    image={p.image}
                    title={p.title}
                    heading={p.heading}
                    category={p.category}
                    date={p.date}
                    author={p.author}
                  />
                ))}
              </div>
            </div>
          </Container>
        </section>
      ) : null}
      <section className="bg-sage py-14 lg:py-20">
        <Container className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading title={home.faqHeading} subtitle={home.faqSub} />
          <Accordion items={homeFaqs} heading={home.faqHeading} />
        </Container>
      </section>
      <EnquiryBand stillQuery />
    </>
  );
}
