const articles = [
  {
    title: "Comment construire une routine beauté simple ?",
    category: "Routine",
  },
  {
    title: "Pourquoi hydrater sa peau quotidiennement ?",
    category: "Conseils",
  },
  {
    title: "Les étapes essentielles pour prendre soin de sa peau",
    category: "Beauté",
  },
];

export default function ConseilsPage() {
  return (
    <div className="bg-[#faf7f5] px-6 pb-24 pt-40">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-[#a98265]">
            Magazine beauté
          </p>

          <h1 className="mt-4 font-serif text-5xl text-[#30231e]">
            Conseils beauté
          </h1>

          <p className="mt-5 leading-8 text-[#77665d]">
            Retrouvez nos conseils, astuces et inspirations pour prendre soin
            de votre peau au quotidien.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="overflow-hidden rounded-2xl bg-white"
            >
              <div className="h-56 bg-[#e6d4c8]" />

              <div className="p-7">
                <span className="text-xs uppercase tracking-wider text-[#a98265]">
                  {article.category}
                </span>

                <h2 className="mt-3 font-serif text-2xl leading-tight text-[#30231e]">
                  {article.title}
                </h2>

                <button className="mt-6 text-sm font-medium text-[#3a2b25]">
                  Lire l'article →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}