import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Server, ShieldCheck, Database, Network, Cloud, ScanSearch } from "lucide-react";
import { Button } from "../components/ui/button";
import { CountUp, MobileMenuToggle, ScrollReveal, useHeroParallax } from "../components/motion-details";
import logo from "../assets/fastspeed-logo.png";
import heroImage from "../assets/hero-datacentre.jpg";
import engineerImage from "../assets/fastspeed-engineer.jpg";
import consultationImage from "../assets/fastspeed-consultation.jpg";
import approachVideo from "../assets/fastspeed-approach.webm.asset.json";
import approachPoster from "../assets/fastspeed-approach-poster.jpg.asset.json";
import ciscoLogo from "../assets/partners/cisco.png";
import fortinetLogo from "../assets/partners/fortinet.png";
import huaweiLogo from "../assets/partners/huawei.png";
import microsoftLogo from "../assets/partners/microsoft.png";
import heroMicrosoft from "../assets/hero-logos/microsoft.png.asset.json";
import heroCisco from "../assets/hero-logos/cisco.png.asset.json";
import heroOracle from "../assets/hero-logos/oracle.png.asset.json";
import dellLogo from "../assets/partners/dell.png";
import hpLogo from "../assets/partners/hp.png";
import oracleLogo from "../assets/partners/oracle.png";
import lenovoLogo from "../assets/partners/lenovo.png";
import vmwareLogo from "../assets/partners/vmware.png";
import ibmLogo from "../assets/partners/ibm.png";
import emcLogo from "../assets/partners/emc.png";
import apcLogo from "../assets/partners/apc.png";
import commscopeLogo from "../assets/partners/commscope.png";
import netscoutLogo from "../assets/partners/netscout.png";
import arrayLogo from "../assets/partners/array.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fastspeed Solutions | Enterprise IT Solutions in Nigeria" },
      { name: "description", content: "Infrastructure, security, networks and cloud engineered for organisations across Nigeria. Explore Fastspeed Solutions' expertise and technology partners." },
      { property: "og:title", content: "Fastspeed Solutions | Enterprise IT Solutions in Nigeria" },
      { property: "og:description", content: "Technology that fits the mission. Resilient infrastructure and expert delivery for Nigerian organisations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Homepage,
});

const industries = [
  { name: "Financial services", detail: "Data centres, networks and security layers for banks, fintechs and microfinance institutions that cannot afford downtime." },
  { name: "Government", detail: "Secure, resilient systems built for accountability, scale and long service life in public institutions." },
  { name: "Manufacturing", detail: "Networks, power and compute that keep plants running and data flowing from the factory floor to the boardroom." },
  { name: "Education", detail: "Affordable, dependable campus connectivity, cloud platforms and secure data management for learning institutions." },
  { name: "Healthcare", detail: "Resilient, protected infrastructure that keeps clinical records available and care uninterrupted." },
  { name: "Retail & e-commerce", detail: "Platforms, payments connectivity and security that keep physical and digital storefronts trading around the clock." },
];
const expertise = [
  { name: "Hardware supply", description: "Servers, storage, and networking equipment sourced, configured, and deployed to your specifications.", icon: Server, href: "/solutions#enterprise-hardware", tone: "signal" },
  { name: "Security solutions", description: "Threat detection, access control, and protection designed around your risk profile.", icon: ShieldCheck, href: "/solutions#cybersecurity", tone: "brand" },
  { name: "Data centre infrastructure", description: "Design, build, and manage data centre environments engineered for resilience and efficiency.", icon: Database, href: "/solutions#data-centres", tone: "signal" },
  { name: "Network solutions", description: "Secure, scalable networks that keep teams, offices and critical operations connected.", icon: Network, href: "/solutions#cloud-networks", tone: "brand" },
  { name: "Cloud services", description: "Migration, hosting, and hybrid cloud architectures that scale with demand.", icon: Cloud, href: "/solutions#cloud-networks", tone: "signal" },
  { name: "Cybersecurity", description: "Proactive monitoring, vulnerability assessment and incident response for critical systems.", icon: ScanSearch, href: "/solutions#cybersecurity", tone: "brand" },
];
const partners = [
  { name: "Cisco", logo: ciscoLogo }, { name: "Fortinet", logo: fortinetLogo },
  { name: "Huawei", logo: huaweiLogo }, { name: "Microsoft", logo: microsoftLogo },
  { name: "Dell", logo: dellLogo }, { name: "HP", logo: hpLogo },
  { name: "Oracle", logo: oracleLogo }, { name: "Lenovo", logo: lenovoLogo },
  { name: "VMware", logo: vmwareLogo }, { name: "IBM", logo: ibmLogo },
  { name: "EMC²", logo: emcLogo }, { name: "APC", logo: apcLogo },
  { name: "CommScope", logo: commscopeLogo }, { name: "NetScout", logo: netscoutLogo },
  { name: "Array Networks", logo: arrayLogo },
];
const work = [
  { label: "Financial services", title: "Always-on infrastructure for a growing financial sector", description: "Infrastructure, security and connectivity tailored to the demands of financial operations.", metric: "6", metricLabel: "financial organisations in the published client portfolio", services: "Data centres · Cybersecurity", href: "/solutions#data-centres" },
  { label: "Telecommunications", title: "One secure network across distributed operations", description: "High-availability networks and scalable connectivity for providers serving connected customers.", metric: "3", metricLabel: "telecom and network providers in the published client portfolio", services: "Cloud & networks", href: "/solutions#cloud-networks" },
  { label: "Manufacturing", title: "A dependable digital foundation for production", description: "Practical infrastructure and enterprise technology shaped around demanding operations.", metric: "2", metricLabel: "manufacturing organisations in the published client portfolio", services: "Enterprise hardware · Networks", href: "/solutions#enterprise-hardware" },
];

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <span className={`inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-widest ${light ? "text-background/75" : "text-signal"}`}><span className="size-1.5 rounded-full bg-signal" />{children}</span>;
}

