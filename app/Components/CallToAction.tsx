import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="max-w-[1170px] mx-auto sm:rounded-2xl md:rounded-2xl py-24 bg-gradient-to-br from-indigo-600 to-purple-600 px-4 text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-4"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          Ready to Forge a Stunning Product?
        </h2>
        <p className="text-lg text-white/80 mb-8">
          Reach out and let’s turn your idea into a real, working product.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-indigo-100 transition"
        >
          Start a Project
        </Link>
      </div>
    </section>
  );
}
