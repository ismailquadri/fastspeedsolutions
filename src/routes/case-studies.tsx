import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero, Eyebrow, InnerFooter } from "../components/inner-chrome";
import { CountUp, ScrollReveal } from "../components/motion-details";
import heroImage from "../assets/case-studies-hero.jpg";
import networkProject from "../assets/fastspeed-network-project.jpg";
import consultationImage from "../assets/fastspeed-consultation.jpg";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies | Fastspeed Solutions" },
      { name: "description", content: "Explore Fastspeed's published client portfolio across financial services, telecoms and manufacturing, and the solutions we offer each sector." },
      { property: "og:title", content: "Case Studies | Fastspeed Solutions" },
      { property: "og:description", content: "Organisations across Nigeria's essential industries trust Fastspeed for enterprise technology." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudiesPage,
});

const clients = ["Kuda Microfinance Bank", "AB Microfinance Bank", "PalmPay", "Quickcheck", "Fidelity", "Royal Exchange", "Globacom", "Swift Network", "Spectranet", "Conoil", "Binatone", "Dane Investment", "AddyFX", "The Solar Shop"];

const sectors = [
  { number: "01", count: "6", title: "Financial organisations", detail: "Kuda Microfinance Bank, AB Microfinance Bank, PalmPay, Quickcheck, Fidelity and Royal Exchange.", service: "Cybersecurity & data centres", href: "/solutions#cybersecurity" },
  { number: "02", count: "3", title: "Telecom and network providers", detail: "Globacom, Swift Network and Spectranet appear in Fastspeed's published client portfolio.", service: "Cloud & networks", href: "/solutions#cloud-networks" },
  { number: "03", count: "2", title: "Manufacturing organisations", detail: "Conoil and Binatone appear in Fastspeed's published client portfolio.", service: "Enterprise hardware", href: "/solutions#enterprise-hardware" },
  { number: "04", count: "2", title: "Investment and trading firms", detail: "Dane Investment and AddyFX.", service: "Cybersecurity", href: "/solutions#cybersecurity" },
  { number: "05", count: "1", title: "Energy and utilities", detail: "The Solar Shop.", service: "Managed support", href: "/solutions#support-training" },
  { number: "06", count: "Gov", title: "Government and public sector", detail: "Various government institutions, including training and capacity building programmes.", service: "Training & support", href: "/solutions#support-training" },
];

function CaseStudiesPage() {
  return (
    <div className="overflow-x-hidden bg-background font-body text-editorial-ink">
      <PageHero image={heroImage} imageAlt="Illustration of a business leader and engineer reviewing network equipment" eyebrow="Selected work" title={<>Work that keeps<br />business moving.</>} intro="A view of the industries in Fastspeed's published client portfolio and the capabilities relevant to them." />
      <section id="content" aria-label="Client portfolio at a glance" className="mx-auto max-w-[1440px] scroll-mt-28 px-5 pb-16 pt-10 sm:px-10 lg:pb-20 lg:pt-16">
        <div className="grid border-t border-editorial-ink/15 pt-7 sm:grid-cols-3">
          {[['6', 'Financial organisations'], ['3', 'Telecom & network providers'], ['2', 'Manufacturing organisations']].map(([value, label], index) => <ScrollReveal key={label} delay={index * 90} className="border-b border-editorial-ink/15 sm:border-b-0 sm:border-r sm:last:border-r-0"><div className={`py-5 sm:px-7 ${index === 0 ? "sm:pl-0" : ""}`}><CountUp value={value ?? ""} className="font-display text-6xl font-medium text-editorial-red lg:text-7xl" /><p className="mt-2 text-sm text-editorial-ink/60">{label}</p></div></ScrollReveal>)}
        </div>
        <p className="mt-6 text-sm text-editorial-ink/50">Counts reflect organisations in Fastspeed's published client portfolio, not project-specific performance results.</p>
      </section>

      <section className="bg-editorial-ink text-background">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[1fr_1fr]">
          <img src={networkProject} alt="Engineer working on enterprise network infrastructure" loading="lazy" width={1536} height={1024} className="aspect-[4/3] h-full w-full object-cover lg:aspect-auto" />
          <div className="flex flex-col justify-between px-5 py-14 sm:px-10 lg:p-16"><div><Eyebrow light>Sector focus / 01</Eyebrow><h2 className="mt-8 max-w-none font-display text-4xl font-medium leading-[1.08] sm:text-5xl">Connectivity for<br />demanding operations.</h2><p className="mt-6 max-w-md leading-relaxed text-background/70">Fastspeed designs high-availability networks and scalable cloud environments around each organisation's operational needs.</p></div><div className="mt-16 border-t border-background/20 pt-6"><p className="text-sm text-background/55">Relevant industries: finance and telecoms</p><Link to="/solutions" hash="cloud-networks" className="mt-6 inline-flex items-center gap-2 border-b border-background pb-1 transition hover:text-signal">Explore cloud & networks <ArrowUpRight size={18} /></Link></div></div>
        </div>
      </section>

      <section aria-labelledby="sectors-title" className="py-20 lg:py-28"><div className="mx-auto max-w-[1440px] px-5 sm:px-10"><div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20"><div><Eyebrow>Client portfolio by industry</Eyebrow><h2 id="sectors-title" className="mt-6 max-w-[11ch] font-display text-4xl font-medium leading-[1.08] sm:text-5xl">The sectors we serve.</h2><p className="mt-6 max-w-sm leading-relaxed text-editorial-ink/60">Published client names are grouped by industry. Service links show relevant capabilities, not attributed project results.</p></div><div className="border-t border-editorial-ink">{sectors.map(({ number, count, title, detail, service, href }) => <article key={number} className="grid gap-5 border-b border-editorial-ink/15 py-8 sm:grid-cols-[70px_1fr] lg:gap-8"><span className="font-mono text-sm text-editorial-blue">{number} / 0{sectors.length}</span><div><div className="flex items-start gap-6"><strong className="font-display text-5xl font-medium text-editorial-red">{count}</strong><h3 className="font-display text-2xl font-medium leading-tight sm:text-3xl">{title}</h3></div><p className="mt-4 text-sm leading-relaxed text-editorial-ink/60">{detail}</p><Link to="/solutions" hash={href.split("#")[1] ?? ""} className="mt-5 inline-flex items-center gap-2 border-b border-editorial-ink pb-1 text-sm transition hover:text-editorial-red">{service} <ArrowUpRight size={17} /></Link></div></article>)}</div></div></div></section>

      <section aria-labelledby="clients-title" className="bg-muted/40 py-20 lg:py-28"><div className="mx-auto max-w-[1440px] px-5 sm:px-10"><div className="flex flex-wrap items-end justify-between gap-6"><div><Eyebrow>Published clients</Eyebrow><h2 id="clients-title" className="mt-5 font-display text-4xl font-medium sm:text-5xl">Organisations in our portfolio.</h2></div><p className="max-w-sm text-sm leading-relaxed text-editorial-ink/60">These names appear in Fastspeed's publicly listed client portfolio.</p></div><div className="mt-12 grid border-t border-editorial-ink/20 sm:grid-cols-2 lg:grid-cols-3">{clients.map((client, i) => <ScrollReveal key={client} delay={(i % 3) * 70} className="border-b border-editorial-ink/15"><div className="flex min-h-28 items-center gap-6 py-5 sm:pr-8"><span className="font-mono text-xs text-editorial-blue">{String(i + 1).padStart(2, '0')}</span><span className="font-display text-xl font-medium">{client}</span></div></ScrollReveal>)}</div></div></section>
      <InnerFooter image={consultationImage} />
    </div>
  );
}
