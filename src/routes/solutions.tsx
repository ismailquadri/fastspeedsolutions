import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero, Eyebrow, InnerFooter } from "../components/inner-chrome";
import heroImage from "../assets/solutions-hero.jpg";
import serverRoom from "../assets/fastspeed-server-room.jpg";
import engineerImage from "../assets/fastspeed-engineer.jpg";
import networkImage from "../assets/fastspeed-network-project.jpg";
import consultationImage from "../assets/fastspeed-consultation.jpg";
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

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions | Fastspeed Solutions" },
      { name: "description", content: "Data centres, cybersecurity, cloud and networks, and enterprise hardware — end-to-end ICT solutions for organisations across Nigeria." },
      { property: "og:title", content: "Solutions | Fastspeed Solutions" },
      { property: "og:description", content: "From the physical layer to the cloud: enterprise technology designed around your operations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SolutionsPage,
});

const solutions = [
  {
    id: "data-centres", number: "01", title: "Data centres", image: serverRoom,
    alt: "Rows of enterprise servers in a modern data centre",
    summary: "Data centre design and deployment with high-tech, tailor-made setups that leave room for technological advancement.",
    capabilities: ["Raised flooring and suspended ceilings", "Fire proofing of all surfaces", "Environmental and data centre monitoring", "Data centre management solutions", "Structured cabling", "Civil and concrete works"],
  },
  {
    id: "cybersecurity", number: "02", title: "Cybersecurity", image: engineerImage,
    alt: "Infrastructure engineer working at server racks",
    summary: "Protection for your data, users, network, applications, mobile devices and cloud — plus 24/7 CyberSoc monitoring.",
    capabilities: ["CyberSoc managed services, 24/7 monitoring and incident response", "Vulnerability assessment and penetration testing (VAPT)", "Data loss prevention — endpoint, network and cloud", "Anti-fraud and anti-money laundering (AML) for financial institutions", "Governance, risk and compliance", "NGFW, NAC, WAF, EDR and DDoS protection"],
  },
  {
    id: "cloud-networks", number: "03", title: "Cloud & networks", image: networkImage,
    alt: "Engineer working with enterprise networking equipment",
    summary: "Scalable networks for small, medium and enterprise organisations, and cloud services for storage, backup and hosting.",
    capabilities: ["LAN, WAN, campus LAN and MAN", "Wireless (WLAN) and storage area networks (SAN)", "IaaS, PaaS and SaaS", "Data replication, backup and recovery", "Application servers and mail services", "Software Defined WAN"],
  },
  {
    id: "enterprise-hardware", number: "04", title: "Enterprise hardware", image: serverRoom,
    alt: "Enterprise-grade server infrastructure",
    summary: "High-quality devices from major OEM partners at the most cost-effective prices.",
    capabilities: ["Servers and server racks", "Desktop computers", "Laptops and mobile devices", "Printers and peripherals", "Networking equipment", "Genuine OEM sourcing"],
  },
  {
    id: "virtualisation-apps", number: "05", title: "Virtualisation & business applications", image: networkImage,
    alt: "Enterprise networking equipment supporting virtualised workloads",
    summary: "Lower costs and simpler management through virtualisation, with the Microsoft business applications teams rely on.",
    capabilities: ["Server, desktop and storage virtualisation", "Virtualisation security and management", "Office 365 and Microsoft SharePoint", "Microsoft Dynamics NAV and CRM", "Database management", "Software testing and project management"],
  },
  {
    id: "support-training", number: "06", title: "Managed support & training", image: engineerImage,
    alt: "Engineer providing hands-on infrastructure support",
    summary: "Day-to-day ICT support that saves time and money, plus professional training and capacity building.",
    capabilities: ["In-house premium support", "Remote and on-call support", "Regular maintenance", "Hardware and software training", "Executive and IT security training", "Capacity building for government and private organisations"],
  },
  {
    id: "telecom", number: "07", title: "Telecom services", image: serverRoom,
    alt: "Telecommunications infrastructure equipment",
    summary: "Cell site deployment following industry best practice, from site survey to commissioning.",
    capabilities: ["Microwave radio links for cell sites", "BTS installation and commissioning", "GSM antennas and RF cabling", "Cell site sweep (SWR) testing", "Site survey and design", "Tower construction and civil works"],
  },
];

const partners = [
  ["Cisco", ciscoLogo], ["Fortinet", fortinetLogo], ["Huawei", huaweiLogo], ["Microsoft", microsoftLogo], ["Dell", dellLogo],
  ["HP", hpLogo], ["Oracle", oracleLogo], ["Lenovo", lenovoLogo], ["VMware", vmwareLogo], ["IBM", ibmLogo],
] as const;

