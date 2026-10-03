import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Headphones, Layers, ShieldCheck, Trophy, Users, Handshake } from "lucide-react";
import { PageHero, Eyebrow, InnerFooter } from "../components/inner-chrome";
import { CountUp } from "../components/motion-details";
import heroImage from "../assets/about-hero.jpg";
import introImage from "../assets/fastspeed-engineer.jpg";
import teamImage from "../assets/fastspeed-network-project.jpg";
import consultationImage from "../assets/fastspeed-consultation.jpg";
import ciscoLogo from "../assets/partners/cisco.png";
import fortinetLogo from "../assets/partners/fortinet.png";
import huaweiLogo from "../assets/partners/huawei.png";
import microsoftLogo from "../assets/partners/microsoft.png";
import dellLogo from "../assets/partners/dell.png";
import oracleLogo from "../assets/partners/oracle.png";
import vmwareLogo from "../assets/partners/vmware.png";
import ibmLogo from "../assets/partners/ibm.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Fastspeed Solutions" },
      { name: "description", content: "Fastspeed Business Solutions Limited delivers world-class ICT solutions from Ikeja, Lagos — engineers accelerating business transformation since 2018." },
      { property: "og:title", content: "About Fastspeed Solutions" },
      { property: "og:description", content: "Trailblazers, visionaries and engineers delivering world-class ICT solutions across Nigeria." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  { n: "01", title: "Incorporation", body: "Incorporated in 2018, Fastspeed Solutions has been the backbone behind the deployment of numerous cutting-edge solutions, operating from Ikeja, Lagos." },
  { n: "02", title: "Our goal", body: "To deliver the broadest portfolio of technologies at the core of today's most significant disruptive breakthroughs — at the most cost-effective prices." },
  { n: "03", title: "Our mission", body: "To offer world-class ICT solutions that drive your business goals." },
  { n: "04", title: "Our vision", body: "To be the leading enabler of digital transformation for businesses worldwide, empowering our partners to thrive in an ever-evolving digital landscape." },
];

const differentiators = [
  { icon: Users, title: "Expert team", body: "Highly skilled engineers bringing decades of combined experience in IT solutions." },
  { icon: Handshake, title: "Strong partnerships", body: "Relationships with major OEMs let us deliver world-class, affordable solutions." },
  { icon: ShieldCheck, title: "Quality assurance", body: "99% customer satisfaction and 98% customer requirement fulfilment." },
  { icon: Layers, title: "Comprehensive solutions", body: "From hardware supply to cybersecurity — end-to-end IT for your business." },
  { icon: Headphones, title: "24/7 support", body: "Managed support services keep your infrastructure running around the clock." },
  { icon: Trophy, title: "Proven results", body: "Solutions deployed for organisations across many industries in Nigeria." },
];

const logos = [ciscoLogo, fortinetLogo, huaweiLogo, microsoftLogo, dellLogo, oracleLogo, vmwareLogo, ibmLogo];
const logoNames = ["Cisco", "Fortinet", "Huawei", "Microsoft", "Dell", "Oracle", "VMware", "IBM"];

