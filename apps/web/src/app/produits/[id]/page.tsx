import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { products } from "../../../data/products";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const product = products.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-[#faf7f5] px-6 pb-24 pt-40">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/produits"
          className="inline-flex items-center gap-2 text-sm text-[#77665d]"
        >
          <ArrowLeft size={17} />
          Retour aux produits
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          <div className="flex min-h-[600px] items-center justify-center rounded-3xl bg-[#f0e4dc]">
            <div className="flex h-96 w-64 items-center justify-center rounded-[130px_130px_25px_25px] bg-[#ddc5b6] shadow-xl">
              <div className="text-center">
                <p className="font-serif text-3xl text-[#3a2b25]">Lune</p>
                <p className="text-xs uppercase tracking-[0.3em] text-[#a98265]">
                  de Beauté
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-sm uppercase tracking-[0.2em] text-[#a98265]">
              {product.category}
            </span>

            <h1 className="mt-4 font-serif text-5xl text-[#30231e]">
              {product.name}
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#77665d]">
              {product.description}
            </p>

            <p className="mt-8 text-2xl font-medium text-[#3a2b25]">
              {product.price.toLocaleString("fr-FR")} FCFA
            </p>

            <button className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#3a2b25] px-8 py-4 text-sm text-white transition hover:bg-[#a98265]">
              <ShoppingBag size={18} />
              Ajouter au panier
            </button>

            <div className="mt-10 border-t border-[#ded2ca] pt-7">
              <h2 className="font-serif text-xl">Conseils d'utilisation</h2>

              <p className="mt-3 leading-7 text-[#77665d]">
                Utilisez ce produit dans le cadre de votre routine beauté
                habituelle en suivant les recommandations adaptées à votre
                type de peau.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}