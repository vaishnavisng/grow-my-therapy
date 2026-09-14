type Props = {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className = "",
}: Props) {
  return (
    <div
      className={`${align === "center" ? "mx-auto text-center" : ""} max-w-2xl ${className}`}
    >
      {eyebrow && <p className="eyebrow text-brand mb-4">{eyebrow}</p>}
      <h2 className="text-[2rem] leading-[1.15] sm:text-4xl md:text-[3rem]">
        {title}
      </h2>
    </div>
  );
}
