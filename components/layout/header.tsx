"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Logo } from "./logo";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { primaryNav } from "@/lib/constants";
import { business } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  // Reset transient nav state when navigating to a new route. Adjusting
  // state during render (rather than in an effect) avoids an extra
  // cascading render, per https://react.dev/learn/you-might-not-need-an-effect
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
    setOpenDropdown(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled
          ? "border-brand-light-grey bg-brand-off-white/95 backdrop-blur supports-[backdrop-filter]:bg-brand-off-white/80"
          : "border-transparent bg-brand-off-white"
      )}
    >
      <div className="mx-auto flex w-full max-w-[1360px] items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenDropdown(true)}
                onMouseLeave={() => setOpenDropdown(false)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium text-brand-dark-grey transition-colors hover:text-brand-black",
                    pathname.startsWith(item.href) && "text-brand-black"
                  )}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
                <div
                  className={cn(
                    "absolute left-0 top-full w-72 pt-3 transition-all duration-150",
                    openDropdown
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-1 opacity-0"
                  )}
                >
                  <div className="rounded-lg border border-brand-light-grey bg-brand-white p-2 shadow-[0_16px_40px_-16px_rgba(28,28,28,0.25)]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-md px-4 py-3 transition-colors hover:bg-brand-off-white"
                      >
                        <span className="block text-sm font-semibold text-brand-black">
                          {child.label}
                        </span>
                        {child.description ? (
                          <span className="mt-0.5 block text-xs text-brand-mid-grey">
                            {child.description}
                          </span>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-4 py-2 text-sm font-medium text-brand-dark-grey transition-colors hover:text-brand-black",
                  pathname === item.href && "text-brand-black"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={business.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-brand-dark-grey transition-colors hover:text-brand-black"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {business.phone}
          </a>
          <Button href="/contact" size="md">
            Request a Quote
          </Button>
        </div>

        <button
          type="button"
          className="flex items-center justify-center rounded-md p-2 text-brand-black lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "fixed inset-x-0 top-[73px] bottom-0 z-40 overflow-y-auto bg-brand-off-white transition-transform duration-300 ease-out lg:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-8" aria-label="Mobile">
          {primaryNav.map((item) => (
            <div key={item.href} className="border-b border-brand-light-grey py-2">
              <Link
                href={item.href}
                className="block py-3 text-lg font-semibold text-brand-black"
              >
                {item.label}
              </Link>
              {item.children ? (
                <div className="flex flex-col gap-1 pb-3 pl-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="rounded-md px-2 py-2 text-sm text-brand-dark-grey"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <div className="mt-6 flex flex-col gap-3">
            <Button href="/contact" size="lg" className="w-full justify-center">
              Request a Quote
            </Button>
            <Button
              href={business.phoneHref}
              variant="secondary"
              size="lg"
              className="w-full justify-center"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {business.phone}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
