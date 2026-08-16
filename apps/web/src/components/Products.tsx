import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <section className="bg-[#faf7f5] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#a98265]">
              Notre sélection
            </p>

            <h2 className="mt-3 font-serif text-4xl text-[#30231e] md:text-5xl">
              Nos produits
            </h2>

            <p className="mt-4 max-w-xl text-[#77665d]">
              Découvrez une sélection de soins imaginés pour accompagner votre
              routine beauté.
            </p>
          </div>

          <Link
            href="/produits"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#3a2b25]"
          >
            Voir toute la collection
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}