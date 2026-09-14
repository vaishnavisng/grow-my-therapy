import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { faqs } from "@/data/content";

/** Native <details> accordion — accessible, no JS/library needed. */
export default function Faq() {
  return (
    <Section id="faqs" narrow>
      <SectionHeading eyebrow={faqs.eyebrow} title={faqs.title} />
      <div className="mt-10 divide-y divide-line border-y border-line">
        {faqs.items.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-md text-lg font-medium text-ink outline-none transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-brand/40 [&::-webkit-details-marker]:hidden">
              {item.q}
              <span className="text-accent transition-transform duration-200 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 max-w-2xl text-[16px] leading-[1.65] text-muted">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
