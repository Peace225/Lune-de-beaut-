export default function AboutPage() {
  return (
    <div className="bg-white px-6 pb-24 pt-40">
      <div className="mx-auto max-w-6xl">
        {/* En-tête de la page */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#a98265]">
            À propos
          </p>

          <h1 className="mt-4 font-serif text-5xl text-[#30231e]">
            L'histoire de Lune de Beauté
          </h1>

          <p className="mt-7 text-lg leading-8 text-[#77665d]">
            Une maison de beauté imaginée autour d'une idée simple : révéler
            ce qui existe déjà naturellement en vous.
          </p>
        </div>

        {/* Grande image éditoriale d'ambiance */}
        <div className="mt-16 overflow-hidden rounded-3xl shadow-xl">
          <div className="relative h-[400px] w-full sm:h-[500px]">
            <img
              src="/images/here-about.jpg"
              alt="Lune de Beauté - Ambiance et soins"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>

        {/* Grille des 3 sections (Vision, Mission, Valeurs) avec images */}
        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {/* Notre vision */}
          <div className="group overflow-hidden bg-[#f4ebe5] p-6 transition hover:shadow-md">
            <div className="mb-6 h-48 w-full overflow-hidden">
              <img
                src="/images/about-hero.jpg"
                alt="Notre vision"
                className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
              />
            </div>
            <h2 className="font-serif text-2xl text-[#30231e]">Notre vision</h2>
            <p className="mt-4 text-sm leading-7 text-[#77665d]">
              Faire de chaque moment de soin une expérience de bien-être et
              de confiance en soi.
            </p>
          </div>

          {/* Notre mission */}
          <div className="group overflow-hidden bg-[#f4ebe5] p-6 transition hover:shadow-md">
            <div className="mb-6 h-48 w-full overflow-hidden">
              <img
                src="/images/about-mission.jpg"
                alt="Notre mission"
                className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
              />
            </div>
            <h2 className="font-serif text-2xl text-[#30231e]">Notre mission</h2>
            <p className="mt-4 text-sm leading-7 text-[#77665d]">
              Proposer des solutions beauté accessibles et adaptées aux
              besoins de chaque personne.
            </p>
          </div>

          {/* Nos valeurs */}
          <div className="group overflow-hidden bg-[#f4ebe5] p-6 transition hover:shadow-md">
            <div className="mb-6 h-48 w-full overflow-hidden">
              <img
                src="/images/about-values.jpg"
                alt="Nos valeurs"
                className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
              />
            </div>
            <h2 className="font-serif text-2xl text-[#30231e]">Nos valeurs</h2>
            <p className="mt-4 text-sm leading-7 text-[#77665d]">
              Authenticité, élégance, qualité, écoute et respect de la
              beauté naturelle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}