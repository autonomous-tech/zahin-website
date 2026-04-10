"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

const scrollLinks = [
  { label: "The Crisis", href: "#crisis" },
  { label: "Our Vision", href: "#vision" },
  { label: "Why Pakistan", href: "#why-pakistan" },
  { label: "Leadership", href: "#leadership" },
  { label: "Research", href: "#research" },
];

const pageLinks = [
  { label: "White Paper", href: "/whitepaper" },
  { label: "Journal", href: "/journal" },
  { label: "Join", href: "/join" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const navLinks = [...(isHome ? scrollLinks : []), ...pageLinks];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-parchment/80 backdrop-blur-lg shadow-sm" : "bg-transparent"}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-sm text-pakistan-green opacity-60" lang="ur">ذہین</span>
          <span className="font-display text-xl font-bold tracking-tight">zahin</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.href.startsWith("#") ? (
              <a key={link.href} href={link.href} className="text-sm text-deep-ink/70 transition-colors hover:text-pakistan-green">{link.label}</a>
            ) : (
              <Link key={link.href} href={link.href} className="text-sm text-deep-ink/70 transition-colors hover:text-pakistan-green">{link.label}</Link>
            )
          )}
          <Button href="#fund" variant="primary">Fund the Future</Button>
        </div>

        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-deep-ink transition-all ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-deep-ink transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-deep-ink transition-all ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-parchment/95 backdrop-blur-xl border-t border-deep-ink/10 px-6 py-8">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <a key={link.href} href={link.href} className="font-display text-lg text-deep-ink/80 hover:text-pakistan-green" onClick={() => setMobileOpen(false)}>{link.label}</a>
              ) : (
                <Link key={link.href} href={link.href} className="font-display text-lg text-deep-ink/80 hover:text-pakistan-green">{link.label}</Link>
              )
            )}
            <Button href="#fund" variant="primary" className="mt-2">Fund the Future</Button>
          </div>
        </div>
      )}
    </header>
  );
}
