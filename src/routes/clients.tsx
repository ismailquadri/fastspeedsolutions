import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Building2,
  Shield,
  Radio,
  Landmark,
  Plane,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import { PageHero, Eyebrow, InnerFooter } from "../components/inner-chrome";
import { CountUp, ScrollReveal } from "../components/motion-details";
import heroImage from "../assets/case-studies-hero.jpg";
import { ENTERPRISE_CLIENTS, type ClientCategory } from "../data/partners-and-clients";

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

const clientCategories: ClientCategory[] = [
  "All",
  "Banking & Fintech",
  "Telecommunications",
  "Aviation & Commerce",
  "Public Sector & NGOs",
];

const sectorCapabilities = [
  {
    icon: Landmark,
    sector: "Banking & Financial Services",
    summary:
      "Always-on core banking networks, automated branch connectivity, secure transaction routing, and resilient data centres that satisfy strict regulatory uptime standards.",
    focusList: [
      "High-availability core connectivity",
      "Branch SD-WAN deployment",
      "Data centre power & cooling",
      "PCI-DSS infrastructure compliance",
    ],
  },
  {
    icon: Radio,
    sector: "Telecommunications & ISPs",
    summary:
      "Carrier-grade network infrastructure, optical transport, enterprise hardware deployment, and DDoS defense systems capable of withstanding heavy throughput spikes.",
    focusList: [
      "Core routing & switching",
      "DDoS mitigation & traffic inspection",
      "High-density server racks",
      "24/7 technical field dispatch",
    ],
  },
  {
    icon: Plane,
    sector: "Aviation, Logistics & Commercial",
    summary:
      "Mission-critical ground handling IT, logistics communications, and enterprise campus hardware that maintain continuous operations across airports and distribution facilities.",
    focusList: [
      "Round-the-clock operations IT",
      "Structured cabling across expansive sites",
      "Power resilience & UPS systems",
      "Enterprise endpoint fleet support",
    ],
  },
  {
    icon: Shield,
    sector: "Public Sector & Non-Profits",
    summary:
      "Accountable, secure government data systems, inter-agency communication infrastructure, and distributed field connectivity for international development organisations.",
    focusList: [
      "Secure institutional networks",
      "Disaster recovery & backup",
      "Capacity training & knowledge transfer",
      "Sovereign compute environments",
    ],
  },
];

