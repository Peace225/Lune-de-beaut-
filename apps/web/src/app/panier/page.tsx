import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";

export default function PanierPage() {
  return (
    <div className="min-h-[70vh] bg-[#faf7f5] px-6 pb-24 pt-40">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#f0e3da] text-[#a98265]">
          <ShoppingBag size={30} />
        </div>

        <h1 className="mt-7 font-serif text-5xl text-[#30231e]">
          Votre panier
        </h1>

        <p className="mt-5 text-[#77665d]">
          Votre panier est actuellement vide.
        </p>

        <Link
          href="/produits"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#3a2b25] px-7 py-4 text-sm text-white"
        >
          Découvrir les produits
          <ArrowRight size={17} />
        </Link>
      </div>
    </div>
  );
}