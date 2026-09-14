import Image from "next/image";
import Link from "next/link";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

type Item = {
  title: string;
  body: string;
  href?: string;
  image: string;
};

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  items: Item[];
};

/** Editorial numbered rows — number label, large serif title, copy, image,
    separated by thin dividers. Alternating image side. */
export default function ServiceList({ id, eyebrow, title, items }: Props) {
  return (
    <Section id={id}>
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="mt-16">
        {items.map((item, i) => (
          <div
            key={item.title}
            className={`grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-16 ${
              i > 0 ? "border-t border-line" : ""
            }`}
          >
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="relative aspect-[5/4] overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <p className="eyebrow text-brand">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-[1.9rem] leading-tight sm:text-[2.3rem]">
                {item.title}
              </h3>
              <p className="mt-4 max-w-xl text-[16px] leading-[1.7] text-muted">
                {item.body}
              </p>
              {item.href && (
                <Link href={item.href} className="cta-link mt-6 text-brand">
                  Learn more
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
