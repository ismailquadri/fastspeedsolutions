import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, Landmark, Radio } from "lucide-react";
import { PageHero, Eyebrow, InnerFooter } from "../components/inner-chrome";
import { CountUp, ScrollReveal } from "../components/motion-details";
import heroImage from "../assets/case-studies-hero.jpg";
import { ENTERPRISE_CLIENTS } from "../data/partners-and-clients";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Enterprise Clients | Fastspeed Solutions" },
      {
        name: "description",
        content:
          "Explore Fastspeed Solutions' client portfolio across commercial banking, fintech, telecommunications, aviation, and public sector institutions in Nigeria including GTBank, Kuda, Moniepoint, PalmPay, MTN, and NAHCO Aviance.",
      },
      { property: "og:title", content: "Enterprise Clients | Fastspeed Solutions" },
      {
        property: "og:description",
        content:
          "Infrastructure trusted by Nigeria's leading banks, fintechs, telcos, and public enterprises.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ClientsPage,
});

const principles = [
  {
    icon: Landmark,
    title: "Financial-grade uptime",
    body: "Core banking networks, high-availability data centres, and payment gateway infrastructure engineered for zero unplanned downtime.",
  },
  {
    icon: Radio,
    title: "Carrier-scale networks",
    body: "Enterprise routing, optical transmission, and DDoS mitigation shaped around demanding operational throughput.",
  },
  {
    icon: ShieldCheck,
    title: "Accountable support",
    body: "Round-the-clock managed monitoring, proactive maintenance, and rapid SLA-backed support across Nigeria.",
  },
];

function ClientsPage() {
  return (
    <div className="overflow-x-hidden bg-background font-body text-ink">
      <PageHero
        image={heroImage}
        imageAlt="Business and infrastructure leaders reviewing enterprise network deployment"
        eyebrow="Client portfolio"
        title="Organisations powering Nigeria."
        intro="From tier-1 commercial banks and digital fintechs to national telecommunications and public institutions, organisations across Nigeria trust Fastspeed Solutions."
        aside={
          <p className="max-w-[280px] text-sm leading-relaxed text-background/60">
            {ENTERPRISE_CLIENTS.length} organisations represented. Essential infrastructure
            delivered.
          </p>
        }
      />

      <div
        id="content"
        className="mx-auto grid max-w-[1440px] scroll-mt-8 border-t border-editorial-ink/15 px-5 py-8 sm:grid-cols-3 sm:px-10 lg:py-12"
      >
        {[
          [String(ENTERPRISE_CLIENTS.length), "Client organisations"],
          ["04", "Critical sectors"],
          ["99%", "Client satisfaction"],
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

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
          <div className="max-w-3xl">
            <Eyebrow>The portfolio</Eyebrow>
            <h2 className="mt-5 max-w-[18ch] font-display text-4xl font-medium leading-[1.1] sm:text-5xl lg:text-[60px]">
              The names behind
              <br />
              our delivery.
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-2 border-l border-t border-editorial-ink/15 sm:grid-cols-3 lg:grid-cols-4">
            {ENTERPRISE_CLIENTS.map((client, index) => (
              <ScrollReveal
                key={client.name}
                delay={(index % 4) * 65}
                className="border-b border-r border-editorial-ink/15"
              >
                <div className="group flex min-h-40 items-center justify-center px-5 py-8 transition hover:bg-muted/60">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    loading="lazy"
                    className="h-14 w-full max-w-36 object-contain transition-transform duration-300 group-hover:scale-105 sm:h-16"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-muted/50 py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
          <div className="max-w-3xl">
            <Eyebrow>Why it matters</Eyebrow>
            <h2 className="mt-5 max-w-none font-display text-4xl font-medium leading-[1.1] sm:text-5xl lg:text-[60px]">
              <span className="block">Infrastructure shaped</span>
              <span className="block">around demanding realities.</span>
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
        </div>
      </section>

      <section className="bg-editorial-ink py-20 text-background lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-10 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-24">
          <div>
            <Eyebrow light>Proven in production</Eyebrow>
            <h2 className="mt-6 max-w-none font-display text-4xl font-medium leading-[1.08] sm:text-5xl">
              Ready to build infrastructure
              <br />
              your business can trust?
            </h2>
          </div>
          <div>
            <p className="max-w-lg text-base leading-relaxed text-background/65">
              Whether you are modernising legacy data centres, upgrading enterprise networking, or
              securing critical systems, our team delivers results you can rely on.
            </p>
            <Link
              to="/contact"
              hash="content"
              className="group mt-9 inline-flex items-center gap-4 rounded-full bg-signal py-1.5 pl-7 pr-1.5 text-lg text-signal-foreground transition hover:bg-signal/90"
            >
              Discuss your requirements{" "}
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
