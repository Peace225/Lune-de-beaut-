import Hero from "../components/Hero";
import Products from "../components/Products";
import About from "../components/About";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <About />
      <Services />

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#a98265]">
            Votre routine beauté
          </p>

          <h2 className="mt-4 font-serif text-4xl text-[#30231e] md:text-5xl">
            Prenez un moment pour vous.
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-[#77665d]">
            Recevez nos conseils beauté, nos nouveautés et nos inspirations
            directement dans votre boîte mail.
          </p>

          <form className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 rounded-full border border-[#ded2ca] px-6 py-4 text-sm outline-none focus:border-[#a98265]"
            />

            <button
              type="submit"
              className="rounded-full bg-[#3a2b25] px-7 py-4 text-sm text-white transition hover:bg-[#a98265]"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </section>
    </>
  );
}