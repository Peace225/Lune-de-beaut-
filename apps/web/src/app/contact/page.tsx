export default function ContactPage() {
  return (
    <div className="bg-[#faf7f5] px-6 pb-24 pt-40">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-[#a98265]">
            Contact
          </p>

          <h1 className="mt-4 font-serif text-5xl text-[#30231e]">
            Parlons de beauté
          </h1>

          <p className="mt-5 leading-8 text-[#77665d]">
            Une question concernant nos produits ou votre routine ? Envoyez-
            nous un message.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <form className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="grid gap-5">
              <div>
                <label className="mb-2 block text-sm">Nom complet</label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full rounded-xl border border-[#ded2ca] px-5 py-4 outline-none focus:border-[#a98265]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm">Email</label>
                <input
                  type="email"
                  placeholder="vous@email.com"
                  className="w-full rounded-xl border border-[#ded2ca] px-5 py-4 outline-none focus:border-[#a98265]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm">Téléphone</label>
                <input
                  type="tel"
                  placeholder="+225..."
                  className="w-full rounded-xl border border-[#ded2ca] px-5 py-4 outline-none focus:border-[#a98265]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm">Message</label>
                <textarea
                  rows={6}
                  placeholder="Votre message..."
                  className="w-full resize-none rounded-xl border border-[#ded2ca] px-5 py-4 outline-none focus:border-[#a98265]"
                />
              </div>

              <button
                type="submit"
                className="rounded-full bg-[#3a2b25] px-7 py-4 text-sm text-white transition hover:bg-[#a98265]"
              >
                Envoyer le message
              </button>
            </div>
          </form>

          <div className="rounded-3xl bg-[#e9d9cf] p-10">
            <h2 className="font-serif text-3xl text-[#30231e]">
              Lune de Beauté
            </h2>

            <div className="mt-8 space-y-6 text-[#66564e]">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#a98265]">
                  Téléphone
                </p>
                <p className="mt-2">+225 XX XX XX XX XX</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[#a98265]">
                  Email
                </p>
                <p className="mt-2">contact@lunedebeaute.com</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[#a98265]">
                  Horaires
                </p>
                <p className="mt-2">Lundi – Samedi : 08h00 – 18h00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}