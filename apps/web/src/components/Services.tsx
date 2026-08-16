import { Heart, Sparkles, Leaf, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Soins beauté",
    text: "Des produits pensés pour accompagner votre routine quotidienne.",
  },
  {
    icon: Leaf,
    title: "Beauté naturelle",
    text: "Une approche inspirée par la simplicité et le respect de votre peau.",
  },
  {
    icon: Heart,
    title: "Conseils personnalisés",
    text: "Des recommandations adaptées à vos besoins et à votre routine.",
  },
  {
    icon: ShieldCheck,
    title: "Qualité",
    text: "Nous accordons une attention particulière à la qualité de nos produits.",
  },
];

export default function Services() {
  return (
    <section className="bg-[#f4ebe5] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#a98265]">
            Pourquoi nous choisir
          </p>

          <h2 className="mt-4 font-serif text-4xl text-[#30231e] md:text-5xl">
            Une beauté pensée pour vous
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-2xl bg-white p-7 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f4ebe5] text-[#a98265]">
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 font-serif text-xl text-[#30231e]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#77665d]">
                  {service.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}