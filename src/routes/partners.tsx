import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, Handshake, BadgeCheck, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { PageHero, Eyebrow, InnerFooter } from "../components/inner-chrome";
import { CountUp, ScrollReveal } from "../components/motion-details";
import heroImage from "../assets/partners-hero.jpg";
import { OEM_PARTNERS, type PartnerCategory } from "../data/partners-and-clients";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Technology Partners | Fastspeed Solutions" },
      {
        name: "description",
        content:
          "Fastspeed Solutions partners directly with global OEMs including Cisco, Fortinet, Huawei, Microsoft, Dell EMC, HP, Oracle, Lenovo, VMware, IBM, APC, and CommScope to deliver enterprise ICT solutions across Nigeria.",
      },
      { property: "og:title", content: "Technology Partners | Fastspeed Solutions" },
      {
        property: "og:description",
        content: "World-class technology from global OEMs, expertly put to work across Nigeria.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PartnersPage,
});

const principles = [
  {
    icon: Handshake,
    title: "Direct OEM relationships",
    body: "Direct partnerships with tier-1 manufacturers let us source 100% genuine hardware and software at optimal pricing without grey-market risks.",
  },
  {
    icon: BadgeCheck,
    title: "Certified platform expertise",
    body: "Our engineers are factory-trained and certified across every platform we supply — ensuring standards-compliant deployment from day one.",
  },
  {
    icon: ShieldCheck,
    title: "End-to-end lifecycle support",
    body: "Official manufacturer warranties, rapid spares replacement, and 24/7 SLA-backed operational support for critical systems.",
  },
];

const categories: PartnerCategory[] = [
  "All",
  "Networking & Cabling",
  "Cybersecurity & Identity",
  "Compute, Storage & Cloud",
  "Power & Data Centre",
];

