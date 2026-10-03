import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Landmark, Building2, Factory, GraduationCap, HeartPulse, ShoppingBag } from "lucide-react";
import { PageHero, Eyebrow, InnerFooter } from "../components/inner-chrome";
import { CountUp } from "../components/motion-details";
import heroImage from "../assets/industries-hero.jpg";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries | Fastspeed Solutions" },
      { name: "description", content: "Infrastructure, security and connectivity engineered for financial services, government, manufacturing, education, healthcare and retail across Nigeria." },
      { property: "og:title", content: "Industries | Fastspeed Solutions" },
      { property: "og:description", content: "Technology engineered for the operational priorities of every sector we serve." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IndustriesPage,
});

const industries = [
  {
    n: "01", icon: Landmark, title: "Financial services",
    body: "Banks, fintechs and microfinance institutions depend on resilient systems for every transaction. We design the data centres, networks and security layers that support financial operations and automated AML platforms.",
    points: ["Data centre & colocation", "Network security & compliance", "Cloud & connectivity"],
    clients: "Kuda, PalmPay, Fidelity, AB Microfinance Bank, Quickcheck, Royal Exchange",
  },
  {
    n: "02", icon: Building2, title: "Government",
    body: "Public institutions need secure, resilient systems that serve citizens without interruption. We deliver infrastructure and security built for accountability, scale and long service life.",
    points: ["Secure networks", "Data centre modernisation", "Managed support"],
    clients: "Various government institutions",
  },
  {
    n: "03", icon: Factory, title: "Manufacturing",
    body: "Production lines depend on connected operations. We build the networks, power and compute foundations that keep plants running and data flowing from floor to boardroom.",
    points: ["Industrial networking", "Power & cooling", "Enterprise hardware"],
    clients: "Conoil, Binatone",
  },
  {
    n: "04", icon: GraduationCap, title: "Education",
    body: "Learning institutions need affordable, dependable technology — from campus connectivity to secure data management. We make world-class infrastructure accessible to the sector.",
    points: ["Campus connectivity", "Cloud platforms", "Endpoint & security"],
    clients: null,
  },
  {
    n: "05", icon: HeartPulse, title: "Healthcare",
    body: "Clinical systems carry lives, not just data. We engineer the resilient, secure infrastructure that keeps records available, systems protected and care uninterrupted.",
    points: ["Resilient data centres", "Cybersecurity", "24/7 managed support"],
    clients: null,
  },
  {
    n: "06", icon: ShoppingBag, title: "Retail & e-commerce",
    body: "Commerce never closes. We support the platforms, payments connectivity and security that keep storefronts — physical and digital — trading around the clock.",
    points: ["Cloud & networks", "Payment infrastructure security", "Scalable compute"],
    clients: null,
  },
];

