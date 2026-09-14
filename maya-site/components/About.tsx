import Image from "next/image";
import Section from "./Section";
import Button from "./Button";
import { about } from "@/data/content";

/*
  About — Maya introducing herself. First-person, editorial, human (not a resume):
  layered portrait + strong heading + credentials meta + personal copy + signature + CTA.
*/
export default function About() {
  return (
    <Section id="about" className="bg-sand">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_1fr] lg:gap-16">
        {/* Portrait with layered accent */}
        <div className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div
            aria-hidden
            className="absolute -bottom-5 -left-5 h-full w-full rounded-2xl bg-brand-soft"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src={about.image}
              alt="Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica"
              fill
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 384px, 90vw"
              className="object-cover object-top"
            />
            <span className="absolute bottom-4 left-4 rounded-full bg-brand px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cream shadow">
              PsyD · Santa Monica
            </span>
          </div>
        </div>

        {/* Copy */}
        <div>
          <p className="eyebrow text-brand mb-4">{about.eyebrow}</p>
          <h2 className="text-[2.1rem] leading-[1.12] sm:text-4xl md:text-[3rem]">
            {about.heading}
          </h2>

          {/* Credentials / meta */}
          <ul className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-[0.12em] text-muted">
            {about.meta.map((m, i) => (
              <li key={m} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="text-accent">·</span>}
                {m}
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-xl font-serif text-[1.4rem] leading-[1.4] text-ink sm:text-[1.6rem]">
            {about.lead}
          </p>
          <p className="mt-5 max-w-xl text-[16px] leading-[1.7] text-muted">
            {about.body}
          </p>

          <ul className="mt-8 flex flex-wrap gap-2.5">
            {about.methods.map((m) => (
              <li
                key={m}
                className="rounded-md border border-line bg-cream px-3.5 py-1.5 text-[13px] text-muted"
              >
                {m}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Button href={about.cta.href}>{about.cta.label}</Button>
            <span className="font-serif text-3xl italic text-brand/70">
              {about.signature}
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
