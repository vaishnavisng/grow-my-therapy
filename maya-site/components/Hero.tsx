import Image from "next/image";
import Button from "./Button";
import { hero } from "@/data/content";

export default function Hero() {
  return (
    <section className="bg-cream py-12 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-[80rem] items-center gap-10 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16">
        <div className="relative order-2 lg:order-1">
          <div className="relative min-h-[360px] overflow-hidden rounded-2xl lg:min-h-[600px]">
            <Image
              src={hero.imagePrimary}
              alt="Dr. Reynolds' calm, naturally-lit Santa Monica therapy office"
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="order-1 flex items-center py-6 lg:order-2 lg:px-4 lg:py-12">
          <div className="max-w-xl">
            <p className="eyebrow text-brand">{hero.eyebrow}</p>
            <h1 className="mt-8 whitespace-pre-line text-balance text-[2.6rem] leading-[1.03] tracking-[-0.025em] sm:text-[3.3rem] md:text-[4.25rem] md:leading-[1.0]">
              {hero.title}
            </h1>
            <p className="mt-8 max-w-md text-[17px] leading-[1.7] text-muted">
              {hero.tagline}
            </p>
            <div className="mt-10">
              <Button href={hero.cta.href}>{hero.cta.label}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
