import Image from "next/image";
import Button from "./Button";
import { finalCta } from "@/data/content";

export default function CtaBand() {
  return (
    <section id="contact" className="relative isolate overflow-hidden">
      <Image
        src={finalCta.image}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-ink/88" />
      <div className="mx-auto max-w-3xl px-6 py-28 text-center sm:px-10 md:py-40">
        <p className="eyebrow mb-6 text-cream/70">{finalCta.eyebrow}</p>
        <h2 className="text-[2.5rem] leading-[1.08] text-cream sm:text-5xl md:text-[3.5rem]">
          {finalCta.title}
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-[16px] leading-[1.7] text-cream/80">
          {finalCta.body}
        </p>
        <div className="mt-10 flex justify-center">
          <Button href={finalCta.cta.href} tone="cream">
            {finalCta.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
