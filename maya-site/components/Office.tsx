import Image from "next/image";
import Section from "./Section";
import Button from "./Button";
import { office } from "@/data/content";

/*
  "Our Office" — a section that doesn't exist in the original template.
  Asymmetric editorial composition: heading/copy + large image up top,
  a smaller supporting image paired with a location/details panel below.
  Responsive: asymmetric (lg) → simplified two-column (md) → stacked (mobile).
*/
export default function Office() {
  return (
    <Section id="office" className="bg-sand">
      {/* Top: copy (left) + large image (right) */}
      <div className="grid items-center gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <p className="eyebrow text-brand mb-4">{office.eyebrow}</p>
          <h2 className="text-[2rem] leading-[1.12] sm:text-4xl md:text-[2.9rem]">
            {office.title}
          </h2>
          <p className="mt-7 max-w-xl text-[16px] leading-[1.7] text-muted">
            {office.body}
          </p>
          <p className="mt-4 max-w-xl text-[16px] leading-[1.7] text-muted">
            {office.bodyTwo}
          </p>
          <div className="mt-7">
            <Button href={office.cta.href}>{office.cta.label}</Button>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={office.imageLarge}
              alt="Dr. Reynolds' naturally-lit Santa Monica office with tall windows and warm brick"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom: smaller image (left) + details panel (right) */}
      <div className="mt-8 grid items-stretch gap-10 md:grid-cols-2 lg:mt-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
            <Image
              src={office.imageSmall}
              alt="The quiet, uncluttered consulting room where sessions take place"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Location / session details — editorial block, not a card */}
        <div className="flex flex-col justify-center lg:col-span-5">
          <p className="eyebrow text-brand">Visit the practice</p>

          <dl className="mt-6 divide-y divide-line border-y border-line">
            <div className="py-4">
              <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted">
                Location
              </dt>
              <dd className="mt-1.5 font-serif text-lg text-ink">
                {office.details.location}
              </dd>
            </div>
            <div className="py-4">
              <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted">
                Sessions
              </dt>
              <dd className="mt-1.5 text-[15px] leading-relaxed text-ink">
                {office.details.sessions}
              </dd>
            </div>
            <div className="py-4">
              <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted">
                The space
              </dt>
              <dd className="mt-1.5 text-[15px] leading-relaxed text-ink">
                {office.details.space}
              </dd>
            </div>
          </dl>

          <ul className="mt-6 flex flex-wrap gap-2.5">
            {office.tags.map((t) => (
              <li
                key={t}
                className="rounded-md border border-line bg-cream px-3.5 py-1.5 text-[13px] text-muted"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
