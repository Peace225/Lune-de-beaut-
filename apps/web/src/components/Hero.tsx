"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

// Liste de tes images dans public/images/
const heroImages = [
  "/images/hero-img.jpg",
   "/images/hero-img-4.jpg",
  "/images/hero-img-2.jpg",
  "/images/hero-img3.jpg",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Défilement automatique toutes les 4 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[720px] w-full overflow-hidden bg-[#f4ebe5]">
      <div className="grid min-h-[720px] w-full lg:grid-cols-2">
        
        {/* Colonne de gauche (Texte rapproché vers la droite) */}
        <div className="flex items-center justify-end px-6 py-24 sm:px-12 lg:pr-16 lg:py-32">
          <div className="max-w-xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-[#a98265]">
              Lune de Beauté
            </p>

            <h1 className="font-serif text-5xl leading-[1.05] text-[#2f241f] sm:text-6xl lg:text-7xl">
              L&apos;éclat
              <br />
              <span className="italic text-[#a98265]">à l&apos;état pur</span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-8 text-[#66564e]">
              Révélez votre beauté naturelle grâce à des soins pensés pour
              sublimer votre peau et accompagner vos rituels de beauté.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/produits"
                className="inline-flex items-center gap-3 rounded-full bg-[#3a2b25] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#a98265]"
              >
                Découvrir nos produits
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/a-propos"
                className="rounded-full border border-[#8e7362] px-7 py-4 text-sm font-medium text-[#3a2b25] transition hover:bg-white"
              >
                Notre histoire
              </Link>
            </div>
          </div>
        </div>

        {/* Colonne de droite (Carrousel image complète) */}
        <div className="relative min-h-[400px] w-full lg:min-h-full h-full flex items-center justify-center p-4 lg:p-8">
          {heroImages.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="h-full w-full object-contain object-center"
              />
            </div>
          ))}

          {/* Indicateurs de points (bullets) en bas à droite de l'image */}
          <div className="absolute bottom-6 right-8 z-20 flex gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-6 bg-white" : "w-2 bg-white/50"
                }`}
                aria-label={`Aller à la diapositive ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}