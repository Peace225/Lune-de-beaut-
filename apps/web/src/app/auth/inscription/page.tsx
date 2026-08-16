"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function InscriptionPage() {
  const supabase = createClient();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage(
      "Compte créé. Vérifiez votre adresse email pour confirmer votre compte."
    );
  }

  return (
    <main className="min-h-screen bg-[#faf7f5] px-6 pb-24 pt-40">
      <div className="mx-auto max-w-md">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#a98265]">
              Lune de Beauté
            </p>

            <h1 className="mt-3 font-serif text-4xl text-[#30231e]">
              Créer un compte
            </h1>

            <p className="mt-3 text-sm text-[#77665d]">
              Rejoignez notre univers beauté.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <input
              type="text"
              placeholder="Nom complet"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full rounded-xl border border-[#ded2ca] px-5 py-4 outline-none focus:border-[#a98265]"
            />

            <input
              type="email"
              placeholder="Adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-[#ded2ca] px-5 py-4 outline-none focus:border-[#a98265]"
            />

            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full rounded-xl border border-[#ded2ca] px-5 py-4 outline-none focus:border-[#a98265]"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[#3a2b25] px-7 py-4 text-sm text-white transition hover:bg-[#a98265] disabled:opacity-50"
            >
              {loading ? "Création..." : "Créer mon compte"}
            </button>
          </form>

          {message && (
            <p className="mt-5 rounded-xl bg-[#f4ebe5] p-4 text-sm text-[#66564e]">
              {message}
            </p>
          )}

          <p className="mt-7 text-center text-sm text-[#77665d]">
            Vous avez déjà un compte ?{" "}
            <Link
              href="/connexion"
              className="font-medium text-[#a98265]"
            >
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}