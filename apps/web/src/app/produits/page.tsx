import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";

export default function ProduitsPage() {
  return (
    <div className="bg-[#faf7f5] px-6 pb-24 pt-40">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-[#a98265]">
            Boutique
          </p>

          <h1 className="mt-4 font-serif text-5xl text-[#30231e]">
            Nos produits
          </h1>

          <p className="mt-5 leading-8 text-[#77665d]">
            Découvrez notre sélection de produits pour prendre soin de votre
            peau et révéler votre beauté naturelle.
          </p>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}