function ClientsPage() {
  const [activeCategory, setActiveCategory] = useState<ClientCategory>("All");

  const filteredClients =
    activeCategory === "All"
      ? ENTERPRISE_CLIENTS
      : ENTERPRISE_CLIENTS.filter((client) => client.category === activeCategory);

  return (
    <div className="overflow-x-hidden bg-background font-body text-ink">
      <PageHero
        image={heroImage}
        imageAlt="Business and infrastructure leaders reviewing enterprise network deployment"
        eyebrow="Client portfolio"
        title="Infrastructure trusted by Nigeria's industry leaders."
        intro="From tier-1 commercial banks and pioneering fintechs to national telecommunications operators and public institutions, organisations across Nigeria depend on Fastspeed Solutions."
        aside={
          <p className="max-w-[280px] text-sm leading-relaxed text-background/60">
            {ENTERPRISE_CLIENTS.length} organisations in our published portfolio. Zero room for
            downtime.
          </p>
        }
      />

      {/* Metrics Row */}
      <div
        id="content"
        className="mx-auto grid max-w-[1440px] scroll-mt-8 border-t border-editorial-ink/15 px-5 py-8 sm:grid-cols-3 sm:px-10 lg:py-12"
      >
        {[
          [String(ENTERPRISE_CLIENTS.length), "Named client organisations"],
          ["04", "Critical sectors served"],
          ["99%", "Client retention & satisfaction"],
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

      {/* Client Logo Gallery */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Eyebrow>Published clients</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-medium leading-[1.1] sm:text-5xl lg:text-[60px]">
                Organisations powering Nigeria.
              </h2>
              <p className="mt-4 text-base text-editorial-ink/65">
                Every organisation below relies on Fastspeed Solutions for critical ICT
                infrastructure, hardware supply, enterprise connectivity, or managed operations.
              </p>
            </div>

            {/* Quick link to Technology Partners */}
            <div className="rounded-xl border border-editorial-ink/15 bg-muted/40 p-4 sm:p-5">
              <span className="font-mono text-xs uppercase tracking-wider text-signal font-semibold">
                Technology Partners
              </span>
              <p className="mt-1 text-sm text-editorial-ink/75">
                Looking for our OEM partners (Cisco, Microsoft, Fortinet, etc.)?
              </p>
              <Link
                to="/partners"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand transition hover:text-signal"
              >
                View OEM Partners <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="mt-10 flex flex-wrap gap-2 border-b border-editorial-ink/15 pb-4">
            {clientCategories.map((cat) => {
              const count =
                cat === "All"
                  ? ENTERPRISE_CLIENTS.length
                  : ENTERPRISE_CLIENTS.filter((c) => c.category === cat).length;
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

          {/* Client Cards Grid */}
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-editorial-ink/15 bg-editorial-ink/15 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredClients.map((client, index) => (
              <ScrollReveal
                key={client.name}
                delay={(index % 4) * 60}
                className="bg-background transition hover:bg-muted/30"
              >
                <div className="flex h-full flex-col justify-between p-6 sm:p-7">
                  <div className="flex min-h-24 items-center justify-center rounded-lg bg-muted/20 p-4">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      loading="lazy"
                      className="max-h-16 w-auto max-w-[170px] object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  <div className="mt-6 border-t border-editorial-ink/10 pt-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-editorial-blue font-semibold">
                        {client.category}
                      </span>
                      <span className="font-mono text-xs text-editorial-ink/40">
                        #{String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-2 font-display text-lg font-medium leading-snug text-editorial-ink">
                      {client.name}
                    </h3>

                    <p className="mt-2 text-xs font-medium text-signal">{client.highlight}</p>

                    <p className="mt-2 text-xs leading-relaxed text-editorial-ink/65">
                      {client.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Capabilities Breakdown */}
      <section className="border-t border-ink/10 bg-muted/40 py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
          <div className="max-w-3xl">
            <Eyebrow>Sector Expertise</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.1] sm:text-5xl lg:text-[60px]">
              How we support each industry.
            </h2>
            <p className="mt-4 text-base text-editorial-ink/65">
              Every vertical requires specialized engineering. Here is how our infrastructure
              capabilities align with our clients' requirements.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {sectorCapabilities.map((item, i) => (
              <ScrollReveal
                key={item.sector}
                delay={i * 80}
                className="rounded-2xl border border-editorial-ink/15 bg-background p-8 sm:p-10"
              >
                <div className="flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-xl bg-signal/10 text-signal">
                    <item.icon size={24} />
                  </span>
                  <div>
                    <span className="font-mono text-xs uppercase text-editorial-blue font-semibold">
                      Vertical 0{i + 1}
                    </span>
                    <h3 className="font-display text-2xl font-medium">{item.sector}</h3>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-editorial-ink/70">{item.summary}</p>

                <div className="mt-6 border-t border-editorial-ink/10 pt-5">
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-editorial-ink/50">
                    Core capabilities:
                  </h4>
                  <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {item.focusList.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-editorial-ink/80">
                        <CheckCircle2 size={14} className="shrink-0 text-signal" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-editorial-ink py-20 text-background lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex h-6 items-center rounded-full bg-background/10 px-4 font-mono text-xs uppercase tracking-widest text-signal">
              The Fastspeed Standard
            </span>
            <blockquote className="mt-8 font-display text-3xl font-medium leading-[1.25] tracking-tight sm:text-4xl lg:text-[44px]">
              “Clients don’t evaluate partners by intent. They remember what worked, what broke, and
              what dragged longer than it should have.”
            </blockquote>
            <div className="mt-8">
              <p className="font-display text-xl font-medium">Shola Shonibare</p>
              <p className="text-sm text-background/60">MD/CEO, Fastspeed Business Solutions</p>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                hash="content"
                className="group inline-flex items-center gap-4 rounded-full bg-signal py-1.5 pl-7 pr-1.5 text-base text-signal-foreground transition hover:bg-signal/90"
              >
                Join our client portfolio{" "}
                <span className="grid size-[46px] place-items-center rounded-full bg-background text-signal transition group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <InnerFooter cta={false} />
    </div>
  );
}
