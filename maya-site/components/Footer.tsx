import Link from "next/link";
import { site, footer } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/75">
      <div className="mx-auto max-w-[80rem] px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand + intro */}
          <div className="md:max-w-sm">
            <p className="font-serif text-2xl text-cream">{site.name}</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-cream/50">
              {site.suffix}
            </p>
            <p className="mt-5 text-sm leading-relaxed">{footer.intro}</p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-cream">
              Explore
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {footer.navigate.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-cream">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-cream">
              Visit
            </h4>
            <address className="mt-4 space-y-2 text-sm not-italic">
              <p>{footer.contact.address}</p>
              <p className="text-cream/55">{footer.contact.areas}</p>
              <Link
                href={site.cta.href}
                className="mt-3 inline-block border-b border-cream/50 pb-0.5 text-xs font-semibold uppercase tracking-[0.14em] text-cream hover:border-cream"
              >
                {site.cta.label}
              </Link>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/15 pt-6 text-xs text-cream/55 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}, PsyD. All rights reserved.
          </p>
          <ul className="flex gap-5">
            {footer.legal.map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-cream">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
