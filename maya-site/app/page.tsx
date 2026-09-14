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
import { validation, services, quote, focus } from "@/data/content";

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
