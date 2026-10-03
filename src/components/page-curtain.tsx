import { useBlocker, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

type Phase = "idle" | "covering" | "revealing";

const PAGES: Record<string, { label: string; className: string }> = {
  "/": { label: "Home", className: "bg-editorial-ink text-background" },
  "/about": { label: "About", className: "bg-signal text-background" },
  "/solutions": { label: "Services", className: "bg-editorial-blue text-background" },
  "/case-studies": { label: "Case Studies", className: "bg-editorial-ink text-background" },
  "/industries": { label: "Industries", className: "bg-signal text-background" },
  "/partners": { label: "Partners", className: "bg-editorial-blue text-background" },
  "/contact": { label: "Contact", className: "bg-background text-editorial-ink" },
};
const FALLBACK = { label: "Fastspeed", className: "bg-signal text-background" };

const EASE = [0.76, 0, 0.24, 1] as const;

export function PageCurtain({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [phase, setPhase] = useState<Phase>("idle");
  const [target, setTarget] = useState(FALLBACK);
  const startingPath = useRef(pathname);
  const blocker = useBlocker({
    shouldBlockFn: ({ current, next }) =>
      current.pathname !== next.pathname &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    withResolver: true,
    enableBeforeUnload: false,
  });

  useEffect(() => {
    if (blocker.status !== "blocked") return;
    startingPath.current = blocker.current.pathname;
    setTarget(PAGES[blocker.next.pathname] ?? FALLBACK);
    setPhase("covering");
  }, [blocker.status, blocker.current, blocker.next]);

  useEffect(() => {
    if (phase === "covering" && pathname !== startingPath.current) {
      setPhase("revealing");
    }
  }, [pathname, phase]);

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={pathname === startingPath.current ? false : { opacity: 0.94, y: 12, scale: 0.99 }}
          animate={phase === "covering"
            ? { opacity: 0.94, y: 0, scale: 0.995 }
            : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: phase === "revealing" ? 0.7 : 0.12, delay: phase === "revealing" ? 0.04 : 0, ease: EASE }}
          exit={{ opacity: 1, transition: { duration: 0 } }}
          style={{ transformOrigin: "50% 0%" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        {phase !== "idle" && (
          <motion.div
            key="page-curtain"
            aria-hidden="true"
            className={`pointer-events-none fixed inset-0 z-[100] flex items-center justify-center overflow-hidden ${target.className}`}
            initial={{ x: "-100%" }}
            animate={{ x: phase === "covering" ? "0%" : "100%" }}
            exit={{ x: "100%" }}
            transition={{ duration: phase === "revealing" ? 0.78 : 0.62, ease: EASE }}
            onAnimationComplete={() => {
              if (phase === "covering" && blocker.status === "blocked") blocker.proceed();
              if (phase === "revealing") setPhase("idle");
            }}
          >
            <motion.span
              className="select-none px-6 text-center font-display text-6xl font-bold tracking-tighter md:text-[9rem] lg:text-[12rem]"
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={phase === "covering"
                ? { opacity: 1, y: 0, filter: "blur(0px)" }
                : { opacity: 0, y: -18, filter: "blur(8px)" }}
              transition={{ duration: phase === "covering" ? 0.42 : 0.24, delay: phase === "covering" ? 0.12 : 0, ease: [0.22, 1, 0.36, 1] }}
            >
              {target.label}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
