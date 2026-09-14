import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  id?: string;
  className?: string;
  /** narrower inner column for text-heavy sections */
  narrow?: boolean;
  compact?: boolean;
};

/** Consistent max-width + horizontal gutters + vertical rhythm for every band. */
export default function Section({ children, id, className = "", narrow, compact }: Props) {
  return (
    <section
      id={id}
      className={`${compact ? "py-16 md:py-20 lg:py-24" : "py-24 md:py-32 lg:py-36"} ${className}`}
    >
      <div
        className={`mx-auto w-full ${compact ? "px-4 sm:px-8 lg:px-12" : "px-6 sm:px-10 lg:px-16"} ${
          narrow ? "max-w-3xl" : "max-w-[80rem]"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