function PartnersPage() {
  const [activeCategory, setActiveCategory] = useState<PartnerCategory>("All");

  const filteredPartners =
    activeCategory === "All"
      ? OEM_PARTNERS
      : OEM_PARTNERS.filter((partner) => partner.category === activeCategory);

  return (
    <div className="overflow-x-hidden bg-background font-body text-ink">
      <PageHero
        image={heroImage}
        imageAlt="Data centre corridor with server racks and fiber cabling"
        eyebrow="Technology partners"
        title="World-class technology, expertly deployed."
        intro="We work directly with the world's leading technology manufacturers to bring genuine, fully supported solutions to organisations across Nigeria."
        aside={
          <p className="max-w-[280px] text-sm leading-relaxed text-background/60">
            {OEM_PARTNERS.length} global OEMs represented. One accountable local partner.
          </p>
        }
      />

      {/* Metrics Row */}
      <div
        id="content"
        className="mx-auto grid max-w-[1440px] scroll-mt-8 border-t border-editorial-ink/15 px-5 py-8 sm:grid-cols-3 sm:px-10 lg:py-12"
      >
        {[
          [String(OEM_PARTNERS.length), "Global OEM partners"],
          ["100%", "Genuine licensing & warranties"],
          ["24/7", "SLA-backed technical support"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="border-b border-editorial-ink/15 py-5 sm:border-b-0 sm:border-r sm:px-7 sm:first:pl-0 sm:last:border-r-0"
          >
            <CountUp
              value={value ?? ""}
              className="font-display text-5xl font-medium text-editorial-red lg:text-6xl"
            />
            <p className="mt-2 text-sm text-editorial-ink/60">{label}</p>
          </div>
        ))}
      </div>

      {/* The Partner Portfolio */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Eyebrow>The OEM portfolio</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-medium leading-[1.1] sm:text-5xl lg:text-[60px]">
                The technologies behind our delivery.
              </h2>
              <p className="mt-4 text-base text-editorial-ink/65">
                We supply, configure, and maintain genuine platforms from world-renowned technology
                manufacturers.
              </p>
            </div>

            {/* Quick banner link to Clients */}
            <div className="rounded-xl border border-editorial-ink/15 bg-muted/40 p-4 sm:p-5">
              <span className="font-mono text-xs uppercase tracking-wider text-signal font-semibold">
                Looking for clients?
              </span>
              <p className="mt-1 text-sm text-editorial-ink/75">
                Explore the banks, fintechs, and telecoms using our infrastructure.
              </p>
              <Link
                to="/clients"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand transition hover:text-signal"
              >
                View Client Portfolio <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-10 flex flex-wrap gap-2 border-b border-editorial-ink/15 pb-4">
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? OEM_PARTNERS.length
                  : OEM_PARTNERS.filter((p) => p.category === cat).length;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition sm:text-sm ${
                    isActive
                      ? "bg-editorial-ink text-background shadow-sm"
                      : "bg-muted/50 text-editorial-ink/70 hover:bg-muted hover:text-editorial-ink"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`grid size-5 place-items-center rounded-full text-[10px] ${
                      isActive
                        ? "bg-background/20 text-background"
                        : "bg-editorial-ink/10 text-editorial-ink/70"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Partner Grid */}
          <div className="mt-10 grid grid-cols-2 border-l border-t border-editorial-ink/15 sm:grid-cols-3 lg:grid-cols-4">
            {filteredPartners.map((partner, index) => (
              <ScrollReveal
                key={partner.name}
                delay={(index % 4) * 60}
                className="group border-b border-r border-editorial-ink/15 bg-background transition hover:bg-muted/40"
              >
                <div className="flex h-full flex-col justify-between p-6 sm:p-8">
                  <div className="flex min-h-24 items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      loading="lazy"
                      className="max-h-14 w-auto max-w-[130px] object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-16 sm:max-w-[150px]"
                    />
                  </div>
                  <div className="mt-6 border-t border-editorial-ink/10 pt-4">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display text-lg font-medium text-editorial-ink">
                        {partner.name}
                      </h3>
                      <span className="font-mono text-[10px] uppercase text-signal font-semibold">
                        OEM
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-editorial-blue">
                      {partner.focus}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-editorial-ink/65">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why OEM Partnerships Matter */}
      <section className="border-t border-ink/10 bg-muted/50 py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
          <div className="max-w-3xl">
            <Eyebrow>Why it matters</Eyebrow>
            <h2 className="mt-5 max-w-none font-display text-4xl font-medium leading-[1.1] sm:text-5xl lg:text-[60px]">
              <span className="block">Direct relationships that</span>
              <span className="block">protect your investment.</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden border border-editorial-ink/15 bg-editorial-ink/15 sm:grid-cols-3">
            {principles.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 90} className="bg-background">
                <div className="h-full p-8 lg:p-10">
                  <span className="grid size-12 place-items-center rounded-full border border-editorial-ink/15 text-editorial-blue">
                    <p.icon size={22} />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-medium">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-editorial-ink/65">{p.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Compliance & Authenticity Guarantee */}
          <div className="mt-12 rounded-2xl border border-editorial-ink/15 bg-background p-8 sm:p-10">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-5 shrink-0 text-signal" />
                <div>
                  <h4 className="font-display text-base font-semibold">
                    100% Genuine Serial Numbers
                  </h4>
                  <p className="mt-1 text-xs text-editorial-ink/65">
                    Every hardware asset ships with verifiable manufacturer serials, valid support
                    contracts, and import documentation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-5 shrink-0 text-signal" />
                <div>
                  <h4 className="font-display text-base font-semibold">
                    Direct Escalation Channels
                  </h4>
                  <p className="mt-1 text-xs text-editorial-ink/65">
                    Our direct tier agreements provide expedited RMA turnaround and direct L3 TAC
                    escalation for mission-critical issues.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-5 shrink-0 text-signal" />
                <div>
                  <h4 className="font-display text-base font-semibold">
                    Local Warranty Management
                  </h4>
                  <p className="mt-1 text-xs text-editorial-ink/65">
                    Fastspeed acts as your single point of contact in Nigeria, handling local
                    logistics, RMA returns, and warranty replacements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-editorial-ink py-20 text-background lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-10 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-24">
          <div>
            <Eyebrow light>Source with confidence</Eyebrow>
            <h2 className="mt-6 max-w-none font-display text-4xl font-medium leading-[1.08] sm:text-5xl">
              Need a specific platform
              <br />
              or vendor configuration?
            </h2>
          </div>
          <div>
            <p className="max-w-lg text-base leading-relaxed text-background/65">
              Tell us what your infrastructure requires. We will recommend the right technology from
              our OEM portfolio, secure competitive pricing, and stand behind it through
              installation and beyond.
            </p>
            <Link
              to="/contact"
              hash="content"
              className="group mt-9 inline-flex items-center gap-4 rounded-full bg-signal py-1.5 pl-7 pr-1.5 text-lg text-signal-foreground transition hover:bg-signal/90"
            >
              Speak with a solutions architect{" "}
              <span className="grid size-[52px] place-items-center rounded-full bg-background text-signal transition group-hover:rotate-45">
                <ArrowUpRight size={20} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <InnerFooter cta={false} />
    </div>
  );
}
