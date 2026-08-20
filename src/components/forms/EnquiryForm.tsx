"use client";

import { homeFaqs } from "@/content/faqs";
import { home } from "@/content/home";
import { site } from "@/content/site";
import { useState } from "react";
import { Button } from "../ui/Button";

const codes = [
  { label: "India +91", value: "+91" },
  { label: "United Kingdom +44", value: "+44" },
  { label: "United States +1", value: "+1" },
  { label: "New Zealand +64", value: "+64" },
  { label: "United Arab Emirates +971", value: "+971" },
  { label: "Australia +61", value: "+61" },
];

const planTiming = homeFaqs[5]?.answer ?? "";
const hoursLine = home.journeySteps[0].fullDesc;

export function EnquiryForm({
  consent,
  dark,
  id = "enquiry-form",
}: {
  consent: string;
  dark?: boolean;
  id?: string;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const field =
    "mt-1.5 min-h-11 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-forest outline-none transition focus:border-lime focus:ring-2 focus:ring-lime/20";
  const labelCls = `text-xs font-semibold tracking-[0.04em] ${dark ? "text-white/80" : "text-forest"}`;

  return (
    <form
      id={id}
      noValidate
      className="grid gap-4"
      onSubmit={async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const name = String(data.get("name") || "").trim();
        const email = String(data.get("email") || "").trim();
        const mobile = String(data.get("mobile") || "").trim();
        const consentBox = Boolean(data.get("consent"));
        const nextErrors = {
          name: !name,
          email: !email.includes("@"),
          mobile: !mobile,
          consent: !consentBox,
        };
        setErrors(nextErrors);
        if (Object.values(nextErrors).some(Boolean)) {
          setStatus("error");
          return;
        }
        setStatus("loading");
        await new Promise((r) => setTimeout(r, 450));
        setStatus("ok");
      }}
    >
      <label className="block">
        <span className={labelCls}>{site.form.name}</span>
        <input
          name="name"
          required
          aria-invalid={errors.name || undefined}
          placeholder={site.form.name}
          className={field}
        />
      </label>
      <label className="block">
        <span className={labelCls}>{site.form.email}</span>
        <input
          name="email"
          type="email"
          required
          aria-invalid={errors.email || undefined}
          placeholder={site.form.email}
          className={field}
        />
      </label>
      <div className="grid gap-3 sm:grid-cols-[148px_1fr]">
        <select name="code" className={field} defaultValue="+91" aria-label="Country code">
          {codes.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
        <label className="block">
          <span className={labelCls}>{site.form.mobile}</span>
          <input
            name="mobile"
            required
            inputMode="tel"
            aria-invalid={errors.mobile || undefined}
            pattern="[0-9()#&+*\\-=.]+"
            placeholder={site.form.mobile}
            className={field}
          />
        </label>
      </div>
      <label className="block">
        <span className={labelCls}>{site.form.query}</span>
        <input name="query" placeholder={site.form.query} className={field} />
      </label>
      <label className={`flex items-start gap-3 text-sm ${dark ? "text-white/80" : "text-muted"}`}>
        <input
          type="checkbox"
          name="consent"
          required
          aria-invalid={errors.consent || undefined}
          className="mt-1 h-4 w-4 accent-[#8cc63f]"
        />
        <span>{consent}</span>
      </label>
      <Button type="submit" disabled={status === "loading"} aria-busy={status === "loading"} className={status === "loading" ? "opacity-70" : undefined}>
        {site.form.submit}
      </Button>
      <div aria-live="polite" className="space-y-2 text-sm">
      {status === "idle" || status === "loading" || status === "error" ? (
          <div className={dark ? "text-white/65" : "text-muted"}>
            <p>{hoursLine}</p>
            <p className="mt-2">{planTiming}</p>
          </div>
        ) : null}
        {status === "ok" ? (
          <div className="text-lime">
            <p>{hoursLine}</p>
            <p className="mt-2">{planTiming}</p>
          </div>
        ) : null}
        {status === "error" ? (
          <p className={dark ? "text-red-200" : "text-red-700"}>
            {[errors.name && site.form.name, errors.email && site.form.email, errors.mobile && site.form.mobile, errors.consent && site.privacyLabel]
              .filter(Boolean)
              .join(" · ")}
          </p>
        ) : null}
      </div>
    </form>
  );
}
