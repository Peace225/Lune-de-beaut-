import Services from "../../components/Services";

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <div className="bg-[#faf7f5] px-6 py-24 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-[#a98265]">
          Nos services
        </p>

        <h1 className="mt-4 font-serif text-5xl text-[#30231e]">
          Une expérience beauté complète
        </h1>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#77665d]">
          Découvrez notre approche et les services que nous mettons à votre
          disposition.
        </p>
      </div>

      <Services />
    </div>
  );
}