function IndustriesPage() {
  return (
    <div className="overflow-x-hidden bg-background font-body text-ink">
      <PageHero
        image={heroImage}
        imageAlt="Lagos business district skyline at dusk"
        eyebrow="Industries"
        title="Technology shaped to your sector."
        intro="Every industry carries its own operational priorities. We engineer infrastructure, connectivity and security around what matters most in yours."
        aside={<p className="max-w-[280px] text-sm leading-relaxed text-background/60">Six sectors. One standard: infrastructure your organisation can rely on.</p>}
      />

      <div id="content" className="mx-auto grid max-w-[1440px] scroll-mt-28 border-t border-editorial-ink/15 px-5 py-8 sm:grid-cols-3 sm:px-10 lg:py-12">
        {[["06", "Sectors served"], ["14", "Named clients"], ["24/7", "Managed support"]].map(([value, label]) => (
          <div key={label} className="border-b border-editorial-ink/15 py-5 sm:border-b-0 sm:border-r sm:px-7 sm:first:pl-0 sm:last:border-r-0">
            <CountUp value={value ?? ""} className="font-display text-5xl font-medium text-editorial-red lg:text-6xl" />
            <p className="mt-2 text-sm text-editorial-ink/60">{label}</p>
          </div>
        ))}
      </div>

      <section id="sectors" className="scroll-mt-28 py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
          <div className="max-w-3xl">
            <Eyebrow>Where we work</Eyebrow>
            <h2 className="mt-5 max-w-[18ch] font-display text-4xl font-medium leading-[1.1] sm:text-5xl lg:text-[60px]">Sector by sector, built to last.</h2>
          </div>
          <div className="mt-14 border-t border-editorial-ink/15">
            {industries.map((ind) => (
              <article key={ind.n} className="group grid gap-6 border-b border-editorial-ink/15 py-10 lg:grid-cols-[80px_64px_1fr_1fr] lg:items-start lg:gap-10 lg:py-14">
                <span className="font-mono text-sm text-editorial-red">{ind.n}</span>
                <span className="grid size-12 place-items-center rounded-full border border-editorial-ink/15 text-editorial-blue transition group-hover:border-editorial-red group-hover:text-editorial-red"><ind.icon size={22} /></span>
                <div>
                  <h3 className="font-display text-3xl font-medium leading-tight sm:text-4xl">{ind.title}</h3>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-editorial-ink/65">{ind.body}</p>
                  {ind.clients && <p className="mt-5 border-t border-editorial-ink/15 pt-4 font-mono text-xs uppercase leading-relaxed text-editorial-blue">Clients: {ind.clients}</p>}
                  {ind.n === "01" && <a href="#aml-infrastructure" className="mt-5 inline-flex items-center gap-2 border-b border-editorial-red pb-1 text-sm font-medium text-editorial-red transition hover:text-editorial-blue">Explore AML infrastructure <ArrowUpRight size={16} /></a>}
                </div>
                <ul className="grid gap-3 lg:pt-2">
                  {ind.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 border-b border-editorial-ink/10 pb-3 text-sm text-editorial-ink/75">
                      <span className="size-1.5 shrink-0 rounded-full bg-editorial-red" />{point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="aml-infrastructure" aria-labelledby="aml-heading" className="scroll-mt-28 border-t border-editorial-ink/15 bg-muted/40 py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
            <div>
              <Eyebrow>Financial services / AML infrastructure</Eyebrow>
              <h2 id="aml-heading" className="mt-6 max-w-[16ch] font-display text-4xl font-medium leading-[1.08] sm:text-5xl">The foundation beneath automated AML.</h2>
            </div>
            <div className="flex flex-col justify-end">
              <p className="max-w-2xl text-lg leading-relaxed text-editorial-ink/75">The Central Bank of Nigeria’s Baseline Standards for Automated AML Solutions put new demands on how financial institutions connect, monitor and retain information. AML software needs dependable infrastructure beneath it: compute capacity, secure data flows and protected records.</p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-editorial-ink/65">Fastspeed helps plan and deliver that supporting environment. We focus on the infrastructure around your chosen AML platform, working alongside your technology and compliance teams—not replacing the platform or promising compliance on its own.</p>
            </div>
          </div>

          <div className="mt-14 border-t border-editorial-ink/20">
            {[
              { number: "01", title: "Data centres & cloud", body: "Design resilient hosting, storage and recovery capacity for transaction-monitoring workloads and growing data volumes.", target: "data-centres" },
              { number: "02", title: "Connected systems", body: "Build secure network pathways between core banking, digital channels and the systems feeding your AML platform.", target: "cloud-networks" },
              { number: "03", title: "Security & audit data", body: "Protect access and sensitive records with layered security, monitoring and storage designed to support reliable audit trails.", target: "cybersecurity" },
              { number: "04", title: "Enterprise compute", body: "Source and configure servers and storage sized for analytical workloads, with room to scale as requirements change.", target: "enterprise-hardware" },
            ].map((pillar) => (
              <div key={pillar.number} className="grid gap-4 border-b border-editorial-ink/15 py-7 md:grid-cols-[64px_minmax(0,0.8fr)_minmax(0,1fr)_32px] md:items-start md:gap-8 lg:py-9">
                <span className="font-mono text-sm text-editorial-red">{pillar.number}</span>
                <h3 className="font-display text-2xl font-medium sm:text-3xl">{pillar.title}</h3>
                <p className="max-w-xl text-sm leading-relaxed text-editorial-ink/70 sm:text-base">{pillar.body}</p>
                <Link to="/solutions" hash={pillar.target} aria-label={`Explore ${pillar.title} solutions`} className="inline-flex text-editorial-blue transition hover:text-editorial-red"><ArrowUpRight size={22} /></Link>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
            <p className="max-w-xl text-sm leading-relaxed text-editorial-ink/60">Planning an AML technology upgrade? Let’s map the infrastructure your implementation needs.</p>
            <Link to="/contact" hash="content" className="inline-flex items-center gap-3 border-b border-editorial-red pb-1 font-medium text-editorial-red transition hover:text-editorial-blue">Discuss your requirements <ArrowUpRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="bg-editorial-ink py-20 text-background lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-10 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-24">
          <div>
            <Eyebrow light>Your sector, next</Eyebrow>
            <h2 className="mt-6 max-w-[16ch] font-display text-4xl font-medium leading-[1.08] sm:text-5xl">Don't see your industry? Let's talk.</h2>
          </div>
          <div>
            <p className="max-w-lg text-base leading-relaxed text-background/65">Our portfolio spans organisations of every size and sector across Nigeria. Whatever your operational challenge, our engineers will help define a practical path forward.</p>
            <Link to="/contact" hash="content" className="group mt-9 inline-flex items-center gap-4 rounded-full bg-signal py-1.5 pl-7 pr-1.5 text-lg text-signal-foreground transition hover:bg-signal/90">
              Speak with an expert <span className="grid size-[52px] place-items-center rounded-full bg-background text-signal transition group-hover:rotate-45"><ArrowUpRight size={20} /></span>
            </Link>
          </div>
        </div>
      </section>

      <InnerFooter cta={false} />
    </div>
  );
}
