import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md">
      <Link href={`/produits/${product.id}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-[#f2e9e4]">
          <div className="flex h-full w-full items-center justify-center transition duration-500 group-hover:scale-105">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs text-[#66564e]">
            {product.category}
          </span>
        </div>
      </Link>

      <div className="p-5">
        <Link href={`/produits/${product.id}`}>
          <h3 className="font-serif text-xl text-[#30231e] transition hover:text-[#a98265]">
            {product.name}
          </h3>
        </Link>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#77665d]">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="font-medium text-[#3a2b25]">
            {product.price.toLocaleString("fr-FR")} FCFA
          </span>

          <button className="rounded-full bg-[#3a2b25] p-3 text-white transition hover:bg-[#a98265]">
            <ShoppingBag size={17} />
          </button>
        </div>
      </div>
    </article>
  );
}