import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { useScroll, useSpring } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, X } from "lucide-react";
import { Button } from "./ui/button";
import logo from "../../logo/Logo.svg";

type MobileRoute = "/" | "/about" | "/solutions" | "/case-studies" | "/industries" | "/partners";
export type MobileMenuItem = { label: string; to: MobileRoute; hash?: string };

export function MobileMenuOverlay({ controls, items, onClose }: { controls: string; items: MobileMenuItem[]; onClose: () => void }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose]);

  return (
    <div id={controls} role="dialog" aria-modal="true" aria-label="Site navigation" className="mobile-menu-overlay fixed inset-0 z-[100] flex min-h-svh flex-col overflow-y-auto bg-[#111720] px-6 pb-7 pt-6 text-background sm:px-10 sm:pb-10 sm:pt-8 lg:hidden">
      <div className="flex shrink-0 items-center justify-between gap-4">
        <Link to="/" onClick={onClose} aria-label="Fastspeed Solutions home" className="shrink-0">
          <img src={logo} alt="Fastspeed Solutions" width={187} height={44} className="h-10 w-auto" />
        </Link>
        <div className="flex items-center gap-3">
          <Link to="/contact" hash="content" onClick={onClose} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-background px-5 text-sm font-semibold text-editorial-ink transition hover:bg-signal hover:text-background">
            Contact <ArrowUpRight size={16} />
          </Link>
          <button type="button" onClick={onClose} aria-label="Close menu" className="grid size-11 place-items-center rounded-full border border-background/20 text-background/75 transition hover:border-signal hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal">
            <X size={22} strokeWidth={1.6} />
          </button>
        </div>
      </div>

      <nav aria-label="Mobile navigation" className="mt-12 grid shrink-0 sm:mt-14">
        {items.map((item, index) => (
          <Link key={item.label} to={item.to} hash={item.hash} onClick={onClose} style={{ "--menu-delay": `${index * 45}ms` } as CSSProperties} className="mobile-menu-item group flex items-center justify-between border-b border-background/10 py-3.5 font-display text-[clamp(2.25rem,8vw,4rem)] font-medium leading-none tracking-[-0.045em] transition-colors hover:text-signal">
            {item.label}<ArrowUpRight size={22} strokeWidth={1.5} className="ml-4 shrink-0 text-background/30 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-signal sm:size-7" />
          </Link>
        ))}
      </nav>

      <div className="mt-auto grid gap-8 pt-12 sm:grid-cols-[1fr_auto] sm:items-end">
        <div className="grid gap-2 text-lg font-medium tracking-[-0.02em] sm:text-xl">
          <a href="mailto:sales@fastspeedsolutions.com" className="w-fit border-b border-background/20 pb-1 transition hover:border-signal hover:text-signal">sales@fastspeedsolutions.com</a>
          <a href="tel:+2348066659119" className="w-fit text-background/70 transition hover:text-background">+234 (0) 806 665 9119</a>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.16em] text-background/50">
          <a href="https://www.linkedin.com/company/fastspeed-business-solutions-ltd" target="_blank" rel="noreferrer" className="transition hover:text-background">LinkedIn</a>
          <a href="https://x.com/fastspeedBusin1" target="_blank" rel="noreferrer" className="transition hover:text-background">X</a>
          <a href="https://web.facebook.com/fastspeedsolutions" target="_blank" rel="noreferrer" className="transition hover:text-background">Facebook</a>
        </div>
        <p className="border-t border-background/10 pt-4 text-[10px] uppercase tracking-[0.18em] text-background/35 sm:col-span-2">Ikeja, Lagos · Nigeria <span className="float-right">© 2026 Fastspeed Solutions</span></p>
      </div>
    </div>
  );
}

export function MobileMenuToggle({ open, onToggle, controls, light = false }: { open: boolean; onToggle: () => void; controls: string; light?: boolean }) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      aria-controls={controls}
      onClick={onToggle}
      className={`mobile-menu-toggle group relative z-40 size-11 shrink-0 overflow-hidden rounded-sm border backdrop-blur-md transition-[background-color,border-color] duration-300 focus-visible:ring-2 focus-visible:ring-signal lg:hidden ${light ? "border-editorial-ink/25 bg-background/70 text-editorial-ink hover:border-signal hover:bg-background hover:text-editorial-ink" : "border-background/45 bg-editorial-ink/20 text-background hover:border-background hover:bg-editorial-ink/40 hover:text-background"}`}
    >
      <span aria-hidden="true" className="relative block size-5">
        <span className={`absolute left-0 top-[5px] h-[1.5px] w-5 origin-center bg-current transition-transform duration-300 ease-out ${open ? "translate-y-[5px] rotate-45" : "group-hover:-translate-y-0.5"}`} />
        <span className={`absolute right-0 top-[15px] h-[1.5px] w-3.5 origin-center bg-current transition-[width,transform] duration-300 ease-out ${open ? "w-5 -translate-y-[5px] -rotate-45" : "group-hover:w-5"}`} />
      </span>
    </Button>
  );
}

/** Reveals content once as it enters the viewport; stays visible after the first reveal. */
export function ScrollReveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      element.dataset.revealed = "true";
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      element.dataset.revealed = "true";
      observer.disconnect();
    }, { threshold: 0.12, rootMargin: "0px 0px -48px 0px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`scroll-reveal ${className}`} style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}>{children}</div>;
}

export function CountUp({ value, className = "" }: { value: string; className?: string }) {
  const match = /^(\d+)(.*)$/.exec(value);
  const target = match ? Number(match[1]) : null;
  const suffix = match?.[2] ?? "";
  const digits = match?.[1]?.length ?? 0;
  const ref = useRef<HTMLElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (target === null || !ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const element = ref.current;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 1100, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(String(Math.round(target * eased)).padStart(digits, "0") + suffix);
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.35 });
    observer.observe(element);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [value, target, suffix, digits]);

  return <strong ref={ref} aria-label={value} className={`${className} tabular-nums`}>{display}</strong>;
}

export function useHeroParallax() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = (p: number) => {
      const image = imageRef.current;
      const content = contentRef.current;
      if (preference.matches) {
        if (image) image.style.transform = "";
        if (content) { content.style.transform = ""; content.style.opacity = ""; }
        return;
      }
      // Background drifts slowly, foreground text moves faster for depth.
      if (image) image.style.transform = `scale(1.1) translate3d(0, ${p * 22}%, 0)`;
      if (content) {
        content.style.transform = `translate3d(0, ${p * 45}%, 0)`;
        content.style.opacity = String(Math.max(0, 1 - p * 1.4));
      }
    };
    apply(smooth.get());
    const unsubscribe = smooth.on("change", apply);
    return () => { unsubscribe(); apply(0); };
  }, [smooth]);

  return { sectionRef, imageRef, contentRef };
}