function Homepage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openIndustry, setOpenIndustry] = useState<number | null>(null);
  const approachVideoRef = useRef<HTMLVideoElement>(null);
  const { sectionRef, imageRef, contentRef } = useHeroParallax();
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPlayback = () => {
      const video = approachVideoRef.current;
      if (!video) return;
      if (motionPreference.matches) video.pause();
      else void video.play().catch(() => {});
    };
    syncPlayback();
    motionPreference.addEventListener("change", syncPlayback);
    return () => motionPreference.removeEventListener("change", syncPlayback);
  }, []);
  return (
    <div className="overflow-x-hidden bg-background font-body text-ink">
      <section ref={sectionRef} id="top" className="relative flex min-h-svh flex-col overflow-hidden bg-ink text-background">
        <img ref={imageRef} src={heroImage} alt="A dark, modern data-centre corridor with racks of glowing servers" width={1920} height={1080} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[62%_center] lg:object-center" />
        <div className="absolute inset-0 bg-ink/30 lg:bg-gradient-to-r lg:from-ink/45 lg:via-ink/10 lg:to-transparent mix-blend-multiply" />
        <header className="relative z-20 flex w-full items-center justify-between gap-5 px-5 py-6 sm:px-10 lg:px-6 lg:py-7 xl:px-[22px]">
          <Link to="/" aria-label="Fastspeed Solutions home" className="flex shrink-0 items-center gap-2">
            <img src={logo} alt="" width={56} height={56} className="size-11 object-contain lg:size-[54px]" />
            <span className="font-display text-xl font-bold leading-none text-background lg:text-[30px]">Fastspeed<small className="mt-1.5 block text-[9px] font-semibold uppercase tracking-[0.95em] text-signal lg:text-[11px]">Solutions</small></span>
          </Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-11 text-[15px] font-normal text-background/80 lg:flex xl:mr-24">
            <Link to="/" className="relative py-3 text-signal after:absolute after:-left-5 after:-right-5 after:-bottom-1.5 after:h-0.5 after:bg-signal">Home</Link>
            <Link to="/about" className="transition hover:text-background">About Us</Link>
            <Link to="/solutions" className="inline-flex items-center gap-1.5 transition hover:text-background">Services <ChevronDown size={16} /></Link>
            <Link to="/case-studies" className="transition hover:text-background">Case Studies</Link>
            <Link to="/industries" className="transition hover:text-background">Industries</Link>
            <Link to="/partners" className="transition hover:text-background">Partners</Link>
          </nav>
          <Link to="/contact" className="hidden shrink-0 rounded-full bg-background px-8 py-3.5 text-[15px] font-medium text-ink transition hover:bg-signal hover:text-signal-foreground lg:inline-flex">Talk to us</Link>
          <MobileMenuToggle open={menuOpen} onToggle={() => setMenuOpen(!menuOpen)} controls="home-mobile-nav" />
          {menuOpen && <nav id="home-mobile-nav" aria-label="Mobile navigation" className="mobile-nav-enter absolute left-5 right-5 top-[calc(100%-8px)] z-30 grid gap-1 border border-background/15 bg-ink p-4 shadow-xl sm:left-10 sm:right-10 lg:hidden">
            {([ ["Home", "/"], ["About Us", "/about"], ["Services", "/solutions"], ["Case Studies", "/case-studies"], ["Industries", "/industries"], ["Partners", "/partners"], ["Talk to us", "/contact"] ] as const).map(([label, href]) => <Link key={label} to={href} onClick={() => setMenuOpen(false)} className="border-b border-background/10 px-2 py-3 text-sm font-normal text-background">{label}</Link>)}
          </nav>}
        </header>
        <div ref={contentRef} className="relative z-10 flex w-full flex-1 flex-col justify-center px-5 pb-16 pt-16 will-change-transform sm:px-10 lg:px-[54px] lg:pb-10 lg:pt-6">
          <div className="animate-fade-up">
            <h1 className="max-w-[14ch] font-display text-[32px] font-medium leading-[1.08] tracking-tight sm:text-5xl lg:max-w-[660px] lg:text-[54px]">Transform operations with resilient infrastructure.</h1>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a href="#contact" className="group inline-flex items-center gap-3 rounded-full bg-signal py-1 pl-5 pr-1 text-base text-signal-foreground shadow-[0_0_0_3px_color-mix(in_oklab,var(--signal)_25%,transparent)] transition hover:bg-signal/90">Speak with an expert <span className="grid size-[42px] place-items-center rounded-full bg-background text-signal transition group-hover:rotate-45"><ArrowUpRight size={15} /></span></a>
              <Link to="/solutions" className="inline-flex items-center gap-2 border-b border-background pb-0.5 text-base text-background transition hover:text-background/75">Explore Solutions <ArrowRight size={15} /></Link>
            </div>
          </div>
        </div>
        <div className="relative z-10 flex w-full flex-wrap items-end justify-between gap-8 px-5 pb-10 sm:px-10 lg:px-[54px] lg:pb-12">
          <div>
            <p className="max-w-[470px] text-[15px] leading-relaxed text-background/90">Enterprise infrastructure — hardware, security, networks, cloud — engineered for organisations that can’t afford downtime.</p>
            <a href="#industries" className="group mt-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-background/75 transition hover:text-background"><span className="grid size-8 place-items-center rounded-full border border-background/40 transition group-hover:border-signal group-hover:text-signal"><ArrowDown size={13} className="animate-bounce" /></span> Scroll Down</a>
          </div>
          <div className="lg:mr-[100px]">
            <p className="text-sm text-background/55 lg:text-base">Trusted by organisations across Nigeria</p>
            <div className="relative z-20 mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
              {[[heroCisco.url, "Cisco"], [heroMicrosoft.url, "Microsoft"], [heroOracle.url, "Oracle"]].map(([src, alt]) => (
                <img key={alt} src={src} alt={alt} className="h-9 w-auto max-w-[30%] object-contain lg:h-[46px]" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="industries" className="scroll-mt-8 bg-muted/50 py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-10 lg:grid-cols-2 lg:gap-24">
          <ScrollReveal><div><Eyebrow>Across critical sectors</Eyebrow><h2 className="mt-5 font-display text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[60px]">Technology that fits the mission.</h2><p className="mt-6 max-w-lg text-base leading-relaxed text-ink/60">Every sector has different risks, workflows and regulations. Our solutions are shaped around those realities from day one.</p></div></ScrollReveal>
          <div className="grid gap-2">
            {industries.map((industry, i) => <div key={industry.name}>
              <Button type="button" variant="ghost" aria-expanded={openIndustry === i} onClick={() => setOpenIndustry(openIndustry === i ? null : i)} className="group flex h-auto min-h-[70px] w-full justify-between rounded-sm bg-background px-5 py-5 text-left text-ink hover:bg-background hover:text-brand">
                <span className="flex items-center gap-6"><span className="font-mono text-xs text-signal">0{i + 1}</span><span className="font-display text-lg font-semibold sm:text-xl">{industry.name}</span></span><span className="grid size-6 shrink-0 place-items-center rounded-full border border-ink text-ink"><ArrowRight size={14} className={`transition-transform ${openIndustry === i ? "rotate-90" : ""}`} /></span>
              </Button>
              <AnimatePresence initial={false}>
                {openIndustry === i && <motion.div key={industry.name} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden"><div className="rounded-sm bg-background px-5 pb-6 pl-14 text-sm leading-relaxed text-ink/60">{industry.detail} <Link to="/industries" className="font-semibold text-brand hover:text-signal">See the sector</Link></div></motion.div>}
              </AnimatePresence>
            </div>)}
          </div>
        </div>
      </section>

      <section id="expertise" className="scroll-mt-8 border-b border-ink/10 py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
          <ScrollReveal><div className="text-center"><Eyebrow>Our expertise</Eyebrow><h2 className="mx-auto mt-5 max-w-[15ch] font-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-[60px] lg:max-w-[960px]">Infrastructure that performs under pressure.</h2><Link to="/contact" className="mt-6 inline-flex items-center gap-2 border-b border-brand pb-1 text-sm font-semibold text-brand transition hover:text-signal">Discuss your requirements <ArrowUpRight size={16} /></Link></div></ScrollReveal>
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {expertise.map((service, i) => { const Icon = service.icon; return <ScrollReveal key={service.name} delay={i * 75}><Link to="/solutions" hash={service.href.split("#")[1] ?? ""} className="group flex min-h-[272px] flex-col rounded-sm bg-muted/35 p-6 transition hover:bg-muted/65">
              <div className="flex items-start justify-between"><span className={`grid size-11 place-items-center rounded-sm ${service.tone === "signal" ? "bg-signal text-signal-foreground" : "bg-brand text-brand-foreground"}`}><Icon size={26} strokeWidth={1.6} /></span><span className="font-mono text-xs text-ink/35">0{i + 1}</span></div>
              <div className="mt-auto pt-8"><h3 className="font-display text-xl font-semibold">{service.name}</h3><p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/60">{service.description}</p></div><ArrowUpRight size={17} className="mt-4 text-brand opacity-0 transition group-hover:opacity-100" />
            </Link></ScrollReveal>; })}
          </div>
        </div>
      </section>

      <section id="approach" className="relative min-h-[600px] overflow-hidden bg-signal text-signal-foreground lg:min-h-[790px]">
        <video ref={approachVideoRef} src={approachVideo.url} poster={approachPoster.url} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-signal/75" aria-hidden="true" />
        <ScrollReveal className="relative mx-auto w-full max-w-[1440px] px-5 pb-28 pt-28 sm:px-10 lg:pt-[140px]"><Eyebrow light>CEO’s word</Eyebrow><blockquote className="mt-5 max-w-[1080px] font-display text-4xl font-semibold leading-[1.12] sm:text-5xl lg:text-[56px]">“Clients don’t evaluate partners by intent. They remember what worked, what broke, and what dragged longer than it should have.”</blockquote><p className="mt-10 text-sm font-semibold">Shola Shonibare</p><p className="mt-1 text-sm text-signal-foreground/75">MD/CEO, Fastspeed Business Solutions</p><div className="mt-10 h-px w-10 bg-signal-foreground/70" /></ScrollReveal>
      </section>

      <section id="partners" className="scroll-mt-8 py-20 lg:py-28"><div className="mx-auto max-w-[1440px] px-5 sm:px-10"><div className="text-center"><Eyebrow>Technology partners</Eyebrow><h2 className="mx-auto mt-5 max-w-[17ch] font-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-[60px] lg:max-w-[800px]">World-class technology. Expertly put to work.</h2></div><div className="mt-14 lg:hidden"><div aria-hidden="true" className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"><div className="flex w-max animate-marquee items-center gap-7 pr-7">{[...partners, ...partners].map((partner, i) => <img key={`${partner.name}-${i}`} src={partner.logo} alt="" className="h-14 w-auto max-w-32 shrink-0 object-contain sm:h-16" />)}</div></div></div><div className="mt-14 hidden grid-cols-5 border-l border-t border-ink/10 lg:grid">{partners.map((partner, i) => <ScrollReveal key={partner.name} delay={(i % 5) * 65} className={`grid min-h-28 place-items-center border-b border-r border-ink/10 px-5 py-6 transition hover:bg-mist sm:min-h-32 ${i % 2 === 0 ? "bg-signal/5" : "bg-background"}`}><img src={partner.logo} alt={`${partner.name} logo`} loading="lazy" className="h-16 w-full max-w-36 object-contain transition-transform duration-300 hover:scale-105 sm:h-[72px]" /></ScrollReveal>)}</div></div></section>

      <section id="case-studies" className="scroll-mt-8 border-t border-ink/10 py-20 lg:py-28"><div className="mx-auto max-w-[1440px] px-5 sm:px-10"><div className="text-center"><Eyebrow>Representative engagements</Eyebrow><h2 className="mx-auto mt-5 max-w-[16ch] font-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-[60px] lg:max-w-[780px]">Built around outcomes, not equipment lists.</h2><p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink/60">How we apply infrastructure, connectivity and security expertise to the sectors in our published client portfolio.</p><Link to="/contact" className="mt-5 inline-flex items-center gap-2 border-b border-brand pb-1 text-sm font-semibold text-brand">Discuss a similar project <ArrowUpRight size={16} /></Link></div><div className="mt-16 border-t border-ink/15">{work.map((item, i) => <ScrollReveal key={item.label} delay={i * 90}><article className="grid gap-6 border-b border-ink/15 py-9 md:grid-cols-[1.5fr_2fr_1fr] md:gap-10 md:py-12"><div><span className="font-mono text-xs text-signal">0{i + 1} / {item.label}</span><h3 className="mt-3 max-w-[20ch] font-display text-2xl font-semibold leading-tight sm:text-3xl">{item.title}</h3></div><div className="flex flex-col justify-center"><p className="max-w-lg text-sm leading-relaxed text-ink/60">{item.description}</p><p className="mt-4 text-xs font-medium text-brand">{item.services}</p><Link to="/solutions" hash={item.href.split("#")[1] ?? ""} className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-ink hover:text-brand">Explore the solution <ArrowUpRight size={16} /></Link></div><div className="flex items-center gap-3 border-t border-ink/15 pt-5 md:justify-center md:border-l md:border-t-0 md:pl-7 md:pt-0"><CountUp value={item.metric} className="font-display text-5xl font-semibold text-brand sm:text-6xl" /><span className="max-w-36 text-xs leading-relaxed text-ink/55">{item.metricLabel}</span></div></article></ScrollReveal>)}</div></div></section>

      <section className="border-t border-ink/10 py-20 lg:py-28" aria-labelledby="results-title"><div className="mx-auto max-w-[1440px] px-5 sm:px-10"><div className="text-center"><Eyebrow>Client outcomes</Eyebrow><h2 id="results-title" className="mx-auto mt-5 max-w-[16ch] font-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-[60px]">Results our clients talk about over time.</h2></div><div className="mt-16 grid gap-4 lg:grid-cols-12">
        <article className="flex min-h-[320px] flex-col justify-between bg-signal p-7 text-signal-foreground lg:col-span-4"><span className="font-display text-4xl">“</span><div><CountUp value="99%" className="block font-display text-3xl font-semibold" /><p className="mt-2 font-display text-xl font-medium">Customer satisfaction</p><p className="mt-4 text-sm text-signal-foreground/75">A measure of the relationships behind every engagement.</p></div></article>
        <img src={engineerImage} alt="Infrastructure engineer working in a data centre" loading="lazy" width={1536} height={1024} className="h-80 w-full object-cover lg:col-span-3 lg:h-full" />
        <article className="flex min-h-[320px] flex-col justify-between border border-ink/10 p-7 lg:col-span-5"><Check size={24} className="text-signal" /><div><CountUp value="98%" className="block font-display text-3xl font-semibold" /><p className="mt-2 font-display text-xl font-medium">Requirements met</p><p className="mt-4 max-w-sm text-sm text-ink/60">Delivery shaped around the brief, not an off-the-shelf equipment list.</p></div></article>
        <article className="flex min-h-[280px] flex-col justify-between border border-ink/10 p-7 lg:col-span-8"><Eyebrow>Experience</Eyebrow><div><p className="font-display text-4xl font-semibold">Since 2018</p><p className="mt-3 max-w-lg text-base text-ink/60">Supporting Nigerian organisations with practical technology, genuine OEM partnerships and accountable delivery from Ikeja, Lagos.</p></div></article>
        <article className="flex min-h-[280px] flex-col justify-between bg-brand p-7 text-brand-foreground lg:col-span-4"><ArrowUpRight size={24} /><div><p className="font-display text-3xl font-semibold">See the work</p><p className="mt-3 text-sm text-brand-foreground/75">Explore the industries, capabilities and clients behind our approach.</p><Link to="/case-studies" className="mt-5 inline-flex items-center gap-2 border-b border-brand-foreground pb-1 text-sm font-semibold">Case studies <ArrowRight size={16} /></Link></div></article>
      </div></div></section>

      <div className="bg-ink text-background"><section id="contact" className="mx-auto grid max-w-[1440px] scroll-mt-8 gap-10 px-5 py-20 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:py-24"><img src={consultationImage} alt="Technology plans being reviewed with business leaders" loading="lazy" width={1536} height={1024} className="aspect-[1.43] w-full object-cover" /><div><Eyebrow light>Connect with us</Eyebrow><h2 className="mt-6 font-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-[60px]">Build infrastructure your organisation can rely on.</h2><p className="mt-6 max-w-lg text-base leading-relaxed text-background/65">Share the challenge. Our team will help define a practical path from requirements to resilient delivery.</p><Link to="/contact" className="mt-12 inline-flex min-h-14 items-center gap-4 rounded-full bg-signal px-6 text-sm font-semibold text-signal-foreground transition hover:bg-signal/85">Book a consultation <ArrowUpRight size={18} /></Link></div></section>
      <footer className="mx-auto max-w-[1440px] border-t border-background/20 px-5 pb-10 pt-16 sm:px-10"><div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1.6fr]"><div><div className="flex items-center gap-2"><img src={logo} alt="" width={42} height={42} className="size-10 object-contain" /><span className="font-display text-lg font-semibold">Fastspeed Solutions</span></div><p className="mt-4 max-w-xs text-sm leading-relaxed text-background/55">Business transformation, infrastructure and automation for organisations across Nigeria.</p></div><div><h3 className="font-display font-semibold">Explore</h3><nav className="mt-5 grid gap-3 text-sm text-background/55"><Link to="/solutions" className="hover:text-background">Solutions</Link><Link to="/case-studies" className="hover:text-background">Case studies</Link><Link to="/industries" className="hover:text-background">Industries</Link></nav></div><div><h3 className="font-display font-semibold">Company</h3><nav className="mt-5 grid gap-3 text-sm text-background/55"><Link to="/partners" className="hover:text-background">Partners</Link><Link to="/about" className="hover:text-background">About us</Link><Link to="/contact" className="hover:text-background">Contact</Link></nav></div><div><h3 className="font-display font-semibold">Services</h3><nav className="mt-5 grid gap-3 text-sm text-background/55"><Link to="/solutions" hash="data-centres" className="hover:text-background">Data centres</Link><Link to="/solutions" hash="cybersecurity" className="hover:text-background">Cybersecurity</Link><Link to="/solutions" hash="cloud-networks" className="hover:text-background">Cloud & networks</Link><Link to="/solutions" hash="enterprise-hardware" className="hover:text-background">Enterprise hardware</Link></nav></div><div><h3 className="font-display font-semibold">Talk to us</h3><div className="mt-5 grid gap-3 text-sm text-background/55"><a href="mailto:sales@fastspeedsolutions.com" className="break-all hover:text-background">sales@fastspeedsolutions.com</a><a href="tel:+2348066659119" className="hover:text-background">+234 (0) 806 665 9119</a><a href="tel:+2349010010540" className="hover:text-background">+234 (0) 90 1001 0540</a><span>8 Agbaoku St, Allen, Ikeja, Lagos</span><div className="flex gap-4"><a href="https://www.linkedin.com/company/fastspeed-business-solutions-ltd" target="_blank" rel="noreferrer" className="hover:text-background">LinkedIn</a><a href="https://x.com/fastspeedBusin1" target="_blank" rel="noreferrer" className="hover:text-background">X</a><a href="https://web.facebook.com/fastspeedsolutions" target="_blank" rel="noreferrer" className="hover:text-background">Facebook</a></div></div></div></div><div className="mt-16 flex flex-col gap-3 border-t border-background/15 pt-6 text-xs text-background/40 sm:flex-row sm:justify-between"><span>© 2026 Fastspeed Solutions. All rights reserved.</span><span>Enterprise technology across Nigeria.</span></div></footer></div>
    </div>
  );
}
