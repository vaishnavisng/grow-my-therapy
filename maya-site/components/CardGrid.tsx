import Image from "next/image";
import Link from "next/link";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

type Card = {
  title: string;
  body: string;
  href?: string;
  image: string;
};

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  cards: Card[];
};

/** Editorial 3-up — image, serif title, concise copy. No card chrome. */
export default function CardGrid({ id, eyebrow, title, cards }: Props) {
  return (
    <Section id={id}>
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => (
          <article key={card.title} className="flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
              />
            </div>
            <p className="eyebrow mt-6 text-brand">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 text-2xl leading-tight">{card.title}</h3>
            <p className="mt-3 flex-1 text-[16px] leading-[1.7] text-muted">
              {card.body}
            </p>
            {card.href && (
              <Link href={card.href} className="cta-link mt-5 text-brand">
                Learn more
              </Link>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
