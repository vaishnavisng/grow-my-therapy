export default function PullQuote({ text }: { text: string }) {
  return (
    <section className="bg-sand py-28 md:py-36">
      <div className="mx-auto max-w-4xl px-6 text-center sm:px-10">
        <p className="font-serif text-[1.7rem] leading-[1.3] text-ink sm:text-3xl md:text-[2.5rem] md:leading-[1.25]">
          “{text}”
        </p>
      </div>
    </section>
  );
}
