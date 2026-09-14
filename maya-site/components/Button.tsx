import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  /** color of the text/underline; defaults to the sage accent */
  tone?: "brand" | "ink" | "cream";
  className?: string;
};

/*
  Understated editorial CTA — uppercase, letter-spaced, thin underline that
  settles on hover. No filled button, no pill. (See `.cta-link` in globals.css.)
*/
export default function Button({
  href,
  children,
  tone = "brand",
  className = "",
}: Props) {
  const color =
    tone === "cream" ? "text-cream" : tone === "ink" ? "text-ink" : "text-brand";
  return (
    <Link href={href} className={`cta-link ${color} ${className}`}>
      {children}
    </Link>
  );
}