function SolutionsPage() {
  return (
    <div className="overflow-x-hidden bg-background font-body text-editorial-ink">
      <PageHero image={heroImage} imageAlt="Illustration of an engineer working with data centre network equipment" eyebrow="Fastspeed services" title="Every layer of enterprise IT." intro="From the physical layer to the cloud, we simplify complex technology and make it work for your organisation." />
      <section id="content" aria-label="Explore solutions" className="mx-auto max-w-[1440px] scroll-mt-8 px-5 pb-16 pt-10 sm:px-10 lg:pb-20 lg:pt-16">
        <div className="grid border-t border-editorial-ink/15 md:grid-cols-2 md:gap-x-16">
          {solutions.map((solution) => (
            <a key={solution.id} href={`#${solution.id}`} className="group relative flex min-h-48 flex-col justify-between border-b border-editorial-ink/15 py-7 transition-colors hover:border-editorial-red lg:min-h-56 lg:py-9">
              <div className="flex items-center justify-between"><span className="font-mono text-sm text-editorial-blue">{solution.number} / 0{solutions.length}</span><ArrowUpRight size={23} className="text-editorial-blue transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-editorial-red" /></div>
              <div><h2 className="font-display text-3xl font-medium sm:text-4xl">{solution.title}</h2><p className="mt-3 max-w-md text-sm leading-relaxed text-editorial-ink/60">{solution.summary}</p></div>
            </a>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-between gap-4 border-t border-editorial-ink pt-7"><span className="font-mono text-xs uppercase text-editorial-ink/45">Seven connected capabilities</span><a href="#data-centres" className="inline-flex items-center gap-3 text-sm font-medium transition hover:text-editorial-red">Explore capabilities <ArrowUpRight size={18} /></a></div>
      </section>

      <section className="bg-editorial-ink py-16 text-background lg:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div><Eyebrow light>How we work</Eyebrow><h2 className="mt-6 max-w-[17ch] font-display text-4xl font-medium leading-[1.05] sm:text-5xl">One partner. Every layer of your infrastructure.</h2></div>
          <div className="flex flex-col justify-end"><p className="max-w-xl text-lg leading-relaxed text-background/70">Most organisations juggle separate vendors for hardware, networks, cloud and security. We bring them under one accountable team — sourcing genuine OEM technology, engineering it around your operations and supporting it after go-live.</p><Link to="/contact" className="mt-8 inline-flex w-fit items-center gap-2 border-b border-background/60 pb-1 transition hover:text-signal">Discuss your requirements <ArrowUpRight size={18} /></Link></div>
        </div>
      </section>

      <section aria-label="Solutions in detail">
        {solutions.map((solution, index) => (
          <article id={solution.id} key={solution.id} className={`scroll-mt-8 border-b border-editorial-ink/10 py-16 lg:py-24 ${index % 2 ? "bg-muted/40" : "bg-background"}`}>
            <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-20">
              <div className="flex flex-col justify-between"><div><span className="font-mono text-sm text-editorial-blue">{solution.number} / 0{solutions.length}</span><h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] sm:text-5xl lg:text-6xl">{solution.title}</h2><p className="mt-6 max-w-md text-lg leading-relaxed text-editorial-ink/70">{solution.summary}</p>{solution.id === "cybersecurity" && <Link to="/industries" hash="aml-infrastructure" className="mt-6 inline-flex items-center gap-2 border-b border-editorial-red pb-1 text-sm font-medium text-editorial-red transition hover:text-editorial-blue">AML infrastructure for financial services <ArrowUpRight size={16} /></Link>}</div><Link to="/contact" className="mt-8 inline-flex w-fit items-center gap-2 border-b border-editorial-ink pb-1 text-sm font-medium transition hover:border-editorial-red hover:text-editorial-red">Discuss this solution <ArrowUpRight size={18} /></Link></div>
              <div><img src={solution.image} alt={solution.alt} loading="lazy" width={1536} height={1024} className="aspect-[16/9] w-full object-cover" /><ul className="mt-6 grid gap-x-6 border-t border-editorial-ink/15 sm:grid-cols-2">{solution.capabilities.map((capability) => <li key={capability} className="flex items-start gap-3 border-b border-editorial-ink/15 py-4 text-sm leading-relaxed"><Check size={16} className="mt-0.5 shrink-0 text-editorial-red" />{capability}</li>)}</ul></div>
            </div>
          </article>
        ))}
      </section>

      <section className="py-20 lg:py-28"><div className="mx-auto max-w-[1440px] px-5 sm:px-10"><div className="flex flex-wrap items-end justify-between gap-8"><div><Eyebrow>Technology partners</Eyebrow><h2 className="mt-5 font-display text-4xl font-medium sm:text-5xl">Global platforms. Local delivery.</h2></div><p className="max-w-md leading-relaxed text-editorial-ink/65">We build on platforms from leading manufacturers, backed by local delivery and accountability.</p></div><div className="mt-14 grid grid-cols-2 border-l border-t border-editorial-ink/10 sm:grid-cols-5">{partners.map(([name, logo]) => <div key={name} className="grid min-h-32 place-items-center border-b border-r border-editorial-ink/10 px-5 py-6"><img src={logo} alt={`${name} logo`} loading="lazy" className="h-16 w-full max-w-32 object-contain grayscale transition hover:grayscale-0" /></div>)}</div></div></section>
      <InnerFooter image={consultationImage} />
    </div>
  );
}
