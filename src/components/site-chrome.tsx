import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../logo/Logo.svg";

const navItems = [
  { label: "Solutions", to: "/solutions" as const },
  { label: "Case studies", to: "/case-studies" as const },
  { label: "Industries", href: "/#industries" },
  { label: "Partners", href: "/#partners" },
  { label: "Why Fastspeed", href: "/#approach" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="animate-fade-up sticky top-4 z-50 flex min-h-16 items-center justify-between rounded-xl border border-glass-border bg-glass px-4 shadow-glass backdrop-blur-xl sm:px-6">
      <Link to="/" className="flex items-center" aria-label="Fastspeed Solutions home">
        <img src={logo} alt="Fastspeed Solutions" width={187} height={44} className="h-10 w-auto" />
      </Link>

      <nav className="hidden items-center gap-7 text-sm font-medium text-ink/70 lg:flex" aria-label="Main navigation">
        {navItems.map((item) =>
          item.to ? (
            <Link
              key={item.label}
              to={item.to}
              className="transition-colors hover:text-brand"
              activeProps={{ className: "text-brand" }}
            >
              {item.label}
            </Link>
          ) : (
            <a key={item.label} href={item.href} className="transition-colors hover:text-brand">
              {item.label}
            </a>
          ),
        )}
      </nav>

      <div className="flex items-center gap-2">
        <Link
          to="/contact"
          hash="content"
          className="hidden rounded-lg bg-signal px-4 py-2.5 text-sm font-semibold text-signal-foreground shadow-lg shadow-signal/20 transition hover:bg-signal/90 sm:inline-flex"
        >
          Book a consultation
        </Link>
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="grid size-10 place-items-center rounded-lg border border-glass-border bg-glass text-ink lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          className="absolute left-0 right-0 top-[calc(100%+0.5rem)] grid gap-1 rounded-xl border border-glass-border bg-background/95 p-3 shadow-glass backdrop-blur-xl lg:hidden"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) =>
            item.to ? (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-brand/5 hover:text-brand"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-brand/5 hover:text-brand"
              >
                {item.label}
              </a>
            ),
          )}
          <Link
            to="/contact"
            hash="content"
            onClick={() => setMenuOpen(false)}
            className="mt-1 rounded-lg bg-signal px-3 py-3 text-center text-sm font-semibold text-signal-foreground"
          >
            Book a consultation
          </Link>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 py-10">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Fastspeed Solutions" width={187} height={44} className="h-10 w-auto" />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/55">
            Business transformation, infrastructure and automation for organisations across Nigeria.
          </p>
        </div>
        <div className="lg:col-span-2">
          <p className="font-display text-sm font-semibold">Explore</p>
          <nav className="mt-4 grid gap-3 text-sm text-ink/55">
            <Link to="/solutions" className="hover:text-brand">
              Solutions
            </Link>
            <Link to="/case-studies" className="hover:text-brand">
              Case studies
            </Link>
            <a href="/#industries" className="hover:text-brand">
              Industries
            </a>
          </nav>
        </div>
        <div className="lg:col-span-2">
          <p className="font-display text-sm font-semibold">Company</p>
          <nav className="mt-4 grid gap-3 text-sm text-ink/55">
            <a href="/#partners" className="hover:text-brand">
              Partners
            </a>
            <a href="/#approach" className="hover:text-brand">
              Why Fastspeed
            </a>
            <Link to="/contact" hash="content" className="hover:text-brand">
              Contact
            </Link>
          </nav>
        </div>
        <div className="lg:col-span-3">
          <p className="font-display text-sm font-semibold">Talk to us</p>
          <div className="mt-4 grid gap-3 text-sm text-ink/55">
            <a href="mailto:sales@fastspeedsolutions.com" className="break-all hover:text-brand">
              sales@fastspeedsolutions.com
            </a>
            <a href="tel:+2348066659119" className="hover:text-brand">
              +234 (0) 806 665 9119
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-3 border-t border-ink/10 pt-6 text-xs text-ink/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Fastspeed Solutions. All rights reserved.</p>
        <p>Enterprise technology across Nigeria.</p>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-mist font-body text-ink">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_5%_4%,color-mix(in_oklab,var(--brand)_18%,transparent),transparent_28%),radial-gradient(circle_at_94%_16%,color-mix(in_oklab,var(--signal)_12%,transparent),transparent_25%),linear-gradient(145deg,var(--mist),var(--background)_58%,color-mix(in_oklab,var(--signal)_4%,var(--mist)))]" />
      <div className="relative mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}
