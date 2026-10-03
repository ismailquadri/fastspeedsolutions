import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, ChevronDown } from "lucide-react";
import { useState, type ReactNode } from "react";
import logo from "../../logo/Logo.svg";
import { MobileMenuOverlay, MobileMenuToggle, useHeroParallax } from "./motion-details";

// Shared chrome for inner pages — mirrors the homepage hero/header/footer styling.

const nav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/solutions", caret: true },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Industries", to: "/industries" },
  { label: "Partners", to: "/partners" },
] as const;

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-widest ${light ? "text-background/75" : "text-signal"}`}>
      <span className="size-1.5 rounded-full bg-signal" />
      {children}
    </span>
  );
}

export function InnerHeader({ light = false }: { light?: boolean }) {
  const [open, setOpen] = useState(false);
  const linkCls = `relative py-3 transition ${light ? "hover:text-signal" : "hover:text-background"}`;
  const activeCls = "!text-signal after:absolute after:-left-5 after:-right-5 after:-bottom-1.5 after:h-0.5 after:bg-signal";
  return (
    <header className={`fixed inset-x-0 top-0 z-50 flex w-full items-center justify-between gap-5 border-b px-5 py-6 backdrop-blur-xl sm:px-10 lg:px-6 lg:py-7 xl:px-[22px] ${light ? "border-editorial-ink/10 bg-background/95" : "border-background/10 bg-editorial-ink/80"}`}>
      <Link to="/" aria-label="Fastspeed Solutions home" className="flex shrink-0 items-center">
        <img src={logo} alt="Fastspeed Solutions" width={187} height={44} className="h-10 w-auto lg:h-11" />
      </Link>
      <nav aria-label="Main navigation" className={`hidden items-center gap-11 text-[15px] font-normal lg:flex xl:mr-24 ${light ? "text-editorial-ink/75" : "text-background/80"}`}>
        {nav.map((item) => (
          <Link key={item.label} to={item.to} className={`${linkCls} ${"caret" in item ? "inline-flex items-center gap-1.5" : ""}`} activeOptions={{ exact: item.to === "/" }} activeProps={{ className: activeCls }}>
            {item.label} {"caret" in item && <ChevronDown size={16} />}
          </Link>
        ))}
      </nav>
      <Link to="/contact" hash="content" className={`hidden shrink-0 rounded-full px-8 py-3.5 text-[15px] font-medium transition hover:bg-signal hover:text-signal-foreground lg:inline-flex ${light ? "bg-editorial-ink text-background" : "bg-background text-ink"}`}>Talk to us</Link>
      <MobileMenuToggle open={open} onToggle={() => setOpen(!open)} controls="inner-mobile-nav" light={light} />
      {open && <MobileMenuOverlay controls="inner-mobile-nav" items={nav.map(({ label, to }) => ({ label, to }))} onClose={() => setOpen(false)} />}
    </header>
  );
}

export function EditorialIntro({ eyebrow, title, intro, index, children }: { eyebrow: string; title: ReactNode; intro: string; index: string; children?: ReactNode }) {
  return (
    <>
      <InnerHeader light />
      <div aria-hidden="true" className="h-[88px] shrink-0 lg:h-[100px]" />
      <section className="mx-auto max-w-[1440px] px-5 pb-14 pt-10 sm:px-10 lg:pb-20 lg:pt-16">
        <div className="border-t border-editorial-ink pt-6">
          <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-widest text-signal"><span>{eyebrow}</span><span className="font-mono text-editorial-ink/45">{index} / Fastspeed</span></div>
          <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[minmax(0,1.8fr)_minmax(240px,0.7fr)] lg:items-end lg:gap-16">
            <h1 className="max-w-[1000px] font-display text-[clamp(3.4rem,6.2vw,6.5rem)] font-medium leading-[0.98] text-editorial-ink">{title}</h1>
            <p className="max-w-md text-lg leading-snug text-editorial-ink/70 lg:pb-2 lg:text-xl">{intro}</p>
          </div>
          {children}
        </div>
      </section>
    </>
  );
}

export function PageHero({ image, imageAlt, eyebrow, title, intro, aside, compact = false }: { image: string; imageAlt: string; eyebrow: string; title: ReactNode; intro: string; aside?: ReactNode; compact?: boolean }) {
  const { sectionRef, imageRef, contentRef } = useHeroParallax();
  return (
    <section ref={sectionRef} className={`relative flex flex-col overflow-hidden bg-editorial-ink text-background ${compact ? "min-h-[590px] lg:min-h-[650px]" : "min-h-[680px] lg:min-h-[760px]"}`}>
      <img ref={imageRef} src={image} alt={imageAlt} width={1920} height={1088} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[35%_center] lg:object-center" />
      <div className="inner-hero-overlay absolute inset-0" aria-hidden="true" />
      <InnerHeader />
      <div aria-hidden="true" className="h-[88px] shrink-0 lg:h-[100px]" />
      <div ref={contentRef} className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-end px-5 pb-12 pt-16 will-change-transform sm:px-10 lg:pb-14">
        <div className="animate-fade-up">
          <Eyebrow light>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-[18ch] font-display text-[44px] font-medium leading-[1.06] sm:text-6xl lg:max-w-[980px] lg:text-[76px]">{title}</h1>
        </div>
        <div className="mt-12 flex flex-wrap items-end justify-between gap-8 border-t border-background/20 pt-8">
          <div>
            <p className="max-w-[560px] text-lg leading-relaxed text-background/85">{intro}</p>
            <a href="#content" className="mt-4 inline-flex items-center gap-4 text-lg text-background"><ArrowDown size={22} /> Scroll Down</a>
          </div>
          {aside}
        </div>
      </div>
    </section>
  );
}

export function InnerFooter({ image, cta = true }: { image?: string; cta?: boolean }) {
  return (
    <div className="bg-ink text-background">
      {cta && (
        <section className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:py-24">
          {image && <img src={image} alt="Technology plans being reviewed with business leaders" loading="lazy" width={1536} height={1024} className="aspect-[1.43] w-full object-cover" />}
          <div className={image ? "" : "lg:col-span-2"}>
            <Eyebrow light>Connect with us</Eyebrow>
            <h2 className="mt-6 max-w-[18ch] font-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-[60px]">Build infrastructure your organisation can rely on.</h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-background/65">Share the challenge. Our team will help define a practical path from requirements to resilient delivery.</p>
            <Link to="/contact" hash="content" className="group mt-12 inline-flex items-center gap-4 rounded-full bg-signal py-1.5 pl-7 pr-1.5 text-lg text-signal-foreground transition hover:bg-signal/90">Speak with an expert <span className="grid size-[52px] place-items-center rounded-full bg-background text-signal transition group-hover:rotate-45"><ArrowUpRight size={20} /></span></Link>
          </div>
        </section>
      )}
      <footer className="mx-auto max-w-[1440px] border-t border-background/20 px-5 pb-10 pt-16 sm:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1.6fr]">
          <div>
            <div className="flex items-center"><img src={logo} alt="Fastspeed Solutions" width={187} height={44} className="h-10 w-auto" /></div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/55">Business transformation, infrastructure and automation for organisations across Nigeria.</p>
          </div>
          <div><h3 className="font-display font-semibold">Explore</h3><nav className="mt-5 grid gap-3 text-sm text-background/55"><Link to="/solutions" className="hover:text-background">Solutions</Link><Link to="/case-studies" className="hover:text-background">Case studies</Link><Link to="/industries" className="hover:text-background">Industries</Link></nav></div>
          <div><h3 className="font-display font-semibold">Company</h3><nav className="mt-5 grid gap-3 text-sm text-background/55"><Link to="/about" className="hover:text-background">About us</Link><Link to="/partners" className="hover:text-background">Partners</Link><Link to="/contact" hash="content" className="hover:text-background">Contact</Link></nav></div>
          <div><h3 className="font-display font-semibold">Services</h3><nav className="mt-5 grid gap-3 text-sm text-background/55"><Link to="/solutions" hash="data-centres" className="hover:text-background">Data centres</Link><Link to="/solutions" hash="cybersecurity" className="hover:text-background">Cybersecurity</Link><Link to="/solutions" hash="cloud-networks" className="hover:text-background">Cloud & networks</Link><Link to="/solutions" hash="enterprise-hardware" className="hover:text-background">Enterprise hardware</Link></nav></div>
          <div><h3 className="font-display font-semibold">Talk to us</h3><div className="mt-5 grid gap-3 text-sm text-background/55"><a href="mailto:sales@fastspeedsolutions.com" className="break-all hover:text-background">sales@fastspeedsolutions.com</a><a href="tel:+2348066659119" className="hover:text-background">+234 (0) 806 665 9119</a><a href="tel:+2349010010540" className="hover:text-background">+234 (0) 90 1001 0540</a><span>8 Agbaoku St, Allen, Ikeja, Lagos</span><div className="flex gap-4"><a href="https://www.linkedin.com/company/fastspeed-business-solutions-ltd" target="_blank" rel="noreferrer" className="hover:text-background">LinkedIn</a><a href="https://x.com/fastspeedBusin1" target="_blank" rel="noreferrer" className="hover:text-background">X</a><a href="https://web.facebook.com/fastspeedsolutions" target="_blank" rel="noreferrer" className="hover:text-background">Facebook</a></div></div></div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-background/15 pt-6 text-xs text-background/40 sm:flex-row sm:justify-between"><span>© 2026 Fastspeed Solutions. All rights reserved.</span><span>Enterprise technology across Nigeria.</span></div>
      </footer>
    </div>
  );
}
