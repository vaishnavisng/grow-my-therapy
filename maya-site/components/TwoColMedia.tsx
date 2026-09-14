import Image from "next/image";
import Link from "next/link";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  link?: { label: string; href: string };
  /** image on the right (default) or left */
  reverse?: boolean;
  className?: string;
};

/** Reusable text + image two-column band (Validation, How-We-Work). */
export default function TwoColMedia({
  id,
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  link,
  reverse,
  className = "",
}: Props) {
  return (
    <Section id={id} className={className}>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={reverse ? "lg:order-2" : ""}>
          <SectionHeading eyebrow={eyebrow} title={title} />
          <p className="mt-7 max-w-xl text-[16px] leading-[1.7] text-muted">
            {body}
          </p>
          {link && (
            <Link href={link.href} className="cta-link mt-8 text-brand">
              {link.label}
            </Link>
          )}
        </div>
        <div className={reverse ? "lg:order-1" : ""}>
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
