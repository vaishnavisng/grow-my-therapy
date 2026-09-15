import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TwoColMedia from "@/components/TwoColMedia";
import CardGrid from "@/components/CardGrid";
import PullQuote from "@/components/PullQuote";
import KeywordGrid from "@/components/KeywordGrid";
import About from "@/components/About";
import ServiceList from "@/components/ServiceList";
import Office from "@/components/Office";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import { validation, services, quote, focus, approach } from "@/data/content";

export default function Home() {
  const serviceCards = services.items.map((s) => ({
    title: s.title,
    body: s.short,
    href: s.href,
    image: s.image,
  }));
  const serviceRows = services.items.map((s) => ({
    title: s.title,
    body: s.long,
    href: s.href,
    image: s.image,
  }));

  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* Intro / validation */}
        <TwoColMedia
          className="bg-sand"
          eyebrow={validation.eyebrow}
          title={validation.title}
          body={validation.body}
          image={validation.image}
          imageAlt="A high-achieving adult pausing in a quiet, sunlit moment"
          link={validation.link}
        />

        {/* Focus areas (3 cards = 3 services) */}
        <CardGrid
          id="services"
          eyebrow={services.eyebrow}
          title={services.title}
          cards={serviceCards}
        />

        <PullQuote text={quote.text} />

        <section id="approach" className="bg-cream py-24 md:py-28 lg:py-32">
          <div className="mx-auto max-w-[80rem] px-6 sm:px-10 lg:px-16">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow text-brand">{approach.eyebrow}</p>
              <h2 className="mt-6 text-[2.1rem] leading-[1.1] sm:text-4xl md:text-[3rem]">
                {approach.title}
              </h2>
              <p className="mt-6 text-[16px] leading-[1.7] text-muted">
                {approach.body}
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {approach.points.map((point) => (
                <div
                  key={point.title}
                  className="rounded-2xl border border-line bg-white p-7 shadow-[0_10px_30px_rgba(25,28,22,0.03)]"
                >
                  <p className="eyebrow text-brand">{point.label}</p>
                  <h3 className="mt-4 text-[1.5rem] leading-tight">{point.title}</h3>
                  <p className="mt-4 text-[16px] leading-[1.7] text-muted">
                    {point.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Concerns keyword grid */}
        <KeywordGrid
          eyebrow={focus.eyebrow}
          title={focus.title}
          terms={focus.terms}
        />

        {/* About Maya + approach + methods */}
        <About />

        {/* Services deep-dive (3) */}
        <ServiceList
          eyebrow="Services"
          title="Anxiety, trauma & burnout therapy in Santa Monica"
          items={serviceRows}
        />

        <Office />

        <Faq />

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