function AboutPage() {
  return (
    <div className="overflow-x-hidden bg-background font-body text-ink">
      <PageHero image={heroImage} imageAlt="Illustration of engineers collaborating beside server equipment" eyebrow="About Fastspeed" title="Engineers first. Always." intro="We make complex technology work for organisations across Nigeria — with expert delivery grounded in real operational needs." />
      <div id="content" className="mx-auto grid max-w-[1440px] scroll-mt-28 border-t border-editorial-ink/15 px-5 py-8 sm:grid-cols-3 sm:px-10 lg:py-12">{[["2018", "Incorporated"], ["99%", "Customer satisfaction"], ["98%", "Requirements met"]].map(([value, label]) => <div key={label} className="border-b border-editorial-ink/15 py-5 sm:border-b-0 sm:border-r sm:px-7 sm:first:pl-0 sm:last:border-r-0"><CountUp value={value ?? ""} className="font-display text-5xl font-medium text-editorial-red lg:text-6xl" /><p className="mt-2 text-sm text-editorial-ink/60">{label}</p></div>)}</div>

      <section className="py-20 lg:py-28"><div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24"><div className="lg:sticky lg:top-10 lg:self-start"><Eyebrow>Who we are</Eyebrow><h2 className="mt-6 max-w-[14ch] font-display text-4xl font-medium leading-[1.08] sm:text-5xl">Technology that reduces complexity.</h2><Link to="/solutions" className="mt-9 inline-flex items-center gap-2 border-b border-editorial-ink pb-1 text-sm transition hover:text-editorial-red">Explore our solutions <ArrowUpRight size={18} /></Link></div><div><img src={introImage} alt="Fastspeed infrastructure engineer at server racks" loading="lazy" width={1536} height={1024} className="aspect-[4/3] w-full object-cover" /><p className="mt-8 max-w-2xl font-display text-2xl leading-snug sm:text-3xl">Fastspeed Business Solutions Limited accelerates business transformation and automation — so organisations reach their goals, and their ROI, faster.</p><p className="mt-6 max-w-2xl text-base leading-relaxed text-editorial-ink/65">We leverage a portfolio of technologies — including artificial intelligence and Software Defined WAN — to deliver world-class ICT solutions to enterprises, financial institutions and public organisations.</p><p className="mt-4 max-w-2xl text-base leading-relaxed text-editorial-ink/65">We are trailblazers, dreamers, visionaries and engineers who believe in the power of technology to make work easier.</p><p className="mt-4 max-w-2xl text-base leading-relaxed text-editorial-ink/65">The company is led by MD/CEO Shola Shonibare, who has guided Fastspeed since its incorporation in 2018, bringing a background in network infrastructure and cybersecurity.</p><p className="mt-8 border-t border-editorial-ink/20 pt-4 font-mono text-xs uppercase text-editorial-blue">Based in Ikeja, Lagos</p></div></div></section>

      <section className="border-t border-ink/10 bg-muted/50 py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
          <div className=""><Eyebrow>What drives us</Eyebrow><h2 className="mt-5 max-w-[18ch] font-display text-4xl font-medium leading-[1.1] sm:text-5xl lg:text-[60px]">Built with purpose, from day one.</h2></div>
          <div className="mt-16 grid border-t border-editorial-ink/20 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <article key={p.n} className="group flex min-h-[290px] flex-col justify-between border-b border-editorial-ink/15 bg-transparent p-8 pl-0 transition hover:text-editorial-red sm:pr-8">
                <span className="font-mono text-sm text-signal">{p.n}</span>
                <div><h3 className="font-display text-2xl font-semibold">{p.title}</h3><p className="mt-4 text-sm leading-relaxed text-editorial-ink/60 transition">{p.body}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-signal text-signal-foreground">
        <img src={teamImage} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-signal/80" />
        <div className="relative mx-auto max-w-[1440px] px-5 py-28 sm:px-10 lg:py-36">
          <Eyebrow light>Our mission</Eyebrow>
          <blockquote className="mt-6 max-w-[1080px] font-display text-4xl font-semibold leading-[1.12] sm:text-5xl lg:text-[56px]">“To offer world-class ICT solutions that drive your business goals.”</blockquote>
          <div className="mt-10 h-px w-10 bg-signal-foreground/70" />
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div><Eyebrow>Why choose us</Eyebrow><h2 className="mt-5 max-w-[16ch] font-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-[60px]">What sets us apart.</h2></div>
            <p className="max-w-md text-base leading-relaxed text-ink/60">Six commitments shape every engagement, from first consultation to round-the-clock support.</p>
          </div>
          <div className="mt-14 grid border-t border-editorial-ink/20 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map(({ icon: Icon, title, body }, i) => (
              <article key={title} className="border-b border-editorial-ink/15 py-8 pr-8 transition">
                <span className={`grid size-11 place-items-center rounded-full ${i % 2 ? "bg-brand/10 text-brand" : "bg-signal/10 text-signal"}`}><Icon size={20} /></span>
                <h3 className="mt-10 font-display text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 py-16">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10">
          <p className="text-center text-sm text-ink/55">Delivering with the world's leading technology partners</p>
          <div className="mt-8 grid grid-cols-2 items-center gap-6 sm:grid-cols-4 lg:grid-cols-8">
            {logos.map((l, i) => <img key={logoNames[i]} src={l} alt={`${logoNames[i]} logo`} loading="lazy" className="mx-auto h-14 w-full max-w-28 object-contain grayscale transition hover:grayscale-0" />)}
          </div>
        </div>
      </section>

      <InnerFooter image={consultationImage} />
    </div>
  );
}
