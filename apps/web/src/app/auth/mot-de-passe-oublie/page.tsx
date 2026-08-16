"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase";

export default function ForgotPasswordPage() {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reinitialiser-mot-de-passe`,
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage(
      "Un lien de réinitialisation a été envoyé à votre adresse email."
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
              Mot de passe oublié
            </h1>

            <p className="mt-4 text-sm leading-6 text-[#77665d]">
              Entrez votre adresse email pour recevoir un lien de
              réinitialisation.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <input
              type="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-[#ded2ca] px-5 py-4 outline-none focus:border-[#a98265]"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[#3a2b25] px-7 py-4 text-sm text-white disabled:opacity-50"
            >
              {loading ? "Envoi..." : "Envoyer le lien"}
            </button>
          </form>

          {message && (
            <p className="mt-5 rounded-xl bg-[#f4ebe5] p-4 text-sm text-[#66564e]">
              {message}
            </p>
          )}

          <div className="mt-7 text-center">
            <Link
              href="/connexion"
              className="text-sm text-[#a98265]"
            >
              Retour à la connexion
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}