export default function TrustedBy() {
  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-400 mb-4 md:mb-6 text-sm md:text-base">
          Trusted by:
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-x-8 lg:gap-x-16 grayscale">
          {["Meta", "Google", "Netflix", "P&G", "PayPal"].map((company) => (
            <span
              key={company}
              className="text-base md:text-lg lg:text-xl font-bold text-gray-400 px-2 md:px-4">
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
