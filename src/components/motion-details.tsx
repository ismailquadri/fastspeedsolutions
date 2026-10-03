import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { useScroll, useSpring } from "framer-motion";
import { Button } from "./ui/button";

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
