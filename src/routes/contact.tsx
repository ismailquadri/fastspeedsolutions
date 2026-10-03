import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { ArrowUpRight, Clock, Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { PageHero, Eyebrow, InnerFooter } from "../components/inner-chrome";
import heroImage from "../assets/contact-hero.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Fastspeed Solutions" },
      { name: "description", content: "Talk to Fastspeed Solutions in Ikeja, Lagos about enterprise hardware, security, data centres, networks and cloud. Call +234 806 665 9119." },
      { property: "og:title", content: "Contact Fastspeed Solutions" },
      { property: "og:description", content: "Speak with an expert about resilient infrastructure for your organisation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  full_name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(30).optional(),
  company: z.string().trim().max(120).optional(),
  subject: z.string().trim().max(120).optional(),
  message: z.string().trim().min(1, "Please tell us about your project").max(2000),
});

const subjects = ["Hardware supply", "Security solutions", "Data centre infrastructure", "Network solutions", "Cloud services", "Cybersecurity", "Something else"];

const field = "w-full border-0 border-b border-ink/20 bg-transparent px-0 py-3 text-base outline-none transition placeholder:text-ink/35 focus:border-signal";

function ContactPage() {
  const [errors, setErrors] = useState<Partial<Record<"full_name" | "email" | "phone" | "company" | "subject" | "message", string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const cleaned = Object.fromEntries(Object.entries(raw).map(([k, v]) => [k, v.trim() === "" ? undefined : v]));
    const parsed = schema.safeParse(cleaned);
    if (!parsed.success) {
      setErrors(Object.fromEntries(parsed.error.issues.map((i) => [String(i.path[0]), i.message])));
      return;
    }
    setErrors({});
    setStatus("sending");
    const { error } = await supabase.from("contact_enquiries").insert({
      full_name: parsed.data.full_name,
      email: parsed.data.email,
      phone: parsed.data.phone ?? null,
      company: parsed.data.company ?? null,
      subject: parsed.data.subject ?? null,
      message: parsed.data.message,
    });
    if (error) { setStatus("error"); return; }
    form.reset();
    setStatus("sent");
  }

  return (
    <div className="overflow-x-hidden bg-background font-body text-editorial-ink">
      <PageHero compact image={heroImage} imageAlt="Illustration of consultants and a client discussing infrastructure plans" eyebrow="Contact Fastspeed" title="Let's build what's next." intro="Tell us what your organisation needs. Our team will help define a practical path from requirements to resilient delivery." />
      <div className="mx-auto flex max-w-[1440px] flex-wrap gap-8 px-5 py-8 sm:px-10 lg:py-10"><a href="tel:+2348066659119" className="inline-flex items-center gap-3 border-b border-editorial-ink pb-1 text-lg transition hover:text-editorial-red"><Phone size={19} /> +234 (0) 806 665 9119</a><a href="mailto:sales@fastspeedsolutions.com" className="inline-flex items-center gap-3 border-b border-editorial-ink pb-1 text-lg transition hover:text-editorial-red"><Mail size={19} /> Email sales <ArrowUpRight size={18} /></a></div>

      <section id="content" className="scroll-mt-28 border-t border-editorial-ink/10 py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-10 lg:grid-cols-[1.4fr_0.6fr] lg:gap-24">
          <div>
            <Eyebrow>Send us a message</Eyebrow>
            <h2 className="mt-5 max-w-[16ch] font-display text-4xl font-medium leading-[1.1] sm:text-5xl">Tell us what you're building.</h2>
            {status === "sent" ? (
              <div className="mt-12 border border-ink/10 bg-muted/50 p-10">
                <CheckCircle2 className="text-signal" size={36} />
                <h3 className="mt-6 font-display text-3xl font-semibold">Thank you — message received.</h3>
                <p className="mt-3 max-w-md text-ink/60">A member of our team will get back to you shortly. For urgent requests, call +234 (0) 806 665 9119.</p>
                <button type="button" onClick={() => setStatus("idle")} className="mt-8 border-b border-ink pb-0.5 text-sm font-medium">Send another message</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2">
                <Field label="Full name *" error={errors.full_name}><input name="full_name" autoComplete="name" maxLength={100} placeholder="Your name" className={field} /></Field>
                <Field label="Email address *" error={errors.email}><input name="email" type="email" autoComplete="email" maxLength={255} placeholder="you@company.com" className={field} /></Field>
                <Field label="Phone number" error={errors.phone}><input name="phone" type="tel" autoComplete="tel" maxLength={30} placeholder="+234" className={field} /></Field>
                <Field label="Organisation" error={errors.company}><input name="company" autoComplete="organization" maxLength={120} placeholder="Company name" className={field} /></Field>
                <Field label="How can we help?" error={errors.subject} wide>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {subjects.map((s) => (
                      <label key={s} className="cursor-pointer">
                        <input type="radio" name="subject" value={s} className="peer sr-only" />
                        <span className="inline-block rounded-full border border-ink/15 px-4 py-2 text-sm transition peer-checked:border-signal peer-checked:bg-signal peer-checked:text-signal-foreground peer-focus-visible:ring-2 peer-focus-visible:ring-signal hover:border-ink/40">{s}</span>
                      </label>
                    ))}
                  </div>
                </Field>
                <Field label="Message *" error={errors.message} wide><textarea name="message" rows={5} maxLength={2000} placeholder="Tell us about your project, timelines and requirements" className={`${field} resize-none`} /></Field>
                <div className="flex flex-wrap items-center gap-6 sm:col-span-2">
                  <button type="submit" disabled={status === "sending"} className="group inline-flex items-center gap-4 rounded-full bg-signal py-1.5 pl-7 pr-1.5 text-lg text-signal-foreground transition hover:bg-signal/90 disabled:opacity-60">
                    {status === "sending" ? "Sending…" : "Send message"}
                    <span className="grid size-[52px] place-items-center rounded-full bg-background text-signal transition group-hover:rotate-45"><ArrowUpRight size={20} /></span>
                  </button>
                  {status === "error" && <p role="alert" className="text-sm text-signal">Something went wrong. Please try again or email sales@fastspeedsolutions.com.</p>}
                </div>
              </form>
            )}
          </div>

          <aside className="border-t border-editorial-ink p-0 pt-8 lg:self-start">
            <Eyebrow>Contact information</Eyebrow>
            <ul className="mt-10 grid gap-8">
              <Info icon={MapPin} label="Office"><a href="https://maps.google.com/?q=8+Agbaoku+St,+Allen,+Ikeja,+Lagos,+Nigeria" target="_blank" rel="noreferrer" className="hover:text-signal">8 Agbaoku St, Allen,<br />Ikeja, Lagos, Nigeria</a></Info>
              <Info icon={Phone} label="Phone"><a href="tel:+2348066659119" className="block hover:text-signal">+234 (0) 806 665 9119</a><a href="tel:+2349010010540" className="block hover:text-signal">+234 (0) 90 1001 0540</a></Info>
              <Info icon={Mail} label="Email"><a href="mailto:sales@fastspeedsolutions.com" className="break-all hover:text-signal">sales@fastspeedsolutions.com</a></Info>
              <Info icon={Clock} label="Business hours"><span className="block">Mon – Fri: 8:00 AM – 6:00 PM</span><span className="block">Saturday: 9:00 AM – 2:00 PM</span><span className="block text-editorial-ink/50">Sunday: Closed</span></Info>
            </ul>
          </aside>
        </div>
      </section>

      <section aria-label="Office location map" className="border-t border-ink/10">
        <iframe title="Fastspeed Solutions office, Ikeja, Lagos" src="https://www.google.com/maps?q=8+Agbaoku+St,+Allen,+Ikeja,+Lagos,+Nigeria&output=embed" loading="lazy" className="h-[420px] w-full grayscale" />
      </section>

      <InnerFooter cta={false} />
    </div>
  );
}

function Field({ label, error, wide, children }: { label: string; error?: string | undefined; wide?: boolean; children: React.ReactNode }) {
  return (
    <label className={`block ${wide ? "sm:col-span-2" : ""}`}>
      <span className="text-xs font-semibold uppercase tracking-widest text-ink/55">{label}</span>
      {children}
      {error && <span className="mt-2 block text-sm text-signal">{error}</span>}
    </label>
  );
}

function Info({ icon: Icon, label, children }: { icon: typeof Mail; label: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-5 border-b border-editorial-ink/15 pb-8 last:border-0 last:pb-0">
      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-signal/10 text-signal"><Icon size={19} /></span>
      <div><p className="text-xs uppercase tracking-widest text-editorial-ink/50">{label}</p><div className="mt-2 text-base leading-relaxed">{children}</div></div>
    </li>
  );
}
