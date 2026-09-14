import Section from "./Section";
import SectionHeading from "./SectionHeading";

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  terms: string[];
};

export default function KeywordGrid({ id, eyebrow, title, terms }: Props) {
  return (
    <Section id={id} compact>
      <SectionHeading eyebrow={eyebrow} title={title} />
      <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
        {terms.map((term, i) => (
          <li key={term} className="flex items-center gap-6">
            <span className="font-serif text-lg text-ink/90 sm:text-xl">
              {term}
            </span>
            {i < terms.length - 1 && (
              <span aria-hidden className="text-brand/50">
                •
              </span>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
