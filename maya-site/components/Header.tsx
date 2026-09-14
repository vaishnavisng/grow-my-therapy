"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import { site } from "@/data/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/90 backdrop-blur">
      <div className="mx-auto flex h-24 max-w-[80rem] items-center justify-between px-6 sm:px-10 md:h-28 lg:px-16">
        <Link href="#" className="leading-tight text-ink">
          <span className="block font-serif text-xl font-semibold">{site.name}</span>
          <span className="block text-[0.62rem] font-sans font-medium uppercase tracking-[0.22em] text-muted">
            {site.suffix}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[0.72rem] font-medium uppercase tracking-[0.1em] text-ink/75 transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={site.cta.href}>{site.cta.label}</Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-cream lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
            {site.nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm font-medium uppercase tracking-[0.1em] text-ink/90 hover:bg-brand-soft"
              >
                {item.label}
              </Link>
            ))}
            <Button href={site.cta.href} className="mt-3 w-full">
              {site.cta.label}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
