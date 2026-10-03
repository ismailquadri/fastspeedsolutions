import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, Handshake, BadgeCheck } from "lucide-react";
import { PageHero, Eyebrow, InnerFooter } from "../components/inner-chrome";
import { CountUp, ScrollReveal } from "../components/motion-details";
import heroImage from "../assets/partners-hero.jpg";
import ciscoLogo from "../assets/partners/cisco.png";
import fortinetLogo from "../assets/partners/fortinet.png";
import huaweiLogo from "../assets/partners/huawei.png";
import microsoftLogo from "../assets/partners/microsoft.png";
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

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Technology Partners | Fastspeed Solutions" },
      { name: "description", content: "Fastspeed Solutions partners with Cisco, Fortinet, Huawei, Microsoft, Dell, HP, Oracle, Lenovo, VMware, IBM and more to deliver world-class ICT solutions in Nigeria." },
      { property: "og:title", content: "Technology Partners | Fastspeed Solutions" },
      { property: "og:description", content: "World-class technology from global OEMs, expertly put to work across Nigeria." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PartnersPage,
});

const partners = [
  { name: "Cisco", logo: ciscoLogo, focus: "Networking & collaboration" },
  { name: "Fortinet", logo: fortinetLogo, focus: "Cybersecurity" },
  { name: "Huawei", logo: huaweiLogo, focus: "Enterprise infrastructure" },
  { name: "Microsoft", logo: microsoftLogo, focus: "Cloud & productivity" },
  { name: "Dell", logo: dellLogo, focus: "Compute & storage" },
  { name: "HP", logo: hpLogo, focus: "Hardware & print" },
  { name: "Oracle", logo: oracleLogo, focus: "Database & cloud" },
  { name: "Lenovo", logo: lenovoLogo, focus: "Endpoints & servers" },
  { name: "VMware", logo: vmwareLogo, focus: "Virtualisation" },
  { name: "IBM", logo: ibmLogo, focus: "Enterprise systems" },
  { name: "Dell EMC", logo: emcLogo, focus: "Storage & data protection" },
  { name: "APC", logo: apcLogo, focus: "Power & cooling" },
  { name: "CommScope", logo: commscopeLogo, focus: "Structured cabling" },
  { name: "NETSCOUT", logo: netscoutLogo, focus: "Network assurance" },
  { name: "Array Networks", logo: arrayLogo, focus: "Application delivery" },
];

const principles = [
  { icon: Handshake, title: "Direct OEM relationships", body: "Strong partnerships with major OEMs let us source genuine technology at the most cost-effective prices." },
  { icon: BadgeCheck, title: "Platform expertise", body: "Our engineers deploy and support the platforms we supply — from networking to cloud and security." },
  { icon: ShieldCheck, title: "Supported after go-live", body: "Genuine licensing and manufacturer warranty, backed by our 24/7 managed support." },
];

function PartnersPage() {
  return (
    <div className="overflow-x-hidden bg-background font-body text-ink">
      <PageHero
        image={heroImage}
        imageAlt="Data centre corridor with server racks"
        eyebrow="Technology partners"
        title="World-class technology, expertly deployed."
        intro="We work directly with the world's leading technology manufacturers to bring genuine, fully supported solutions to organisations across Nigeria."
        aside={<p className="max-w-[280px] text-sm leading-relaxed text-background/60">Fifteen global OEMs. One accountable local partner.</p>}
      />

      <div id="content" className="mx-auto grid max-w-[1440px] scroll-mt-8 border-t border-editorial-ink/15 px-5 py-8 sm:grid-cols-3 sm:px-10 lg:py-12">
        {[["15", "Global partners"], ["100%", "Genuine licensing"], ["24/7", "Backed support"]].map(([value, label]) => (
          <div key={label} className="border-b border-editorial-ink/15 py-5 sm:border-b-0 sm:border-r sm:px-7 sm:first:pl-0 sm:last:border-r-0">
            <CountUp value={value ?? ""} className="font-display text-5xl font-medium text-editorial-red lg:text-6xl" />
            <p className="mt-2 text-sm text-editorial-ink/60">{label}</p>
          </div>
        ))}
      </div>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
          <div className="max-w-3xl">
            <Eyebrow>The portfolio</Eyebrow>
            <h2 className="mt-5 max-w-[18ch] font-display text-4xl font-medium leading-[1.1] sm:text-5xl lg:text-[60px]">The names behind the work.</h2>
          </div>
          <div className="mt-14 grid grid-cols-2 border-l border-t border-editorial-ink/15 sm:grid-cols-3 lg:grid-cols-5">
            {partners.map((partner) => (
              <ScrollReveal key={partner.name} delay={(partners.indexOf(partner) % 5) * 65} className="border-b border-r border-editorial-ink/15">
                <div className="group flex min-h-40 flex-col items-center justify-center gap-4 px-5 py-8 transition hover:bg-muted/60">
                  <img src={partner.logo} alt={`${partner.name} logo`} loading="lazy" className="h-14 w-full max-w-32 object-contain grayscale transition group-hover:grayscale-0 sm:h-16" />
                  <span className="text-center font-mono text-[11px] uppercase tracking-wide text-editorial-ink/50">{partner.focus}</span>
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
            <h2 className="mt-5 max-w-[18ch] font-display text-4xl font-medium leading-[1.1] sm:text-5xl lg:text-[60px]">Partnerships that protect your investment.</h2>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden border border-editorial-ink/15 bg-editorial-ink/15 sm:grid-cols-3">
            {principles.map((p) => (
              <ScrollReveal key={p.title} delay={principles.indexOf(p) * 90} className="bg-background">
              <div className="h-full p-8 lg:p-10">
                <span className="grid size-12 place-items-center rounded-full border border-editorial-ink/15 text-editorial-blue"><p.icon size={22} /></span>
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
            <Eyebrow light>Source with confidence</Eyebrow>
            <h2 className="mt-6 max-w-[16ch] font-display text-4xl font-medium leading-[1.08] sm:text-5xl">Need a specific platform or vendor?</h2>
          </div>
          <div>
            <p className="max-w-lg text-base leading-relaxed text-background/65">Tell us what you're trying to achieve. We'll recommend the right technology from our partner portfolio — and stand behind it end to end.</p>
            <Link to="/contact" className="group mt-9 inline-flex items-center gap-4 rounded-full bg-signal py-1.5 pl-7 pr-1.5 text-lg text-signal-foreground transition hover:bg-signal/90">
              Speak with an expert <span className="grid size-[52px] place-items-center rounded-full bg-background text-signal transition group-hover:rotate-45"><ArrowUpRight size={20} /></span>
            </Link>
          </div>
        </div>
      </section>

      <InnerFooter cta={false} />
    </div>
  );
}
