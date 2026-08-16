import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative min-h-[480px] overflow-hidden rounded-[2rem] bg-[#eadbd1]">
          <div className="absolute left-12 top-12 h-72 w-56 rounded-[140px_140px_20px_20px] bg-[#d3b09b]" />

          <div className="absolute bottom-10 right-10 h-52 w-40 rounded-[100px_100px_15px_15px] bg-[#f1e6df] shadow-xl" />

          <div className="absolute bottom-10 left-10 rounded-full bg-white/70 px-5 py-3">
            <span className="font-serif text-[#3a2b25]">
              Nature • Soin • Éclat
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#a98265]">
            Notre philosophie
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#30231e] md:text-5xl">
            Prendre soin de soi est un véritable rituel.
          </h2>

          <p className="mt-7 leading-8 text-[#77665d]">
            Chez Lune de Beauté, nous croyons que chaque peau mérite une
            attention particulière. Notre univers associe douceur, élégance
            et efficacité pour vous offrir une expérience beauté unique.
          </p>

          <p className="mt-5 leading-8 text-[#77665d]">
            Notre ambition est de vous accompagner dans chaque étape de votre
            routine afin de révéler votre éclat naturel.
          </p>

          <div className="mt-8">
            <Link
              href="/a-propos"
              className="inline-flex items-center gap-3 rounded-full bg-[#3a2b25] px-7 py-4 text-sm text-white transition hover:bg-[#a98265]"
            >
              Découvrir notre histoire
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}